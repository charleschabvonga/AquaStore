<template>
	<div class="container-fluid">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
            <router-link to="/aquariums">Aquariums</router-link>
            </li>
            <li class="breadcrumb-item active">Add Aquarium</li>
        </ol>

        <div class="card mb-3">
            <div class="card-header d-flex">
                <span>
                    Add Aquarium
                </span>
            </div>
            <div class="card-body">
                <div class="d-block">
                    <form v-on:submit.prevent="createAquarium()">
                        <div class="form-group">
                            <label for="name">Enter Name</label>
                            <input type="text" v-model="aquarium.name" class="form-control" id="name" placeholder="Enter aquarium name" />
                            <p v-if="aquariumError" class="input__error-msg">{{ aquariumError.name }}</p>
                        </div>
                        <div class="form-group">
                            <label for="glass_type">Select Glass Type</label>
                            <select v-model="aquarium.glass_type" class="form-control" id="glass_type">
                                <option disabled value="">Please select an aquarium glass type</option>
                            <option v-for="glass_type in glass_types" :key="glass_type.id" :value="glass_type.text">
                                    {{ glass_type.text }}
                                </option>
                            </select>
                            <p v-if="aquariumError" class="input__error-msg">{{ aquariumError.glass_type }}</p>
                        </div>
                        <div class="form-group">
                            <label for="size">Enter Size</label>
                            <input type="number" v-model="aquarium.size" class="form-control" id="size" placeholder="Enter aquarium size" />
                            <p v-if="aquariumError" class="input__error-msg">{{ aquariumError.size }}</p>
                        </div>
                        <div class="form-group">
                            <label for="shape">Enter Shape</label>
                            <input type="text" v-model="aquarium.shape" class="form-control" id="shape" placeholder="Enter aquarium shape" />
                             <p v-if="aquariumError" class="input__error-msg">{{ aquariumError.email }}</p>
                             <p v-if="aquariumError" class="input__error-msg">{{ aquariumError.shape }}</p>
                        </div>
                        <div class="form-group">
                            <label for="location">Select Location</label>
                            <select v-model="aquarium.location" class="form-control" id="location">
                                <option disabled value="">Please select the location of the aquarium</option>
                                <option v-for="location in locations" :key="location.id" :value="location.text">
                                    {{ location.text }}
                                </option>
                            </select>
                            <p v-if="aquariumError" class="input__error-msg">{{ aquariumError.location }}</p>
                        </div>
                        <hr>
                        <div class="text-right">
                            <button type="button" class="btn btn-default" @click="cancel()">Cancel</button>
                            <button type="submit" class="btn btn-primary"><span class="fa fa-check"></span> Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AddAquarium',
        components: {},
        data() {
            return {
                aquarium: {
                    name: '',
                    glass_type: '',
                    size: '',
                    shape: '',
                    location: '',
                },
                locations: [
                    { id: '1', text: 'South Africa'},
                    { id: '2', text: 'United States of America'}
                ],
                glass_types: [
                    { id: '1', text: 'Glass'},
                    { id: '2', text: 'Acrylic'}
                ],
            }
        },
        computed: {
            aquariumError() {
                return this.$store.state.aquarium.aquariumError ?? {};
            },
            loadingStatus() {
                return this.$store.state.aquarium.loadingStatus;
            },
            aquariumError() {
                return this.$store.state.aquarium.aquariumError ?? {};
            },
        },
        methods: {
            createAquarium: async function() {
                this.$store.dispatch('aquarium/create', this.aquarium);
            },
            cancel() {
                this.$router.push({ name: 'Aquariums' });
            }
        }
    }
</script>