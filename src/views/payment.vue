<template>
  <div class="folder text-red">
    <div class="p-32">
      <h3>hello this is content</h3>
      <div>hello this is ok</div>
    </div>
  </div>
</template>

<script setup lang=ts>
</script>

<style lang="css" scoped>
.folder{

width: 80%;
height: 310px;
margin: 10em auto 10em;

border-radius: 5px 25px 25px 25px;
filter: drop-shadow(0 0 0.75rem grey);
/* padding: 32px; */
background: rgb(145, 252, 149);
position: relative;
}

.folder::before{
  content:  '';
  position: absolute;
  top: -18px;
  width: 200px;
  height: 25px;
  background: rgb(145, 252, 149);
  border-radius: 25px 0 0 0;
  clip-path: path('M 0 0 L 160 0 C 185 2, 175 16, 200 18 L 0 50 z');
}
</style>
