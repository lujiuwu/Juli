<template>
	<view class="message">
		<!-- 第一部分 -- 搜索组件 -->
		<view class="search">
			<u-search placeholder="点击搜索" v-model="keyword" :show-action="false" :height="46" :bg-color="'#fff'" :border-color="'#ccc'"></u-search>
		</view>
		<!-- 第二部分 -- 信息区域 -->
		<view class="messages-area">
			<!-- 循环渲染信息数据 -->
			<view v-for="(item,index) in messages" :key="index" class="single-message" @click="gotoDetail(item)">
				<!-- 头像 -->
				<view class="avatar">
					<image :src="item.avatar" class="avatar-img"></image>
				</view>
				<!-- 名称 -->
				<view class="name">
					{{item.name}}
				</view>
				<!-- 时间 -->
				<view class="time">
					{{item.time}}
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
				keyword:"",
				// 信息数据
				messages:[
					{
						// 发送者名称
						name:'通知',
						// 发送者头像
						avatar:'../../static/logo.png',
						// 发送时间
						time:'2024-1-2'
					},
					{
						// 发送者名称
						name:'果园信息',
						// 发送者头像
						avatar:'https://img2.imgtp.com/2024/05/24/DoB6GMh3.png',
						time:'2024-1-2'
					},
					{
						// 发送者名称
						name:'订单信息',
						// 发送者头像
						avatar:'https://img2.imgtp.com/2024/05/24/DoB6GMh3.png',
						time:'2024-1-2'
					}
				]
			}
		},
		methods: {
			gotoDetail(data){
				const Data = JSON.stringify(data)
				uni.navigateTo({
					url:'/detail-pages/message-detail/message-detail?data='+Data
				})
			}
		}
	}
</script>

<style lang="scss">
.message{
	background: #E8FADE;
	.search{
		padding: 10rpx 26rpx;
	}
	.messages-area{
		background: linear-gradient(#E8FADE, #fff);
		height: 800rpx;
		border-radius: 44rpx 44rpx 0 0 ;
		.single-message{
			display: flex;
			height: 132rpx;
			background-color: #FBFDF8;
			margin-bottom: 4rpx;
			padding: 0 26rpx;
			.avatar{
				flex: 1;
				display:flex;
				align-items: center;
				.avatar-img{
					width: 100rpx;
					height: 100rpx;
					border-radius: 10rpx;
				}
			}
			.name{
				flex: 3;
				padding-top: 20rpx;
			}
			.time{
			   padding-top: 20rpx;
				flex: 1;
				color: #666;
				font-size: 26rpx;
			}
		}
	}
}
</style>
