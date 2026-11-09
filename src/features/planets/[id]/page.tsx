
 "use client";

 import { useEffect } from "react";
 import { useParams } from "next/navigation";
 import dynamic from "next/dynamic";
 import Link from "next/link";

 import { planets } from "@/features/planets/data/planets";
 import StatCard from "@/features/planets/components/StatCard";

 const PlanetViewer = dynamic(
   () => import("@/shared/components/provided/PlanetViewer"),
   { ssr: false }
 );
 const typeNames = {
   rocky: "Rocoso",
   gas: "Gigante gaseoso",
   ice: "Gigante helado",
 };

 export default function PlanetDetailPage() {
   const params = useParams<{ id: string }>();

   const planet = planets.find(
     (item) => item.id === params.id
   );

   const maxDistance = Math.max(
     ...planets.map((item) => item.distanceFromSun)
   );
 
      useEffect(() => {
     document.title = planet
       ? `${planet.name} | Solar Explorer`
       : "Planet not found | Solar Explorer";
   }, [planet]);

   if (!planet) {
     return (
       <div className="text-center space-y-4">
         <h1 className="text-2xl font-bold">
           Planet not found
         </h1>
         <Link href="/" className="btn btn-primary">
           Back to solar system
         </Link>
       </div>
     );
   }

   const progress =
     (planet.distanceFromSun / maxDistance) * 100;

   return (
     <div className="space-y-6">
       <div className="breadcrumbs text-sm">
         <ul>
           <li>
             <Link href="/">Start</Link>
           </li>
           <li>{planet.name}</li>
         </ul>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <PlanetViewer planet={planet} />

         <div className="space-y-4">
           <h1 className="text-4xl font-bold">
             {planet.name}
           </h1>

           <span className="badge badge-primary">
             {typeNames[planet.type]}
           </span>

           <p>{planet.description}</p>

           <div className="alert alert-success">
             <span>{planet.funFact}</span>
           </div>

           <div>
             <p className="text-sm mb-2">
               Distance from the Sun (relating to Neptune)
             </p>

             <progress
               className="progress progress-primary w-full"
               value={progress}
               max="100"
             />
           </div>
         </div>
       </div>

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
         <StatCard
           title="Distance"
           value={`${planet.distanceFromSun} M km`}
         />

         <StatCard
           title="Moons"
           value={String(planet.moons)}
         />

         <StatCard
           title="Duration of the day"
           value={`${planet.dayLengthHours} h`}
         />

         <StatCard
           title="Temperature"
           value={`${planet.temperatureC} °C`}
         />
       </div>

       <Link href="/" className="btn btn-outline">
         Back to solar system
       </Link>
     </div>
   );
 }

