<template>
  <div>
    <div v-if="get_check_auth_status">
      <dashboard></dashboard>
    </div>
    <div v-else>
      <router-view/>
    </div>
    
  </div>
</template>

<script>
import dashboard from './views/backend/dashboard.vue';
import {mapGetters, mapMutations} from 'vuex';
export default {
  components: { dashboard },
  data: function(){
    return{
      //check_auth: this.get_check_auth_status,
    }
  },

  created: function(){
  this.check_auth_role();
  },

  updated: function(){
     console.log(this.get_check_auth_status);
     console.log( this.get_auth_role_name);
      this.check_auth_role();
  },
  methods:{
    //...mapAction(['']),
    ...mapMutations(['set_logout']),
    check_auth_role: function(){
      if(this.get_check_auth_status){
      if(this.get_auth_role_name == 'admin'){
         this.$router.replace({name:'admin'});
      }else if(this.get_auth_role_name == 'student'){
         this.$router.replace({name:'student'});
      }else if(this.get_auth_role_name == 'management'){
         this.$router.replace({name:'management'});
      }else{
        this.set_logout();
          this.$router.replace({name:'login'});
      }
    }else{
      this.$router.replace({name:'login'});
    }
    }
  },
  computed:{
    ...mapGetters([
      'get_check_auth_status',
      'get_auth_role_name'
      
    ])
  }

};
</script>

<style lang="scss">

</style>
