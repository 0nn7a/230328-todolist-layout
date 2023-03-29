<script setup>
const cardData1 = reactive({
  list: [
    {
      emoji: '✌️',
      content: '[Memoji] - Use Emoji And Try To Write Note',
      date: 'Mar 26',
      status: 'danger',
      user: ['photo1', 'photo2', 'photo3'],
    },
    {
      emoji: '🍜',
      content: '[0nn] - Eat Some Nice',
      date: 'Mar 30',
      status: 'safe',
      user: ['photo2'],
    },
    {
      emoji: '🎮',
      content: '[Game] - Woo!! Go Home And Play the Game, Enjoy Weekend!',
      date: 'Apr 1',
      status: 'safe',
      user: ['photo2', 'photo3'],
    },
  ],
});
const cardData2 = reactive({
  list: [
    {
      emoji: '🎂',
      content: '[Mai] - Happy Birthday!!!',
      date: 'Apr 28',
      status: 'normal',
      user: ['photo0'],
    },
    {
      emoji: '💤',
      content: '[Sleep] - Take A Rest',
      date: 'Mar 29',
      status: 'safe',
      user: ['photo4', 'photo5'],
    },
  ],
});
const cardData3 = reactive({
  list: [
    {
      emoji: '🎉',
      content: '[Hio] - Perfect Dinner Together',
      date: 'Apr 28',
      status: 'cancel',
      user: ['photo3', 'photo4'],
    },
    {
      emoji: '💻',
      content: '[Code] - Debug',
      date: 'Mar 29',
      status: 'danger',
      user: ['photo4', 'photo5'],
    },
  ],
});
</script>

<template>
  <header>
    <div class="group">
      <h1>✔️ Daily Task</h1>
      <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
      <font-awesome-icon :icon="['far', 'bell']" />
      <span class="bell"></span>
      <img src="/src/assets/images/photo1.png" />
    </div>
    <p>
      Click <button>+ New</button> To create new list and wait for project
      manager card.
    </p>
    <p>Don't Create a card by yourself to manage a good collaboration.</p>
  </header>

  <div class="main">
    <MasonryLayout title="Next Up" :cardData="cardData1"></MasonryLayout>
    <MasonryLayout title="In Progress" :cardData="cardData2"></MasonryLayout>
    <MasonryLayout title="Complete" :cardData="cardData3"></MasonryLayout>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
header {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  .group {
    display: flex;
    align-items: center;
    margin-bottom: 0.35rem;
    h1 {
      color: $font-dark;
      margin-right: auto;
    }
    svg {
      background-color: $light-gray;
      color: $icon-middle-gray;
      font-size: 0.8rem;
      padding: 0.5rem;
      border-radius: 5rem;
      margin-right: 0.5rem;
      transition: 0.2s all ease-in-out;
      cursor: pointer;
      &:hover {
        background-color: $theme-line;
        color: $font-light;
      }
    }
    .bell {
      position: relative;
      height: 1.8rem;
      width: 0;
      &::after {
        position: absolute;
        content: '';
        top: 0;
        right: 0.4rem;
        width: 0.4rem;
        height: 0.4rem;
        border: 0.15rem solid $font-light;
        border-radius: 5rem;
        background-color: $theme-red;
      }
    }
    img {
      width: 1.8rem;
      height: 1.8rem;
      object-fit: cover;
      border-radius: 5rem;
    }
  }

  p {
    color: $font-gray;
    transform: scale(90%) translate(-5%);
    button {
      font-size: 0.8rem;
      border: none;
      background-color: $theme-transparent-blue;
      color: $theme-blue;
      padding: 0.1rem 0.25rem;
      border-radius: 0.2rem;
    }
  }
}

.main {
  flex: 1 1 auto;
  display: flex;
  gap: 1rem;
}
</style>
