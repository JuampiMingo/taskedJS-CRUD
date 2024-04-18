<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
<div class="container">

  <nav class="navbar">
    <h1>TaskedJS</h1>
    <div class="links">
      <RouterLink class="link" to="/">Home</RouterLink>
      <RouterLink class="link" to="/create-task">Create Task</RouterLink>
    </div>
  </nav>

  <main class="container-content">
    <RouterView />
  </main>

</div>
</template>

<style scoped>

.container{

  width: 100vw;
  height: 100vh;

}


.container-content{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  justify-content: center;
}


.navbar{
  display: flex;
  justify-content: space-around;
  height: 45px;
  width: 100%;
  overflow: hidden;
  --bg-color-navbar: #0D1821;
  background-color: var(--bg-color-navbar);
  position:fixed;
  top: 0;

}

.navbar > h1{
  background-color: inherit;
  text-align: center;
  padding: 3px;
}


.links {
  background-color: inherit;
  width: 200px;
  height: 50px;
  display:flex;
  flex-direction: row;
  justify-content: center;
}

.links > .link{
  background-color: inherit;
  text-decoration: none;
  color: #fff;
  border:0;
  outline: 0px solid black;
  text-align: center;
  padding-top: 12px;
}


.link + .link{
  margin-left: 15px;
}

</style>
