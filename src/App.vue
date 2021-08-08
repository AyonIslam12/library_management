<template>
  <div>
    <div v-if="check_auth">
      <dashboard></dashboard>
    </div>
    <div v-else>
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
      check_auth: true,
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
