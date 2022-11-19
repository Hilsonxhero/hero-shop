<template>
  <div class="col-span-12 md:col-span-12 xl:col-span-3 mb-2">
    <div
      class="bg-gray-50 rounded-xl p-4 flex justify-between items-center cursor-pointer"
      @click="openEditUserInfoModal()"
    >
      <div>
        <div class="text-blue-600 text-xl">
          <span v-if="user?.phone">{{ user?.phone }}</span>
          <span v-else>نام کاربری</span>
        </div>
        <div class="text-sm text-gray-400 mt-1">برای ثبت کلیک کنید</div>
      </div>
      <div>
        <hx-icon icon="arrow-left" class="w-6 h-6 text-gray-500"></hx-icon>
      </div>
    </div>

    <hx-modal
      :show="active"
      title="ویرایش اطلاعات کاربری"
      @close="active = !active"
    >
      <template v-if="!show">
        <Request v-model="form" @close="cancel" />
      </template>
      <template v-else>
        <Verify :data="form" @close="cancel" @update="update" />
      </template>
    </hx-modal>
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from "vue";
import { useUserStore } from "@/modules/user";
import { storeToRefs } from "pinia";
import { HxNotification } from "@/components/base/notification";
import Request from "@/modules/user/components/profile/update/mobile/request.vue";
import Verify from "@/modules/user/components/profile/update/mobile/verify.vue";
const emit = defineEmits(["update", "close"]);
const show = ref<boolean>(false);
const form = ref<object>({});
const active = ref<boolean>(false);
const store = useUserStore();
const { user } = storeToRefs(store);
provide("show", show);

const cancel = () => {
  active.value = false;
};
const update = () => {
  active.value = false;
  HxNotification.success({
    title: "ویرایش مشخصات کاربری",
    message: "عملیات ویرایش با موفقیت انجام شد",
    showClose: true,
    duration: 3000,
    position: "bottom-center",
  });
  store
    .personalInfo()
    .then(() => {})
    .catch((e) => {});
};

const openEditUserInfoModal = () => {
  active.value = true;
};
</script>

<style scoped></style>
