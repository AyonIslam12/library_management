<template>
  <div>
    <div class="authentication-box">
            <h3 class="text-center">NEW USER</h3>
            <h6 class="text-center">Enter your Username and Password For Login or Signup</h6>
            <div class="card mt-4 p-4">
                <form class="theme-form">
                    <div class="row g-2">
                        <div class="col-md-6 mt-0">
                            <div class="mb-3">
                                <label class="col-form-label">First Name</label>
                                <input type="text" class="form-control" placeholder="John">
                            </div>
                        </div>
                        <div class="col-md-6 mt-0">
                            <div class="mb-3">
                                <label class="col-form-label">Last Name</label>
                                <input type="text" class="form-control" placeholder="Deo">
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="col-form-label">User Name</label>
                        <input type="text" class="form-control" placeholder="John Deo">
                    </div>
                    <div class="mb-3">
                        <label class="col-form-label">Password</label>
                        <input type="password" class="form-control" placeholder="**********">
                    </div>
                    <div class="mb-3">
                        <label class="col-form-label">BOD</label>
                        <div class="row g-2">
                            <div class="col-sm-4">
                                <select class="form-select mb-1">
                                    <option>DD</option>
                                    <option>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                    <option>04</option>
                                </select>
                            </div>
                            <div class="col-sm-4">
                                <select class="form-select mb-1">
                                    <option>MM</option>
                                    <option>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                    <option>04</option>
                                </select>
                            </div>
                            <div class="col-sm-4">
                                <select class="form-select mb-1">
                                    <option>YYYY</option>
                                    <option>1990</option>
                                    <option>1991</option>
                                    <option>1992</option>
                                    <option>1993</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row g-2">
                        <div class="col-sm-3">
                            <button type="submit" class="btn btn-secondary">Sign Up</button>
                        </div>
                        <div class="col-sm-8">
                            <div class="text-start mt-2 m-l-20">
                                Are you already user?&nbsp;&nbsp;
                               <router-link :to="{name:'login'}">Signin</router-link>
                            </div>
                        </div>

                    </div>
                    <div class="form-divider"></div>
                   
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