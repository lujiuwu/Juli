<template>

	<view class="garden">
		<!-- 普通用户 -->
		<view class="personShow" v-if="!identity">
			<!-- 浇水 -->
			<u-notify ref="uNotify"></u-notify>
			<!-- 第一部分 -- 树图 -->
			<!-- 这么多绝对定位 感觉我要碎掉了 -->
			<view class="tree">
				<!-- 树的背景 -->
				<image :src="tree_image" class="tree-background"></image>
				<!-- 果园工具 -- 绝对定位 -->
				<view class="garden-tools">
					<view @click="handleClick(item.fun)" class="single-tool" v-for="(item,index) in garden_tools"
						:key="index">
						<view class="icon">
							<image :src="item.icon" class="img"></image>
						</view>
						<view class="cnt">
							{{item.cnt}}
						</view>
					</view>
				</view>
				<!-- 绝对定位 --积分数量 -->
				<view class="integral">
					<view class="integral-number">
						<image src="@/static/orange-bg.png" class="image"></image>
						<!-- 文字 -- 积分数量 -->
						<view class="integral-text">
							{{integral}}
						</view>
					</view>
					<view class="integral-add" @click="getIntegral_show = true">
						+
					</view>
				</view>
				<!-- 弹出框 -- 提示获取积分的方法 -->
				<view class="popup">
					<u-modal :show="getIntegral_show" title="获取积分" @confirm="getIntegral_show = false" cancelText="跳转"
						showCancelButton="true" @cancel="gotoGetIntegral">
						<view class="slot-content">
							<view class="main-content">
								获取积分途径:
								<span style="font-weight: bold;">微信步数,KEEP打卡,其他方式</span>
							</view>
						</view>
					</u-modal>

				</view>
			</view>
			<!-- 第二部分 -- 查看守护天数 -->
			<view class="days">
				<!-- 日历图标 -->
				<view class="days-icon">
					<image src="../../static/日历.png" class="day-img"></image>
				</view>
				<!-- 文字部分 -->
				<view class="text">
					您已守护此树
					<text class="days-numbrer"> {{days}} </text>
					天
					<span style="color: #666;font-size: 28rpx;margin-left: 10rpx;">2024.11.4 - 今天</span>
				</view>
			</view>
			<!-- 第三部分 -- 日历 -->
			<view class="calendar-area">
				<!-- 日历区域 -->
				<view class="calendar">
					<uni-calendar :date="date" :lunar="true" :disable-before="true" :start-date="startDate"
						:end-date="endDate" @change="change" @to-click="toClick" :selected="selectedArray"
						selectBg="red" />
				</view>
				<!-- 详情区域 -->
				<view class="details">
					<view class="details-title">
						守护日志
					</view>
					<view class="details-body">
						<u-steps current="3" direction="column" dot="true">
							<u-steps-item icon-size="20" v-for="(item,index) in Days_array" :key="index"
								title="浇水,积分-2,积分剩余889" :desc="item">
							</u-steps-item>
						</u-steps>

					</view>
				</view>
			</view>
		</view>

		<!-- 商家用户 -->
		<view class="businessShow" v-else>
			<view class="focus">
				<view class="bar">
					<view class="title">
						共一个果园
					</view>
					<view class="name">
						四川省成都市新都区XX果园
					</view>
				</view>
			</view>
			<view class="tabs">
				<u-tabs :activeStyle="activeTabs" lineWidth="40" lineColor="#299A0C" :scrollable="false"
					:list="tabs_list"></u-tabs>
			</view>
			<view class="detail">
				<view class="single-detail" v-for="(item,index) in detail_list" :key="index">
					<view class="head" :style="{backgroundColor:item.main_color}">
						{{item.title}}
					</view>
					<view class="body" :style="{backgroundColor:item.other_color}">
						<view v-for="(ele,i) in item.arr" :key="i" class="ele">
							<view class="number" :style="{color:item.main_color}">
								{{ele.number}}
							</view>
							<view class="title">
								{{ele.title}}
							</view>
						</view>
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
	const dayjs = require('dayjs')
	export default {
		computed: {
			...mapState(['identity'])
		},
		data() {
			return {
				// 守护天数
				days: 20,
				// 浇水提示
				isShow: false,
				// 积分数量
				integral: 12,
				// 获取积分弹出框
				getIntegral_show: false,
				// 树图
				tree_image: "https://s2.loli.net/2025/02/27/fLEUjo1GDTImOX3.png",
				// 设置守护的起始时间
				startDate: '2024-4-10',
				// 守护的终止时间 -- 现在
				endDate: dayjs().format('YYYY-MM-DD'),
				// 打点格式
				selectedArray: [{
					date: '2024-4-10',
					info: '开始',
					data: {
						custom: '自定义',
						name: '自定义'
					}
				}],
				// 点击的当前时间
				currentTime: dayjs().format('YYYY-MM-DD'),
				// 守护日志详情数组
				Days_array: [
					'10:13',
					'12:15',
					'23:01'
				],
				Days_times: 3,
				tabs_list: [{
						name: '果园概况'
					},
					{
						name: '地块管理'
					},
					{
						name: '种植管理'
					},
					{
						name: '设备管理'
					},
				],
				activeTabs: {
					color: '#299A0C'
				},
				// 果园工具
				garden_tools: [{
						icon: "https://s2.loli.net/2025/03/02/WiIR7CbaT5PoDnt.png",
						cnt: "浇水",
						fun: this.sureWater
					},
					{
						icon: "https://s2.loli.net/2025/03/02/XmNBCFn8L5VwSOx.png",
						cnt: "查看近况"
					},
					{
						icon: "https://s2.loli.net/2025/03/02/7wtaYhUkymTDR2e.png",
						cnt: "时空胶囊",
						fun: this.gotoLog
					}
				],
				detail_list: [{
						title: "果园地块",
						main_color: "#53B258",
						other_color: "#D9EDDA",
						arr: [{
								title: "种植地块",
								number: "1块"
							},
							{
								title: "占地面积",
								number: "66.00亩"
							}
						]
					},
					{
						title: "果园人员",
						main_color: "#EFA368",
						other_color: "#FFEBD7",
						arr: [{
								title: "果园主",
								number: "1人"
							},
							{
								title: "管理员",
								number: "4人"
							},
							{
								title: "普通员工",
								number: "11人"
							}
						]
					},
					{
						title: "果园设备",
						main_color: "#53AEE4",
						other_color: "#E4F5FF",
						arr: [{
								title: "摄像头",
								number: "1个"
							},
							{
								title: "检测仪",
								number: "5个"
							}
						]
					}

				]
			};
		},
		methods: {
			// 获取积分
			gotoGetIntegral() {
				uni.switchTab({
					url: '/pages/index/index',
				})
				// 提示信息
				this.getIntegral_show = false

			},
			// 浇水
			sureWater() {
				// 检查积分是否足够
				if (this.integral >= 2) {
					this.integral -= 2
					this.$refs.uNotify.show({
						top: 1,
						type: 'error',
						color: '#fff',
						bgColor: '#5ac725',
						message: '您已成功浇水，积分-2',
						duration: 1000 * 2,
						fontSize: 15,
						safeAreaInsetTop: true
					})
					// console.log(this.integral)
				} else {
					this.$refs.uNotify.show({
						top: 1,
						type: 'error',
						color: '#fff',
						message: '积分不足，无法浇水',
						duration: 1000 * 2,
						fontSize: 15,
						safeAreaInsetTop: true
					})
				}
			},
			// 跳转时空胶囊
			gotoLog() {
				uni.navigateTo({
					url: "/show-pages/time-log/time-log"
				})
			},
			handleClick(fun) {
				if (fun) {
					fun.call(this);
				}
			}

		}
	}
