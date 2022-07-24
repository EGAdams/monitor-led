<script lang="ts">

import { defineComponent } from "vue";
import MonitorLed from "../src/MonitorLed.vue";

export default defineComponent({
  name: "ServeDev",
  components: {
    MonitorLed,
  },
  data() {
    return {
      object_id: "AnonymousIdentity_1646",
      url: "http://mycustombusinessapp.com/wp-content/plugins/MCBA-Wordpress/runQuery.php"
    };
  },
});
</script>

<template>
  <div id="app">
    <monitor-led v-bind:monitored_object_id="object_id" 
                 v-bind:data_source_location="url"></monitor-led>
  </div>
</template>
