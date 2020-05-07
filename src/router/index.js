import aa from '../views/aa.vue'
import bb from '../views/bb.vue'
import cc from '../views/cc.vue'
import tutu from '../views/tutu.vue'
import router1 from 'vue-router'
import Vue from "vue";
Vue.use(router1);
const router=new router1({
    routes:[
        {
            path:'/picture',
            name:"picture",
            meta:{
                icon:'',
                title:"图片"
            },
            component:aa,
            children:[
                {
                    path:'tutu',
                    name:"tutu",
                    meta:{
                        icon:'',
                        title:"图详情"
                    },
                    component:tutu,
                }
            ]
        },
        {
            path:'/joke',
            name:"picture",
            meta:{
                icon:'',
                title:"笑话"
            },
            component:bb
        },
        {
            path:'/dt',
            name:"picture",
            meta:{
                icon:'',
                title:"动图"
            },
            component:cc

        }
    ]
});
export default router      //暴露