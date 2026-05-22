import './globals.css'

export const metadata = {
  title: 'Atlas 3D da Via Visual',
  description: 'Aplicação interativa de educação médica'
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
