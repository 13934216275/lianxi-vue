import Vuex from 'vuex';
import Vue from 'vue'
Vue.use(Vuex);
const a={
    state:{
        arr:123
    },
    getters:{
        pp2:function (state) {
            return state.arr+321
        }
    },
    mutations:{
        updatearr2:function (state) {
            state.arr=500
        }
    },
    actions: {
        tj2:function (store,str) {
            store.commit("updatearr2",str)
        }
    },
    modules:{
    },
};
export default a;