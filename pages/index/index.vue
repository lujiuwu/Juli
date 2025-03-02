<template>
	<view class="index">
		<!-- 第一部分 -- 轮播图 -->
		<!-- 轮播图 -- 公共部分 -->
		<view class="image-swiper">
			<swiper class="swiper" indicator-dots="true" circular="true" autoplay="true" interval="5000"
				duration="1500">
				<swiper-item v-for="(item , index) in swiperImages" :key="index">
					<image :src="item" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>

		<!-- 普通用户 -->
		<view class="personShow" v-if="!identity">
			<!-- 第二部分 -- 果园积分榜单 -->
			<view class="garden-ranking-list">
				<!-- 顶部 -->
				<view class="head">
					<!-- 左侧 -- 标题 -->
					<view class="title" style="font-weight: bold;">
						果园积分榜单
					</view>
					<!-- 右侧 -- 分段器 -->
					<view class="subsetion-choice">
						<u-subsection :list="list" :current="curNow" @change="sectionChange" fontSize="16"
							:animation="true" :bold="true" :inactiveColor="'#007a2e'"
							:activeColor="'#000'"></u-subsection>
					</view>
				</view>
				<!-- 主体 -- 榜单 -->
				<view class="body">
					<!-- 榜单背景 -->
					<view class="list-body">
						<!-- 第一行 -- 个人信息 -->
						<view class="myInfo">
							<!-- 排名 -->
							<view class="my-rank">
								{{curRank}}
							</view>
							<!-- 头像 -->
							<view class="my-avatar">
								<image :src="userInfo.img" class="avatar-image"></image>
							</view>
							<!-- 用户名 -->
							<view class="my-username">
								{{userInfo.username}}
								<span class="des"> (我自己)</span>
							</view>
							<!-- 积分数目 -->
							<view class="rank-number">
								{{curNow===0?userInfo.daily:curNow===1?userInfo.weekly:userInfo.monthly}}
							</view>
						</view>
						<!-- 其余行 -- 好友信息 -->
						<!-- 只显示排名前三 -->
						<view v-for="(item,index) in showList" :key="index" class="all-rank">
							<view class="single-rank">
								<image class="rank-image" :src="item.rank"></image>
							</view>
							<view class="single-avatar">
								<image :src="item.img?item.img:'../../static/default_avatar.png'" class="avatar-image">
								</image>
							</view>
							<view class="single-username">
								{{item.username}}
							</view>
							<view class="single-rank-number">
								{{curNow===0?item.daily:curNow===1?item.weekly:item.monthly}}
							</view>
						</view>
						<!-- 查看更多好友 -->
						<view class="showMore">
							<!-- 文字 -->
							<view class="text" @click="gotoShowAll">
								<!-- 点击跳转页面 -- 显示所有好友榜单信息 -->
								查看更多好友
							</view>
						</view>
					</view>


				</view>

			</view>
			<!-- 第三部分 -- 获取积分 -->
			<view class="getPoints">
				<!-- 头部 -- 标题 -->
				<view class="head" style="font-weight: bold;">
					<text>获取积分</text>
				</view>
				<!-- 主体 -- 三个获取积分的选项 -->
				<view class="body">

					<view v-for="(item,index) in pointsWay" :key="index" class="get-choice"
						:style="{backgroundColor:item.color}">
						<text class="text">{{item.text}}</text>

						<!-- 添加加号 -- 子绝父相 -->
						<view class="get-add" @click="showPopup(index)">
							+
							<!-- 怎么这么看有点不专业（） -->
							<!-- 没事的 本来就不专业 2024,4,23 -->
						</view>
					</view>
				</view>
			</view>
			<!-- 第四部分 -- 弹出层 -->
			<u-popup :show="show1" mode="bottom" @close="show1=false" @open="show1=true" :safeAreaInsetBottom="false"
				closeable="true">
				<view class="popup-box">
					<text class="test">
						此处用于上传图片(微信步数)
					</text>
					<!-- 上传图片位置 -->
					<view class="upload">
						<u-upload :fileList="fileList1" @afterRead="afterRead" @delete="deletePic" name="1" multiple
							:maxCount="10"></u-upload>
					</view>
				</view>
			</u-popup>
			<u-popup :show="show2" mode="bottom" @close="show2=false" @open="show2=true" :safeAreaInsetBottom="false"
				closeable="true">
				<view class="popup-box">
					<text class="test">
						此处用于上传图片(Keep打卡)
					</text>
					<!-- 上传图片位置 -->
					<view class="upload">
						<u-upload :fileList="fileList1" @afterRead="afterRead" @delete="deletePic" name="1" multiple
							:maxCount="10"></u-upload>
					</view>
				</view>
			</u-popup>
			<u-popup :show="show3" mode="bottom" @close="show3=false" @open="show3=true" :safeAreaInsetBottom="false"
				closeable="true">
				<view class="popup-box">
					<text class="test">
						此处用于上传图片(其他方式)
					</text>
					<!-- 上传图片位置 -->
					<view class="upload">
						<u-upload :fileList="fileList1" @afterRead="afterRead" @delete="deletePic" name="1" multiple
							:maxCount="10"></u-upload>
					</view>
				</view>
			</u-popup>
		</view>
		<!-- 商家用户 -->
		<view class="businessShow" v-else>
			<view class="tools-list">
				<div class="header">常用工具</div>
				<div class="body">
					<view class="single-tool" v-for="(item,index) in tools_list" :key="index">
						<view class="image">
							<image :src="item.image" class="img"></image>
						</view>
						<view class="title">
							{{item.title}}
						</view>
					</view>
				</div>
			</view>
			<view class="new-info">
				<div class="header">最新动态</div>
				<div class="body">
					<view class="single-info">
						<view class="title">
							公告
						</view>
						<view class="content">
							淘宝推出"大服饰全球包邮计划"
						</view>
						<view class="time">
							2分钟前
						</view>
					</view>
					<view class="single-info">
						<view class="title">
							公告
						</view>
						<view class="content">
							淘宝推出"大服饰全球包邮计划"
						</view>
						<view class="time">
							2分钟前
						</view>
					</view>
					<view class="single-info">
						<view class="title">
							公告
						</view>
						<view class="content">
							淘宝推出"大服饰全球包邮计划"
						</view>
						<view class="time">
							2分钟前
						</view>
					</view>
				</div>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'

	import color from '../../uni_modules/uview-ui/libs/config/color';
	var _ = require('lodash');
	export default {
		computed: {
			...mapState(['identity'])
		},
		data() {
			return {
				title: 'Hello',
				// 轮播图数据
				swiperImages: [
					"https://s2.loli.net/2025/02/24/FreLBAxyQXVqNSG.png",
					"https://s2.loli.net/2025/02/24/FreLBAxyQXVqNSG.png"

				],
				// 分段器数据
				curNow: 0,
				list: [{
						name: '日榜'
					},
					{
						name: '周榜'
					},
					{
						name: '月榜'
					}
				],
				// 用户数据
				userInfo: {
					// 用户名
					username: "鹿九巫",
					// 用户积分
					// 分为 天 周 月 三个选择
					daily: 10,
					weekly: 20,
					monthly: 50,
					img: '../../static/avatar.jpg'
				},
				// 好友信息
				friendsInfo: [{
						// 用户名
						username: "好友1",
						// 用户积分
						// 分为 天 周 月 三个选择
						daily: 16,
						weekly: 50,
						monthly: 60,
						img: '../../static/avatar.jpg',
						rank: "https://s2.loli.net/2025/02/24/VwoYagAOrGRmNiX.png"
					},
					{
						// 用户名
						username: "好友2",
						// 用户积分
						// 分为 天 周 月 三个选择
						daily: 10,
						weekly: 60,
						monthly: 70,
						img: '../../static/avatar.jpg',
						rank: "https://s2.loli.net/2025/02/24/h2tRaS51IDBbPyd.png"
					},
					{
						// 用户名
						username: "鹿九巫",
						// 用户积分
						// 分为 天 周 月 三个选择
						daily: 8,
						weekly: 20,
						monthly: 50,
						img: '../../static/avatar.jpg',
						rank: "https://s2.loli.net/2025/02/24/ZMeR7oUYXAt1Vr2.png"
					}

				],
				// 渲染数组
				showList: [],
				// 当前用户排名
				curRank: 2,
				// 获取积分选项
				pointsWay: [{
						text: "微信步数",
						color: "#ABE987",
						show: false
					},
					{
						text: "Keep打卡",
						color: "#E9E796",
						show: false
					},
					{
						text: "其他方式",
						color: "#F4CB98",
						show: false
					}
				],
				fileList1: [],
				show1: false,
				show2: false,
				show3: false,
				tools_list: [{
						image: "https://s2.loli.net/2025/03/01/tjn65iXSvWCHxJz.png",
						title: "商品管理"
					},
					{
						image: "https://s2.loli.net/2025/03/01/sADhTbBlqp6aK7g.png",
						title: "订单管理"
					},
					{
						image: "https://s2.loli.net/2025/03/01/eRaMgOJTXu4WNrY.png",
						title: "打单工具"
					},
					{
						image: "https://s2.loli.net/2025/03/01/1VL3Kekf79WodcY.png",
						title: "寄快递"
					},
				]

			}
		},
		onLoad() {

		},
		methods: {
			// 更改分段器方法
			// 切换后更改排名显示
			sectionChange(index) {
				// 修改当前选择的序号
				this.curNow = index;
				// 测试生效
				// console.log(this.curNow)
				// 根据选择排序 给渲染数组赋值
				if (this.curNow === 0) {
					// 日榜
					this.showList = _.sortBy(this.friendsInfo, function(item) {
						return -item.daily
					})
				} else if (this.curNow === 1) {
					// 周榜
					this.showList = _.sortBy(this.friendsInfo, function(item) {
						return -item.weekly
					})
				} else {
					// 月榜
					this.showList = _.sortBy(this.friendsInfo, function(item) {
						return -item.monthly
					})
				}
				// 测试
				// console.log(this.showList)
				// 获取当前用户的排名
				this.curRank = this.showList.findIndex((item) => item.username === "鹿九巫") + 1
				console.log(this.curRank)
			},
			gotoShowAll() {
				uni.navigateTo({
					url: '/show-pages/showAll/showAll'
				})
			},
			// 点击获取积分的方法 -- 打开弹出层

			showPopup(index) {
				index == 0 ? this.show1 = true : index == 1 ? this.show2 = true : this.show3 = true
			},
			open(show) {
				show = true
			},
			close(show) {
				show = false
			},
			// 删除图片
			deletePic(event) {
				this[`fileList${event.name}`].splice(event.index, 1)
			},
			// 新增图片
			async afterRead(event) {
				// 当设置 multiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file)
				let fileListLen = this[`fileList${event.name}`].length
				lists.map((item) => {
					this[`fileList${event.name}`].push({
						...item,
						status: 'uploading',
						message: '上传中'
					})
				})
				for (let i = 0; i < lists.length; i++) {
					const result = await this.uploadFilePromise(lists[i].url)
					let item = this[`fileList${event.name}`][fileListLen]
					this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
						status: 'success',
						message: '',
						url: result
					}))
					fileListLen++
				}
			},
			uploadFilePromise(url) {
				return new Promise((resolve, reject) => {
					let a = uni.uploadFile({
						url: 'http://192.168.2.21:7001/upload', // 仅为示例，非真实的接口地址
						filePath: url,
						name: 'file',
						formData: {
							user: 'test'
						},
						success: (res) => {
							setTimeout(() => {
								resolve(res.data.data)
							}, 1000)
						}
					});
				})
			},


		},
		onLoad() {
			// 初始加载后就调用sectionChange方法 -- 显示初始排名（日榜）
			this.sectionChange(0)
			console.log(this.identity)
		}
	}
