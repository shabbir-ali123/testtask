<template>
  <div class="primary min-h-screen ">
    <div class="max-w-7xl mx-auto">
    <div class="flex justify-between mx-10 py-20 ">
      <div class="flex items-center">
        <h2 class="text-secondary text-2xl font-extrabold">Member List</h2>
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
              class="border-2 border-bar h-12 px-14 rounded-full text-sm font-normal  focus:outline-none"
              type="search"
              name="search"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
    </div>
     <Table/>
    </div>
  
  </div>
</template>
<script>
import Table from './MemberTable.vue'
export default {
  data() {
    
  },
  components:{
    Table
  }
}
</script>
