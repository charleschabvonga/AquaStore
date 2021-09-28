<template>
  <AdminLayout>
    <router-view></router-view>
  </AdminLayout>
</template>

<script>
import AdminLayout from '../../components/layouts/admin/AdminLayout.vue';

export default {
  name: 'Admin',
  components: { AdminLayout },
};
</script>
