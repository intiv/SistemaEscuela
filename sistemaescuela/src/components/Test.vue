<template>
	<div id="test">
		<div id="first">
			<input type="text" placeholder="Name" v-on:click="ChangeMessage('hola todos')" v-model="mensaje">
			<h1>{{mensaje}}</h1>
		</div>

		<div id="second">no</div>
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