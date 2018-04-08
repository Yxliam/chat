<template>
    <div class="login-box">
        <div class="nav-header">
            <h2 class="active">登录</h2>
            <h2 @click="toRegister">注册</h2>
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
                   <mt-button type="primary" size="large" @click="login">登 录</mt-button>
                 </li>
            </ul>
        </div>

    </div>
</template>
<script>
import axios from 'axios';
export default {  
  name: 'login',  
  data() {  
    return {  
      username:'',
      pwd:'',
    };  
  },
  mounted(){
  },
  methods:{
    toRegister(){
      this.$router.push({path:'/register'})
    },
    login(){
      if(this.username !== '' && this.pwd !== ''){
         axios.post("/api/v1/login", {
           username:this.username,
           pwd:this.pwd
         }).then(res=>{
           let response = res.data;
           if(response.success){
             //触发登录
             console.log( response );
            socket.emit('login', response.userInfo.userId);
						localStorage.setItem("userToken", response.token);
						localStorage.setItem("userInfo", JSON.stringify(response.userInfo));
            this.$router.push({path:'/'})
           }else{
             this.$toast({
              message: response.message,
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
