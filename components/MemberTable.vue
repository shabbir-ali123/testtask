<template>
  <div class="max-w-7xl mx-auto md:mx-10">
    <div
      class="bg-table white grid grid-cols-12 gap-6 flex items-center py-6 text-sm font-normal rounded-lg px-2"
    >
      <div class="col-span-1 px-2">
        <h3>No.</h3>
      </div>
      <div class="col-span-1 px-2">
        <h3>username</h3>
      </div>
      <div class="col-span-2 px-2">
        <h3>Email</h3>
      </div>
      <div class="col-span-1">
        <h3>Telepon</h3>
      </div>
      <div class="col-span-2">
        <h3>Bank</h3>
      </div>
      <div class="col-span-2">
        <h3>Nama Rekening</h3>
      </div>
      <div class="col-span-2">
        <h3>Nomor Rekening</h3>
      </div>
      <div class="col-span-1">
        <h3>Action</h3>
      </div>
    </div>
    <template>
      <div
        v-for="(member, index) in members"
        :key="index"
        class="bg-searchBar white grid grid-cols-12 gap-6 flex items-center py-4 text-sm mt-2 rounded-lg"
      >
        <div class="col-span-1 px-2">
          <h3>{{ parseInt(index) + 1 }}</h3>
        </div>
        <div class="col-span-1 px-2">
          <h3>{{ member.username }}</h3>
        </div>
        <div class="col-span-2 px-2 text-email">
          <h3>{{ member.email }}</h3>
        </div>
        <div class="col-span-1 px-2">
          <h3>{{ member.phone }}</h3>
        </div>
        <div class="col-span-2 mx-4">
          <h3>{{ member.name_bank }}</h3>
        </div>
        <div class="col-span-2">
          <h3>{{ member.nama_rekening }}</h3>
        </div>
        <div class="col-span-1">
          <h3>{{ member.nomor_rekening }}</h3>
        </div>

        <!-- <div class="col-span-1 bg-secondary rounded-sm flex justify-center items-center px-2 py-2">
     <button type="delete">Edit</button>
</div> -->
        <div class="col-span-2 flex justify-center gap-2">
          <button
            @click="$emit('edit', member)"
            class="bg-secondary rounded-full flex justify-center items-center py-2 px-4"
            type="edit"
          >
            Edit
          </button>
          <button
            @click="showModel"
            class="bg-secondary rounded-full flex justify-center items-center py-2 px-2"
            type="delete"
          >
            Delete
          </button>
        </div>
        <div
          v-if="show"
          class="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none"
          id="modal-id"
        >
          <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
          <div
            class="my-card max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg"
          >
            <!--content-->
            <div class="">
              <!--body-->
              <div class="text-center p-5 flex-auto justify-center">
                <svg
                  fill="green"
                  class="w-16 h-16 flex items-center text-red-500 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="50px"
                  height="50px"
                >
                  <path
                    d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 34.988281 14.988281 A 1.0001 1.0001 0 0 0 34.171875 15.439453 L 23.970703 30.476562 L 16.679688 23.710938 A 1.0001 1.0001 0 1 0 15.320312 25.177734 L 24.316406 33.525391 L 35.828125 16.560547 A 1.0001 1.0001 0 0 0 34.988281 14.988281 z"
                  />
                </svg>
                <h2 class="text-xl font-bold py-4 text-green-900">
                  Member successfully registered
                </h2>
              </div>
              <!--footer-->
              <div class="p-3 mt-2 text-center space-x-4 md:block">
                <button @click="cancel">Cancel</button>
                <button
                  @click="$emit('deleteUser', member.id)"
                  class="mb-2 md:mb-0 bg-green-500 border border-green-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-600"
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  props: {
    members: {
      type: Array,
      default: () => {},
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showModel(show) {
      this.show = true;
      console.log(show, "hello");
    },
    cancel() {
      this.show = false;
    },
  },
  // data() {
  //   return {
  //     index: "",
  //   };
  // },
  // mounted() {
  //   this.index = this.index + 1;
  // },
};
</script>
<style scoped>
.my-card {
  background-color: red;
}
</style>
