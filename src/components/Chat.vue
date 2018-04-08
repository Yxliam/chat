<template>
      <div class="chat">
        <Header></Header>
        <ul class="message-list" v-show="friendList.length >0">
            <li class="message-list-item" v-for="item in friendList" :key="item._id">
                <img class="author-link"  src="../assets/author.jpg" alt="">
                <div class="content">
                    <div class="block clearfix">
                        <span class="name fl">{{item.username}}</span>
                        <span class="time fr gray"></span>
                    </div>
                    <div class="mess gray">
                        <span>username:</span>5555555
                    </div>
                </div>
            </li>
        </ul>
        <div class="no-friend" v-show="friendList.length === 0">
            <p><img class="none-img" src="../assets/none.png" alt=""></p>
              暂无好友,快去添加好友吧 (*.*)
        </div>
        <Footer :currentTab="currentTab"></Footer>
      </div>
</template>
<script>
import Footer from './Footer'
import Header from './Header'
import axios from 'axios'
export default {
  data () {
    return {
      ws: null,
      nickName: "",
      chatList: [],
      friendList:[],
      currentTab:1
    }
  },
  methods:{
    
  },
  mounted: function(){
    let userInfo = JSON.parse(localStorage.getItem('userInfo'));
    axios.post('/api/v1/message',{userId:userInfo.userId}).then(res=>{
        if(res.data.success){
          this.friendList = res.data.list
        }
    })
  },
  components:{
    Header,
    Footer
  }
}
</script>
<style lang="scss" scoped>
  .chat{
    background: #fff;
  }
  .name{
    font-size: 20px;
  }
  .mint-header{
      height:50px;
    .mint-header-title{
        color: red;
        font-size:24px;
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
  .message-list-item{
        display: flex;
        align-items: center;
        margin:0 15px;
        padding:10px 0;
         position: relative;
         border-bottom: 1px solid #dedede;
        .block{
         .time{
           position: absolute;
           right:0;
         }
        }
        .author-link{
          width:50px;
          height:50px;
          border-radius: 50%;
          margin-right:10px;
        }
        .mess{
          margin-top:10px;
        }
  }
  .gray{
    color:#676767;
  }

 
 
</style>

