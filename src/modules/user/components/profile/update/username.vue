<template>
  <div class="col-span-12 md:col-span-12 xl:col-span-3 mb-2">
    <div
      class="bg-gray-50 rounded-xl p-4 flex justify-between items-center cursor-pointer"
      @click="openEditUserInfoModal()"
    >
      <div>
        <div class="text-blue-600 text-xl">
          <span v-if="user?.username">{{ user?.username }}</span>
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
      <Form ref="form" class="h-full space-y-6" @submit="update">
        <hx-form-group label="نام کاربری">
          <Field
            mode="passive"
            name="username"
            v-slot="{ field }"
            rules="required"
            label="نام کاربری"
          >
            <hx-input
              v-bind="field"
              v-model="username"
              placeholder="نام کاربری را وارد کنید"
            ></hx-input>
          </Field>
          <div class="invalid-feedback d-block">
            <ErrorMessage name="username" />
          </div>
        </hx-form-group>
        <div class="text-right mt-4">
          <hx-button type="submit" :loading="loader">ثبت</hx-button>
          <hx-button variant="light" class="mr-1" @click="active = false"
            >لغو</hx-button
          >
        </div>
      </Form>
    </hx-modal>
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck
import { ref, watchEffect } from "vue";
import ApiService from "@/core/services/ApiService";
import { useUserStore } from "@/modules/user";
import { storeToRefs } from "pinia";
import { ErrorMessage, Field, Form } from "vee-validate";
import { HxNotification } from "@/components/base/notification";
const emit = defineEmits(["update", "close"]);
const store = useUserStore();
const { user } = storeToRefs(store);
const username = ref<any>(store.user.username);
const loader = ref<boolean>(false);
const form = ref(null);
const active = ref<boolean>(false);
const update = async () => {
  const data = {
    username: username.value,
  };
  try {
    loader.value = true;
    await ApiService.post("user/profile/update/username", data);
    loader.value = false;
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
  } catch (error) {
    loader.value = false;
    console.error;
  }
};

watchEffect(() => {
  if (form.value) {
    form.value.setValues({
      username: username.value,
    });
  }
});

const openEditUserInfoModal = () => {
  active.value = true;
};
</script>

<style scoped></style>
