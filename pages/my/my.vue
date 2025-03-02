<template>
	<view class="my">
		<!-- 第一部分 -- 背景 -->
		<view class="background">
			<!-- 头像 -->
			<view class="base-info">
				<view class="info-avatar">
					<image src="../../static/avatar.jpg" mode="" class="my-avatar-img"></image>
				</view>
				<view class="info-text">
					<view class="user-name">
						用户12306
					</view>
					<view class="wx-number">
						绑定邮箱：12306
					</view>
					<view class="ip-info">
						IP属地：四川
					</view>
				</view>
			</view>
			<!-- 设置 -->
			<view class="operation-area">
				<view class="tag" @click="loginOut">
					退出登录
				</view>
				<view class="tag">
					<u-icon name="setting" color="#fff" size="18"></u-icon>
				</view>
			</view>
			<!-- 快捷功能键 -->
			<view class="function-btns">
				<view class="single-function" v-for="(item,index) in function_btns" :key="index">
					<view class="title">
						{{item.title}}
					</view>
					<view class="des">
						{{item.des}}
					</view>
				</view>
			</view>
		</view>

		<view class="function-list">
			<view class="single-function" v-for="(item,index) in function_list" :key="index">
				<view class="icon">
					<u-icon :name="item.icon" size="27" :color="item.color"></u-icon>
				</view>
				<view class="title">
					{{item.title}}
				</view>
			</view>
		</view>
		<!-- 商家用户 -->
		<view class="businessShow" v-if="identity">
			<view class="front">
				<view v-for="(item,index) in package_list" :key="index" class="single-ele">
					<view class="number">
						{{item.number}}
					</view>
					<view class="title">
						{{item.title}}
					</view>
				</view>
			</view>
			<view class="back">
				<view class="c1">
					<view class="icon">
						<u-icon name="order" size="24" color="#fff"></u-icon>
					</view>
					<view class="text">
						<span class="title">工单</span>
						<span class="number">1</span>
					</view>
				</view>
				<view class="c2">
					<view class="icon">
						<u-icon name="warning" size="24" color="#fff"></u-icon>
					</view>
					<view class="text">
						<span class="title">处罚预警</span>
						<span class="number">2</span>
					</view>
				</view>
			</view>
		</view>
		<!-- 普通用户 -->

		<view class="personShow" v-else>
			<view class="header">
				猜你想看
			</view>
			<view class="body">
				<view class="single-good" v-for="(item,index) in goods_list" :key="index">
					<view class="image">
						<image :src="item.img" class="img"></image>
					</view>
					<view class="title">
						{{item.name}}
					</view>
					<view class="detail">
						<span class="price">￥{{item.commdityPrice}}元/斤</span>
						<span class="sale">销量 12</span>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		computed: {
			...mapState(['identity'])
		},
		data() {
			return {
				show: false,
				title: '提示',
				content: '确认退出登录吗',
				// 控制登录状态
				isLogin: true,
				// 订单数据
				listData: [{
						title: '待付款',
						icon: 'order'
					},
					{
						title: '待发货',
						icon: 'email'
					},
					{
						title: '待收货',
						icon: 'bag'
					},
					{
						title: '待评价',
						icon: 'chat'
					}
				],
				// 快捷功能键列表
				function_btns: [{
						title: "采购",
						des: "好吃又好买"
					},
					{
						title: "订单",
						des: "查看我的订单"
					},
					{
						title: "购物车",
						des: "10个商品"
					}
				],
				function_list: [{
						icon: 'fingerprint',
						title: '认证信息(实名&绑定)',
						color: "#7AC24F"
					},
					{
						icon: "question-circle",
						title: '帮助中心',
						color: "#44D7B6"
					},
					{
						icon: 'kefu-ermai',
						title: "联系客服",
						color: "#0191FF"
					},
					{
						icon: 'more-circle',
						title: "关于我们",
						color: "#DC9613"
					},
					{
						icon: "chat",
						title: "我要反馈",
						color: "#D1B456"
					}
				],
				package_list: [{
						title: "待付款",
						number: 0
					},
					{
						title: "待发货",
						number: 5
					},
					{
						title: "待售后",
						number: 0
					},
					{
						title: "待评价",
						number: 0
					}
				],
				goods_list: [{
						img: "https://s2.loli.net/2025/02/28/TGcwzDmtE3gX1ZK.png",
						name: '好吃多汁高品质柑橘',
						commdityPrice: 20
					},
					{
						img: "https://s2.loli.net/2025/02/28/RSgnp9szO5YxvAa.png",
						name: '好吃多汁高品质柑橘',
						commdityPrice: 12
					},
					{
						img: "https://s2.loli.net/2025/02/28/bAC3kgQVfosvJ1w.png",
						name: '好吃多汁高品质柑橘',
						commdityPrice: 13
					}
				]
			}
		},
		methods: {
			// 退出登录
			loginOut() {
				uni.showModal({
					title: '提示', // 对话框标题
					content: '确认退出登录吗？', // 显示的内容

					success: function(res) {
						if (res.confirm) {
							uni.navigateTo({
								url: "/pages/login/login"
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.my {
		background: #E8FADE;
		height: 100vh;

		.background {
			// background-color: pink;
			padding: 50rpx 28rpx;
			box-sizing: border-box;
			background-image: url("https://s2.loli.net/2025/02/28/28jN7Kc3HMnxsDb.png");
			height: 420rpx;

			.base-info {
				display: flex;
				height: 180rpx;

				.info-avatar {
					.my-avatar-img {
						height: 180rpx;
						width: 180rpx;
						border-radius: 100rpx;
					}
				}

				.info-text {
					color: #fff;
					height: 180rpx;
					padding-top: 40rpx;
					margin-left: 20rpx;

					.user-name {
						font-weight: bold;
						font-size: 32rpx;
					}

					.wx-number {
						margin: 2px 0;
					}


				}

			}

			.operation-area {
				display: flex;
				justify-content: flex-end;

				.tag {
					border: 1px solid #fff;
					border-radius: 50px;
					color: #fff;
					height: 50rpx;
					font-size: 28rpx;
					line-height: 50rpx;
					padding: 0 14rpx;
					background-color: rgba(0, 0, 0, 0.3);

					.u-icon {
						padding-top: 10rpx;
					}
				}
			}

			.function-btns {
				display: flex;

				margin-top: 20rpx;
				gap: 8px;

				.single-function {
					flex: 1;
					height: 100rpx;
					background-color: rgba(0, 0, 0, 0.3);
					color: #fff;
					padding: 10rpx 20rpx;
					box-sizing: border-box;
					border-radius: 5px;

					.des {
						font-size: 26rpx;
						margin-top: 3px;
					}
				}
			}

		}

		.businessShow {
			border-radius: 7px;
			margin: 20rpx;
			background-color: #76CB45;
			height: 140px;
			display: flex;
			flex-direction: column;
			color: #fff;
			padding: 0 20rpx;
			box-sizing: border-box;

			.front {
				display: flex;
				flex: 2;
				border-bottom: 1px solid #F3FDED;

				.single-ele {
					flex: 1;
					text-align: center;
					flex-direction: column;
					display: flex;
					justify-content: center;

					.number {
						font-weight: bold;
						font-size: 40rpx;
					}

					.title {
						margin-top: 5px;
					}
				}
			}

			.back {
				flex: 1;
				text-align: center;
				display: flex;
				align-items: center;

				.c1,
				.c2 {
					flex: 1;
					display: flex;
					align-items: center;
					justify-content: center;

					.number {
						font-size: 34rpx;
					}

					.title {
						margin: 0 2px;
					}
				}
			}
		}

		.personShow {
			margin-top: 40rpx;
			padding-left: 20rpx;

			.header {
				font-weight: bold;
				font-size: 32rpx;
			}

			.body {
				margin-top: 20rpx;
				flex-direction: row;
				display: flex;
				gap: 10px;

				.single-good {
					width: 153px;
					height: 192px;

					.image {
						width: 153px;
						height: 141px;

						.img {
							width: 100%;
							height: 100%;
							background-color: pink;
						}
					}

					.title {
						margin: 3px;
						font-weight: bold;
					}

					.detail {
						display: flex;
						font-size: 26rpx;

						.price {
							flex: 1;
							text-align: left;
							color: #F43838;
						}

						.sale {
							flex: 1;
							text-align: right;
							color: #7C7C7C;
						}
					}
				}
			}

		}

		.function-list {
			margin-top: 50rpx;

			.single-function {
				background-color: #fff;
				height: 40px;
				line-height: 40px;
				display: flex;
				padding: 0 20rpx;
				border-bottom: 1px solid #C1D0B8;

				.icon {
					flex: 1;
					display: flex;
					align-items: center;
				}

				.title {
					flex: 12;
					font-size: 28rpx;

				}
			}
		}



	}
</style>