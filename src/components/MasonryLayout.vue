<script setup>
function getImageUrl(name) {
  return new URL(`/src/assets/images/${name}.png`, import.meta.url).href;
}

const props = defineProps(['title', 'cardData']);
const cardNum = computed({
  get() {
    return props.cardData.list.length;
  },
});
onMounted(() => {});

// const cardData = reactive({
//   list: [
//     {
//       emoji: '✌️',
//       content: '',
//       date: '',
//       status: 1,
//       user: ['photo1', 'photo2', 'photo3'],
//     },
//   ],
// });
</script>

<template>
  <section>
    <header>
      <h5>{{ props.title }}</h5>
      <span>{{ cardNum }}</span>
    </header>

    <article>
      <div class="card" v-for="(c, index) in props.cardData.list" :key="index">
        <div class="card-header">
          <span>{{ c.emoji }}</span>
          <font-awesome-icon :icon="['fas', 'ellipsis']" size="xs" />
        </div>
        <p class="card-content">{{ c.content }}</p>
        <div class="card-footer">
          <span :class="c.status">
            <font-awesome-icon :icon="['far', 'clock']" size="xs" />
            {{ c.date }}
          </span>
          <div class="users">
            <img v-for="u in c.user" :src="getImageUrl(u)" />
          </div>
        </div>
      </div>
    </article>
    <footer>
      <font-awesome-icon :icon="['fas', 'plus']" size="xs" />
    </footer>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
section {
  flex: 1 1;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  gap: 1rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: $theme-title;
    border-radius: 0.2rem;
    padding: 0.35rem 0.5rem;
    span {
      display: block;
      font-size: 0.75rem;
      transform: scale(85%);
      background-color: $font-dark;
      color: $font-light;
      padding: 0.1rem 0.35rem;
      border-radius: 0.15rem;
    }
  }

  article {
    flex: 1 0 auto;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    height: 5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .card {
      width: 100%;
      border-radius: 0.35rem;
      background-color: $font-light;
      border: 0.1rem solid $light-gray;
      padding: 0.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          display: block;
          width: 1.5rem;
          height: 1.5rem;
          font-size: 0.75rem;
          line-height: 1.5rem;
          transform: scale(90%);
          background-color: $light-gray;
          border-radius: 5rem;
          text-align: center;
        }
        svg {
          color: $font-gray;
        }
      }
      .card-content {
        font-weight: 300;
        line-height: 1.2rem;
      }
      .card-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.75rem;
        margin-top: 0.5rem;
        span {
          height: 1.1rem;
          line-height: 1.1rem;
          padding: 0 0.25rem;
          border-radius: 0.2rem;
          color: $font-light;
        }
        .normal {
          background-color: $theme-orange;
        }
        .danger {
          background-color: $theme-red;
        }
        .safe {
          background-color: $theme-green;
        }
        .cancel {
          background-color: $theme-line;
        }

        .users {
          display: flex;
          img {
            margin-left: -0.5rem;
            width: 1.5rem;
            height: 1.5rem;
            object-fit: cover;
            border-radius: 5rem;
            border: 0.15rem solid $font-light;
          }
        }
      }
    }
  }

  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    border: 0.1rem dashed $theme-line;
    border-radius: 0.35rem;
    color: $theme-line;
    transition: 0.2s all ease-in-out;
    cursor: pointer;
    &:hover {
      color: $icon-gray;
      border: 0.1rem dashed $icon-gray;
    }
  }
}
</style>
