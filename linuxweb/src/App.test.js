import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders more than one club on the page', () => {
    render(<App />);
    
    // Buscar los nombres de los equipos en la página
    const equipos = screen.getAllByRole('heading', { level: 2 }); 
    
    // Verificar que hay más de un jugador
    expect(equipos.length).toBeGreaterThanOrEqual(3);
  });

  test('renders a heading with the text containing "⚽"', () => {
    render(<App />);
    
    // Buscar el encabezado con el texto que incluye "⚽"
    const heading = screen.getByRole('heading', { level: 1 });
    
    // Verificar que el texto del encabezado contiene el emoji "⚽"
    expect(heading.textContent).toContain("⚽");
  });

});