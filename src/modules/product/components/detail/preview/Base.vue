<template>
  <div>
    <div title="">
      <div class="lg:flex lg:items-start">
        <aside class="sticky top-2 hidden  lg:block lg:w-[30%]">
          <div id="threshold-id"></div>
          <ul class="p-3 bg-gray-100 rounded-xl">
            <li v-for="(reviewItem, index) in review.items"
              class="px-6 py-3 whitespace-nowrap  rounded-xl cursor-pointer lg:whitespace-normal  font-bold text-link">
              <span class="lg:line-clamp-1 text-xs" :class="{ 'text-blue-500': visiable_index == reviewItem.id }">
                {{ reviewItem.title }}
              </span>
            </li>

          </ul>
        </aside>
        <section class="relative pb-4 pt-4 px-4 text-justify leading-8 lg:pt-0 lg:leading-10 lg:w-[70%]">
          <hx-collapse class="product-reviews__collapse">
            <hx-collapse-item v-intersection-observer="onIntersectionObserver" :data-index="reviewItem.id"
              :title="reviewItem.title" :name="reviewItem.id" v-for="(reviewItem, index) in review.items">
              <div v-html="reviewItem.content"></div>

              <div
                class="collapse-shadow absolute -bottom-2 top-4 w-full bg-gradient-to-t from-[rgba(255,255,255,1)] to-[rgba(255,255,255,0.2)]"
                style=""></div>

            </hx-collapse-item>

          </hx-collapse>

        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck
import { ref } from 'vue';
import { vIntersectionObserver } from '@vueuse/components'
const visiable_index = ref(null)

function onIntersectionObserver([{ target, isIntersecting }]) {
  console.log("isIntersecting", isIntersecting);
  if (!isIntersecting) {
    return;
  }

  const index = target.getAttribute('data-index')

  console.log("index", index);


  visiable_index.value = index

  // isVisible.value = isIntersecting
}

const props = defineProps({
  review: {
    type: String,
  },
});
const activeNames = ref([])
</script>

<style scoped>
p {
  line-height: 2;
}
</style>
