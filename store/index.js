//(1) 引入Vue 和 Vuex 
import Vue from 'vue'
import Vuex from 'vuex'
//(2) 使用Vuex
Vue.use(Vuex)
//(3) 创建store 对象 

const store = new Vuex.Store({
	//state中是需要管理的全局变量
	state: {
		// 身份 -- 0：普通用户 1：商家用户
		identity: 0
	},
	//mutations 是操作state中变量的方法
	mutations: {
		// 普通用户登录
		personLogin(state) {
			state.identity = 0
		},
		// 商家用户登录
		businessLogin(state) {
			state.identity = 1
		}
	}

})
export default store