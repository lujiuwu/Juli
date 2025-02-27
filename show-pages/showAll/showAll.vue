<template>
	<view class="showAll">
		<!-- 仿照蚂蚁森林 -->
		<!-- 设置一个大盒子 -->
		<view class="ranking-box">
			<!-- 头部 -- 奖杯图标 + 排行榜类型 -->
			<view class="head">
				<view class="icon">
					<image src="https://img2.imgtp.com/2024/05/24/linRfEOx.png" class="img"></image>
				</view>
				<view class="ranking">
					<!-- 选择 -- 分段器 -->
					<u-subsection :list="list" :current="curNow" @change="sectionChange" :animation="true" :bold="true" :inactiveColor="'#000'" :activeColor="'#FB8D08'" :fontSize="17"></u-subsection>
				</view>
			</view>
			<!-- 主体 -- 排行榜 -->
			<view class="body">
				<!-- 第一行 -- 个人信息 -->
				<view class="myInfo">
					<!-- 排名 -->
					<view class="my-rank">
						3
					</view>
					<!-- 头像 -->
					<view class="my-avatar">
						<image :src="userInfo.img" class="avatar-image"></image>
					</view>
					<!-- 用户名 -->
					<view class="my-username">
						{{userInfo.username}} (我自己)
					</view>
					<!-- 积分数目 -->
					<view class="rank-number">
						{{curNow===0?userInfo.daily:curNow===1?userInfo.weekly:userInfo.monthly}}
					</view>
				</view>
				<!-- 其余行 -- 好友信息 -->
				<!-- 只显示排名前三 -->
				<view v-for="(item,index) in friendsInfo" :key="index" class="all-rank">
					<view class="single-rank">
						{{index+1}}
					</view>
					<view class="single-avatar">
					    <image :src="item.img?item.img:'../../static/default_avatar.png'" class="avatar-image"></image>
					</view>
					<view class="single-username">
						{{item.username}}
					</view>
					<view class="single-rank-number">
						{{curNow===0?item.daily:curNow===1?item.weekly:item.monthly}}
					</view>
				</view>
				<!-- 最后一行 -- 提示 -- 没有更多了 -->
				<view class="noMore">
					没有更多了
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 分段器数据
				curNow: 0,
				list: [
					    {
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
				userInfo:{
					// 用户名
					username:"鹿九巫",
					// 用户积分
					// 分为 天 周 月 三个选择
					daily:10,
					weekly:20,
					monthly:50,
					img:'../../static/avatar.jpg'
				},
				// 好友信息
				friendsInfo:[
					{
						// 用户名
						username:"好友1",
						// 用户积分
						// 分为 天 周 月 三个选择
						daily:16,
						weekly:50,
						monthly:60,
						img:'../../static/avatar.jpg'
					},
					{
						// 用户名
						username:"好友2",
						// 用户积分
						// 分为 天 周 月 三个选择
						daily:8,
						weekly:60,
						monthly:70,
						img:'../../static/avatar.jpg'
					},
					{
						// 用户名
						username:"鹿九巫",
						// 用户积分
						// 分为 天 周 月 三个选择
						daily:10,
						weekly:20,
						monthly:50,
						img:'../../static/avatar.jpg'
					},
					{
						// 用户名
						username:"好友4",
						// 用户积分
						// 分为 天 周 月 三个选择
						daily:16,
						weekly:50,
						monthly:60,
						img:'../../static/avatar.jpg'
					}
					
				]
			}
		},
		methods: {
			sectionChange(index) {
				// 修改当前选择的序号
				this.curNow = index;
			}
		}
	}
</script>

<style lang="scss">
.showAll{
	background: linear-gradient(#f3bd1a,#f5f5da,#fff);
	height: 100vh;
	padding:30rpx 20rpx 0;
	.ranking-box{
		width: 100%;
		height: 100%;
	
		.head{	
			flex-direction: column;
			
			.icon{
				text-align: center;	
				.img{
					height: 150rpx;
					width: 150rpx;
				}
			}
			.ranking{
				margin-top: 10rpx;
				padding: 0 70rpx;
				font-size: 42rpx;
				
			}
		}
			
		.body{
			padding: 10rpx 16rpx;
			margin-top: 20rpx;
			height: 1000rpx;
	        background: linear-gradient(#f5f5da,#fff);
			border-top: 2px solid #fbd7ac;
			border-radius: 20rpx;
			position: relative;
			.myInfo{
				height: 94rpx;
				display: flex;
				border-radius: 10px 10px 0 0;
				
				line-height: 94rpx;
				border-top: 2px solid #F3FDED;
				border-left: 2px solid #F3FDED;
				border-right: 2px solid #F3FDED;
				border-bottom: 4px solid #fbd7ac;
				.my-rank{
					flex: 1;
					text-align: center;
										color: #FB5608;
					font-size: 60rpx;
					font-weight: bold;

				}
				.my-avatar{
					flex: 1;
					padding: 10rpx;
					.avatar-image{
						width: 100%;
						height: 100%;
					}
					margin-right: 10rpx;
				}
				.my-username{
					flex:5;
					font-size: 32rpx;
					font-weight: bold;
					color: #0C602D;
				}
				.rank-number{
					flex: 1;
					font-size: 34rpx;
					color: #00973B;
				}
			}
			.all-rank{
				margin-top: 10rpx;
				height: 94rpx;
				
				display: flex;
				line-height: 94rpx;
				.single-rank{
					flex: 1;
					text-align: center;
										color: #0C602D;
					font-size: 60rpx;
					font-weight: bold;

				}
				.single-avatar{
					flex: 1;
					padding: 10rpx;
					.avatar-image{
						width: 100%;
						height: 100%;
					}
					margin-right: 10rpx;
				}
				.single-username{
					flex:5;
					font-size: 32rpx;
					font-weight: bold;
					color: #0C602D;
				}
				.single-rank-number{
					flex: 1;
					font-size: 32rpx;
					color: #00973B;
				}
			}
				
			.noMore{
				width: 100%;
				text-align: center;
				position: absolute;
				bottom: 10rpx;
			}
		}
	}
}
</style>
