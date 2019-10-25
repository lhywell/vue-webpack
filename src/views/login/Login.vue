<template>
    <div class='login_container'>
        <div class="background_layer"></div>
        <div class='color_layer'></div>
        <div class="login_layer">
            <div class='company_label'>
                <!-- <div class='tencent_logo_container'>
                    <img class='tencent_logo' src='https://jic.talkingdata.com/lbs/smartselect/login-logo.png' alt='腾讯云'></img>
                </div>
                <div class='td_logo_container'>
                    <img class='td_logo' src='https://jic.talkingdata.com/lbs/smartselect/td-logo.png' alt='TalkingData'></img>
                </div>
                <div class='clear_float'></div> -->
            </div>
            <div class='product'>
                <div class='name'>OCR</div>
                <div class='describe'>OCR标注产品</div>
            </div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="ruleForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="ruleForm.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
                    <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
                </el-form-item>
            </el-form>
            <div class="login_foot">2018-2019 © Bailian.ai</div>
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
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'login',
    data() {
        return {
            ruleForm: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'change' }
                ],
            }
        };
    },
    computed: {
        ...mapState(['map']),
        ...mapGetters(['infoModal']),
    },
    components: {
        // HelloWorld
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        }
    }
}
</script>
<style type="text/css">
    @import './login.css';
</style>