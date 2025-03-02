<template>
	<view class="business">
		<view class="bg">
			<image class="img" src="https://s2.loli.net/2025/03/01/jUXoZgt6sK2cwpy.png"></image>
		</view>
		<view class="main-area">
			<view class="login-form">
				<view class="single-input">
					<u--input prefixIcon="checkmark-circle" placeholder="请输入果园编号" border="surround"
						v-model="phone"></u--input>
				</view>
				<view class="single-input">
					<view class="header">
						请上传吧果园证书
					</view>
					<view class="body">
						<view class="front">
							点击上传正面
						</view>
						<view class="back">
							点击上传背面
						</view>
					</view>
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
				t_password: "",
				fileList1: [],
				fileList6: []
			};
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.business {
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
					margin-bottom: 20rpx;

					.body {
						display: flex;
						gap: 10px;

						.back,
						.front {
							flex: 1;
							background-color: rgba(0, 0, 0, 0.7);
							color: #fff;
							height: 165px;
							margin-top: 16rpx;
							text-align: center;
							line-height: 165px;
							border-radius: 5px;
						}
					}
				}

			}

			.login-btn {
				margin: 30rpx 0;
			}

		}
	}
</style>