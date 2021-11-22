import React from 'react'
import Link from 'next/link'
export default function Footer() {
  return (
    <div>
      <nav>
        <ul>
          <Link href="/">Home</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/contato">Contato</Link>
        </ul>
      </nav>
    </div>
  )
}
