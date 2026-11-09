import type { Planet } from "@/types/planet";

 interface Props {
   planet: Planet;
   selected: boolean;
   onSelect: (id: string) => void;
 }

 const typeNames = {
   rocky: "Rocoso",
   gas: "Gas Giant",
   ice: "Ice Giant",
 };

 export default function PlanetCard({
   planet,
   selected,
   onSelect,
 }: Props) {
   return (
     <button
       onClick={() => onSelect(planet.id)}
       className={`card bg-base-100 shadow-sm border text-left w-full ${
         selected ? "border-primary border-2" : "border-base-300"
       }`}
     >
       <div className="card-body p-4 gap-3">
         <div className="flex items-center gap-2">
           <div
             className="w-7 h-7 rounded-full"
             style={{ backgroundColor: planet.color }}
           />

           <h3 className="font-semibold">{planet.name}</h3>
         </div>

         <div className="flex items-center justify-between gap-2">
           <span className="badge badge-primary badge-sm">
             {typeNames[planet.type]}
           </span>

           <span className="text-xs text-base-content/60">
             {planet.distanceFromSun} M km
           </span>
         </div>
       </div>
     </button>
   );
 }
