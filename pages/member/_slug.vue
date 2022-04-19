<template>
  <div class="primary d-flex items-center justify-center w-full min-h-screen">
    <div class="md:px-8 py-4 mx-32 lg:mx-20">
      <form>
        <div class="max-w-4xl mx-auto">
          <h2 class="main__heading text-2xl py-8">
            Update Member: {{ userData && userData.username }}
          </h2>
          <div class="grid grid-cols-1 text-white">
            <label for="">username</label>
            <div class="relative">
              <div class="absolute mt-6 px-8">
                <SvgLoginSvg />
              </div>
              <input
                :value="userData && userData.username"
                type="text"
                style="background-color: #28223c"
                class="readOnly w-full px-24 py-5 mt-3 bg-sky-900 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                readonly
              />
            </div>
            <label for="">Bank</label>
            <div class="relative w-full">
              <div class="absolute mt-6 px-8">
                <SvgBank />
              </div>
              <select
                :input="userData && userData.name_bank"
                @input="
                  (userData.name_bank = JSON.parse($event.target.value)),
                    (isChange = true),
                    (currentBank = $event.target.value)
                "
                placeholder="bank"
                type="text"
                style="background-color: #28223c"
                class="w-full px-24 py-5 mt-2 blue text-white rounded-sm outline-none focus:ring-1 focus:ring-blue-600"
              >
                <option :value="currentBank" selected v-if="!isChange" disabled>
                  {{ userData && userData.name_bank }}
                </option>
                <option
                  v-for="bank in banks"
                  :value="JSON.stringify({ id: bank.id, name: bank.name })"
                  :key="bank.id"
                >
                  {{ bank.name }}
                </option>
              </select>
            </div>
            <label for="">Email</label>
            <div class="relative">
              <div class="absolute mt-6 px-6">
                <SvgEmail />
              </div>

              <input
                v-model="userData && userData.email"
                type="email"
                placeholder=" Email"
                style="background-color: #28223c"
                class="w-full px-24 py-5 mt-3 bg-sky-900 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <label for="">Phone</label>
            <div class="relative">
              <div class="absolute mt-6 px-6">
                <SvgPhone />
              </div>

              <input
                v-model="userData && userData.phone"
                type="number"
                placeholder=" Telepon"
                style="background-color: #28223c"
                class="w-full px-24 py-5 mt-3 bg-sky-900 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
          </div>

          <div class="flex justify-center w-full py-4">
            <button
              type="submit"
              @click="Back()"
              style="color: white"
              class="btn1 px-6 font-bold text-2xl py-4 mt-4 text-white rounded-lg w-full mx-2 hover:bg-rose-900"
            >
              Back
            </button>
            <button
              @click="updateAccount($event)"
              class="musak px-6 font-bold text-2xl py-4 mt-4 text-white w-full mx-2 rounded-lg hover:bg-rose-900"
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userData: this.$session && this.$session.get("member"),
      banks: [],
      isChange: false,
      currentBank: null,
    };
  },
  mounted() {
    this.getBankList();
  },
  methods: {
    async getBankList() {
      try {
        const list = await this.$axios.get("/bank/bank_wd", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            secret: "secret",
          },
        });
        this.banks = list.data.data.bank;
        this.banks.forEach((element) => {
          if (
            this.userData.name_bank.toUpperCase() === element.name.toUpperCase()
          ) {
            this.currentBank = element.id;
          }
        });
      } catch (err) {}
    },
    async updateAccount(event) {
      event.preventDefault();
      this.userData.name_bank =
        this.userData.name_bank && this.userData.name_bank.name;
      const { id } = JSON.parse(this.currentBank);
      if (this.isChange) {
        this.userData["bank_name"] = id;
      } else {
        this.userData["bank_name"] = this.currentBank;
      }
      console.log(this.userData);
      try {
        const response = await this.$axios.post(
          "/member/updateAccount",
          this.userData,

          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        this.Back();
      } catch (e) {
        this.$toast.error("please fill fields correctly");
        setTimeout(this.$toast.clear, 4000);
      }
    },
    Back() {
      this.$router.push("/member");
    },
  },
};
</script>
<style scoped>
.readOnly {
  color: #fdd032;
  opacity: 1; /* Firefox */
}
label {
  margin-top: 10px;
  color: white;
  text-transform: capitalize;
}

.btn1 {
  background-color: #1a82fd;
}
.musak {
  color: white;
}
.main__heading {
  color: #fd1a79;
  font-weight: 800;
}
</style>
