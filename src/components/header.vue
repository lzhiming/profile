<template>
	<div class="header">
		<div class="title">
            LZMING
        </div>
        <a href="https://github.com/lzhiming" target="_blank" rel="noopener noreferrer">            
            <img class="is-icon" src="../assets/fluidicon.png" alt="">
        </a>
	</div>
</template>

<style scoped lang="scss">
    .header{
        display: flex;
        height: 50px;
        padding: 7px;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0px 3px 5px -2px rgb(5 0 10 / 40%);
        .title{
            font-size: 2rem;
            font-weight: 500;
        }
    }
    .is-icon{
        width: 36px; height: 36px;
    }
</style>