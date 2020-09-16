<template>
    <form class="input-group input-task" @submit.prevent="add">
        <input type="text" class="form-control task" id='newTask' name='newTask' v-model='newTask' placeholder="Input a new task">
        <span class="input-group-btn">
            <button class='btn btn-primary'>Add</button>
        </span>
    </form>
</template>


<script>
export default {
    name: 'InputTask',
    data(){
        return{
            newTask: ''
        }
    },
    methods:{
        add() {
            this.$axios.post('http://localhost:3000/api/items/create', {
                task: this.newTask
            })
            .then((res) => {
                this.$emit('newItem', res.data.item);
            })
            
        }
    }
}
</script>


<style scoped>
.task{
    margin-right: 20px;
}
.input-task{
    margin-bottom: 50px;
}
</style>