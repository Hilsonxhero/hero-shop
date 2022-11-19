<template>
  <div class="col-span-4 bg-gray-100 rounded-xl p-4">
    <div class="flex">
      <div class="flex h-full flex-col">
        <h4 class="text-xl">آدرس های شما</h4>
        <p class="mt-3 h-full grow">
          برای ارسال کالا به آدرس انتخابی شما میتوانید آدرس های خود را اینجا ثبت
          کنید
        </p>
        <div class="mt-3">
          <hx-button @click="active = true">افزودن آدرس جدید</hx-button>
        </div>
      </div>
      <div>
        <hx-icon icon="address" class="w-full h-full"></hx-icon>
      </div>
    </div>
  </div>

  <hx-dialog title="مشخصات آدرس" width="40%" v-model="active">
    <div>
      <hx-form
        ref="formRef"
        :model="form"
        labhx-width="100px"
        class="demo-ruleForm grid grid-cols-12 gap-2"
      >
        <hx-form-item
          label=" نشانی پستی"
          prop="address"
          :rules="[{ required: true, message: 'نشانی پستی ضروری می باشد' }]"
          class="col-span-12"
        >
          <hx-textarea
            v-model="form.address"
            placeholder=" نشانی پستی را وارد کنید"
          ></hx-textarea>
        </hx-form-item>

        <hx-form-item
          prop="state"
          :rules="[{ required: true, message: ' استان ضروری می باشد' }]"
          label="  استان"
          class="col-span-6"
        >
          <hx-select
            v-model="form.state"
            filterable
            placeholder=" استان"
            value-key="id"
            label="name"
            :options="states"
            @change="handleChangeState"
          >
          </hx-select>
        </hx-form-item>
        <hx-form-item
          prop="city"
          :rules="[{ required: true, message: ' شهر ضروری می باشد' }]"
          label="  شهر"
          class="col-span-6"
        >
          <hx-select
            v-bind="field"
            v-model="form.city"
            filterable
            placeholder=" شهر"
            value-key="id"
            label="name"
            :options="cities"
          >
          </hx-select>
        </hx-form-item>

        <hx-form-item
          prop="building_number"
          :rules="[{ required: true, message: ' پلاک ضروری می باشد' }]"
          label="پلاک"
          class="col-span-3"
        >
          <hx-input v-bind="field" v-model="form.building_number"></hx-input>
        </hx-form-item>
        <hx-form-item
          prop="unit"
          :rules="[{ required: true, message: ' واحد ضروری می باشد' }]"
          label="واحد"
          class="col-span-3"
        >
          <hx-input v-bind="field" v-model="form.unit"></hx-input>
        </hx-form-item>
        <hx-form-item
          prop="postal_code"
          :rules="[{ required: true, message: 'کد پستی ضروری می باشد' }]"
          label="کد پستی"
          class="col-span-6"
        >
          <hx-input v-bind="field" v-model="form.postal_code"></hx-input>
        </hx-form-item>

        <div>
          <hx-button :loading="loader" @click="create(formRef)"
            >ثبت آدرس</hx-button
          >
        </div>
      </hx-form>
    </div>
  </hx-dialog>
</template>

<script setup lang="ts">
// @ts-nocheck
import { onMounted, ref } from "vue";
import ApiService from "@/core/services/ApiService";

const formRef = ref();

const emit = defineEmits(["create"]);

const loader = ref<boolean>(false);
const active = ref<boolean>(false);
const states = ref([]);
const cities = ref([]);
const form = ref({
  address: "",
  state: null,
  city: null,
  postal_code: "",
  unit: "",
  building_number: "",
  is_default: 0,
});

const create = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (valid) {
      try {
        loader.value = true;

        const formData = {
          state_id: form.value.state,
          city_id: form.value.city,
          address: form.value.address,
          postal_code: form.value.postal_code,
          is_default: form.value.is_default,
          building_number: form.value.building_number,
          unit: form.value.unit,
        };

        const { data } = await ApiService.post(
          "user/profile/addresses",
          formData
        );

        // if (data.success) {
        //   await emit("create");
        // }

        emit("create");

        active.value = false;
        loader.value = false;
      } catch (error) {
        console.error(error);
      }
    } else {
      return false;
    }
  });
};

const handleChangeState = (query) => {
  ApiService.get(`states/${form.value.state}/cities`).then(({ data }) => {
    cities.value = data.data;
  });
};

onMounted(async () => {
  const { data } = await ApiService.get("states");
  states.value = data.data;
});
</script>

<style scoped></style>
