<template>
  <div>
    <div
      class="bg-white shadow-lg lg:bg-transparent lg:shadow-transparent lg:border rounded-xl mb-4"
    >
      <div class="p-5">
        <h2 class="text-xl mb-6">آدرس تحویل سفارش</h2>

        <div class="flex flex-col lg:flex-row lg:items-center justify-between">
          <div>
            <h5 class="text-gray-600">
              {{ default_address?.address }}
            </h5>
            <div class="flex items-center">
              <div class="ml-2">
                <span class="text-sm text-gray-500 ml-2">کد پستی : </span>
                <span class="text-sm"> {{ default_address?.postal_code }}</span>
              </div>

              <div class="">
                <span class="text-gray-500 ml-2"> گیرنده : </span>
                <span class="text-sm"> {{ default_address?.username }}</span>
                <span class="mx-2">-</span>
                <span class="text-sm"> {{ default_address?.mobile }}</span>
              </div>
            </div>
          </div>

          <div class="mt-6 flex justify-end">
            <div
              class="flex items-center text-blue-600 cursor-pointer"
              @click="openAddressModal"
            >
              <span class="ml-2">تغییر آدرس</span>
              <hx-icon class="w-5 h-5" icon="chevron-left"></hx-icon>
            </div>

            <hx-dialog v-model="activeAddressModal" title="تغییر آدرس">
              <div class="flex flex-col items-start">
                <div class="p-2">
                  <hx-radio-group
                    @change="changeAddressHandler"
                    v-model="selected_address"
                  >
                    <hx-radio
                      v-for="(address, index) in addresses"
                      class="flex border-b py-4 cursor-pointer"
                      name="default_address"
                      :label="address.id"
                      :value="address.id"
                    >
                      <div class="flex-grow">
                        <h6 class="text-right text-gray-600">
                          {{ address?.address }}
                        </h6>
                        <div class="flex flex-col space-y-4 mt-4">
                          <div class="flex items-center">
                            <span class="ml-2">
                              <hx-icon
                                class="w-6 h-6 text-gray-500"
                                icon="envelope"
                              ></hx-icon>
                            </span>

                            <span> {{ address?.postal_code }}</span>
                          </div>

                          <div class="flex items-center">
                            <span class="ml-2">
                              <hx-icon
                                class="w-6 h-6 text-gray-500"
                                icon="mobile"
                              ></hx-icon>
                            </span>

                            <span> {{ address?.mobile }}</span>
                          </div>

                          <div class="flex items-center">
                            <span class="ml-2">
                              <hx-icon
                                class="w-6 h-6 text-gray-500"
                                icon="user"
                              ></hx-icon>
                            </span>

                            <span> {{ address?.username }}</span>
                          </div>

                          <div class="flex items-center">
                            <span class="ml-2">
                              <hx-icon
                                class="w-6 h-6 text-gray-500"
                                icon="trip"
                              ></hx-icon>
                            </span>

                            <span> {{ address?.building_number }}</span>
                          </div>
                        </div>
                      </div>
                    </hx-radio>
                  </hx-radio-group>
                </div>
              </div>
            </hx-dialog>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck
import { ref, watch } from "vue";
import ApiService from "@/core/services/ApiService";

const props = defineProps({
  defaultAddress: {
    type: Object,
  },
});

const activeAddressModal = ref<boolean>(false);
const selected_address = ref(null);
const addresses = ref<Address<any>>([]);
const default_address = ref(props.defaultAddress || {});

const openAddressModal = () => {
  activeAddressModal.value = true;
};

const changeAddressHandler = () => {
  const formData = {
    address_id: selected_address.value,
  };
  ApiService.post("shipment/address/change", formData).then(({ data }) => {
    default_address.value = data.data;
    activeAddressModal.value = false;
  });
};

watch(
  () => props.defaultAddress,
  (val, prev) => {
    selected_address.value = val.id;
    default_address.value = val;
  }
);

ApiService.get("user/profile/addresses").then(({ data }) => {
  addresses.value = data.data;
});
</script>

<style scoped></style>
