<template>
  <div :class="['animate', texteffect]">
    <span v-for="(item,ind) in text" :key="ind" >{{item}}</span>
  </div>
</template>

<script>
export default {
    name: 'sui-text',
    props: {
        text: String,
        texteffect: {
            type: String,
            default: 'one'
        }
    }
};
</script>

<style lang="scss" scoped>
.animate {
  font-size: 50px;
  margin: 100px 0 0;
  border-bottom: 2px solid #ccc;
}

.animate span {
  display: inline-block;
}

.animate span:nth-of-type(2) {
  animation-delay: 0.05s;
}

.animate span:nth-of-type(3) {
  animation-delay: 0.1s;
}

.animate span:nth-of-type(4) {
  animation-delay: 0.15s;
}

.animate span:nth-of-type(5) {
  animation-delay: 0.2s;
}

.animate span:nth-of-type(6) {
  animation-delay: 0.25s;
}

.animate span:nth-of-type(7) {
  animation-delay: 0.3s;
}

.animate span:nth-of-type(8) {
  animation-delay: 0.35s;
}

.animate span:nth-of-type(9) {
  animation-delay: 0.4s;
}

.animate span:nth-of-type(10) {
  animation-delay: 0.45s;
}

.animate span:nth-of-type(11) {
  animation-delay: 0.5s;
}

.animate span:nth-of-type(12) {
  animation-delay: 0.55s;
}

.animate span:nth-of-type(13) {
  animation-delay: 0.6s;
}

.animate span:nth-of-type(14) {
  animation-delay: 0.65s;
}

/* Animation One */

.one span {
  color: #24a8e6;
  opacity: 0;
  transform: translate(-150px, -50px) rotate(-180deg) scale(3);
  animation: revolveScale 0.4s forwards;
}

@keyframes revolveScale {
  60% {
    transform: translate(20px, 20px) rotate(30deg) scale(0.3);
  }
  100% {
    transform: translate(0) rotate(0) scale(1);
    opacity: 1;
  }
}

/* Animation Two */

.two span {
  color: #a5cb21;
  animation: ballDrop 0.3s forwards;
  opacity: 0;
}

@keyframes ballDrop {
  0% {
    transform: translate(200px, -100px) scale(2);
  }
  60% {
    transform: translate(0, 20px) rotate(-180deg) scale(0.5);
  }
  100% {
    transform: translate(0) rotate(0deg) scale(1);
    opacity: 1;
  }
}

/* Animation Three */

.three span {
  color: #b10e81;
  opacity: 0;
  transform: translate(-300px, 0) scale(0);
  animation: sideSlide 0.5s forwards;
}

@keyframes sideSlide {
  60% {
    transform: translate(20px, 0) scale(1);
    color: #b10e81;
  }
  80% {
    transform: translate(20px, 0) scale(1);
    color: #b10e81;
  }
  99% {
    transform: translate(0) scale(1.2);
    color: #00f0ff;
  }
  100% {
    transform: translate(0) scale(1);
    opacity: 1;
    color: #b10e81;
  }
}

/* Animation Four */

.four span {
  color: #8d6a00;
  opacity: 0;
  transform: translate(0, -100px) rotate(360deg) scale(0);
  animation: revolveDrop 0.3s forwards;
}

@keyframes revolveDrop {
  30% {
    transform: translate(0, -50px) rotate(180deg) scale(1);
  }
  60% {
    transform: translate(0, 20px) scale(0.8) rotate(0deg);
  }
  100% {
    transform: translate(0) scale(1) rotate(0deg);
    opacity: 1;
  }
}

/* Animation Five */

.five span {
  color: #dd3f0f;
  opacity: 0;
  transform: translate(0, -100px) rotate(360deg) scale(0);
  animation: dropVanish 0.5s forwards;
}

@keyframes dropVanish {
  30% {
    transform: translate(0, -50px) rotate(180deg) scale(1);
  }
  50% {
    transform: translate(0, 20px) scale(0.8) rotate(0deg);
    opacity: 1;
  }
  80% {
    transform: translate(-100px, -100px) scale(1.5) rotate(-180deg);
    opacity: 0;
  }
  100% {
    transform: translate(0) scale(1) rotate(0deg);
    opacity: 1;
  }
}

/* Animation Six */

.six span {
  color: #ddb40f;
  opacity: 0;
  transform: rotate(-180deg) translate(150px, 0);
  animation: twister 0.5s forwards;
}

@keyframes twister {
  10% {
    opacity: 1;
  }
  100% {
    transform: rotate(0deg) translate(0);
    opacity: 1;
  }
}

/* Animation Seven */

.seven span {
  color: #348c04;
  opacity: 0;
  transform: translate(-150px, 0) scale(0.3);
  animation: leftRight 0.5s forwards;
}

@keyframes leftRight {
  40% {
    transform: translate(50px, 0) scale(0.7);
    opacity: 1;
    color: #348c04;
  }
  60% {
    color: #0f40ba;
  }
  80% {
    transform: translate(0) scale(2);
    opacity: 0;
  }
  100% {
    transform: translate(0) scale(1);
    opacity: 1;
  }
}
</style>