<script setup>
function getImageUrl(name) {
  return new URL(`/src/assets/images/${name}.png`, import.meta.url).href;
}
const loops = reactive({
  photos: ['photo0', 'photo1', 'photo2', 'photo3', 'photo4', 'photo5'],
  isOn: [
    Math.floor(Math.random() * 6),
    Math.floor(Math.random() * 6),
    Math.floor(Math.random() * 6),
  ],
  chat: [
    { img: 'photo0', content: 'A cute puppy ✨', time: '08:00' },
    {
      img: 'photo1',
      content: 'A penguin with flower',
      time: '08:12',
    },
    {
      img: 'photo2',
      content: 'Why introducing?',
      time: '08:16',
    },
    { img: 'photo3', content: 'hungry!!! ✌️', time: '08:30' },
    { img: 'photo4', content: 'Nice 2 meet you 🔥', time: '09:20' },
    { img: 'photo5', content: 'leave me alone', time: '10:10' },
  ],
});

const chatRoom = ref(null);
const toTalk = ref('');
const sendTalk = () => {
  if (toTalk.value) {
    let now = new Date();
    let hr = now.getHours();
    hr = hr < 10 ? '0' + hr : hr;
    let min = now.getMinutes();
    min = min < 10 ? '0' + min : min;

    loops.chat.push({
      img: 'photo1',
      content: toTalk.value,
      time: `${hr}:${min}`,
    });
    toTalk.value = '';
    console.log(chatRoom.value.scrollHeight);
    nextTick(() => {
      chatRoom.value.scrollTop = chatRoom.value.scrollHeight;
    });
  }
};
</script>

<template>
  <nav>
    <div class="title">
      <h3>Member <span>(25)</span></h3>
      <p>View All</p>
    </div>
    <div class="photos">
      <div
        :class="loops.isOn.includes(index) ? 'online' : 'offline'"
        v-for="(p, index) in loops.photos"
        :key="p"
      >
        <img :src="getImageUrl(p)" />
      </div>
    </div>
    <h3>Group Chat</h3>
    <div class="chat-room" ref="chatRoom">
      <div
        class="chat-line"
        :class="c.img === 'photo1' ? 'reverse' : ''"
        v-for="c in loops.chat"
        :key="c.img"
      >
        <img :src="getImageUrl(c.img)" />
        <p :class="c.img === 'photo1' ? 'self' : 'people'">{{ c.content }}</p>
        <!--        <div class="space"></div>-->
        <span>{{ c.time }}</span>
      </div>
    </div>
    <div class="chat-item">
      <input
        type="text"
        placeholder="Write here..."
        v-model="toTalk"
        @keyup.enter="sendTalk"
      />
      <font-awesome-icon :icon="['fas', 'microphone']" />
      <font-awesome-icon :icon="['fas', 'ellipsis']" />
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
nav {
  display: flex;
  flex-direction: column;
  border-top-right-radius: 1.75rem;
  border-bottom-right-radius: 1.75rem;
  border-left: 0.1rem solid $light-gray;
  gap: 1rem;
  padding: 2rem 1.25rem;
  min-width: 16.5rem;
  height: 100%;
  .title {
    width: 100%;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    h3 span {
      color: $theme-blue;
      font-weight: 600;
    }
    p {
      color: $font-gray;
    }
  }

  .photos {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;
    .offline,
    .online {
      position: relative;
      &::after {
        position: absolute;
        content: '';
        right: 0;
        bottom: 0;
        transform: translate(25%, -25%);
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 5rem;
        border: 0.1rem solid $font-light;
        background-color: $theme-red;
      }
      img {
        width: 1.8rem;
        height: 1.8rem;
        object-fit: cover;
        border-radius: 5rem;
      }
    }
    .online::after {
      background-color: $theme-green;
    }
  }

  .chat-room {
    flex: 1 1 auto;
    overflow-x: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .reverse {
      flex-direction: row-reverse;
    }
    .chat-line {
      display: flex;
      flex-wrap: wrap;
      align-items: end;
      gap: 0.25rem;
      img {
        width: 1.5rem;
        height: 1.5rem;
        object-fit: cover;
        border-radius: 5rem;
      }
      .people {
        word-wrap: break-word;
        max-width: 65%;
        background-color: $light-gray;
        color: $font-dark;
        padding: 0.5rem 1rem;
        border-radius: 0.3rem 0.3rem 0.3rem 0;
      }
      .self {
        word-wrap: break-word;
        max-width: 65%;
        background-color: $theme-blue;
        color: $font-light;
        padding: 0.5rem 1rem;
        border-radius: 0.3rem 0.3rem 0 0.3rem;
      }
      .space {
        width: 100%;
      }
      span {
        //margin: 0 1.75rem;
        font-size: 0.75rem;
        color: $font-gray;
        font-weight: 400;
      }
    }
  }

  .chat-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    input {
      flex: 1 1 auto;
      border: none;
      background-color: $light-gray;
      padding: 0.5rem 0.75rem;
      border-radius: 0.5rem;
      color: $font-dark;
      &::placeholder {
        color: $font-gray;
      }
    }
    svg {
      color: $theme-line;
      transition: 0.2s all ease-in-out;
      cursor: pointer;
      &:hover {
        color: $theme-blue;
      }
    }
  }
}
</style>
