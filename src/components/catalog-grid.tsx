"use client"

import { useStore } from '@nanostores/react';
import { selectedRole } from '@/lib/store';
import { works } from '@/data/works';

export function CatalogGrid() {
  const role = useStore(selectedRole);

  const filteredWorks = role
    ? works.filter(w => w.role.toLowerCase().includes(role.toLowerCase()))
    : works;

  return (
    <div className="grid h-auto w-full grid-cols-4 grid-rows-2 gap-x-12 gap-y-24 bg-[#FFFFFD] px-30 pt-36 pb-14">
      {filteredWorks.map((work) => (
        <div key={work.id} className="group mx-auto flex h-full min-h-0 w-fit max-w-full cursor-pointer flex-col justify-start space-y-2">
          <img
            src={work.image.src}
            alt={work.title}
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
