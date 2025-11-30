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
    "/imgs/img2.jpg",
    "/imgs/img3.jpg",
    "/imgs/img4.jpg",
    "/imgs/img5.jpg",
    "/imgs/img6.jpg",
  ];

  const imagensMaisVendidas = [
    "/imgs/img1.png",
    "/imgs/img2.jpg",
    "/imgs/img3.jpg",
    "/imgs/img4.jpg",
    "/imgs/img5.jpg",
    "/imgs/img6.jpg",
  ];

  const categorias = [
    { nome: "Botas", img: "/imgs/img1.jpg" },
    { nome: "Chapéus", img: "/imgs/img2.jpg" },
    { nome: "Calças", img: "/imgs/img3.jpg" },
    { nome: "Rações", img: "/imgs/img4.jpg" },
    { nome: "Peitorais", img: "/imgs/img5.jpg" },
    { nome: "Medicamentos", img: "/imgs/img6.jpg" },
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
      
      </div>
      </div>

  
  );
}
