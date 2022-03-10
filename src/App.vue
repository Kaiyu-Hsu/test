<template>
  <v-app id="app">
    <Nav />
    <!-- 根據 tabs 切換底下內容 -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Nav from "./components/Nav.vue";
export default {
  name: "App",
  components: {
    Nav,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
