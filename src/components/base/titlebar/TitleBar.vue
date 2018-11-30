<template>
    <div class="title-bar">
        <span>{{txt}}</span>
    </div>
</template>

<script>
    export default {
        name: "TitleBar",
        props: {
            txt: {
                type: String,
                default:""
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .title-bar
        height .8rem
        line-height .8rem
        text-align center
        span
            display inline-block
            position relative
            font-weight bold
            color #333
            // 引用父级选择器 即span
            &::before 
                content ''
                position absolute
                top: .4rem
                left -.9rem
                width .6rem
                border .02rem solid #333
                transfrom scale(0.5)
            &::after
                content ''
                position absolute
                top: .4rem
                left -.9rem
                width .6rem
                border .02rem solid #333
                transfrom scale(0.5)
</style>

