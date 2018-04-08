<template>
  <div>
        <div class="bg-s">
            <div><img class="author" src="../assets/author.jpg" alt=""></div>
        </div>
        <div class="content-list">
             <mt-cell
                title="个人资料"
                to=""
                is-link
                value="">
            </mt-cell>
            <mt-cell
                title="消息"
                to="/request"
                is-link
                value="">
                 <mt-badge v-show="unreadNum > 0" size="small">{{unreadNum}}</mt-badge>
            </mt-cell>
        </div>
        <Footer :currentTab="currentTab"></Footer>
  </div>
</template>
<script>
import Footer from "./Footer"
import { Badge } from 'mint-ui';
import axios from 'axios'
export default {
    data(){
        return{
            currentTab:3,
            unreadNum:0
        }
    },
   
    mounted(){
         let userInfo = JSON.parse(localStorage.getItem('userInfo'));
        axios.post('/api/v1/unreadmessage',{userId:userInfo.userId}).then(res=>{
            if(res.data.success){
                 this.unreadNum = res.data.list.length;
            }
        })
    },
    components:{
        Footer
    }
}
</script>
<style lang="scss" scoped>
    .bg-s{
        height:250px;
        width:100%;
        background:url('../assets/bg.jpg') no-repeat;
        background-size:cover;
        position: relative;
        .author{
            width:50px;
            height:50px;
            border-radius: 50%;
            position: absolute;
            bottom:-20px;
            left:50%;
            margin-left:-25px;
            z-index: 2;
            box-shadow: 0 0 10px 4px white;
        }
    }
    .content-list{
        margin-top:40px;
    }
</style>
