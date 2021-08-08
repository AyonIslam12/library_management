<template>
  <div>
    <div v-if="check_auth">
      <dashboard></dashboard>
    </div>
    <div v-else>
     <!--  <div id="nav">
        <router-link :to="{path: 'login'}">login</router-link>| 
        <router-link :to="{path: 'signup'}">signup</router-link>| 
        <router-link :to="{path: 'protfolio'}">protfolio</router-link>
      </div> -->
      <router-view/>
    </div>
    
  </div>
</template>

<script>
import dashboard from './views/backend/dashboard.vue';
export default {
  components: { dashboard },
  data: function(){
    return{
      check_auth: false,
    }
  },

  created: function(){
    if(this.check_auth){
      this.$router.replace({name:'admin'});
    }else{
      this.$router.replace({name:'login'});
    }
     
  }

};
</script>

<style lang="scss">

</style>
