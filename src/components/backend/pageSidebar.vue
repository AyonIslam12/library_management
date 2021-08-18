<template>
    <div class="page-sidebar custom-scrollbar">
        <div class="sidebar-user text-center">
            <div>
                <img class="img-50 rounded-circle" src="/assets/images/user/1.jpg" alt="#">
            </div>
            <h6 class="mt-3 f-12">Johan Deo</h6>
        </div>
        <ul class="sidebar-menu">
            <li v-if="get_auth_role_name == 'admin'">
                <div class="sidebar-title">Adnin</div>
                <a href="javascript:void(0)" class="sidebar-header">
                    <i class="fas fa-tachometer-alt"></i><span>Pages</span>
                    <i class="fa fa-angle-right pull-right"></i>
                </a>
                <ul class="sidebar-submenu">
                    <li>
                        <router-link :to="{name: 'adminProfile'}"><i class="fa fa-angle-right"></i>Home</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'users'}"><i class="fa fa-angle-right"></i>Users</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'bookList'}"><i class="fa fa-angle-right"></i>Book List</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'bookEntry'}"><i class="fa fa-angle-right"></i>Book Entry</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'entryList'}"><i class="fa fa-angle-right"></i>Entry List</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'newEntry'}"><i class="fa fa-angle-right"></i>New Entry</router-link>
                    </li>
                 
                </ul>
            </li>
            <li v-if="get_auth_role_name == 'management'">
                <div class="sidebar-title">Management</div>
                <a href="javascript:void(0)" class="sidebar-header">
                   <i class="fas fa-tasks"></i><span>Pages</span>
                    <i class="fa fa-angle-right pull-right"></i>
                </a>
                <ul class="sidebar-submenu">
                    <li>
                        <router-link :to="{name: 'managementProfile'}"><i class="fa fa-angle-right"></i>Home</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'managementBookList'}"><i class="fa fa-angle-right"></i>Book List</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'managementEntryList'}"><i class="fa fa-angle-right"></i>Entry List</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'managementNewEntry'}"><i class="fa fa-angle-right"></i>New Entry</router-link>
                    </li>
                  
                </ul>
            </li>
            <li v-if="get_auth_role_name == 'student'">
                <div class="sidebar-title">Students</div>
                <a href="javascript:void(0)" class="sidebar-header">
                   <i class="fas fa-user-graduate"></i><span>Pages</span>
                    <i class="fa fa-angle-right pull-right"></i>
                </a>
                <ul class="sidebar-submenu">
                    <li>
                        <router-link :to="{name: 'studentProfile'}"><i class="fa fa-angle-right"></i>Home</router-link>
                    </li>

                      <li>
                        <router-link :to="{name: 'studentBookList'}"><i class="fa fa-angle-right"></i>Book List</router-link>
                    </li>
                </ul>
            </li>
             <li class="mt-3">
                <a href="#" @click.prevent="get_logout()"><i class="fas fa-sign-out-alt text-danger"></i>Logout</a>
            </li>
        </ul>
     <!--    <div class="sidebar-widget text-center">
            <div class="sidebar-widget-top">
                <h6 class="mb-2 fs-14">Need Help</h6>
                <i class="icon-bell"></i>
            </div>
            <div class="sidebar-widget-bottom p-20 m-20">
                <p>+1 234 567 899
                    <br>help@pixelstrap.com
                    <br><a href="#">Visit FAQ</a>
                </p>
            </div>
        </div> -->
    </div>
</template>

<script>
import $ from "jquery";
import { mapGetters, mapMutations } from 'vuex';
export default {
    name:'page-sidebar',
    created:function(){
        this.init_jq();
    },
    methods:{
        ...mapMutations([
            'set_logout',
        ]),
        get_logout:function(){
            this.$router.replace({name:'login'});
            this.set_logout();
        },
        init_jq:function(){
            "use strict";
            setTimeout(() => {
  $.sidebarMenu = function(menu) {
    var animationSpeed = 300,
    subMenuSelector = '.sidebar-submenu';
    $(menu).on('click', 'li a', function() {
      var $this = $(this);
      var checkElement = $this.next();
      if (checkElement.is(subMenuSelector) && checkElement.is(':visible')) {
        checkElement.slideUp(animationSpeed, function() {
          checkElement.removeClass('menu-open');
        });
        checkElement.parent("li").removeClass("active");
      }
      else if ((checkElement.is(subMenuSelector)) && (!checkElement.is(':visible'))) {
        var parent = $this.parents('ul').first();
        var ul = parent.find('ul:visible').slideUp(animationSpeed);
        ul.removeClass('menu-open');
        var parent_li = $this.parent("li");
        checkElement.slideDown(animationSpeed, function() {
        checkElement.addClass('menu-open');
        parent.find('li.active').removeClass('active');
        parent_li.addClass('active');
        });
      }
    });
  }
  $(".mobile-sidebar .switch-state").click(function(){
    $(".page-body-wrapper").toggleClass("sidebar-close");
  });
  $.sidebarMenu($('.sidebar-menu'));

 }, 100);
        }
    },
    computed:{
        ...mapGetters([
            'get_auth_role_name',
            'get_check_auth_status',
        ])
    }
}
</script>

<style>

</style>