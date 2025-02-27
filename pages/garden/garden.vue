<template>
	<view class="garden">
		<!-- 浇水 -->
		<u-notify ref="uNotify"></u-notify>
		<!-- 第一部分 -- 树图 -->
		<!-- 这么多绝对定位 感觉我要碎掉了 -->
		<view class="tree">
			<!-- 树的背景 -->
			<image src="https://img2.imgtp.com/2024/05/24/Qfj5TpzN.png"  class="tree-background"></image>
			<!-- 绝对定位 -- 树 -->
			<!-- <view class="tree-image">
				<image src="../../static/tree.png" class="tree-url"></image>
			</view> -->
			<!-- 绝对定位 -- 浇水 -->
			<view class="water" @click="sureWater()">
				<!-- 图标 -->
				<view class="icon">
					<image src="/static/浇水.png" class="img"></image>
				</view>
				<!-- 文字 -->
				<view class="text">
					浇水
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
				<u-modal :show="getIntegral_show"  title="获取积分" @confirm="getIntegral_show = false" cancelText="跳转" showCancelButton="true" @cancel="gotoGetIntegral">
					<view class="slot-content">
						<view class="main-content">
							获取积分途径:
							<span style="font-weight: bold;">微信步数,KEEP打卡,其他方式</span>
						</view>
					</view>
				</u-modal>

			</view>

			<!-- 绝对定位 -- 查看近况 -->
			<view class="recent" @click="gotoStation">
				<!-- 图标 -->
				<view class="icon">
					<image src="/static/照片.png" class="img"></image>
					
				</view>
				<!-- 文字 -->
				<view class="text">
				   近况
				</view>
			</view>
		</view>
		<!-- 第二部分 -- 查看守护天数 -->
		<view class="days">
			<!-- 文字部分 -->
			<view class="text">
				您已守护此树
				<text class="days-numbrer"> {{days}} </text>
				天
			</view>
			<!-- 日历图标 -->
			<view class="days-icon" @click="gotoDays">
				<image src="../../static/日历.png" class="day-img"></image>
			</view>
			
		</view>
		<!-- 第三部分 -- 我要种树 -->
		<view class="plant">
			<!-- 头部 -- 标题 -->
			<view class="head">
				我要种树
			</view>
			<!-- 主体 -- 树苗列表 -->
			<view class="body">
				<!-- 循环渲染 -->
				<view v-for="(item,index) in saplings" :key="index" class="single-sapling">
					<image :src="item.iamge" class="sapling-img"></image>
				</view>
			</view>
			<!-- 尾部 -- 点击查看所有 -->
			<view class="foot">
				<!-- 文字 -->
				<view class="text" @click="gotoSaplings">
					<!-- 点击跳转页面 -- 显示所有树苗信息 -->
					参看所有
				</view>
				<!-- 图标 -->
				<view class="icon">
					<u-icon name="arrow-right-double" color="#00973B" size="28"></u-icon>
				</view>
			</view>
		</view>
		<!-- 第四部分 -- 直接购买 -->
		<view class="buy">
			<!-- 头部 -- 标题 -->
			<view class="head">
				直接购买
			</view>
			<!-- 主体 -- 树苗列表 -->
			<view class="body">
				<!-- 循环渲染 -->
				<view v-for="(item,index) in goods" :key="index" class="single-good" >
					<image :src="item.iamge" class="good-img"></image>
				</view>
			</view>
			<!-- 尾部 -- 点击查看所有 -->
			<view class="foot">
				<!-- 文字 -->
				<view class="text" @click="gotoGoods">
					<!-- 点击跳转页面 -- 显示所有商品信息 -->
					参看所有
				</view>
				<!-- 图标 -->
				<view class="icon">
					<u-icon name="arrow-right-double" color="#00973B" size="28"></u-icon>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 守护天数
				days:20,
				// 树苗渲染数据
				// 测试阶段就只放图片数据了
				saplings:[
					{
						title:'优良橘子树苗',
						price:'10',
						iamge:'https://img2.imgtp.com/2024/05/24/NRcd1SnV.jpg'
					},
					{
						title:'普通橘子树苗',
						price:'9.4',
						iamge:'https://img2.imgtp.com/2024/05/24/EzfhjhA9.png'
					},
					{
						title:'普通橘子树苗',
						price:'9.6',
						iamge:'https://img2.imgtp.com/2024/05/24/NRcd1SnV.jpg'
					},
					{
						title:'普通橘子树苗',
						price:'9.4',
						iamge:'https://img2.imgtp.com/2024/05/24/EzfhjhA9.png'
					}
				],
				// 商品渲染数据
				goods:[
					{
						title:'优良无添加无农药橘子',
						price:'10',
						iamge:'https://img2.imgtp.com/2024/05/24/DoB6GMh3.png'
					},
					{
						title:'普通杂交橘子',
						price:'9.4',
						iamge:'https://img2.imgtp.com/2024/05/24/pOqU140M.jpg'
					},
					{
						title:'高质皮薄馅大橘子',
						price:'9.6',
						iamge:'https://img2.imgtp.com/2024/05/24/DoB6GMh3.png'
					},
					{
						title:'优良无添加无农药橘子',
						price:'10',
						iamge:'https://img2.imgtp.com/2024/05/24/pOqU140M.jpg'
					},
				],
				// 浇水提示
				isShow:false,
				// 积分数量
				integral:12,
				// 获取积分弹出框
				getIntegral_show:false
			};
		},
		methods:{
			// 查看守护日志
			gotoDays(){
			  uni.navigateTo({
			  	url:"/log-pages/days/days"
			  })	
			},
			// 查看所有树苗
			gotoSaplings(){
				uni.navigateTo({
					url:'/purchase-pages/saplings/saplings'
				})
			},
			// 查看所有商品
			gotoGoods(){
				uni.navigateTo({
					url:'/purchase-pages/goods/goods'
				})
			},
			// 查看近况
			gotoStation(){
				uni.navigateTo({
					url:"/show-pages/station/station"
				})	
			},
			// 获取积分
			gotoGetIntegral(){
				uni.switchTab(
					{   
					url:'/pages/index/index',
				    })
				 // 提示信息
				 this.getIntegral_show = false
				
			},
			// 浇水
			sureWater(){
				// 检查积分是否足够
				if(this.integral>=2){
					 this.integral-=2
					  this.$refs.uNotify.show({
					            top: 1, 
					            type: 'error',
					            color: '#fff',
					            bgColor: '#5ac725',
					            message: '您已成功浇水，积分-2',
					            duration: 1000 * 2,
					            fontSize: 15,
					            safeAreaInsetTop:true
					        })
							// console.log(this.integral)
				}else{
					this.$refs.uNotify.show({
					          top: 1, 
					          type: 'error',
					          color: '#fff',
					          message: '积分不足，无法浇水',
					          duration: 1000 * 2,
					          fontSize: 15,
					          safeAreaInsetTop:true
					      })
				}
			},
			gotoDetail(item){
				const Data = JSON.stringify(item)
				// console.log(data)
				uni.redirectTo({
					url:'../../detail-pages/goods-detail/goods-detail?data='+Data
				})
			}
			
		}
	}
