    <!-- 商家列表 -->
<template>
    <!-- border-bottom 来自全局css border.css-->
    <div class="seller-list-item" @click="toRestaurant">
        <div class="left">
            <!-- v-lazy: lazyload 特有指令 -->
            <img v-lazy="data.pic_url">
        </div>
        <div class="right">
            <div class="name">{{ data.name }}</div>
            <div class="mid clearfix">
                <star 
                    class="fl"
                    :size="24" 
                    :score="data.wm_poi_score"
                ></star>
                <span class="count fl">月售{{ data.month_sale_num }}</span>
                <span class="distance fr">{{ data.distance }}</span>
                <span class="time fr">{{ data.avg_delivery_time }}分钟</span>
            </div>

            <div class="fee">
                <span class="start">{{ data.min_price_tip }}</span>
                <span class="deliver">{{ data.shipping_fee_tip }}</span>
                <span class="average">{{ data.average_price_tip }}</span>
            </div>
            <div class="activity" v-for="sup of data.discounts2" :key="sup.id">
                <p><img :src="sup.icon_url" />{{sup.info}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Star from 'base/star/Star'
    export default {
        name: "SellerListItem",
        props: {
            data: {
                type: Object,
                default () {return {}}
            }
        },
        components: {
            Star
        },
        methods: {
            toRestaurant(){
                this.$emit(toRestaurant)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~style/mixin.styl'
    .seller-list-item
        // margin-top .1rem
        margin-bottom .1rem
        display flex
        flex-direction row
        padding .2rem 0
        overflow hidden
        onepx("bottom")
        &:last-child
            &:after
                border-top 0
        .left
            flex 0 0 1.8rem
            width 1.8rem
            img
                display block
                width 1.4rem
                margin 0 auto
        .right
            flex 1 
            display flex 
            flex-direction column 
            padding-right .3rem 
            overflow hidden 
            .name
                font-size .34rem
                color #333
                overflow hidden
                font-weight bold
                margin-right .3rem
                elipsis(1)
            .mid
                flex 1 
                font-size .24rem 
                color #666 
                margin-top .14rem 
                .count
                    margin-left .2rem 
                .distance
                    margin-left .1rem
                    margin-top .04rem
                .time
                    margin-right .2rem 
                    position relative 
                    right-bar()
            .fee
                flex 1 
                font-size .24rem
                margin-top .14rem
                span
                    display inline-block 
                    color #666
                .start
                    right-bar()
                .deliver
                    right-bar()
            .activity
                flex 1
                font-size .26rem
                color #b0b0b0
                margin-top .14rem
                p
                    ellipsis()
                img
                    width .32rem
                    height .32rem
                    margin-right .1rem
                    vertical-align top
</style>

