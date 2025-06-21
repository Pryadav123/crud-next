// ✅ src/app/layout.tsx
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'CRUD App',
  description: 'A simple CRUD app with Next.js and MySQL',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Header />
        <main className="pt-20 px-4 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}