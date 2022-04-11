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
    <template v-if="userData">

   
    <div
      
      v-for="{id, username, email , name_bank , nomor_rekening , phone, nama_rekening} in userData" :key="id"
      class="bg-searchBar white grid grid-cols-12 gap-6 flex items-center py-6 text-sm mt-3 rounded-lg"
    >
      <div class="col-span-1 px-2">
        <h3>{{id}}</h3>
      </div>
      <div class="col-span-1 px-2">
        <h3>{{username}}</h3>
      </div>
      <div class="col-span-2 px-2 text-email">
        <h3>{{email}}</h3>
      </div>
      <div class="col-span-1">
        <h3>{{phone}}</h3>
      </div>
      <div class="col-span-2">
        <h3>{{name_bank}}</h3>
      </div>
      <div class="col-span-2">
        <h3>{{nama_rekening}}</h3>
      </div>
      <div class="col-span-1">
        <h3>{{nomor_rekening}}</h3>
      </div>

      <!-- <div class="col-span-1 bg-secondary rounded-sm flex justify-center items-center px-2 py-2">
     <button type="delete">Edit</button>
</div> -->
      <div class="col-span-2 flex justify-center gap-2">
        <button
          class="bg-secondary rounded-full flex justify-center items-center py-2 px-4"
          type="edit"
        >
          Edit
        </button>
        <button
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
  data() {
    return {
      userData:[

      ],
    };
  },
  mounted()  {
       this.getMemberList()
  },
  methods: {
       async getMemberList()  {
      try {
        const response = await this.$axios.get( "member/accountList", {
             
             headers: {
                  Authorization: `Bearer ${localStorage.getItem('token')}`

             }
             
             
        });
     this.userData=response.data.data
     console.log(response.data.data)
        
      } catch (err) {
        this.status = "error";
      }
       }
  }
};
</script>
