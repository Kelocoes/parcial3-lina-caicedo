 "use client";

 import { useEffect, useState } from "react";
 import dynamic from "next/dynamic";
 import Link from "next/link";

 import { planets } from "@/features/planets/data/planets";
 import type { PlanetType } from "@/types/planet";

 import TypeFilter from "@/features/planets/components/TypeFilter";
 import PlanetCard from "@/features/planets/components/PlanetCard";

 const SolarSystemScene = dynamic(
   () => import("@/shared/components/provided/SolarSystemScene"),
   { ssr: false }
 );

 type FilterValue = PlanetType | "all";

 export default function HomePage() {
   const [selectedId, setSelectedId] = useState<string | null>(null);
   const selectedPlanet = planets.find(
     (planet) => planet.id === selectedId
   );

   useEffect(() => {
     document.title = selectedPlanet
       ? `${selectedPlanet.name} | Solar Explorer`
       : "Solar Explorer";
   }, [selectedPlanet]);
   return (
     <div className="space-y-6">
       <div className="flex flex-wrap justify-between items-center gap-4">
         <div>
           <h1 className="text-3xl font-bold">
             Explore the solar system
           </h1>
           <p className="text-base-content/60">
             Click on a planet for more info.
           </p>
         </div>

       </div>

       <SolarSystemScene
         planets={planets}
         selectedId={selectedId}
         onSelect={setSelectedId}
       />

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
         {planets.map((planet) => (
           <PlanetCard
             key={planet.id}
             planet={planet}
             selected={selectedId === planet.id}
             onSelect={setSelectedId}
           />
         ))}
       </div>
     </div>
   );
 }


