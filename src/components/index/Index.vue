<template>
    <div class="index">
        <div class="wrapper">
            <mt-swipe
                :auto="0"
                v-for="item of swipeData"
                :key="item.id"
            >
                <mt-swipe-item>
                    <img :src="item.pic">
                </mt-swipe-item>
            </mt-swipe>
        </div>

        <div class="types">
            <type-item
                v-for="item in types"
                :key="item.id"
                :ico="item.ico"
                :txt="item.txt"
                @toList="toListHandle(item)"
            > </type-item>
        </div>
        <!-- 分割线 -->
        <cross-line></cross-line>
    </div>
</template>

<script>
    import TypeItem from 'base/typeitem/TypeItem'
    import CrossLine from 'base/crossline/CrossLine'
    export default {
        name: 'Index',
        components: {
            TypeItem,
            CrossLine
        },
        methods: {
            toListHandle(item){
                // console.log(item.txt)
                // TODO restaurnt_list
                console.log("I want to gt to " + item.txt)
            }
        },
        data () {
            return {
                swipeData: [
                    {
                        id: "000",
                        pic: require('./img/swipe/bannertemp.e8a6fa63.jpg')
                    }
                ],
                types: [
                    {
                        id: "002",
                        ico: require('./img/types/types (7).png'),
                        txt: '美食'
                    },
                    {
                        id: "003",
                        ico: require('./img/types/types (0).png'),
                        txt: '美团超市'
                    },
                    {
                        id: "004",
                        ico: require('./img/types/types (1).png'),
                        txt: '生鲜果蔬'
                    },
                    {
                        id: "005",
                        ico: require('./img/types/types (5).png'),
                        txt: '甜点饮品'
                    },
                    {
                        id: "006",
                        ico: require('./img/types/types (4).png'),
                        txt: '正餐优选'
                    },
                    {
                        id: "007",
                        ico: require('./img/types/types (2).png'),
                        txt: '美团专送'
                    },
                    {
                        id: "008",
                        ico: require('./img/types/types (3).png'),
                        txt: '能量西餐'
                    },
                    {
                        id: "009",
                        ico: require('./img/types/types (6).png'),
                        txt: '精品小吃'
                    }
                ],
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .wrapper
        overflow hidden
        height 3.4rem
        font-size .6rem
        text-align center
        img
            width 100%
            height 100%
    .types
        overflow hidden
        padding-bottom .4rem
        background-color #fff
    .corss-line
        background-color #ebebeb
        width 100%
        height .32rem
</style>
