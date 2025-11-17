"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <header className="w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="text-xl font-bold">
          MinhaLogo
        </Link>

        {/* NAV ITEMS */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/sobre" className="text-sm hover:underline">
            Sobre
          </Link>
          <Link href="/produtos" className="text-sm hover:underline">
            Produtos
          </Link>
          <Link href="/contato" className="text-sm hover:underline">
            Contato
          </Link>
        </div>

        {/* SEARCH + BUTTON */}
        <div className="hidden md:flex items-center gap-3">
          <Input 
            type="text" 
            placeholder="Pesquisar..." 
            className="w-48"
          />
          <Button>Buscar</Button>
        </div>

        {/* MOBILE MENU ICON */}
        <button className="md:hidden">
          <Menu size={24} />
        </button>
      </nav>
    </header>
  );
}
