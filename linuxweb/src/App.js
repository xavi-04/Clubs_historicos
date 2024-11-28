import React, { useState } from "react";
import "./App.css";

// Datos de los equipos
const equipos = [
  /*{
    nombre: "Real Madrid",
    escudo: "/images/real_madrid.png",
    color: "#febd02", // Amarillo dorado (color de la corona)
    info: `
      Fundado el 6 de marzo de 1902, el Real Madrid es el club con más títulos de Champions League (15).
      Su estadio es el Santiago Bernabéu, Madrid (capacidad: 83,168). Ha ganado 35 títulos de La Liga, 19 Copas del Rey y es considerado
      el mejor club del siglo XX por la FIFA, ha sido cuna de grandes figuras como Di Stéfano, Raúl, y Cristiano Ronaldo.
    `,
  },*/
  {
    nombre: "AC Milan",
    escudo: "/images/milan.png",
    color: "#ce2324", // Rojo AC Milan
    info: `
      Fundado el 16 de diciembre de 1899, el AC Milan es uno de los clubes más exitosos de la historia con 7 Champions League, 
      19 títulos de la Serie A y 5 Copas de Italia. Su estadio, el San Siro (también llamado Stadio Giuseppe Meazza), es compartido con el Inter de Milán.
      El AC Milan es conocido por sus colores rojo y negro, y ha sido hogar de leyendas como Maldini, Baresi, Kaká, Marco van Basten, Andriy Shevchenko.
    `,
  },
  {
    nombre: "FC Barcelona",
    escudo: "/images/barcelona.png",
    color: "#a50044", // Rojo granate (color del uniforme)
    info: `
      Fundado el 29 de noviembre de 1899, el Barcelona ha ganado 5 Champions League, 27 títulos de La Liga y 31 Copas del Rey.
      Es conocido por su academia 'La Masía', de donde han salido jugadores como Messi, Xavi e Iniesta. 
      Su estadio, el Spotify Camp Nou, Barcelona (capacidad: 99,354), es uno de los más icónicos. Su lema es "Més que un club" ("Más que un club"), 
      reflejando su importancia cultural y social en Cataluña. Conocido por su estilo de juego tiki-taka bajo entrenadores como Pep Guardiola. 
      En 2009, se convirtió en el primer club en ganar un sextete (6 títulos en una temporada).
    `,
  },
  /*{
    nombre: "Liverpool",
    escudo: "/images/liverpool.png",
    color: "#c8102e", // Rojo vibrante (color del uniforme)
    info: `
      Fundado el 3 de junio de 1892, el Liverpool es el club más exitoso de Inglaterra en competiciones europeas con 6 Champions League (Equipo ingles con más títulos europeos).
      Ha ganado 19 títulos de la Premier League. Ha tenido jugadores icónicos como Steven Gerrard, Kenny Dalglish e Ian Rush y 
      es famoso por su estadio Anfield, Liverpool (capacidad: 54,074) y su himno "You'll Never Walk Alone".
    `,
  },*/
  {
    nombre: "FC Bayern",
    escudo: "/images/bayern.png",
    color: "#dc052d", // Rojo Bayern
    info: `
      Fundado el 27 de febrero de 1900, el Bayern Múnich domina el fútbol alemán con 33 títulos de la Bundesliga y 6 Champions League. Logró el segundo sextete de la historia del fútbol, igualando al FC Barcelona en 2009.
      Su estadio, el Allianz Arena, Múnich (capacidad: 75,024) es conocido por su arquitectura única. El club también es reconocido por su 
      consistencia y talento. Ha sido el hogar de figuras como Franz Beckenbauer, Gerd Müller, y Philipp Lahm asi como tambien su academia juvenil es una 
      de las más exitosas de Europa, produciendo estrellas como Thomas Müller y Bastian Schweinsteiger.
    `,
  },
  /*{
    nombre: "Manchester United",
    escudo: "/images/Manchester_United.png",
    color: "#da291c", // Rojo intenso (color del uniforme)
    info: `
      Fundado en 1878, el Manchester United es uno de los clubes más populares del mundo. Ha ganado 20 títulos de liga, 
      12 FA Cups y 3 Champions League. Su estadio, Old Trafford, es conocido como "El Teatro de los Sueños".
    `,
  },*/
];

function App() {
  const [verMas, setVerMas] = useState(null);

  const toggleVerMas = (index) => {
    setVerMas(verMas === index ? null : index);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>⚽ Los 5 Equipos Históricos del Mundo ⚽</h1>
      </header>
      <div className="tarjetas-container">
        {equipos.map((equipo, index) => (
          <div 
          key={index} 
          /*className="tarjeta"*/
          className={`tarjeta ${verMas === index ? "expandida" : ""}`}
          style={{ borderTop: `8px solid ${equipo.color}` }} // Detalle de color personalizado
          >
            <img src={equipo.escudo} alt={`${equipo.nombre} escudo`} className="escudo" />
            <h2>{equipo.nombre}</h2>
            <button onClick={() => toggleVerMas(index)}>
              {verMas === index ? "Ver menos" : "Ver más"}
            </button>
            {verMas === index && <p className="info">{equipo.info}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
