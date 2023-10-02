<script>
import HeaderComponent from './components/HeaderComponents/HeaderComponent.vue';
import MainComponent from './components/MainComponents/MainComponent.vue';
import FooterComponent from './components/FooterComponents/FooterComponent.vue';

export default {
  data(){
    return {}
  },
  components:{
    HeaderComponent,
    FooterComponent ,
    MainComponent 
  }
}
</script>

<template>
  <HeaderComponent />

  <MainComponent />

  <FooterComponent />
</template>

<style scoped>
</style>
