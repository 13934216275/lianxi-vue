<template>
    <div>
        <div class="box" v-for="(v,index) in arr" :key="index" :class="{color:v.color}" @click="dj(index)">{{v.nr}}
        </div>

        <div class="nei" ref="mmm">
            <p>html</p>
            <p>css</p>
            <p>vue</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "list",
        data:function () {
            return{
                arr:[
                    {nr:'111',color:true},
                    {nr:'222',color:false},
                    {nr:'333',color:false}
                ]
            }
        },
        methods:{
            dj:function (index) {
                this.arr.forEach( (el,index)=>{
                    el.color=false;
                    this.$refs.mmm.children[index].style.display="none"
                });
                this.arr[index].color=true;
                this.$refs.mmm.children[index].style.display="block"
            }
        }
    }

</script>

<style scoped>
    .box{
        width: 100px;
        height: 50px;
        background: red;
        float: left;
        margin-right: 30px;
    }
    .nei{
        position: relative;
    }
    .nei p{
        font-size: 20px;
        position: absolute;
        top:60px;
    }
    .nei p:nth-child(2){
        display: none;
    }
    .nei p:last-child{
        display: none;
    }
    .color{
        background: pink;
    }
</style>