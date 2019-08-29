<template>
    <div :class="['button', type , round?'round':'' ,disabled?'disabled':'']">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "sui-button",
    props: {
        type: {
            type: String,
            default: 'normal'
        },
        round:{
            type:Boolean,
            default:false
        },
        disabled:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style lang="scss" scoped>
    
    
    .button{
		max-width: 100px;
        height: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        border-radius: 5px;
        line-height: 30px;
        text-align: center;
        padding: 5px;
        cursor: pointer;
    }
    .button:hover{

        opacity:0.8;
    }
    .normal{
        background: #fff;
        border: 1px solid #ccc;
        color: #ccc;
    }
    .primary{
        background: #409EFF;
        color: #fff;
    }
    .success{
        background: #67C23A;
        color: #fff;
    }
    .info{
        background: #909399;
        color: #fff;
    }
    .warning{
        background: #E6A23C;
        color: #fff;
    }
    .danger{
        background: #F56C6C;
        color: #fff;
    }
    .round{
        border-radius: 30px !important;
    }
    .disabled{
        cursor: not-allowed !important;
        opacity:0.50 ;
    }
    .disabled:hover{
        opacity:0.50 !important;
    }
</style>