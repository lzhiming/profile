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
	fn1()
})

function fn1() {
    let canvas:any = document.getElementById('canvas');
    let ctx:any = canvas?.getContext('2d');

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;	

	const imageU = new Image(50, 50); 
	imageU.src = "src/assets/gif/jg.gif";

    function random(min:any, max: any) {
        return Math.random() * (max - min) + min;
    }


	//ctx.rotate(Math.PI/2);
    function xq(x:any, y:any, dx:any, dy:any, radius:any, color:any) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;

        this.draw = function() {
			// let imageX = this.x, imageY = this.y
			
			// ctx.drawImage(imageU, imageX, imageY);
			
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false)
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
        }

        this.updata = function() {
			let xInPath = this.x >= 50 && this.x <= 1200
			let yInPath = this.y >= 50 && this.y <= 800
            
			if(xInPath && yInPath){
				this.x += this.dx;
				this.y += this.dy;
				this.draw();
			}
        }
    }

    let items:any = [];

    let radius = random(10, 20);
    let x = 100;
    let y = 100;
    let dx = 10;
    let dy = 0;
	let dColor = `rgb(${random(0,255)},${random(0,255)},${random(0,255)}`
	for(let pathI = 0; pathI <=50; pathI+=10){
		let newBall = new xq(x+pathI, y, dx, dy, radius, `${dColor}, ${pathI/100})`)		
    	items.push(newBall)
	}

	// let dColor2 = `rgb(${random(0,255)},${random(0,255)},${random(0,255)}`
	// for(let pathI = 0; pathI <=100; pathI+=20){
	// 	let newBall = new xq(x, y+pathI, 0, 5, radius, `${dColor2}, ${pathI/100})`)		
    // 	items.push(newBall)
	// }

    // 动画
    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0,0,w,h)
        ctx.fillStyle = "rgba(255,255,255,0.01)";
        ctx.fillRect(0, 0, w, h);
        for (let b of items) {
            b.updata();
        }
    }
    animate();
}

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