"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import "./globals.css";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function PageAgroVaqueStore() {
  const imagens = [
    "/imgs/bota.png",
    "/imgs/chapeu-couro.png",
    "/imgs/calca-couro.png",
    "/imgs/chapeu-couro-marron.png",
    "/imgs/forro.png",
    "/imgs/cabresto.png",
  ];

  const imagensMaisVendidas = [
    "/imgs/bota-preta.png",
    "/imgs/bota-bege.png",
    "/imgs/capacete.png",
    "/imgs/bota-marron.png",
    "/imgs/sela.png",
    "/imgs/espora.png",
  ];

  const imagensExploreProdutos = [
    "/imgs/bovino.png",
    "/imgs/equino.png",
    "/imgs/vaca.png",
    "/imgs/aves.png",
    "/imgs/crescimento.png",
    "/imgs/dog.png",
  ];

  const categorias = [
    { nome: "Botas", img: "/imgs/bota-desenho.png" },
    { nome: "Chapéus", img: "/imgs/chapeu-desenho.png" },
    { nome: "Calças", img: "/imgs/calca-desenho.png" },
    { nome: "Rações", img: "/imgs/racao-desenho.png" },
    { nome: "Peitorais", img: "/imgs/peitoral-desenho.png" },
    { nome: "Medicamentos", img: "/imgs/medicamentos-desenho.png" },
  ];

  const [selecionado, setSelecionado] = useState(null);

  return (<div className="w-full max-w-screen-xl mx-auto px-4">
    {/* OFERTAS RELÂMPAGOS */}
    <h1 className="text-3xl font-bold mb-6" style={{ color: "#033D6F" }}>
      Ofertas Relâmpagos
    </h1>

    <Carousel className="w-full">
      <CarouselContent className="flex">
        {imagens.map((src, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/3 lg:basis-1/4 xl:basis-1/5 p-4"
          >
            <Card className="bg-[#F5F5F5] rounded-xl shadow-sm">
              <CardContent className="relative w-full h-52 flex items-center justify-center p-4">
                <Image
                  src={src}
                  alt={`Produto ${index + 1}`}
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="left-0 bg-white shadow-md text-black hover:bg-gray-100" />
      <CarouselNext className="right-0 bg-white shadow-md text-black hover:bg-gray-100" />
    </Carousel>

    <div className="flex justify-center mt-6">
      <Button className="px-6 py-3 text-white cursor-pointer" style={{ backgroundColor: "#033D6F" }}>
        Ver Todos os Produtos
      </Button>
    </div>

    {/* CATEGORIAS */}
    <div className="mt-20">
      <span className="text-sm font-medium text-[#033D6F]">Categorias</span>
      <h2 className="text-2xl font-bold mt-1 mb-6">Navegar por categorias</h2>

      <div className="flex gap-6 items-center">
        {categorias.map((cat, index) => {
          const ativo = selecionado === index;

          return (
            <Card
              key={index}
              onClick={() => setSelecionado(index)}
              className={`w-48 h-40 border rounded-xl shadow-sm cursor-pointer transition-all ${ativo ? "bg-[#033D6F] text-white" : "bg-white"
                }`}
            >
              <CardContent className="flex flex-col items-center justify-center p-4">
                <Image
                  src={cat.img}
                  alt={cat.nome}
                  width={60}
                  height={60}
                  className={`object-contain transition-all ${ativo ? "filter invert brightness-200" : ""}`}
                />
                <p className="mt-2 font-medium text-sm">{cat.nome}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* MAIS VENDIDOS */}
      <div className="mt-20">
        <h1 className="text-3xl font-bold mb-6" style={{ color: "#033D6F" }}>
          Produtos Mais Vendidos
        </h1>

        <Carousel className="w-full">
          <CarouselContent className="flex">
            {imagensMaisVendidas.map((src, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/3 lg:basis-1/4 xl:basis-1/5 p-4"
              >
                <Card className="bg-[#F5F5F5] rounded-xl shadow-sm">
                  <CardContent className="relative w-full h-52 flex items-center justify-center p-4">
                    <Image
                      src={src}
                      alt={`Produto ${index + 1}`}
                      width={200}
                      height={200}
                      className="object-contain"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-0 bg-white shadow-md text-black hover:bg-gray-100" />
          <CarouselNext className="right-0 bg-white shadow-md text-black hover:bg-gray-100" />
        </Carousel>
      </div>

      {/* EXPLORE PRODUTOS */}
      <div className="mt-20">
        <h1 className="text-3xl font-bold mb-6" style={{ color: "#033D6F" }}>
          Explore Nossos Produtos
        </h1>

        <Carousel className="w-full">
          <CarouselContent className="flex">
            {imagensExploreProdutos.map((src, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/3 lg:basis-1/4 xl:basis-1/5 p-4"
              >
                <Card className="bg-[#F5F5F5] rounded-xl shadow-sm">
                  <CardContent className="relative w-full h-52 flex items-center justify-center p-4">
                    <Image
                      src={src}
                      alt={`Produto ${index + 1}`}
                      width={200}
                      height={200}
                      className="object-contain"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-0 bg-white shadow-md text-black hover:bg-gray-100" />
          <CarouselNext className="right-0 bg-white shadow-md text-black hover:bg-gray-100" />
        </Carousel>
      </div>
      {/* SEÇÃO NOVIDADES ADICIONADA */}
      <section className="w-full py-20 mt-20 px-2">
        <h2 className="text-3xl font-semibold mb-10">Novidades</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Coluna grande esquerda (ocupa 2 cols em lg) */}
          <div className="lg:col-span-2">
            <Card className="bg-[#073B66] text-white overflow-hidden rounded-2xl shadow-md h-full">
              <CardContent className="p-6 flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">Selas para Montaria</h3>
                  <p className="mb-4">
                    Contamos com uma ampla variedade de selas para montaria.
                  </p>
                  <Button className="bg-white text-[#073B66] px-4 py-2">Compre agora</Button>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-64 h-48 relative">
                    <Image
                      src="/imgs/sela.png"
                      alt="Sela"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Coluna direita superior */}
          <div>
            <Card className="bg-[#073B66] text-white overflow-hidden rounded-2xl shadow-md h-full flex flex-col">
              <CardContent className="p-6 flex-1">
                <h3 className="text-xl font-semibold mb-2">Esporas</h3>
                <p className="mb-4">Impulsione o visual dos seus botes com as nossas esporas!</p>
                <Button className="bg-white text-[#073B66] px-4 py-2">Compre agora</Button>
                <div className="mt-4 w-full flex justify-center">
                  <div className="w-40 h-28 relative">
                    <Image src="/imgs/esporas.png" alt="Esporas" fill style={{ objectFit: "contain" }} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Linha inferior com 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <Card className="bg-[#073B66] text-white rounded-2xl shadow-md overflow-hidden">
            <CardContent className="p-6 flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-2">Capacete</h3>
              <p className="mb-4 text-center">Capacete segurança infantil.</p>
              <Button className="bg-white text-[#073B66] px-3 py-1 mb-4">Compre agora</Button>
              <div className="w-28 h-20 relative">
                <Image src="/imgs/capacete.png" alt="Capacete" fill style={{ objectFit: "contain" }} />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#073B66] text-white rounded-2xl shadow-md overflow-hidden">
            <CardContent className="p-6 flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-2">Kit Arreios</h3>
              <p className="mb-4 text-center">Os melhores kits do mercado.</p>
              <Button className="bg-white text-[#073B66] px-3 py-1 mb-4">Compre agora</Button>
              <div className="w-28 h-20 relative">
                <Image src="/imgs/arreios.png" alt="Arreios" fill style={{ objectFit: "contain" }} />
              </div>
            </CardContent>
          </Card>

          {/* Informações extras (entrega / atendimento / garantia) */}
          <div className="flex flex-col justify-center items-center text-center p-6 gap-6">
            <div>
              <div className="mb-2 text-4xl">🚚</div>
              <h4 className="font-semibold">ENTREGA RÁPIDA</h4>
              <p className="text-sm">Entrega grátis para pedidos acima de R$ 140</p>
            </div>
            <div>
              <div className="mb-2 text-4xl">🎧</div>
              <h4 className="font-semibold">ATENDIMENTO 24 HORAS</h4>
              <p className="text-sm">Suporte ao cliente 24 horas</p>
            </div>
            <div>
              <div className="mb-2 text-4xl">🔄</div>
              <h4 className="font-semibold">GARANTIA DE DEVOLUÇÃO</h4>
              <p className="text-sm">Devolvemos o dinheiro em até 30 dias</p>
            </div>
          </div>
        </div>
      </section>
    </div>

  </div>


  );
}
