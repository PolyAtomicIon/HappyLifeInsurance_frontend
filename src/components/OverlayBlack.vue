<template>
    <div 
        class="overlay-bg" 
    >
    </div>
</template>

<style scoped>
  .overlay-bg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.5;
    z-index: 1;
  }
</style>