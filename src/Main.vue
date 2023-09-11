<template>
  <div class="row wrap">
    <div class="col-12">
      <nav-bar/>
    </div>
    <div class="col-12">
      <router-view/>
    </div>
  </div>
</template>
<script>
  import NavBar from "./components/NavBar.vue";
  export default {
    name: "MainLayout",
    components: {
      NavBar
    }
  };
</script>