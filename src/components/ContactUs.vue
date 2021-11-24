<template>
  <div class="row">
    <div class="col-md-1"></div>
    <div class="col-md-5 mt-5 me-s">
      <img
        src="@/assets/images/farm5.jpg"
        alt=""
        width="450px"
        height="400px"
      />
    </div>
    <div class="col-md-4 ms-5">
      <form class="text-start mt-5">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Name</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Email</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Subject</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            class="form-control"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-success">Submit</button>
      </form>
    </div>
    <div class="col-md-2"></div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
