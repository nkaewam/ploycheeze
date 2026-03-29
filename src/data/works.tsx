import type { ReactNode } from "react";
// Standard
import standardSkinFeaturedImg from "@/assets/gallery/standard-skin/featured.png"
import standard1Img from "@/assets/gallery/standard-skin/std-1.png"
import standard2Img from "@/assets/gallery/standard-skin/std-2.png"
import standard3Img from "@/assets/gallery/standard-skin/std-3.png"
import standardBeUrOwnStandardImg from "@/assets/gallery/be-ur-own-std.png"
import standardBeBoldBeUImg from "@/assets/gallery/be-bold-be-u.png"

// Blumo
import blumoFeaturedImg from "@/assets/gallery/blumo/featured.jpg"
import blumo1Img from "@/assets/gallery/blumo/blumo-1.jpg"
import blumo2Img from "@/assets/gallery/blumo/blumo-2.jpg"
import blumo3Img from "@/assets/gallery/blumo/blumo-3.jpg"

// Pride & Prejudice
import pnpFeaturedImg from "@/assets/gallery/pnp/featured.jpg"
import pnp1Img from "@/assets/gallery/pnp/pnp-1.jpg"
import pnp2Img from "@/assets/gallery/pnp/pnp-2.jpg"
import pnp3Img from "@/assets/gallery/pnp/pnp-3.jpg"

import rollerCoasterImg from "@/assets/gallery/rc.png"
import pnpImg from "@/assets/gallery/p&p.png"
import veinsAndWiresImg from "@/assets/gallery/ovaw.png"
import sarahImg from "@/assets/gallery/sarah.png"

export type Work = {
  id: number;
  title: string;
  subtitle?: ReactNode;
  role: string;
  image: ImageMetadata;
} & ({
  contentType: "video";
  vimeoId: number;
} | {
  contentType: "photo";
  subImages: ImageMetadata[];
})

export const works: Work[] = [
  {
    id: 1,
    title: "Blumo",
    contentType: "photo",
    role: "Photographer",
    image: blumoFeaturedImg,
    subImages: [
      blumo1Img,
      blumo2Img,
      blumo3Img,
      blumoFeaturedImg
    ]
  },
  {
    id: 2,
    title: "Standard Skin Clinic",
    subtitle: "Be your own standard",
    role: "Director / Cinematographer",
    image: standardBeUrOwnStandardImg,
    contentType: "video",
    vimeoId: 1147291392
  },
  {
    id: 3,
    title: "Standard Skin Clinic",
    subtitle: "Be Bold, Be You",
    role: "Director / Cinematographer",
    image: standardBeBoldBeUImg,
    contentType: "video",
    vimeoId: 1147292872
  },
  {
    id: 4,
    title: "Standard Skin Clinic",
    role: "Art Director",
    contentType: "photo",
    image: standardSkinFeaturedImg,
    subImages: [
      standard1Img,
      standard2Img,
      standard3Img,
      standardSkinFeaturedImg
    ]
  },
  {
    id: 5,
    title: "Roller Coaster the series",
    role: "Cinematographer",
    image: rollerCoasterImg,
    contentType: "video",
    vimeoId: 1134218638
  },
  {
    id: 6,
    title: "Pride & Prejudice",
    subtitle: ": In Her Room",
    role: "Photographer",
    image: pnpFeaturedImg,
    contentType: "photo",
    subImages: [
      pnp1Img,
      pnp2Img,
      pnp3Img,
      pnpFeaturedImg
    ]
  },
  {
    id: 7,
    title: "Of Veins and Wires",
    role: "Cinematographer",
    image: veinsAndWiresImg,
    contentType: "video",
    vimeoId: 1147292872
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
    contentType: "video",
    vimeoId: 1147292872
  }
]
