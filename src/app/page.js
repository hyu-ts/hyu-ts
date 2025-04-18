import React from "react";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2025 Your Website</p>
      </footer>
    </div>
  );
}