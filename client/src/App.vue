<template>
  <v-app>
    <toolbar></toolbar>
    <v-main> 
       <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Toolbar from '@/components/Toolbar.vue';

export default {
  name: 'App',
  components: {
    Toolbar,
  }
};
</script>

<style scoped>
.items {
  margin: 10px;
}
</style>
