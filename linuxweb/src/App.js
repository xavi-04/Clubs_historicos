import React from "react";
import "./App.css";

// Datos de los equipos
const equipos = [
  {
    nombre: "Real Madrid",
    escudo: "/images/real_madrid.png",
    color: "#febd02",
    info: [
      "Fundado el 6 de marzo de 1902, el Real Madrid es el club con más títulos de Champions League (15).",
      "Su estadio es el Santiago Bernabéu, Madrid (capacidad: 83,168).",
      "Ha ganado 35 títulos de La Liga, 19 Copas del Rey y es considerado el mejor club del siglo XX por la FIFA.",
      "Ha sido cuna de grandes figuras como Di Stéfano, Raúl y Cristiano Ronaldo.",
    ],
  },
  {
    nombre: "AC Milan",
    escudo: "/images/milan.png",
    color: "#ce2324",
    info: [
      "Fundado el 16 de diciembre de 1899, el AC Milan es uno de los clubes más exitosos de la historia con 7 Champions League.",
      "Ha ganado 19 títulos de la Serie A y 5 Copas de Italia.",
      "Su estadio, el San Siro, es compartido con el Inter de Milán.",
      "El AC Milan ha sido hogar de leyendas como Maldini, Baresi, Kaká y Marco van Basten.",
    ],
  },
  {
    nombre: "FC Barcelona",
    escudo: "/images/barcelona.png",
    color: "#a50044",
    info: [
      "Fundado el 29 de noviembre de 1899, el Barcelona ha ganado 5 Champions League, 27 títulos de La Liga y 31 Copas del Rey.",
      "Es conocido por su academia 'La Masía', de donde han salido jugadores como Messi, Xavi e Iniesta.",
      "Su estadio, el Spotify Camp Nou, es uno de los más icónicos del mundo.",
      "En 2009, se convirtió en el primer club en ganar un sextete (6 títulos en una temporada).",
    ],
  },
  {
    nombre: "Liverpool",
    escudo: "/images/liverpool.png",
    color: "#c8102e",
    info: [
      "Fundado el 3 de junio de 1892, el Liverpool es el club más exitoso de Inglaterra en competiciones europeas con 6 Champions League.",
      "Ha ganado 19 títulos de la Premier League.",
      "Es famoso por su estadio Anfield y su himno 'You'll Never Walk Alone'.",
      "Ha tenido jugadores icónicos como Steven Gerrard, Kenny Dalglish e Ian Rush.",
    ],
  },
  {
    nombre: "FC Bayern",
    escudo: "/images/bayern.png",
    color: "#dc052d",
    info: [
      "Fundado el 27 de febrero de 1900, el Bayern Múnich domina el fútbol alemán con 33 títulos de la Bundesliga y 6 Champions League.",
      "Su estadio, el Allianz Arena, es conocido por su arquitectura única.",
      "El club es reconocido por su consistencia y talento, siendo hogar de figuras como Franz Beckenbauer, Gerd Müller y Philipp Lahm.",
      "También ha producido estrellas como Thomas Müller y Bastian Schweinsteiger.",
    ],
  },
  {
    nombre: "Manchester United",
    escudo: "/images/Manchester_United.png",
    color: "#da291c",
    info: [
      "Fundado en 1878, el Manchester United es uno de los clubes más populares del mundo.",
      "Ha ganado 20 títulos de liga, 12 FA Cups y 3 Champions League.",
      "Su estadio, Old Trafford, es conocido como 'El Teatro de los Sueños'.",
    ],
  },
];

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>⚽ Equipos históricos del Fútbol ⚽</h1>
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
              {equipo.info.map((parrafo, idx) => (
                <p key={idx}>{parrafo}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
