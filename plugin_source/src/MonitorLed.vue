/* eslint-disable prettier/prettier */
<template>
    <div>
        <div class="monitor-led" :monitored_object_id="monitored_object_id">
            {{ monitor_led_data.ledText }}
        </div>
    </div>
</template>

<script lang="ts">
import ServerLedData from "../src/typescript_source/concrete/ServerLedData";
import FetchRunner from "../src/typescript_source/concrete/FetchRunner";
import SourceData from "../src/typescript_source/concrete/SourceData";
import Model from "../src/typescript_source/concrete/Model";
import { defineComponent } from "vue";
export default defineComponent( {
    name: "monitor-led",    
    props: {
        monitored_object_id:  { type: String, default: "" },
        data_source_location: { type: String, default: "" }},    
    data: () => ({ monitor_led_data: new ServerLedData()  }),
    mounted() { this.start(); },
    methods: {
        start() {
            let source_query_config = { object_view_id: this.monitored_object_id, object_data: {}};
            let model              = new Model( new SourceData({ Runner: FetchRunner, url: this.data_source_location }));
            setInterval(() => { model.selectObject( source_query_config, this ); }, 1000 ); },

        processQueryResult( query_result: any ) {
            if( query_result.length  == 0 || query_result[ 0 ].length == 0 ) { return; }
            let data = JSON.parse( query_result[ 0 ].object_data );
            this.monitor_led_data = data.monitorLedData;
            const event_name = "event-" + this.kebabize( data.construction_name ) + "-" + data.object_id;
            let led_event = new CustomEvent( event_name, { bubbles: true, detail: data });
            document.dispatchEvent( led_event); }, // this.$emit( 'led-data', data.monitorLedData ); doesn't work! 
        
        kebabize( str: string ) {
            return str.split('').map((letter, idx) => {
                return letter.toUpperCase() === letter
                ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
                : letter;
        }).join(''); }
    }
});
</script>

<style scoped>
.monitor-led {
    width: 34.85em;
    height: 0.8m;
    margin-top: 4px;
    padding: /* top */ 1px /* right */ 1px /* bottom */ 1px /* left */ 5px;
    background-color: v-bind( "monitor_led_data.classObject.background_color" );
    text-align: v-bind( "monitor_led_data.classObject.text_align" );
    margin-top: v-bind( "monitor_led_data.classObject.margin_top" );
    color: v-bind( "monitor_led_data.classObject.color" ); }
</style>
