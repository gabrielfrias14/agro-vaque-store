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
﻿
export default function PageAgroVaqueStore() {
  const imagens = [
    "/imgs/bota.png",
    "/imgs/img2.jpg",
    "/imgs/img3.jpg",
    "/imgs/img4.jpg",
    "/imgs/img5.jpg",
    "/imgs/img6.jpg",
  ];
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
      </div>
﻿);
}