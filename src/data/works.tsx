import type { ReactNode } from "react"
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
import blumo4Img from "@/assets/gallery/blumo/blumo-4.jpg"
import blumo5Img from "@/assets/gallery/blumo/blumo-5.jpg"
import blumo6Img from "@/assets/gallery/blumo/blumo-6.jpg"
import blumo7Img from "@/assets/gallery/blumo/blumo-7.jpg"

// Pride & Prejudice
import pnpFeaturedImg from "@/assets/gallery/pnp/featured.jpg"
import pnp1Img from "@/assets/gallery/pnp/pnp-1.jpg"
import pnp2Img from "@/assets/gallery/pnp/pnp-2.jpg"
import pnp3Img from "@/assets/gallery/pnp/pnp-3.jpg"
import pnp4Img from "@/assets/gallery/pnp/pnp-4.jpg"
import pnp5Img from "@/assets/gallery/pnp/pnp-5.jpg"
import pnp6Img from "@/assets/gallery/pnp/pnp-6.jpg"
import pnp7Img from "@/assets/gallery/pnp/pnp-7.jpg"

// Of Veins and Wires
import ovaw1Img from "@/assets/gallery/ovaw/ovaw-1.png"
import ovaw2Img from "@/assets/gallery/ovaw/ovaw-2.jpg"
import ovaw3Img from "@/assets/gallery/ovaw/ovaw-3.jpg"
import ovaw4Img from "@/assets/gallery/ovaw/ovaw-4.jpg"
import ovaw5Img from "@/assets/gallery/ovaw/ovaw-5.jpg"
import ovaw6Img from "@/assets/gallery/ovaw/ovaw-6.jpg"
import ovaw7Img from "@/assets/gallery/ovaw/ovaw-7.jpg"
import ovaw8Img from "@/assets/gallery/ovaw/ovaw-8.jpg"

// Sarah
import sarahImg from "@/assets/gallery/sarah.png"
import sarah1Img from "@/assets/gallery/sarah/sarah-1.jpg"
import sarah2Img from "@/assets/gallery/sarah/sarah-2.jpg"
import sarah3Img from "@/assets/gallery/sarah/sarah-3.png"
import sarah4Img from "@/assets/gallery/sarah/sarah-4.png"
import sarah5Img from "@/assets/gallery/sarah/sarah-5.png"
import sarah6Img from "@/assets/gallery/sarah/sarah-6.png"
import sarah7Img from "@/assets/gallery/sarah/sarah-7.png"
import sarah8Img from "@/assets/gallery/sarah/sarah-8.png"

import rollerCoasterImg from "@/assets/gallery/rc.png"

import seriousBaconImg from "@/assets/gallery/seriousbacon.png"
import tippsyImg from "@/assets/gallery/tippsy.png"
import phuImg from "@/assets/gallery/phu.png"
import everythingImg from "@/assets/gallery/everything.png"

export type Work = {
  id: string
  title: ReactNode
  subtitle?: ReactNode
  role: string
  tags: string[]
  image: ImageMetadata
} & (
  | {
      contentType: "video"
      vimeoId: number
    }
  | {
      contentType: "photo"
      previewImages: ImageMetadata[]
      images: ImageMetadata[]
    }
)

