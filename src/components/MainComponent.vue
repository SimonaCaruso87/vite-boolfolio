<script>

import axios from 'axios';


export default{
    name: "MainComponent",
    data(){
        return{
            projects : [ ],
            pageCurrent : 1 ,
            totalPage : 1 ,
        }
    },
    methods:{
        nextPage(){
            if(this.pageCurrent<this.totalPage){
                this.pageCurrent++;
                this.change();
            }
        },
        prevPage(){
            if(this.pageCurrent>1){
            this.pageCurrent--;
            this.change();
            }
        },
        change(){
            axios.get('http://localhost:8000/api/projects',{
            params:{
                page:this.pageCurrent
            }
            })
            .then(res=>{
                this.projects = res.data.projects.data;
                //last_page ci restituisce l'ultimo numero della chiamata
                this.totalPage = res.data.projects.last_page;
            })
        }
    },
    created(){
        this.change()
    },
    
}
</script>

<template>

    <main>
        <div class="row">
            <div class="col" v-for="(project, index) in projects" :key="index" >
                <div class="card bg-primary" style="width: 18rem;">
                    <img :src="project.thumb" class="card-img-top" :alt="project.title">
                    <div class="card-body">
                        <p class="card-text">{{ project.title }}</p>
                        <p class="card-text">{{ project.creation_date }}</p>
                    </div>
                </div>
            </div>
        </div>    
        <button @click="prevPage()" class="btn btn-primary w-25 m-2" >
                    Prev
        </button>
        <button @click="nextPage()" class="btn btn-primary w-25" >
                    Next
        </button>
    </main>

</template>

<style lang="scss" scoped>

main{
    padding:40px;
    text-align: center;
}

</style>