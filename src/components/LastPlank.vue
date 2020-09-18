<template lang="pug">
  section.last-planks
    template(v-if='planks.length > 0') 
      h2 Last planks
      ul 
        PlankItem(v-for='plank in lastThree' :plank='plank') 
    template(v-else) 
      h2 Get active!
</template>

<script lang="ts">
/*
import PlankItem from '@/components/PlankItem.vue';

export default {
  name: 'LastPlank',
  components: { PlankItem },
  props: ['planks'],
  computed: {
    lastThree() {
      if (this.planks.length < 4) return this.planks;
      return this.planks.slice(this.planks.length - 3, this.planks.length);
    },
  },
};
*/

// TYPESCRIPT
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Plank } from '@/types/index';
import PlankItem from '@/components/PlankItem.vue';

@Component({
  components: { PlankItem },
})
export default class LastPlank extends Vue {
  @Prop() private planks!: Plank[];

  get lastThree() {
    if (this.planks.length < 4) return this.planks;
    return this.planks.slice(this.planks.length - 3, this.planks.length);
  }
}
</script>

<style scoped lang="scss"></style>
