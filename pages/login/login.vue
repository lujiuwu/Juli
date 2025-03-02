<template>
	<view class="login">
		<view class="bg">
			<image class="img" src="https://s2.loli.net/2025/03/01/jUXoZgt6sK2cwpy.png"></image>
		</view>
		<view class="main-area">
			<view class="login-form">
				<view class="single-input">
					<u--input fontSize="16" :customStyle="inputStyle" border="bottom" prefixIcon="account"
						placeholder="请输入手机号" v-model="phone"></u--input>
				</view>
				<view class="single-input">
					<u--input fontSize="16" :customStyle="inputStyle" border="bottom" prefixIcon="lock"
						placeholder="请输入密码" v-model="password"></u--input>
				</view>

			</view>
			<view class="login-btn">
				<u-button size="large" color="linear-gradient(#F4C33F,#F28F69)" @click="gotoLogin()" shape="circle"
					type="warning" text="立即登录"></u-button>
			</view>
			<view class="des-text" @click="gotoRegister()">
				还没有账号?
				<span style="color: #F3A259;">立即注册</span>
			</view>
		</view>

	</view>
</template>


<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		computed: {
			...mapState(['identity'])
		},
		data() {
			return {
				phone: "",
				password: "",
				person: {
					phone: "123"
				},
				business: {
					phone: "456"
				},
				inputStyle: {
					height: "45px",
					lineHeight: "45px"
				}
			};
		},

		methods: {
			gotoIndex() {
				uni.switchTab({
					url: "/pages/index/index"
				})
			},
			gotoRegister() {
				uni.navigateTo({
					url: "/register-pages/choice/choice"
				})
			},
			gotoLogin() {
				if (this.phone === this.person.phone) {
					this.$store.commit('personLogin')
					uni.switchTab({
						url: "/pages/index/index"
					})

				} else if (this.phone === this.business.phone) {
					this.$store.commit("businessLogin")
					uni.switchTab({
						url: "/pages/index/index"
					})
				} else {
					console.log("r")
				}

			}
		}
	}
</script>

<style lang="scss">
	.login {
		height: 100vh;
		width: 100vw;
		background-color: #f3fded;

		.bg {
			width: 100%;

			.img {
				width: 100%;
			}
		}

		.main-area {
			margin-top: 40rpx;
			padding: 20rpx 30rpx;

			.login-form {
				border: 2px solid #C9E4B7;
				background-color: #fff;
				border-radius: 5px;
				padding: 20rpx;

				.single-input {
					height: 45px;
					line-height: 45px;
					margin-bottom: 20rpx;

				}

			}

			.login-btn {
				margin: 30rpx 0;
			}

			.des-text {
				text-align: right;
			}

		}
	}
</style>