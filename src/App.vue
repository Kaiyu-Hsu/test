<template>
  <v-app>
    <!-- app color="primary" dark -->
    <v-app-bar app color="blue" elevation="4">
      <v-app-bar-nav-icon class="d-flex d-sm-none" @click="nav = true">
      </v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../public/peppa pig.jpg"
          transition="scale-transition"
          width="40"
        />

        <span class="mr-2">吃什麼</span>
        <v-spacer></v-spacer>
        <v-tabs class="d-none d-sm-flex">
          <v-tab v-for="(item, i) in listItems" :key="i">{{ item }}</v-tab>
        </v-tabs>
      </div>
    </v-app-bar>

    <!-- Add a navigation bar -->
    <v-navigation-drawer v-model="nav" absolute temporary>
      <v-list>
        <v-list-item-group>
          <v-list-item v-for="(item, i) in listItems" :key="i">{{
            item
          }}</v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!-- 根據 tabs 切換底下內容 -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      listItems: ["1", "2", "3"],
      nav: false,
    };
  },
  methods: {},
};
</script>
