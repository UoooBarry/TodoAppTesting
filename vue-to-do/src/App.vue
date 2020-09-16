<template>
  <div class='app'>
    <div class='container task-group'>
      <InputTask @newItem='updateItem'/>
      <TasksList :items='items' @removeItem='removeItem' />
    </div>
  </div>
</template>

<script>
import InputTask from '@/components/inputTask';
import TasksList from '@/components/tasksList';
export default {
  name: 'App',
  components: {
    InputTask,
    TasksList
  },
  data(){
    return{
      items: []
    }
  },
  created(){
    this.$axios.get('http://localhost:3000/api/items')
                .then((res) => {
                  this.items = res.data.items;
                })
                .catch((err) => {
                  console.log(err);
                })
  },
  methods:{
    updateItem(item){
      this.items.push(item);
    },
    removeItem(item){
      const index = this.items.indexOf(item);
      this.items.splice(index);
    }
  }
}
</script>

<style scoped>
.app{
  margin-top: 50px;
}
.task-group{
    padding-right: 5%;
    padding-left: 5%;
    max-width: 50%;
}
body{
  background-color: rgb(233, 233, 233);
}
</style>