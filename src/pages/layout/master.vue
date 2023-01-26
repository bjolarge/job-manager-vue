<template>
    <div class="w-full h-full flex">
        <sidebar/>
    <div class="w-full h-full">
    <headerTop/>
    <div class="w full h-calc(100vh 50px)">
        <router-view></router-view>
    </div>
    </div>
</div>
</template>
<script>
import headerTop from './../../components/header.vue'
import sidebar from './../../components/sidebar.vue'
export default{
    components:{headerTop, sidebar}
}
</script>