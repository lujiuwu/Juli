<template>
	<view class="station">
		<!-- 近况界面 -->
		<view class="recent">
			<view class="recent-title">
				在此处查看果树近况
			</view>
			<u-collapse
			    @change="change"
			    @close="close"
			    @open="open"
				style="font-size: 32rpx;"
			  >
			      <u-collapse-item
				    v-for="(item,index) in recentArray"
					:key="index"
			        :title="item.title"
			        name="Numerous tools"
					style="height: 320rpx;font-size: 32rpx;"
			      >
			        <view class="u-collapse-content">
						<view class="recent-image">
							<image :src="item.image" class="image"></image>
						</view>
						<view class="other-text">
							<view class="single-element">
								<span class="element-title">时间：</span>
								<span class="element-content">{{item.date}}</span>
							</view>
							<view class="single-element">
								<span class="element-title">阶段：</span>
								<span class="element-content">{{item.date}}</span>
							</view>
							<view class="single-element">
								<span class="element-title">状态：</span>
								<span class="element-content">{{item.level}}</span>
							</view>
						</view>
					</view>
			      </u-collapse-item>
			</u-collapse>
		</view>
		
	</view>
</template>

<script>
	import dayjs from 'dayjs';
	export default {
		data() {
			return {
				// 循环渲染数组
				recentArray:[
					{
						title:'今日',
						image:'https://img2.imgtp.com/2024/05/24/MM1Ojo1j.jpg',
						date:dayjs().format('YYYY-MM-DD'),
						status:'良好',
						level:'生长中'
					},
					{
						title:'昨日',
						image:'https://img2.imgtp.com/2024/05/24/MM1Ojo1j.jpg',
						date:'2024-5-22',
						status:'较差',
						level:'生长中'
					},
					{
						title:'5月21日',
						image:'https://img2.imgtp.com/2024/05/24/MM1Ojo1j.jpg',
						date:'2024-5-21',
						status:'良好',
						level:'生长中'
					}
				]
			};
		},
		methods:{
			  open(e) {
			              // console.log('open', e)
			            },
			            close(e) {
			              // console.log('close', e)
			            },
			            change(e) {
			              // console.log('change', e)
			            }
		}
	}
</script>

<style lang="scss">
.station{
	padding: 20rpx;
	//标题区域
	.recent-title{
		padding: 10rpx 20rpx;
		margin-bottom: 30rpx;
		font-size: 32rpx;
		color: #005500;
	}
	// 单个折叠板样式
	.u-collapse-content{
		background-color: #ecfdee;
		font-size: 30rpx;
		height: 220rpx;
		padding: 20rpx 0;
		box-sizing: border-box;
		display: flex;
		.recent-image{
			width: 200rpx;
			.image{
				width:100% ;
				height: 100%;
			}
		}
		.other-text{
			margin-left: 20rpx;
			.single-element{
				display: flex;
				margin-bottom: 32rpx;
				.element-title{
					font-size: 32rpx;
					color: #000;
				}
				.element-content{
					font-size: 30rpx;
				}
			}
		}
	}
}
</style>
