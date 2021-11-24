<template>
  <div div="mvs">
    <div class="container">
      <transition animate__animated animate__fadeInDown>
        <div class="row mt-5">
          <div class="col-md-4">
            <div
              class="card shadow p-3 mt-5 bg-white rounded float-end"
              style="width: 16rem; height: 320px"
            >
              <div class="card-body">
                <img
                  src="@/assets/images/vision.png"
                  width="137"
                  height="100"
                />
                <h5 class="card-title">Vision</h5>
                <p class="card-text text-secondary fs-6">
                  His Kingdom come, His will be done on earth as it is in
                  Heaven. Bringing His Light forth
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div
              class="card ms-5 shadow p-3 rounded"
              style="width: 18rem; height: 484px; background-color: #37784f"
              id="mission"
            >
              <div class="card-body" style="background-color: #37784f">
                <img
                  src="@/assets/images/mission3.png"
                  width="137"
                  height="100"
                  class="mt-5"
                />
                <h5 class="card-title mt-4 text-light">Misson</h5>
                <p class="card-text mt-4 text-light">
                  Serve, influence and Transform communities with excellence
                  through Business enterprises that are self sustaining and
                  rooted in KEL community relationships.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div
              class="card shadow p-3 mt-5 bg-white rounded float-start"
              style="width: 16rem; height: 320px"
            >
              <div class="card-body">
                <img src="@/assets/images/value.png" width="137" height="110" />
                <h5 class="card-title">Core Values</h5>
                <p class="card-text text-secondary">
                  Servant Leadership growth ,Excellence of Service ,Solution
                  Minded , Community Engagement &#38; Meaningful Relationship
                </p>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.col-md-4 {
  /* border: 1px solid green; */
  height: 500px;
}

.mission {
  background-color: #37784f;
}
.card {
  /* the other rules */
  transition: height 0.3s, box-shadow 0.3s;
}
.card:hover {
  height: 410px;
  box-shadow: 20px 20px 40px 0px rgba(0, 0, 0, 0.5);
}
</style>
