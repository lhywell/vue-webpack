import Main from '@/views/Main.vue';

export const login = {
    path: '/',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: () =>
        import ('@/views/login/Login.vue')

};

export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: () =>
        import ('@/views/login/Login.vue')
};

export const index = {
    path: '/index',
    meta: {
        title: 'Index'
    },
    name: 'Main',
    component: () =>
        import ('@/views/Main.vue')
    // children: [{
    //         path: 'account',
    //         title: '新建账户',
    //         name: 'BDAccount',
    //         component: BDAccount
    //     },
    //     {
    //         path: 'success',
    //         title: '提交成功',
    //         name: 'BDAccountSuccess',
    //         component: BDAccountSuccess
    //     }
    // ]
};


// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    login,
    loginRouter,
    index
];