import Vuex from 'vuex';
import Vue from 'vue'
import A from './a.js'
import B from './b.js'
Vue.use(Vuex);
const store=new Vuex.Store({
    state:{
        arr:123
    },
    getters:{
        pp:function (state) {
            return state.arr+321
        }
    },
    mutations:{
        updatearr:function (state) {
            state.arr=500
        }
    },
    actions: {
        tj:function (store,str) {
            store.commit("updatearr",str)
        }
    },
    modules:{
        aa:A,
        bb:B
    },
});
export default store