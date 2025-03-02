<template>
	<view class="time-log">
		<view v-for="(item,index) in log_list" :key="index" class="single-log">
			<view class="header">
				<span style="font-weight: bold;font-size: 36rpx;margin-right: 5px;">{{item.day}}</span>
				<span>{{item.month}}月,{{item.year}}</span>
			</view>
			<view class="body">
				<view class="text-content">
					{{item.content}}
				</view>
				<view class="image-content" v-show="item.image">
					<image :src="item.image" class="img"></image>
				</view>
			</view>
			<view class="tool">
				<view class="icon">
					<u-icon name="chat" size="28"></u-icon>
				</view>
				<view class="icon">
					<u-icon name="bookmark" size="28"></u-icon>
				</view>
				<view class="icon">
					<u-icon name="trash" size="28"></u-icon>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				log_list: [{
						day: '30',
						month: '10',
						year: '2025',
						content: "今天种植了一棵柑橘果树",
						image: "https://tse2-mm.cn.bing.net/th/id/OIP-C.-fooMZ0QwFQUBsP2tXG2kgHaE7?rs=1&pid=ImgDetMain"
					},
					{
						day: '27',
						month: '10',
						year: '2025',
						content: "今天种植了一棵柑橘果树"
					},
					{
						day: '20',
						month: '10',
						year: '2025',
						content: "今天种植了一棵柑橘果树"
					},
				]
			};
		}
	}
</script>

<style lang="scss">
	.time-log {
		background-color: #F3FDED;
		height: 100vh;
		padding: 20rpx;

		.single-log {
			border-bottom: 1px solid #5A8540;
			padding: 20rpx;

			.header {
				margin-bottom: 20rpx;
			}

			.body {
				.text-content {
					height: 100rpx;
					font-size: 32rpx;
					margin-bottom: 20rpx;
				}

				.image-content {
					height: 350rpx;

					.img {


						height: 100%;
					}
				}
			}

			.tool {
				height: 50rpx;
				display: flex;
				justify-content: flex-end;
				margin-top: 20rpx;

				.icon {
					width: 50rpx;
				}
			}

		}

	}
</style>