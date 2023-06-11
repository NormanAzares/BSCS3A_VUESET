<template>
  <VSButton label="Primary"></VSButton>
  <VSProgress :value="progress" max="1" />
  <div style="margin-bottom: 16px">
    <p>Default</p>
    <VSInput />
  </div>
  <div style="margin-bottom: 16px">
    <p>Example with label - {{ labelText }}</p>
    <VSInput label="Example text" v-model="labelText" />
  </div>
  <div style="margin-bottom: 16px">
    <p>Example with placeholder - {{ placeholderLabelText }}</p>
    <VSInput placeholder="Write something here" v-model="placeholderLabelText" />
  </div>
  <div style="margin-bottom: 16px">
    <p>Example without label - {{ noLabelText }}</p>
    <VSInput v-model="noLabelText" />
  </div>
  <div style="margin-bottom: 16px">
    <p>Example with required - {{ requiredText }}</p>
    <VSInput label="I am required" v-model="requiredText" required />
  </div>
  <div style="margin-bottom: 16px">
    <p>Disabled</p>
    <VSInput label="Oh :(" disabled />
  </div>
  <div style="margin-bottom: 16px">
    <p>Disabled with a label</p>
    <VSInput label="Oh :(" modelValue="Hello" disabled />
  </div>
  <VSDividers color="light" margin="20px"></VSDividers>
  <VSRadioBox></VSRadioBox>
  


  <VSForm type="primary">
    <h2>Sign Up</h2>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" placeholder="Enter your name" />
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" placeholder="Enter your email" />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" id="password" placeholder="Enter your password" />
    </div>
    <button type="submit">Submit</button>
    
  </VSForm>



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


