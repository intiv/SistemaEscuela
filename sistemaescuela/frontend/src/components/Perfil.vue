<template>
	<div id="perfilRoot">
		<div class="row">
			<div class="col l12 m12 s12">
				<div class="row">
					<div class="col l10 m10 s10 offset-l1">
						<div id="perfilHeader">
							<h3 v-if="isStudent">{{alumno.nombre}}</h3>
							<h4 v-if="isStudent">{{alumno.cuenta}}</h4>
							<h3 v-if="!isStudent">{{alumno.id}} - {{alumno.nombre}} {{alumno.apellido}}</h3>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col l10 m10 s10 offset-l1">
						<div id="perfilBody">
							<p v-if="isStudent">{{alumno.id_padre}}</p>
							<ul v-if="!isStudent">
								<li>Tipo: {{alumno.tipo}}</li>
								<li>usuario: {{alumno.usuario}}</li>
								<li>fecha nacimiento: {{alumno.fecha_de_nacimiento}}</li>
								<li>telefono: {{alumno.telefono}}  </li>
								<li>direccion: {{alumno.direccion}}  </li>
								<li>correo: {{alumno.correo}} </li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'perfil',
		data(){
			return {
				alumno: {

				},
				isStudent: true
			}
		},
		beforeMount(){
			if(JSON.parse(localStorage.getItem('usuario'))===null){
				swal('No tiene acceso!','Debe hacer login antes de acceder a la pagina','warning');
				this.$router.push('/login');
			}else{

				alert(this.$route.path.substr(8,7));
				if(this.$route.path.substr(8,6)==='alumno'){
					this.isStudent=true;
					this.$http.get('http://localhost:8000/alumnos/buscar/cuenta/'+this.$route.params.cuenta).then((response)=>{
						if(response.body.success){
							this.alumno=response.body.student;
						}else{
							swal('Error!','No se pudo obtener el alumno de la BD\nRevise su coneccion a internet','error');
						}
					});
				}else if(this.$route.path.substr(8,7)==='maestro'){
					this.isStudent=false;
					this.$http.get('http://localhost:8000/usuarios/maestros/'+this.$route.params.id).then((response)=>{
						if(response.body.success){
							this.alumno=response.body.teacher;
						}else{
							swal('Error!','No se pudo obtener el maestro de la BD\nRevise su coneccion a internet','error');
						}
					});
				}else{
					swal('URL invalida!', '', 'error');
					this.$router.push('/');
				}
			}
		}
	}
</script>

<style scoped>
	

</style>	