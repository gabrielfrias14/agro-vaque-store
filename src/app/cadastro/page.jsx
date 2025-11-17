"use client";

import "../globals.css"

import React, { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  function validate() {
    if (!email) return "Preencha o email.";
    if (!password) return "Preencha a senha.";
    // validação simples de email
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return "Email inválido.";
    if (password.length < 6) return "A senha precisa ter ao menos 6 caracteres.";
    return null;
  }

  async function handleSubmit(e ) {
    e.preventDefault();
    setError(null);
    const v = validate();
    if (v) return setError(v);

    setLoading(true);
    try {
      // Aqui, em um app real você chamaria sua API (ex: /api/auth/login) ou NextAuth
      await new Promise((r) => setTimeout(r, 900)); // simula request
      // sucesso — redirecionar, armazenar token, etc.
      // exemplo simples: só limpar campos
      setEmail("");
      setPassword("");
      setRemember(false);
      router.push("dashboard")
    } catch (err) {
      setError("Erro ao tentar fazer login. Tente novamente.");
      console.log(err)
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-slate-50 p-6">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="React.FormEventtext-2xl">cadastro</CardTitle>
          <CardDescription>Faça cadastro na sua conta para continuar.</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@exemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="senha">Senha</Label>
              <Input
                id="senha"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <Checkbox checked={remember} onCheckedChange={(v) => setRemember(Boolean(v))} />
                <span className="text-sm">Lembrar-me</span>
              </label>

              <Link href="#" className="text-sm underline-offset-2 hover:underline">Esqueci a senha</Link>
            </div>

            {error && <div className="text-sm text-red-600">{error}</div>}

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Entrando..." : "Entrar"}
            </Button>

            <Separator />

            <div className="flex flex-col gap-2">
              <Button variant="outline" className="w-full">Entrar com Google</Button>
              <Button variant="outline" className="w-full">Entrar com GitHub</Button>
            </div>

            <p className="text-center text-sm">
              Ainda não tem conta? <Link href="/register" className="font-medium underline">Criar conta</Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
