'use client';
import AwakeButton from './AwakeButton';
import './globals.css'
import Navbar from './navbar'
import { useState } from 'react'

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