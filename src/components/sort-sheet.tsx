"use client"

import * as React from "react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "./ui/button"

export function SortSheet() {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <button
            className="pointer-events-auto font-normal transition-opacity hover:opacity-60 cursor-pointer"
          >
            sort by
          </button>
        }
      />
      <SheetContent
        side="top"
        showCloseButton={true}
        className="data-[side=top]:h-screen w-screen border-none bg-white p-0 flex flex-col items-center justify-center focus:outline-none"
      >
        <div className="flex flex-col items-center space-y-14 select-none -translate-y-5">
          <Button variant="ghost" className="text-7xl font-light tracking-tight hover:bg-transparent hover:underline decoration-4 underline-offset-4 transition-all cursor-pointer outline-none">Art Director</Button>
          <Button variant="ghost" className="text-7xl font-light tracking-tight hover:bg-transparent hover:underline decoration-4 underline-offset-4 transition-all cursor-pointer outline-none">DoP</Button>
          <Button variant="ghost" className="text-7xl font-light tracking-tight hover:bg-transparent hover:underline decoration-4 underline-offset-4 transition-all cursor-pointer outline-none">Photographer</Button>
          <Button variant="ghost" className="text-7xl font-light tracking-tight hover:bg-transparent hover:underline decoration-4 underline-offset-4 transition-all cursor-pointer outline-none">Colorist</Button>
          <Button variant="ghost" className="text-7xl font-light tracking-tight hover:bg-transparent hover:underline decoration-4 underline-offset-4 transition-all cursor-pointer outline-none">2nd Camera</Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
