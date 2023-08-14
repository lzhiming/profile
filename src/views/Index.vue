<template>
	<Header :title="stageType" :timing="countDown" />
	<div class="pro-grid" v-show="isLoading">
		<div v-for="pro in prolist" :key="pro" class="loading-card card-skeleton"></div>
	</div>

	<div class="room">
		<div class="pro-grid" v-show="!isLoading" :style="bg1">
			<Project v-for="pro in playerList" :key="pro.pid" :info="pro" />
		</div>

		<div class="pro-grid" v-show="!isLoading" :style="bg2">
			<Project v-for="pro in playerList" :key="pro.pid" :info="pro" />
		</div>

		<div class="pro-grid" v-show="!isLoading" :style="bg3">
			<Project v-for="pro in playerList" :key="pro.pid" :info="pro" />
		</div>

		<div class="pro-grid" v-show="!isLoading" :style="bg4">
			<Project v-for="pro in playerList" :key="pro.pid" :info="pro" />
		</div>
	</div>



	<div class="dialog-delay" v-show="selectDialog" @click="selectDialog = !selectDialog"></div>
    <transition name="fade">
        <div class="delete-dialog-body" v-if="selectDialog">
			<Card v-for="c in cardList" :key="c.key" :icon="c.icon" :desc="c.desc" />
			<Card v-for="c in cardList" :key="c.key" :icon="c.icon" :desc="c.desc" />
		</div>
	</transition>

	<canvasTemp />
</template>

<style scoped lang="scss">
@import './css/index.scss';
#admin { width: 100%; min-height: 100vh; height: 100vh; }
.top { height: 20px; }

.main { height: calc(100% - 40px); }
.main .nav { width: 200px; }
.main .tabs { width: calc(100% - 200px); }

.room{
	display: grid;
	grid-template-columns: 50% 50%;
	grid-template-rows: 50% 50%;
	width: 1260px;
	height: 860px;
}

</style>

<script setup lang="ts">
import Project from '@/components/project.vue'
import Header from '@/components/header.vue'
import Card from '@/components/card.vue'
import canvasTemp from '@/components/canvas.vue'
import { onMounted, ref, watch } from 'vue';

const prolist = [
	{pid: 1, nickName: 'lzming', level: '黄金1', heroType: '1', cards: ['', '', '', '']},
	{pid: 2, nickName: '阿萨大大', level: '黄金2', heroType: '2', cards: ['', '', '', '']},
	{pid: 3, nickName: 'xxxx', level: '白银3', heroType: '3', cards: ['', '', '', '']},
	{pid: 4, nickName: '12312', level: '黄金1', heroType: '4', cards: ['', '', '', '']}
]

let playerList = ref(prolist)

let cardList = ref(<any>[])

let isLoading = ref(true)

let selectDialog = ref(false)

onMounted(() => {
	isLoading.value = false
	// setTimeout(() => {
	// 	isLoading.value = false
	// 	stageType.value = 'ready'
	// }, 2000)
})

let countDown = ref(4)
let stageType = ref('')
let countTime = ref()

watch(() => stageType.value, () => {
	clearInterval(countTime.value)
	countTime.value = setInterval(() => {
		if(countDown.value > 0){
			countDown.value -= 1
		}
	}, 1000)
})
watch(() => countDown.value, (newCount: number) => {
	if(newCount === 0){
		console.log(stageType.value)
		if(stageType.value === 'ready'){
			countDown.value = 1000
			stageType.value = 'round 1'
			selectDialog.value = !selectDialog.value
			pushCard()
		}else
		if(stageType.value === 'round 1'){
			getCard(0)
			countDown.value = 10
			stageType.value = 'battle 1'
			selectDialog.value = !selectDialog.value
		}else
		if(stageType.value === 'battle 1'){
			countDown.value = 10
			stageType.value = 'round 2'
			selectDialog.value = !selectDialog.value
			pushCard()
		}else
		if(stageType.value === 'round 2'){
			getCard(1)
			countDown.value = 10
			stageType.value = 'battle 2'
			selectDialog.value = !selectDialog.value
		}else
		if(stageType.value === 'battle 2'){
			countDown.value = 10
			stageType.value = 'round 3'
			selectDialog.value = !selectDialog.value
			pushCard()
		}else
		if(stageType.value === 'round 3'){
			getCard(2)
			countDown.value = 10
			stageType.value = 'battle 3'
			selectDialog.value = !selectDialog.value
		}else
		if(stageType.value === 'battle 3'){
			countDown.value = 10
			stageType.value = 'round 4'
			selectDialog.value = !selectDialog.value
			pushCard()
		}else
		if(stageType.value === 'round 4'){
			getCard(3)
			countDown.value = 10
			stageType.value = 'battle 4'
			selectDialog.value = !selectDialog.value
		}else
		if(stageType.value === 'battle 4'){
			alert('结束')
		}

	}
})

function pushCard(){
	cardList.value = []
	let getHero = [
		{key: 1, icon: '../src/assets/hero/1.png', desc: '战斗开始时将自己所有血量转化为攻击，加给攻击力最高的队友'},
		{key: 2, icon: '../src/assets/hero/2.png', desc: '1点水属性伤害'},
		{key: 3, icon: '../src/assets/hero/3.png', desc: '1点风属性伤害'},
		{key: 4, icon: '../src/assets/hero/4.png', desc: '1点雷属性伤害'},
		{key: 5, icon: '../src/assets/hero/5.png', desc: '1点无属性伤害'},
		{key: 6, icon: '../src/assets/hero/6.png', desc: '1点护甲'},
		{key: 7, icon: '../src/assets/hero/7.png', desc: '1点血量'},
		{key: 8, icon: '../src/assets/hero/8.png', desc: '似乎没有用处'}
	]
	for(let i = 1; i <= 8; i++){
		setTimeout(() => {
			cardList.value.push(getHero[i-1])
		}, i*1000)
	}
}

function getCard(cardIndex: number){
	let getHero = [
		{key: 1, icon: '../src/assets/hero/1.png', desc: '1点火属性伤害'},
		{key: 2, icon: '../src/assets/hero/2.png', desc: '1点水属性伤害'},
		{key: 3, icon: '../src/assets/hero/3.png', desc: '1点风属性伤害'},
		{key: 4, icon: '../src/assets/hero/4.png', desc: '1点雷属性伤害'},
		{key: 5, icon: '../src/assets/hero/5.png', desc: '1点无属性伤害'},
		{key: 6, icon: '../src/assets/hero/6.png', desc: '1点护甲'},
		{key: 7, icon: '../src/assets/hero/7.png', desc: '1点血量'},
		{key: 8, icon: '../src/assets/hero/8.png', desc: '似乎没有用处'},
		{key: 9, icon: '../src/assets/hero/3.png', desc: '1点风属性伤害'},
		{key: 10, icon: '../src/assets/hero/3.png', desc: '1点风属性伤害'},
		{key: 11, icon: '../src/assets/hero/3.png', desc: '1点风属性伤害'}
	]

	for(let player of playerList.value){
		player.cards[cardIndex] = getHero[player.pid-1].icon
	}
}


let bg1 = "background-image: url('../src/assets/bg/cheng.png');background-position: center;background-size: cover;"
let bg2 = "background-image: url('../src/assets/bg/shan.png');background-position: center;background-size: cover;"
let bg3 = "background-image: url('../src/assets/bg/tian.png');background-position: center;background-size: cover;"
let bg4 = "background-image: url('../src/assets/bg/yz.png');background-position: center;background-size: cover;"
</script>