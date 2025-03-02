<template>
	<view class="store">
		<!-- 搜索区域 -->
		<div class="search-area">
			<u-search borderColor="#ccc" height="40" :showAction="false" bgColor="#fff" shape="square"
				placeholder="搜索商品" v-model="keyword"></u-search>
		</div>
		<!-- tabs区域 -->
		<view class="tabs-area">
			<u-sticky>
				<u-tabs :activeStyle="activeTabs" lineWidth="40" lineColor="#F28F69" :scrollable="false"
					:list="tabs_list"></u-tabs>
			</u-sticky>
		</view>
		<!-- 瀑布流布局列表 -->
		<view class="pubuBox">
			<view class="pubuItem">
				<view @click="gotoPay(item)" class="item-masonry" v-for="(item, index) in comList" :key="index">
					<image :src="item.img" mode="widthFix"></image>
					<view class="listtitle"> <!-- 这是没有高度的父盒子（下半部分） -->
						<view class="listtitle1">{{ item.name }}</view>
						<view class="listtitle2">
							<text class="listtitle2son">￥</text>
							{{ item.commdityPrice }}
							<text class="listtitle2son">元/斤</text>
						</view>
						<view class="listtitle3">
							销量 {{item.sale}}
						</view>
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
				comList: [{
						img: "https://s2.loli.net/2025/02/28/uHe6sOPTlftEaJ7.png",
						name: '好吃多汁的高品质柑橘',
						commdityPrice: 3.4,
						sale: 100
					}, {
						img: "https://s2.loli.net/2025/02/28/TGcwzDmtE3gX1ZK.png",
						name: '好吃多汁的高品质柑橘',
						commdityPrice: 3.1,
						sale: 40
					},
					{
						img: "https://s2.loli.net/2025/02/28/RSgnp9szO5YxvAa.png",
						name: '好吃多汁的高品质柑橘',
						commdityPrice: 4.2,
						sale: 55
					}, {
						img: "https://s2.loli.net/2025/02/28/bAC3kgQVfosvJ1w.png",
						name: '好吃多汁的高品质柑橘',
						commdityPrice: 6.8,
						sale: 121
					}, {
						img: "https://s2.loli.net/2025/02/28/ysVPTZpU8cr4fCH.png",
						name: '好吃多汁的高品质柑橘',
						commdityPrice: 5.9,
						sale: 145
					}
				], //商品列表
				keyword: "",
				// 商品tabs列表
				tabs_list: [{
						name: '推荐'
					},
					{
						name: '新鲜柑橘'
					},
					{
						name: '柑橘加工品'
					},
					{
						name: '柑橘树苗'
					},
				],
				// tabs选中样式
				activeTabs: {
					color: '#F28F69'
				}
			};
		},
		methods: {
			gotoPay(item) {
				const good = JSON.stringify(item)
				uni.navigateTo({
					url: "/payment-pages/setp1/setp1?good=" + good
				})
			}
		}
	}
</script>

<style lang="scss">
	.store {
		background-color: #f3fded;
		padding-top: 30rpx;
	}

	//瀑布流
	page {
		background-color: #eee;
		height: 100%;
	}

	.search-area {
		padding: 0 20rpx;
	}

	.tabs-area {
		text-align: center;
	}

	.pubuBox {
		padding: 22rpx;
	}

	.pubuItem {
		column-count: 2;
		column-gap: 20rpx;
	}

	.item-masonry {
		box-sizing: border-box;
		border-radius: 15rpx;
		overflow: hidden;
		background-color: #fff;
		break-inside: avoid;
		/*避免在元素内部插入分页符*/
		box-sizing: border-box;
		margin-bottom: 20rpx;
		box-shadow: 0px 0px 28rpx 1rpx rgba(78, 101, 153, 0.14);
	}

	.item-masonry image {
		width: 100%;
	}

	.listtitle {
		padding-left: 22rpx;
		font-size: 30rpx;
		padding-bottom: 22rpx;

		.listtitle1 {
			line-height: 39rpx;
			text-overflow: -o-ellipsis-lastline;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			line-clamp: 2;
			-webkit-box-orient: vertical;
			min-height: 39rpx;
			max-height: 78rpx;
		}

		.listtitle2 {
			color: #ff0000;
			font-size: 32rpx;
			line-height: 32rpx;
			padding-top: 22rpx;

			.listtitle2son {
				font-size: 26rpx;
			}
		}

		.listtitle3 {
			font-size: 28rpx;
			color: #909399;
			line-height: 32rpx;
			padding-top: 22rpx;
			text-align: right;
			margin-right: 10px;
		}
	}

	.Index {
		width: 100%;
		height: 100%;
	}
</style>