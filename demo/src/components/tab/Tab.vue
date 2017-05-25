<template>
  <div class="tab">
    <mt-header title="home">
	  <router-link to="/login" slot="left">
	    <mt-button icon="back">返回</mt-button>
	  </router-link>
	  <mt-button icon="more" slot="right"></mt-button>
	</mt-header>


  	<mt-tabbar v-model="selected">
	  <mt-tab-item id="外卖">
	    <!-- <img slot="icon" src="../assets/100x100.png"> -->
	    外卖
	  </mt-tab-item>
	  <mt-tab-item id="订单">
	    <!-- <img slot="icon" src="../assets/100x100.png"> -->
	    订单
	  </mt-tab-item>
	  <mt-tab-item id="发现">
	    <!-- <img slot="icon" src="../assets/100x100.png"> -->
	    发现
	  </mt-tab-item>
	  <mt-tab-item id="我的">
	    <!-- <img slot="icon" src="../assets/100x100.png"> -->
	    我的
	  </mt-tab-item>
	</mt-tabbar>
  </div>
</template>
<script>
export default {
  name: 'tab',
  data () {
    return {
      username: '',
      password: '',
      selected: []
    }
  }
}
</script>

<style scoped>  
  .tab{
    padding: 0 !important;
    width: 100%;
    height: 100%;
  }
</style>
