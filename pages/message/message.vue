<template>
	<view class="message">
		<!-- 第一部分 -- 搜索组件 -->
		<view class="search">
			<u-search placeholder="点击搜索" v-model="keyword" :show-action="false" :height="46" :bg-color="'#fff'"
				:border-color="'#ccc'"></u-search>
		</view>
		<!-- 第二部分 -- 信息区域 -->
		<view class="messages-area">
			<!-- 循环渲染信息数据 -->
			<view v-for="(item,index) in messages" :key="index" class="single-message">
				<!-- 头像 -->
				<view class="avatar">
					<image :src="item.avatar" class="avatar-img"></image>
				</view>
				<!-- 名称 -->
				<view class="name">
					<view class="title">
						{{item.title}}
					</view>
					<view class="des">
						{{item.des}}
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
				// 搜索框默认语句
				keyword: "",
				// 信息数据
				messages: [{
						// 发送者名称
						title: '通知',
						des: '【状态通知】您的果树需要浇水啦~',
						// 发送者头像
						avatar: 'https://s2.loli.net/2025/02/28/6TCzhafOY2xqLRJ.png',
						// 发送时间

					},
					{
						// 发送者名称
						title: '果园信息',
						des: '【发货提醒】您购买的“好吃多汁的高品质...',
						// 发送者头像
						avatar: 'https://s2.loli.net/2025/02/28/Cjsdu27h8IYab9y.png',

					},
					{
						// 发送者名称
						title: '订单信息',
						des: '【状态提醒】您反馈的问题得到了回应',
						// 发送者头像
						avatar: 'https://s2.loli.net/2025/02/28/zCNE8Gr6Iwhjldk.png',

					}
				]
			}
		},
		methods: {}
	}
</script>

<style lang="scss">
	.message {
		background-color: #f3fded;

		.search {
			padding: 10rpx 26rpx;
		}

		.messages-area {
			background: linear-gradient(#E8FADE, #fff);
			height: 800rpx;
			border-radius: 44rpx 44rpx 0 0;

			.single-message {
				display: flex;
				height: 132rpx;
				background-color: #FBFDF8;
				margin-bottom: 4rpx;
				padding: 0 26rpx;

				.avatar {
					flex: 1;
					display: flex;
					align-items: center;

					.avatar-img {
						width: 100rpx;
						height: 100rpx;
						border-radius: 10rpx;
					}
				}

				.name {
					flex: 5;
					padding-top: 20rpx;
					display: flex;
					flex-direction: column;

					.title {
						font-size: 32rpx;
					}

					.des {
						font-size: 28rpx;
						margin-top: 10rpx;
						color: #666;
					}
				}


			}
		}
	}
</style>