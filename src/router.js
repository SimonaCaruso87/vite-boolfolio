import { createRouter, createWebHistory  } from "vue-router";

import HomePage from './pages/HomePage.vue';
import SinglePostPage from './pages/SinglePostPage.vue';
//importiamo la rotta per il component email 2)
import ContactPage from './pages/ContactPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';


const router = createRouter({
  history:createWebHistory(),
  routes:[
    {
      path:'/',
      name:'home',
      component:HomePage,
    },
    {
      path:'/single/:id',
      name:'single',
      component:SinglePostPage,
    },
    //rotta per email 1)
    {
        path:'/contact',
        name:'contact',
        component:ContactPage,
    },
    {
      path:'/:pathMatch(.*)*',
      name:'NotFound',
      component:NotFoundPage,
    },

  ]
});

export { router };