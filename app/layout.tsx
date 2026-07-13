import "./globals.css";
import Awakebutton from './awakebutton';


export default function RootLayout({}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <p><Awakebutton /></p>
      </body>
    </html>
  );
}
