<template>
  <v-container>
    <h1>現在要吃什麼?</h1>
    <v-divider class="mb-3"></v-divider>
    <!-- <span>{{ list[0].url }}</span> -->
    <v-img :src="list[0].download_url"></v-img>
  </v-container>
</template>

<script>
import randomPic from "../json/randomPicture";

export default {
  name: "Meal",

  data() {
    return {
      list: randomPic,
    };
  },
};
</script>