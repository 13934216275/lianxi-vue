<template>
    <div>
        <!--<router-view ></router-view>-->
        <!--<router-link :to="{name:'tutu'}" class="tz" query="{id:321}">跳转</router-link>-->
        <!--<button @click="yy">tz</button>-->
    <h1 class="hello">搞笑图片{{$store.getters.pp}}</h1>
        <ul class="bj">
            <li class="box" v-for="(v,index) in arr" :key="index">
                <div class="box-title">{{v.title}}</div>
                <div class="box-img">
                    <img :src="v.img" alt="">
                </div>
                <div class="box-time">
                    <i class="iconfont iconshizhong"><p>{{v.time | date('yyyy-MM-dd hh:mm:ss')}}</p></i>
                </div>
            </li>
    </ul>
    </div>
</template>
<script>
    import Vue from 'vue'
    Vue.filter("date",function(val,format='yyyy-MM-dd'){
        var date = new Date(val);
        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
        }
        let o = {
            'M+': date.getMonth() + 1,
            'd+': date.getDate(),
            'h+': date.getHours(),
            'm+': date.getMinutes(),
            's+': date.getSeconds()
        };
        for(let k in o){
            if (new RegExp(`(${k})`).test(format)) {
                let str = o[k] + '';
                format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : ('00' + str).substr(str.length));
            }
        }
        return format;
    });
    export default {
        name: "aa",
        data:function () {
            return{
                arr:[
                    {
                        title:'媳妇给我炒菜——韭菜鸡蛋',
                        img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4206111937,2652758862&fm=15&gp=0.jpg',
                        time:new Date()
                    },
                    {
                        title:'投其所好是很重要的',
                        img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4206111937,2652758862&fm=15&gp=0.jpg',
                        time:new Date()
                    },
                    {
                        title:'媳妇给我炒菜——韭菜鸡蛋',
                        img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4206111937,2652758862&fm=15&gp=0.jpg',
                        time:new Date()
                    },
                    {
                        title:'媳妇给我炒菜——韭菜鸡蛋',
                        img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4206111937,2652758862&fm=15&gp=0.jpg',
                        time:new Date()
                    },
                    {
                        title:'媳妇给我炒菜——韭菜鸡蛋',
                        img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4206111937,2652758862&fm=15&gp=0.jpg',
                        time:new Date()
                    },
                ]
            }
        },
        created(){    //可以输出看东西
            console.log(this.$store.getters.pp);
            this.$store.commit("updatearr");
          console.log(this.$store.state.arr);
            this.$store.dispatch("tj");
            console.log(this.$store.state.arr);
        },
        methods:{
            yy:function () {

            }
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding:0;
        list-style: none;
    }
    .box-title{
        margin-left: 0.2rem;
        font-size: 0.4rem;
    }
    .box-img img{
        width: 100%;
        margin-top:0.3rem;
    }
    .box-time{
        position: relative;
    }
    .box-time i p{
        display: inline;
        position: absolute;
        right: 0.2rem;
        top: 0.15rem;
    }
    .box-time i{
        display: inline-block;
        margin-left: 4.6rem;
        margin-top: 0.2rem;

    }
    .bj{
        background:beige;
        margin-top: 0.8rem;
        margin-bottom: 0.88rem;
    }
    .box{
        width: 96%;
        height: auto;
        background: #fff;
        position: relative;
        /*margin-top: 0.2rem;*/
        margin: 0.2rem auto;
        padding: 0.3rem 0;
        box-sizing: border-box;
    }
    .hello{
        width: 100%;
        height: 0.8rem;
        background: orange;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9;
        text-align: center;
        font-size: 0.4rem;
        line-height: 0.8rem;
    }
    .tz{
        margin-top: 1rem;
        display: block;
    }
</style>