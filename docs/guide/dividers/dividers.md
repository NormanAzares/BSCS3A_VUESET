# VSDividers

The Dividers component in Vue.js is a customizable horizontal divider that renders a div element. It offers options to customize the color, height, and margin of the divider through props. The component dynamically computes the styles based on the prop values and applies them to the div element. With its flexibility and ease of use, the VSDividers component allows for the seamless integration of customizable dividers in Vue.js applications.

## Props

| Prop   | Description                                      | Type   | Accepted Values                     | Default    |  
| :----- | :----------------------------------------------- | :----- | :---------------------------------- |:---------- | 
| color  | The color of the divider                         | String | `light`, `dark`, `blue1` or `blue2` |`'primary'` |          
| height | The height of the divider in pixels              | Number | `number`                            | `1`        |                 
| margin | The margin around the divider in CSS shorthand   | String |  `'string'+px`                      | `'10px 0'` |                 
| style  | Additional styles to apply to the divider element| Object |  `{}`                               | `{}`       |                 

## Example

```vue
 Default
<VSDividers color="primary"/>
 Light with custom height and margin
<VSDividers color="light" height="1" margin="10px 0" />
 Dark with custom height and margin
<VSDividers color="dark" height="3" margin="30px 0" />
 Blue with custom height and margin
<VSDividers color="blue1" height="2" margin="20px 0" />
 Another blue with custom height and margin
<VSDividers color="blue2" height="2" margin="20px 0" />
```
<DividersExample />
<script setup>
import DividersExample from './DividersExample.vue'
</script>