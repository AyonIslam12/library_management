  
<template>
  <div>
    <div class="row justify-content-center mt-4">
      <div class="col-sm-12 col-md-8 col-lg-9">
        <div class="card">
          <div class="card-header">
            <h4>Book Entry</h4>
          </div>
          <div class="card-body">
            <form action="">
              <div class="form-group">
                <label for="">Book Name</label>
                <input type="text" class="form-control" />
              </div>
              <div class="form-group">
                <label for="">Author</label>
                <input type="text" class="form-control" />
              </div>
              <div class="form-group">
                <label for="">Section</label>
                <input type="text" class="form-control" />
              </div>
              <div class="form-group">
                <label for="">Image</label>
                <input type="file" class="form-control" />
              </div>
              <div class="form-group">
                <button type="button" class="btn btn-secondary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "new-entry",
  methods: {
    getData: function () {},
  },
};
</script>

<style>

</style>