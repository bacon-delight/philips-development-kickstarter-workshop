<template>
	<div>
		<div class="Header-container">

			<div class="center-container">
				<h1 class="center-container__header--bold">PACKAGES <span class="center-container__header--bold">In INDIA</span></h1>
			</div>

			<div class="bottom-container">
				<h1 class="bottom-container__header--bold">PACKAGE <span class="bottom-container__header--bold">Card 1</span></h1>
				<h3 class="bottom-container__header--bold">Title <span class="bottom-container__header--bold">Card 1</span> <span class="bottom-container__header--bold">Description</span> <span class="bottom-container__header--bold">Duration</span> <span class="bottom-container__header--bold">Price</span></h3>
			</div>

			<div class="navigation">
				<div class="navigation__link">
					<router-link to="/" class="navigation__button--bold">VIEW PACKAGES</router-link>
				</div>
			</div>

		</div>

	</div>
</template>

<script>
	export default {
		name: 'Packages'
	}
</script>

<style lang="scss" scoped>
	.Header-container {
		height: 100vh;
		width: 100vw;
		background-image: url("../assets/Beach-Bag.jpg");
		background-repeat: no-repeat;
		background-size: Cover;
		position: relative;
	}

	.Middle-container {
		height: 50vh;
		width: 50vw;
		background-image: url("../assets/logo.png");
		background-repeat: no-repeat;
		background-size: Fill;
		position: relative;
	}


	.center-container {
		position: absolute;
		top: 10%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: block;

		&__header {
			font-family: 'Archivo Black', sans-serif;
			color: #fff;
			text-transform: uppercase;
			letter-spacing: .3rem;

			&--outline {
				color: transparent;
				font-family: inherit;
				-webkit-text-stroke: 1px #fff;
			}
		}
	}

	.bottom-container {
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

		&__link {

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