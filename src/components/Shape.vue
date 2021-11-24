<template>
  <div id="shape">
    <v-stage :config="configKonva">
      <v-layer>
        <v-circle :config="configCircle"></v-circle>
      </v-layer>
    </v-stage>
  </div>
</template>
<script>
export default {
  name: "Shape",
  data() {
    return {
      configKonva: {
        width: 800,
        height: 500,
      },
      configCircle: {
        x: 400,
        y: 150,
        radius: 300,
        fill: "#EBF2EE",
        strokeWidth: 0,
      },
    };
  },
};
</script>
<style scoped>
#shape {
  max-width: 800px;
}
</style>
