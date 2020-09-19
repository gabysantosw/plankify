<template lang="pug">
  main
    .info
      h2 You can do it
      .progress
      p {{ secondsPassed }} seconds
    section.cta
      p Press when your plank drops
      button.button(@click='endInterval') Done!
</template>

<script lang="ts">
/*
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Planking',
  data() {
    return {
      startTime: null,
      currentTime: null,
      interval: null,
    };
  },
  created() {
    this.startTime = new Date();
    this.currentTime = new Date();
    this.interval = requestAnimationFrame(this.updateTime);
  },
  methods: {
    ...mapActions(['addPlank']),
    updateTime() {
      this.currentTime = new Date();
      this.interval = requestAnimationFrame(this.updateTime);
    },
    endInterval() {
      const plank = {
        totalSeconds: this.secondsPassed,
        day: this.startTime.getDate(),
        month: this.startTime.getMonth(),
        year: this.startTime.getFullYear(),
      };

      this.addPlank(plank);
      window.cancelAnimationFrame(this.interval);
      this.interval = null;

      this.$router.push('/');
    },
  },
  computed: {
    ...mapState(['planks']),
    secondsPassed() {
      return Math.round((this.currentTime.getTime() - this.startTime.getTime()) / 1000);
    },
  },
};
*/

// TYPESCRIPT
// /*
import { Component, Vue } from 'vue-property-decorator';
import { mapActions } from 'vuex';
import { Plank } from '@/types/index.ts';

@Component({
  methods: mapActions(['addPlank']),
})
export default class Planking extends Vue {
  startTime: Date = new Date();
  currentTime: Date = new Date();
  interval = 0;

  addPlank!: (plank: Plank) => Promise<void>;

  created() {
    this.startTime = new Date();
    this.currentTime = new Date();
    this.interval = requestAnimationFrame(this.updateTime);
  }

  get secondsPassed() {
    return Math.round((this.currentTime.getTime() - this.startTime.getTime()) / 1000);
  }

  updateTime() {
    this.currentTime = new Date();
    this.interval = requestAnimationFrame(this.updateTime);
  }

  endInterval() {
    const plank = {
      totalSeconds: this.secondsPassed,
      day: this.startTime.getDate(),
      month: this.startTime.getMonth(),
      year: this.startTime.getFullYear(),
    };

    this.addPlank(plank);
    window.cancelAnimationFrame(this.interval);
    this.interval = 0;

    this.$router.push('/');
  }
}
// */
</script>
