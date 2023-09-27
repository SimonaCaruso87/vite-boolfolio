// importiamo il componente store 
import { reactive } from 'vue';
// // creiamo una costante , che ci serve come variabile globale , reattiva , una fonte condivisa tra i vari componenti, con una variabile globale 
export const store = reactive({
    // in questo caso specifico creiamo un array vuoto
    // es searrchText , searchStatus , charachters , loading  
    // searchText: "" ,
    // movies:[] ,
    // movieGenres: [],
    // series: [] ,
    // seriesGenres:[],
});
