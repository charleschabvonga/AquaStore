<template>
	<div class="container-fluid">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/aquariums">Aquarium</router-link>
        </li>
        <li class="breadcrumb-item active">Add New Fish</li>
      </ol>

      <div class="card mb-3">
            <div class="card-header d-flex">
                <span>
                    Fish Management
                </span>
            </div>
            <div class="card-body">
                <div class="d-block">
                <form v-on:submit.prevent="createFish">
                    <div class="form-group">
                        <label for="species">Select Species</label>
                        <select v-model="fish.species" class="form-control" id="species">
                            <option disabled value="">Please select the fish species.</option>
                            <option v-for="item in species" :key="item.id" :value="item.text">
                                {{ item.text }}
                            </option>
                        </select>
                        <p v-if="fishError" class="input__error-msg">{{ fishError.species }}</p>
                    </div>
                    <div class="form-group">
                        <label for="color">Select Color(s)</label>
                        <select v-model="fish.color" class="form-control" multiple id="color">
                            <option disabled value="">Please select colors the fish has.</option>
                            <option v-for="color in colors" :key="color.id" :value="color.text">
                                {{ color.text }}
                            </option>
                        </select>
                        <p v-if="fishError" class="input__error-msg">{{ fishError.color }}</p>
                    </div>
                    <div class="form-group">
                        <label for="number_of_fins">Enter Number of Fins</label>
                        <input type="number" v-model="fish.number_of_fins" class="form-control" id="number_of_fins" placeholder="Enter number of fins" />
                        <p v-if="fishError" class="input__error-msg">{{ fishError.number_of_fins }}</p>
                    </div>
                    <div class="form-group">
                        <label for="aquarium">Select Aquarium</label>
                        <select v-model="fish.aquarium_id" class="form-control" id="aquarium">
                            <option disabled value="">Please select an aquarium for the fish.</option>
                            <option v-for="aquarium in aquariums" :key="aquarium.id" :value="aquarium.text">
                                {{ aquarium.text }}
                            </option>
                        </select>
                        <p v-if="fishError" class="input__error-msg">{{ fishError.aquarium_id }}</p>
                    </div>
                    <hr>
                    <div class="text-right">
                        <button type="button" class="btn btn-default" v-on:click="cancel()">Cancel</button>
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
        name: 'AddFish',
        data() {
            return {
                fish: {
                    species: '',
                    color: [],
                    number_of_fins: '',
                    aquarium_id: '',
                    aquarium_param: this.$route.params.id,
                },
                colors: [
                    { id: '1', text: 'Black' },
                    { id: '2', text: 'White' },
                    { id: '3', text: 'Blue' },
                    { id: '4', text: 'Red' },
                    { id: '5', text: 'Green' },
                    { id: '6', text: 'Yellow' },
                    { id: '7', text: 'Orange' },
                    { id: '8', text: 'Pink' },
                    { id: '9', text: 'Grey' },
                    { id: '10', text: 'Brown' },
                    { id: '11', text: 'Purple' },
                    { id: '12', text: 'Gold' },
                    { id: '13', text: 'Silver' },
                    { id: '14', text: 'Indigo' },
                    { id: '15', text: 'Violet' },  
                ],
                species: [
                    { id: '1', text: 'Guppy'},
                    { id: '2', text: 'Gold'},
                    { id: '3', text: 'Rainbow'},
                    { id: '4', text: 'Silver Dollar'},
                    { id: '5', text: 'Siamese Fighting'}
                ]
            }
        },
        mounted() {
            this.fetchAquariums();
        },
        computed: {
            loadingStatus() {
                return this.$store.state.fish.loadingStatus;
            },
            aquariums() {
                return this.$store.state.aquarium.aquariums.map((aquarium) => ({ id: aquarium.id, text: aquarium.name }));
            },
            fishError() {
                return this.$store.state.fish.fishError ?? {};
            },
        },
        methods: {
            createFish: async function() {
                this.$store.dispatch('fish/create', this.fish);
            },
            cancel() {
                this.$router.push({ name: 'ShowAquarium', params: { id: this.$route.params.id } });
            },
            fetchAquariums() {
                this.$store.dispatch('aquarium/findAll');
            },
        }
    }
</script>