</script>

<style lang="scss">
	.garden {
		height: 100vh;
		width: 100vw;
		background-color: #f3fded;

		.tree {
			position: relative;
			width: 100%;
			height: 600rpx;

			// 设置为背景 -- no 不能使用本地资源哦
			// background-image: url(../../static/tree.png);
			.tree-background {
				width: 100%;
				height: 100%;
			}

			.garden-tools {
				position: absolute;
				right: 0;
				top: 60rpx;


				.single-tool {
					margin-bottom: 10rpx;
					border: 3px solid #2BBE14;
					width: 190rpx;
					height: 80rpx;
					background-color: rgba(255, 255, 255, 0.7);
					border-radius: 100rpx 0 0 100rpx;
					border-right: 0;
					display: flex;
					box-sizing: border-box;
					padding-left: 14rpx;

					.icon {
						flex: 1;
						padding-top: 19rpx;

						.img {
							width: 44rpx;
							height: 44rpx;
							vertical-align: middle;
						}

					}

					.cnt {
						flex: 6;
						line-height: 80rpx;
						text-align: center;
					}
				}
			}


			// 弹出框样式
			.popup-content {
				padding: 20rpx;
			}

			// 积分数量
			.integral {
				border-radius: 0 50px 50px 0;
				position: absolute;
				left: 30rpx;
				top: 30rpx;
				display: flex;
				background-color: #f9a826;
				border: 3px solid #ee7a15;
				width: 140rpx;
				height: 50rpx;

				.integral-number {
					position: relative;
					flex: 2;
					border-radius: 50px;
					height: 100rpx;

					.image {
						position: absolute;
						top: -30rpx;
						left: 0;
						width: 110%;
						height: 100%;
					}

					.integral-text {
						position: absolute;
						color: #fff;
						font-size: 32rpx;
						top: 10rpx;
						left: 30rpx;
						z-index: 12;
					}
				}

				.integral-add {
					flex: 1;
					border-radius: 50px;
					height: 50rpx;
					text-align: center;
					line-height: 50rpx;
					color: #fff;
					font-weight: bolder;
					font-size: 42rpx;

				}
			}


		}

		// 守护天数

		.days {
			display: flex;
			width: 600rpx;
			height: 80rpx;
			line-height: 80rpx;
			border-bottom: 3px solid #0FD15A;
			font-size: 34rpx;
			padding-left: 20rpx;

			// 天数数字要做特殊样式处理
			.text {
				flex: 9;

				.days-numbrer {
					font-size: 50rpx;
					font-weight: bold;
					color: #2BBE14;
					margin: 0 6rpx;
				}
			}

			.days-icon {
				// 垂直居中
				display: flex;
				align-items: center;
				line-height: 80rpx;
				flex: 1;

				.day-img {
					width: 50rpx;
					height: 50rpx;
				}
			}

		}

		// 日历区域
		.calendar-area {
			.details {
				background-color: #fff;
				padding: 0 40rpx;

				.details-title {
					font-size: 32rpx;
				}

				.details-body {
					height: 380rpx;
					background: linear-gradient(#fff, #cfeef1);
					margin-top: 20rpx;
					position: relative;

					.water-image {
						position: absolute;
						width: 190rpx;
						height: 210rpx;
						right: 40rpx;
						bottom: 140rpx;

						.image {
							width: 100%;
							height: 100%;
						}
					}
				}
			}
		}

		.businessShow {
			.focus {
				margin: 0 20rpx;
				background-image: url("https://s2.loli.net/2025/03/01/y1MepPCA7YvaUkJ.png");
				position: relative;
				height: 204px;

				.bar {
					position: absolute;
					bottom: 0;
					height: 50px;
					left: 0;
					width: 100%;
					background-color: rgba(0, 0, 0, 0.3);
					color: #fff;
					padding: 4px 20rpx;
					box-sizing: border-box;

					.title {
						font-size: 30rpx;
					}

					.name {
						font-size: 25rpx;
					}
				}
			}

			.tabs {
				margin: 20rpx 0;
			}

			.detail {
				padding: 20rpx;

				.single-detail {
					border-radius: 5px;
					display: flex;
					height: 75px;
					margin-bottom: 20rpx;

					flex-direction: row;

					.head {
						border-radius: 5px;
						flex: 1;
						line-height: 75px;
						color: #fff;
						font-size: 34rpx;
						text-align: center;
					}

					.body {
						flex: 3;
						display: flex;

						.ele {
							padding: 25rpx 0;
							box-sizing: border-box;
							width: 33%;
							text-align: center;

							.number {
								font-size: 34rpx;
								font-weight: bold;
							}

							.title {
								color: #1f1e1e;
								margin-top: 4px;
								font-size: 26rpx;
							}

						}
					}
				}
			}
		}



	}
</style>