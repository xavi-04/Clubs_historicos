import React from "react";
import "./App.css";

// Datos de los equipos
const equipos = [
  {
    nombre: "Real Madrid",
    escudo: "/images/real_madrid.png",
    color: "#febd02", // Amarillo dorado (color de la corona)
    info: `
      Fundado el 6 de marzo de 1902, el Real Madrid es el club con más títulos de Champions League (15).
      Su estadio es el Santiago Bernabéu, Madrid (capacidad: 83,168). Ha ganado 35 títulos de La Liga, 19 Copas del Rey y es considerado
      el mejor club del siglo XX por la FIFA, ha sido cuna de grandes figuras como Di Stéfano, Raúl, y Cristiano Ronaldo.
    `,
  },
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
      Es famoso por su academia 'La Masía', de donde salieron jugadores como Messi, Xavi e Iniesta. Su estadio, el Camp Nou, tiene capacidad para 99,354 espectadores.
      Ha sido el primer club en ganar un sextete y se considera más que un club debido a su impacto social y cultural en Cataluña.
    `,
  },
];

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>⚽ Clubes Históricos del Futbol⚽</h1>
      </header>
      <div className="tarjetas-container">
        {equipos.map((equipo, index) => (
          <div 
            key={index} 
            className="tarjeta" 
            style={{ borderTop: `8px solid ${equipo.color}` }}
          >
            <img src={equipo.escudo} alt={`${equipo.nombre} escudo`} className="escudo" />
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
