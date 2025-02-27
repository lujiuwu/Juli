<template>
	<view class="goods">
		<view class="search-area">
			 <u--input
			    placeholder="请输入搜索内容"
			    border="surround"
			    v-model="value"
				prefixIcon="search"
				shape="circle"
			    style="background-color: #fff;border: none;height: 100rpx;"
			  ></u--input>
		</view>
		<view class="main-area">
			<view class="single-goods" v-for="(item,index) in goodsArray" :key="index" >
				<view class="image-area">
					<image :src="item.iamge" class="image"></image>
				</view>
				<view class="text-area">
					<view class="text-title">
						{{item.title}}
					</view>
					<view class="text-info">
						<view class="text-tags">
							<view class="tag">
								<u-tag text="无添加" size="mini"></u-tag>
							</view>
							<view class="tag">
								<u-tag text="传天然" size="mini"></u-tag>
							</view>
						</view>
						<view class="text-price">
							<span class="price-number">{{item.price}}</span>
							<span style="font-weight: bold;">元</span>
							<span class="price-hypen">/kg</span>
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
				value: '',
				// 商品数组
				goodsArray:[
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
					}
				]
			};
		},
		methods:{
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
.goods{
	background-color: #f4f4f4;
	height: 100vh;
	.search-area{
		padding: 30rpx;
		background-color: #fff;
	}
	.main-area{
		margin-top: 16rpx;
		padding: 10rpx 20rpx;
		.single-goods{
			border-radius: 10rpx;
			margin-bottom: 14rpx;
			height: 220rpx;
			background-color: #fff;
			display: flex;
			border-bottom: 1px solid #ccc;
			padding: 20rpx;	
			box-sizing: border-box;
			.image-area{
				width: 180rpx;
				.image{
					width: 100%;
					height: 100%;
				}
			}
			.text-area{
				width: 400rpx;
				margin-left: 20rpx;
				.text-title{
					font-size: 32rpx;
					font-weight: bold;
				}
				.text-info{

					
					margin-top: 16rpx;
					display:flex;
					gap: 30rpx;
					.text-tags{
						display: flex;
						.tag{
							margin-right: 6rpx;
						}
					}
					.text-price{
						
						color: #d40407;
						.price-number{
							font-size: 34rpx;
							font-weight: bold;
						}
					}
				}
			}
		}
	}
}
</style>
