<script>

  import axios from 'axios';
    //creazione ContactPage e definizione nome 4)
  export default {
   name:"ContactPage",
    data(){
      return {
        // defiamo la nostra variabile per il form 7)
        contactData: {
            name:'',
            email:'',
            message:'',
        }
    }
    },
    //devono sempre ritornare qualcosa , devono restituire un valore calcolato
    computed: {
        submitDisabled(){
            let disabled = true;

            if(
                this.contactData.name != ' '
                &&
                this.contactData.email !=' '
                &&
                this.contactData.message != ' '
                &&
                //per verificare la lunghezza di una stringa
                this.contactData.name.length >= 5
                &&
                this.contactData.message.length >= 15
            ) {
            disabled = false;
              }

        //così il bottone sarà disabilitato finchè non verranno riempiti tutti i campi
        return disabled;

        }
    },
    methods:{
        // definiamo la funzione per il submit del form 5)
     sendMessage(){
        // axios
        //     .post('http://localhost:8000/api/contacts' , this.contactData)
        //     .then(response=>{
        //         console.log(response);
        //     })

        alert('send message');
     },
  }
}
</script>

<template>
  <div>
    <h1>Contact</h1>
  </div>

        <!-- per sottomettere il form ci servirà una funzione 4) -->
        <!-- @submit è una direttiva utilizzata in Vue.js per gestire l'evento di "submit" del modulo. 
        indica che si vuole prevenire il comportamento predefinito del modulo, 
        ovvero il reindirizzamento della pagina web quando il modulo viene inviato. -->
        <form @submit.prevent="sendMessage()">
            <div>
                <!-- definiamo la label 6) usando il v-model non avremo bisogno del name-->
                <label for="name">
                    <!-- {{ contactData.name }} controllare sempre se funziona -->
                    Your name
                    <span>
                        *
                    </span>
                </label>
                <input type="text" name="name" id="name" minlength="5" placeholder="Enter your name..." v-model="contactData.name" required>
            </div>
            <div>
                <label for="email">
                    Your email
                    <span>
                        *
                    </span>
                </label>
                <input type="email" email="email" id="email" placeholder="Enter your email..." v-model="contactData.email" required>
            </div>
            <div>
                <label for="message">
                    Your message
                </label>
                <textarea type="text" message="message" id="message" rows="5" minlength="15" placeholder="Enter your message..." v-model="contactData.message"></textarea>
            </div>

            <div>
                <!-- inseriamo un buttom 8)-->
                <!-- usiamo le computed properties -->
                <button type="submit" :disabled="submitDisabled">
                    Send
                </button>
            </div>
        </form>


  
</template>

<style scoped >
  label{
    display: block;
    > span{
        font-weight: bold;
        color: red;
    }
  }
</style>