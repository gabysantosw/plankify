<template lang="pug">
  li.plank 
    span.date {{ plank.day }}/{{ plank.month + 1 }}/{{ plank.year }}
    span.time {{ plank.totalSeconds }}s
</template>

<script lang="ts">
/*
export default {
  name: 'PlankItem',
  props: ['plank'],
};
*/

// TYPESCRIPT
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Plank } from '@/types/index.ts';

@Component({})
export default class PlankItem extends Vue {
  @Prop() plank!: Plank;
}
</script>
