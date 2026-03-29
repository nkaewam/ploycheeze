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
        className="h-[calc(100dvh-7rem)]! max-w-none! focus:outline-0 border-none shadow-none! rounded-none! gap-0 duration-500 data-[side=bottom]:data-ending-style:translate-y-[20rem] data-[side=bottom]:data-starting-style:translate-y-[20rem] overflow-y-scroll"
      >
        <div className="relative flex flex-col w-full h-full pt-10">
          <div className="px-8 md:px-12 pb-20">
            {/* Project Info */}
            <div className="flex items-start gap-4 mb-12">
              <button
                onClick={() => setIsOpen(false)}
                className="mt-1.5 hover:opacity-60 transition-opacity"
              >
                <XIcon size={24} weight="bold" />
              </button>
              <div className="flex flex-col">
                <div className="flex">
                  <div className="text-2xl font-normal leading-tight">
                    {data?.title}
                  </div>
                  {data?.subtitle && (
                    <div className="text-2xl font-normal">
                      {data.subtitle}
                    </div>
                  )}
                </div>
                <p className="text-lg text-black/60 capitalize">
                  {data?.role}
                </p>
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {data?.images.map((img, idx) => (
                <div key={idx} className="overflow-hidden bg-gray-50">
                  <img
                    src={img.src}
                    alt={`Project image ${idx}`}
                    className="w-full h-auto object-cover"
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
