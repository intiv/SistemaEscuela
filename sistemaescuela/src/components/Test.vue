<template>
	<div id="test">
		<div id="container" class="row">
			<div class="input-field col s10 offset-l1">
				<input type="email" id="texto" placeholder="Name" v-model="mensaje" class="validate">
				<label for="texto" class="active">Yes</label>
			</div>
			<h1>{{mensaje}}</h1>
		</div>
	</div>

</template>

<script>
	export default{
		name: 'test',
		data() {
			return {
				mensaje: 'This is a test',
				msg2: 'yes',
				msg3: 'no'
			}
		},
		methods: {
			ChangeMessage(nMsg){
				this.mensaje=nMsg;
			}
		},
		props: ['mensaje','msg2']
	}
</script>

<style scoped>
	#test{
		margin: 1% 10%;
		border: 3px solid red;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		text-align: center;
		color: #2c3e50;
		background-color: lightblue;
	}
	#first{
		margin: 0.5% 0.5%;
		border: solid 2px orange;
	}
	#second{
		margin: 0.5% 0.5%;
		border: solid 2px yellow;
	}

</style>