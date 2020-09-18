<template lang="pug">
  section.cta
    template(v-if='hasPlankToday') 
      p Want to plank again?
      router-link.button(to='/planking') Let's do it!
    template(v-if='!hasPlankToday')
      p Ready to plank?
      router-link.button(to='/planking') Start!
</template>

<script lang="ts">
export default {
  name: 'PlankAction',
  props: ['hasPlankToday'],
};

// TYPESCRIPT
// import { Component, Prop, Vue } from 'vue-property-decorator';

// @Component
// export default class PlankAction extends Vue {
//   @Prop() private hasPlankToday!: boolean;
// }
</script>

<style scoped lang="scss"></style>
