import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'AwakeSite',
  description: 'Keep your computer awake',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="layout-container">
          <header className="top-nav">
            <nav className="nav-links">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/info" className="nav-link">Info</Link>
            </nav>
          </header>
          <main className="main-content">{children}</main>
        </div>
      </body>
    </html>
  );
}