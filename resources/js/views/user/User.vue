<template>
  <AdminLayout>
    <router-view></router-view>
  </AdminLayout>
</template>

<script>
import AdminLayout from '../../components/layouts/user/UserLayout.vue';

export default {
  name: 'User',
  components: { AdminLayout },
};
</script>
