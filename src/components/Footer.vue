<template>
  <div class="flex-bar">
		<div class="flex-bar-list">
                <router-link class="flex-bar-list-item"  to="/chat">
                    <img class="img-icon" v-show="currentTab===1" src="../assets/img/chat-icon-active.png" alt="">
                    <img class="img-icon" v-show="currentTab!==1" src="../assets/img/chat-icon.png" alt="">
                    <p>好友</p>
                </router-link>
                <router-link  class="flex-bar-list-item" to="/robot">
                    <img class="img-icon" v-show="currentTab===2" src="../assets/img/robot-icon-active.png" alt="">
                    <img class="img-icon" v-show="currentTab!==2" src="../assets/img/robot-icon.png" alt="">
                    <p>机器人</p>
                </router-link>
                <router-link  class="flex-bar-list-item" to="/me">
                    <img class="img-icon" v-show="currentTab===3" src="../assets/img/me-icon-active.png" alt="">
                    <img class="img-icon" v-show="currentTab!==3" src="../assets/img/me-icon.png" alt="">
                    <p>我的</p>
                </router-link>
        </div>
	</div>
</template>
<script>
export default {
     props: ['currentTab'],
    data(){
        return{

        }
    }
}
</script>
<style lang="scss">
.flex-bar{
		    right: 0;
			bottom: 0;
			left: 0;
			position: fixed;
			
			z-index: 1;
			background: #fafafa;
			width:100%;
	}
	
    
	.flex-bar-list{
		display: flex;
		text-align: center;
		border-top: 1px solid #dedede;
		.flex-bar-list-item{
			display: block;
			padding: 7px 0;
			-webkit-box-flex: 1;
			-ms-flex: 1;
			flex: 1;
			p{
				margin:0;
                font-size: 14px;
                color:black;
			}
        }
        .router-link-active{
                p{
                    color:#26a2ff; 
                }
            }

		.img-icon{
			width:24px;
			height:24px;
			margin:auto;
		}
	}
	.text-label{
		margin:0;
	}
	.icon{
		display: inline-block;
		width:40px;
		height:40px;
	}
	// .icon-message{
	// 	background: url('./assets/img/chat-icon.png') center no-repeat;
	// 	background-size:40px 40px;
	// }
	// .icon-robot{
	// 	background: url('./assets/img/robot-icon.png') center no-repeat;
	// 	background-size:40px 40px;
	// }
	// .icon-me{
	// 	background: url('./assets/img/me-icon.png') center no-repeat;
	// 	background-size:40px 40px;
	// }
</style>
