<template>
  <div class="nav py-5">
    <div class="flex justify-between align-center max-w-6xl mx-auto">
      <div class="text-xl font-extrabold">
        <h2 class="white">LOGO</h2>
      </div>
      <div class="flex justify-arround px-2">
        <div class="user">
          <h2 class="white">{{ data.username && data.username }}</h2>
          <p>{{ data.email && data.email }}</p>
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
  props: ["user"],
  data() {
    return {
      data: {
        email: "",
        username: "",
      },
      currentEmail: "",
      // user: JSON.parse(localStorage.getItem("user_object")),
    };
  },
  mounted() {
    console.log(this.user);
    if (this.user && this.user.username) {
      this.data = this.user;
    } else {
      this.data = JSON.parse(
        localStorage.user_object || '{"email": "", "username":""}'
      );
    }
  },

  methods: {
    redirect() {
      this.$router.push("/");
      localStorage.clear();
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
