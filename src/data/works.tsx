import type { ReactNode } from "react";
import standardSkinBgImg from "@/assets/standard-skin.png"
import standardArtDirectorImg from "@/assets/gallery/std-art-di.png"
import standardBeUrOwnStandardImg from "@/assets/gallery/be-ur-own-std.png"
import standardBeBoldBeUImg from "@/assets/gallery/be-bold-be-u.png"
import blumoImg from "@/assets/gallery/blumo.png"
import rollerCoasterImg from "@/assets/gallery/rc.png"
import pnpImg from "@/assets/gallery/p&p.png"
import veinsAndWiresImg from "@/assets/gallery/ovaw.png"
import sarahImg from "@/assets/gallery/sarah.png"

export interface Work {
  id: number;
  title: string;
  subtitle?: ReactNode;
  role: string;
  image: any;
}

export const works: Work[] = [
  {
    id: 1,
    title: "Standard Skin Clinic",
    role: "Art Director",
    image: standardArtDirectorImg,
  },
  {
    id: 2,
    title: "Standard Skin Clinic",
    subtitle: "Be your own standard",
    role: "Director / Cinematographer",
    image: standardBeUrOwnStandardImg,
  },
  {
    id: 3,
    title: "Standard Skin Clinic",
    subtitle: "Be Bold, Be You",
    role: "Director / Cinematographer",
    image: standardBeBoldBeUImg,
  },
  {
    id: 4,
    title: "Blumo",
    role: "Photographer",
    image: blumoImg,
  },
  {
    id: 5,
    title: "Roller Coaster the series",
    role: "Cinematographer",
    image: rollerCoasterImg,
  },
  {
    id: 6,
    title: "Pride & Prejudice",
    subtitle: ": In Her Room",
    role: "Photographer",
    image: pnpImg,
  },
  {
    id: 7,
    title: "Of Veins and Wires",
    role: "Cinematographer",
    image: veinsAndWiresImg,
  },
  {
    id: 8,
    title: "Official MV",
    subtitle: (
      <p>
        <span className="font-anakotmai font-light">หลับตาฝัน</span> - Sarah Salola
      </p>
    ),
    role: "Cinematographer",
    image: sarahImg,
  }
]
