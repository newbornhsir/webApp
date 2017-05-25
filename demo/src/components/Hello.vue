<template>
  <div class="hello">
     <div class="form">
       <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
       <mt-field label="密码" placeholder="请输入密码" v-model="password"></mt-field>
       <mt-checklist
          v-model="selected"
          :options="['记住密码']">
        </mt-checklist>
        <div class="submit-button">
          <mt-button type="primary" v-on:click="login">登录</mt-button>
        </div>
        <transition name="fade">
        	<router-link to="login/tab" v-if="isShow">Go to Foo</router-link>
        </transition>
        
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
      selected: [],
      isShow: true
    }
  },
  methods: {
    login: function () {
      console.log(this.selected.length)
      this.isShow = !this.isShow
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>  
  .hello{
    display: flex;
    justify-content: center;
    align-items: center;
    align-content:center; 
    width: 100%;
    height:100%;
    background: silver;
  }
  .form{
  	width: 80%;
  }
  .mint-checklist{
    text-align: right;
  }
  .submit-button{
    text-align: center;
  }
  .submit-button>.mint-button{
    width: 200px;
  }
</style>
