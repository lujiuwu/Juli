<template>
	<view class="choice">
		<view class="bg">
			<image class="img" src="https://s2.loli.net/2025/03/01/jUXoZgt6sK2cwpy.png"></image>
		</view>
		<view class="choice-area">
			<view class="header">
				请选择账号类型
			</view>
			<view class="image-area">
				<view @click="gotoDetail(item.type)" class="single-choice" v-for="(item,index) in choice_list"
					:key="index">
					<view class="image">
						<image :src="item.image" class="img"></image>
					</view>
					<view class="title">
						{{item.title}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				choice_list: [{
						image: "https://s2.loli.net/2025/03/01/PibsmS4NXCgtzd3.png",
						title: '个人账号',
						type: "person"
					},
					{
						image: "https://s2.loli.net/2025/03/01/YUkOx95pu2iI1Af.png",
						title: "商家账号",
						type: "business"
					}
				]
			};
		},
		methods: {
			gotoDetail(type) {
				uni.navigateTo({
					url: "/register-pages/" + type + "/" + type
				})
			}
		}
	}
</script>

<style lang="scss">
	.choice {
		background-color: #f3fded;
		height: 100vh;

		.bg {
			width: 100%;

			.img {
				width: 100%;
			}
		}

		.choice-area {
			border-radius: 5px;
			border: 1px solid #C9E4B7;
			background-color: #fff;
			padding: 28rpx 20rpx;
			margin: 40rpx auto 0;
			width: 85%;

			.header {
				margin-bottom: 20rpx;
			}

			.image-area {
				padding: 18rpx;
				gap: 10px;
				display: flex;

				.single-choice {
					flex: 1;

					.image {
						display: flex;
						justify-content: space-around;

						.img {
							width: 160px;
							height: 160px;
						}
					}

					.title {
						text-align: center;
						margin-top: 4px;
						font-size: 30rpx;
						color: #5298F1;
					}

				}
			}
		}
	}
</style>