<script setup lang="ts">

</script>

<template>
	<section class="search-bar">
		<form autocomplete="off" action="" class="form">
			<div class="autocomplete">
				<input id="search-box" class="search-box" type="text" name="myCountry" placeholder="Country" />
			</div>
			<button class="search-submit-btn" id="search-submit-btn" type="submit">
				<img class="search-icon" src="./../../assets/images/icons/search.svg" alt="Search Icon">
			</button>
		</form>
	</section>
</template>

<style lang="scss" scoped>
	// Global Settings -------------------------------------------------------------
	.search-bar {
		display: grid;
		grid-gap: 15px;
		align-items: center;
		justify-content: center;

	}

	.form {
		display: grid;
		grid-template-columns: 1fr 35px;
		column-gap: 25px;
		align-items: center;
		border-radius: 50px;
		background-color: var(--searchbar-bg-color);
		box-shadow: 0px 0px 15px var(--searchbar-bg-color);
	}

	.search-box {
		padding: 5px;
		font-size: 1.1em;
		height: 25px;
		border-radius: 30px;
		border: none;
		outline: none;
		width: 100%;
		font-family: "Roboto", sans-serif;
		color: white;
		background: transparent;
		background-color: transparent;

		&::placeholder {
			color: white;
		}
	}

	.search-submit-btn {
		outline: none;
		border: none;
		background: none;
		background-color: var(--searchbar-btn-bg-color);
		padding: 1.5px 0;
		width: 35px;
		height: 35px;
		border-radius: 50%;
		cursor: pointer;
		position: relative;

		.search-icon {
			color: white;
			width: 25px;
			height: 25px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}

	.search-menu {
		color: white;
		list-style: none;
		display: grid;
		border-radius: 5px;
		grid-template-rows: 1fr;
		grid-gap: 5px;
		max-height: 300px;
		max-width: 300px;
		overflow-y: auto;
		background-color: blanchedalmond;
		padding: 10px 5px 10px 10px;

		&::-webkit-scrollbar {
			width: 5px;
		}

		li {
			font-size: 1.1em;
			height: 30px;
			background-color: deeppink;
			padding: 5px;
			border-radius: 5px;
			font-family: "Roboto", sans-serif;
		}
	}
</style>