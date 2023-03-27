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
    </nav>
    
</template>

<style lang="less" scoped>
    .navbar {
        width: 100%;
        background-color: rgba(0,0,0,0.7);
        height: 60px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 100px;
        align-items: center;
    }
    .navbar-header {
        display: flex;
        justify-content: flex-start;
        align-items: center;

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
    
</style>