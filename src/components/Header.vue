<template>
   <mt-header class="header-title" title="消息">
          <mt-button  slot="right" @click="show">
              <img class="add-icon"  src="../assets/add.png" />
          </mt-button>
    </mt-header>
</template>
<script>
import { MessageBox } from 'mint-ui';
export default {
    data(){
        return{

        }
    },
    created(){
         console.log( localStorage.getItem('userInfo'))
    },
    methods:{
        show(){
            MessageBox.prompt(' ','输入要添加的好友的名称').then(({value,action})=>{
                if(action && value){
                    let userInfo = JSON.parse(localStorage.getItem('userInfo'))
                        socket.emit('addFriend',{'userInfo':userInfo,'addName':value})
                        socket.on('addFriCb',data=>{
                            let res = '';
                            switch(data.state){
                                case 1:
                                    res = '此用户不存在';
                                    break;
                                case 2:
                                    res = '该用户已存在';
                                    break;
                                case 3:
                                    res = '请求已发送';
                                    break;
                                default:
                                    res = '失败';
                                    break;
                            }
                            this.$toast({
                                message: res,
                                position: 'bottom',
                                duration: 3000
                            })
                        })
                
                }
            })
        }
    }
}
</script>
<style lang="scss">
    .add-icon{
        width:20px;
        height:20px;
    }
</style>
