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
        className="h-[calc(100dvh-7rem)]! max-w-none! focus:outline-0 border-none shadow-none! rounded-none! gap-0 duration-500 data-[side=bottom]:data-ending-style:translate-y-[20rem] data-[side=bottom]:data-starting-style:translate-y-[20rem] overflow-hidden"
      >
        <div className="relative flex flex-col w-full h-full bg-[#4c5166]/30">
          <div
            className="absolute w-full h-full inset-0 z-0 scale-110 opacity-[0.05]"
            style={{ backgroundImage: `url(${grain.src})`, backgroundRepeat: "repeat" }}
          >
          </div>
          {/* Video */}
          <div className="flex relative z-10 flex-1 items-center h-[50vh] aspect-video justify-center pt-20">
            <XIcon size={24} className="absolute top-10 left-10" onClick={() => setIsOpen(false)} />
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
          <div className="flex relative z-10 items-end justify-between px-8 py-6">
            <div className="flex flex-col">
              <h3
                className="text-xl font-normal tracking-tight md:text-2xl"
                dangerouslySetInnerHTML={{ __html: data?.title || "" }}
              />
              {data?.subtitle && (
                <div
                  className="mt-1 text-sm text-foreground/80"
                  dangerouslySetInnerHTML={{ __html: data.subtitle }}
                />
              )}
            </div>
            <p className="text-base text-muted-foreground lowercase">
              {data?.role}
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet >
  )
}
