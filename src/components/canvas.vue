<template>
	<canvas id="canvas" class="canvas-app"></canvas>
	<div class="skill-gif">
		<img src="src/assets/gif/jg.gif" >
	</div>
</template>

<script setup lang="ts">
import { onMounted, watch } from "vue";

const props = withDefaults(defineProps<{
    anime: any
}>(), {})

// watch(() => props.anime.id, (newId:any) => {

// })

onMounted(() => {
	const eleCvas:HTMLCanvasElement = document.getElementById("canvas");
    const cxt = eleCvas.getContext("2d");

    let x = 0;
    let v = 0;
    let v1 = 0;
    const a = 200;
    const t = 1/60;
    //动画循环
    (function frame() {
      window.requestAnimationFrame(frame);
      //每次动画循环都先清空画布，再重绘新的图形
      cxt?.clearRect(0, 0, eleCvas.width, eleCvas.height);
      //绘制圆
      cxt?.beginPath();
      cxt?.arc(x, 70, 20, 0, (360 * Math.PI) / 180, true);
      cxt?.closePath();
      cxt.fillStyle = "red";
      cxt?.fill();
      //变量递增 假设60fps 一次1/60
      // v＝v0＋at 当前速度公式
      // s＝v0t＋2at＾2 运行距离
      v1 = v + a * t;
      x = x + v * t + a * t * t / 2;
      v = v1;
    })();
})
</script>

<style lang="scss" scoped>
.canvas-app{
    position: fixed;
    top: 0;left: 0;
    width: 1260px;
	height: 930px;
	z-index: 1003;
}
.skill-gif{
	position: fixed;
    top: 0;left: 0;
    width: 1260px;
	height: 930px;
	z-index: 1004;
	display: flex;
    align-items: center;
    justify-content: space-around;
}
</style>