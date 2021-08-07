<template>
  <div>
    <div v-if="check_auth">
      <div id="nav">
        <router-link :to="{path: 'admin'}">admin</router-link>| 
        <router-link :to="{path: 'student'}">student</router-link>| 
        <router-link :to="{path: 'management'}">management</router-link>
      </div>
      <h1>auth part</h1>
    </div>
    <div v-else>
      <div id="nav">
        <router-link :to="{path: 'login'}">login</router-link>| 
        <router-link :to="{path: 'signup'}">signup</router-link>| 
        <router-link :to="{path: 'protfolio'}">protfolio</router-link>
      </div>
      <h1>not auth part</h1>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data: function(){
    return{
      check_auth: true,
    }
  },

  created: function(){
    if(this.check_auth){
      this.$router.replace({name:'dashboard'});
    }else{
      this.$router.replace({name:'login'});
    }
     
  }

};
</script>

<style lang="scss">

</style>
