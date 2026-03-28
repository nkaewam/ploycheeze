"use client"

import { useStore } from '@nanostores/react';
import { selectedRole } from '@/lib/store';

export function RoleDisplay() {
  const role = useStore(selectedRole);
  
  const getPrefix = (text: string) => {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    return vowels.includes(text.charAt(0).toUpperCase()) ? 'an' : 'a';
  };

  return (
    <span className="relative top-px ml-3 leading-[1.2]">
      as {getPrefix(role)} {role}
    </span>
  );
}
