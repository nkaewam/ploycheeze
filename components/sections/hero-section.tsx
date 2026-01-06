import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative flex h-[50svh] md:h-screen w-full flex-col items-start justify-center px-10 md:px-48 overflow-hidden">
      <div className="absolute -z-10 top-0 left-0 h-full w-full">
        <Image
          src="/hero-background.png"
          alt="Hero background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-background/40" />
      </div>
      <div className="relative flex flex-col items-start gap-6 max-w-min">
        <h1 className="text-left text-lg md:text-3xl font-medium uppercase whitespace-nowrap">
          Ploycheeze
        </h1>
        <div className="text-justify text-muted-foreground text-[6px] md:text-[9.5px] leading-relaxed tracking-[0.15em] uppercase opacity-60">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>
  )
}
