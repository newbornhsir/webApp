<template>
  <div class="hello">
     <div class="form">
       <mt-field placeholder="请输入用户名" v-model="username"></mt-field>
       <mt-field placeholder="请输入密码" v-model="password"></mt-field>
       <!-- <mt-checklist
          v-model="selected"
          id="transparent"
          :options="['记住密码']">
        </mt-checklist> -->
        <div class="submit-button">
          <mt-button type="primary" v-on:click="login">登录</mt-button>
        </div>
        
     </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      username: '',
      password: '',
      selected: []
    }
  },
  methods: {
    login: function () {
      // console.log(this.selected.length)
      // this.isShow = !this.isShow
      this.$router.push('/login/tab')
    }
  }
}
</script>

<style scoped>  
  .hello{
    display: flex;
    justify-content: center;
    align-items: center;
    align-content:center; 
    width: 100%;
    height:100%;
    background: url(../assets/bg.png);
    background-size: 100% 100%;
  }
  .form{
  	width: 80%;
  }
  .mint-field{
    margin: 15px 0;
    border-radius: 24px;
  }
  .mint-checklist{
    text-align: right;
    margin-top: -10px !important;
  }
  #transparent>.mint-cell{
    /*这里不起作用，修改了mint-checklist下的默认样式*/
    background-color: transparent !important;
  }
  .submit-button{
    text-align: center;
  }
  .submit-button>.mint-button{
    width: 200px;
  }
</style>
