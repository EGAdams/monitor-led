<script lang="ts">
import ServerLedData from "../src/typescript_source/concrete/ServerLedData";
import { defineComponent } from "vue";
import MonitorLed from "../src/MonitorLed.vue";

export default defineComponent({
  name: "ServeDev",
  components: {
    MonitorLed,
  },
  data() {
    return {
      test_object_name: "monitor-led-tester",
      monitor_led_data: new ServerLedData(),
    };
  },
});
</script>

<template>
  <div id="app">
    <monitor-led v-bind:object_name="test_object_name" v-bind:monitor_led_data="monitor_led_data"></monitor-led>
  </div>
</template>
