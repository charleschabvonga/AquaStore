<template>
	<div class="container-fluid">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/aquariums">Aquarium</router-link>
        </li>
        <li class="breadcrumb-item active">Update Fish</li>
      </ol>

      <div class="card mb-3">
            <div class="card-header d-flex">
                <span>
                    Upadte for fish with id {{ fish.id }}
                </span>
            </div>
            <div class="card-body">
                <div class="d-block">
                <form v-on:submit.prevent="editFish">
                    <div class="form-group">
                        <label for="species">Select Species</label>
                        <select v-model="newFish.species" class="form-control" id="species">
                            <option disabled value="">Please select the fish species.</option>
                            <option v-for="item in species" :key="item.id" :value="item.text">
                                {{ item.text }}
                            </option>
                        </select>
                        <p v-if="fishError" class="input__error-msg">{{ fishError.species }}</p>
                    </div>
                    <div class="form-group">
                        <label for="color">Select Color(s)</label>
                        <select v-model="newFish.color" class="form-control" multiple id="color">
                            <option disabled value="">Please select colors the fish has.</option>
                            <option v-for="color in colors" :key="color.id" :value="color.text">
                                {{ color.text }}
                            </option>
                        </select>
                        <p v-if="fishError" class="input__error-msg">{{ fishError.color }}</p>
                    </div>
                    <div class="form-group">
                        <label for="number_of_fins">Enter Number of Fins</label>
                        <input type="number" v-model="newFish.number_of_fins" class="form-control" id="number_of_fins" placeholder="Enter number of fins" />
                        <p v-if="fishError" class="input__error-msg">{{ fishError.number_of_fins }}</p>
                    </div>
                    <div class="form-group">
                        <label for="aquarium">Select Aquarium</label>
                        <select v-model="newFish.aquarium_id" class="form-control" id="aquarium">
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
    import { fishEventBus } from '../../store/modules/fish/fish.mutations';

    export default {
        name: 'EditFish',
        data() {
            return {
                newFish: {},
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
                    { id: '12', text: 'Gold' }
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
            this.fetchFish();
            this.fetchAquariums();
        },
        created() {
            fishEventBus.$on('fish-set', (fish) => {
                this.newFish = {
                    species: fish.species,
                    number_of_fins: fish.number_of_fins,
                    color: fish.color.split(", "),
                    aquarium_id: fish.aquarium_id
                };
            });
        },
        computed: {
            fish() {
                return this.$store.state.fish.fish
            },
            loadingStatus() {
                return this.$store.state.fish.loadingStatus;
            },
            aquariums() {
                return this.$store.state.aquarium.aquariums.map((aquarium) => ({ id: aquarium.id, text: aquarium.name }));
            },
            fishError() {
                return this.$store.state.fish.fishError;
            },
        },
        methods: {            
            fetchFish() {
                const params = {
                    aquariumId: this.$route.params.aquariumId,
                    fishId: this.$route.params.fishId,
                };
                this.$store.dispatch('fish/findById', params);
            },
            editFish() {
                const fish = {
                    id: this.$route.params.id,
                    species: this.newFish.species,
                    color: this.newFish.color,
                    number_of_fins: this.newFish.number_of_fins,
                    aquarium_id: this.newFish.aquarium_id,
                    aquariumId: this.$route.params.aquariumId,
                    fishId: this.$route.params.fishId,
                };
                this.$store.dispatch('fish/update', fish);
            },
            cancel() {
                this.$router.push({ name: 'ShowAquarium', params: { id: this.$route.params.aquariumId } });
            },
            fetchAquariums() {
                this.$store.dispatch('aquarium/findAll');
            },
        }
    }
</script>