<template>
	<view class="payment-step1">
		<view class="image_area">
			<image :src="goood_info.img" class="img"></image>
		</view>
		<view class="info_area">
			<view class="title">
				{{goood_info.name}}
			</view>
			<view class="des">
				<view class="price">
					<span class="s">￥</span>
					{{goood_info.commdityPrice}}
					<span class="s">元/斤</span>
				</view>
				<view class="sale">
					销量{{goood_info.sale}}+
				</view>
			</view>
		</view>
		<view class="package">
			<view class="line1">
				<view class="icon">
					<u-icon name="car" size="25" color="#808080"></u-icon>
				</view>
				<view class="text">
					<view style="color:#1B9638 ;">
						承诺48小时内发货，晚发必赔，预计后天送达
					</view>
					<view style="color: #545454;">
						多仓发货 快递：免运费
					</view>
				</view>
			</view>
			<view class="line2">
				<view class="icon">
					<u-icon name="heart" size="25" color="#808080"></u-icon>
				</view>
				<view class="text" style="color: #7C7C7C;">
					7天无理由退款
				</view>
			</view>
		</view>
		<view class="comments">
			<view class="head">
				评论(12)
			</view>
			<view class="body">
				<view class="avatar">
					<view class="img">

					</view>
				</view>
				<view class="comment">
					<view class="name">
						{{comment.name}}
					</view>
					<view class="content">
						{{comment.content}}
					</view>
				</view>
				<view class="image">
					<image src="https://s2.loli.net/2025/02/28/uHe6sOPTlftEaJ7.png" class="img"></image>
				</view>
			</view>
		</view>
		<view class="store">
			<view class="image">
				<image src="https://s2.loli.net/2025/02/28/uHe6sOPTlftEaJ7.png" class="img"></image>
			</view>
			<view class="detail">
				<view class="store_name">
					张姐果园
				</view>
				<view class="store_star">
					<u-rate :value="3.7" readonly activeColor="#FADB14"></u-rate>
				</view>
			</view>
			<view class="btn">
				<u-button size="small" type="warning" text="进店"></u-button>
			</view>
		</view>
		<view class="payment-btn">
			<view class="btns">
				<view class="btn" style="background-color: #F7B501;">
					加入购物车
				</view>
				<view class="btn" style="background-color: #FA6401;" @click="open()">
					立即购买
				</view>
			</view>
		</view>
		<view class="popup">
			<u-popup closeable="true" :show="is_pay" mode="bottom" @close="close" @open="open">
				<view class="pay-area">
					<view class="address">
						<view class="icon">
							<u-icon name="map" color="#808080" size="25"></u-icon>
						</view>
						<view class="text">
							<view style="font-weight: bold;font-size: 28rpx;">
								用户12306 四川省成都市新都区西南石油大学成都校区
							</view>
							<view style="margin-top: 10rpx;">
								快递 包邮<span style="margin: 0 4px;color:#64B878;">可选运费险</span>预计后天送达
							</view>
						</view>
					</view>
					<view class="detail">
						<view class="image">
							<image src="https://s2.loli.net/2025/02/28/uHe6sOPTlftEaJ7.png" class="img"></image>
						</view>
						<view class="price">
							<view class="number">
								实付 ￥
								<span style="font-size: 32rpx;">{{goood_info.commdityPrice}}元</span>
							</view>
							<u-number-box v-model="value" @change="valChange"></u-number-box>
						</view>
					</view>
					<view class="pay-btn">
						<view class="btn">
							立即支付
						</view>
					</view>
				</view>
			</u-popup>
		</view>
	</view>
</template>

<script>
	import {
		conforms
	} from 'lodash';
	export default {
		data() {
			return {
				goood_info: {
					title: "好吃多汁的高品质柑橘",
					price: 5,
					sale: 100,
				},
				comment: {
					name: "用户12306",
					content: "好吃多汁的高品质柑橘好好吃多汁的高品质柑橘好吃多汁的高品质柑橘"
				},
				is_pay: false,
				value: 1
			};
		},
		methods: {
			open() {
				this.is_pay = true
				console.log("f");
			},
			close() {
				this.is_pay = false
				console.log('close');
			}
		},
		onLoad(option) {
			this.goood_info = JSON.parse(option.good)
		}
	}
