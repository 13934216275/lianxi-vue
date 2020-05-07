<template>
    <div>
        <h1 class="hello">笑话</h1>
        <ul class="bj">
            <li class="box"  v-for="(v,index) in arr" :key="index">
                <div class="box-title">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{v.title}}</div>
                <div class="box-nr">
                   {{v.nr}}
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
        name: "bb",
        data:function () {
            return{
                arr:[
                    {
                        title:'你TM现在在我心里就是个菩萨',
                        nr:"男生拉着女生沮丧着脸说，再给我一次机会，求求你！说好不提分手的！    女生甩开男孩的手说：你TM现在在我心里就是个菩萨，出来拜拜我什么都不想做。",
                        time:45362314678
                    },
                    {
                        title:'你TM现在在我心里就是个菩萨',
                        nr:'男生拉着女生沮丧着脸说，再给我一次机会，求求你！说好不提分手的！    女生甩开男孩的手说：你TM现在在我心里就是个菩萨，出来拜拜我什么都不想做。',
                        time:45362314678
                    },
                    {
                        title:'你TM现在在我心里就是个菩萨',
                        nr:'男生拉着女生沮丧着脸说，再给我一次机会，求求你！说好不提分手的！    女生甩开男孩的手说：你TM现在在我心里就是个菩萨，出来拜拜我什么都不想做。',
                        time:45362314678
                    },
                    {
                        title:'你TM现在在我心里就是个菩萨',
                        nr:'男生拉着女生沮丧着脸说，再给我一次机会，求求你！说好不提分手的！    女生甩开男孩的手说：你TM现在在我心里就是个菩萨，出来拜拜我什么都不想做。',
                        time:45362314678
                    },
                ]
            }
        },
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
        border-bottom: 0.02rem #ccc solid;
    }
    .box-nr{
        margin-top:0.3rem;
        width:7.2rem;
    }
    .box-time{
        position: relative;
        border-top: 0.02rem #ccc solid;
        margin-top: 0.2rem;
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
        height: auto;
    }
    .box{
        width: 96%;
        height: auto;
        background: #fff;
        position: relative;
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
        margin-bottom: 0.2rem;
    }
</style>