<template>
	<view class="person">
		<view class="bg">
			<image class="img" src="https://s2.loli.net/2025/03/01/jUXoZgt6sK2cwpy.png"></image>
		</view>
		<view class="main-area">
			<view class="login-form">
				<view class="single-input">
					<u--input prefixIcon="account" placeholder="请输入手机号" border="bottom" v-model="phone"></u--input>
				</view>
				<view class="single-input">
					<u--input prefixIcon="bell" placeholder="请输入验证码" border="bottom" v-model="id"></u--input>
				</view>
				<view class="single-input">
					<u--input class="single-input" prefixIcon="lock" placeholder="请输入密码" border="bottom"
						v-model="password"></u--input>
				</view>
				<view class="single-input">
					<u--input class="single-input" prefixIcon="lock" placeholder="请再次确认密码" border="bottom"
						v-model="t_password"></u--input>
				</view>


			</view>
			<view class="login-btn">
				<u-button size="large" color="linear-gradient(#F4C33F,#F28F69)" shape="circle" type="warning"
					text="立即注册"></u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone: "",
				id: "",
				password: "",
				t_password: ""
			};
		}
	}
</script>

<style lang="scss">
	.person {
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

		}
	}
</style>