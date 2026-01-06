export function ArtisticLines() {
  return (
    <section className="flex min-h-screen w-full items-center justify-center overflow-hidden bg-background px-4">
      <div className="relative h-[300px] w-full max-w-4xl md:h-[500px]">
        {/* Simple wavy line SVG matching the sketch approximately */}
        <svg
          viewBox="0 0 800 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full stroke-foreground"
        >
          {/* Main path */}
          <path
            d="M50 100 C 150 150, 250 150, 350 200 C 450 250, 550 150, 650 150 C 700 150, 750 180, 800 200"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Dots on the line - matched roughly to sketch positions */}
          <circle cx="50" cy="100" r="4" fill="currentColor" />
          <circle cx="180" cy="145" r="4" fill="currentColor" />
          <circle cx="350" cy="200" r="4" fill="currentColor" />
          <circle cx="580" cy="160" r="4" fill="currentColor" />
          <circle cx="800" cy="200" r="4" fill="currentColor" />
        </svg>
      </div>
    </section>
  )
}
