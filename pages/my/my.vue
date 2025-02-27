<template>
	<view class="my">
		<!-- 第一部分 -- 背景 -->
		<view class="background">
			<!-- 头像 -- 绝对定位 -->
			<view class="my-avatar">
				<image src="../../static/avatar.jpg" mode="" class="my-avatar-img"></image>
			</view>
		</view>
		<!-- 登录时显示 -->
		<view class="login" v-show="isLogin">
			
			
			<!-- 第三部分 -- 订单信息 -->
			<view class="order">
				<!-- 头部 -->
				<view class="head">
					<!-- 左侧 -- 标题 -->
					<view class="title">
						我的订单
					</view>
					<!-- 右侧 -- 订单图标 -->
					<view class="order-icon">
						<image src="../../static/订单.png" class="order-image"></image>
					</view>
					<!-- 最右侧 -- 指向图标 -->
					<view class="arraw">
						<u-icon name="arrow-right-double" color="#000" size="28"></u-icon>
					</view>
				</view>
				<!-- 主体 -->
				<view class="body">
					<view class="single-list" v-for="(item,index) in listData" :key="index">
						 <view class="icon">
						 	<u-icon :name="item.icon" color="#000" size="50"></u-icon>
						 </view>
						 <view class="text">
						 	{{item.title}}
						 </view>
					</view>
				</view>
			</view>
			<!-- 第四部分 -- 退出登录 & 切换账号 -->
			<view class="aboutLogin">
				<view class="out" @click="show = true">
					<view class="icon">
						<image src="../../static/退出登录.png" class="icon-img"></image>
					</view>
					<view class="title">
						退出登录
					</view>
				</view>
				<view class="change">
					<view class="icon">
						<u-icon name="info-circle" color="#7c7c7c" size="28"></u-icon>
					</view>
					<view class="title">
						关于我们
					</view>
				</view>
			</view>
			<!-- 第五部分 -- 退出登录弹出框 -->
			<view class="loginOut">
				<u-modal @confirm="loginOut" @cancel="show=false" :show="show" :title="title" :content='content' :showCancelButton="true"></u-modal>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show:false,
				title:'提示',
				content:'确认退出登录吗',
				// 控制登录状态
				isLogin:true,
				// 订单数据
				listData:[
					{
						title:'待付款',
						icon:'order'
					},
					{
						title:'待发货',
						icon:'email'
					},
					{
						title:'待收货',
						icon:'bag'
					},
					{
						title:'待评价',
						icon:'chat'
					}
				]
			}
		},
		methods: {
			// 退出登录
			loginOut(){
				
				this.isLogin = false
				this.show = false
			}
		}
	}
</script>

<style lang="scss">
.my{
	background: #E8FADE;
	height: 100vh;
		.background{
			background-color: #D0E5CB;
			height: 380rpx;
			position: relative;
			.my-avatar{
				position: absolute;
				left: 20rpx;
				bottom: -100rpx;
				.my-avatar-img{
					height: 200rpx;
					width: 200rpx;
					border-radius: 100rpx;
				}
			}
		}
		
	.login{
		
		.order{
			padding: 0 28rpx;
			height: 240rpx;
			display: flex;
			flex-direction: column;
			margin-top: 140rpx;
			.head{
				padding-left: 6px;
				flex: 1;
				background-color: #fff;
				border-bottom: 1px solid #B1B1B1;
				line-height: 72rpx;
				display: flex;
				.title{
					flex: 2;
					margin-right: 12rpx;
				}
				.order-icon{
					flex: 7;
					display: flex;
					align-items: center;
					.order-image{
						height: 44rpx;
						width: 44rpx;
					}
				}
			}
			.body{
				padding-top: 20rpx;
				flex: 7;
				background-color: #fff;
				display: flex;
				.single-list{
					flex: 1;
					box-sizing: border-box;
					padding: 0 45rpx;
					text-align: center;
					// background-color: pink;
					display: flex;
					flex-direction: column;
				}
			}
		}
		.aboutLogin{
			display: flex;
			flex-direction: column;
			height: 200rpx;
			padding: 0 28rpx;
			margin-top: 50rpx;
				
			.out,.change{
				
				flex: 1;
				background-color: #fff;
				display: flex;
				padding-left: 20rpx;
				.icon{
					flex: 1;
					display: flex;
					align-items: center;
					.icon-img{
						width: 50rpx;
						height: 50rpx;
						
					}
				}
				.title{
					flex: 7;
					line-height: 100rpx;
				}
				
			}
			.out{
				border-bottom: 1px solid #666;
			}
		}
	}
	.loginout{
		margin-top: 140rpx;
		padding: 0 28rpx;
		.content{
			
			background-color: #fff;
		}
	}
	
}
</style>
