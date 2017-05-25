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
  .tab{
    display: flex;
    justify-content: center;
    align-items: center;
    align-content:center; 
    width: 100%;
    height:100%;
    background: red;
  }
</style>
