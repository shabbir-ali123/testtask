<template>
  <div class="primary flex items-center justify-center min-h-screen">
    <div class="md:px-8 py-6 mx-10 lg:mx-32 mt-4 text-left w-full">
      <h3 style="color: white" class="text-6xl text-white font-bold">Login</h3>
      <p style="color: white" class="text-2xl text-white py-4">
        Masuk dan daptkan bonus tiap minggunya
      </p>
      <form>
        <div class="form_wrapper">
          <div class="grid grid-cols-1">
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
                type="text"
                placeholder="Kartikasar"
                v-model="userData.user_account"
                style="background-color: #28223c"
                class="w-full px-24 py-5 mt-2 blue text-white rounded-sm outline-none focus:ring-1 focus:ring-blue-600"
              />
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
                id="myInput"
                type="password"
                v-model="userData.password"
                placeholder=" Masukana Password"
                style="background-color: #28223c"
                class="w-full px-24 py-5 mt-3 bg-sky-900 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
          </div>
          <div class="grid grid-cols-12 mt-3">
            <div
              style="background-color: #5b32fd; color: white"
              class="col-span-4 md:col-span-3 text-white py-4 px-4 flex justify-evenly items-center"
            >
              <button class="border-r-4 px-2 md:text-xl">Captcha</button>
              <h2 class="font-normal px-3 md:font-bold text-xl md:text-3xl">
                24
              </h2>
            </div>
            <div class="col-span-8 md:col-span-9">
              <input
                type="code"
                placeholder=" Enter this code here"
                class="w-full text-sm px-4 py-6 md:px-10 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
          </div>
          <div class="flex items-baseline justify-between">
            <button
              type="submit"
              @click="login"
              style="color: white"
              class="musak px-6 font-bold text-2xl w-full py-4 mt-4 text-white rounded-sm hover:bg-rose-900"
            >
              Masuk
            </button>
          </div>
          <div class="flex justify-center font-bold py-2">
            <p style="color: white">Belum punya akun?</p>
            <NuxtLink
              style="color: #fd1a79"
              class="px-2 underline text-rose-400"
              to="/Register"
              >Register disini</NuxtLink
            >
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      userData: {
        user_account: "",
        password: "",
      },
    };
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
    async login(event) {
      event.preventDefault();
      try {
        const response = await this.$axios.post("login", this.userData);
        if (response.status == "200") {
          localStorage.setItem("token", response.data.data.token);

          this.$router.push("/Member");
        }
      } catch (err) {
        this.status = "error";
      }
    },
  },
};
</script>

<style>
.textWhite {
  color: #ffff;
}
.primary {
  background-color: #201b2f;
}
input {
  background-color: #28223c;
}
.musak {
  background-color: #fd1a79;
}
</style>
