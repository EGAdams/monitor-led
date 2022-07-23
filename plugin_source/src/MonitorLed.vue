/* eslint-disable prettier/prettier */
<template>
    <div>
        <div class="monitor-led" :monitored_object_id="monitored_object_id">
            {{ monitor_led_data.ledText }}
        </div>
    </div>
</template>

<script lang="ts">
import jQuery from "jquery"
import DataSource from "./typescript_source/concrete/DataSource";
import ServerLedData from "../src/typescript_source/concrete/ServerLedData";
import { defineComponent, PropType } from "vue";
export default defineComponent( {
    name: "monitor-led",
    data_source_location: "http://mycustombusinessapp.com/wp-content/plugins/MCBA-Wordpress/runQuery.php",
    
    props: {
        monitored_object_id: {
            type: String as PropType< string >,
            default: "",
        },
    },
    data: () => ({
        dataSource: new DataSource( "http://mycustombusinessapp.com/wp-content/plugins/MCBA-Wordpress/runQuery.php" ),
        monitor_led_data: new ServerLedData()  
    }),
    mounted() {
        this.start();
    },
    methods: {
        start() {
            const dataQuery =  "select object_data from monitored_objects where object_view_id='" + this.monitored_object_id + "'";
            const request_packet = {
                thisObject: this,
                query: dataQuery,
                trigger: "processSelectObjectResult",
                data: {}
            };
            setInterval(() => {
                console.log( "updating..." );
                jQuery( document ).off().on( "processSelectObjectResult", request_packet.thisObject.processSelectObjectResult );
                request_packet.thisObject.dataSource.runQuery( request_packet );
            }, 1000 );
        },
        processSelectObjectResult( _event: any, result: any ) {
            let data = JSON.parse( result.data[ 0 ][ 0 ]);
            result.thisObject.monitor_led_data = data.monitorLedData;
        }
    }
} );
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
    color: v-bind( "monitor_led_data.classObject.color" );
}
</style>
