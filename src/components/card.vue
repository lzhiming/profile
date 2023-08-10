<template>
	<div class="card" :style="`background-image: url('${icon}');`">
		<el-avatar shape="square" :size="40" :src="squareUrl" class="card-owner" />
        <div class="desc">
            {{ desc }}
        </div>
	</div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const squareUrl = ref('https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png')

const props = withDefaults(defineProps<{
    icon: string;
    desc: number
}>(), {})

</script>

<style scoped lang="scss">
@-webkit-keyframes slide-in-elliptic-bottom-fwd {
  0% {
    -webkit-transform: translateY(600px) rotateX(30deg) scale(0);
            transform: translateY(600px) rotateX(30deg) scale(0);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) rotateX(0) scale(1);
            transform: translateY(0) rotateX(0) scale(1);
    -webkit-transform-origin: 50% -1400px;
            transform-origin: 50% -1400px;
    opacity: 1;
  }
}
@keyframes slide-in-elliptic-bottom-fwd {
  0% {
    -webkit-transform: translateY(600px) rotateX(30deg) scale(0);
            transform: translateY(600px) rotateX(30deg) scale(0);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) rotateX(0) scale(1);
            transform: translateY(0) rotateX(0) scale(1);
    -webkit-transform-origin: 50% -1400px;
            transform-origin: 50% -1400px;
    opacity: 1;
  }
}


.card{
    border-radius: 5px;
    width: 198px;
    height: 150px;
    box-shadow: 0px 3px 5px -2px rgb(5 0 10 / 40%);
    background-size: 100% 100%;
    animation: slide-in-elliptic-bottom-fwd 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    .card-owner{
        position: relative;
        top: -20px;left: -20px;
    }
    .desc{
        border: 1px solid green;
        margin-top: 55px;
        width: 198px;
        height: 54px;
        color: black;
        background-color: white;
        font-size: 16px;
        line-height: 18px;
        font-weight: 500;
    }
}
</style>