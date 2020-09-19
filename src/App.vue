<template lang="pug">
  #app.container
    nav
      ul 
        li 
          router-link.logo(to="/") 
            span Plank
            span ify
        li(v-if='this.$route.name === `Home`')
          router-link.nav-link(to="/progress") Progress
        li(v-if='this.$route.name === `Planking`')
          router-link.nav-link(to="/") Cancel
        li(v-if='this.$route.name === `Progress`')
          router-link.nav-link(to="/") Home
    router-view
</template>

<style lang="scss">
@import '@/styles/main.scss';
</style>
