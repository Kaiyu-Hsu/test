<template>
  <v-main>
    <v-container fluid>
      <v-row>
        <v-col class="d-flex flex-column justify-center align-center">
          <v-btn color="primary" elevation="2" @click="showUp"
            >按下去會有驚喜</v-btn
          >
          <!-- max-width="250" -->
          <v-img
            v-if="surprised"
            class="mt-5"
            src="../../public/nothing.jpg"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      surprised: false,
    };
  },
  methods: {
    showUp() {
      this.surprised = !this.surprised;
    },
  },
};
</script>