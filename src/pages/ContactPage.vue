<script>

  import axios from 'axios';

  export default {
   name:"ContactPage",
    data(){
      return {
        contactData: {
            name:'',
            email:'',
            message:'',
        }
    }
    },
    computed: {
        submitDisabled(){
            let disabled = true;

            if(
                this.contacData.name != ''
                &&
                this.contactData.email !=''
                &&
                this.contactData.message != ''
                &&
                this.contactData.name.length >= 5
                &&
                this.contactData.message.length >= 15
            ) {
            disabled = false;
        }
        return disabled;

        }
    },
    methods:{
     sendMessage(){
        axios
            .post('http://localhost:8000/api/contacts' , this.contactData)
            .then(response=>{
                console.log(response);
            })
     },
  }
}
</script>

<template>
  <div>
    <h1>Contact</h1>
  </div>

        <form @submit.prevent="sendMessage()">
            <div>
                <label for="name">
                    Your name
                </label>
                <input type="text" name="name" id="name" placeholder="Enter your name..." v-model="contactData.name">
            </div>
            <div>
                <label for="email">
                    Your email
                </label>
                <input type="email" email="email" id="email" placeholder="Enter your email..." v-model="contactData.email">
            </div>
            <div>
                <label for="message">
                    Your message
                </label>l
                <textarea type="text" message="message" id="message" rows="5" minlength="15" placeholder="Enter your message..." v-model="contactData.message"></textarea>
            </div>

            <div>
                <button class="btn btn-primary" :disabled="submitDisabled">
                    Send
                </button>
            </div>
        </form>


  
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