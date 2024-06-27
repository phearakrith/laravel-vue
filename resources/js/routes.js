import Dashboard from './components/Dashboard.vue';
import ListAppointment from './pages/appointment/ListAppointment.vue';
import ListUser from './pages/user/ListUser.vue';
import UpdateSetting from './pages/setting/UpdateSetting.vue';
import UpdateProfile from './pages/profile/UpdateProfile.vue';

export default [
    {
        path: '/admin-dashboard',
        name: 'admin.dashboard',
        component: Dashboard,
    },
    {
        path: '/admin-appointment',
        name: 'admin.appointment',
        component: ListAppointment,
    },
    {
        path: '/admin-user',
        name: 'admin.user',
        component: ListUser,
    },
    {
        path: '/admin-setting',
        name: 'admin.setting',
        component: UpdateSetting,
    },
    {
        path: '/admin-profile',
        name: 'admin.profile',
        component: UpdateProfile,
    },
    // {
    //     path: '/admin-logout',
    //     name: 'admin.logout',
    //     component: Logout,
    // },
]
