<template>
    <div class="home">
        <Header :username="username" />
        <div id="outerContainer">
            <div id="sitemapHost" class="leftPanel">
                <ul>
                    <li><router-link to="/index">首页</router-link></li>
                    <li><router-link to="/my">我的项目</router-link></li>
                    <li><router-link to="/center">个人中心</router-link></li>
                </ul>
            </div>
            <div id="clippingBounds" style="height: 270px; left: 220px; width: 1460px; opacity: 1;">
                sdfdsf
            </div>
        </div>
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
import Header from '@/components/header/Header.vue'

export default {
    name: 'home',
    data() {
        return {
            username: ''
        };
    },
    computed: {
        ...mapState(['map']),
        ...mapGetters(['infoModal']),
    },
    components: {
        Header
    }
}
</script>
<style type="text/css">
#outerContainer {
    position: absolute;
    width: 100%;
    height: 1500px;
    overflow: hidden;
    display: flex;
}

#sitemapHost {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 220px;
}

.leftPanel,
.rightPanel,
.mobileOnlyPanel {
    position: relative;
    background-color: #f2f2f2;
    overflow: hidden;
    width: 0px;
    flex-shrink: 0;
}
</style>