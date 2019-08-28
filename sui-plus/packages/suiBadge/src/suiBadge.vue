<template>
    <div class="content" >
        <span class="rightT" v-if="value">{{dealMax(value)}} </span>
        {{text}}
    </div>
</template>

<script>
export default {
    name:"suiBadge",
    props: {
        text:String,
        value:String,
        max:String
    },
    methods: {
        dealMax(val){
            if(this.max && (!isNaN(val*1))){
                val = this.max + '+';
            }
            return val;
        }
    }
}
</script>

<style lang="scss" scoped>
    .content{
        margin-top:10px;
        display: inline-block;
        padding: 10px 20px;
        position: relative;
        border:1px solid #ccc;
        &:hover{
            color:#409eff;
            border-color: #c6e2ff;
            background-color: #ecf5ff;
            cursor: pointer;
        }
    }

    .rightT{
        position: absolute;
        top: -10px;
        right: -20px;
        background: #f56c6c;
        color:#fff;
        font-size:10px;
        padding:3px 6px;
        border-radius: 10px;
    }
</style>