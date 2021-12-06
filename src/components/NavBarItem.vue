<template>
  <div class="nav-bar-item">
    <a :href="url">
      {{ name }}
    </a>
  </div>
</template>

<script>
  export default {
    name: 'NavBarItem',
    props: {
      url: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      }
    }
  }
</script>

<style>
</style>