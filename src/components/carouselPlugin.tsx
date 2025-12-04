"use client";

import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselPlugin() {
  const autoplayPlugin = Autoplay({ delay: 4000, stopOnInteraction: false });

  // Array com caminhos das imagens na pasta public
  const images = [
    "/prato1.jpg",
    "/prato2.jpg",
    "/prato3.jpg",
    "/prato4.jpg",
    "/prato5.jpg",
  ];

  return (
    <Carousel plugins={[autoplayPlugin]} className="w-full max-w-4xl mx-auto">
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center h-80 p-0 overflow-hidden">
                  <img
                    src={src}
                    alt={`Prato ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
