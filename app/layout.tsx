import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ApoLead Agent Dashboard',
  description: 'Agent call center dashboard for zip code lookup and scripting',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-apo">
        <div className="min-h-screen bg-apo-bg">
          {/* Header matching template design */}
          <header className="bg-apo-white shadow-lg sticky top-0 z-50">
            <nav className="max-w-6xl mx-auto px-8 py-4">
              <div className="flex justify-between items-center">
                {/* Logo exactly like template */}
                <div className="text-3xl font-bold">
                  <span className="text-apo-cyan">Apo</span>
                  <span className="text-apo-purple">Lead</span>
                </div>
                
                {/* Navigation */}
                <ul className="hidden md:flex items-center gap-8">
                  <li><a href="#dashboard" className="text-apo-text-light hover:text-apo-cyan font-medium transition-colors">Dashboard</a></li>
                  <li><a href="#scripts" className="text-apo-text-light hover:text-apo-cyan font-medium transition-colors">Scripts</a></li>
                  <li><a href="#support" className="text-apo-text-light hover:text-apo-cyan font-medium transition-colors">Support</a></li>
                  <li>
                    <a href="#profile" className="bg-apo-light-purple hover:bg-apo-secondary-hover text-white px-6 py-2 rounded-md font-semibold transition-colors">
                      Agent Portal
                    </a>
                  </li>
                </ul>

                {/* Mobile menu button */}
                <div className="md:hidden">
                  <button className="text-apo-text-light hover:text-apo-cyan">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </nav>
          </header>

          {/* Main content */}
          <main className="max-w-6xl mx-auto px-8 py-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}