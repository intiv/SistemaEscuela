<template>
	<div id="root">
		<div class="row" id="contentContainer">
			Hola
			
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
		},
		beforeMount(){
			if(JSON.parse(localStorage.getItem('usuario'))===null){
				swal('No puede acceder a esta pagina!','Debe hacer login antes de acceder a la pagina','warning');
				this.$router.push('/login');
			}
		}
	}
</script>

<style scoped>
	

</style>