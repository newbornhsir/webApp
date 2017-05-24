<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>	
html,body{
	width: 100%;
	height: 100%;
}
body{
	margin: 0;
}
#app {
	box-sizing: border-box;
	/*padding: 8px;*/
	width: 100%;
	height: 100%;
}
#app>div{
	box-sizing: border-box;
	padding: 8px;
}
</style>
