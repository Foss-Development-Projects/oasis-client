<script lang="ts">
	export default {
		data() {
			return {
				rules: [v => v.length <= 249 || 'Max 250 characters'],
			}
		}
	}
</script>

<template>
	<header class="account-header">User Profile</header>
	<section class="account-profile-image-section">
		<div class="account-profile-image-upload-section">
			<img class="account-profile-image" src="https://cdn-icons-png.flaticon.com/512/3237/3237447.png"
				alt="Profile Image" />
			<span class="account-profile-image-upload-icon">
				<v-icon size="20" class="" icon="mdi-camera"></v-icon>
			</span>
			
		</div>
		
	</section>
	<form class="account-user-profile-section">
		<v-text-field class="form-input" type="text" variant="solo" density="compact" prepend-inner-icon="mdi-account"
			placeholder="Name" persistent-placeholder></v-text-field>
		<v-text-field class="form-input" type="text" variant="solo" density="compact"
			prepend-inner-icon="mdi-account-circle" placeholder="Username" persistent-placeholder></v-text-field>
		<v-text-field class="form-input" type="text" variant="solo" density="compact" prepend-inner-icon="mdi-email"
			placeholder="Email" persistent-placeholder></v-text-field>
		<v-textarea counter no-resize :rules="rules" prepend-inner-icon="mdi-bio" class="form-input" variant="solo"
			maxlength="250" placeholder="Short Description About Yourself ..."></v-textarea>
		<button class="account-submit-button" type="submit">Update</button>
	</form>
</template>

<style lang="scss">
	@use './../../../../assets/styles/modules/layout' as mix;

	.account-header {
		text-align: center;
		font-size: 30px;
		font-family: "Roboto", sans-serif;
	}

	.account-profile-image-section {
		padding: 5px;
		@include mix.add-flex(center, center);
		margin-bottom: 10px;
		.account-profile-image {
			width: 150px;
			height: 150px;
			object-fit: cover;
			border-radius: 50%;
		}
	}
	.account-profile-image-upload-section {
		width: 150px;
		height: 150px;
		position: relative;
	}
	.account-profile-image-upload-icon {
		cursor: pointer;
		background-color: var(--default-fg-color);
		padding: 2.5px 4.5px;
		backdrop-filter: blur(2px);
		border-radius: 50%;
		color: var(--default-bg-color);
		position: absolute;
		bottom: 15px;
		right: 20px;
	}
	.account-user-profile-section {
		width: 100%;
		@include mix.add-flex(center, center, column);
	}
	.account-submit-button {
		background-color: yellowgreen;
		color: white;
		border-radius: 20px;
		padding: 5px 10px;
		font-size: larger;
		&:hover {
			box-shadow: 0 0 10px yellowgreen;
		}
	}
	.form-input {
		width: 100%;
		max-width: 500px;
	}
</style>