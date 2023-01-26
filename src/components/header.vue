<template>
   <div class="w-full bg-white-100 bb-10">
    <div class="flex justify-right items-right h-[50px]">
        <div class="p-80 cursor-pointer hover bg-green-50">
        </div>
        <div class="py-2">    
            <div class="b-2 float-right pl-2"></div>      
        <InputText type="text" v-model="value" class="h-[40px]" placeholder="" >
        </InputText>
        </div>
        <!-- <div class="flex space-x-3 items-center justify-center px-3">
        <div class="text-md">Admin</div>
        <Avatar icon="pi pi-user" class="mr-2" style="background-color:#9c27b0; color: #ffffff" shape="circle" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />
        <Menu id="overlay_menu" ref="menu" :model="items" :popup="true"/>

    </div> -->
    </div>
   </div> 
</template>
<script>
export default{
data() {
		return {
			items: [
				{
					label: 'Logout',
					icon: 'pi pi-refresh',
					command: () => {
						this.$toast.add({severity:'success', summary:'Updated', detail:'Data Updated', life: 3000});
					}
				},
				{
					label: 'Change Password',
					icon: 'pi pi-times',
					command: () => {
						this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000});
					}
				},
				
			]
		}
	},
    methods: {
        toggle(event) {
            this.$refs.menu.toggle(event);
        },}
}
</script>