<template>
    <div class="home">
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <div>{{infoModal}}</div>
    </div>
</template>
<script>
import {
    mapState,
    mapGetters,
    mapMutations,
    mapActions,
} from 'vuex'
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'home',
    computed: {
        ...mapState(['map']),
        ...mapGetters(['infoModal']),
    },
    components: {
        HelloWorld
    }
}
</script>