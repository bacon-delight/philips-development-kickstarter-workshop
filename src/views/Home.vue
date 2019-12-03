<template>
	<div class="background-container">

		<img src="../assets/drone.png" alt="Drone Image" class="drone">
		
		<div class="center-container">
			<h1 class="center-container__header">Explore <span class="center-container__header--outline">Nature</span></h1>
		</div>

		<div class="navigation">
			<div class="navigation__link" v-for="link in navigation" :key="link">
				<router-link :to="'/'+link" class="navigation__button">{{ link }}</router-link>
			</div>
		</div>

	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		name: "Home",
		data() {
			return {
				navigation: []
			}
		},
		mounted() {
			axios.get("https://my-json-server.typicode.com/bacon-delight/philips-development-kickstarter-workshop-db/navigation")
				.then((response) => {
					this.navigation = response.data;
				});
		}
	}
</script>

<style lang="scss" scoped>
	.background-container {
		height: 100vh;
		width: 100vw;
		background-image: linear-gradient(to right bottom, rgba(#000046, 0.8), rgba(#1CB5E0, 0.8)), url("../assets/landing2.jpg");
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
	}

	.drone {
		width: 15rem;
		position: absolute;
		top: 30%;
		left: 50%;
		transform: translate(-50%, -50%);
		animation: fly 3s ease-in-out infinite;
	}

	@keyframes fly {
		0% {
			transform: translate(-50%, -46%);
		}
		50% {
			transform: translate(-50%, -54%);
		}
		100% {
			transform: translate(-50%, -46%);
		}
	}

	.center-container {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: block;

		&__header {
			font-family: 'Archivo Black', sans-serif;
			color: #fff;
			text-transform: uppercase;
			letter-spacing: .3rem;
			text-align: center;

			&--outline {
				color: transparent;
				font-family: inherit;
				-webkit-text-stroke: 1px #fff;
			}
		}
	}

	.navigation {
		position: absolute;
		top: 85%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;

		&__link {
			display: inline-block;
			margin: 0rem .8rem;

			@media screen and (max-width: 768px) {
				display: block;
				margin: 1rem 0;
			}
		}

		&__button {
			text-decoration: none;
			color: #fff;
			letter-spacing: .25rem;
			text-transform: uppercase;
			background-image: linear-gradient(120deg, transparent 0%, transparent 50%, #fff 50%);
			background-size: 250%;
			padding: .3rem .7rem;
			transition: all .8s;

			&:hover {
				background-position: 100%;
				color: #000046,
			}
		}
	}
</style>