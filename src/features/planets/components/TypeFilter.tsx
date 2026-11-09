 import type { PlanetType } from "@/types/planet";

 type FilterValue = PlanetType | "all";

 interface Props {
   selected: FilterValue;
   onChange: (value: FilterValue) => void;
 }

 const filters: { label: string; value: FilterValue }[] = [
   { label: "all", value: "all" },
   { label: "Rocky", value: "rocky" },
   { label: "Gas Giant", value: "gas" },
   { label: "Ice Giant", value: "ice" },
 ];

 export default function TypeFilter({ selected, onChange }: Props) {
   return (
     <div className="flex flex-wrap gap-2">
       {filters.map((filter) => (
         <button
           key={filter.value}
           className={`btn btn-sm ${
             selected === filter.value ? "btn-primary" : "btn-ghost"
           }`}
           onClick={() => onChange(filter.value)}
         >
           {filter.label}
         </button>
       ))}
     </div>
   );
 }
