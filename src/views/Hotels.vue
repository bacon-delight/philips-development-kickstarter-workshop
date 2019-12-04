<template>
	<div class="hello">
		<div class="partners"><div class="hotel-partners">Hotel Partners</div></div>
		<div class="hotels">
			<div class="first-hotel" v-for="hotel in hotelsList" :key="hotel.id">
				<div class="hotel1 column">
					{{hotel.name}}
					<p>{{hotel.location}}</p>
					<p>{{hotel.description}}</p>
				</div>
				<div class="price1 column1">Price (Per Night){{hotel.price}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Hotels',
		data: function() {
			return {
				hotelsList : [
				{
					"id":1,
					"name": "Jason's Cottage",
					"location": "Gudalur",
					"description": "Hotel Description",
					"price": "Rs. 2400/-"
				},
				{
					"id":2,
					"name": "Radisson Blu",
					"location": "Banglore",
					"description": "Radisson Blu is a worldwide upper upscale hotel brand. Its hotels are found in major cities, key airport gateways and leisure destinations.",
					"price": "Rs. 5000/-"
				}]
			}
		}
	}
</script>

<style lang="scss" scoped>
	*{
	margin:0;
	padding: 0
	}
	.partners{
	  background-color: #00796B;
	  padding: 20px;
	  font-size: 40px;
	  color: white;
	  height: 18vh;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	}
	.hotel-partners{
	border: 1px solid white;
	    width: 27%;
	    margin: 0 auto;
	    height: 8vh;
	    display: flex;
	    align-items: center;
	    justify-content: center;
	}
	.hotels{
	  clear: both;
	 background-color: rgb(180, 255, 219);
	}

	.hotel1{
	 background-color: tomato;
	  border: 5px solid rgb(143, 79, 79);
	  height: 15vh;
	  margin: 5px;
	}

	.price1{
	 background-color: tomato;
	  border: 5px solid rgb(143, 79, 79);
	  height: 15vh;
	  margin: 5px;
	}

	.column {
	  float: left;
	  width: 68%;

	}
	.column1 {
	  float: right;
	  width: 29%;
	}
	.test{
	  background-color:rgb(180, 255, 219);
	  }
</style>