<script setup>
import Theme1 from './views/Theme1.vue';
import Theme2 from './views/Theme2.vue';
import Theme3 from './views/Theme3.vue';



</script>

<template>

  <div class="bg-[#3a4564] p-16" v-if="$route.name === 'Home' ">
    <Theme1/>
  </div>
   <div class="bg-[#180629] p-16" v-if="$route.name === 'Theme2'">
    <Theme2 />
   </div>
   <div class="bg-[#e6e6e6] p-16" v-if="$route.name === 'Theme3'">
    <Theme3 />
   </div>
</template>
<script>
</script>


