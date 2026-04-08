import React, { useState, useEffect } from "react"
import { Sheet, SheetContent } from "./ui/sheet"
import grain from "@/assets/grain.gif"
import { XIcon } from "@phosphor-icons/react"

export type OpenVideoSheetEventDetail = {
  vimeoId: string
  title: string
  subtitle: string
  role: string
}

export function VideoSheet() {
  const [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState<OpenVideoSheetEventDetail | null>(null)

  useEffect(() => {
    const handleOpen = (e: CustomEvent<OpenVideoSheetEventDetail>) => {
      setData(e.detail)
      setIsOpen(true)
    }

    const castedHandleOpen = handleOpen as unknown as EventListener
    window.addEventListener("open-video-sheet", castedHandleOpen)

    return () => {
      window.removeEventListener("open-video-sheet", castedHandleOpen)
    }
  }, [])

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent
        side="bottom"
        showCloseButton={false}
        className="h-[calc(100dvh-7rem)]! max-w-none! gap-0 overflow-hidden rounded-none! border-none shadow-none! duration-500 focus:outline-0 data-[side=bottom]:data-ending-style:translate-y-[20rem] data-[side=bottom]:data-starting-style:translate-y-[20rem]"
      >
        <div className="relative flex h-full w-full flex-col bg-[#4c5166]/30">
          <div
            className="absolute inset-0 z-0 h-full w-full scale-110 opacity-[0.05]"
            style={{
              backgroundImage: `url(${grain.src})`,
              backgroundRepeat: "repeat",
            }}
          ></div>
          {/* Video */}
          <div className="relative z-10 flex aspect-video w-full flex-1 lg:h-[50vh] lg:w-auto lg:items-center lg:justify-center lg:pt-20">
            <XIcon
              size={24}
              className="absolute top-4 left-4 lg:top-10 lg:left-10"
              onClick={() => setIsOpen(false)}
            />
            {isOpen && data?.vimeoId ? (
              <iframe
                id="vimeo-player"
                className="h-full w-full rounded-sm"
                src={`https://player.vimeo.com/video/${data.vimeoId}?autoplay=1&color=ffffff&title=0&byline=0&portrait=0`}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="w-full rounded-sm"></div>
            )}
          </div>

          {/* Footer */}
          <div className="relative z-10 flex flex-col items-end justify-between px-4 py-6 lg:flex-row lg:items-end lg:px-8 lg:py-6">
            <div className="flex flex-col">
              <h3 className="text-right text-xl font-normal tracking-tight md:text-left md:text-2xl">
                {data?.title}
              </h3>
              <div
                className="mt-1 text-right text-sm text-foreground/80 lg:text-left"
                dangerouslySetInnerHTML={{ __html: data?.subtitle || "" }}
              />
            </div>
            <p className="text-right text-base text-muted-foreground lowercase lg:text-left">
              {data?.role}
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
