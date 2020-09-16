<template>
    <div>
        <div class="alert alert-secondary row" :class="{ 'alert alert-success' : item.isDone}">
            <a>{{item.task}}</a>
            <span class='icon-group'>
                <b @click='done'> o </b>
                <b @click='remove'> − </b>
            </span>
        </div>
    </div>
</template>


<script>
export default {
    name: "Task",
    props: ["item"],
    methods:{
        remove(){
            this.$emit('removeItem', this.item);
            this.$axios.delete(`http://localhost:3000/api/items/${this.item._id}`)
                        .then(() => {
                            this.$emit('removeItem', this.item);
                        })
                        .catch((err) => {
                            console.log(err);
                        })
        },
        done(){
            this.$emit('doneItem', this.item);
            this.$axios.patch(`http://localhost:3000/api/items/${this.item._id}`)
                        .then((res) => {
                            this.item.isDone = res.data.item.isDone;
                        })
                        .catch((err) => {
                            console.log(err);
                        })
        }
    }
}
</script>

<style scoped>
.icon-group{
    margin-left: auto;
    float: right;
}
.icon-group b{
    cursor: pointer;
}
</style>