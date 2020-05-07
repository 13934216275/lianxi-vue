import Vuex from 'vuex';
import Vue from 'vue'
Vue.use(Vuex);
const b={
    state:{
        num:123
    },
    getters:{
        pp1:function (state) {
            return state.num+321
        }
    },
    mutations:{
        updatenum1:function (state) {
            state.num=500
        }
    },
    actions: {
        tj1:function (store,str) {
            store.commit("updatearr1",str)
        }
    },
    modules:{
    },
};
export default b;