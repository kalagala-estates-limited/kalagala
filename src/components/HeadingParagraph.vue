<template>
  <div class="headingP">
    <h1 class="mt-3">
      serve <span class="icons"><fa icon="circle" /></span>
      <span id="middle-text">&nbsp;influence&nbsp;</span>
      <span class="icons"><fa icon="circle" /></span> transform
    </h1>
    <div class="paragraph mt-3">
      <p class="text-title" style="font-size: 20px">
        Welcome to Kalagala Estates Limited.
      </p>
      <p>
        Our Company has business interests in tourism
        ,RealEstate,Finance,Business Advisory, Information Technology and
        Televommunication.
      </p>
      <a href="#" class="btn btn-sm text-white p-2 rounded" id="button"
        >contact us</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "HeadingParagraph",
};
</script>

<style>
.icons {
  font-size: 10px;
  color: #37784f;
}

#middle-text {
  color: #87ae95;
}
.paragraph {
  width: 400px;
  /* border: 1px solid blue; */
  display: inline-block;
  margin: 0 auto;
  padding: 3px;
}

.headingP {
  max-width: 700px;
  text-align: center;
  /* border: 1px solid blue; */
  margin-left: 10%;
}

#button {
  background-color: #37784f;
  color: #ffffff;
  padding-left: 10px;
  padding-right: 10px;
}
a {
  text-decoration: none;
  color: #ffffff;
}
</style>
