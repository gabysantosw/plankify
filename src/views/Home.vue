<template lang="pug">
  main
    LastPlank(:planks='planks')
    PlankAction(:hasPlankToday='hasPlankToday')
</template>

<script lang="ts">
import { mapState } from 'vuex';
import LastPlank from '@/components/LastPlank.vue';
import PlankAction from '@/components/PlankAction.vue';

export default {
  name: 'Home',
  components: { LastPlank, PlankAction },
  computed: {
    ...mapState(['user', 'planks']),
    hasPlankToday() {
      if (this.planks.length === 0) return false;
      const currentDate = new Date();
      return currentDate.getDate() === this.planks[this.planks.length - 1].day;
    },
  },
};

// TYPESCRIPT
// import { Component, Vue } from 'vue-property-decorator';
// import { mapState } from 'vuex';
// import LastPlank from '@/components/LastPlank.vue';
// import PlankAction from '@/components/PlankAction.vue';

// @Component({
//   components: {
//     LastPlank,
//     PlankAction,
//   },
//   computed: mapState({ user: 'username', planks: 'planks' }),
// })
// export default class Home extends Vue {
//   get lastPlankDate() {
//     return true;
//   }
// }
</script>
