<template>
    <component :is="layout">
      <transition>
        <keep-alive>
          <suspense timeout="0">
            <router-view />
          </suspense>
        </keep-alive>
      </transition>
    </component>
  </template>
  <script>  
  export default {
    name: 'App',
    computed: {
      layout() {
        return 'app-layout'
      },
    },
  }
  </script>
  