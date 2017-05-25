<template>
  <div id="app">
  	<transition :name="transitionName">
  		<router-view></router-view>
  	</transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      transitionName: 'slide-fade-in'
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      console.log(to.path)
      console.log(toDepth)
      const fromDepth = from.path.split('/').length
      console.log(from.path)
      console.log(fromDepth)
      this.transitionName = toDepth < fromDepth ? 'slide-fade-out' : 'slide-fade-in'
      console.log(this.transitionName)
    }
  }
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
/*pop-in*/
.slide-fade-in-enter-active {
  transition: all .5s ease;
  position: absolute;
  left: 0;
  top: 0;
}
.slide-fade-in-enter {
  transform: translateX(100%);
}
.slide-fade-in-leave-active {
  transition: all .5s ease;
  position: absolute;
  left: 0;
  top: 0;
}
.slide-fade-in-leave-active{
  transform: translateX(-90%);
}


/*pop-out*/
.slide-fade-out-enter-active {
  transition: all .5s ease;
  position: absolute;
  left: 0;
  top: 0;
}
.slide-fade-out-enter {
  transform: translateX(-100%);
}
.slide-fade-out-leave-active {
  transition: all .5s ease;
  position: absolute;
  left: 0;
  top: 0;
}
.slide-fade-out-leave-active{
  transform: translateX(90%);
}

</style>
