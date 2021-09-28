import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
      path: '/',
      redirect: { name: 'Login' },
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/auth/login/Login.vue'),
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/auth/register/Register.vue'),
    },
    {
      path: '/admin',
      component: () => import('../views/admin/Admin.vue'),
      children: [{
        path: '/aquariums',
        name: 'Aquariums',
        component: () => import('../views/aquarium/Aquariums.vue'),
      },
      {
        path: '/aquariums/add',
        name: 'AddAquarium',
        component: () => import('../views/aquarium/AddAquarium.vue'),
      },
      {
        path: '/aquariums/:id/edit',
        name: 'EditAquarium',
        component: () => import('../views/aquarium/EditAquarium.vue'),
      },
      {
        path: '/aquariums/:id',
        name: 'ShowAquarium',
        component: () => import('../views/aquarium/ShowAquarium.vue'),
      },
      {
        path: '/aquariums/:id/fishes',
        name: 'AddFish',
        component: () => import('../views/fish/AddFish.vue'),
      },
      {
        path: '/aquariums/:aquariumId/fishes/:fishId/edit',
        name: 'EditFish',
        component: () => import('../views/fish/EditFish.vue'),
      },
    ],
    },
    {
      path: '/user',
      component: () => import('../views/user/User.vue'),
      children: [{
        path: '/user/aquariums',
        name: 'UserAquariums',
        component: () => import('../views/aquarium/user/Aquariums.vue'),
      },
      {
        path: '/user/aquariums/:id',
        name: 'UserShowAquarium',
        component: () => import('../views/aquarium/user/UserShowAquarium.vue'),
      }],
    },
  ];
  
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;