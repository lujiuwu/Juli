<template>
	<view class="days">
		<!-- 头部标题 -->
		<view class="title">
			守护日志
		</view>
		 <!-- 时间 -->
		 <view class="date">
		 	[
				{{startDate+" -- "+endDate}}
			]
		 </view>
		<!-- 日历区域 -->
		<view class="calendar">
		 <uni-calendar 
		        :date="date"
		        :lunar="true" 
		        :disable-before="true" 
		        :start-date="startDate"
		        :end-date="endDate"
		        @change="change"
		        @to-click="toClick"
				:selected="selectedArray"
				selectBg="red"
		         />
		</view>
		<!-- 详情区域 -->
		<view class="details">
			<view class="details-title">
				{{currentTime}}
			</view>
			<view class="details-body">
				<u-steps current="3" direction="column" activeIcon="tags">
					<u-steps-item  icon-size="20" v-for="(item,index) in Days_array" :key="index" title="浇水" :desc="item">
					</u-steps-item>
				</u-steps>
				<!-- 贴图 -->
				<view class="water-image">
					<image src="../static/浇水.png" class="image"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	// 引入dayjs
	const dayjs = require('dayjs')
	export default {
		data() {
			return {
				// 设置守护的起始时间
				startDate:'2024-4-10',
				// 守护的终止时间 -- 现在
				endDate:dayjs().format('YYYY-MM-DD'),
				// 打点格式
				selectedArray:[
					{
						date:'2024-4-10',
						info:'开始',
						data:{
							custom:'自定义',
							name:'自定义'
						}
					}
				],
				// 点击的当前时间
				currentTime:dayjs().format('YYYY-MM-DD'),
				// 守护日志详情数组
				Days_array:[
					'10:13',
					'12:15',
					'23:01'
				],
				Days_times:3
			}
		},
		
		methods: {
			 change(e) {
			            this.currentTime = e.fulldate
			        },
			        toClick(e) {
						this.currentTime = e.fulldate
			        }

		}
	}
</script>

<style lang="scss" scoped>
.days{
  background: linear-gradient(#f5f5da,#fff);
  height: 100vh;
  .title{
	  padding: 30rpx;
	  font-size: 32rpx;
	  box-sizing: border-box;
	  height: 40px;
  }
  .date{
	  padding-left: 30rpx;
	  margin-top: 10rpx;
	  color: #00973B;
	  font-size: 30rpx;
  }
  .details{
	  background-color: #fff;
	  padding: 0 40rpx;
	  .details-title{
		  font-size: 32rpx;
	  }
	  .details-body{
		  height: 380rpx;
		 background: linear-gradient(#fff,#cfeef1);
		  margin-top: 20rpx;
		  position: relative;
		  .water-image{
			  position: absolute;
			  width: 190rpx;
			  height: 210rpx;
			  right: 40rpx;
			  bottom: 140rpx;
			  .image{
				  width: 100%;
				  height: 100%;
			  }
		  }
	  }
  }
}
</style>
