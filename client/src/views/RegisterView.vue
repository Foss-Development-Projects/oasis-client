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
			<header class="register-header">Register</header>
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
				          		label="Fullname"
				          		prepend-inner-icon="mdi-draw"
				          		variant="solo"
				          		name="register_fname"
				          		placeholder="Enter Fullname"
				          	></v-text-field>
				          	<v-text-field
				          		label="Username"
				          		prepend-inner-icon="mdi-account"
				          		variant="solo"
				          		name="register_uname"
				          		placeholder="Enter Username"
				          	></v-text-field>
				          	<v-text-field
				          		label="Email"
				          		prepend-inner-icon="mdi-email"
				          		variant="solo"
				          		name="register_email"
				          		placeholder="Email Address"
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
				          	<v-text-field
				          		:append-inner-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
				          		prepend-inner-icon="mdi-lock"
				          		:rules="[rules.required, rules.min]"
				          		:type="show2 ? 'text' : 'password'"
				          		name="register_password_initial"
				          		label="Confirm Password"
				          		variant="solo"
				          		placeholder="Enter Password"
				          		class="input-group--focused"
				          		@click:append="show2 = !show2"
				          	></v-text-field>
							<section class="form-button">
								<v-btn color="peach" size="large">Register</v-btn>
							</section>
				        </v-window-item>
				
				        <v-window-item value="sso" class="register-sso-button-section">
				          <v-btn variant="text" prepend-icon="mdi-google">Register With Google</v-btn>
						  <v-btn variant="text" prepend-icon="mdi-microsoft">Register With Microsoft</v-btn>
						  <v-btn variant="text" prepend-icon="mdi-facebook">Register With Facebook</v-btn>
						  <v-btn variant="text" prepend-icon="mdi-twitter">Register With Twitter</v-btn>
				        </v-window-item>
				
				        <v-window-item value="phone">
				          <v-text-field
				          	label="Phone Number"
				          	prepend-inner-icon="mdi-cellphone"
				          	variant="solo"
							type="number"
				          	name="register_email"
				          	placeholder="Enter Phone Number"
				          ></v-text-field>
						  <v-text-field
						  	label="OTP"
						  	prepend-inner-icon="mdi-numeric"
						  	variant="solo"
						  	name="register_otp"
						  	placeholder="Enter OTP"
							
						  ></v-text-field>
				        </v-window-item>
				      </v-window>
				    </v-card-text>
			</form>
			<section class="register-helpers">
				<router-link class="login-redirect-link" to="/login">Already Have An Account? Login</router-link>
			</section>
		</div>
	</div>
</template>

<style lang="scss">
	.register-container {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.register {
		max-width: 600px;
		width: 100%;
		margin: 25px 0;
		padding: 10px;
		&-header {
			margin-bottom: 15px;
			font-size: 36px;
			text-align: center;
		}
	}
	.form-button {
		margin-bottom: 5px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.register-sso-button-section {
		display: flex;
		width: 100%;
		flex-direction: column;
		button {
			width: 100%;
			font-size: small;
			font-weight: bold;
			margin-bottom: 15px;
		}
	}
	.register-helpers {
		.login-redirect-link {
			font-size: small;
			font-family: "Open Sans";
			font-weight: bold;
			text-decoration: none;
			margin-left: 15px;
			color: var(--default-bg-color);
			&:hover {
				color: yellowgreen;
			}
		}
	}
</style>