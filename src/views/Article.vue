<template>
  <HeaderTitle :title="`Vim入门指南${$route.params.id}`"></HeaderTitle>
  <div class="post-box">
    <div v-html="postConntent" class="post-content">
      
    </div>
    <Aside></Aside>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import Aside from '../layout/Aside.vue'
import HeaderTitle from '@/components/HeaderTitle.vue';

const postConntent = ref(`
  <p>Vim是从vi发展出来的一个文本编辑器。其代码补全、编译及错误跳转等方便编程的功能特别丰富，在程序员中被广泛使用。</p>
  <p>Vim是从vi发展出来的一个文本编辑器。其代码补全、编译及错误跳转等方便编程的功能特别丰富，在程序员中被广泛使用。</p>
  <p>Vim是从vi发展出来的一个文本编辑器。其代码补全、编译及错误跳转等方便编程的功能特别丰富，在程序员中被广泛使用。</p>
  <p>Vim是从vi发展出来的一个文本编辑器。其代码补全、编译及错误跳转等方便编程的功能特别丰富，在程序员中被广泛使用。</p>
  <p>Vim是从vi发展出来的一个文本编辑器。其代码补全、编译及错误跳转等方便编程的功能特别丰富，在程序员中被广泛使用。</p>
  <p>Vim是从vi发展出来的一个文本编辑器。其代码补全、编译及错误跳转等方便编程的功能特别丰富，在程序员中被广泛使用。</p>
  <p>Vim是从vi发展出来的一个文本编辑器。其代码补全、编译及错误跳转等方便编程的功能特别丰富，在程序员中被广泛使用。</p>
  <p>Vim是从vi发展出来的一个文本编辑器。其代码补全、编译及错误跳转等方便编程的功能特别丰富，在程序员中被广泛使用。</p>
`)
</script>

<style lang="scss" scoped>
.post-box {
  display: flex;
  padding-right: 76px;
}
.post-content {
  flex: 1;
  padding: 0 24px 48px;
}
</style>