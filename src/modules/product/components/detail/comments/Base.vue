<template>
  <div>
    <section
      class="flex flex-col space-y-3 lg:hidden lg:flex-row lg:items-center lg:space-x-reverse lg:space-y-0 lg:mt-[3.25rem]">
      <div
        class="flex flex-col lg:flex-grow bg-gray-100 lg:bg-transparent rounded-xl p-3 lg:px-0 lg:py-0 mb-12 lg:mb-2 lg:w-full">
        <section
          class="flex items-center flex-row lg:flex-col lg:border-b broder-gray-300 lg:mb-2 lg:pb-2 justify-center">
          <div class="font-black text-base order-1 mx-3 lg:mx-0 lg:order-none lg:text-[40px] lg:mb-4">
            4
          </div>
          <div class="min-h-8 lg:w-36 t-flex-center w-[7.5rem]"></div>
          <div class="min-w-12 lg:min-w-[max-content]">
            <div class="mr-2 lg:mr-0 order-2 lg:order-none text-sm mt-1">
              از مجموع 2 رای
            </div>
          </div>
        </section>
        <section
          class="space-y-5 mt-7 lg:flex lg:flex-grow lg:flex-col lg:justify-between lg:w-full lg:mt-0 lg:space-y-2 lg:border-b broder-gray-300 lg:mb-2 lg:pb-2">
          <div
            class="grid grid-cols-9 lg:flex justify-between w-full lg:justify-start lg:flex-col items-center lg:items-start">
            <span class="col-span-4 lg:col-span-3 text-xs lg:font-medium text-right">ارزش خرید نسبت به قیمت</span>
            <div class="col-span-5 lg:col-span-9 flex flex-grow lg:w-full items-center lg:justify-between">
              <section class="flex-grow min-w-[90%]">
                <div class="w-full ltr flex flex-grow lg:rtl">
                  <div class="w-full bg-gray-200 rounded-full">
                    <div class="text-white rounded-inherit text-xs leading-none text-center transition py-2" style="
                        width: 80%;
                        background: rgb(102, 187, 106) none repeat scroll 0% 0%;
                      "></div>
                  </div>
                </div>
              </section>
              <div class="font-bold order-last text-center ml-1 mr-2">4</div>
            </div>
          </div>
          <div
            class="grid grid-cols-9 lg:flex justify-between w-full lg:justify-start lg:flex-col items-center lg:items-start">
            <span class="col-span-4 lg:col-span-3 text-xs lg:font-medium text-right">طراحی و کیفیت ساخت</span>
            <div class="col-span-5 lg:col-span-9 flex flex-grow lg:w-full items-center lg:justify-between">
              <section class="flex-grow min-w-[90%]">
                <div class="w-full ltr flex flex-grow lg:rtl">
                  <div class="w-full bg-gray-200 rounded-full">
                    <div class="text-white rounded-inherit text-xs leading-none text-center transition py-2" style="
                        width: 80%;
                        background: rgb(102, 187, 106) none repeat scroll 0% 0%;
                      "></div>
                  </div>
                </div>
              </section>
              <div class="font-bold order-last text-center ml-1 mr-2">4</div>
            </div>
          </div>
          <div
            class="grid grid-cols-9 lg:flex justify-between w-full lg:justify-start lg:flex-col items-center lg:items-start">
            <span class="col-span-4 lg:col-span-3 text-xs lg:font-medium text-right">زیبایی ظاهری</span>
            <div class="col-span-5 lg:col-span-9 flex flex-grow lg:w-full items-center lg:justify-between">
              <section class="flex-grow min-w-[90%]">
                <div class="w-full ltr flex flex-grow lg:rtl">
                  <div class="w-full bg-gray-200 rounded-full">
                    <div class="text-white rounded-inherit text-xs leading-none text-center transition py-2" style="
                        width: 80%;
                        background: rgb(102, 187, 106) none repeat scroll 0% 0%;
                      "></div>
                  </div>
                </div>
              </section>
              <div class="font-bold order-last text-center ml-1 mr-2">4</div>
            </div>
          </div>
          <div
            class="grid grid-cols-9 lg:flex justify-between w-full lg:justify-start lg:flex-col items-center lg:items-start">
            <span class="col-span-4 lg:col-span-3 text-xs lg:font-medium text-right">کارایی و عملکرد</span>
            <div class="col-span-5 lg:col-span-9 flex flex-grow lg:w-full items-center lg:justify-between">
              <section class="flex-grow min-w-[90%]">
                <div class="w-full ltr flex flex-grow lg:rtl">
                  <div class="w-full bg-gray-200 rounded-full">
                    <div class="text-white rounded-inherit text-xs leading-none text-center transition py-2" style="
                        width: 80%;
                        background: rgb(102, 187, 106) none repeat scroll 0% 0%;
                      "></div>
                  </div>
                </div>
              </section>
              <div class="font-bold order-last text-center ml-1 mr-2">4</div>
            </div>
          </div>
        </section>
      </div>
      <section class="lg:pr-4 xl:pr-8">
        <div class="py-3 w-full text-center text-white font-bold bg-primary rounded-xl cursor-pointer lg:hidden">
          نظر خود را ثبت کنید
        </div>
        <div class="hidden lg:flex lg:flex-col lg:space-y-6">
          <span class="text-3xl font-bold">شما هم نظرتان را بنویسید</span>
          <span class="text-typo-light text-sm">با ارسال نظر ضمن کمک به دیگران، اگر کالا را از فالکون خریده باشید
            امتیاز دریافت خواهید کرد</span>

          <hx-button @click="openNewCommentDialog" variant="primary">ارسال نظر جدید</hx-button>
        </div>
      </section>
    </section>
    <div>
      <section class="comments-container">
        <div class="flex items-start w-full">
          <section
            class="z-10 hidden flex-col w-full bg-gray-100 space-y-3 lg:sticky lg:left-0 lg:top-24 lg:flex lg:flex-grow lg:items-center lg:justify-center lg:mx-0 lg:mx-auto lg:pr-4 lg:px-6 lg:py-4 lg:w-full lg:bg-transparent lg:rounded-xl lg:space-x-reverse lg:space-y-0 min-w-[18.75rem] max-w-[18.75rem] lg:border lg:border-gray-300">
            <div
              class="flex flex-col lg:flex-grow bg-gray-100 lg:bg-transparent rounded-xl p-3 lg:px-0 lg:py-0 mb-12 lg:mb-2 lg:w-full hidden lg:flex">
              <section
                class="flex justify-center items-center flex-row lg:flex-col lg:border-b broder-gray-300 lg:mb-2 lg:pb-2 justify-center">
                <div class="font-black text-base order-1 mx-3 lg:mx-0 lg:order-none lg:text-[40px] lg:mb-4">
                  4
                </div>
                <div class="min-h-8 lg:w-36 t-flex-center w-[7.5rem]"></div>
                <div class="min-w-12 lg:min-w-[max-content]">
                  <div class="mr-2 lg:mr-0 order-2 lg:order-none text-sm mt-1">
                    از مجموع 2 رای
                  </div>
                </div>
              </section>
              <section
                class="space-y-5 mt-7 lg:flex lg:flex-grow lg:flex-col lg:justify-between lg:w-full lg:mt-0 lg:space-y-2 lg:border-b broder-gray-300 lg:mb-2 lg:pb-2">
                <div
                  class="grid grid-cols-9 lg:flex justify-between w-full lg:justify-start lg:flex-col items-center lg:items-start">
                  <span class="col-span-4 lg:col-span-3 text-xs lg:font-medium text-right">ارزش خرید نسبت به قیمت</span>
                  <div class="col-span-5 lg:col-span-9 flex flex-grow lg:w-full items-center lg:justify-between">
                    <section class="flex-grow min-w-[90%]">
                      <div class="w-full ltr flex flex-grow lg:rtl">
                        <div class="w-full bg-gray-200 rounded-full">
                          <div class="text-white rounded-inherit text-xs leading-none text-center transition py-2"
                            style="
                              width: 80%;
                              background: rgb(102, 187, 106) none repeat scroll
                                0% 0%;
                            "></div>
                        </div>
                      </div>
                    </section>
                    <div class="font-bold order-last text-center ml-1 mr-2">
                      4
                    </div>
                  </div>
                </div>
                <div
                  class="grid grid-cols-9 lg:flex justify-between w-full lg:justify-start lg:flex-col items-center lg:items-start">
                  <span class="col-span-4 lg:col-span-3 text-xs lg:font-medium text-right">طراحی و کیفیت ساخت</span>
                  <div class="col-span-5 lg:col-span-9 flex flex-grow lg:w-full items-center lg:justify-between">
                    <section class="flex-grow min-w-[90%]">
                      <div class="w-full ltr flex flex-grow lg:rtl">
                        <div class="w-full bg-gray-200 rounded-full">
                          <div class="text-white rounded-inherit text-xs leading-none text-center transition py-2"
                            style="
                              width: 80%;
                              background: rgb(102, 187, 106) none repeat scroll
                                0% 0%;
                            "></div>
                        </div>
                      </div>
                    </section>
                    <div class="font-bold order-last text-center ml-1 mr-2">
                      4
                    </div>
                  </div>
                </div>
                <div
                  class="grid grid-cols-9 lg:flex justify-between w-full lg:justify-start lg:flex-col items-center lg:items-start">
                  <span class="col-span-4 lg:col-span-3 text-xs lg:font-medium text-right">زیبایی ظاهری</span>
                  <div class="col-span-5 lg:col-span-9 flex flex-grow lg:w-full items-center lg:justify-between">
                    <section class="flex-grow min-w-[90%]">
                      <div class="w-full ltr flex flex-grow lg:rtl">
                        <div class="w-full bg-gray-200 rounded-full">
                          <div class="text-white rounded-inherit text-xs leading-none text-center transition py-2"
                            style="
                              width: 80%;
                              background: rgb(102, 187, 106) none repeat scroll
                                0% 0%;
                            "></div>
                        </div>
                      </div>
                    </section>
                    <div class="font-bold order-last text-center ml-1 mr-2">
                      4
                    </div>
                  </div>
                </div>
                <div
                  class="grid grid-cols-9 lg:flex justify-between w-full lg:justify-start lg:flex-col items-center lg:items-start">
                  <span class="col-span-4 lg:col-span-3 text-xs lg:font-medium text-right">کارایی و عملکرد</span>
                  <div class="col-span-5 lg:col-span-9 flex flex-grow lg:w-full items-center lg:justify-between">
                    <section class="flex-grow min-w-[90%]">
                      <div class="w-full ltr flex flex-grow lg:rtl">
                        <div class="w-full bg-gray-200 rounded-full">
                          <div class="text-white rounded-inherit text-xs leading-none text-center transition py-2"
                            style="
                              width: 80%;
                              background: rgb(102, 187, 106) none repeat scroll
                                0% 0%;
                            "></div>
                        </div>
                      </div>
                    </section>
                    <div class="font-bold order-last text-center ml-1 mr-2">
                      4
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <section class="lg:mx-auto lg:w-full">
              <div
                class="py-3 w-full text-center text-primary font-bold bg-gray-50 rounded-xl cursor-pointer lg:hidden">
                نظر خود را ثبت کنید
              </div>
              <div class="flex hidden items-center justify-start w-full lg:flex">
                <div class="flex lg:flex-col lg:space-y-4 lg:items-center">
                  <span class="text-sm font-bold">شما هم نظرتان را بنویسید</span>
                  <span class="text-center text-typo-light text-sm text-xs">با ارسال نظر ضمن کمک به دیگران، اگر کالا را
                    از فالکون خریده
                    باشید امتیاز دریافت خواهید کرد</span>

                  <hx-button @click="openNewCommentDialog" variant="primary" block>ارسال نظر جدید</hx-button>
                </div>
              </div>
            </section>
          </section>
          <div class="block w-full overflow-hidden lg:flex-grow lg:pr-4" style="">
            <section class="flex mb-4 lg:items-center">
              <div class="justify-between flex item-center">
                <span class="block p-detail-heading p-detail-heading-border">نظرات کاربران</span>
                <i color="#666" name="t-icon-sort-24px"
                  class="block ml-4 mr-4 text-typo-light text-4xl lg:mr-32 material-icons t-icon-sort-24px"></i>
              </div>
              <span
                class="block px-2 py-2 text-sm rounded-xl cursor-pointer lg:flex lg:items-center lg:px-4 lg:py-2 lg:h-[3rem] font-bold bg-gray-100 text-link transition-all duration-300 ease-out">
                جدیدترین نظرات </span><span
                class="block px-2 py-2 text-sm rounded-xl cursor-pointer lg:flex lg:items-center lg:px-4 lg:py-2 lg:h-[3rem]">
                مفیدترین نظرات </span><span
                class="block px-2 py-2 text-sm rounded-xl cursor-pointer lg:flex lg:items-center lg:px-4 lg:py-2 lg:h-[3rem]">
                خریداران کالا
              </span>
            </section>
            <div>
              <div class="gap-4 grid grid-cols-1">
                <div>
                  <div
                    class="flex flex-col items-start justify-between p-3 w-full bg-gray-100 rounded-xl lg:px-6 lg:py-4 lg:shadow-none">
                    <section class="flex flex-col w-full h-full">
                      <div
                        class="flex flex-col 2xs:flex-row 2xs:items-center items-start w-full text-2xs 2xs:text-xs font-medium 2xs:divide-x 2xs:divide-x-reverse 2xs:space-x-3 2xs:space-x-reverse sm:text-sm text-success">
                        <div class="t-center">
                          <hx-button icon variant="gray">
                            <hx-icon class="text-gray-500" icon="dislike">
                            </hx-icon>
                          </hx-button>

                          <span class="mr-2">توصیه می کنم</span>
                        </div>
                        <div class="2xs:pr-3 t-center">
                          <!-- <svg xmlns="http://www.w3.org/2000/svg"
                                                        class="w-6 h-6 text-primary fill-current icon sprite-next">
                                                        <use href="/_nuxt/5fdc736ea62b670e82b374e43d06d274.svg#i-cartfill"
                                                            xlink:href="/_nuxt/5fdc736ea62b670e82b374e43d06d274.svg#i-cartfill">
                                                        </use>
                                                    </svg> -->
                          <span class="2xs:mr-2 text-primary">
                            خریدار محصول هستم
                          </span>
                        </div>
                      </div>
                      <h6 class="mb-2 mt-4 text-sm font-bold lg:mb-0 lg:mt-2 lg:text-base">
                        عالی
                      </h6>

                      <p class="text-xs lg:text-sm">
                        تحویل سریع و بموقع بسته بندی مناسب.دسترسی اسان به سایت و
                        انتخاب و خرید کالا
                      </p>

                      <div class="flex flex-wrap justify-between mt-3 w-full lg:flex-row flex-row-reverse lg:flex-row">
                        <div
                          class="flex flex-col items-start justify-center order-last lg:flex-row lg:items-center lg:justify-start lg:order-none lg:space-x-2 lg:space-x-reverse">
                          <div class="order-last lg:order-none flex item-center">
                            <span class="text-typo-light text-xs">مهدی سعیدی</span>
                            <span class="mx-1 w-1.5 h-1.5 bg-typo-lighter rounded-full lg:mx-2"></span>
                            <span class="text-typo-light text-xs">4 خرداد 1401</span>
                          </div>
                          <div class="flex item-center">
                            <span class="hidden w-1.5 h-1.5 bg-typo-lighter rounded-full lg:inline"></span>
                            <span class="ml-1 text-typo-light text-xs lg:mx-2">فروشنده</span>
                            <div class="flex item-center">
                              <span class="text-typo-light text-xs">
                                فالکون
                              </span>
                            </div>
                          </div>
                        </div>
                        <section
                          class="mr-1 mt-2 text-typo-light space-x-4 space-x-reverse transition-opacity lg:mt-0 lg:space-x-5 lg:space-x-reverse flex item-center">
                          <div class="cursor-pointer space-x-3 space-x-reverse flex item-center">
                            <span class="self-center">222</span>

                            <hx-button icon variant="gray">
                              <hx-icon class="text-gray-500" icon="like">
                              </hx-icon>
                            </hx-button>
                          </div>
                          <div class="cursor-pointer space-x-3 space-x-reverse flex item-center">
                            <span class="self-center">254</span>

                            <hx-button icon variant="gray">
                              <hx-icon class="text-gray-500" icon="dislike">
                              </hx-icon>
                            </hx-button>
                          </div>
                        </section>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
              <div class="rounded-xl bg-white vue-portal-target">
                <div class="w-full overflow-x-auto t-pagination text-typo-light lg:block" style="" pagecount="1"
                  currentpage="1">
                  <section class="flex justify-between py-3 text-gray-700"></section>
                </div>
              </div>
              <div class="vue-portal-target"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="hidden" teleportto="last-of-body" bottomsheetmaxsize="md">
      <div>
        <div>
          <div
            class="transition-opacity fixed z-60 bottom-0 left-0 right-0 top-0 flex items-center justify-center opacity-0 w-0 h-0 overflow-hidden duration-300 ease-out">
            <div
              class="max-w-[75%] z-30 rounded-xl shadow-design scrollbar-sm max-h-full overflow-y-auto overflow-hidden scrollbar-sm bg-white w-max w-0 h-0 overflow-hidden">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <hx-dialog title="ثبت نظر جدید" width="50%" v-model="visiable_dialog">
      <div>
        <hx-form ref="formRef" :model="form" labhx-width="100px" class="demo-ruleForm grid grid-cols-12 gap-2">

          <div class="col-span-12" v-if="comments.scores">


            <div v-for="(score, index) in comments.scores" :key="index">
              <div>{{ score.title }}</div>
              <hx-stepper :max="100" :show-tooltip="false" v-model="scores[index]" :step="20" />
            </div>


            <div class="text-center text-gray-500 my-6 cursor-pointer">
              ثبت امتیاز تخصصی
            </div>
          </div>
          <!-- <hx-form-item v-slot="{ field }" prop="score" :rules="[{ required: true }]" label="عنوان" class="col-span-12">

          </hx-form-item> -->

          <hx-form-item v-slot="{ field }" prop="title" :rules="[{ required: true }]" label="عنوان" class="col-span-12">
            <hx-input v-bind="field" v-model="form.title" placeholder="عنوان نظر"></hx-input>
          </hx-form-item>

          <hx-form-item v-slot="{ field }" label="متن نظر" prop="content" :rules="[{ required: true }]"
            class="col-span-12">
            <hx-textarea v-bind="field" v-model="form.content" placeholder="متن نظر"></hx-textarea>
          </hx-form-item>
          <div>
            <hx-button :loading="loader" @click="create()">ثبت نظر</hx-button>
          </div>
        </hx-form>
      </div>
    </hx-dialog>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
