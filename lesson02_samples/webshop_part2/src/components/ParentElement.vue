<template>
    <div>
        <h1>Parent Element</h1>
        <div class="container">
            <ChildElement v-for="(color,index) in colors" 
            :key="color" 
            :favouriteColor="color" 
            :name="firstNames[index]" />
        </div>
    </div>
</template>
<script setup>
import ChildElement from './ChildElement.vue';
import { ref } from 'vue';

const colors = ref(['red', 'green', 'blue']);
const firstNames = ref(['John', 'Jane', 'Joe']);

</script>
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
<!-- 
// setTimeout(() => {
//     firstName.value = 'Jane';
// }, 2000);
 -->