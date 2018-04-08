<template>
    <div>
         <mt-header title="消息">
            <router-link to="/me" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header> 
        <ul class="mess-list" v-show="unreadList.length > 0">
            <li v-for="item in unreadList" :key="item.userId">
                <div class="mes-text">来自 <span class="blue">{{item.username}}</span> 的好友请求</div>
                <div class="btn-box" v-show="item.state === 1">
                    <mt-button type="primary" size="small" @click="friendOpt(item,1)">同意</mt-button>
                    <mt-button type="danger" size="small" @click="friendOpt(item,2)">拒绝</mt-button>
                </div>
                <div class="btn-box" v-show="item.state === 3">
                   <span class="red">已拒绝</span>
                </div>
            </li>
        </ul>
          <div class="no-friend" v-show="unreadList.length === 0">
            <p><img class="none-img" src="../assets/none.png" alt=""></p>
              暂无消息 (*.*)
        </div>
    </div>   
</template>
<script>
import axios from "axios"
export default {
    data(){
        return{
            unreadList:[]
        }
    },
    methods:{
        friendOpt(item,option){
             let userInfo = JSON.parse(localStorage.getItem('userInfo'));
             axios.post('/api/v1/friendop',{'userInfo':userInfo,'option':option,'targUser':item}).then(res=>{
                 if(res.data.success){
                    //  this.unreadList.splice(this.unreadList.indexOf(item),1);
                    this.getUnreadMess();
                 }
             })            
        },
        getUnreadMess(){
            let userInfo = JSON.parse(localStorage.getItem('userInfo'));
                    axios.post('/api/v1/unreadmessage',{userId:userInfo.userId}).then(res=>{
                        if(res.data.success){
                            this.unreadList = res.data.list;
                        }
                    })
        }
    },
    mounted(){
        this.getUnreadMess();
    }
}
</script>
<style lang="scss" scoped>
.red{
    color:red;
}
    .mess-list{
        background: white;
        li{
            padding:10px;
            border-bottom: 1px solid #dedede;
            .mes-text{
                margin-bottom: 10px;
            }
            .btn-box{
                text-align: right;
            }
        }
        .blue{
            color:#26a2ff;
            font-weight: bold;
        }
    }
    .no-friend{
    height:100%;
    text-align: center;
    padding:20px 0;
    .none-img{
      width:100px;
      height:100px;
    }
  }
</style>
