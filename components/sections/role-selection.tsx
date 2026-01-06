import { ArrowRight } from "lucide-react"

export function RoleSelection() {
  return (
    <section className="flex h-[30svh] md:h-[50svh] md:min-h-screen w-full flex-row border-b border-foreground">
      <div className="group flex flex-1 border-r border-foreground cursor-pointer flex-col items-center justify-center bg-background p-6 transition-colors hover:bg-foreground hover:text-background md:p-10">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-xl font-light uppercase tracking-widest md:text-6xl">
            Art
            <br />
            Director
          </h2>
          <ArrowRight className="hidden h-8 w-8 opacity-100 transition-all duration-300 md:opacity-0 md:group-hover:translate-x-2 md:block md:group-hover:opacity-100" />
        </div>
      </div>

      <div className="group flex flex-1 cursor-pointer flex-col items-center justify-center bg-background p-6 transition-colors hover:bg-foreground hover:text-background md:p-10">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-xl font-light uppercase tracking-widest md:text-6xl">
            Cinemato
            <br />
            grapher
          </h2>
          <ArrowRight className="hidden h-8 w-8 opacity-100 transition-all duration-300 md:opacity-0 md:group-hover:translate-x-2 md:block md:group-hover:opacity-100" />
        </div>
      </div>
    </section>
  )
}
