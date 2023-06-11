# VSProgress
This component is a progress bar that visually represents the completion or progress of a task. It is implemented as a Vue.js component and dynamically updates its appearance based on the provided value and max props, indicating the current progress as a percentage. The progress bar is customizable and accessible, allowing developers to adjust its width and style according to their needs.

## Props

| Prop    | Description                        | Accepted Values | Default |
| :------ | :--------------------------------- | :-------------- | :------ |
| `value` | Current value                      | -               | 0       |
| `max`   | Maximum value for the progress bar | -               | 100     |

Progress

```vue
<VSProgress value="50" max="100" />
```

<ProgressExample />

<script setup>
import ProgressExample from './ProgressExample.vue'
</script>
