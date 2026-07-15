import './globals.css'
import Navbar from './navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="top-nav">
          <nav>
            <Navbar/>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}