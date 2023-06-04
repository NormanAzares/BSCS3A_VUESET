<template>
  <div style="margin-bottom: 16px">
    <VSButton label="Default" />
  </div>
  <div style="margin-bottom: 16px">
    <VSButton label="Outlined" type="outlined" />
  </div>
  <VSSelect type="light" isOutline>
    <option value="item1">Item 1</option>
    <option value="item2">Item 2</option>
    <option value="item3">Item 3</option>
  </VSSelect>
  <div>
    <VSRadioBox label="Option 1" name="option" value="option1"></VSRadioBox>
    <VSRadioBox label="Option 2" name="option" value="option2"></VSRadioBox>
    <VSRadioBox label="Option 3" name="option" value="option3"></VSRadioBox>
  </div>

  <!-- <VSSwitch v-model="value"></VSSwitch> -->
</template>

<script>

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
