<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway:400,700');

html {
  height: 100%;
}

body {
  min-height: 100%;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Raleway, sans-serif;
}

body {
  background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 50%);
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.screen {
  background: linear-gradient(90deg, #6500B0, #AC3BFF);
  position: relative;
  height: 600px;
  width: 30%;
  box-shadow: 0px 0px 24px #4B0082;
}

.screen__content {
  z-index: 1;
  position: relative;
  height: 100%;
}

.screen__background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  -webkit-clip-path: inset(0 0 0 0);
  clip-path: inset(0 0 0 0);
}

.screen__background__shape {
  transform: rotate(45deg);
  position: absolute;
}

.screen__background__shape1 {
  height: 520px;
  width: 520px;
  background: rgba(255, 255, 255, .4);
  top: -50px;
  right: 120px;
  border-radius: 0 72px 0 0;
}

.screen__background__shape2 {
  height: 220px;
  width: 220px;
  background: #8000DE;
  top: -172px;
  right: 0;
  border-radius: 32px;
}

.screen__background__shape3 {
  height: 540px;
  width: 190px;
  background: linear-gradient(270deg, #6500B0, #980DFF);
  top: -24px;
  right: 0;
  border-radius: 32px;
}

.screen__background__shape4 {
  height: 400px;
  width: 200px;
  background: #980DFF;
  top: 420px;
  right: 50px;
  border-radius: 60px;
  box-shadow: 0px 0px 24px #4B0082;
}

.login {
  width: 320px;
  padding: 30px;
  padding-top: 156px;
}

.override {
  padding-top: 90px;
}

.login__field {
  padding: 20px 0px;
  position: relative;
}

.login__icon {
  position: absolute;
  top: 30px;
  color: #fff;
}

.login__input {
  border: none;
  border-bottom: 2px solid #D1D1D4;
  background: none;
  padding: 10px;
  padding-left: 24px;
  font-weight: 700;
  width: 75%;
  transition: .2s;
  color: #fff;
}

.login__input::placeholder {
  color: rgba(255, 255, 255, .7);
}

.login__input:active,
.login__input:focus,
.login__input:hover {
  outline: none;
  border-bottom-color: #fff;
  box-shadow: rgba(213, 217, 217, .5) 0 10px 5px -5px;
}

.login__submit {
  background: rgba(255, 255, 255, .5);
  font-size: 14px;
  margin-top: 30px;
  padding: 16px 20px;
  border-radius: 26px;
  border: 1px solid #D4D3E8;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  align-items: center;
  width: 90%;
  color: #4C489D;
  box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
  cursor: pointer;
  transition: .3s;
}

.login__submit:active,
.login__submit:focus,
.login__submit:hover {
  width: 100%;
  border-color: #6A679E;
  box-shadow: rgba(213, 217, 217, .5) 0 5px 10px 0;
  outline: none;
}

.button__icon {
  font-size: 24px;
  margin-left: auto;
  color: #fff;
}

.social-login {
  position: absolute;
  height: 140px;
  width: 120px;
  text-align: center;
  bottom: 0px;
  right: 20px;
}

#alt-option {
  color: #fff;
  text-decoration: none;
}

.logo {
  width: 150px;
  position: absolute;
  z-index: 100;
  top: 32%;
  right: 40%
}

.add {
  margin-top: 150px;
}

.add input {
  width: 30%;
  height: 50px;
  padding-left: 20px;
  display: block;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(255, 255, 255, .1);
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
  box-sizing: border-box;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  transition: ease all .2s;
}

.add input::placeholder {
  color: rgba(255, 255, 255, .7);
}

.add input:focus,
.add input:hover {
  font-size: 20px;
  background-color: rgba(255, 255, 255, .3);
  resize: none;
  outline: none;
}

#add-button {
  margin-top: 50px;
  background-color: rgba(255, 255, 255, .1);
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 20px;
  line-height: 30px;
  padding: 20px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  transition: ease all .3s;
}

#add-button:hover,
#add-button:focus {
  background-color: rgba(255, 255, 255, .3);
  box-shadow: rgba(213, 217, 217, .5) 0 10px 10px 0;
  outline: 0;
}

.action-btn {
  margin-right: 10px;
  background-color: rgba(255, 255, 255, .1);
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  line-height: 30px;
  padding: 10px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  transition: ease all .3s;
}

.action-btn:hover,
.action-btn:focus {
  background-color: rgba(255, 255, 255, .3);
  box-shadow: rgba(213, 217, 217, .5) 0 0px 10px 0;
  outline: 0;
}
</style>