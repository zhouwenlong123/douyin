
//初始值
const state = {
    num:0
}

//同步
const mutations = {
  updataFabulous(state,payload) {
    state.num = payload
  }
}

//异步
const actions ={

}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}