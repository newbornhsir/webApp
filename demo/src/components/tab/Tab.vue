<template>
  <div class="tab">
    <mt-header title="home">
	  <router-link to="/login" slot="left">
	    <mt-button icon="back">返回</mt-button>
	  </router-link>
	  <mt-button icon="more" slot="right"></mt-button>
	</mt-header>

  	<mt-tabbar v-model="selected" value="home">
	  <mt-tab-item id="home">
	    首页
	  </mt-tab-item>
	  <mt-tab-item id="product">
	    货品
	  </mt-tab-item>
	  <mt-tab-item id="setting">
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
      selected: 'home'
    }
  },
  methods: {
    show: function () {
      console.log(1)
      console.log(this.selected)
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
  .mint-tabbar{
  	height:50px;	
  	line-height: 50px;
  }
  .mint-tab-item{
  	display:flex;
  	align-content: center;
  	align-items:center;
  	justify-content:center;
  	font-size: 24px;
  }
</style>
