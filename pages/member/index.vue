<template>
  <div class="main__wrapper">
    <Header :user="loggedInUser" />
    <div class="min-h-screen max-w-6xl mx-auto">
      <div class="flex justify-between items-center mx-10 py-10">
        <div class="flex items-center">
          <h2 class="text-secondary text-3xl font-extrabold">Member List</h2>
        </div>
        <div>
          <div class="searchBar pt-2 relative mx-auto text-gray-600">
            <button type="submit" class="absolute left-0 top-0 mt-5 ml-4">
              <svg
                width="20"
                height="29"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.28755 15.5725C9.93606 15.5721 11.5371 15.0203 12.8356 14.0047L16.9184 18.0875L18.2317 16.7743L14.1489 12.6915C15.1649 11.3928 15.7172 9.7914 15.7176 8.14247C15.7176 4.04575 12.3843 0.712463 8.28755 0.712463C4.19083 0.712463 0.857544 4.04575 0.857544 8.14247C0.857544 12.2392 4.19083 15.5725 8.28755 15.5725ZM8.28755 2.56996C11.3608 2.56996 13.86 5.06923 13.86 8.14247C13.86 11.2157 11.3608 13.715 8.28755 13.715C5.21431 13.715 2.71504 11.2157 2.71504 8.14247C2.71504 5.06923 5.21431 2.56996 8.28755 2.56996Z"
                  fill="white"
                />
              </svg>
            </button>
            <div class="flex justify-center">
              <input
                class="border-2 border-bar h-12 px-14 rounded-full text-sm font-normal focus:outline-none"
                type="search"
                name="search"
                placeholder="Search..."
                @keyup="handleSearch"
              />
            </div>
          </div>
        </div>
      </div>
      <MemberTable
        @edit="edit($event)"
        :members="
          this.message
            ? users.filter((i) => i.username.includes(this.message))
            : this.users
        "
        @delete="deleteUser($event)"
      />
    </div>
    <div
      v-if="isVisible"
      class="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none"
      id="modal-id"
    >
      <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
      <div
        class="my-card max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg"
      >
        <!--content-->
        <div class="MY_popup">
          <!--body-->
          <div class="text-center p-5 flex-auto justify-center">
            <div class="flex justify-center">
              <img src="~/assets/images/delete.png" alt="" />
            </div>

            <h2 class="text-xl font-bold py-4 text-green-900">
              Are you Sure ??
            </h2>
          </div>
          <!--footer-->
          <div class="btns p-3 mt-2 text-center space-x-4 md:block">
            <button
              @click="cancel"
              class="mb-2 md:mb-0 bg-green-500 border border-green-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-600"
            >
              Cancel
            </button>
            <button
              @click="confirm"
              class="mb-2 md:mb-0 bg-green-500 border border-green-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-600"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
    <Pagination
      :totalPages="totalPages"
      :perPage="10"
      :currentPage="currentPage"
      @pagechanged="onPageChange"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      isVisible: false,
      userID: null,
      userData: [],
      tempData: [],
      message: "",
      page: 1,
      currentPage: 1,
      totalPages: 1,
      users: [],
      loggedInUser: {
        username: "",
        email: "",
      },
    };
  },
  props: {
    total: {
      type: Number,
      default: 0,
    },
    current: {
      type: Number,
      default: 1,
    },
    limit: {
      type: Number,
      default: 4,
      coerce: function (limit) {
        return limit - 1;
      },
    },
  },
  mounted() {
    this.getMemberList(true);
  },
  // //  watch:{
  //     Next();
  //   },

  methods: {
    async confirm() {
      this.isVisible = false;
      try {
        // console.log({ id,  localStorage.getItem("token") });
        const response = await this.$axios.post(
          "member/deleteAccount",
          { id: this.userID },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
          this.$toast.success(`Delete SuccessFully`),
          setTimeout(this.$toast.clear, 4000)
        );
        this.getMemberList();
      } catch (err) {
        this.$toast.error(err.response.data.message);
        setTimeout(this.$toast.clear, 4000);
      }
    },
    cancel() {
      this.isVisible = false;
    },
    onPageChange(page) {
      if (page > this.totalPages) {
        return null;
      }
      this.currentPage = page;
      this.getMemberList();
      console.log(page);
    },
    handleSearch(event) {
      this.message = event.target.value;
    },
    // Nextpagination() {
    //   this.page++;
    //   this.getMemberList();
    //   console.log(this.page);
    // },
    // Previouspagination() {
    //   this.page--;
    //   this.getMemberList();
    //   console.log(this.page);
    // },
    async getMemberList(getUser) {
      console.log("enter");
      try {
        const response = await this.$axios.get(
          `member/accountList?page=${this.currentPage}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const data = response.data.data;
        this.userData = data;
        this.users = data.data;
        if (response) {
          if (getUser) {
            this.totalPages = Math.ceil(this.userData.total / 10);
            this.getLoggedInUser(data.data, 2);
          }
        }
      } catch (err) {
        console.log(err.message);
        this.status = "error";
      }
    },
    async getLoggedInUser(res, page) {
      const userName = localStorage.getItem("user");
      let users = res.filter((user) => user.username === userName);
      if (users.length === 0) {
        try {
          const response = await this.$axios.get(
            `member/accountList?page=${page}`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          const a = [];
          Object.keys(response.data.data.data).forEach((i) => {
            a.push(response.data.data.data[i]);
          });
          this.getLoggedInUser(a, page + 1);
        } catch (error) {
          this.status = error;
          console.log({ error });
        }
      } else {
        this.loggedInUser = users[0];
        console.log(this.loggedInUser, "llll");
        localStorage.setItem("user_object", JSON.stringify(users[0]));
      }
    },
    edit(member) {
      console.log({ member });
      console.log(this.$auth, "auth");
      this.$session.set("member", member);
      this.$nextTick(() => {
        this.$router.push({
          path: `/Member/member${member.username}`,
        });
      });
    },
    async deleteUser(user) {
      this.isVisible = user.isShow;
      this.userID = user.id;
    },
  },
};
</script>
<style scoped>
.main__wrapper {
  background-color: #28223c;
}
.my-card {
  background-color: white;
  color: red;
}
.btns button:hover {
  background-color: rgb(214, 225, 221);
  color: rgb(229, 79, 79);
}
</style>
