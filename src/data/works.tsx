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

import everythingImg from "@/assets/gallery/everything.png"
import rollerCoasterImg from "@/assets/gallery/rc.png"
import pnpImg from "@/assets/gallery/p&p.png"
import veinsAndWiresImg from "@/assets/gallery/ovaw.png"
import sarahImg from "@/assets/gallery/sarah.png"
import seriousBaconImg from "@/assets/gallery/seriousbacon.png"
import tippsyImg from "@/assets/gallery/tippsy.png"

export type Work = {
  id: string;
  title: ReactNode;
  subtitle?: ReactNode;
  role: string;
  tags: string[];
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
    id: "blumo",
    title: "Blumo",
    contentType: "photo",
    role: "Photographer",
    tags: ["photographer"],
    image: blumoFeaturedImg,
    subImages: [
      blumo1Img,
      blumo2Img,
      blumo3Img,
      blumoFeaturedImg
    ]
  },
  {
    id: "standard-skin-clinic-be-your-own-standard",
    title: "Standard Skin Clinic",
    subtitle: "Be your own standard",
    role: "Director / Cinematographer",
    tags: ["director", "cinematographer"],
    image: standardBeUrOwnStandardImg,
    contentType: "video",
    vimeoId: 1147291392
  },
  {
    id: "standard-skin-clinic-be-bold-be-you",
    title: "Standard Skin Clinic",
    subtitle: "Be Bold, Be You",
    role: "Director / Cinematographer",
    tags: ["director", "cinematographer"],
    image: standardBeBoldBeUImg,
    contentType: "video",
    vimeoId: 1147292872
  },
  {
    id: "standard-skin-clinic",
    title: "Standard Skin Clinic",
    role: "Art Director",
    contentType: "photo",
    tags: ["art-director"],
    image: standardSkinFeaturedImg,
    subImages: [
      standard1Img,
      standard2Img,
      standard3Img,
      standardSkinFeaturedImg
    ]
  },
  {
    id: "roller-coaster-the-series",
    title: "Roller Coaster the series",
    role: "Cinematographer",
    tags: ["cinematographer"],
    image: rollerCoasterImg,
    contentType: "video",
    vimeoId: 1134218638
  },
  {
    id: "pride-and-prejudice-in-her-room",
    title: "Pride & Prejudice",
    subtitle: ": In Her Room",
    role: "Photographer",
    tags: ["photographer"],
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
    id: "of-veins-and-wires",
    title: "Of Veins and Wires",
    role: "Cinematographer",
    tags: ["cinematographer"],
    image: veinsAndWiresImg,
    contentType: "video",
    vimeoId: 1147292872
  },
  {
    id: "sarah-salola-lub-dta-fan",
    title: (
      <p>
        <span className="font-anakotmai font-light">หลับตาฝัน</span> - Sarah Salola
      </p>
    ),
    subtitle: "Official MV",
    role: "Cinematographer",
    tags: ["cinematographer"],
    image: sarahImg,
    contentType: "video",
    vimeoId: 1147292872
  },
  {
    id: "everything-olin-mattiblue",
    title: "Everything - Olin Mattiblue",
    subtitle: "Official MV",
    role: "Cinematographer",
    contentType: "video",
    vimeoId: 1048869597,
    tags: ["cinematographer"],
    image: everythingImg
  },
  {
    id: "serious-bacon-khrai-thing-khrai-kon",
    title: (
      <p>
        <span className="font-anakotmai font-light">ใครทิ้งใครก่อน</span> - Serious Bacon
      </p>
    ),
    subtitle: "Official MV",
    role: "Cinematographer",
    tags: ["cinematographer"],
    image: seriousBaconImg,
    contentType: "video",
    vimeoId: 878768359
  },
  {
    id: "tippsy-phleng-thi-rao-khoei-fang-duai-kan",
    title: (
      <p>
        <span className="font-anakotmai font-light">เพลงที่เราเคยฟังด้วยกัน</span> - Tippsy
      </p>
    ),
    subtitle: "Official MV",
    role: "Cinematographer",
    tags: ["cinematographer"],
    image: tippsyImg,
    contentType: "video",
    vimeoId: 872268862
  }
]
