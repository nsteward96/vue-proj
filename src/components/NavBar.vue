<template>
  <div id="navbar" class="navbar">
    <div v-for="link in links" :key="link.name">
      <NavBarItem :url="link.url" :name="link.name"></NavBarItem>
    </div>
  </div>
</template>

<script>
import NavBarItem from './NavBarItem.vue'

  export default {
    name: 'NavBar',
    components: {
      NavBarItem
    },
    data() {
      return {
        links: [
          {name: "Google", url: "google.com"},
          {name: "Facebook", url: "facebook.com"}
        ]
      }
    }
  }
</script>

<style>
  div.navbar {
    width: 100%;
    padding: 20px;
    max-width: 800px;
    background-color: #3388CC;
  }
</style>