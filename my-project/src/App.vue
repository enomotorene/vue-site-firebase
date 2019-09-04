<template>
  <div id="app">
 <!-- Menu -->  
  <Nav></Nav>

  <!-- Header -->
  <Header></Header>

  <!-- Services -->
  <Service></Service>

<!-- input Grid -->
   <!-- <div class="home">
     <img src="@/assets/logo.png" alt="Vue logo" id="vue-logo">
     <div class="title">What do i need to do today?</div>
     <input v-model="myTodo" /><button @click="addTodo">Add</button>
     <div v-if="errors !== ''" id="errors">{{errors}}</div>

     <div v-if="this.$store.getters.getItems && this.$store.getters.getItems.length > 0">
       <div class="title">Todos that need to be done today</div>

       <div v-for="item in this.$store.getters.getItems" :key="item.id">
         {{item.title}}<br/><br/> <small style="text-decoration:underline;" @click="deleteItem(item.id)">Delete</small>
         <br />
       </div>
     </div>
    </div>  -->
   <!-- Portfolio Grid -->
   <Portfolio></Portfolio> <!--- this is a component --->

  <!-- About -->
  <About></About> <!--- this is a component --->

  <!-- Team -->
 <Team></Team>

  <!-- Clients -->
  <Client></Client>

  <!-- Contact -->
  <Contact></Contact>

  <!-- Footer -->
  <Footer></Footer>

  <!-- Portfolio Modals -->
  <Modals></Modals>
  </div>
</template>

<script>
import Header from './components/Header'
import Nav from './components/Nav'
import Service from './components/Service'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Team from './components/Team'
import Client from './components/Client'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Modals from './components/Modals'

//import {db} from "@/main";

export default {
  name: 'app',
  // beforeCreate: function() {
  //   this.$store.dispatch('setItems');
  // },
  components: {
    Header,
    Nav,
    Portfolio,
    About,
    Team,
    Client,
    Service,
    Contact,
    Footer,
    Modals
  },
  data: function() {
    return{
      myTodo: '',
      errors: ''
    }
  },
  // method: {
  //   addTodo: function() {
  //     //console.log('myTodo: ' + this.myTodo)
  //     this.errors = '';
      
  //     if(this.myTodo !== '') {
  //       db.collection('items').add({
  //         title: this.myTodo,
  //         createdAt: Date.now()
  //       }).then((response) => {
  //         if(response) {
  //           this.myTodo = ''
  //         }
  //       }).catch((error) => {
  //         this.errors = error
  //       })
  //     } else {
  //       this.errors = 'Enter a todo';
  //     }
  //   }
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

#vue-logo {
  box-sizing: border-box;
 
}

input, button {
  border: 0;
  border-color: cornflowerblue;
  margin: 0 0 10px;
  padding: 7px;
  /* background-color: aqua; */
}

input {
  font-size: 12px;
}

.home {
  width: 300px;
  margin: auto;
  /* background: #2c3e50; */
}

button {
  background: paleturquoise;
}

#error {
  background: red;
  color: white;
  padding: 5px;
}
</style>
