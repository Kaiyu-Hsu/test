<template>
  <v-app>
    <!-- app color="primary" dark -->
    <v-app-bar app color="blue" elevation="4">
      <div class="d-flex align-center">
        <v-btn color="primary"> <v-icon dark> mdi-minus </v-icon> </v-btn>
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="../public/peppa pig.jpg"
          transition="scale-transition"
          width="40"
        />

        <span>吃什麼</span>
        <!-- <v-divider vertical color="black"></v-divider> -->
      </div>

      <!-- <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
