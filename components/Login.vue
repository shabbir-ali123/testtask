<template>
  <div  class="primary flex items-center justify-center min-h-screen ">
    <div class="lg:px-8 py-6 mx-32 mt-4 text-left w-full">
      <h3 style="color:white;" class="text-6xl text-white font-bold">Login</h3>
      <p style="color:white;" class="text-2xl text-white py-4" >
        Masuk dan daptkan bonus tiap minggunya
      </p>
      <form action="" @click="fetchAPIData">
        <div class="" >
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
              v-model="name"
              style="background-color: #28223C;"
              class="w-full px-24 py-5 mt-2 blue text-white rounded-sm outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div class="">
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
            <div>
                
            </div>
            <input
              type="password"
              v-model="password"
              placeholder=" Masukana Password"
              style="background-color: #28223C;"
              class="w-full px-24 py-5 mt-3 bg-sky-900 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
            
          </div>
          <div class="">
            <div  style="background-color: #5B32FD; color:white;" class="absolute text-white h-15 bg-black px-12 py-5 mt-3">
              <button class="border-r-4  ">Captcha</button>
            </div>
            <input
              type="code"
              placeholder=" Enter this code here"
              
              class="w-full px-44 py-5  mt-3 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div class="flex items-baseline justify-between">
            <button
          style="color:white;"
              class="musak px-6 font-bold text-2xl w-full py-4 mt-4 text-white  rounded-sm hover:bg-rose-900"
            >
              Masuk
            </button>
          </div>
          <div class="flex justify-center font-bold py-2">
            <p style="color:white;">Belum punya akun?</p>
            <a style="color:#FD1A79;" href="#" class="px-2 underline text-rose-400">Register disini</a>
          
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default{
  name:'login',
  data(){
    
    return{
      name:'',
      password:'',
      apiKey: 'https://apiagent.cikatechdev.fun/api/v1'
    }
    
  },
   methods: {
        fetchAPIData(event ) { 
          event.preventDefault()
          console.log(this.name)
        }
    }
}
</script>

<style>
.nuxt-logo {
  height: 180px;
}
.textWhite{
    color: #ffff;
}
.primary{
background-color: #201B2F;
}
input{
background-color: #28223C;
}
.musak{
background-color:#FD1A79;
}
</style>
