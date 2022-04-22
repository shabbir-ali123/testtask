<template>
  <div class="nav py-5">
    <div class="flex justify-between align-center max-w-6xl mx-auto">
      <div class="text-xl font-extrabold">
        <h2 class="white">LOGO</h2>
      </div>
      <div class="flex justify-arround px-2">
        <div class="user">
          <h2 class="white">{{ loginUser && loginUser }}</h2>
          <p>user.email</p>
        </div>
        <div class="logout mx-4">
          <button @click="redirect" class="white px-8 py-3 rounded-lg">
            Logout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginUser: "",
    };
  },
  mounted() {
    this.loginUser = localStorage.getItem("user");
  },

  methods: {
    redirect() {
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
.nav {
  background-color: #393153;
}

.user {
  color: #858585;
}

.logout button {
  background-color: #e95750;
}
</style>
