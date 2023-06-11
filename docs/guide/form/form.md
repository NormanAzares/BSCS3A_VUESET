# VSForm

 The Form component is a customizable form wrapper in Vue.js. It renders a form element with a dynamic class based on the type prop, allowing for different background colors and styles. The component offers five predefined color variations, creating a blue color palette, and sets the text color to white for all variations.

## Props

| Prop  | Description                               | Type   | Default     |              Accepted Values                |
| :---- | :---------------------------------------- | :----- | :---------- | :------------------------------------------ | 
| type  | The type of the form (CSS class)          | String | `'primary'` | `'light'`, `'dark'`, `'blue1'` or `'blue2'` |

## Example

```vue
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
```

<FormExample />

<script setup>
import FormExample from './FormExample.vue'
</script>