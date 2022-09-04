<template>
  <div>
    <div title="">
      <div class="lg:flex lg:items-start">
        <aside class="sticky top-2 hidden pt-20 lg:block lg:w-[20%]">
          <div id="threshold-id"></div>
          <ul class="p-3 bg-gray-100 rounded">
            <li
              class="px-6 py-3 whitespace-nowrap text-sm rounded-xl cursor-pointer lg:whitespace-normal bg-gray-200 font-bold text-link"
            >
              <span class="lg:line-clamp-1">
                طراحی گوشی سامسونگ Galaxy A13
              </span>
            </li>
            <li
              class="px-6 py-3 whitespace-nowrap text-sm rounded-xl cursor-pointer lg:whitespace-normal"
            >
              <span class="lg:line-clamp-1"> نمایشگر گوشی سامسونگ A13 </span>
            </li>
            <li
              class="px-6 py-3 whitespace-nowrap text-sm rounded-xl cursor-pointer lg:whitespace-normal"
            >
              <span class="lg:line-clamp-1">
                دوربین گوشی سامسونگ گلکسی A13
              </span>
            </li>
            <li
              class="px-6 py-3 whitespace-nowrap text-sm rounded-xl cursor-pointer lg:whitespace-normal"
            >
              <span class="lg:line-clamp-1">
                باتری گوشی سامسونگ Galaxy A13
              </span>
            </li>
            <li
              class="px-6 py-3 whitespace-nowrap text-sm rounded-xl cursor-pointer lg:whitespace-normal"
            >
              <span class="lg:line-clamp-1">
                سخت افزار و نرم افزار گوشی سامسونگ A13
              </span>
            </li>
          </ul>
        </aside>
        <section
          class="relative pb-4 pt-4 px-4 text-justify leading-8 lg:pt-0 lg:leading-10 lg:w-[80%]"
        >
          <section>
            <div v-html="review"></div>
          </section>

          <div
            class="absolute bottom-12 inset-x-0 h-28 bg-gradient-to-t lg:from-[rgba(255,255,255,1)] lg:to-[rgba(255,255,255,0.2)]"
            style="display: none"
          ></div>
          <div
            class="relative z-20 flex items-center justify-start mt-3 pb-4 text-link cursor-pointer space-x-4 space-x-reverse lg:pb-0"
          >
            <span class="text-sm font-bold"> نمایش کمتر </span>
            <i
              color="#666"
              name="t-icon-arrow_back_ios_new-24px"
              class="flex transform lg:hidden material-icons t-icon-arrow_back_ios_new-24px rotate-90"
            ></i>
            <i
              color="#666"
              name="t-icon-arrow_back_ios_new-24px"
              class="hidden transform lg:flex material-icons t-icon-arrow_back_ios_new-24px rotate-90"
            ></i>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck
const props = defineProps({
  review: {
    type: String,
  },
});
</script>

<style scoped>
p {
  line-height: 2;
}
</style>
