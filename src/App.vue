<script setup></script>

<template>
  <div class="background">
    <NavBar></NavBar>
    <main><MiddlePage></MiddlePage></main>
    <ChatBar></ChatBar>
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/_variables.scss';
#app {
  width: 100vw;
  height: 100vh;
  background-color: $background-color;
  display: grid;
  place-content: center;
  .background {
    display: flex;
    width: 1000px;
    height: 85vh;
    overflow: hidden;
    background-color: $font-light;
    border-radius: 1.75rem;
    box-shadow: 0 0 1rem $shadow-gray;
  }
  main {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    gap: 2rem;
    max-height: 100%;
  }
}
</style>
