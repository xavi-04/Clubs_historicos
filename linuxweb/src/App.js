import React from "react";
import "./App.css";

// Datos de los equipos
const equipos = [
  {
    nombre: "El Vardrid",
    escudo: "/images/real_madrid.png",
    color: "#febd02", // Amarillo dorado (color de la corona)
    //borderTop: "8px solid transparent", // Transparent para el gradiente
    //background: "linear-gradient(90deg, #ffffff, #febd02)", // Blanco y Oro
    //background: "linear-gradient(90deg, #ffffff, #5f4b8b)", // Blanco y morado
    info: `
      Fundado el 6 de marzo de 1902, siendo su estadio, el Santiago Bernabéu, es un ícono del fútbol internacional.
      El Real Madrid es el club con más títulos de Champions League (15). Ha ganado 35 títulos de La Liga, 19 Copas del Rey y 5 mundiales de clubes considerandolo como el mejor club del siglo XX por la FIFA. 
      Fue el hogar de figuras legendarias como Alfredo Di Stéfano, Raúl, Cristiano Ronaldo y Zinedine Zidane. Sus momentos históricos, destacan "La Quinta del Buitre" y la era de los Galácticos. 
      Su filosofía se centra en la grandeza y la excelencia tanto dentro como fuera del campo.
    `,
  },
  {
    nombre: "AC Milan",
    escudo: "/images/milan.png",
    color: "#d32f2f", // Rojo (tono más suave)
    //borderTop: "8px solid transparent", // Transparent para el gradiente
    //background: "linear-gradient(90deg, #ce2324, #000000)", // Gradiente rojo y negro
    info: `
      Fundado el 16 de diciembre de 1899, el AC Milan es uno de los clubes más exitosos de la historia con 7 Champions League, 19 títulos de la Serie A y 5 Copas de Italia. 
      Su estadio, el San Siro (también llamado Stadio Giuseppe Meazza), es compartido con el Inter de Milán.
      El AC Milan es conocido por sus colores rojo y negro, y ha sido hogar de leyendas como Maldini, Baresi, Kaká, Marco van Basten, Andriy Shevchenko.
    `,
  },
  {
    nombre: "El deudas",
    escudo: "/images/barcelona.png",
    color: "#a50044", // Rojo granate (color del uniforme)
    //borderTop: "8px solid transparent", // Transparent para el gradiente
    //background: "linear-gradient(90deg, #a50044, #0033a0)", // Granate y Azul
    info: `
      Fundado el 29 de noviembre de 1899, el Barcelona ha ganado 5 Champions League, 27 títulos de La Liga y 31 Copas del Rey.
      Es famoso por su academia 'La Masía', que ha formado a jugadores como Messi, Xavi e Iniesta. Su estadio, el Camp Nou, es uno de los más grandes e icónicos. 
      En 2009, el Barcelona fue el primer club en ganar un sextete y su lema, "Més que un club" ("Más que un club"), refleja su impacto social y cultural en Cataluña.
    `,
  },
  {
    nombre: "Liverpool",
    escudo: "/images/liverpool.png",
    color: "#c8102e", // Rojo vibrante (color del uniforme)
    //borderTop: "8px solid transparent", // Transparent para el gradiente
    //background: "linear-gradient(90deg, #c8102e, #ffffff)", // Rojo y Blanco
    info: `
      Fundado el 3 de junio de 1892, el Liverpool es el club más exitoso de Inglaterra en competiciones europeas, con 6 Champions League y ganando 19 títulos de la Premier League y 8 Copas nacionales. 
      Ha tenido jugadores icónicos como Steven Gerrard, Kenny Dalglish e Ian Rush, quienes marcaron épocas gloriosas en la historia del club.
      El técnico Jürgen Klopp lideró al equipo para conquistar su primer título de Premier League en 2020, tras una sequía de 30 años.
      Liverpool es sinónimo de pasión y resiliencia, reflejando el espíritu de su ciudad.
    `,
  },
  {
    nombre: "FC Bayern",
    escudo: "/images/bayern.png",
    color: "#c62828", // Rojo (tono más fuerte)
    //borderTop: "8px solid transparent", // Transparent para el gradiente
    //background: "linear-gradient(90deg, #dc052d, #005bac)", // Gradiente rojo y azul
    info: `
      Fundado el 27 de febrero de 1900, el Bayern Múnich domina el fútbol alemán con 33 títulos de la Bundesliga y 6 Champions League.
      Logró el segundo sextete de la historia del fútbol, igualando al FC Barcelona en 2009. Su estadio, el Allianz Arena, es famoso por su arquitectura única.
      Ha sido hogar de figuras como Beckenbauer, Gerd Müller, y Philipp Lahm, y su academia ha producido estrellas como Thomas Müller y Schweinsteiger.
    `,
  },
  {
    nombre: "Manchester United",
    escudo: "/images/Manchester_United.png",
    color: "#b71c1c", // Rojo (tono más oscuro)
    //borderTop: "8px solid transparent", // Transparent para el gradiente
    //background: "linear-gradient(90deg, #da291c, #febd02)", // Gradiente rojo y amarillo
    info: `
      Fundado en 1878, el Manchester United ha ganado 20 títulos de liga, 12 FA Cups y 3 Champions League.
      Su estadio, Old Trafford, es conocido como "El Teatro de los Sueños". es uno de los más icónicos del fútbol mundial.
      Con una gran historia en el fútbol inglés y europeo. Siendo dirigido por figuras como Sir Matt Busby y Sir Alex Ferguson asi tambien a tenido jugadores legendarios como Sir Bobby Charlton, George Best, y Cristiano Ronaldo, 
    `,
  },
  
];

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>⚽ Clubs Históricos del Futbol ⚽</h1>
      </header>
      <div className="tarjetas-container">
        {equipos.map((equipo, index) => (
          <div
            key={index}
            className="tarjeta"
            style={{ borderTop: `8px solid ${equipo.color}` }}
          >
            <img
              src={equipo.escudo}
              alt={`${equipo.nombre} escudo`}
              className="escudo"
            />
            <h2>{equipo.nombre}</h2>
            <div className="info">
              {equipo.info.split("\n").map((line, idx) => (
                <p key={idx}>{line.trim()}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
