<template>
  <div class="tab">
  	<div>i am tab</div>
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
  .hello{
    display: flex;
    justify-content: center;
    align-items: center;
    align-content:center; 
    width: 100%;
    height:100%;
    background: silver;
  }
</style>