</script>

<style lang="scss">
	.payment-step1 {
		background-color: #f3fded;
		height: 100vh;
		position: relative;

		.image_area {
			width: 100%;
			height: 360px;

			.img {
				height: 100%;
				width: 100%;
			}
		}

		.info_area {
			padding: 0 20rpx;

			.title {
				margin: 5px 0;
				font-size: 38rpx;
				font-weight: bold;
			}

			.des {
				display: flex;


				.price {
					font-weight: bold;
					flex: 1;
					text-align: left;
					color: #F43838;
					font-size: 36rpx;

					.s {
						font-size: 34rpx;
					}
				}

				.sale {
					font-size: 32rpx;
					flex: 1;
					text-align: right;
					color: #505050;
				}
			}
		}

		.package {
			background-color: #fff;
			margin: 24rpx 0;

			.line1 {
				display: flex;
				height: 70px;
				padding: 20rpx;
				box-sizing: border-box;

				.icon {
					flex: 1;
				}

				.text {
					flex: 15;
					margin-left: 5px;
				}
			}

			.line2 {
				display: flex;
				height: 35px;
				padding: 0 20rpx;
				box-sizing: border-box;

				.icon {
					flex: 1;
				}

				.text {
					flex: 15;
					margin-left: 5px;
				}
			}
		}

		.comments {
			background-color: #fff;
			padding: 20rpx;

			.head {
				font-size: 32rpx;
				margin-bottom: 20rpx;
			}

			.body {
				display: flex;

				.avatar {
					padding-top: 10rpx;
					flex: 1;
					margin-right: 10rpx;

					.img {
						height: 24px;
						width: 24px;
						border-radius: 50px;
					}
				}

				.comment {
					flex: 12;
					margin-top: 10rpx;
				}

				.image {
					flex: 3;

					.img {
						width: 75px;
						height: 75px;
					}

				}
			}
		}

		.store {
			padding: 20rpx;
			display: flex;
			background-color: #fff;
			height: 65px;

			.image {
				flex: 1;
				margin-right: 20rpx;

				.img {
					width: 63px;
					height: 63px;
				}

			}

			.detail {
				flex: 4;
				padding-top: 20rpx;
			}

			.btn {
				flex: 1;
				padding-top: 23rpx;
			}
		}

		.payment-btn {
			position: absolute;
			bottom: 0;
			right: 0;
			height: 60px;

			.btns {
				display: flex;
				padding-right: 20rpx;
				width: 218px;

				.btn {
					flex: 1;
					height: 34px;
					color: #fff;
					text-align: center;
					line-height: 34px;
				}
			}

		}

		.popup {
			.pay-area {
				height: 400px;
				padding: 80rpx 16rpx 40rpx 0;
				box-sizing: border-box;

				.address {
					display: flex;

					.icon {
						flex: 1;
					}

					.text {
						flex: 15;
					}
				}

				.detail {
					display: flex;
					padding: 40rpx 20rpx;

					.image {
						flex: 1;

						.img {
							width: 153px;
							height: 143px;
						}
					}

					.price {
						flex: 2;
						padding-top: 28rpx;

						.number {
							font-size: 32rpx;
							margin-left: 20rpx;
							color: #F43838;
							font-weight: bold;
							margin-bottom: 20rpx;
						}

					}
				}

				.pay-btn {
					width: 100%;
					padding: 0 20rpx;
					box-sizing: border-box;

					.btn {
						background-color: #FA6401;
						color: #fff;
						font-size: 36rpx;
						height: 40px;
						line-height: 40px;
						text-align: center;
					}

				}
			}
		}


	}
</style>