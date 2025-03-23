<template>

    <div class="flex justify-center items-center flex-wrap">
        <div
        v-for="(joke, index) in jokes"
        :key="joke.id"
        class="bg-red-400 w-[250px] h-[200px]  text-center rounded-sm m-auto mb-2"
        >
            <h2>{{ joke.id }}</h2>
            <h4>{{ joke.title }}</h4>
            <p>{{ joke.content }}</p>
        </div>
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
const jokes = ref([])

const fetchJokes=()=>{
    axios.get('/api/jokes')
    .then(response =>{
        jokes.value = response.data
        console.log(jokes.value);
        
    })
    .catch(error =>{
        console.log(error);
        
    })
    
}
onMounted(fetchJokes);
</script>