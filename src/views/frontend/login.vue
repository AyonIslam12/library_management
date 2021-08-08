<template>
  <div>
    <div class="authentication-box">
            <h4 class="text-center">LOGIN</h4>
            <router-link :to="{name:'signup'}">SignUp</router-link>
            <h6 class="text-center">Enter your Username and Password For Login or Signup</h6>
            <div class="card mt-4 p-4 mb-0">
                <form class="theme-form">
                    <div class="mb-3">
                        <label class="col-form-label pt-0">Your Name</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="col-form-label">Password</label>
                        <input type="password" class="form-control" placeholder="Password">
                    </div>
                    <div class="form-check checkbox">
                        <input class="form-check-input" id="checkbox1" type="checkbox">
                        <label class="form-check-label" for="checkbox1">Remember me</label>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-4">
                            <button type="submit" class="btn btn-primary">LOGIN</button>
                        </div>
                    </div>
                </form>
            </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>