<template>
  <HeaderTitle title="说说页"></HeaderTitle>
  <div class="shuoshuo-box">
    <div class="shuoshuo-content">
      <ul class="shuoshuo-list">
        <li class="shuoshuo-item"><span class="date-tag">24.01.10</span><span class="shuoshuo-record">挑战自我，不进则退。</span></li>
        <li class="shuoshuo-item"><span class="date-tag">24.01.09</span><span class="shuoshuo-record">地球只有一个，而欧派有两个。</span></li>
        <li class="shuoshuo-item"><span class="date-tag">24.01.08</span><span class="shuoshuo-record">你曾打马过银河，倒影一百光年长。</span></li>
      </ul>
    </div>
    <Aside></Aside>
  </div>
</template>

<script setup>
import Aside from '../layout/Aside.vue'
import HeaderTitle from '@/components/HeaderTitle.vue';
</script>

<style lang="scss" scoped>

.shuoshuo-box {
  display: flex;
  padding-right: 76px;
}
.shuoshuo-content {
  flex: 1;
  padding: 0 24px 48px;
}

.shuoshuo-item {
  display: flex;
  align-items: center;
  padding-bottom: 6px;
}


.shuoshuo-record {
  color: var(--evan-card-text-color);
  font-size: 24px;
}

.date-tag {
  display: block;
  margin-right: 18px;
  width: 64px;
  height: 24px;
  background-color: var(--evan-black-color);
  color: var(--evan-card-text-color);
  font-size: 12px;
  text-align: center;
  line-height: 24px;
  border-radius: 4px;
}
</style>