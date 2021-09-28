<template>
	<div class="container">
		<div class="card card-register mx-auto mt-5">
			<div class="card-header">Register an Account</div>
			<div class="card-body">
				<form v-on:submit.prevent="register">
					<div class="form-group mb-0">
						<div class="form-row">
							<div class="col-md-6">
								<div class="form-label-group">
									<input
										type="text"
                                        v-model="user.name"
										id="name"
										class="form-control"
										placeholder="Enter Full Name"
										autofocus="autofocus"
									/>
									<label for="name">Enter Full Name</label>
									<p v-if="authError" class="input__error-msg">{{ authError.name }}</p>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
                                    <div class="form-label-group">
                                        <input
                                            type="email"
                                            v-model="user.email"
                                            id="email"
                                            class="form-control"
                                            placeholder="Email address"
                                        />
                                        <label for="email">Email address</label>
                                        <p v-if="authError" class="input__error-msg">{{ authError.email }}</p>
                                    </div>
                                </div>
							</div>
						</div>
					</div>
					<div class="form-group">
						<div class="form-row">
							<div class="col-md-6">
								<div class="form-label-group">
									<input
										type="password"
                                        v-model="user.password"
										id="password"
										class="form-control"
										placeholder="Password"
									/>
									<label for="password">Password</label>
									<p v-if="authError" class="input__error-msg">{{ authError.password }}</p>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-label-group">
									<input
										type="password"
                                        v-model="user.confirm_password"
										id="password_confirmation"
										class="form-control"
										placeholder="Confirm password"
									/>
									<label for="password_confirmation">Confirm password</label>
									<p v-if="authError" class="input__error-msg">{{ authError.confirm_password }}</p>
								</div>
							</div>
						</div>
					</div>
                    <button type="submit" class="btn btn-primary btn-block">Register</button>
				</form>
				<div class="text-center">
                    <router-link class="d-block small mt-3" to="/login">Login Page</router-link>
				</div>
			</div>
		</div>
	</div>
</template>


<script>

export default {
  name: 'Register',

  data() {
    return {
      user: {
          name: '',
          email: '',
          password: '',
          confirm_password: ''
      },
      errors: {}
    };
  },
  computed: {
    authError() {
      return this.$store.state.auth.authError ?? {};
    },
    loadingStatus() {
      return this.$store.state.auth.loadingStatus;
    },
  },
  methods: {
	register() {
		this.$store.dispatch('auth/registerUser', this.user);
	},
  },
};
</script>
