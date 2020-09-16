<template>
    <div>
        <div v-for="item in items" :key="item._id">
            <Task :item="item" @removeItem='removeItem'/>
        </div>
    </div>
</template>

<script>
import Task from '@/components/task';
export default {
    name: 'TaskList',
    props: ['items'],
    components:{
        Task
    },
    methods:{
        removeItem(item) {
            this.$emit('removeItem', item);
        }
    }
}
</script>