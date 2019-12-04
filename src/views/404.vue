<template>
	<div class='background-container'>
		<div class="background-container__number">
			404
		</div>

		<div class="background-container__text">
			YOUR DESTINATION IS OUT OF BOUND
		</div>
		<div class="navigation">
			<div class="navigation__link">
				GO BACK TO<router-link to="/" class="navigation__button">HOME</router-link>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {
		name: 'Error'
	}
</script>

<style lang="scss" scoped>
	.background-container{
		background-image:url('../assets/404.png');
		height: 100vh;
		width: 100vw;
		&__number{
			font-size: 230px;
    color: darkgray;
    opacity: 0.5;

		}
		&__text{
			    color: #fff;
    font-size: 39px;
    opacity: 0.7;
		}

	}
	
	

	.navigation {
		position: absolute;
		top: 85%;
		left: 50%;
		transform: translate(-50%, -50%);

		&__link {
			    color: #fff;
    // font-size: 39px;
    opacity: 0.7;
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