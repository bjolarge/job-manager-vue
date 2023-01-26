<template>
    <div class="h-screen w-[300px] bg-green-300">
        <div class="bg-green-500 h-[50px]">
<router-link to="/" class="px-2 flex space-x-2"><div class="bc-white text-xl font-bold text-center flex items-left justify-left text-white h-full bg-green-500 pt-5 pb-10 bb-1 solid-white"><span><font-awesome-icon icon="fa-solid fa-indent" /></span>
    <img src="../assets/logoForRezumii.png" class="px-2 h-[25px]" alt="logo"/>
    <span class="px-0.005"> Rezumii</span></div></router-link>
        </div>

        <div class="flex flex-col justify-between h-[calc(100vh-3rem)] bg-green-500">
        <div class="menu-main text-left px-2 whitespace-nowrap">
            <!-- <div class="profile flex justify-center items-center text-center p-5">
                <div class="text-center">
        <img src="https://primefaces.org/primevue/demo/images/avatar/amyelsner.png" class="p-1 w-24 h-24 rounded-full ring-2-ring-gray-300 darkening-gray-500 mb-4" alt="avatar"/>
        <h5 class="text-xl font-medium leading-tight mb-2">Toyin Gboyega</h5>
        <p class="text-gray-500">Admin</p>
    </div>
    </div> -->
    
    <div></div>
    <div></div>
        <div class="py-3 rounded-sm cursor-pointer text-gray-300 hover text-white-200 border-t-4">
            
        <router-link to="/" class="px-2 flex space-x-2 hover:bg-gray-200 hover:text-green-500 hover:rounded-full"><span class="pi pi-home" style="font-size: 2rem" v-tooltip.right="Dashboard"></span><span>Dashboard</span></router-link>
        </div>

        <div class="py-3 rounded-sm cursor-pointer text-gray-300  text-white-200">
        <router-link to="/" class="px-2 flex space-x-2 hover:bg-gray-200 hover:text-green-500 hover:rounded-full"><span class="" style="font-size: 2rem" v-tooltip.right="Jobs"><font-awesome-icon icon="fa-solid fa-folder" /></span><span>Jobs</span></router-link>
        </div>
        
        <div class="py-3 rounded-sm cursor-pointer text-gray-300 hover text-white">
        <router-link to="/" class="px-2 flex space-x-2 hover:bg-gray-200 hover:text-green-500 hover:rounded-full"><span class="pi pi-report" style="font-size: 2rem" v-tooltip.right="Report"><font-awesome-icon icon="fa-solid fa-bar-chart" /></span><span>Report</span></router-link>
        </div>

        <div class="py-3 rounded-sm cursor-pointer text-gray-300 hover text-white">
        <router-link to="/" class="px-2 flex space-x-2 hover:bg-gray-200 hover:text-green-500 hover:rounded-full"><span class="pi pi-report" style="font-size: 2rem" v-tooltip.right="Referral"><font-awesome-icon icon="fa-solid fa fa-address-card" /></span><span>Referral</span></router-link>
        </div>

        <!-- <div class="py-3 rounded-sm cursor-pointer text-gray-300 hover text-white">
        <router-link to="/" class="px-2 flex space-x-2 hover:bg-gray-200 hover:text-green-500 hover:rounded-full"><span class="pi pi-referral" style="font-size: 2rem" v-tooltip.right="Referral"><font-awesome-icon icon="fa-solid fa fa-address-card-o" /></span><span>Referral</span></router-link>
        </div> -->

        </div>
        <div class="menu-main text-left px-2 justify-self-end whitespace-nowrap">

        </div>
        </div>
    </div>
</template>
<script>
export default{

}
</script>
<style>

</style>