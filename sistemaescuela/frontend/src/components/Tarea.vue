<template>
	<div id="tareaRoot">
		<div class="row">
			<div class="col l8 m8 s8 push-l2 push-m2">
				<div id="tarea-info">
					<div id="tareaHeader">
						<h3 id="tareaTitulo">{{tarea.titulo}}</h3>
						<p id="tareaDescripcion">{{tarea.descripcion}}</p>
					</div>
					<hr>
					<div id="tareaBody">
						<ul>
							<li><u>-Seccion:</u> {{tarea.seccion}}</li>
							<li><u>-Puntuacion:</u> {{tarea.porcentaje_obtenido}}/{{tarea.valor}}</li>
							<li><u>-Parcial:</u> {{tarea.parcial}}</li>
							<li><u>-Fecha inicial:</u> {{tarea.fecha_de_envio}}</li>
							<li><u>-Fecha maxima de entrega:</u> {{tarea.fecha_de_entrega}}</li>
							<br>
							<form>
								<input type="file" id="subirTarea" @change="onFileChange">
							</form>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col l10 m10 s10 offset-l1">
				<div id="tarea-buttons">
					<div class="row">
						<div class="col l4 push-l1">
							<button  disabled class="waves-effect waves-light btn" id="enviarTarea" v-on:click="enviar">Enviar</button>
						</div>
						<div class="col l4">
							<button id="cancelarTarea" v-on:click="cancelar" class="waves-effect waves-light btn">Cancelar</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'tarea',
		data(){
			return{
				tarea: {

				},
				file: null
			}
		},
		methods: {
			onFileChange: function onFileChange(e) {
                var files = e.target.files || e.dataTransfer.files;
                
                if (!files.length)
                    return;
                // this.formData.append('file', files[0]);
                //alert(this.formData.get('file'));
                this.file = files[0];
                alert(this.file.name);
                $('#enviarTarea').prop('disabled',false);
            },
			cancelar(){
				var el=$('#subirTarea');
				el.wrap('<form>').closest('form').get(0).reset();
				el.unwrap();
			},
			enviar(){
				alert(this.file);
			}
		},
		beforeMount(){
			if(JSON.parse(localStorage.getItem('usuario'))===null){
				swal('No puede acceder a esta pagina!','Debe hacer login antes de acceder a la pagina','warning');
				this.$router.push('/login');
			}else{
				this.$http.get('http://localhost:8000/tareas/buscar/id/'+this.$route.params.id).then((response)=>{
					if(response.body.success){
						this.tarea=response.body.tarea;
					}else{
						swal('something went wrong','','error');
					}
				});
			}
		}
	}
</script>

<style scoped>

	#cancelarTarea{
		background-color: #7D2323;
		margin-left: 4vw;
	}

	#enviarTarea{
		background-color: #15497B;
	}

	#tarea-buttons{
		margin-left: 15vw;
	}

	#tareaRoot{
		margin-top: 1vh;
	}
	
	#tareaHeader, #tareaBody{
		margin-left: 10vw;
	}

	#tareaTitulo{
		margin-left: 3vw;
	}
	
	@media only screen
	and (min-device-width: 320px)
	and (max-device-width: 767px)
	{
		#tarea-buttons{
			margin-left: 40%;
		}
	}

	@media only screen
	and (min-device-width: 768px)
	and (max-device-width: 1024px){
		#tarea-buttons{
			margin-left: 40%;
		}
	}

</style>