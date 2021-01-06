<template>
  <div id="app">
    <div id="nav">
      <router-link to="/child-app/index">子应用index</router-link> |
      <router-link to="/child-app/about">子应用about</router-link>
    </div>
    <router-view/>
    <div id="childApp"></div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  margin-top: 100px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#childApp {
  width: 100%;
  height: 500px;
}
</style>
