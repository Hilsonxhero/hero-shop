<template>
  <div class="col-span-12 md:col-span-12 xl:col-span-3 mb-2">
    <div
      class="bg-gray-50 rounded-xl p-4 flex justify-between items-center cursor-pointer"
      @click="openEditUserInfoModal()"
    >
      <div>
        <div class="text-blue-600 text-xl">
          <span>رمز عبور</span>
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
        <template v-if="user.has_password">
          <hx-form-group label="رمز عبور فعلی">
            <Field
              mode="passive"
              name="current_password"
              v-slot="{ field }"
              rules="required"
              label="رمز عبور فعلی"
            >
              <hx-input
                v-bind="field"
                v-model="current_password"
                placeholder="رمز عبور فعلی را وارد کنید"
              ></hx-input>
            </Field>
            <div class="invalid-feedback d-block">
              <ErrorMessage name="current_password" />
            </div>
          </hx-form-group>
        </template>

        <hx-form-group label="رمز عبور جدید">
          <Field
            mode="passive"
            name="password"
            v-slot="{ field }"
            rules="required"
            label="رمز عبور جدید"
          >
            <hx-input
              v-bind="field"
              v-model="password"
              placeholder="رمز عبور جدید را وارد کنید"
            ></hx-input>
          </Field>
          <div class="invalid-feedback d-block">
            <ErrorMessage name="password" />
          </div>
        </hx-form-group>

        <hx-form-group label="تکرار رمز عبور جدید">
          <Field
            mode="passive"
            name="confirmation"
            v-slot="{ field }"
            rules="required"
            label="تکرار رمز عبور جدید"
          >
            <hx-input
              v-bind="field"
              v-model="password_confirmation"
              placeholder="تکرار رمز عبور را وارد کنید"
            ></hx-input>
          </Field>
          <div class="invalid-feedback d-block">
            <ErrorMessage name="confirmation" />
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
const current_password = ref<any>(null);
const password = ref<any>(null);
const password_confirmation = ref<any>(null);
const loader = ref<boolean>(false);
const form = ref(null);
const active = ref<boolean>(false);
const update = async () => {
  const data = {
    current_password: current_password.value,
    password: password.value,
    password_confirmation: password_confirmation.value,
  };
  try {
    loader.value = true;
    const { data: response } = await ApiService.post(
      "user/profile/update/password",
      data
    );
    loader.value = false;
    active.value = false;
    current_password.value = "";
    password.value = "";
    password_confirmation.value = "";
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
  } catch ({ response }) {
    loader.value = false;
    form.value.setErrors(response.data.data);
  }
};

watchEffect(() => {
  if (form.value) {
    // form.value.setValues({
    //   password: password.value,
    // });
  }
});

const openEditUserInfoModal = () => {
  active.value = true;
};
</script>

<style scoped></style>
