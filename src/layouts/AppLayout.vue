<template>
    <div class="row text-center">
      <div class="col-3">
        <img alt="Vue logo" src="../assets/explore.png" class="img-position">
        <br>
        <span class="text-white">Code Explorer and Deployer</span>
      </div>
      <div class="col-6">
        <router-link to="/explorer" class="btn btn-dark">Explorer</router-link>
        <router-link to="/deployer" class="btn btn-dark ml-2">Deployer</router-link>
      </div>
      <!-- <div class="col-3">
        <button type="button" class="btn btn-primary">Sign In</button>
      </div> -->
    </div>

    <slot />
  </template>
  
  <script>  
  export default {
    name: 'AppLayout',    
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
    background: black;
  }
  
  html {
    background: black;
  }
  
  .img-position {
    width: 100px;
    margin-top: -34px;
  }
  
  .ml-2 {
    margin-left: 2rem;
  }

  html {
    overflow-x: hidden;
  }
  </style>
  