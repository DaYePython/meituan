<template>
    <div class="item" @click="icoClickHandle">
        <img :src="ico">
        <span>{{txt}}</span>
    </div>
</template>

<script>
export default {
    name: "TypeItem",
    props: {
        ico: {
            type: String,
            default:""
        },
        txt: {
            type: String,
            default:""
        }
    },
    methods: {
        icoClickHandle () {
            this.$emit('toList')
        }
    },
}
</script>

<style lang="stylus" scoped>
    .item
        float left
        width 25%
        padding-top .28rem
        img 
            display block
            width 1rem
            margin 0 auto .24rem
        span 
            display block
            font-size .28rem
            line-height .28rem
            text-align center
            color #2f2f2f
</style>
