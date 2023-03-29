<script setup>
const loops = reactive({
  iconList: [
    { icon: ['fas', 'chart-column'], title: 'Dashboard' },
    { icon: ['fas', 'gear'], title: 'Settings' },
    { icon: ['fas', 'chart-line'], title: 'All Activity' },
  ],
  toggleList: [
    '✔️ Daily Task',
    '🤝 Meeting Summary',
    '📝 Resources',
    '📅 Availability',
    '🗂️ All Projects',
    '📤 Archive',
    '🧠 Brainstorming',
  ],
});
const toggleNowIndex = ref(0);
const toggleActive = index => {
  toggleNowIndex.value = index;
};

onMounted(() => {});
</script>

<template>
  <nav>
    <div class="btn-list">
      <img src="/src/assets/images/avatar.png" />
      <h4>0nn Studio</h4>
      <font-awesome-icon :icon="['fas', 'pen']" size="xs" />
    </div>

    <div class="lists">
      <div class="icon-list" v-for="i in loops.iconList" :key="i.title">
        <font-awesome-icon :icon="i.icon" />
        <h5>{{ i.title }}</h5>
      </div>
    </div>

    <div class="toggles">
      <div
        class="toggle-list"
        :class="toggleNowIndex === index ? 'toggle-active' : ''"
        v-for="(t, index) in loops.toggleList"
        :key="t"
        @click="toggleActive(index)"
      >
        <font-awesome-icon :icon="['fas', 'caret-right']" size="sm" />
        <h5>{{ t }}</h5>
      </div>
    </div>

    <button><font-awesome-icon :icon="['fas', 'plus']" />New Project</button>
  </nav>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
nav {
  display: flex;
  flex-direction: column;
  border-top-left-radius: 1.75rem;
  border-bottom-left-radius: 1.75rem;
  gap: 1rem;
  padding: 2rem 1.25rem;
  min-width: 13rem;
  height: 100%;
  background-color: $light-gray;

  .btn-list {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.7rem;
    width: 100%;
    background-color: $font-light;
    border-radius: 0.5rem;
    box-shadow: 0 0 2rem $shadow-gray;
    transition: 0.3s all ease-in-out;
    &:hover {
      transform: scale(103%);
    }
    img {
      width: 1.75rem;
      height: 1.75rem;
      object-fit: cover;
      border-radius: 5rem;
    }
    svg {
      margin-left: auto;
      color: $icon-gray;
    }
  }

  .lists {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-left: 0.7rem;
    .icon-list {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: $icon-gray;
      transition: 0.2s all ease-in-out;
      cursor: pointer;
      &:hover {
        color: $icon-middle-gray;
      }
      svg {
        padding: 0.375rem;
      }
    }
  }
  .toggles {
    flex: 1 1 auto;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    .toggle-list {
      display: flex;
      align-items: center;
      gap: 0.2rem;
      padding: 0.3rem 0.5rem;
      width: 100%;
      border-radius: 0.5rem;
      transition: 0.2s all ease-in-out;
      cursor: pointer;
      &:hover {
        color: $font-gray;
      }
      svg {
        padding: 0.375rem;
        color: $icon-middle-gray;
      }
    }
    .toggle-active {
      background-color: $font-light;
    }
  }

  button {
    position: relative;
    //margin-top: auto;
    width: 100%;
    padding: 0.75rem 0.5rem;
    background-color: $theme-blue;
    color: $font-light;
    font-weight: 600;
    border: none;
    border-radius: 0.3rem;
    transition: 0.2s all ease-in-out;
    cursor: pointer;
    &:hover,
    &:active {
      background-color: $theme-light-blue;
    }
    svg {
      position: absolute;
      top: 50%;
      left: 0.75rem;
      transform: translateY(-50%);
    }
  }
}
</style>