export const works: Work[] = [
  {
    id: "blumo",
    title: "Blumo",
    contentType: "photo",
    role: "Photographer / Art Director",
    tags: ["photographer", "art-director"],
    image: blumoFeaturedImg,
    previewImages: [blumo1Img, blumo2Img, blumo3Img, blumoFeaturedImg],
    images: [
      blumoFeaturedImg,
      blumo1Img,
      blumo2Img,
      blumo3Img,
      blumo4Img,
      blumo5Img,
      blumo6Img,
      blumo7Img,
    ],
  },
  {
    id: "standard-skin-clinic-be-your-own-standard",
    title: "Standard Skin Clinic",
    subtitle: "Be your own standard",
    role: "Director / Cinematographer",
    tags: ["director", "cinematographer"],
    image: standardBeUrOwnStandardImg,
    contentType: "video",
    vimeoId: 1147291392,
  },
  {
    id: "standard-skin-clinic-be-bold-be-you",
    title: "Standard Skin Clinic",
    subtitle: "Be Bold, Be You",
    role: "Director / Cinematographer",
    tags: ["director", "cinematographer"],
    image: standardBeBoldBeUImg,
    contentType: "video",
    vimeoId: 1147292872,
  },
  {
    id: "standard-skin-clinic",
    title: "Standard Skin Clinic",
    role: "Art Director",
    contentType: "photo",
    tags: ["art-director"],
    image: standardSkinFeaturedImg,
    previewImages: [
      standard1Img,
      standard2Img,
      standard3Img,
      standardSkinFeaturedImg,
    ],
    images: [standardSkinFeaturedImg, standard3Img, standard1Img, standard2Img],
  },
  {
    id: "roller-coaster-the-series",
    title: "Roller Coaster the series",
    role: "Cinematographer",
    tags: ["cinematographer"],
    image: rollerCoasterImg,
    contentType: "video",
    vimeoId: 1134218638,
  },
  {
    id: "pride-and-prejudice-in-her-room",
    title: "Pride & Prejudice",
    subtitle: ": In Her Room",
    role: "Photographer",
    tags: ["photographer"],
    image: pnpFeaturedImg,
    contentType: "photo",
    previewImages: [pnp1Img, pnp2Img, pnp3Img, pnpFeaturedImg],
    images: [
      pnp1Img,
      pnp2Img,
      pnp3Img,
      pnp4Img,
      pnp5Img,
      pnp6Img,
      pnp7Img,
      pnpFeaturedImg,
    ],
  },
  {
    id: "of-veins-and-wires",
    title: "Of Veins and Wires",
    subtitle: "(Mockumentary)",
    role: "Cinematographer",
    tags: ["cinematographer"],
    image: ovaw1Img,
    contentType: "photo",
    images: [
      ovaw1Img,
      ovaw2Img,
      ovaw3Img,
      ovaw4Img,
      ovaw5Img,
      ovaw6Img,
      ovaw7Img,
      ovaw8Img,
    ],
    previewImages: [ovaw1Img],
  },
  {
    id: "sarah-salola-lub-dta-fan",
    title: (
      <p>
        <span className="font-anakotmai font-light">หลับตาฝัน</span> - Sarah
        Salola
      </p>
    ),
    subtitle: "Official MV",
    role: "Cinematographer",
    tags: ["cinematographer"],
    image: sarahImg,
    contentType: "photo",
    previewImages: [sarahImg],
    images: [
      sarah1Img,
      sarah2Img,
      sarah3Img,
      sarah4Img,
      sarah5Img,
      sarah6Img,
      sarah7Img,
      sarah8Img,
    ],
  },
  {
    id: "phutatchai-phayayam",
    title: (
      <p>
        <span className="font-anakotmai font-light">พยายาม</span> - PHUTATCHAI
      </p>
    ),
    subtitle: "Bus Cover Project",
    role: "Colorist",
    tags: ["colorist"],
    image: phuImg,
    contentType: "video",
    vimeoId: 1178233230,
  },
  {
    id: "everything-olin-mattiblue",
    title: "Everything - Olin Mattiblue",
    subtitle: "Official MV",
    role: "Cinematographer",
    contentType: "video",
    vimeoId: 1048869597,
    tags: ["cinematographer"],
    image: everythingImg,
  },
  {
    id: "serious-bacon-khrai-thing-khrai-kon",
    title: (
      <p>
        <span className="font-anakotmai font-light">ใครทิ้งใครก่อน</span> -
        Serious Bacon
      </p>
    ),
    subtitle: "Official MV",
    role: "Cinematographer",
    tags: ["cinematographer"],
    image: seriousBaconImg,
    contentType: "video",
    vimeoId: 878768359,
  },
  {
    id: "tippsy-phleng-thi-rao-khoei-fang-duai-kan",
    title: (
      <p>
        <span className="font-anakotmai font-light">
          เพลงที่เราเคยฟังด้วยกัน
        </span>{" "}
        - Tippsy
      </p>
    ),
    subtitle: "Official MV",
    role: "Cinematographer",
    tags: ["cinematographer"],
    image: tippsyImg,
    contentType: "video",
    vimeoId: 872268862,
  },
]
