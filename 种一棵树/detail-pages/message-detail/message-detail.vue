<template>
	<view class="message-detail">
		<view class="title">
			{{showDate.name}}
		</view>
		<view class="buttom-talk">
			<u--input
			    placeholder="请输入内容"
			    border="surround"
				shape="circle"
			    v-model="value"
			  ></u--input>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showDate:{},
				value:''
			};
		},
		onLoad(options) {
		            var data = JSON.parse(options.data); // 字符串转对象
					// 赋值
					this.showDate = data
		           
		        }
	}
</script>

<style lang="scss">
.message-detail{
	.title{
		text-align: center;
		height: 70rpx;
		line-height: 70rpx;
		border-bottom: 1px solid #ccc;
	}
	.buttom-talk{
		position: fixed;
		bottom: 0;
		height: 180rpx;
		background-color: pink;
		width: 100%;
		padding: 20rpx;
		box-sizing: border-box;
		background-color: #fff;
		border-top: 1px solid #ccc;
	}
}
</style>
