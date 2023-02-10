function Post() {
  return (
    <div class="posts-container">
      {/* CONTENEDOR DE LAS PUBLICACIONES  */}
      <div>
        <h3 class="home-title">HOME</h3>
      </div>
      <form id="task-form">
        <div class="section-posting">
          <textarea id="task-description" rows="3" placeholder="¿Qué te gustaría compartirnos hoy?"></textarea>
          <div class="div-button-post">
            <button class="btn-task-save">Publicar</button>
          </div>
        </div>
      </form>

      {/* PUBLICACIONES */}
      <div class="post-user-container" id="post-container"></div>
      <div id="editModal"></div>
      {/* CIERRE POST-CONTAINER */}
    </div>
  )
}

export { Post }