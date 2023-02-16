import "./Post.css";

function Post() {
	return (
		<div className="posts-container">
			{/* CONTENEDOR DE LAS PUBLICACIONES  */}
			<div>
				<h3 className="home-title">HOME</h3>
			</div>
			<form id="task-form">
				<div className="section-posting">
					<textarea
						id="task-description"
						rows="3"
						placeholder="¿Qué te gustaría compartirnos hoy?"
					></textarea>
					<div className="div-button-post">
						<button className="btn-task-save">Publicar</button>
					</div>
				</div>
			</form>

			{/* PUBLICACIONES */}
			<div className="post-user-container" id="post-container"></div>
			<div id="editModal"></div>
			{/* CIERRE POST-CONTAINER */}
		</div>
	);
}

export { Post };
