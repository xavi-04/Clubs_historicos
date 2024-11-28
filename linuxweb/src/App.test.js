import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders more than one club on the page', () => {
    render(<App />);
    
    // Buscar los nombres de los equipos en la página
    const equipos = screen.getAllByRole('heading', { level: 2 }); 
    
    // Verificar que hay más de un club en la página
    expect(equipos.length).toBeGreaterThanOrEqual(3);
  });

  test('renders a heading with the text containing "⚽"', () => {
    render(<App />);
    
    // Buscar el encabezado con el texto que incluye "⚽"
    const heading = screen.getByRole('heading', { level: 1 });
    
    // Verificar que el texto del encabezado contiene el emoji "⚽"
    expect(heading.textContent).toContain("⚽");
  });

 /* test('renders a heading with the text containing exactly two "⚽" emojis', () => {
    render(<App />);
  
    // Buscar el encabezado con nivel 1
    const heading = screen.getByRole('heading', { level: 1 });
  
    // Verificar que el texto contiene exactamente dos emojis "⚽"
    const emojiCount = (heading.textContent.match(/⚽/g) || []).length;
    expect(emojiCount).toBe(2);
  });*/

});