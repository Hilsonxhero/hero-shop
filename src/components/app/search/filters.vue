<template>
  <div class="w-full">
    <div class="flex flex-col space-y-4">
      <div class="bg-gray-100 rounded-xl p-3">
        <h4 class="text-gray-800">جستجو در کالاها</h4>
        <div class="w-full mt-4">
          <hx-input
            class="border-2 border-gray-300"
            type="search"
            placeholder="نام کالا یا برند را وارد کنید .."
          ></hx-input>
        </div>
      </div>
      <div class="bg-gray-100 rounded-xl p-3">
        <div class="w-full border-b-2 pb-4">
          <hx-switch
            class="flex items-center flex-row-reverse"
            label="فقط کالا های موجود"
            name="test"
            value="2"
          ></hx-switch>
        </div>

        <div class="border-b-2 pb-8">
          <div
            class="flex justify-evenly items-center space-x-3 space-x-reverse my-6"
          >
            <span>از</span>
            <div class="relative lg:max-w[6rem] h-10 rounded-xl">
              <input
                v-model="minPriceInp"
                @input="handlePriceInput"
                placeholder=""
                type="text"
                class="input-min block text-right w-full h-full outline-none bg-gray-100 transition-all ease-out duration-200 pl-12 pr-2 text-sm rounded-inherit border-2 border-gray-300 focus:bg-white focus:border-blue-500"
              />

              <div
                class="absolute text-sm inset-y-0 z-10 left-0 top-0 flex items-center justify-center w-12"
              >
                تومان
              </div>
            </div>
            <span>تا</span>

            <div class="relative lg:max-w[6rem] h-10 rounded-xl">
              <input
                v-model="maxPriceInp"
                @input="handlePriceInput"
                placeholder=""
                type="text"
                class="block w-full h-full outline-none text-right bg-gray-100 transition-all ease-out duration-200 pl-12 pr-2 text-sm rounded-inherit border-2 border-gray-300 focus:bg-white focus:border-blue-500"
              />

              <div
                class="absolute text-sm inset-y-0 z-10 left-0 top-0 flex items-center justify-center w-12"
              >
                تومان
              </div>
            </div>
          </div>

          <div>
            <div class="slider">
              <div class="progress" ref="progress"></div>
            </div>
            <div class="range-input">
              <input
                ref="minvalInpRef"
                type="range"
                class="range-min"
                min="1000"
                max="200000000"
                step="5000"
                v-model="minvalInp"
                @input="handleRangeInput"
              />
              <input
                ref="maxvalInpRef"
                type="range"
                class="range-max"
                min="1000"
                max="200000000"
                step="5000"
                v-model="maxValInp"
                @input="handleRangeInput"
              />
            </div>
          </div>
        </div>

        <div class="">
          <div class="py-4">
            <hx-collapse accordion>
              <collapse-item
                class="border-b-2 mb-4"
                v-for="(item, index) in 4"
                title="رنگ"
                :name="index"
              >
                <div
                  class="flex max-h-[13rem] overflow-y-auto flex-col space-y-4 px-2"
                >
                  <div v-for="(item, index) in 10">
                    <hx-checkbox
                      class="flex items-center"
                      label="مشکی"
                    ></hx-checkbox>
                  </div>
                </div>
              </collapse-item>
            </hx-collapse>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const minvalInp = ref<any>(1000);
const maxValInp = ref<any>(200000000);

const minPriceInp = ref<any>(null);
const maxPriceInp = ref<any>(null);

let priceGap = ref<any>(1000);

let progress = ref<any>(null);

let minvalInpRef = ref<any>(null);

let maxvalInpRef = ref<any>(null);

const handleRangeInput = (e: any) => {
  let minVal = parseInt(minvalInp.value),
    maxVal = parseInt(maxValInp.value);

  if (maxVal - minVal < priceGap.value) {
    if (e.target.className === "range-min") {
      console.log("here");

      minvalInp.value = maxVal - priceGap.value;
    } else {
      maxValInp.value = minVal + priceGap.value;
    }
  } else {
    maxPriceInp.value = maxVal;
    minPriceInp.value = minVal;
    progress.value.style.right = (minVal / minvalInpRef.value.max) * 100 + "%";
    progress.value.style.left =
      100 - (maxVal / maxvalInpRef.value.max) * 100 + "%";
  }
};
const handlePriceInput = (e: any) => {
  let minPrice = parseInt(minPriceInp.value),
    maxPrice = parseInt(maxPriceInp.value);

  // maxPrice - minPrice >= priceGap.value &&

  if (
    maxPrice - minPrice >= priceGap.value &&
    maxPrice <= parseInt(maxvalInpRef.value.max)
  ) {
    if (e.target.classList.contains("input-min")) {
      minvalInp.value = minPrice;
      progress.value.style.right =
        (minPrice / minvalInpRef.value.max) * 100 + "%";
    } else {
      console.log("here max");
      // maxPrice = parseInt(maxPriceInp.value);
      maxValInp.value = maxPrice;
      progress.value.style.left =
        100 - (maxPrice / maxvalInpRef.value.max) * 100 + "%";
      console.log("maxPrice", maxPrice);
    }
  }
};

onMounted(() => {
  minPriceInp.value = minvalInp.value;
  maxPriceInp.value = maxValInp.value;
});
</script>

<style scoped>
.price-input {
  width: 100%;
  display: flex;
  margin: 30px 0 35px;
}
.price-input .field {
  display: flex;
  width: 100%;
  height: 45px;
  align-items: center;
}
.field input {
  width: 100%;
  height: 100%;
  outline: none;
  font-size: 19px;
  margin-left: 12px;
  border-radius: 5px;
  text-align: center;
  border: 1px solid #999;
  -moz-appearance: textfield;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.price-input .separator {
  width: 130px;
  display: flex;
  font-size: 19px;
  align-items: center;
  justify-content: center;
}
.slider {
  height: 5px;
  position: relative;
  background: #ddd;
  border-radius: 5px;
}
.slider .progress {
  height: 100%;
  left: 0;
  right: 0;
  position: absolute;
  border-radius: 5px;
  background: #333;
}
.range-input {
  position: relative;
}
.range-input input {
  position: absolute;
  width: 100%;
  height: 5px;
  top: -5px;
  background: none;
  pointer-events: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
input[type="range"]::-webkit-slider-thumb {
  height: 17px;
  width: 17px;
  border-radius: 50%;
  background: #333;
  cursor: pointer;
  pointer-events: auto;
  -webkit-appearance: none;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
}
input[type="range"]::-moz-range-thumb {
  height: 17px;
  width: 17px;
  border: none;
  border-radius: 50%;
  background: #333;
  pointer-events: auto;
  -moz-appearance: none;
  cursor: pointer;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
}
</style>
