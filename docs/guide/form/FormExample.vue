<template>
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

    <VSForm type="light">
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

    <VSForm type="dark">
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
import { VSForm } from '../../../src/components/index'

export default {
    name: 'FormExample',
    components: {
        VSForm,
    },
}
</script>