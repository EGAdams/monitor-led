<script lang="ts">

import { defineComponent } from "vue";
import MonitorLed from "../src/MonitorLed.vue";

export default defineComponent({
  name: "AccordionSection",
  components: { MonitorLed },
});
</script>

<template>c
  <div id="app">
    <div class="anonymous-identity-1655">outside element</div> 
    <monitor-led monitored_object_id="AnonymousIdentity_1655"
                 data_source_location="localhost:8080">
    </monitor-led>
  </div>
</template>
