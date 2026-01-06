import { ArrowRight } from "lucide-react"

export function RoleSelection() {
  return (
    <section className="flex min-h-screen w-full flex-col md:flex-row">
      <div className="group flex flex-1 cursor-pointer flex-col items-center justify-center border-b border-foreground bg-background p-10 transition-colors hover:bg-foreground hover:text-background md:border-b-0 md:border-r">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-4xl font-light uppercase tracking-widest md:text-6xl">
            Art
            <br />
            Director
          </h2>
          <ArrowRight className="h-8 w-8 opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100" />
        </div>
      </div>

      <div className="group flex flex-1 cursor-pointer flex-col items-center justify-center bg-background p-10 transition-colors hover:bg-foreground hover:text-background">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-4xl font-light uppercase tracking-widest md:text-6xl">
            Cinemato
            <br />
            grapher
          </h2>
          <ArrowRight className="h-8 w-8 opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100" />
        </div>
      </div>
    </section>
  )
}
