<template>
        <v-card color="grey lighten-4" flat height="200px" tile>
      <v-toolbar color="green" dark fixed>
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

        <v-toolbar-title class="mr-4">Vue To do</v-toolbar-title>

        <v-toolbar-items>
          <v-btn flat>
            <v-icon>mdi-checkbox-marked-circle</v-icon>Projects
          </v-btn>
        </v-toolbar-items>

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sma-and-down">
          <v-btn flat to="/register">
            Register
          </v-btn>
          <v-btn flat>
            Login
          </v-btn>
          <v-btn flat>
            Logout
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-card>
</template>
<script>
export default {

};
</script>
<style scoped>

</style>
