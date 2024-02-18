<template>
    <div class="example">
        <input type="range" v-model="angerLevel" min="0" max="99" />

        <p class="angerPill"
            :style="{backgroundColor: angerRgb}">
            {{ angerLevel.toString().padStart(2, '0') }}
        </p>    

        <p>
            <quote :class="{ coolQuoteClass : isCoolQuote }">
                "What's your name?” Django simply replies, "Django." 
                Nero asks, "Can you spell it?" "D-J-A-N-G-O. The D is silent."
            </quote>
        </p>

        <p>
            <quote :style="customStyle">
                "That's a bingo"
            </quote>
        </p>

    </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const angerLevel = ref(0);

const angerRgb = computed(() => {
    const red = Math.floor(255 * (angerLevel.value / 100));
    const green = Math.floor(255 * ((100 - angerLevel.value) / 100));
    return `rgb(${red}, ${green}, 0)`;
});

const isCoolQuote = computed(() => {
    return angerLevel.value > 50;
}); 

const customStyle = ref({
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#ff0000'
});
</script>

<style scoped>
.coolQuoteClass {
    font-size: 20px;
    font-weight: bold;
    color: #ff0000;
}

p.angerPill {
    padding: 20px;
    border-radius: 30px;
    width: 150px;
    text-align: center;
}
</style>