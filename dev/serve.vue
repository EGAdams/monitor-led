<script lang="ts">
import { defineComponent } from "vue";
import LogVuer from "../src/log-vuer.vue";

export default defineComponent({
  name: "ServeDev",
  components: {
    LogVuer,
  },
  data() {
    return {
      test_object_name: "log-vuer-tester",
      logs: [
          
        {
          id: "MessageManager_9472107374869_1653766722484",
          timestamp: 1653766722484,
          message: "Bootstrap is the world's most famous free CSS framework",
          method: "test",
        },
        {
          id: "MessageManager_8285421285153_1653766722485",
          timestamp: 1653766722485,
          message: "setting newly built Admin guest to active...",
          method: "test",
        },
        {
          id: "MessageManager_7914528758183_1653766722486",
          timestamp: 1653766722486,
          message: "done constructing Admin guest.",
          method: "test",
        },
      ],
    };
  },
});
</script>

<template>
  <div id="app">
    <log-vuer v-bind:object_name="test_object_name" v-bind:logs="logs"></log-vuer>
  </div>
</template>
