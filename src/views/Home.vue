<template>
  <div class="container">
    <div class="row">
      <div
        class="col-md-6"
        data-aos="fade-right"
        data-aos-ease="ease"
        data-aos-duration="1000"
      >
        <img
          src="@/assets/images/kala-logo.png"
          width="229"
          height="159"
          class="me-5 p-2"
        />

        <div class="heading">
          <HParagraph class="mt-5" id="heading" />
        </div>
      </div>
      <div
        class="col-md-6"
        data-aos="fade-left"
        data-aos-ease="ease"
        data-aos-duration="1000"
      >
        <div class="menu">
          <NavBar id="navbar1" class="mt-3" />
        </div>
        <div id="shape">
          <Shape />
        </div>
        <div id="fields">
          <img
            src="@/assets/images/fields.jpg"
            width="400"
            height="361"
            class="rounded-circle mb-5"
            id="fields"
          />
        </div>
      </div>
      <lines class="mt-5" />
    </div>

    <div class="row row-size">
      <h2 class="mt-5">About<span class="heading-color">Us</span></h2>
      <div
        class="col-md-6"
        data-aos="fade-right"
        data-aos-ease="ease"
        data-aos-duration="1000"
      >
        <AboutusParagragh id="paragraph" />
      </div>
      <div
        class="col-md-6"
        data-aos="fade-left"
        data-aos-ease="ease"
        data-aos-duration="1000"
      >
        <img
          src="@/assets/images/about us.jpg"
          width="400"
          height="361"
          class="mt-5"
        />
      </div>
    </div>
    <lines class="mb-5" />
    <div
      class="row"
      data-aos="flip-down"
      data-aos-ease="ease"
      data-aos-duration="1000"
    >
      <h2 class="">
        Vision <span class="icons"><fa icon="circle" /></span>
        <span id="middle-text">&nbsp;Mission &nbsp;</span>
        <span class="icons"><fa icon="circle" /></span> Core Values
      </h2>
      <mvs />
    </div>
    <lines class="mt-5" />
    <div
      class="row d-flex justify-content-center"
      data-aos="fade-up"
      data-aos-ease="ease"
      data-aos-duration="1000"
    >
      <div id="service-paragraph" class="mt-5 text-center">
        <h2>Servic<span class="heading-color">es</span></h2>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
      <div class="row mt-5">
        <services />
      </div>
      <lines class="mt-5" />
      <div
        class="row d-flex justify-content-center"
        data-aos="fade-up"
        data-aos-ease="ease"
        data-aos-duration="1000"
      >
        <div id="service-paragraph" class="mt-5 text-center">
          <h2>Produc<span class="heading-color">ts</span></h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div class="row mt-5">
          <products class="mb-5" />
        </div>
      </div>
    </div>
    <lines class="mt-5" />
    <div
      class="row d-flex justify-content-center mt-5"
      data-aos="fade-up"
      data-aos-ease="ease"
      data-aos-duration="1000"
    >
      <h2>Contact<span class="heading-color">Us</span></h2>
      <contact />
    </div>

    <div class="row mt-5">
      <foot class="mt-5" />
    </div>
  </div>
</template>

<script>
import HParagraph from "@/components/HeadingParagraph.vue";
import Shape from "@/components/Shape.vue";
import NavBar from "@/components/NavBar.vue";
import AboutusParagragh from "@/components/AboutUsParagraph.vue";
import mvs from "@/components/MissionVisionServices.vue";
import services from "@/components/Services.vue";
import products from "@/components/Products.vue";
import contact from "@/components/ContactUs.vue";
import foot from "@/components/FootBar.vue";
import lines from "@/components/HorizontalLine.vue";

export default {
  name: "Home",
  components: {
    HParagraph,
    Shape,
    NavBar,
    AboutusParagragh,
    mvs,
    services,
    products,
    contact,
    foot,
    lines,
  },
};
</script>
<style scoped>
.container {
  max-width: 1200px;
}
.col-md-6 {
  /* border: 1px solid green; */
  height: 600px;
}

#fields {
  position: absolute;
  bottom: 16%;
  right: 24%;
}
#shape {
  position: relative;
}
.heading {
  top: 5%;
}
.menu {
  left: 60%;
  position: absolute;
}

#paragraph {
  margin-top: 5%;
}
#service-paragraph {
  max-width: 500px;
}
.row-size {
  max-height: 500px;
  overflow: hidden;
}
#middle-text {
  color: #87ae95;
}
.heading-color {
  color: #87ae95;
}
#shape {
  z-index: -1;
}
#navbar1 {
  z-index: 1;
}
</style>
