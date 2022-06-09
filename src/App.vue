<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  padding: 0;
  margin: 0;
}

.logo {
  width: 300px;
  margin-bottom: 0px;
}

h1 {
  color: indigo;
  margin-bottom: 50px;
}

.register input,
.login input {
  width: 30%;
  height: 50px;
  padding-left: 20px;
  display: block;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid indigo;
  border-radius: 5px;
}

#register-button,
#login-button {
  width: 15%;
  padding: 20px;
  margin-top: 50px;
  background-color: lightskyblue;
  border: 1px solid indigo;
  border-radius: 5px;
  color: indigo;
  cursor: pointer;
}
</style>