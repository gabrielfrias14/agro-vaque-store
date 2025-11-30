import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Search } from "lucide-react";


export default function Header() {
  return (
    <header className="w-full border-b">
      {/* Top bar */}
      <div className="w-full bg-blue-900 text-white text-sm py-1 flex items-center justify-center gap-2">
        <span>Liquidação de verão para todos os produtos da loja – 50% off</span>
        <Link href="#" className="underline hover:text-gray-200">
          Compre agora
        </Link>
        <span className="ml-auto mr-4">Agro VaqueStore</span>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Exclusivo
        </Link>

        {/* Navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/" className="hover:text-blue-700 transition">Home</Link>
          <Link href="/contato" className="hover:text-blue-700 transition">Contato</Link>
          <Link href="/sobre" className="hover:text-blue-700 transition">Sobre nós</Link>
          <Link href="/login" className="hover:text-blue-700 transition">Sign Up</Link>
        </nav>

        {/* Search + Icons */}
        <div className="flex items-center gap-4">
          <div className="relative hidden md:flex items-center">
            <Input
              placeholder="O que você procura?"
              className="pl-10 w-64 rounded-full"
            />
            <Search className="w-4 h-4 absolute left-3 text-gray-500" />
          </div>

          <Button variant="ghost" size="icon" className="rounded-full">
            <Heart className="w-5 h-5" />
          </Button>

          <Button variant="ghost" size="icon" className="rounded-full">
            <ShoppingCart className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}