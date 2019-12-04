<template>
	<div class="background-container">
		
		<div class="center-container">
			<h1 class="center-container__header">Blogs</span></h1>
		</div>
		<div >
			<div class="Blog-container">
				<h3 class="Blog-container__header">Great Travel Blogs From Around The World To Inspire You</h3>
				<div class="Blog1"> 
					<div class='Blog-container__authorName'>By author</div>


					<p class='Blog-container__content'>
						
						Outbound tourism is what you may be most familiar with. It involves the people going from British Columbia to other provinces, territories or countries. For example, going to Hawaii for a holiday is considered outbound tourism.

						Inbound Tourism
						The tourists coming to BC from other places are called inbound tourists. BC competes in a global market to attract tourists from the United States, Japan, Germany and many other countries. The industry also implements marketing campaigns aimed at attracting travellers from other parts of Canada, as well as from within British Columbia.

						Domestic Tourism
						Approximately half of the tourists in BC each year are actually from within the province.  BC Stats and Destination BC consider those travelling beyond their usual environment (typically more than 80 km from home) for business or for pleasure to be tourists.

						Tourism Sectors
						There are different ways to measure the size of the tourism industry, as tourism does not conform to the usual ways that industries are defined, such as manufacturing, forestry and other industries. Tourism constitutes a wide variety of sectors that provide diverse products and services to visitors. However, these businesses also provide products and services to local residents.						
					</p>
				</div>
			</div>
			<div class="Blog2">
				<h3 class="Blog2__header"></h3>
				<div>
					<p>

					</p>
				</div>
			</div>
			<div class="Blog3">
				<h3 class="Blog3__header"></h3>
				<div>
					<p>

					</p>
				</div>
			</div>




			<div class="Blog4">
				<h3 class="Blog4__header"></h3>
				<div>
					<p>

					</p>
				</div>
			</div>
		</div>

		<div class="navigation">
			<div class="navigation__link">
				<router-link to="/" class="navigation__button">Home Page</router-link>
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
	.background-container {
		height: 100vh;
		width: 100vw;
		background-image: url('../assets/2.png');
		
		
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
	}

	.center-container {
		position: absolute;
		top: 20%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: block;



		&__header {
			font-family: 'Archivo Black', sans-serif;
			
			text-transform: uppercase;
			letter-spacing: .3rem;

			&--outline {
				color: transparent;
				font-family: inherit;
				-webkit-text-stroke: 1px #fff;
			}
		}
	}
	
	
	

		.Blog-container{
			
		position: relative;
		width:50%;
		height: auto;
		// color: #ffffff;
		padding-top: 300px;
		display: block;
		left:25%;
		&__blog1{
			background-color:#fff;
		}
		

		&__header{
		background: #fff;
		font-size:xx-large;
		}

		&__content{
			    color: #000;
			font-size: 0%;
			font-size: 22px;
    		font-weight: bold;
			opacity:0.5;
		}
			&__authorName{

			}
		}

	

	.navigation {
		

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