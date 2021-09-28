<template>
	<div class="container-fluid">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active">Aquariums</li>
      </ol>

      <div class="card mb-3">
            <div class="card-header d-flex">
                <span>
                    Aquariums Management
                </span>
                <button class="btn btn-primary btn-sm ml-auto" @click="newAquarium()"><span class="fa fa-plus"></span>Add New Aquarium</button>
            </div>
            <div class="card-body">
                <table class="table">
                    <thead>
                        <tr>
                            <td class="font-weight-bold">#</td>
                            <td class="font-weight-bold">Name</td>
                            <td class="font-weight-bold">Glass Type</td>
                            <td class="font-weight-bold">Size</td>
                            <td class="font-weight-bold">Shape</td>
                            <td class="font-weight-bold">Location</td>
                            <td class="font-weight-bold">Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="aquarium in aquariums" :key="aquarium.id">
                            <td>{{ aquarium.id }}</td>
                            <td>{{ aquarium.name }}</td>
                            <td>{{ aquarium.glass_type }}</td>
                            <td>{{ aquarium.size }} 
                                <span v-if="aquarium.location === 'South Africa'"> litres</span>
                                <span v-else> gallons</span>
                            </td>
                            <td>{{ aquarium.shape }}</td>
                            <td>{{ aquarium.location }}</td>
                            <td>
                                <button class="btn btn-warning btn-sm" @click="showAquarium(aquarium)"><span class="fa fa-info-circle"></span></button>
                                <button class="btn btn-primary btn-sm" @click="getAquarium(aquarium)"><span class="fa fa-edit"></span></button>
                                <button class="btn btn-danger btn-sm" @click="deleteAquarium(aquarium)"><span class="fa fa-trash"></span></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Aquariums',
        components: {},
        data() {
            return {
            }
        },
        mounted() {
            this.fetchAquariums();
        },
        computed: {
            aquariums() {
                return this.$store.state.aquarium.aquariums
            },
            loadingStatus() {
                return this.$store.state.aquarium.loadingStatus;
            },
        },
        methods: {            
            fetchAquariums() {
                this.$store.dispatch('aquarium/findAll');
            },
            newAquarium() {
                this.$router.push({ name: 'AddAquarium' });
            },
            getAquarium(aquarium) {
                this.$router.push({ name: 'EditAquarium', params: { id: aquarium.id } });
            },
            showAquarium(aquarium) {
                this.$router.push({ name: 'ShowAquarium', params: { id: aquarium.id } });
            },
            async deleteAquarium(aquarium) {
                await this.$store.dispatch('aquarium/destroy', aquarium.id);
                await this.$router.go(0);
            },
        }
    }
</script>