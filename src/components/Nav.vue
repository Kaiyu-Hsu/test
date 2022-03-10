<template>
  <v-container>
    <v-app-bar app color="primary" elevation="4" dense>
      <v-app-bar-nav-icon class="d-flex d-sm-none" @click="nav = true">
      </v-app-bar-nav-icon>
      <v-container class="d-flex justify-center align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../../public/peppa pig.jpg"
          transition="scale-transition"
          width="40"
        />

        <h3 class="mr-4 text-no-wrap">吃什麼</h3>
        <v-spacer></v-spacer>
        <!-- tabs v-slot:extension-->
        <template>
          <v-tabs class="d-none d-sm-flex" background-color="primary">
            <v-tabs-slider color="white"></v-tabs-slider>
            <v-tab v-for="(item, i) in listItems" :key="i">{{ item }}</v-tab>
          </v-tabs>
        </template>
      </v-container>
    </v-app-bar>

    <!-- navigation drawer -->
    <v-navigation-drawer v-model="nav" absolute temporary>
      <v-list>
        <v-list-item-group>
          <v-list-item v-for="(item, index) in listItems" :key="index">
            {{ item }}
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      listItems: ["飲料", "每一餐", "宵夜"],
      nav: false,
    };
  },
  methods: {},
};
</script>