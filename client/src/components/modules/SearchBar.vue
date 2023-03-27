<script setup lang="ts">
	const val = this.$ref.search;
	console.log(val)
</script>

<template>
	<section class="search-bar">
		<form autocomplete="off" action="" class="form">
				<input ref="search" id="search-box" class="search-box" type="text" name="search" placeholder="Search Store" />
			<button class="search-submit-btn" id="search-submit-btn" type="submit">
				<img class="search-icon" src="./../../assets/images/icons/search.svg" alt="Search Icon">
			</button>
		</form>
	</section>
</template>

<style lang="scss" scoped>
	.search-bar {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
	.form {
		width: 100%;
		display: grid;
		height: 45px;
		grid-template-columns: 1fr 35px;
		column-gap: 5px;
		align-items: center;
		justify-content: center;
		border-radius: 50px;
		padding:0 5px;
		max-width: 500px;
		background-color: var(--searchbar-bg-color);
		box-shadow: 0px 0px 15px var(--searchbar-bg-color);
	}

	.search-box {
		font-size: 1em;
		border-radius: 30px;
		border: none;
		outline: none;
		height: 45px;
		width: 100%;
		font-family: "Roboto", sans-serif;
		color: white;
		background: transparent;
		background-color: transparent;
		margin-left: 10px;
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