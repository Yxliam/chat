<template>
  <div id="app">
    <router-view/>
	<!-- <div class="flex-bar">
		<ul class="flex-bar-list">
			<li v-for="item in tabs" :key="item.id" @click="chagenState(item)" :class="{active:item.active}">
				<img class="img-icon" slot="icon" :src="item.active?item.icon_active:item.icon"> 
				<p>{{item.message}}</p>
			</li>
		</ul>
	</div> -->
  </div>
</template>

<script>
export default {
	name: 'App',
	data(){
		return{
			tabs:[
				{
					id:'message',
					active:true,
					icon:require('./assets/img/chat-icon.png'),
					icon_active:require('./assets/img/chat-icon-active.png'),
					message:'消息'
				},{
					id:'robot',
					active:false,
					icon:require('./assets/img/robot-icon.png'),
					icon_active:require('./assets/img/robot-icon-active.png'),
					message:'机器人'
				},
				{
					id:'me',
					active:false,
					icon:require('./assets/img/me-icon.png'),
					icon_active:require('./assets/img/me-icon-active.png'),
					message:'我的'
				}
			],
		}
	},
	methods: {
		chagenState(item){
			this.tabs.forEach(item=>{
				item.active = false;
			})
			item.active?item.active=false:item.active=true;
		},
		getMsgBySocket(){
			socket.on('getPrivateMsg',(data)=>{
				console.log( data );
			})
		}
	},
	created() {
		this.getMsgBySocket();
	},
	mounted() {
	},
	watch:{
		selected:function(val,oldVal){
			console.log( val );
		}
	}
}
</script>

<style lang="scss">
#app{
	height:100%;
}
body,
html {
    background: #f5f6f8;
    width: 100%;
    height: 100%;
    font-family: 'Microsoft Yahei' !important;
}
	
</style>
