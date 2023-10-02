<script>
export default {
  
}
</script>

<template>
  <nav>
    <router-link :to="{name : 'home'}" class="center">
      <h1>Home</h1>
    </router-link>
    <!-- aggiungiamo il nostro componente contact 3)-->
    <router-link :to="{name : 'contact'}" class="center">
      <h1>Contact</h1>
    </router-link>
  </nav>
</template>

<style>
.center{

    text-align: center;
}
  
</style>