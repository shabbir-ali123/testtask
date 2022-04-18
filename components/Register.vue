<template>
  <div class="primary min-h-screen">
    <div class="md:flex justify-center items-center gap-4 py-10 mx-8">
      <div class="md:col-span-6">
        <h3 class="register text-6xl text-white font-bold">Register</h3>
        <div>
          <div class="absolute mt-6 px-8">
            <svg
              width="36"
              height="30"
              viewBox="0 0 36 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.8896 28.1219V25.2033C23.8896 23.6552 23.2746 22.1704 22.18 21.0757C21.0853 19.9811 19.6005 19.3661 18.0524 19.3661H7.83724C6.28911 19.3661 4.80438 19.9811 3.70969 21.0757C2.61499 22.1704 2 23.6552 2 25.2033V28.1219"
                stroke="white"
                stroke-width="3.50234"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.9464 13.5288C16.1702 13.5288 18.7837 10.9154 18.7837 7.69161C18.7837 4.46779 16.1702 1.85437 12.9464 1.85437C9.72261 1.85437 7.10919 4.46779 7.10919 7.69161C7.10919 10.9154 9.72261 13.5288 12.9464 13.5288Z"
                stroke="white"
                stroke-width="3.50234"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M29.7288 9.15088V17.9067"
                stroke="white"
                stroke-width="3.50234"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M34.1071 13.529H25.3512"
                stroke="white"
                stroke-width="3.50234"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div>
            <input
              v-model="userData.username"
              type="text"
              placeholder="Username 6-16 karakter standar"
              style="background-color: #28223c"
              class="w-full px-24 py-5 mt-2 blue text-white rounded-sm outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div class="">
            <div class="absolute mt-6 px-8">
              <svg
                width="31"
                height="34"
                viewBox="0 0 31 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.4492 15.593H5.0189C3.40699 15.593 2.10028 16.8997 2.10028 18.5116V28.7268C2.10028 30.3387 3.40699 31.6454 5.0189 31.6454H25.4492C27.0611 31.6454 28.3678 30.3387 28.3678 28.7268V18.5116C28.3678 16.8997 27.0611 15.593 25.4492 15.593Z"
                  stroke="white"
                  stroke-width="3.50234"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.93909 15.593V9.75574C7.93909 7.82058 8.70783 5.96467 10.0762 4.59631C11.4446 3.22794 13.3005 2.4592 15.2356 2.4592C17.1708 2.4592 19.0267 3.22794 20.3951 4.59631C21.7634 5.96467 22.5322 7.82058 22.5322 9.75574V15.593"
                  stroke="white"
                  stroke-width="3.50234"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div class="relative">
              <div class="absolute mt-6 px-8">
                <svg
                  width="31"
                  height="34"
                  viewBox="0 0 31 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.4492 15.593H5.0189C3.40699 15.593 2.10028 16.8997 2.10028 18.5116V28.7268C2.10028 30.3387 3.40699 31.6454 5.0189 31.6454H25.4492C27.0611 31.6454 28.3678 30.3387 28.3678 28.7268V18.5116C28.3678 16.8997 27.0611 15.593 25.4492 15.593Z"
                    stroke="white"
                    stroke-width="3.50234"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.93909 15.593V9.75574C7.93909 7.82058 8.70783 5.96467 10.0762 4.59631C11.4446 3.22794 13.3005 2.4592 15.2356 2.4592C17.1708 2.4592 19.0267 3.22794 20.3951 4.59631C21.7634 5.96467 22.5322 7.82058 22.5322 9.75574V15.593"
                    stroke="white"
                    stroke-width="3.50234"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <div
                @click="HidePass()"
                class="absolute inset-y-0 right-0 top-6 flex items-center px-2"
              >
                <label
                  class="rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer"
                  for="toggle"
                >
                  <svg
                    width="31"
                    height="19"
                    viewBox="0 0 31 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M20.3806 9.05039C20.3806 11.4371 18.361 13.3719 15.8698 13.3719C13.3786 13.3719 11.3591 11.4371 11.3591 9.05039C11.3591 6.66364 13.3786 4.72884 15.8698 4.72884C18.361 4.72881 20.3806 6.66366 20.3806 9.05039ZM15.878 0.0522766C13.2986 0.0637182 10.625 0.691651 8.09413 1.89386C6.21496 2.82326 4.38361 4.1345 2.79391 5.75297C2.01313 6.57914 1.01727 7.77542 0.856262 9.05179C0.87529 10.1574 2.06125 11.5221 2.79391 12.3506C4.28464 13.9055 6.0683 15.1802 8.09413 16.2107C10.4543 17.3561 13.0667 18.0156 15.878 18.0523C18.4598 18.0407 21.1328 17.4055 23.6609 16.2107C25.5401 15.2813 27.3723 13.9691 28.962 12.3506C29.7428 11.5245 30.7387 10.3282 30.8997 9.05179C30.8807 7.94617 29.6947 6.58144 28.962 5.75292C27.4713 4.19802 25.6867 2.92435 23.6609 1.89381C21.3019 0.749259 18.6831 0.0943124 15.878 0.0522766ZM15.8761 2.28671C19.7847 2.28671 22.9532 5.31594 22.9532 9.05277C22.9532 12.7896 19.7847 15.8188 15.8761 15.8188C11.9675 15.8188 8.79897 12.7895 8.79897 9.05277C8.79897 5.31594 11.9675 2.28671 15.8761 2.28671Z"
                      fill="white"
                    />
                  </svg>
                </label>
              </div>
              <input
                id="myInput"
                type="password"
                v-model="userData.password"
                placeholder=" Password (6 karakter atau lebih)"
                style="background-color: #28223c"
                class="w-full px-24 py-5 mt-3 bg-sky-900 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
          </div>
          <div class="relative">
            <div class="absolute mt-6 px-8">
              <svg
                width="31"
                height="34"
                viewBox="0 0 31 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.4492 15.593H5.0189C3.40699 15.593 2.10028 16.8997 2.10028 18.5116V28.7268C2.10028 30.3387 3.40699 31.6454 5.0189 31.6454H25.4492C27.0611 31.6454 28.3678 30.3387 28.3678 28.7268V18.5116C28.3678 16.8997 27.0611 15.593 25.4492 15.593Z"
                  stroke="white"
                  stroke-width="3.50234"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.93909 15.593V9.75574C7.93909 7.82058 8.70783 5.96467 10.0762 4.59631C11.4446 3.22794 13.3005 2.4592 15.2356 2.4592C17.1708 2.4592 19.0267 3.22794 20.3951 4.59631C21.7634 5.96467 22.5322 7.82058 22.5322 9.75574V15.593"
                  stroke="white"
                  stroke-width="3.50234"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div
              @click="AgainPass()"
              class="absolute inset-y-0 right-0 top-6 flex items-center px-2"
            >
              <label
                class="rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label"
                for="toggle"
              >
                <svg
                  width="31"
                  height="19"
                  viewBox="0 0 31 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M20.3806 9.05039C20.3806 11.4371 18.361 13.3719 15.8698 13.3719C13.3786 13.3719 11.3591 11.4371 11.3591 9.05039C11.3591 6.66364 13.3786 4.72884 15.8698 4.72884C18.361 4.72881 20.3806 6.66366 20.3806 9.05039ZM15.878 0.0522766C13.2986 0.0637182 10.625 0.691651 8.09413 1.89386C6.21496 2.82326 4.38361 4.1345 2.79391 5.75297C2.01313 6.57914 1.01727 7.77542 0.856262 9.05179C0.87529 10.1574 2.06125 11.5221 2.79391 12.3506C4.28464 13.9055 6.0683 15.1802 8.09413 16.2107C10.4543 17.3561 13.0667 18.0156 15.878 18.0523C18.4598 18.0407 21.1328 17.4055 23.6609 16.2107C25.5401 15.2813 27.3723 13.9691 28.962 12.3506C29.7428 11.5245 30.7387 10.3282 30.8997 9.05179C30.8807 7.94617 29.6947 6.58144 28.962 5.75292C27.4713 4.19802 25.6867 2.92435 23.6609 1.89381C21.3019 0.749259 18.6831 0.0943124 15.878 0.0522766ZM15.8761 2.28671C19.7847 2.28671 22.9532 5.31594 22.9532 9.05277C22.9532 12.7896 19.7847 15.8188 15.8761 15.8188C11.9675 15.8188 8.79897 12.7895 8.79897 9.05277C8.79897 5.31594 11.9675 2.28671 15.8761 2.28671Z"
                    fill="white"
                  />
                </svg>
              </label>
            </div>
            <input
              id="myInputs"
              type="password"
              v-model="userData.password_again"
              placeholder=" Password sekali lagi"
              style="background-color: #28223c"
              class="w-full px-24 py-5 mt-3 bg-sky-900 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div class="">
            <div class="absolute mt-6 px-6">
              <svg
                width="50"
                height="38"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_203_22)">
                  <path
                    d="M17.1679 9.38553H12.4888L10.929 11.7251H7.80963L6.24992 9.38553H1.5708"
                    stroke="white"
                    stroke-width="1.87165"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.2613 4.0123L1.5708 9.3855V14.0646C1.5708 14.4783 1.73513 14.875 2.02763 15.1675C2.32013 15.46 2.71685 15.6243 3.13051 15.6243H15.6082C16.0218 15.6243 16.4185 15.46 16.711 15.1675C17.0035 14.875 17.1679 14.4783 17.1679 14.0646V9.3855L14.4774 4.0123C14.3483 3.75245 14.1492 3.53376 13.9026 3.38084C13.656 3.22792 13.3716 3.14682 13.0814 3.14667H5.65723C5.36706 3.14682 5.08269 3.22792 4.83608 3.38084C4.58948 3.53376 4.39042 3.75245 4.2613 4.0123V4.0123Z"
                    stroke="white"
                    stroke-width="1.87165"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_203_22">
                    <rect
                      width="18.7165"
                      height="18.7165"
                      fill="white"
                      transform="translate(0.0105591 0.0272522)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <input
              v-model="userData.email"
              type="email"
              placeholder=" Email"
              style="background-color: #28223c"
              class="w-full px-24 py-5 mt-3 bg-sky-900 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div class="">
            <div class="absolute mt-6 px-6">
              <svg
                width="40"
                height="40"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.268 2.31088H5.4695C4.60809 2.31088 3.90979 3.00919 3.90979 3.87059V16.3482C3.90979 17.2097 4.60809 17.908 5.4695 17.908H13.268C14.1294 17.908 14.8277 17.2097 14.8277 16.3482V3.87059C14.8277 3.00919 14.1294 2.31088 13.268 2.31088Z"
                  stroke="white"
                  stroke-width="1.87165"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.36896 14.7886H9.37766"
                  stroke="white"
                  stroke-width="1.87165"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <input
              v-model="userData.phone"
              type="number"
              placeholder=" Telepon"
              style="background-color: #28223c"
              class="w-full px-24 py-5 mt-3 bg-sky-900 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
        </div>
      </div>
      <div class="md:col-span-6">
        <div>
          <div class="absolute mt-6 px-6">
            <svg
              width="40"
              height="40"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.8086 0.82484C11.6654 0.830568 11.5272 0.856344 11.3833 0.892143L1.65027 3.26347C0.498975 3.54557 -0.221302 4.70689 0.0615103 5.8589L1.42617 11.4307C1.50887 11.7626 1.66988 12.0698 1.89572 12.3267C2.12157 12.5835 2.40567 12.7825 2.72424 12.907V11.5646C2.72424 9.5906 4.33019 7.98465 6.30415 7.98465H15.3212L13.9788 2.45799C13.86 1.97758 13.5793 1.55281 13.1838 1.25531C12.7883 0.957808 12.3024 0.805772 11.8079 0.82484H11.8086ZM12.6807 3.91287L13.2628 6.3515L10.8463 6.93288L10.242 4.51644L12.6807 3.91287ZM6.30415 9.41661C5.11849 9.41661 4.15621 10.3789 4.15621 11.5646V17.2924C4.15621 18.4781 5.11849 19.4404 6.30415 19.4404H16.3279C17.5136 19.4404 18.4758 18.4781 18.4758 17.2924V11.5646C18.4758 10.3789 17.5136 9.41661 16.3279 9.41661H6.30415ZM6.30415 10.5579H16.3279C16.8799 10.5579 17.3346 11.0125 17.3346 11.5646V12.2805H5.29748V11.5646C5.29748 11.0125 5.75213 10.5579 6.30415 10.5579ZM5.29748 14.4285H17.3346V17.2924C17.3346 17.8444 16.8799 18.2991 16.3279 18.2991H6.30415C6.03763 18.2976 5.78245 18.191 5.59399 18.0026C5.40553 17.8141 5.29899 17.5589 5.29748 17.2924V14.4285Z"
                fill="white"
              />
            </svg>
          </div>

          <select
            v-model="userData.bank_name"
            placeholder="bank"
            type="text"
            style="background-color: #28223c"
            class="w-full px-24 py-5 mt-2 blue text-white rounded-sm outline-none focus:ring-1 focus:ring-blue-600"
          >
            <option value="BCA">BCA</option>
            <option value="BNI">BNI</option>
            <option value="BCA">BRI</option>
            <option value="CIMB">CIMB</option>
          </select>
          <div class="absolute mt-6 px-6">
            <svg
              width="40"
              height="40"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.6352 12.6273H7.18649V14.1786H5.6352V12.6273ZM9.51343 11.076H14.943V12.6273H9.51343V11.076ZM9.51343 7.97346H14.943V9.52475H9.51343V7.97346ZM5.6352 6.42217H7.18649V11.076H5.6352V6.42217ZM4.85955 3.31958C4.44812 3.31958 4.05354 3.48302 3.76262 3.77394C3.4717 4.06487 3.30826 4.45944 3.30826 4.87087V15.7299C3.30826 16.1414 3.4717 16.5359 3.76262 16.8269C4.05354 17.1178 4.44812 17.2812 4.85955 17.2812H15.7186C16.13 17.2812 16.5246 17.1178 16.8155 16.8269C17.1065 16.5359 17.2699 16.1414 17.2699 15.7299V4.87087C17.2699 4.45944 17.1065 4.06487 16.8155 3.77394C16.5246 3.48302 16.13 3.31958 15.7186 3.31958H4.85955Z"
                fill="white"
              />
            </svg>
          </div>
          <div>
            <input
              v-model="userData.account_number"
              type="text"
              placeholder="No Rekening"
              style="background-color: #28223c"
              class="w-full px-24 py-5 mt-2 blue text-white rounded-sm outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div class="absolute mt-6 px-6">
            <svg
              width="40"
              height="40"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.6352 12.1796H7.18649V13.7309H5.6352V12.1796ZM9.51343 10.6283H14.943V12.1796H9.51343V10.6283ZM9.51343 7.5257H14.943V9.077H9.51343V7.5257ZM5.6352 5.97441H7.18649V10.6283H5.6352V5.97441ZM4.85955 2.87183C4.44812 2.87183 4.05354 3.03527 3.76262 3.32619C3.4717 3.61711 3.30826 4.01169 3.30826 4.42312V15.2822C3.30826 15.6936 3.4717 16.0882 3.76262 16.3791C4.05354 16.67 4.44812 16.8335 4.85955 16.8335H15.7186C16.13 16.8335 16.5246 16.67 16.8155 16.3791C17.1065 16.0882 17.2699 15.6936 17.2699 15.2822V4.42312C17.2699 4.01169 17.1065 3.61711 16.8155 3.32619C16.5246 3.03527 16.13 2.87183 15.7186 2.87183H4.85955Z"
                fill="white"
              />
            </svg>
          </div>
          <div>
            <input
              v-model="userData.account_name"
              type="text"
              placeholder="Nama Rekening"
              style="background-color: #28223c"
              class="w-full px-24 py-5 mt-2 blue text-white rounded-sm outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div class="absolute mt-6 px-6">
            <svg
              width="40"
              height="40"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.6352 12.1796H7.18649V13.7309H5.6352V12.1796ZM9.51343 10.6283H14.943V12.1796H9.51343V10.6283ZM9.51343 7.5257H14.943V9.077H9.51343V7.5257ZM5.6352 5.97441H7.18649V10.6283H5.6352V5.97441ZM4.85955 2.87183C4.44812 2.87183 4.05354 3.03527 3.76262 3.32619C3.4717 3.61711 3.30826 4.01169 3.30826 4.42312V15.2822C3.30826 15.6936 3.4717 16.0882 3.76262 16.3791C4.05354 16.67 4.44812 16.8335 4.85955 16.8335H15.7186C16.13 16.8335 16.5246 16.67 16.8155 16.3791C17.1065 16.0882 17.2699 15.6936 17.2699 15.2822V4.42312C17.2699 4.01169 17.1065 3.61711 16.8155 3.32619C16.5246 3.03527 16.13 2.87183 15.7186 2.87183H4.85955Z"
                fill="white"
              />
            </svg>
          </div>
          <div>
            <input
              type="text"
              placeholder="Username Referal (bila ada)"
              style="background-color: #28223c"
              class="w-full px-24 py-5 mt-2 blue text-white rounded-sm outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
        </div>
      </div>
    </div>
    <Popup :title="koss" />
    <div class="btn flex justify-center items-center max-w-3xl mx-auto">
      <button
        @click="register"
        class="btn px-6 font-bold text-2xl py-4 text-white rounded-md hover:bg-rose-900"
      >
        Register
      </button>
    </div>
  </div>
