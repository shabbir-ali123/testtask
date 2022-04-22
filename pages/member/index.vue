<template>
  <div class="main__wrapper">
    <Header />
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
                v-model="message"
                @keyup="SearchMember"
              />
            </div>
          </div>
        </div>
      </div>
      <MemberTable
        @edit="edit($event)"
        @deleteUser="deleteUser($event)"
        :members="userData.data"
      />
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
      userData: [],
      tempData: [],
      message: "",
      page: 1,
      currentPage: 1,
      totalPages: 0,
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
    this.getMemberList();
  },
  // //  watch:{
  //     Next();
  //   },

  methods: {
    onPageChange(page) {
      this.currentPage = page;
      this.getMemberList();
      console.log(page);
    },
    Nextpagination() {
      this.page++;
      this.getMemberList();
      console.log(this.page);
    },
    Previouspagination() {
      this.page--;
      this.getMemberList();
      console.log(this.page);
    },
    async getMemberList() {
      try {
        const response = await this.$axios.get(
          `member/accountList?page=${this.currentPage}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        this.userData = response.data.data;
        this.tempData = this.userData;
        this.totalPages = Math.round(this.userData.total / 10);
        console.log(this.totalPages);
        // console.log(, "data");
      } catch (err) {
        this.status = "error";
      }
    },
    edit(member) {
      console.log(this.$auth, "auth");
      this.$nextTick(() => {
        this.$router.push({
          path: `/member/member${member.username}`,
        });
        this.$session.set("member", member);
      });
    },
    async deleteUser(id) {
      try {
        const res = await this.$axios.post(
          "member/deleteAccount",
          { id },

          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
          this.$toast.success(`Delete SuccessFully`),
          setTimeout(this.$toast.clear, 4000)
        );
        this.getMemberList(id);
      } catch (e) {
        this.$toast.error(e);
        setTimeout(this.$toast.clear, 4000);
      }
    },
    async SearchMember(e) {
      try {
        const filterData = this.tempData.filter((user) =>
          user.username.includes(this.message)
        );
        this.userData.data = filterData;
      } catch (e) {}
    },
  },
};
</script>
<style scoped>
.main__wrapper {
  background-color: #28223c;
}
</style>
