<template>
	<div id="root">
		<div class="row" id="header">
			<div class="col l4 m4 s4">
				<img src="../icon.jpg" alt="icono" id="logo">
			</div>
			<div class="col l8 m8 s8	">
				<p>Saint John's Bilingual School</p>
			</div>
			<br>
			<br>
		</div>
		<div class="row">
			<div class="col l10 m10 s10 offset-l1 offset-m1 offset-s1">
				<input type="text" name="username" id="username" placeholder="Username">
			</div>
		</div>
		<div class="row">
			<div class="col l10 m10 s10 offset-l1 offset-m1 offset-s1">
				<input type="password" name="password" id="password" placeholder="******">
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
		
	}

	#header{
		background-color: #16497B;
		padding-left: 10px;
	}

	#app{
		background-image: url('../bluegradient.jpg');
	}


</style>

<style>
	body{
		background-image: url('../bluegradient.jpg');
	}
</style>