<template>
  <form :class="['form', type]">
    <slot>
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit" class="submit-button" @click="handleSubmit">Submit</button>
    </slot>
  </form>
</template>

  
<script>
export default {
  name: 'VSForm',
  props: {
    type: {
      type: String,
      default: 'primary'
    }
  },
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    handleSubmit() {
      console.log('Name:', this.name);
      console.log('Email:', this.email);
      console.log('Password:', this.password);
    }
  }
}
</script>

  
<style scoped>
.form {
  /* Custom form styles */
  margin: 20px;
  padding: 20px;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
}

/* Blue color palette */
.primary {
  background-color: #007bff;
  /* Default blue */
}

.light {
  background-color: #57abfa;
  /* Light blue */
}

.dark {
  background-color: #192e42;
  /* Dark blue */
}

.blue1 {
  background-color: #cce0ff;
  /* Lighter blue */
}

.blue2 {
  background-color: #4d88ff;
  /* Darker blue */
}

/* Override button text color */
.primary,
.light,
.dark,
.blue1,
.blue2 {
  color: #fff;
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group input[type="password"] {
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  border-radius: 4px;
  padding: 5px;
  width: 100%;
  box-sizing: border-box;
}
</style>
  