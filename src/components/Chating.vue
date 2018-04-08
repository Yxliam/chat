<template>
  <div class="chat-item">
     
                <div class="otherchat">
                    <img src="../assets/author.jpg" alt="" class="img" >
                    <div class="nt"><span >hello</span><span>2018-5-22</span></div>
                    <p class="msg">wqewwqewwqewwqewwqewwqewwqewwqewwqewwqewwqewwqewwqewwqewwqewwqewwqewwqewwqewwqewwqewwqewwqew</p>
                </div>
         
     
      <!-- <div class="mechat">
            <img src="../assets/author.jpg" alt="" class="img">
            <div class="nt"><span >hi</span><span >2018-12-45</span></div>
            <div class="msg">hi</div>
      </div> -->
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
    body{
        background: #f5f6f8;
    }
  
        .chat-item {
            width: 100%;
            margin: 10px 0;
            .otherchat{
                width:100%;
                position: relative;
                .img{
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    position: absolute;
                    top: 50%;
                    left: 10px;
                    transform: translateY(-50%);
                    cursor: pointer;
                }
                 .nt {
                    font-size: 14px;
                    left: 60px;
                    top: -20px;
                    position: absolute;
                    color: #686868;
                    span {
                        padding-right: 5px;
                    }
                    span:nth-child(2) {
                        font-size: 12px;
                    }
                }
                 .msg {
                    float:left;
                    max-width: 60%;
                    margin-left: 60px;
                    padding: 10px;
                    border-radius: 0.1rem;
                    font-size: 0.24rem;
                    line-height: 0.34rem;
                    background-color: #fff;
                }
            }
        }
</style>
