<script setup lang="ts">
	import NavBar from './NavBar.vue';
</script>
<template>
	<NavBar />
	<footer class="footer">
		<div class="footer-container-1">
			<header class="footer-header">
				<img class="footer-header-logo" src="./../../assets/images/logo/Oasis.svg" alt="Site Logo"
					loading="lazy" />
				<router-link to="/" class="footer-header-title">Oasis</router-link>
			</header>
			<section class="footer-social">
				<a href="#" class="footer-social-link">
					<img src="./../../assets/images/icons/social/facebook.png" alt="Facebook Logo" loading="lazy">
				</a>
				<a href="#" class="footer-social-link">
					<img src="./../../assets/images/icons/social/instagram.png" alt="Instagram Logo" loading="lazy">
				</a>
				<a href="#" class="footer-social-link">
					<img src="./../../assets/images/icons/social/twitter.png" alt="Twitter Logo" loading="lazy">
				</a>
				<a href="#" class="footer-social-link">
					<img src="./../../assets/images/icons/social/slack.png" alt="Slack Logo" loading="lazy">
				</a>
				<a href="#" class="footer-social-link">
					<img src="./../../assets/images/icons/social/discord.png" alt="Discord Logo" loading="lazy">
				</a>
				<a href="#" class="footer-social-link">
					<img src="./../../assets/images/icons/social/linkedin.png" alt="LinkedIn Logo" loading="lazy">
				</a>
			</section>
		</div>
		<div class="footer-container-2">
			<section class="footer-intro">
				<p>World class E-commerce site, built with You in mind</p>
			</section>
			<div class="footer-link">
				<section class="footer-link-1">
					<a href="#" class="fl-1-link">Account</a>
					<a href="#" class="fl-1-link">Cart</a>
					<a href="#" class="fl-1-link">Saved</a>
					<a href="#" class="fl-1-link">Trending</a>
					<a href="#" class="fl-1-link">Featured</a>
				</section>
				<section class="footer-link-2">
					<a href="#" class="fl-2-link">Settings</a>
					<a href="#" class="fl-2-link">Privacy policy</a>
					<a href="#" class="fl-2-link">Terms & conditions</a>
					<a href="#" class="fl-2-link">Cookies</a>
					<a href="#" class="fl-2-link">Data collection</a>
				</section>
			</div>
		</div>
		<div class="footer-container-3">
			<section class="footer-copyright">
				<p>Oasis, &copy;Copyright, 2023, Foster Z</p>
			</section>
		</div>
	</footer>
</template>

<style lang="scss">
	.footer {
		background-color: rgba(0, 0, 0, 0.8);
		color: white;
		display: flex;
		align-items: flex-start;
		justify-content: center;
		flex-direction: column;
		padding: 0 10px;

		a {
			text-decoration: none;
			color: inherit;

		}
	}

	.footer-container-1,
	.footer-container-2,
	.footer-container-3 {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
	}

	.footer-container-2 {
		font-weight: lighter;
		max-width: 1200px;
		.footer-intro {
			max-width: 250px;
			font-weight: lighter;
			font-size: larger;
			font-family: "Montserrat Alternates", sans-serif;
		}
	}

	.footer-header {
		display: flex;
		align-items: center;
		width: 100%;

		.footer-header-logo {
			max-width: 40px;
			max-height: 40px;
		}

		.footer-header-title {
			color: inherit;
			font-size: 36px;
			font-family: "Montserrat Alternates", sans-serif;
			font-weight: lighter;
			text-decoration: none;
			letter-spacing: -2px;
		}
	}

	.footer-social {
		width: 100%;
		text-align: right;
		padding-right: 5px;
		display: grid;
		justify-content: flex-end;
		flex-direction: row;
		grid-template-columns: repeat(6, 25px);
		grid-gap: 5px;

		.footer-social-link {
			border-radius: 50%;
			display: inline-block;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			padding: .5px;
			transform: translateY(0);
			transition: transform, 300ms ease-in-out;

			img {
				max-width: 25px;
				max-height: 25px;
			}

			&::hover {
				transform: translateY(-10px);
				transition: transform, 300ms ease-in-out;
			}
		}
	}
	.footer-link {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		max-width: 325px;
	}
	.footer-link-1,
	.footer-link-2 {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: flex-start;
		font-size: medium;
		a {
			padding: 2.5px 10px;
			margin: 5px 0;
			border-radius: 15px;
			background-color: rgba(0, 0, 0, 0.4);
			&:hover {
				box-shadow: 0 0 10px black;
			}
		}
	}

	.footer-copyright {
		width: 100%;
		margin-top: 10px;
		padding: 5px 0;
		font-weight: medium;
		font-size: large;
		font-family: "Lato", sans-serif;
		p {
			text-align: center;
		}
	}
	
	@media (max-width: 650px) {
		.footer-container-2 {
			flex-direction: column;
			align-items: flex-start;
			.footer-intro {
				max-width: 100%;
				margin:10px 0;
			}
		}
	}
	@media (max-width: 400px){
		.footer-container-1 {
			flex-direction: column;
			align-items: center;
			justify-content: center;
			.footer-header {
				justify-content: center;
			}
			.footer-social {
				grid-gap: 10px;
				justify-content: center;
			}
		}
	}
	@media (max-width: 350px) {
		.footer-link {
			width: 100%;
			grid-template-columns: 1fr;
		}
		.footer-link-1, .footer-link-2 {
			a {
				width: auto;
			}
		}
		.footer-copyright {
			p {
				font-size: medium;
				font-weight: lighter;
			}
		}
	}
</style>