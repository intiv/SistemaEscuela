<template>
	<div id="test">
		<div id="container" class="row">
			<div class="input-field col l12 m12 s12">
				<input type="email" id="texto" placeholder="Name" v-model="mensaje" class="validate">
				<label for="texto" class="active">Yes</label>
			</div>
			<h1>{{mensaje}},{{msg2}}</h1>
		</div>
	</div>

</template>

<script>
	export default{
		name: 'test',
		data() {
			return {
				msg3: 'no'
			}
		},
		methods: {
			ChangeMessage(nMsg){
				this.mensaje=nMsg;
			}
		},
		props: ['mensaje','msg2'],
		mounted(){
			console.log(this.$route.path);
		}
	}
</script>

<style scoped>
	#test{
		margin-top: 10px;
		margin-right: 10px;
		border: 3px solid red;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		text-align: center;
		color: #2c3e50;
		background-color: lightblue;
	}
	template{
		height: 90vh;
		width: 90vw;
	}
</style>