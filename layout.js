import './globals.css';

export const metadata = {
  title: 'VOLARIS — Flying Luxury',
  description: 'Luxury carbon-fiber luggage designed in Italy for global business travelers.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
