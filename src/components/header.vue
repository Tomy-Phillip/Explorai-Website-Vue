<template>
  <div class="header-header77452" v-bind:class="rootClassName">
    <div class="header-container">
      <span class="header-text">{{ text }}</span>
      <span class="header-text1">{{ text1 }}</span>
      <span class="header-text2">{{ text2 }}</span>
      <span class="header-text3">{{ text3 }}</span>
      <span class="header-text4">
        <span class="header-text5">explor</span>
        <span class="header-text6">.ai</span>
      </span>
    </div>
    <primary-button
      rootClassName="primary-button-root-class-name"
    ></primary-button>
  </div>
</template>

<script>
import PrimaryButton from './primary-button'

export default {
  name: 'Header',
  props: {
    text1: {
      type: String,
      default: 'Team',
    },
    text3: {
      type: String,
      default: 'Pricing',
    },
    text: {
      type: String,
      default: 'Services',
    },
    text2: {
      type: String,
      default: 'Projects',
    },
    rootClassName: String,
  },
  components: {
    PrimaryButton,
  },
}
</script>

<style scoped>
.header-header77452 {
  width: 100%;
  height: 46px;
  display: flex;
  position: relative;
  box-sizing: border-box;
  align-items: center;
  border-color: transparent;
  justify-content: flex-end;
}
.header-container {
  top: 0px;
  left: 0px;
  right: 0px;
  width: 727px;
  bottom: 0px;
  height: 36px;
  margin: auto;
  display: flex;
  position: absolute;
  align-items: flex-start;
}
.header-text {
  top: 8px;
  left: 0px;
  color: var(--dl-color-default-primarycolor5924d);
  height: auto;
  position: absolute;
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  transition: 0.3s;
  font-family: Actor;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.header-text:hover {
  color: var(--dl-color-default-primarygreenf7f95);
}
.header-text1 {
  top: 8px;
  left: 145px;
  color: var(--dl-color-default-primarycolor5924d);
  height: auto;
  position: absolute;
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  transition: 0.3s;
  font-family: Actor;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.header-text1:hover {
  color: var(--dl-color-default-primarygreenf7f95);
}
.header-text2 {
  top: 8px;
  color: var(--dl-color-default-primarycolor5924d);
  right: 145px;
  height: auto;
  position: absolute;
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  transition: 0.3s;
  font-family: Actor;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.header-text2:hover {
  color: var(--dl-color-default-primarygreenf7f95);
}
.header-text3 {
  top: 8px;
  color: var(--dl-color-default-primarycolor5924d);
  right: 0px;
  height: auto;
  position: absolute;
  font-size: 16px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  transition: 0.3s;
  font-family: Actor;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.header-text3:hover {
  color: var(--dl-color-default-primarygreenf7f95);
}
.header-text4 {
  top: 0px;
  left: 0px;
  color: rgba(157, 157, 157, 1);
  right: 0px;
  width: 190px;
  height: auto;
  margin: auto;
  position: absolute;
  font-size: 32px;
  align-self: auto;
  font-style: normal;
  text-align: center;
  font-family: Nico Moji;
  font-weight: 400px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.header-text5 {
  color: rgba(157, 157, 157, 1);
  width: 190px;
  height: auto;
  align-self: auto;
  font-style: normal;
  text-align: center;
  font-weight: 400px;
  font-stretch: normal;
  text-decoration: none;
}
.header-text6 {
  color: rgba(166, 255, 19, 1);
  width: 190px;
  height: auto;
  align-self: auto;
  font-style: normal;
  text-align: center;
  font-weight: 400px;
  font-stretch: normal;
  text-decoration: none;
}
.header-root-class-name {
  top: 19px;
  left: 0px;
  right: 0px;
  margin: auto;
  position: absolute;
}
.header-root-class-name1 {
  top: 19px;
  left: 0px;
  right: 0px;
  margin: auto;
  position: absolute;
}
</style>
