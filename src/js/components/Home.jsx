import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [input, setInput] = useState('')
	const [tareas, setTareas] = useState([])



	const ListaTareas = (e) => {
		if (e.key === 'Enter') {
			setTareas([...tareas, input])
			setInput('')
		}

	}
	const handleremove = (tarea) => {

		const Tareasactualizadas = tareas.filter(e => e !== tarea)
		setTareas(Tareasactualizadas)
		if (Tareasactualizadas.length === 0) {
			setInput('No hay mas tareas, introduzca una')
		}

	}
	const handleCleanMessage = () => {
		if (tareas.length === 0) {
			setInput('')
		}
	}

	return (
		<div className="ContenedorTareas ">
			<h1>LISTA DE TAREAS</h1>

			<input className="input" type="text" value={input} onChange={e => setInput(e.target.value)} onKeyDown={ListaTareas} onMouseEnter={handleCleanMessage} placeholder="Introduce tarea" />

			<ul className="ul" >
				{tareas.map((tarea, index) => <div className="listaOrdenada" key={index}>
					<li className="lista">{tarea}</li>
					<button className="boton-eliminar" onClick={() => (handleremove(tarea))}>❌</button>

				</div>)}
			</ul>


		</div>

	);
};

export default Home;