<template lang="pug">
  #app.container
    nav
      router-link.logo(to="/") 
        span Plank
        span ify
      router-link.nav-link(to="/progress") Progress
    router-view
</template>

<style lang="scss">
@import '@/styles/main.scss';
</style>
