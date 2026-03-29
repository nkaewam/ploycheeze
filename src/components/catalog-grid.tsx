"use client"

import { useStore } from '@nanostores/react';
import { selectedRole } from '@/lib/store';
import { works } from '@/data/works';
import grain from "@/assets/grain.gif"

export function CatalogGrid() {
  const role = useStore(selectedRole);

  const filteredWorks = role
    ? works.filter(w => w.tags.includes(role))
    : works;

  return (
    <div className="grid h-auto w-full grid-cols-4 grid-rows-2 gap-x-12 gap-y-24 px-30 pt-36 pb-14">
      <div
        className="grain-overlay pointer-events-none absolute inset-0 z-0 scale-110 opacity-[0.05] mix-blend-overlay"
        style={{ backgroundImage: `url(${grain.src})`, backgroundRepeat: "repeat" }}
      >
      </div>
      {filteredWorks.map((work) => (
        <div key={work.id} className="group mx-auto flex h-full min-h-0 w-fit max-w-full cursor-pointer flex-col justify-start space-y-2">
          <img
            src={work.image.src}
            alt={work.id}
            className="aspect-2560/1600 w-full object-contain"
          />

          <div className="flex items-start justify-between text-[12px] font-normal tracking-tight text-neutral-900">
            <div className="flex flex-col">
              <span className="leading-[1.4]">{work.title}</span>
              {work.subtitle && (
                <span className="leading-[1.4] tracking-tight">{work.subtitle}</span>
              )}
            </div>
            <div className="text-right">
              <span className="leading-[1.4]">{work.role}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
