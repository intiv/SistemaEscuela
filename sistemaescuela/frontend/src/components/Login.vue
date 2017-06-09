<template>
	<div id="root">
		<div class="row" id="header">
			<div class="col l4 m4 s4">
				<img src="./src/icon.jpg" alt="icono" id="logo">
			</div>
			<div class="col l8 m8 s8" id="title">
				<p>Saint John's Bilingual School</p>
			</div>
		</div>
		<div id="body">
			<div class="row">
				<div class="input-field col l10 m10 s10 offset-l1 offset-m1 offset-s1">
					<input type="text" id="username" placeholder="Username" class="validate">	
				</div>
			</div>
			<div class="row">
				<div class="col l10 m10 s10 offset-l1 offset-m1 offset-s1 input-field">
					<input type="password" name="password" id="password" placeholder="Password">
				</div>
			</div>
			<div class="row" id="boton">
				<div class="col l12 m12 s12">
					<button class="btn">asd</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name : 'login',
		mounted() {
			console.log(this.$route.path);
		}
	}
</script>

<style scoped>

	#root{
		margin-left: 30%;
		margin-right: 20%;
		margin-top: 10%;
		width: 49vw;
		height: 70vh;
		border: 1px solid red;
		background-color: lightgrey;
	}

	#header{
		
		background-color: #7B2323;
		padding-left: 10px;
		font-size: 5vh;
		padding-top: 10px;
	}

	#logo{
		-webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
         -o-animation: fadein 2s; /* Opera < 12.1 */
            animation: fadein 2s;

	}

	#title{
		-webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 2s; /* Firefox < 16 */
        -ms-animation: fadein 2s; /* Internet Explorer */
         -o-animation: fadein 2s; /* Opera < 12.1 */
            animation: fadein 2s;
	}

	@keyframes fadein {
	    from { opacity: 0; }
	    to   { opacity: 1; }
	}

	/* Firefox < 16 */
	@-moz-keyframes fadein {
	    from { opacity: 0; }
	    to   { opacity: 1; }
	}

	/* Safari, Chrome and Opera > 12.1 */
	@-webkit-keyframes fadein {
	    from { opacity: 0; }
	    to   { opacity: 1; }
	}

	/* Internet Explorer */
	@-ms-keyframes fadein {
	    from { opacity: 0; }
	    to   { opacity: 1; }
	}

	#body{
		background-color: lightgrey;
		padding-top: 20px;
	}

	#app{
		background-image: url('./src/bluegradient.jpg');
	}

	#boton{
		margin-left: 45%;
	}

	.btn{
		background-color: #7B2323;
	}

	input{
		height: 5vh;
	}

	input::placeholder{
		color: black;
	}

</style>

<style>
	body{
		background-image: url('./src/bluegradient.jpg');
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>