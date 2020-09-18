<template lang="pug">
  main.last-planks
    h2 Progress
    ul 
      PlankItem(v-for='plank in planks' :plank='plank') 
</template>

<script lang="ts">
/*
import { mapState } from 'vuex';
import PlankItem from '@/components/PlankItem.vue';

export default {
  name: 'Progress',
  components: { PlankItem },
  computed: {
    ...mapState(['planks']),
  },
};
*/

// TYPESCRIPT
// /*
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';
import PlankItem from '@/components/PlankItem.vue';

@Component({
  components: {
    PlankItem,
  },
  computed: {
    ...mapState(['planks']),
  },
})
export default class Progress extends Vue {}
// */
</script>
