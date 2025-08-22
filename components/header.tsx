"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl font-serif font-bold text-primary"><a href="/">naalfbç</a></h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors">
              Ana Sayfa
            </a>
            <a href="/#hakkinda" className="text-foreground hover:text-primary transition-colors">
              Hakkında
            </a>
            <a href="/#takvim" className="text-foreground hover:text-primary transition-colors">
              Program
            </a>
            <a href="/#ekip" className="text-foreground hover:text-primary transition-colors">
              Ekibimiz
            </a>
            <a href="/komiteler" className="text-foreground hover:text-primary transition-colors">
              Komiteler
            </a>
            <a href="/#iletisim" className="text-foreground hover:text-primary transition-colors">
              İletişim
            </a>
          </nav>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t">
              <a href="#anasayfa" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Ana Sayfa
              </a>
              <a href="#hakkinda" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Hakkında
              </a>
              <a href="#takvim" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Program
              </a>
              <a href="#ekip" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Ekibimiz
              </a>
              <a href="/komiteler" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                Komiteler
              </a>
              <a href="#iletisim" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">
                İletişim
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
