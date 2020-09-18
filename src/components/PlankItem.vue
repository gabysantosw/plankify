<template lang="pug">
  li.plank 
    span.date {{ plank.day }}/{{ plank.month + 1 }}/{{ plank.year }}
    span.time {{ plank.totalSeconds }}s
</template>

<script lang="ts">
export default {
  name: 'PlankItem',
  props: ['plank'],
};
</script>
