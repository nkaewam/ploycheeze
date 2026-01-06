import { Separator } from "@/components/ui/separator"

export function HeroSection() {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center bg-background px-4">
      <div className="flex flex-col items-center gap-6 md:gap-8">
        <h1 className="text-center text-5xl font-bold tracking-widest uppercase sm:text-7xl md:text-9xl">
          Ploycheeze
        </h1>
        <div className="flex w-full max-w-[200px] flex-col gap-2 sm:max-w-[300px] md:max-w-[400px]">
          <Separator className="h-[2px] w-full bg-foreground" />
          <Separator className="h-[2px] w-[90%] self-center bg-foreground" />
          <Separator className="h-[2px] w-[80%] self-center bg-foreground" />
        </div>
      </div>
    </section>
  )
}
