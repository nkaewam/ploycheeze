"use client"

import * as React from "react"
import { useStore } from "@nanostores/react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "./ui/button"
import { selectedRole } from "@/lib/store"

export function SortSheet() {
  const [open, setOpen] = React.useState(false)
  const $selectedRole = useStore(selectedRole)

  const handleSelectRole = (role: string) => {
    selectedRole.set(role)
    setOpen(false)
  }

  return (
    <div className="flex flex-col items-end">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          render={
            <button
              className="block pointer-events-auto font-normal transition-opacity hover:opacity-60 cursor-pointer"
            >
              sort by
            </button>
          }
        />
        <SheetContent
          side="top"
          showCloseButton={true}
          className="data-[side=top]:h-screen w-screen border-none duration-500 bg-white p-0 flex flex-col items-center justify-center focus:outline-none"
        >
          <div className="flex flex-col items-center space-y-16 select-none -translate-y-5">
            <Button
              variant="ghost"
              onClick={() => handleSelectRole("Art Director")}
              className="text-7xl font-light tracking-tight hover:bg-transparent hover:underline decoration-4 underline-offset-4 transition-all cursor-pointer outline-none"
            >
              Art Director
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleSelectRole("Cinematographer")}
              className="text-7xl font-light tracking-tight hover:bg-transparent hover:underline decoration-4 underline-offset-4 transition-all cursor-pointer outline-none"
            >
              Cinematographer
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleSelectRole("Photographer")}
              className="text-7xl font-light tracking-tight hover:bg-transparent hover:underline decoration-4 underline-offset-4 transition-all cursor-pointer outline-none"
            >
              Photographer
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleSelectRole("Colorist")}
              className="text-7xl font-light tracking-tight hover:bg-transparent hover:underline decoration-4 underline-offset-4 transition-all cursor-pointer outline-none"
            >
              Colorist
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleSelectRole("2nd Camera")}
              className="text-7xl font-light tracking-tight hover:bg-transparent hover:underline decoration-4 underline-offset-4 transition-all cursor-pointer outline-none"
            >
              2nd Camera
            </Button>
          </div>
        </SheetContent>
      </Sheet>
      {$selectedRole && (
        <button
          onClick={() => handleSelectRole("")}
          className="pointer-events-auto font-light cursor-pointer text-right text-base hover:underline"
        >
          (clear)
        </button>
      )}
    </div>
  )
}
