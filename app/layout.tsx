import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="nav">
          <h1 className="logo">Campus Clubs</h1>
          <nav className="links">
            <Link href="/">Home</Link>
            <Link href="/join">Join</Link>
          </nav>
        </header>
        <main className="page">{children}</main>
      </body>
    </html>
  );
}