</template>
<script>
import Popup from "./Popup.vue";
export default {
  name: "Register",
  data() {
    return {
      hidePopup: false,
      userData: {
        username: "",
        password: "",
        password_again: "",
        email: "",
        phone: "",
        bank_name: "",
        account_number: "",
        account_name: "",
      },
    };
  },
  components: {
    Popup,
  },
  methods: {
    HidePass() {
      var x = document.getElementById("myInput");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    },
    AgainPass() {
      var x = document.getElementById("myInputs");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    },
    async register(event) {
      event.preventDefault();

      try {
        const response = await this.$axios.post("register", this.userData);
        //  console.log(response)
        if (response.status == "201") {
          this.hidePopup = true;
        }
      } catch (err) {
        this.response.status = "error";
      }
    },
  },
};
</script>
<style>
.main-wrapper {
  /* padding:50px 0; */
}
.primary {
  background-color: #201b2f;
}

/* .wrapper{
  width: 80%;
  margin-left: 200px;
} */
.register {
  color: white;
  padding: 15px 0;
  /* margin-left: 200px; */
  /* padding: 30px 0; */
}

select {
  color: white;
}
select option {
  color: black;
}
select option:first-child {
  color: white;
}

.white {
  color: white;
}
input {
  background-color: #28223c;
  color: white;
}
.btn {
  color: white;
  background-color: #fd1a79;
  width: 75%;
  /* margin-right: 32px; */
}
</style>
