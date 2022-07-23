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
      object_id: "AnonymousIdentity_1655",
    };
  },
});
</script>

<template>
  <div id="app">
    <monitor-led v-bind:monitored_object_id="object_id"></monitor-led>
  </div>
</template>
