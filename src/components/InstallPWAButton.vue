<template>
  <div v-if="deferredPrompt">
    Get our free app. It won't take up space on your phone and also works offline!
    <button @click="dismiss">Dismiss</button>
    <button @click="install">Install</button>
  </div>
</template>

<script>
export default {
  name: "InstallPWAButton",
  data: function() {
    return {
      deferredPrompt: null
    };
  },
  created() {
    window.addEventListener("beforeinstallprompt", e => {
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.deferredPrompt = e;
      console.log("Prompt set");
    });
    window.addEventListener("appinstalled", () => {
      this.deferredPrompt = null;
      console.log("Prompt not set");
    });
  },
  methods: {
    async dismiss() {
      this.deferredPrompt = null;
    },
    async install() {
      this.deferredPrompt.prompt();
    }
  }
};
</script>
