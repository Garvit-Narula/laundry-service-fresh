import './globals.css'

export const metadata = {
  title: 'Laundry Express',
  description: 'Professional laundry express service with pickup and delivery',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
