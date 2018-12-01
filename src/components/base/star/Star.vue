<template>
    <div class="star" :class="starType">
        <span
            class="star-item"
            v-for="(item, index) of itemClasses"
            :class="item"
            :key="index"
        ></span>
    </div>
</template>

<script>
    const LENGTH = 5
    const CLSON = 'on'
    const CLSHAlF = 'half'
    const CLSOFF = 'off'
    export default {
        name: "Star",
        props: {
            // 尺寸
            size: {
                type: Number,
                default:48
            },
            // 分数
            score: {
                type: Number,
                default:0
            }
        },
        computed: {
            starType () {
                return "star-" + this.size
            },
            itemClasses () {
                let result = []
                let score = Math.floor(this.score * 2) / 2
                // console.log(this.score)                
                let hasDecimal = (score % 1 !== 0)
                let integer = Math.floor(score)

                for(let i = 0; i < integer; i++){
                    result.push(CLSON)
                }

                if(hasDecimal){
                    result.push(CLSHAlF)
                }

                while(result.length < LENGTH){
                    result.push(CLSOFF)
                }
                console.log(result)
                return result
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~style/mixin.styl'
    .star
        &.star-24
            .star-item 
                display: inline-block
                background-repeat: no-repeat
                width: .2rem
                height: .2rem
                background-size: .2rem .2rem
                margin-right: .06rem
                &:last-child 
                    margin-right: 0
                &.on 
                bg-image("~img/star/star24_on")
                
                &.half 
                    bg-image("~img/star/star24_half")
                
                &.off 
                    bg-image("~img/star/star24_off")
                    
            
        &.star-36 
        .star-item 
            width: .3rem
            height: .3rem
            margin-right: .12rem
            background-size: .3rem .3rem
            &:last-child 
                margin-right: 0
            
            &.on 
                bg-image('~img/star/star36_on')
            
            &.half 
                bg-image('~img/star/star36_half')
            
            &.off 
                bg-image('~img/star/star36_off')
            
        &.star-48
            .star-item 
                width: .2rem
                height: .2rem
                margin-right: .06rem
                background-size: .2rem .2rem
                &:last-child 
                    margin-right: 0
                
                &.on 
                    bg-image('~img/star/star24_on')
                
                &.half 
                    bg-image('~img/star/star24_half')
                
                &.off 
                    bg-image('~img/star/star24_off')
</style>

