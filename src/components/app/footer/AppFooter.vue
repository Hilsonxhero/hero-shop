<template>
  <footer>
    <div class="container">
      <div
        class="bg-gray-100 overflow-hidden rounded-xl mb-8 w-full px-6 flex content-between items-center"
      >
        <div class="flex-grow hidden lg:block">
          <div class="flex text-sm py-5">
            <div class="text-gray-700 ml-3">پشتیبانی</div>
            <div class="">
              <a class="text-gray-600 text-sm" href="tel:034-91002425">
                {{ config.phone }}
              </a>
              <span class="pr-4 text-sm font-bold text-gray-600">
                {{ config.support_text }}</span
              >
            </div>
          </div>
          <div class="flex text-sm mt-2">
            <div class="text-gray-700 ml-3">ایمیل</div>
            <a class="text-gray-600 text-sm" href="mailto:info@gmail.com">
              {{ config.email }}
            </a>
          </div>
        </div>

        <div
          class="grid grid-cols-2 grid-rows-2 items-center lg:flex lg:pb-4 lg:pt-6 lg:space-x-2 lg:space-x-reverse"
        >
          <div class="flex items-center justify-center flex-col">
            <a
              href="/page/send-method"
              rel=""
              class="items-center w-36 h-[7.75rem] t-col flex flex-col justify-center lg:w-[9.25rem] lg:h-[9.25rem]"
              ><span class="w-14 h-14 lg:w-16 lg:h-16 block"
                ><img
                  src="/media/icons/fastSend.svg"
                  loading="lazy"
                  alt="ارسال سریع"
                  class="w-full h-full transition-opacity duration-500"
                  width="64"
                  height="64"
                />
              </span>
              <div
                class="mt-4 text-center text-gray-800 text-xs font-bold leading-6 lg:mt-5 lg:text-sm"
              >
                ارسال سریع کالا
              </div>
            </a>
          </div>
          <div class="flex items-center justify-center flex-col">
            <a
              href="/page/refunds"
              rel=""
              class="items-center w-36 h-[7.75rem] t-col flex flex-col justify-center lg:w-[9.25rem] lg:h-[9.25rem]"
              ><span class="w-14 h-14 lg:w-16 lg:h-16 block"
                ><img
                  src="/media/icons/productReturn.svg"
                  loading="lazy"
                  alt="گارانتی طلایی ما"
                  class="w-full h-full transition-opacity duration-500"
                  width="64"
                  height="64"
                />
              </span>
              <div
                class="mt-4 text-center text-gray-800 text-xs font-bold leading-6 lg:mt-5 lg:text-sm"
              >
                مهلت ۷ روز بازگشت کالا
              </div>
            </a>
          </div>
          <div class="flex items-center justify-center flex-col">
            <a
              href="/contact-us"
              rel="noopener noreferrer nofollow"
              class="items-center w-36 h-[7.75rem] t-col flex flex-col justify-center lg:w-[9.25rem] lg:h-[9.25rem]"
              ><span class="w-14 h-14 lg:w-16 lg:h-16 block"
                ><img
                  src="/media/icons/phoneSupport.svg"
                  loading="lazy"
                  alt="پشتیبانی تلفنی"
                  class="w-full h-full transition-opacity duration-500"
                  width="64"
                  height="64"
                />
              </span>
              <div
                class="mt-4 text-center text-gray-800 text-xs font-bold leading-6 lg:mt-5 lg:text-sm"
              >
                پشتیبانی تلفنی
              </div>
            </a>
          </div>
          <div class="flex items-center justify-center flex-col">
            <a
              href="/page/guarantee"
              rel="noopener noreferrer nofollow"
              class="items-center w-36 h-[7.75rem] t-col flex flex-col justify-center lg:w-[9.25rem] lg:h-[9.25rem]"
              ><span class="w-14 h-14 lg:w-16 lg:h-16 block"
                ><img
                  src="/media/icons/productGuaranty.svg"
                  loading="lazy"
                  alt="تضمین اصالت کالا"
                  class="w-full h-full transition-opacity duration-500"
                  width="64"
                  height="64"
                />
              </span>
              <div
                class="mt-4 text-center text-gray-800 text-xs font-bold leading-6 lg:mt-5 lg:text-sm"
              >
                تضمین اصالت کالا
              </div>
            </a>
          </div>
        </div>
      </div>

      <div>
        <div class="grid grid-cols-12 gap-y-8 lg:pb-6">
          <div
            class="col-span-12 lg:col-span-9 gap-y-4 space-y-4 overflow-hidden"
          >
            <div class="grid grid-cols-12">
              <div
                class="col-span-6 lg:col-span-2 lg:space-y-5"
                v-for="(link, index) in config.links"
              >
                <div class="menu-title mb-3">{{ link.title }}</div>
                <div class="flex flex-col space-y-4">
                  <div
                    class="hover:text-typo menu-item"
                    v-for="(item, index) in link.values"
                    :key="index"
                  >
                    <a :href="item.url" class="">{{ item.title }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-span-12 lg:col-span-3 flex flex-col">
            <div class="flex items-center justify-between">
              <div
                class="text-gray-800 text-sm font-extrabold leading-6 lg:text-base lg:leading-7"
              >
                با ما همراه باشید
              </div>
              <div
                class="flex flex-wrap items-center justify-center space-x-1 space-x-reverse lg:pr-3"
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  href=""
                  class=""
                >
                  <hx-icon
                    class="w-6 h-6 text-gray-500"
                    icon="instagram"
                  ></hx-icon>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  href=""
                  class=""
                >
                  <hx-icon
                    class="w-6 h-6 text-gray-500"
                    icon="twitter"
                  ></hx-icon>
                </a>
              </div>
            </div>
            <div class="my-5 lg:mb-0 lg:mt-2">
              <div
                class="mb-4 text-gray-800 text-sm font-extrabold lg:mb-3 lg:text-base"
              >
                از آخرین تخفیف ها با خبر شوید
              </div>
              <div class="h-full,flex justify-center">
                <form class="h-full">
                  <div class="flex flex-col space-y-3">
                    <div class="w-full">
                      <div
                        class="overflow-hidden relative min-content-height rounded-xl t-input-height"
                      >
                        <hx-input
                          v-model="email"
                          type="text"
                          placeholder="ایمیل خود را وارد کنید"
                        ></hx-input>
                      </div>
                    </div>
                    <div class="flex flex-col space-y-3">
                      <div class="flex justify-end">
                        <hx-button class="lg:w-[9.25rem] w-24">ثبت</hx-button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-start justify-between mt-6 lg:flex-row">
        <div class="w-full lg:w-[55%]">
          <div v-html="config.site_description"></div>
        </div>
        <div class="flex justify-center w-full lg:justify-end lg:w-[30%]">
          <div class="flex ml-4">
            <div class="flex items-center justify-center mb-3 py-5 rounded-md">
              <div class="lg:w-auto h-[5.43rem] w-[5.43rem] lg:h-[6.25rem]">
                <img
                  id="jxlzfukzapfufukzjxlzesgt"
                  alt="samandehi logo"
                  loading="lazy"
                  src="/media/samandehi.png"
                  class="h-full object-contain"
                  style="cursor: pointer"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
          <div>
            <div class="flex items-center justify-center mb-3 py-5 rounded-md">
              <div class="lg:w-auto h-[5.43rem] w-[5.43rem] lg:h-[6.25rem]">
                <img
                  src="/media/ecunion.png"
                  alt="ecunion logo"
                  loading="lazy"
                  class="h-full object-contain"
                  style="cursor: pointer"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
//@ts-nocheck
import { ref } from "vue";

import { useConfigStore } from "@/modules/config";
import { storeToRefs } from "pinia";
const store = useConfigStore();
const { config } = storeToRefs(store);

const email = ref(null);
</script>

<style scoped></style>
