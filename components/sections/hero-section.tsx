import { Separator } from "@/components/ui/separator"

export function HeroSection() {
  return (
    <section className="flex min-h-screen w-full flex-col items-start justify-center bg-background px-16 md:px-48">
      <div className="flex flex-col items-start gap-6 max-w-sm">
        <h1 className="text-left text-xl md:text-3xl font-medium uppercase">
          Ploycheeze
        </h1>
        <div className="text-justify text-muted-foreground text-[8px] md:text-[9.5px] leading-relaxed tracking-[0.15em] uppercase opacity-60">
          <p className="max-w-[40ch]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>
  )
}
