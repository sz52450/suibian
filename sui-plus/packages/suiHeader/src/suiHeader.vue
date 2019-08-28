<template>
    <div class="haeder">
        <span class="left">← {{title}}</span>|<span class="right">{{content}}</span>
    </div>
</template>
<script>
export default {
    name:"sui-header",
    props:{
        title:{
            type:String,
            default:"返回"
        },
        content:String
        
    }
}
</script>
<style lang="scss" scoped>
    .haeder{
        width: 100%;
        height: 10vh;
        display: flex;
        justify-content: flex-start;
        background: #FFFFFF;
        align-items: center;
    }
    .left{
        padding: 10px;
    }
    .left:hover{
        cursor: pointer;
    }
    .right{
        font-size: 20px;
        padding: 10px;
    }
</style>