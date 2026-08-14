import "./globals.css";

export const metadata = {
  title: "Andrish Landau Miranda — Ciberseguridad · Desarrollo · Postproducción",
  description:
    "Portafolio de Andrish Reynaldo Landau Miranda. Ingeniero de Ciberseguridad, desarrollador y especialista en postproducción audiovisual.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05070b",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Instrument+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
