<template>
  <div>
    <hx-skeleton animated :loading="loading">
      <template #template>
        <hx-skeleton-item variant="card"></hx-skeleton-item>
        <hx-skeleton-item variant="card"></hx-skeleton-item>
        <hx-skeleton-item variant="card"></hx-skeleton-item>
        <hx-skeleton-item variant="card"></hx-skeleton-item>
        <hx-skeleton-item variant="card"></hx-skeleton-item>
        <hx-skeleton-item variant="card"></hx-skeleton-item>
        <hx-skeleton-item variant="card"></hx-skeleton-item>
        <hx-skeleton-item variant="card"></hx-skeleton-item>
      </template>
      <template #default>
        <section class="section">
          <div class="container">
            <div class="grid grid-cols-12 gap-4 mt-4">
              <div class="xl:col-span-8 md:col-span-8 col-span-12 mb-15 group">
                <div class="bg-white p-2 rounded-lg">
                  <div class="overflow-hidden">
                    <img
                      class="object-cover rounded-lg h-[240px] lg:h-[450px] w-full"
                      :src="article?.media?.main"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div class="my-7">
                    <div>
                      <div
                        class="ml-6 flex items-center space-x-2 space-x-reverse sm:mb-0 mb-5"
                      >
                        <a
                          href=""
                          class="flex items-center rounded-lg text-blue-700 hover:text-white hover:bg-blue-700 transition duration-200 font-semibold px-5 py-2 bg-blue-50"
                        >
                          <svg
                            class="ml-2"
                            width="18"
                            height="17"
                            viewBox="0 0 23 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.7915 11.0486C11.292 11.0486 10.887 11.4535 10.887 11.9531C10.887 12.4526 11.2919 12.8575 11.7915 12.8575L15.4209 12.8575C15.9205 12.8575 16.3254 12.4526 16.3254 11.9531C16.3254 11.4535 15.9205 11.0486 15.4209 11.0486L11.7915 11.0486ZM8.16228 14.6788C7.66276 14.6788 7.25781 15.0838 7.25781 15.5833C7.25781 16.0828 7.66276 16.4878 8.16228 16.4878L15.4212 16.4878C15.9207 16.4878 16.3257 16.0828 16.3257 15.5833C16.3257 15.0838 15.9207 14.6788 15.4212 14.6788L8.16228 14.6788Z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M16.3021 4.92382C15.3306 4.83267 14.2064 4.79518 12.9123 4.79518C4.92001 4.79518 3.00712 6.22507 2.07443 12.8965C1.93217 13.9141 1.84681 14.8097 1.83266 15.597M16.3021 4.92382C21.3305 5.39564 22.2667 7.30528 21.4851 12.8965C20.5524 19.568 18.6395 20.9979 10.6472 20.9979C3.87388 20.9979 1.75406 19.9709 1.83266 15.597M16.3021 4.92382C16.3021 4.92382 16.4398 4.09117 16.3021 2.99488C15.963 0.294405 4.81796 0.647123 3.63956 2.99488C1.83233 6.59543 1.83266 15.597 1.83266 15.597"
                              stroke="currentColor"
                              stroke-width="1.80894"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                          {{ article?.category?.title }}
                        </a>
                      </div>
                    </div>

                    <h3 class="text-2xl font-bold my-4 text-gray-700">
                      {{ article.title }}
                    </h3>
                    <!-- <p class="text-gray-500 leading-loose text-justify">

                </p> -->

                    <div
                      class="text-justify leading-8"
                      v-html="article.content"
                    ></div>
                  </div>
                </div>
              </div>

              <div class="xl:col-span-4 md:col-span-4 col-span-12 mb-15 group">
                <div class="bg-white p-2">
                  <div class="rounded-lg mb-5">مقالات مرتبط</div>

                  <div>
                    <div
                      class="card mb-3"
                      v-for="(related_article, index) in related_articles"
                      :key="index"
                    >
                      <div class="flex">
                        <div class="w-4/12">
                          <img
                            class="rounded-md object-cover h-20 w-full"
                            :src="related_article.media?.main"
                            alt=""
                          />
                        </div>
                        <div class="w-8/12 flex flex-col mr-2">
                          <h6 class="h-full mt-2">
                            <router-link
                              :to="{
                                name: 'articles show',
                                params: {
                                  id: related_article.id,
                                  slug: related_article.slug,
                                },
                              }"
                              class="btn-link stretched-link text-reset fw-bold"
                            >
                              {{ related_article.title }}
                            </router-link>
                          </h6>
                          <div class="text-sm mt-1 text-gray-300">
                            {{ related_article.created_at }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </template>
    </hx-skeleton>
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck
import { onMounted, ref } from "vue";

import ApiService from "@/core/services/ApiService";
import { useRoute } from "vue-router";
const loading = ref(true);

const article = ref({});
const related_articles = ref([]);
const route = useRoute();
onMounted(() => {
  ApiService.get(`articles/${route.params.id}`).then(({ data }) => {
    article.value = data.data.article;
    related_articles.value = data.data.related_articles;
    loading.value = false;
  });
});
</script>

<style scoped></style>
