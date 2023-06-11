# VSProgress

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
