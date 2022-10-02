<template>
  <div class="page flex flex-row flex-column-fluid">
    <HXAside
      v-if="asideEnabled"
      :lightLogo="themeLightLogo"
      :darkLogo="themeDarkLogo"
    ></HXAside>

    <div class="flex flex-col flex-row-fluid wrapper">
      <!-- <HXHeader title="pageTitle" @show-nav="handleShowNav"></HXHeader> -->

      <div class="content flex flex-col flex-column-fluid">
        <!-- <HXToolbar
          v-if="subheaderDisplay"
          :breadcrumbs="[]"
          title="pageTitle"
        /> -->

        <div class="post flex flex-column-fluid">
          <div
            :class="{
              'container-fluid': contentWidthFluid,
              'container w-full': !contentWidthFluid,
            }"
          >
            <router-view />
          </div>
        </div>
      </div>

      <!-- <HXFooter></HXFooter> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import HXHeader from "@/modules/user/components/header/Header.vue";
import HXFooter from "@/modules/user/components/footer/Footer.vue";
import HXToolbar from "@/modules/user/components/toolbar/Toolbar.vue";
import HXAside from "@/modules/user/components/aside/Aside.vue";

import {
  toolbarDisplay,
  loaderEnabled,
  contentWidthFluid,
  loaderLogo,
  asideEnabled,
  subheaderDisplay,
  themeLightLogo,
  themeDarkLogo,
} from "@/core/helpers/config";

import HtmlClass from "@/core/services/LayoutService";
import { ref, provide, computed } from "vue";
import { useHead } from "@vueuse/head";
useHead({
  title: "پنل کاربر",
  bodyAttrs: {
    class:
      "page-loading-enabled header-fixed header-tablet-and-mobile-fixed toolbar-enabled toolbar-fixed toolbar-tablet-and-mobile-fixed aside-enabled aside-fixed",
  },
});

const active = ref(false);

const handleShowNav = (value: boolean) => {
  active.value = value;
};

provide("show", active);

// HtmlClass.init();
</script>

<style scoped></style>
