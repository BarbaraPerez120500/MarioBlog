import React from "react";
import FooterStyle from "../styles/Footer.module.css";

function Footer() {
  return (
    <>
      <section className={FooterStyle.video}>
        <h1>TRAILER PELICULA 2023</h1>
        <iframe
          width="1280"
          height="600"
          src="https://www.youtube.com/embed/8YQM6VlfiqM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <article className={FooterStyle.infovideo}>
          <a href="https://www.youtube.com/watch?v=Yo-fQiQrOtA&t=33s">
            ver pelicula
          </a>
          <p>
            Mira el video y no te pierdas de lo nuevo de mario bross y nintendo
          </p>
        </article>

        <footer className={FooterStyle.footer}>
          <a href=""> Servicio al cliente </a>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-instagram"></i>
        </footer>
        <p>Diseñado por MARScript</p>
        <p>copyright. © 2023</p>
      </section>
    </>
  );
}

export default Footer;
