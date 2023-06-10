<template>
  <VSButton label="Primary"></VSButton>
  <VSProgress :value="progress" max="1" />
  <VSButton label="Secondary"></VSButton>
</template>


<script>
import { VSProgress } from '../src/components/index'

let randomProgressGenerator

export default {
  name: 'ProgressExample',
  components: {
    VSProgress,
  },
  data() {
    return {
      progress: 0.03,
    }
  },
  mounted() {
    randomProgressGenerator = setInterval(() => {
      this.progress = Math.random()
    }, 1500)
  },
  beforeUnmount() {
    clearInterval(randomProgressGenerator)
  },
}
</script>


<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>


