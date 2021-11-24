<template>
  <!-- Footer -->
  <footer class="text-center text-lg-start" id="footer">
    <!-- Section: Social media -->
    <section
      class="
        d-flex
        justify-content-center justify-content-lg-between
        p-4
        border-bottom
      "
    >
      <!-- Left -->
      <div class="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>
      <!-- Left -->

      <!-- Right -->
      <div>
        <a href="" class="me-4 text-reset">
          <fa :icon="['fab', 'facebook-f']" class="icons" />
        </a>
        <a href="" class="me-4 text-reset">
          <fa :icon="['fab', 'twitter']" class="icons" />
        </a>
        <a href="" class="me-4 text-reset">
          <fa :icon="['fab', 'instagram']" class="icons" />
        </a>
      </div>
      <!-- Right -->
    </section>
    <!-- Section: Social media -->

    <!-- Section: Links  -->
    <section class="">
      <div class="container text-center text-md-start mt-5">
        <!-- Grid row -->
        <div class="row mt-3">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <!-- Content -->
            <h6 class="text-uppercase fw-bold mb-4">
              <i class="fas fa-gem me-3"></i>Kalagala Estate Limited
            </h6>
            <img
              src="@/assets/images/kalagala-logo.png"
              alt=""
              srcset=""
              width="209"
              height="170"
            />
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Company</h6>
            <p>
              <a href="#!" class="text-reset">AboutUs</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Services</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Products</a>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">location</h6>
            <p>
              <a href="#!" class="text-reset">Kangulumira</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Kayinga District</a>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 contact">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
            <p><fa icon="envelope" />&nbsp;kalagalaestateslimited@gmail.com</p>
            <p><fa icon="phone" class="rotate" /> 0752501544</p>
            <p><fa icon="phone" class="rotate" /> 0756005347</p>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->

    <!-- Copyright -->
    <hr />
    <div class="text-center p-4" style="background-color: EBF2EE">
      © 2021 Copyright
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</template>

<script>
export default {};
</script>

<style scoped>
#footer {
  background-color: #fafcfb;
}

h6,
p,
a {
  color: #37784f;
}

a {
  font-size: 14px;
  text-decoration: none;
}
.contact p {
  font-size: 14px;
}
.rotate {
  background-color: transparent;
  transform: rotate(90deg);
}

.icons {
  color: #37784f;
  font-size: 20px;
}
</style>
