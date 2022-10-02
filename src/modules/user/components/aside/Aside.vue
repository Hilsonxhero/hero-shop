<template>
  <!--begin::Aside-->
  <div
    ref="asideRef"
    class="hx-aside aside aside-hoverable drawer-end"
    :class="[
      asideTheme === 'light' && 'aside-light',
      asideTheme === 'dark' && 'aside-dark',
      show && 'drawer-on',
    ]"
  >
    <!--begin::Brand-->
    <div class="aside-logo flex-column-auto py-6">
      <!--begin::Logo-->
      <router-link
        :to="{ name: 'landing' }"
        class="mx-auto flex justify-center"
        href="#"
        v-if="asideTheme === 'dark'"
      >
        <!-- <img alt="Logo" :src="darkLogo" class="h-25px logo" /> -->
        <hx-icon icon="logo" class=""></hx-icon>
      </router-link>
      <router-link
        :to="{ name: 'landing' }"
        class="mx-auto flex justify-center w-1/2"
        href="#"
        v-if="asideTheme === 'light'"
      >
        <!-- <img alt="Logo" :src="lightLogo" class="h-25px logo" /> -->
        <hx-icon icon="logo" class=""></hx-icon>
      </router-link>
      <!--end::Logo-->

      <!--begin::Aside toggler-->
      <div
        class="btn btn-icon w-auto px-0 btn-active-color-primary aside-toggle"
      >
        <span class="svg-icon svg-icon-1 rotate-180"> </span>
      </div>
      <!--end::Aside toggler-->
    </div>
    <!--end::Brand-->

    <!--begin::Aside menu-->
    <div class="aside-menu flex-column-fluid">
      <HXMenu></HXMenu>
    </div>
    <!--end::Aside menu-->

    <!--begin::Footer-->
    <div class="aside-footer flex-column-auto pt-5 pb-7 px-5">
      <div href="">
        <div class="flex">
          <div>
            <hx-avatar
              src="/media/faces/2.jpg"
              fit="cover"
              shape="circle"
              @click="showUserDialog"
            ></hx-avatar>

            <hx-modal
              :show="active"
              title="حساب کاربری"
              @close="active = !active"
            >
              <h1>{{ user?.phone }}</h1>
              <hx-button variant="danger" @click="handleLogout"
                >خروج از حساب کاربری</hx-button
              >
            </hx-modal>
          </div>
          <div class="mr-2 w-full">
            <div class="">
              <h5>{{ store.user?.username }}</h5>
            </div>
            <h3 class="text-gray-500">{{ user?.phone }}</h3>
          </div>
        </div>

        <span class="svg-icon btn-icon svg-icon-2"> </span>
      </div>
    </div>
    <hx-overlay :active="show"></hx-overlay>
    <!--end::Footer-->
  </div>
  <!--end::Aside-->
</template>

<script setup lang="ts">
//@ts-nocheck
import HXMenu from "@/modules/user/components/aside/Menu.vue";
import { asideTheme } from "@/core/helpers/config";
import { ref, inject } from "vue";
// import { useI18n } from "vue-i18n/index";

import { useLocale } from "@/core/hooks";
import useClickOutside from "@/core/hooks/useClickOutside";

import { useUserStore } from "@/modules/user";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const store = useUserStore();
const { user } = storeToRefs(store);

const router = useRouter();

const props = defineProps({
  lightLogo: {
    type: String,
  },
  darkLogo: {
    type: String,
  },
  // show: {
  //   type: Boolean,
  // },
});
const asideRef = ref(null);

const show = inject("show", false);

const active = ref(false);

const { onClickOutside } = useClickOutside();

onClickOutside(asideRef, () => {
  if (show.value === true) {
    show.value = false;
  }
});

const showUserDialog = () => {
  active.value = !active.value;
};

const handleLogout = async () => {
  try {
    await store.logout();
    router.push({ name: "auth" });
  } catch (error) {}
};

// const handleShowNav = (value: boolean) => {
//   active.value = value;
// };

const { t } = useLocale();
</script>

<style scoped></style>
