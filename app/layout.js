// Import the Inter font correctly
import { Inter } from 'next/font/google'
import './globals.css';
import Header from './components/Header';
import {ClerkProvider} from '@clerk/nextjs'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body>
        
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
