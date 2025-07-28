// Espera a que todo el contenido del DOM esté completamente cargado antes de ejecutar el script
document.addEventListener("DOMContentLoaded", () => {
  
  // Selecciona todas las imágenes que están dentro del contenedor con id "flores"
  const imagenes = document.querySelectorAll("#flores img");

  // Recorre cada imagen encontrada (excepto el logo, que no está en #flores)
  imagenes.forEach((img, index) => {

    // Cuando el cursor entra en la imagen, baja la opacidad al 70%
    img.addEventListener("mouseenter", () => {
      img.style.opacity = "0.7";
    });

    // Cuando el cursor sale de la imagen, vuelve la opacidad al 100%
    img.addEventListener("mouseleave", () => {
      img.style.opacity = "1";
    });

    // Cuando se hace clic en la imagen, se añade un borde rosado de 3px
    img.addEventListener("click", () => {
      img.style.border = "3px solid #ff69b4"; // Color rosado

      // Después de 500 milisegundos, se elimina el borde
      setTimeout(() => {
        img.style.border = "none";
      }, 500);
    });
  });
});
