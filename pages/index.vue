<template>
  <div class="container">
    <div class="d-flex flex-row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-body">

            <ul class="list-group">
              <li class="list-group-item" v-for="(todo, index) in todos" :key="todo"> <a href="#" @click="removeTodo(index)"> {{todo}} </a></li>
            </ul>

            <form @submit.prevent="sub">
              <div class="form-group mt-5">
                <input type="text" placeholder="Add a todo" class="form-control" v-model="todo">
                <button type="submit" class="btn-outline-primary mt-3">Add</button>
              </div>
            </form>

          </div>  
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {

data(){

  return{
    todo : ''
  }
},

 computed: {

   todos(){
     return this.$store.state.todos
   } 
 },

  mounted(){
   
  },

  methods:{
    
    sub(){
      if(this.todo){

      
        this.$store.commit('addTodo', this.todo);
        this.todo = '';

      }
    },


    removeTodo(index){
     this.$store.commit('removeTodo', index);
    }
    
  }
}
</script>
