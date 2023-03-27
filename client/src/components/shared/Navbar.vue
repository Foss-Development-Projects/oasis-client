<script setup lang="ts">
import ThemeSwitchVue from './../modules/ThemeSwitch.vue';
import SearchBar from './../modules/SearchBar.vue';
</script>

<template>
    <nav class="navbar">
        <header class="navbar-header">
            <img class="navbar-header-logo" src="./../../assets/images/logo/Oasis.svg" alt="Site Logo" loading="lazy" />
            <p class="navbar-header-title">Oasis</p>
        </header>
		<ThemeSwitchVue />
        <SearchBar />
        <section class="navbar-profile-section">
            <img class="navbar-profile-pic" src="https://cdn-icons-png.flaticon.com/512/3237/3237447.png" alt="User Profile Picture" loading="lazy">
        </section>
		<button class="navbar-widget-button">
		    <img class="navbar-widget" src="./../../assets/images/icons/widget.svg" alt="User Profile " loading="lazy">
		</button>
    </nav>
    
</template>

<style lang="less" scoped>
    .navbar {
        width: 100%;
        background-color: rgba(0,0,0,0.8);
        height: 60px;
        display: grid;
        grid-template-columns: 150px 90px 1fr 50px 50px;
        align-items: center;
    }
    .navbar-header {
        display: flex;
        align-items: center;
		width: 100%;
    }
    .navbar-header-logo {
        max-width: 40px;
        max-height: 40px;
    }
    .navbar-header-title {
        color: white;
        font-size: 36px;
        font-family: "Montserrat Alternates", sans-serif;
        font-weight: lighter;
        letter-spacing: -2px;

    }
	.navbar-profile-section {
		display: flex;
		justify-content: center;
		align-items: center;
		.navbar-profile-pic {
		    max-width: 40px;
		    max-height: 40px;
		}
	}
	.navbar-widget-button {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		width: 40px;
		height: 40px;
		padding: 5px;
		transition: background-color, 100ms ease-in-out;
		&:hover {
			background-color: rgba(0,0,0,0.85);
			transition: background-color, 100ms ease-in-out;
		}
		.navbar-widget {
		    width: 100%;
		    height: 100%;
		}
	}
    
</style>