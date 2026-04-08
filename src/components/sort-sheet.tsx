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

  const roleButtonClassName =
    "h-auto min-h-0 py-2 text-4xl font-light tracking-tight hover:bg-transparent hover:underline decoration-2 underline-offset-2 transition-all cursor-pointer outline-none sm:py-3 sm:text-5xl sm:decoration-4 sm:underline-offset-4 md:text-6xl lg:text-7xl"

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
          className="data-[side=top]:h-dvh data-[side=top]:max-h-dvh w-screen min-h-0 border-none bg-white p-0 duration-500 focus:outline-none flex flex-col"
        >
          <div className="flex min-h-0 flex-1 flex-col items-center justify-center overflow-y-auto overscroll-contain px-4 pt-20 pb-[max(1.5rem,env(safe-area-inset-bottom,0px))] sm:px-6 sm:pt-24">
            <div className="flex w-full max-w-4xl flex-col items-center space-y-6 select-none sm:space-y-10 md:space-y-14 lg:space-y-16 -translate-y-3 sm:-translate-y-5">
              <Button
                variant="ghost"
                onClick={() => handleSelectRole("director")}
                className={roleButtonClassName}
              >
                Director
              </Button>
              <Button
                variant="ghost"
                onClick={() => handleSelectRole("art-director")}
                className={roleButtonClassName}
              >
                Art Director
              </Button>
              <Button
                variant="ghost"
                onClick={() => handleSelectRole("cinematographer")}
                className={roleButtonClassName}
              >
                Cinematographer
              </Button>
              <Button
                variant="ghost"
                onClick={() => handleSelectRole("photographer")}
                className={roleButtonClassName}
              >
                Photographer
              </Button>
              <Button
                variant="ghost"
                onClick={() => handleSelectRole("colorist")}
                className={roleButtonClassName}
              >
                Colorist
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      {$selectedRole && (
        <button
          onClick={() => handleSelectRole("")}
          className="pointer-events-auto cursor-pointer text-right text-sm font-light hover:underline sm:text-base"
        >
          (clear)
        </button>
      )}
    </div>
  )
}
