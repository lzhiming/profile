<template>
	<Header />
	<div class="pro-grid" id="mainMap">
		<div class="add-btn" @click="addPlayer" >增加一个随机玩家</div>
		<div class="add-btn" @click="movePlayer" >移动</div>
		<div class="add-btn" @click="movePlayerLeft" >移动左</div>
		<div class="add-btn" @click="moveCamera(1000)" >摄像头右移</div>
		<div class="add-btn" @click="moveCamera(0)" >摄像头左移</div>
		<div class="add-btn" @click="transCamera" >摄像头放大</div>
		<Project v-for="pro in prolist" :key="pro.id" :id="pro.id"
		:position="pro.position" :point="pro.point" :title="pro.nickName" />
	</div>
	
</template>

<style scoped lang="scss">
@import './css/index.scss';
#admin { width: 100%; min-height: 100vh; height: 100vh; }
.top { height: 20px; }

.main { height: calc(100% - 40px); }
.main .nav { width: 200px; }
.main .tabs { width: calc(100% - 200px); }
.add-btn{
	width: 200px;
    height: 50px;
    background: #ccc;
    position: sticky;
    top: 20px;
    left: 20px;
}

</style>

<script setup lang="ts">
import Project from '@/components/project.vue'
import Header from '@/components/header.vue'
import { onMounted, ref } from 'vue';

const prolist = ref(
	[
		{
			id: '1', nickName: 'lzming (斗帝一阶)', point: 500, position: "left: 500px; top: 600px"
		},
		// {
		// 	id: '2', nickName: 'zjjjjjjjjjj (练气一阶)', point: 1, position: "left: 200px; top: 700px"
		// },
		// {
		// 	id: '3', nickName: 'proto (大斗师)', point: 100, position: "left: 400px; top: 500px"
		// }
	]
)

function addPlayer(){
	let addTag = Math.random().toString(36).substr(2);
	let id = addTag, nickName = `随机玩家${addTag}`,  point = random(1, 20000).toFixed()
	let position= `left: ${random(100, 1500)}px; top: ${random(250, 950)}px`
	prolist.value.push({
		id, nickName, point, position
	})

}
function random(min:any, max: any) {
	return Math.random() * (max - min) + min;
}

function playerMove(playerId: string, direction: string){
	const element:any = document.getElementById(playerId);		
	let player = element.getElementsByClassName('player')[0]

	let isRight = direction === 'right'

	let start:any, previousTimeStamp:any;
	let preStep = 0
	let done = false;
	let stepSpeed = 30
	function step(timestamp:any) {
		if (start === undefined) {
			start = timestamp;
		}
		let countPx = isRight ? 0.2 : -0.2
		let movePx = isRight ? 5 : -5
		let stepOffset = isRight ? 1 : -1
		
		const elapsed = timestamp - start;
		if (previousTimeStamp !== timestamp) {
			const count = countPx * elapsed
			let nowX = Number(element.style.transform.replace('translateX(', '').replace('px)', ''))
			let afterX = nowX + movePx
			element.style.transform = `translateX(${afterX}px)`;
			let thisStep = Number((count/stepSpeed).toFixed()) + stepOffset
			console.log(preStep , thisStep)
			if(thisStep != preStep){
				moveAnime(preStep, player, isRight)				
				preStep = thisStep
			}
			if (count === 1000) {
				done = true
				player.style.backgroundPosition = '0px 0px'
			};
		}
		if (elapsed < 2000) {
			// 2 秒之后停止动画
			previousTimeStamp = timestamp;
			if (!done) {
			 requestAnimationFrame(step);
			}
		}else{
			player.style.backgroundPosition = '0px 0px'
		}
	}
	requestAnimationFrame(step);
}
function movePlayer(){
	let moveIds = ['1']
	for(let id of moveIds){
		playerMove(id, 'right')
	}
}
function movePlayerLeft(){
	let moveIds = ['1']
	for(let id of moveIds){
		playerMove(id, 'left')
	}
}
function moveAnime(step:number, player: any, isRight: boolean) {
	let stepCount = step % 4
	console.log('stepCount', stepCount)
	if(isRight){
		if(stepCount === 0){
			player.style.backgroundPosition = '90px 240px'
		}
		if(stepCount === 1){
			player.style.backgroundPosition = '180px 240px'
		}
		if(stepCount === 2){
			player.style.backgroundPosition = '270px 240px'
		}
		if(stepCount === 3){
			player.style.backgroundPosition = '0px 240px'
		}
	}else{
		if(-stepCount === 0){
			player.style.backgroundPosition = '90px 360px'
		}
		if(-stepCount === 1){
			player.style.backgroundPosition = '180px 360px'
		}
		if(-stepCount === 2){
			player.style.backgroundPosition = '270px 360px'
		}
		if(-stepCount === 3){
			player.style.backgroundPosition = '0px 360px'
		}
	}

}

function moveCamera(leftTo: number){
	window.scrollTo({
		left: leftTo,
		behavior: "smooth"
	});
}
function transCamera(){
	const element = document.getElementById('mainMap');
	let start:any, previousTimeStamp:any;
	let done = false;
	function stepTrans(timestamp:any) {
		if (start === undefined) {
			start = timestamp;
		}
		
		const elapsed = timestamp - start;

		if (previousTimeStamp !== timestamp) {
			// 这里使用 Math.min() 确保元素在恰好位于 200px 时停止运动
			const count = Math.min( 0.001 * elapsed, 2);

			if(count >= 1){
				element.style.transform = `scale(${3-count},${3-count})`;
				element.style.transformOrigin = `50px 550px`
			}else{
				element.style.transform = `scale(${1+count},${1+count})`;
				element.style.transformOrigin = `50px 550px`
			}
			if (count === 2) done = true;
		}
		if (elapsed < 2000) {
			// 2 秒之后停止动画
			previousTimeStamp = timestamp;
			if (!done) {
			 requestAnimationFrame(stepTrans);
			}
		}
	}
	requestAnimationFrame(stepTrans);
}

//节流
function throttle(fn:any, wait:any){
    var timer = null;
    return function(){
        if(timer !== null){
            clearTimeout(timer);
        }
        timer = setTimeout(fn,wait);
    }
}

</script>