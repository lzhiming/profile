<template>
    <div class="info-card" :style="getHerotype(info.heroType)">
        <div class="base-info">
            <el-avatar shape="square" :size="50" :src="squareUrl" class="card-title" />
        <div class="nick-name">{{ info.nickName }}   {{ info.level }}</div>
        </div>
        <div class="card-players">
            <div class="player-info">
                <div>10</div>
                <div>20</div>
            </div>
            <div class="buff-info">
                <div class="buff-item">10</div>
                <div class="buff-item">20</div>
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

let typeSytlr:any = {
    '1': 'border-color: red',
    '2': 'border-color: green',
    '3': 'border-color: white',
    '4': 'border-color: yellow'
}
function getHerotype(type: string){
    if(!type){
        return ''
    }
    return typeSytlr[type]
}

</script>

<style scoped lang="scss">
$border-grey: #efeff0;
.info-card{
    border-radius: 15px;
    border: 2px solid;
    height: 180px;
    box-shadow: 0px 3px 5px -2px rgb(5 0 10 / 40%);
    background: #f7f7f795;
    background-size: 100% 100%;
}
.base-info{
    display: flex;
    justify-content: space-between;
}
.card-title{
   border: 2px solid yellowgreen;
   position: relative;
   top: -20px;
}
.nick-name{
    
}
.card-players{
    .player-info{
        display: flex;
        justify-content: space-around;
    }
    .buff-info{
        display: flex;
        gap: 5px;
        margin-top: 10px;
        .buff-item{
            width: 1rem;
            height: 1rem;
        }
    }
    .player-cards{
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        padding: 5px;
        justify-content: space-evenly;
        .card{
            height: 60px;
            width: 60px;
            margin-top: 5px;
            border-radius: 20px;
            background: #f7f7f7;
            box-shadow:  5px 5px 21px #d2d2d2,
                        -5px -5px 21px #ffffff;
        }
    }
}
</style>
