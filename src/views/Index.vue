<template>
	<Header />
	<div class="pro-grid" v-show="isLoading">
		<div v-for="pro in prolist" :key="pro" class="loading-card card-skeleton"></div>
	</div>
	<div class="pro-grid" v-show="!isLoading">

		<Project v-for="pro in prolist" :key="pro" title="1" msg="Hello Vue 3 + TypeScript + Vite" />
	</div>
	
</template>

<style scoped lang="scss">
@import './css/index.scss';
#admin { width: 100%; min-height: 100vh; height: 100vh; }
.top { height: 20px; }

.main { height: calc(100% - 40px); }
.main .nav { width: 200px; }
.main .tabs { width: calc(100% - 200px); }

</style>

<script setup lang="ts">
import Project from '@/components/project.vue'
import Header from '@/components/header.vue'
import { onMounted, ref } from 'vue';

const prolist = ['1', '2', '3', '4','5', '6', '7', '8','9', '10', '11', '12']

let isLoading = ref(true)

onMounted(() => {
	setTimeout(() => {
		isLoading.value = false
	}, 2000)
})
</script>