</script>

<style lang="scss">
	// 全局
	.index {
		background-color: #F3FDED;
		height: 100vh;

		/* 轮播 */
		.swiper {
			height: 370rpx;
		}

		.image-swiper swiper-item image {
			width: 100%;
			height: 530rpx;
		}

		// 果园积分榜单
		.garden-ranking-list {
			width: 100%;
			height: 580rpx;

			margin-top: 20rpx;

			.head {
				padding: 10rpx 24rpx;
				display: flex;

				.title {
					font-size: 36rpx;
					flex: 5;
				}

				.subsetion-choice {
					flex: 4;
				}
			}

			// 主体

			.body {
				padding: 10rpx 24rpx;
				height: 450rpx;

				.list-body {
					border-radius: 20rpx;
					height: 100%;
					background: #F2DA98;
					padding: 20rpx;

					.myInfo {
						height: 94rpx;
						border-radius: 10px 10px 0 0;
						display: flex;
						line-height: 94rpx;
						background-color: #f3cf84;
						border-bottom: 4px solid #f3bd1a;

						.my-rank {
							flex: 1;
							text-align: center;
							color: #FB5608;
							font-size: 60rpx;
							font-weight: bold;
						}

						.my-avatar {
							flex: 1;
							padding: 10rpx;
							border-radius: 100px;
							overflow: hidden;

							.avatar-image {
								width: 100%;
								height: 100%;
							}

							margin-right: 10rpx;
						}

						.my-username {
							flex: 5;
							font-size: 32rpx;
							font-weight: bold;
							color: #000000;

							.des {
								color: #737373;

								font-weight: normal;
								margin-left: 10rpx;
							}
						}

						.rank-number {
							flex: 1;
							font-size: 34rpx;
							color: #00973B;
							font-weight: bold;
						}
					}

					.all-rank {

						margin-top: 10rpx;
						height: 94rpx;
						display: flex;
						line-height: 94rpx;
						background-color: #F2EEBD;

						.single-rank {
							flex: 1;
							height: 35px;
							width: 10px;

							.rank-image {
								width: 100%;
								height: 100%;
							}

						}

						.single-avatar {
							flex: 1;
							padding: 10rpx;
							overflow: hidden;
							border-radius: 100px;

							.avatar-image {
								width: 100%;
								height: 100%;
							}

							margin-right: 10rpx;
						}

						.single-username {
							flex: 5;
							font-size: 32rpx;
							font-weight: bold;
							color: #000000;
						}

						.single-rank-number {
							flex: 1;
							font-size: 32rpx;
							color: #00973B;
							font-weight: bold;
						}

					}

					.showMore {
						display: flex;

						.text {
							flex: 19;
							margin-right: 10rpx;
						}

						.icon {
							flex: 1;
						}

						margin-top: 14rpx;
						text-align: right;
						color:#323232;
						font-size: 34rpx;
					}
				}

			}
		}

		// 获取积分

		.getPoints {
			padding: 10rpx 24rpx;

			.head {
				font-size: 36rpx;

			}

			.body {
				margin-top: 20rpx;
				display: flex;
				gap: 14rpx;

				.get-choice {
					flex: 1;
					height: 240rpx;
					border-radius: 28rpx 28rpx 100rpx 28rpx;
					position: relative;
					text-align: center;

					.text {
						width: 100rpx;
						font-size: 42rpx;
						position: absolute;
						top: 100rpx;
						left: 12rpx;
						color: #fff;
						text-align-last: left;
					}

					.get-add {

						width: 100rpx;
						height: 100rpx;
						border-radius: 100rpx;
						background-color: #fff;
						position: absolute;
						bottom: 0;
						right: 0;
						line-height: 100rpx;
						text-align: center;
						font-weight: bold;
						font-size: 92rpx;
						color: #FCA73F;
						border: 8rpx solid #FCA73F;

					}
				}
			}
		}

		// 弹出层样式
		.popup-box {
			height: 200rpx;
			padding: 50rpx 30rpx;

			.test {
				text-align: center;
				font-size: 40rpx;
			}

			.upload {

				margin-top: 30rpx;

			}

		}

		.tools-list {
			margin: 30rpx 20rpx 0;
			background-color: #fff;
			padding: 20rpx;

			.header {
				font-weight: bold;
				font-size: 32rpx;
				margin-bottom: 20rpx;
			}

			.body {
				display: flex;

				.single-tool {
					flex: 1;

					.image {
						display: flex;
						justify-content: space-around;

						.img {
							height: 44px;
							width: 44px;
							border-radius: 50px;
							margin-bottom: 20rpx;
						}


					}

					.title {
						text-align: center;
					}
				}
			}
		}

		.new-info {
			margin: 30rpx 20rpx 0;
			background-color: #fff;
			padding: 20rpx;

			.header {
				font-weight: bold;
				font-size: 32rpx;
				margin-bottom: 20rpx;
			}

			.body {
				.single-info {
					height: 64rpx;
					line-height: 64rpx;
					display: flex;

					.title {
						flex: 1;
						font-size: 30rpx;
						font-weight: bold;
					}

					.content {
						flex: 6;
						color: #858585;
					}

					.time {
						text-align: right;
						color: #A7A7A7;
						font-size: 28rpx;
						flex: 2;
					}
				}
			}
		}


	}
</style>