"use client"

import React, { useState, useEffect } from "react"
import { Sheet, SheetContent } from "./ui/sheet"
import { XIcon } from "@phosphor-icons/react"
import type { ImageMetadata } from "astro"
import grain from "@/assets/grain.gif"

export type OpenImageSheetEventDetail = {
  images: ImageMetadata[]
  title: React.ReactNode
  subtitle?: React.ReactNode
  role: string
}

export function ImageSheet() {
  const [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState<OpenImageSheetEventDetail | null>(null)

  useEffect(() => {
    const handleOpen = (e: CustomEvent<OpenImageSheetEventDetail>) => {
      setData(e.detail)
      setIsOpen(true)
    }

    const castedHandleOpen = handleOpen as unknown as EventListener
    window.addEventListener("open-image-sheet", castedHandleOpen)

    return () => {
      window.removeEventListener("open-image-sheet", castedHandleOpen)
    }
  }, [])

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent
        side="bottom"
        showCloseButton={false}
        hideOverlay
        className="h-[calc(100dvh-7rem)]! max-w-none! gap-0 overflow-y-scroll rounded-none! border-none shadow-none! duration-500 focus:outline-0 data-[side=bottom]:data-ending-style:translate-y-[20rem] data-[side=bottom]:data-starting-style:translate-y-[20rem]"
      >
        <div className="relative flex h-full w-full flex-col pt-10">
          <div className="px-8 pb-20 md:px-12">
            {/* Project Info */}
            <div className="mb-12 flex items-start gap-4">
              <button
                onClick={() => setIsOpen(false)}
                className="mt-1.5 transition-opacity hover:opacity-60"
              >
                <XIcon size={24} weight="bold" />
              </button>
              <div className="flex flex-col">
                <div className="flex flex-col md:flex-row">
                  <div className="text-2xl leading-tight font-normal">
                    {data?.title}
                  </div>
                  {data?.subtitle && (
                    <div className="text-xl font-normal md:text-2xl">
                      {data.subtitle}
                    </div>
                  )}
                </div>
                <p className="text-lg text-black/60 capitalize">{data?.role}</p>
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
              {data?.images.map((img, idx) => (
                <div key={idx} className="overflow-hidden bg-gray-50">
                  <img
                    src={img.src}
                    alt={`Project image ${idx}`}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
