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
        class="bg-searchBar white grid grid-cols-12 gap-6 flex items-center py-6 text-sm mt-3 rounded-lg"
      >
        <div class="col-span-1 px-2">
          <h3>{{ member.id }}</h3>
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
            @click="$emit('deleteUser', member.id)"
            class="bg-secondary rounded-full flex justify-center items-center py-2 px-2"
            type="delete"
          >
            Delete
          </button>
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
      default: () => [],
    },
  },
};
</script>
