"use client"

import { useStore } from "@nanostores/react"
import { selectedRole } from "@/lib/store"

export function RoleDisplay() {
  const role = useStore(selectedRole)

  if (!role) {
    return null
  }

  const roleMap: Record<string, string> = {
    director: "Director",
    "art-director": "Art Director",
    cinematographer: "Cinematographer",
    photographer: "Photographer",
    colorist: "Colorist",
  }
  const displayRole = roleMap[role] || role

  const getPrefix = (text: string) => {
    const vowels = ["A", "E", "I", "O", "U"]
    return vowels.includes(text.charAt(0).toUpperCase()) ? "an" : "a"
  }

  return (
    <span className="relative top-px ml-3 text-xs leading-[1.2] font-light md:text-base">
      <span className="hidden md:inline">as {getPrefix(displayRole)}</span>{" "}
      <span className="md:hidden">/</span> {displayRole}
    </span>
  )
}
