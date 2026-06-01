import { useState, useEffect } from "react";

interface ZoomCarouselProps {
  images: { src: string; alt: string }[];
  title: string;
  subtitle: string;
  badge?: string;
  interval?: number;
}

const ZoomCarousel = ({ images, title, subtitle, badge, interval = 5000 }: ZoomCarouselProps) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <section className="pt-20 relative">
      <div className="relative h-[55vh] min-h-[420px] overflow-hidden">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[7000ms] ease-out ${
                i === current ? "scale-110" : "scale-100"
              }`}
            />
          </div>
        ))}
        <div className="absolute inset-0 hero-gradient z-20" />
        <div className="relative z-30 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            {badge && (
              <span className="inline-block bg-iesc-blue/90 text-iesc-blue-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-4 animate-fade-in">
                {badge}
              </span>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-4 animate-slide-up">
              {title}
            </h1>
            <p className="text-primary-foreground/85 text-lg md:text-xl max-w-2xl mx-auto animate-slide-up-delay">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-iesc-blue w-7" : "bg-primary-foreground/50 hover:bg-primary-foreground/80"
                }`}
                aria-label={`Image ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ZoomCarousel;
