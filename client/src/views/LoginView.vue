<script lang="ts">
	export default {
	    data () {
	      return {
	        show1: false,
	        show2: true,
			tab: null,
	        password: 'Password',
	        rules: {
	          required: (value: any) => !!value || 'Required',
	          min: (v: any) => v.length >= 8 || 'Min 8 characters',
	          emailMatch: () => (`The email and password you entered don't match`),
	        },
	      }
	    },
	  }
</script>

<template>
	<div class="register-container">
		<div class="register">
			<header class="register-header">Login</header>
			<form action="" method="POST" class="register-body">
				    <v-tabs
				      v-model="tab"
					  align-tabs="center"
				    >
						<v-tab value="email">
							<v-icon icon="mdi-email"></v-icon> With Email
						</v-tab>
						<v-tab value="sso">
							<v-icon icon="mdi-shield-account-outline"></v-icon>With SSO
						</v-tab>
						<v-tab value="phone">
						  <v-icon icon="mdi-phone"></v-icon>With Phone
						</v-tab>
				    </v-tabs>
				    <v-card-text>
				      <v-window v-model="tab">
				        <v-window-item value="email">
				          	<v-text-field
				          		label="Username"
				          		prepend-inner-icon="mdi-account"
				          		variant="solo"
				          		name="login_user"
				          		placeholder="Enter Username / Email"
				          	></v-text-field>
				          	<v-text-field
				          		:append-inner-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
				          		prepend-inner-icon="mdi-lock"
				          		:rules="[rules.required, rules.min]"
				          		:type="show2 ? 'text' : 'password'"
				          		name="register_password_initial"
				          		label="Password"
				          		variant="solo"
				          		placeholder="Enter Password"
				          		hint="At least 8-16 characters"
				          		class="input-group--focused"
				          		@click:append="show2 = !show2"
				          	></v-text-field>
							<section class="form-button">
								<v-btn color="peach" size="large">Login</v-btn>
							</section>
				        </v-window-item>
				
				        <v-window-item value="sso" class="register-sso-button-section">
				          <v-btn prepend-icon="mdi-google">Login With Google</v-btn>
						  <v-btn prepend-icon="mdi-microsoft">Login With Microsoft</v-btn>
						  <v-btn prepend-icon="mdi-facebook">Login With Facebook</v-btn>
						  <v-btn prepend-icon="mdi-twitter">Login With Twitter</v-btn>
				        </v-window-item>
				
				        <v-window-item value="phone">
				          <v-text-field
				          	label="Phone Number"
				          	prepend-inner-icon="mdi-cellphone"
				          	variant="solo"
							type="number"
				          	name="login_phone"
				          	placeholder="Enter Phone Number"
				          ></v-text-field>
						  <v-text-field
						  	label="OTP"
						  	prepend-inner-icon="mdi-numeric"
						  	variant="solo"
						  	name="login_otp"
						  	placeholder="Enter OTP"
							
						  ></v-text-field>
				        </v-window-item>
				      </v-window>
				    </v-card-text>
			</form>
			<section class="register-helpers">
				<router-link class="login-redirect-link" to="/register">
					First Time Here? Register
				</router-link>
			</section>
		</div>
	</div>
</template>

<style>
</style>