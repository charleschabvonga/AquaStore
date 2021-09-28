<template>
	<div class="container">
		<div class="card card-login mx-auto mt-5">
			<div class="card-header">Login</div>
			<div class="card-body">
				<form v-on:submit.prevent="login">
					<div class="form-group">
						<div class="form-label-group">
							<input
								type="email"
                				v-model="user.email"
								id="email"
								class="form-control"
								placeholder="Email address"
								autofocus="autofocus"
							/>
							<label for="email">Email address</label>
              				<p v-if="loginError" class="input__error-msg">{{ loginError.email }}</p>
						</div>
					</div>
					<div class="form-group">
						<div class="form-label-group">
							<input
								type="password"
                				v-model="user.password"
								id="password"
								class="form-control"
								placeholder="Password"
							/>
							<label for="password">Password</label>
              				<p v-if="loginError" class="input__error-msg">{{ loginError.password }}</p>
						</div>
					</div>
					<div class="form-group">
						<div class="checkbox">
							<label>
								<input type="checkbox" value="remember-me" v-model="user.remember_me" />
								Remember Password
							</label>
						</div>
					</div>
                    <button type="submit" class="btn btn-primary btn-block">Login</button>
				</form>
				<div class="text-center">
          			<router-link to="/register" class="d-block small mt-3">Register an Account</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
  name: 'Login',

  data() {
    return {
      user: {
        email: '',
        password: '',
        remember_me: false
      },
    };
  },
  computed: {
    loginError() {
      return this.$store.state.auth.loginError;
    },
    loadingStatus() {
      return this.$store.state.auth.loadingStatus;
    },
  },
  methods: {
	login() {
      this.$store.dispatch('auth/loginUser', this.user);
    },
  },
};
</script>