// @ts-nocheck
import ApiService from "@/core/services/ApiService";
import { onMounted, ref, watch } from "vue";
import { HxStepper } from "@/components/base/stepper";

const props = defineProps({
  comments: {}
})


watch(
  () => props.comments,
  (val) => {
    console.log("watch comments", val);
  }
);
const formRef = ref();
const visiable_dialog = ref(true)
const loader = ref(false)
const scores = ref([])
const form = ref({
  title: null,
  content: null,
  scores: [],
  is_anonymous: true,
  is_recommendation: true,
  advantages: [],
  disadvantages: [],
});

const create = async () => {
  if (!formRef.value) return;
  formRef.value.validate(async (valid) => {
    if (valid) {
      try {
        loader.value = true;

        const formData = {
          title: form.value.title,

        };

        const { data } = await ApiService.post(
          "user/profile/addresses",
          formData
        );

        // if (data.success) {
        //   await emit("create");
        // }
        visiable_dialog.value = false;
        loader.value = false;
      } catch (error) {
        console.error(error);
      }
    } else {
      return false;
    }
  });
};

const openNewCommentDialog = () => {
  visiable_dialog.value = true
}

onMounted(() => {
  props.comments.scores.map((score, index) => {
    console.log("score", score);
    const key = score.id;
    scores.value[index] = 50
  })
})

</script>

<style scoped>

</style>
