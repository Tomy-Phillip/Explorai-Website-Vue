<template>
  <div class="primary-button-container" v-bind:class="rootClassName">
    <button class="primary-button-primary-button-i7745277506">
      <div class="primary-button-b-t-n-makeanappointment-i774527750677440">
        <span class="primary-button-text">{{ text }}</span>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'PrimaryButton',
  props: {
    text: {
      type: String,
      default: 'Contact Us',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.primary-button-container {
  width: 100%;
  height: 40px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.primary-button-primary-button-i7745277506 {
  top: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  height: 38px;
  margin: auto;
  display: flex;
  position: absolute;
  box-sizing: border-box;
  align-items: flex-start;
  border-color: transparent;
  background-color: rgba(217, 217, 217, 0);
}
.primary-button-b-t-n-makeanappointment-i774527750677440 {
  top: 0.8636363744735718px;
  left: 1px;
  width: 100%;
  height: 36.272727966308594px;
  display: flex;
  position: absolute;
  box-sizing: border-box;
  transition: 0.3s;
  align-items: flex-start;
  border-color: var(--dl-color-default-primarygreenf7f95);
  border-style: solid;
  border-width: 1.5px;
  border-radius: 5px;
}
.primary-button-b-t-n-makeanappointment-i774527750677440:hover {
  border-color: var(--dl-color-default-bluesky56ea5);
  background-color: var(--dl-color-default-primarygreenf7f95);
}
.primary-button-text {
  color: var(--dl-color-default-primarygreenf7f95);
  width: 100%;
  font-size: 20px;
  align-self: center;
  font-style: normal;
  text-align: center;
  transition: 0.3s;
  font-family: Bebas Kai;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.primary-button-text:hover {
  color: var(--dl-color-default-bluesky56ea5);
}
.primary-button-root-class-name {
  top: 0px;
  right: var(--dl-space-space-twounits);
  width: var(--dl-size-size-large);
  bottom: 0px;
  margin: auto;
  position: absolute;
}
.primary-button-root-class-name1 {
  left: 454px;
  width: var(--dl-size-size-xxlarge);
  bottom: 20px;
  margin: auto;
  position: absolute;
  align-self: flex-end;
}
.primary-button-root-class-name2 {
  top: 0px;
  right: var(--dl-space-space-fourunits);
  width: var(--dl-size-size-large);
  bottom: 0px;
  margin: auto;
  position: absolute;
}
.primary-button-root-class-name3 {
  left: 454px;
  width: var(--dl-size-size-xxlarge);
  bottom: 20px;
  margin: auto;
  position: absolute;
  align-self: flex-end;
}
</style>