</script>

<style lang="scss">
.garden{
	background-color: #F3FDED;
	.tree{
		position: relative;
		width: 100%;
		height: 600rpx;
		// 设置为背景 -- no 不能使用本地资源哦
		// background-image: url(../../static/tree.png);
		.tree-background{
			width: 100%;
			height: 100%;
		}
		// .tree-image{
		// 	position: absolute;
		// 	bottom: 55px;
		// 	left: 55%;
		// 	transform: translate(-65%);
		// }
		// 浇水
		.water{
			border: 3px solid #2BBE14;
			position: absolute;
			right: 0;
			top: 120rpx;
			
		    width: 160rpx;
			height: 82rpx;
			background-color: rgba(255, 255, 255, 0.7);
			border-radius: 100rpx 0 0 100rpx;	
			border-right: 0;
			display: flex;
			box-sizing: border-box;
			padding-left: 20rpx;
			.icon{
				flex: 1;
				padding-top: 19rpx;
				.img{
					width: 44rpx;
					height: 44rpx;
					vertical-align: middle;
				}
				margin-right: 20rpx;
			}
			.text{
				flex: 6;
				line-height: 82rpx;
				font-size: 30rpx;
			}
		}
		// 弹出框样式
		.popup-content{
			padding: 20rpx;
		}
		// 积分数量
		.integral{
			border-radius: 0 50px 50px 0;
			position: absolute;
			left: 30rpx;
			top: 30rpx;
			display: flex;
			background-color: #f9a826;
			border: 3px solid #ee7a15;
			width: 140rpx;
			height: 50rpx;
			.integral-number{
				position: relative;
				flex: 2;
				border-radius: 50px;
				height: 100rpx;
				.image{
					position: absolute;
					top: -30rpx;
					left: 0;
					width: 110%;
					height: 100%;
				}
				.integral-text{
					position: absolute;
					color:#fff;
					font-size: 32rpx;
					top: 10rpx;
					left: 30rpx;
					z-index: 12;
				}
			}
			.integral-add{
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
		// 查看近况
		.recent{
			border: 3px solid #2BBE14;
			position: absolute;
			right: 0;
			top: 230rpx;	
		    width: 160rpx;
		    height: 82rpx;
			background-color: rgba(255, 255, 255, 0.7);
			border-radius: 100rpx 0 0 100rpx;	
			border-right: 0;
			display: flex;
			padding-left: 20rpx;
			box-sizing: border-box;
			.icon{
				flex: 1;
				padding-top: 19rpx;
				.img{
					width: 44rpx;
					height: 44rpx;
					vertical-align: middle;
				}
				margin-right: 20rpx;
			}
			.text{
				flex: 6;
				line-height: 82rpx;
				font-size: 30rpx;
			}
		}
	}
	// 守护天数
		
	.days{
		display: flex;
		width: 420rpx;
		height: 80rpx;
		line-height: 80rpx;
		background-color: #fff;
		border-bottom: 3px solid #0FD15A;
		border-radius: 0 100rpx 100rpx 0;
		font-size: 34rpx;
		padding-left: 30rpx;
		// 天数数字要做特殊样式处理
		.text{
			flex: 4;
			.days-numbrer{
				font-size: 50rpx;
				font-weight: bold;
				color:#2BBE14;
				margin: 0 6rpx;
			}
		}
		.days-icon{
			// 垂直居中
			  display: flex;  
			    align-items: center;
			line-height: 80rpx;
			flex:1;
			.day-img{
			   width: 50rpx;
			   height: 50rpx;
			}
		}
		
	}
	// 我要种树
	// 和直接购买的结构相同 -- 一起定义
	.plant,.buy{
		margin-top: 25rpx;
		padding: 0 20rpx;
		.head{
			font-size: 36rpx;
		}
		.body{
			display: flex;
			gap: 6rpx;
			margin-top: 10rpx;
			height: 180rpx;
			// background-color: #ccc;
			.single-sapling,.single-good{
				flex: 1;
				
				.sapling-img,.good-img{
					width: 100%;
					height: 100%;
					// border-bottom: 1px solid #00973B;
				}
			}
		}
		.foot{
			display: flex;
			.text{
				flex: 19;
				margin-right: 10rpx;
			}
			.icon{
				flex: 1;
			}
			text-align: right;
			// padding: 0 24rpx;
			color: #00973B;
			font-size: 36rpx;
			margin-top: 6rpx;
		}
		}
		
}
</style>
