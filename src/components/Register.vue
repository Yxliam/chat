<template>
    <div class="login-box">
        <div class="nav-header">
            <h2 @click="toLogin">登录</h2>
            <h2 class="active" >注册</h2>
        </div>
        <div class="chat-box">
          <img src="../assets/chat.jpg" alt="" class="chat-icon">
        </div>
        <div class="form-box">
            <ul class="">
                 <li>
                   <input type="text" class="user-name input" v-model="username" placeholder="请输入用户名">
                 </li>
                 <li>
                   <input type="password" class="pwd input" v-model="pwd" placeholder="请输入密码">
                 </li>
                 <li class="btn-box">
                   <mt-button type="primary" size="large" @click="register">注 册</mt-button>
                 </li>
            </ul>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {  
  name: 'register',  
  data() {  
    return {  
      username:'',
      pwd:''
    };  
  },
  methods:{
    toLogin(){
      this.$router.push({path:'/'})
    },
    register(){
      if(this.username !== '' || this.pwd !== ''){
        axios.post('/api/v1/register',{
          username:this.username,
          pwd:this.pwd
        }).then(res=>{
          if(res.data.success){
            this.$toast({
                message: res.data.message,
                position: 'bottom',
                duration: 2000
             })
             setTimeout(()=>{
               this.$router.push({path:'/'})
             },2000)
          }else{
              this.$toast({
                message: res.data.message,
                position: 'bottom',
                duration: 3000
              })
          }
        })
      }else{
        this.$toast({
           message: '用户名或者密码不能为空',
           position: 'bottom',
           duration: 3000
        })
      }
    }
  }  
};  
</script>
<style lang="scss" scoped>
 body{
    background: white;
  }
  .login-box{
    height:100%;
      background:white;
    .nav-header{
      text-align: center;
      margin-bottom: 40px;
      h2{
        display: inline-block;
        margin-right: 20px;
        font-size:24px;
        &:last-child{
          margin-right: 0;
        }
        .a-link{
          color: black;
          font-size:24px;
        }
      }
      .active{
        color:$commonColor;
      }
    }
    .chat-box{
      text-align: center;
      .chat-icon{
        width:200px;
        height:200px;
        border-radius: 50%;
      }
    }
    .form-box{
      margin-top: 50px;
      ul{
        li{
          padding:0 15px;
          .input{
              background-color: #f6f6f6;
              border: none;
              color: #0d0d0d;
              padding: 15px 0;
              text-align: center;
              text-decoration: none;
              display: inline-block;
              font-size: 16px;
              margin: 5px 0;
              width: 100%;
              border: 1px solid #f6f6f6;
              transition: all .5s ease-in-out;
              border-radius: 4px;
          }
        }
        .btn-box{
          margin-top:20px;
        }
      }
    }
  }
</style>
