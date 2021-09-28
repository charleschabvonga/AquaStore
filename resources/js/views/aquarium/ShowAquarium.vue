<template>
	<div class="container-fluid">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
            <router-link to="/aquariums">Aquariums</router-link>
            </li>
            <li class="breadcrumb-item active">Aquarium Info</li>
        </ol>
        <div class="card mb-3" v-if="aquarium">
            <div class="card-header d-flex">
                <span>
                    Aquarium {{ aquarium.name }} information
                </span>
            </div>
            <div class="card-body">
                <div class="d-block">
                    <div class="aquarium_details">
                        <p><span class="font-weight-bold">Aquarium name: </span>{{aquarium.name}}</p>
                        <p><span class="font-weight-bold">Glass type: </span>{{ aquarium.glass_type }}</p>
                        <p>
                            <span class="font-weight-bold">Size: </span>{{ aquarium.size }}
                            <span v-if="aquarium.location === 'South Africa'"> litres</span>
                            <span v-else> gallons</span>
                        </p>
                        <p><span class="font-weight-bold">Shape: </span>{{ aquarium.shape }}</p>
                        <p><span class="font-weight-bold">location: </span>{{ aquarium.location }}</p>
                    </div>
                    <div>
                        <div class="card-header d-flex">
                            <span>
                                List of all the fish in the aquarium
                            </span>
                             <button class="btn btn-primary btn-sm ml-auto" @click="newFish()"><span class="fa fa-plus"></span> Add New Fish</button>
                        </div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <td class="font-weight-bold">#</td>
                                    <td class="font-weight-bold">Species</td>
                                    <td class="font-weight-bold">Color</td>
                                    <td class="font-weight-bold">No of Fins</td>
                                    <td class="font-weight-bold">Aquarium</td>
                                    <td class="font-weight-bold">Actions</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="fish in fishes" :key="fish.id">
                                    <td>{{ fish.id }}</td>
                                    <td>{{ fish.species }}</td>
                                    <td>{{ fish.color }}</td>
                                    <td>{{ fish.number_of_fins }}</td>
                                    <td>{{ fish.aquarium.name }}</td>
                                    <td>
                                        <button class="btn btn-primary btn-sm" @click="getFish(fish)"><span class="fa fa-edit"></span></button>
                                        <button class="btn btn-danger btn-sm" @click="deleteFish(fish)"><span class="fa fa-trash"></span></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ShowAquarium',
        components: {},
        data() {
            return {
            }
        },
        mounted() {
            this.fetchAquarium();
            this.fetchFishes();
        },
        computed: {
            aquarium() {
                return this.$store.state.aquarium.aquarium
            },
            fishes() {
                return this.$store.state.fish.fishes
            },
            loadingStatus() {
                return this.$store.state.aquarium.loadingStatus;
            },
        },
        methods: {            
            fetchAquarium() {
                this.$store.dispatch('aquarium/findById', this.$route.params.id);
            },
            fetchFishes() {
                this.$store.dispatch('fish/findAll', this.$route.params.id);
            },
            newFish() {
                this.$router.push({ name: 'AddFish' });
            },
            getFish(fish) {
                this.$router.push({ name: 'EditFish', params: { fishId: fish.id, aquariumId: this.$route.params.id } });
            },
            async deleteFish(fish) {
                const params = {
                    aquariumId: this.$route.params.id,
                    fishId: fish.id,
                };
                await this.$store.dispatch('fish/destroy', params);
                await this.$router.go(0);
            },
        }
    }
</script>