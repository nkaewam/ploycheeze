import { HeroSection } from "@/components/sections/hero-section";
import { RoleSelection } from "@/components/sections/role-selection";
import { ArtisticLines } from "@/components/sections/artistic-lines";
import { SiteHeader } from "@/components/site-header";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col font-sans relative">
      <SiteHeader />
      <HeroSection />
      <RoleSelection />
      <ArtisticLines />
    </main>
  );
}
