<script>
  import axios from 'axios';
  export default {
   
    data(){
      return {
        project:null,
        loading:false
      }
    },
    methods:{
      getData(){
        this.loading = true;
        axios.get('http://127.0.0.1:8000/api/project/' + this.$route.params.id )
        .then(res =>{
          this.project =  res.data.results;
          console.log(this.project)
          this.loading = false;
        });
      }
    },
    mounted() {
      this.project= null;
      this.getData();
    },
  }
</script>

<template>
  <div v-if=" project && !loading">
    <h1>Progetto: {{ project.title }}</h1>
  </div>

  <div class="card-container" v-if=" project && !loading">   
    <div class="card">
      <div class="card-img-wrapper" v-if="project.full_preview_img != null">
        <img :src="project.full_preview_img" :alt="project.title">
      </div>
      <div class="description">
        <h2>
          Titolo:
         <span>{{ project.title }}</span>
        </h2>
        <h3>
          collaboratori:
        </h3>
        <ul>
          <li v-for="(collaborator, index) in (project.collaborators).split(' ')" :key="index">
            - {{ collaborator }}
          </li>
        </ul>
        <h3>
          Tecnologie:
        </h3>
        <ul>
          <li v-for="(tecnology, index) in project.technologies" :key="index">
            - {{ tecnology.title }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped >
  .card-container{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding-inline:20px ;
    margin-block: 50px;
  }
  .card-container .card{
    display: flex;
    width: 100%;
    box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.3);
    border: 1px solid #ccc;
    border-radius: 10px;
    overflow: hidden;
  }

  .card .card-img-wrapper img{
    height: 100%;
    object-fit: cover;
  }

  .card .description h2{
    color: rgba(0, 0, 0, 0.6);
  }

  .card .description h3{
    color: rgba(0, 0, 0, 0.6);
  }

  ul li{
    list-style: none;
  }

  .description{
    padding: 20px 10px;
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