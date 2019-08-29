<template>
    <div :class="['button', type , tips]">
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
        tips:{
            type:String,
            default:'normal'
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
    }
    .button:hover{
        cursor: pointer;
        opacity:0.50;
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
</style>