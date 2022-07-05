<script lang="ts">
import { defineComponent } from "vue";
import MonitorLed from "../src/monitor-led.vue";

export default defineComponent({
  name: "ServeDev",
  components: {
    MonitorLed,
  },
  data() {
    return {
      test_object_name: "monitor-led-tester",
      logs: [],
    };
  },
});
</script>

<template>
  <div id="app">
    <monitor-led v-bind:object_name="test_object_name" v-bind:logs="logs"></monitor-led>
  </div>
</template>
