import React from 'react'
import FooterStyle from "../styles/Footer.module.css"

function Footer() {
  return (
<>
<body>

  <section className={FooterStyle.video}>
    <iframe
      width="1260"
      height="615"
      src="https://www.youtube.com/embed/8YQM6VlfiqM"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>

    <article className={FooterStyle.infovideo}>
      <h1>TRAILER PELICULA 2023</h1>

      <p>Mira el video y no te pierdas de lo nuevo de mario bross y nintendo</p>

      <a href="https://www.youtube.com/watch?v=Yo-fQiQrOtA&t=33s">
        {" "}
        ver pelicula {" "}
      </a>
    </article>
  </section>

  <footer className={FooterStyle.footer}>
    <section>
      <a href=""> Servicio al cliente </a>

      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-youtube"></i>
      <i class="fa-brands fa-instagram"></i>

      <p>copyright. © 2023</p>
      <p>Diseñado por MARScript</p>
    </section>
  </footer>
</body>
</>
  )
}

export default Footer









