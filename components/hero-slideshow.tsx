"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const images = [
    {
        url: "/people-playing-board-games-around-table-laughing.jpg",
        alt: "ボードゲームで遊んでいる様子",
    },
    {
        url: "/colorful-board-game-pieces-on-game-board.jpg",
        alt: "カラフルなボードゲーム",
    },
    {
        url: "/group-of-friends-enjoying-board-game-night.jpg",
        alt: "友達とゲーム会",
    },
    {
        url: "/board-game-collection-on-shelves.jpg",
        alt: "ボードゲームコレクション",
    },
];

export function HeroSlideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-2xl">
            {images.map((image, index) => (
                <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"}`}>
                    <img src={image.url || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
            ))}

            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 text-balance">ボードゲームコミュニティ Lilac</h1>
                    <p className="text-xl md:text-2xl text-balance">一緒にボードゲームを楽しみましょう</p>
                </div>
            </div>

            <Button variant="ghost" size="icon" className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white" onClick={goToPrevious}>
                <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button variant="ghost" size="icon" className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white" onClick={goToNext}>
                <ChevronRight className="h-6 w-6" />
            </Button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                    <button key={index} className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-white w-8" : "bg-white/50"}`} onClick={() => setCurrentIndex(index)} />
                ))}
            </div>
        </div>
    );
}
