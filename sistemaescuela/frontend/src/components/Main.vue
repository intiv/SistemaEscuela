<template>
	<div id="root">
		<div class="row" id="contentContainer">
			
			
		</div>
	</div>
</template>

<script>
	export default {
		name : 'main',
		data(){
			return{
				nombre : 'Main Page',
				show : 'true'
			}
		},
		methods : {
			getNombre() {
				return this.nombre;
			},
			toggleShow() {
				if(this.show ==='true'){
					this.show ='false';
				}else{
					this.show ='true';
				}
			}
		}
	}
</script>

<style scoped>
	

</style>