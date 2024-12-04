"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const destinations = [
  {
    image: "/assets/hero5.jpg",
    title: "Rhodes Island",
    location: "Rhode, Greece",
    price: "Flights from $499 / Person",
  },
  {
    image: "/assets/hero2.jpg",
    title: "Keri Beach",
    location: "Zakynthos, Greece",
    price: "Flights from $499 / Person",
  },
  {
    image: "/assets/como.webp",
    title: "Lake Como",
    location: "Como, Italy",
    price: "Flights from $699 / Person",
  },
  {
    image: "/assets/melb.avif",
    title: "Melbourne CBD",
    location: "Melbourne, Australia",
    price: "Flights from $499 / Person",
  },
  {
    image: "/assets/hiri.jpg",
    title: "Hiriketiya Beach",
    location: "Hiriketiya, Sri Lanka",
    price: "Flights from $499 / Person",
  },
];

export default function Destinations() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="py-10">
      <h2 className="text-center text-4xl font-bold mb-8 text-[#1e508b] px-1">
        Dive Into The Beauty Of The World
      </h2>

      <div className="flex items-center justify-center px-1 md:px-12 lg:px-20 overflow-hidden">
        <Carousel setApi={setApi} className="w-full max-w-[1500px]">
          <CarouselContent className="-ml-1">
            {destinations.map((destination, index) => (
              <CarouselItem
                key={index}
                className="relative pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="relative">
                    {/* Image */}
                    <Image
                      src={destination.image}
                      alt={destination.title}
                      width={1000}
                      height={400}
                      className="aspect-square object-cover rounded-lg"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 rounded-lg" />

                    {/* Text Content */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-semibold">
                        {destination.title}
                      </h3>
                      <p className="text-sm">{destination.location}</p>
                      <p className="text-lg font-bold mt-2">
                        {destination.price}
                      </p>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Slide Counter (Visible Only on Small Screens) */}
      <div className="py-2 text-center text-sm text-muted-foreground sm:hidden">
        Slide {current} of {count}
      </div>
    </section>
  );
}
