<script>
  import axios from 'axios';
  import CardComponent from '../components/MainComponents/CardComponent.vue';
  export default {
   
    data(){
      return {
        projects:[],
        currentPage:1,
        totalPages:1,
        loading:false
      }
    },
    components:{
      CardComponent

    },
    methods:{
      changePage(buttonTipe){
        if(buttonTipe == 'prev' && this.currentPage > 1 && !this.loading){
          this.currentPage--;
          this.getData();
        }else if(buttonTipe == 'next' && this.currentPage < this.totalPages && !this.loading){
          this.currentPage++;
          this.getData();
        }
      },
      getData(){
        this.loading = true;
        axios.get('http://127.0.0.1:8000/api/project',{
          params:{
            page: this.currentPage,
          }
        })
        .then(res =>{
          this.projects =  res.data.results.data;
          this.currentPage = res.data.results.current_page;
          this.totalPages = res.data.results.last_page;
          this.loading = false;
        });
      }
    },
    mounted() {
     this.getData();
    },
  }
</script>

<template>
  <div>
    <h1>Lista progetti</h1>
  </div>

  <div class="card-container">   
    <CardComponent
      v-for="(project, index) in projects" 
      :key="index"
      :projectObj="project"
    />
  </div>
  <p class="pagination">pagina {{ currentPage }}/{{ totalPages }}</p>
  <div class="button-wrapper">
    <button @click="changePage('prev')">prev</button>
    <button @click="changePage('next')">next</button>
  </div>
</template>

<style scoped >
  .card-container{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding-inline:20px ;
  }

  .pagination{
    font-weight: bold;
    text-transform: capitalize;
    text-align: center;
    margin-block: 20px;
    font-size: 24px;
  }
  .button-wrapper{
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .button-wrapper button{
    padding: 15px 20px;
    text-transform: uppercase;
    background-color: forestgreen;
    border: 0;
    color:#fff;
    cursor: pointer;
    transition: background-color 200ms ease-in-out ;
  }

  .button-wrapper button:hover{
    background-color: rgb(69, 201, 69);
  }
</style>