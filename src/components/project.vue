<template>
    <div class="info-card">
        <el-avatar shape="square" :size="50" :src="squareUrl" class="card-title" />
        <div class="card-players">
            <div class="player-info">
                {{ info.nickName }}   {{ info.level }}
            </div>
            <div class="player-cards">
                <div class="card" v-for="(card, key) in info.cards" :key="key">
                    <el-image v-if="card" style="width: 60px; height: 60px" :src="card" fit="fill" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = withDefaults(defineProps<{
    info: any
}>(), {})

const count = ref(0);

const squareUrl = ref('https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png')

</script>

<style scoped lang="scss">
$border-grey: #efeff0;
.info-card{
    border-radius: 5px;
    border-top: 1px solid $border-grey;
    width: 120px;
    height: 160px;
    box-shadow: 0px 3px 5px -2px rgb(5 0 10 / 40%);
    background: #f7f7f7;
    background-size: 100% 100%;
}
.card-title{
   border: 2px solid yellowgreen;
   position: relative;top: -20px;
   margin: auto;
}
.card-players{
    .player-info{

    }
    .player-cards{
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        .card{
            height: 60px;
            width: 60px;
            margin-top: 5px;
            border-radius: 20px;
            background: #f7f7f7;
            box-shadow:  11px 11px 21px #d2d2d2,
                        -11px -11px 21px #ffffff;
        }
    }
}
</style>
