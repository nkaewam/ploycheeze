"use client"

import { useState, useEffect } from "react"
import { useStore } from "@nanostores/react"
import { selectedRole } from "@/lib/store"
import { works } from "@/data/works"

interface WorkCardProps {
  workId: string
  index: number
}

export function WorkCard({ workId, index }: WorkCardProps) {
  const work = works.find((w) => w.id === workId)!

  const [currentSubIdx, setCurrentSubIdx] = useState(0)

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>
    if (work.contentType === "photo" && work.previewImages.length > 0) {
      interval = setInterval(() => {
        setCurrentSubIdx((prev) => (prev + 1) % work.previewImages.length)
      }, 1500)
    }
    return () => clearInterval(interval)
  }, [work])

  const handleClick = () => {
    if (work.contentType === "video") {
      const event = new CustomEvent("open-video-sheet", {
        detail: {
          vimeoId: work.vimeoId,
          title: work.title,
          subtitle: work.subtitle,
          role: work.role,
        },
      })
      window.dispatchEvent(event)
    } else if (work.contentType === "photo") {
      const event = new CustomEvent("open-image-sheet", {
        detail: {
          images: work.images,
          title: work.title,
          subtitle: work.subtitle,
          role: work.role,
        },
      })
      window.dispatchEvent(event)
    }
  }

  const selectedTag = useStore(selectedRole)
  const isSelected = !selectedTag || work.tags.includes(selectedTag)

  return (
    <div
      className={`timeline-item group relative w-auto flex-none origin-center cursor-pointer flex-col items-center justify-center ${
        work.contentType === "photo" ? "has-sub-images" : "has-video"
      } ${isSelected ? "flex" : "hidden"}`}
      data-index={index}
      data-type={work.contentType}
      data-vimeo-id={work.contentType === "video" ? work.vimeoId : undefined}
      style={
        work.contentType === "photo"
          ? ({
              "--sub-count": work.previewImages.length,
            } as React.CSSProperties)
          : {}
      }
      onClick={handleClick}
    >
      <div className="image-wrapper relative h-auto w-auto overflow-hidden transition-transform duration-100 ease-out">
        <img
          src={work.image.src}
          alt={work.id}
          className="main-image md:max-w-auto max-h-[35vh] w-auto max-w-[70vw] object-contain filter transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] sm:max-h-[40vh]"
        />
        {work.contentType === "photo" && (
          <div className="sub-images-container absolute inset-0 flex items-center justify-center">
            {work.previewImages.map((subImg, subIdx) => (
              <img
                key={subIdx}
                src={subImg.src}
                alt={`${work.title} sub ${subIdx}`}
                className="sub-image absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ease-in-out"
                style={{
                  opacity: currentSubIdx === subIdx ? 1 : 0,
                  zIndex: currentSubIdx === subIdx ? 20 : 1,
                }}
              />
            ))}
          </div>
        )}
      </div>

      <div
        className="text-container pointer-events-none absolute top-full mt-6 flex flex-col items-center gap-1 sm:mt-8 sm:flex-row sm:items-start sm:justify-between sm:gap-0"
        style={{ width: "100%", left: "0%" }}
      >
        <div
          className="info-left text-center transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] sm:text-left"
          style={{ opacity: 0, transform: "translate3d(0, -20px, 0)" }}
        >
          <h3 className="text-xl font-normal tracking-tight sm:text-2xl">
            {work.title}
          </h3>
          {work.subtitle && (
            <div className="text-sm text-foreground/80">{work.subtitle}</div>
          )}
        </div>
        <div
          className="info-right text-center transition-all delay-100 duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] sm:text-right"
          style={{ opacity: 0, transform: "translate3d(0, -20px, 0)" }}
        >
          {work.role && (
            <p className="text-base text-muted-foreground lowercase sm:pt-1 sm:text-lg">
              {work.role}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
