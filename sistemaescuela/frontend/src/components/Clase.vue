<template>
	<div id="claseRoot">
		
		<div id="claseInfo">
			<h3>{{seccion.cuenta}}</h3>
			<ul>
				<li>Grado: {{seccion.grado}} </li>
				<li>Apartado: {{seccion.apartado}} </li>
				<li>Año: {{seccion.ano}} </li>
				<li>Maestro: {{seccion.maestro}} </li>
				
			</ul>
		</div>
		<hr>
		<h4><i class="material-icons small">list</i>Tareas</h4>
		<div id="tareasContainer">
			<ul class="collapsible" data-collapsible="accordion">
				<li>
					<div v-on:click="collapse" class="collapsible-header">Parcial 1</div>
					<div class="collapsible-body">
						<ul class="collapsible" data-collapsible="accordion" v-for="tarea in parcial1">
							<li>
								<div v-on:click="collapse" class="collapsible-header">
									{{tarea.titulo}} - {{tarea.parcial}}: {{tarea.valor}} Puntos
								</div>
								<div class="collapsible-body">
									<div class="row">
										<div class="col l10 m10 s10">
											<span>{{tarea.descripcion}} <br>
												Fecha asignada: {{tarea.fecha_de_envio}}<br>
												Fecha maxima de entrega: {{tarea.fecha_de_entrega}}
											</span> 
										</div>
										<div class="col l2 m2 s2">
											<button v-if="isStudent" class="waves-effect waves-light btn">
												Agregar Entrega
											</button>
										</div>
									</div>
								</div>
							</li>
							<hr>
						</ul>
					</div>
				</li>
				<li>
					<div v-on:click="collapse" class="collapsible-header">Parcial 2</div>
					<div class="collapsible-body">
						<ul class="collapsible" data-collapsible="accordion" v-for="tarea in parcial2">
							<li>
								<div v-on:click="collapse" class="collapsible-header">{{tarea.titulo}} - {{tarea.parcial}}: {{tarea.valor}} Puntos</div>
								<div class="collapsible-body">
									<div class="row">
										<div class="col l10 m10 s10">
											<span>{{tarea.descripcion}} <br>
												Fecha asignada: {{tarea.fecha_de_envio}}<br>
												Fecha maxima de entrega: {{tarea.fecha_de_entrega}}
											</span> 
										</div>
										<div class="col l2 m2 s2">
											<button class="waves-effect waves-light btn">
												<div class="buttonText" v-if="isStudent">Agregar Entrega</div>
												<div class="buttonText" v-if="!isStudent">Revisar Entregas</div>
											</button>
										</div>
									</div>
								</div>
							</li>
							<li><hr></li>	
						</ul>
					</div>
				</li>
				<li>
					<div v-on:click="collapse" class="collapsible-header">Parcial 3</div>
					<div class="collapsible-body">
						<ul class="collapsible" data-collapsible="accordion" v-for="tarea in parcial3">
							<li>
								<div v-on:click="collapse" class="collapsible-header">
									{{tarea.titulo}} - {{tarea.parcial}}: {{tarea.valor}} Puntos
								</div>
								<div class="collapsible-body">
									<div class="row">
										<div class="col l10 m10 s10">
											<span>{{tarea.descripcion}} <br>
												Fecha asignada: {{tarea.fecha_de_envio}}<br>
												Fecha maxima de entrega: {{tarea.fecha_de_entrega}}
											</span> 
										</div>
										<div class="col l2 m2 s2">
											<button class="waves-effect waves-light btn">
												<div class="buttonText" v-if="isStudent">
													Agregar Entrega
												</div>
												<div class="buttonText" v-if="!isStudent">Revisar Entregas</div>
											</button>
										</div>
									</div>
								</div>
							</li>
							<li><hr></li>	
						</ul>
					</div>
				</li>
				<li>
					<div v-on:click="collapse" class="collapsible-header">Parcial 4</div>
					<div class="collapsible-body">
						<ul class="collapsible" data-collapsible="accordion" v-for="tarea in parcial4">
							<li>
								<div v-on:click="collapse" class="collapsible-header">
									{{tarea.titulo}} - {{tarea.parcial}}: {{tarea.valor}} Puntos
								</div>
								<div class="collapsible-body">
									<div class="row">
										<div class="col l10 m10 s10">
											<span>{{tarea.descripcion}} <br>
												Fecha asignada: {{tarea.fecha_de_envio}}<br>
												Fecha maxima de entrega: {{tarea.fecha_de_entrega}}
											</span> 
										</div>
										<div class="col l2 m2 s2">
											<button class="waves-effect waves-light btn">
												<div class="buttonText" v-if="isStudent"><span>Agregar Entrega</span></div>
												<div class="buttonText" v-if="!isStudent">Revisar Entregas</div>
											</button>
										</div>
									</div>
								</div>
							</li>
							<li><hr></li>	
						</ul>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'Clase',
		data() {
			return{
				parcial1: [],
				parcial2: [],
				parcial3: [],
				parcial4: [],
				seccion: {
					cuenta: '',
					grado: '',
					apartado: '',
					maestro: '',
					ano: ''
				},
				colapsado: false,
				isStudent: false
			}
		},
		methods : {
			collapse(){
				if(!this.colapsado){
					$('.collapsible').collapsible();
					this.colapsado=true;
				}
			}
		},
		beforeMount(){
			$('.collapsible').collapsible();
			var query = this.$route.query;
			if(JSON.parse(localStorage.getItem('usuario'))===null){
				swal('No puede acceder a esta pagina!','Debe hacer login antes de acceder a la pagina','warning');
				this.$router.push('/login');
			}else{
				this.$http.get('http://localhost:8000/seccion/buscar?cuenta='+query.cuenta+'&grado='+query.grado+'&year='+query.year+'&apartado='+query.apartado).then((response)=>{
					if(response.body.success){
						this.seccion=response.body.seccion;
						this.$http.get('http://localhost:8000/usuarios/maestros/'+this.seccion.maestro).then((respuesta)=>{
							if(respuesta.body.success){
								this.seccion.maestro=respuesta.body.teacher.nombre;
							}else{
								swal('Error obteniendo maestro',respuesta.body.message,'error');
							}
						});
						var sec=(query.year+'_'+query.grado+'_'+query.apartado+'_'+query.cuenta);
						this.$http.get('http://localhost:8000/tareas/buscar/seccion/'+sec).then((response)=>{
							if(response.body.success){
								for(var i =0; i<response.body.tareas.length; i++){
									var currHW = response.body.tareas[i];
									if(currHW.parcial===1){
										this.parcial1.push(currHW);
									}else if(currHW.parcial===2){
										this.parcial2.push(currHW);
									}else if(currHW.parcial===3){
										this.parcial3.push(currHW);
									}else if(currHW.parcial===4){
										this.parcial4.push(currHW);
									}
								}
							}else{
								swal('Error obteniendo tareas','Revise su conexion a internet o pongase en contacto con los desarrolladores','erro');
							}
						});						
					}else{
						swal('Error obteniendo seccion',response.body.message+', '+response.body.tipo,'error');
					}
				});
			}
		}
	}
</script>

<style scoped>

	#claseInfo{
		text-align: center;
	}

	#tareasContainer{
		max-height: 50vh;
		overflow-y: scroll;
		overflow-x: auto;
		display: block;
	}

	.buttonText{
		font-size: 1vw;
	}
</style>