<template>
	<div class="background-container">

		<div class="center-container">
			<h1 class="center-container__header">Contact <span class="center-container__header--outline">Us</span></h1>
			<div class="center-container__input-box">
				<img width="25%" height="25%" src="..\assets\friend.jpg"/>
			</div>
			<div class="center-container__input-box">
				<input class="center-container__input" type="text" placeholder="Name" />
			</div>
			<div class="center-container__input-box">
				<input class="center-container__input" type="text" placeholder="Phone" />
			</div>
			<div class="center-container__input-box">
				<input class="center-container__input" type="text" placeholder="Email" />
			</div>
			<div class="center-container__input-box">
				<input class="center-container__input" type="text" placeholder="Comments" />
			</div>

			<div class="center-container__input-box">
				<div class="navigation__link">
					<router-link to="" class="navigation__button">Submit</router-link>
				</div>
			</div>
		</div>

		<div class="navigation">
			<div class="navigation__link">
				<router-link to="/" class="navigation__button">Home</router-link>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'Contact'
	}
</script>

<style lang="scss" scoped>
	.background-container {
		height: 100vh;
		width: 100vw;
		background-image: linear-gradient(to right bottom, rgba(#6f0000, 0.8), rgba(#200122, 0.8)),url("../assets/backk.jpg");
		background-size: cover;
		position: relative;
	}

	.center-container {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: block;
		text-align: center;

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

		&__input-box {
			margin: 1rem 0;
		}

		&__input {
			width: 40vw;
			font-size: 1rem;
			letter-spacing: .15rem;
		}
	}

	.input {
		
	}

	.navigation {
		position: absolute;
		top: 85%;
		left: 50%;
		transform: translate(-50%, -50%);

		&__text

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