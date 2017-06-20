<template>
	<div id="root">
		<div v-bind:style="{ backgroundImage: 'url(../back_blue.jpg)'}">
		<div> 
			<input type="text " name="buscar_maestros">
		</div>
		<div id="botondemodal">
			<button id="show-modal" v-on:click="showModal = true"  class="btn">Crear nuevo Maestro</button>
		</div>
		
		<div class="row" >
			<div class="col l10 offset-l1" id="tablaContainer">
				<table id="tabla" class="centered bordered white">
					<thead>
						<tr>
							<td>ID</td>
							<td>Nombre</td>
							<td>Apellido</td>
							<td>Fecha de Nacimiento</td>
							<td>Teléfono</td>
							<td>Dirección</td>
							<td>Correo</td>
						</tr>
					</thead>
					<tbody>
						<tr v-for="row in rows">
							<td>{{row.id}}</td>
							<td>{{row.nombre}}</td>
							<td>{{row.apellido}}</td>
							<td>{{row.fecha_de_nacimiento}}</td>
							<td>{{row.telefono}}</td>
							<td>{{row.direccion}}</td>
							<td>{{row.correo}}</td>

							<td>
								<a v-on:click="removeStudent(row)"><i class="small material-icons">delete</i></a>
						
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		</div>
		<modal v-if="showModal" @close="showModal = false">

		</modal>
	</div>
</template>

<script>
import modal from './modal.vue'
	export default{
		name: 'principal',
		data(){
			return{
				showModal:false,
				rows: []
			}
		},
		methods : {
			
			removeMaestro(row){
				var index=this.rows.indexOf(row);
				this.$http.delete('http://localhost:8000/usuarios/borrar/'+ this.rows[index]._id).then((response)=>{
				});
				this.rows.splice(index,1);	
				if(this.rows.length==0){
					this.rows='false';
				}
				
			}
		},
		components : {
			modal
		},

		beforeMount(){
			
			this.$http.get('http://localhost:8000/usuarios/maestros').then((response)=>{
					this.rows=response.body;
				});
		}
	}
</script>

<style scoped>   
	#root{
		margin: 1% 25% 2% 25%;	
		background-image: url('../back_blue.jpg');
		background-size: cover;	
		font-family: "Roboto";
	}

	#inputs{
		border-radius: 8px;
		border: solid lightgrey;
		padding: 2%;
		background-color: #0C374D;
	}

	.input-field input[type="text"]:focus + label{
		color: #2890CC !important;
	}

	.input-field input[type="text"]:focus{
		border-bottom: 1px solid #2890CC;
		box-shadow: 0 1px 0 0 #2890CC;
	}

	.input-field input[type="text"]{
		border-bottom: 1px solid white;
		box-shadow: 0 1px 0 0 white;
		color: white;
	}

	.input-field label{
		color: white;
		font-size: 14px !important;
	}

	h2{
		text-align: center;
		color: white;
	}

	.btn{
		background-color: #2890CC !important; 
	}

	table{
		border: 0.5px solid black;
		text-align: center;
	}
</style>