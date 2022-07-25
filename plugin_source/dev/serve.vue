<script lang="ts">

import { defineComponent } from "vue";
import MonitorLed from "../src/MonitorLed.vue";

export default defineComponent({
  name: "ServeDev",
  components: { MonitorLed },
});
</script>

<template>
  <div id="app">
    <div class="anonymous-identity-1655">outside element</div> 
    <monitor-led monitored_object_id="AnonymousIdentity_1655"
                 data_source_location="http://mycustombusinessapp.com/wp-content/plugins/MCBA-Wordpress/runQuery.php">
    </monitor-led>
  </div>
</template>
