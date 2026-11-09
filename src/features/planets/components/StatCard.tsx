interface Props {
   title: string;
   value: string;
 }

 export default function StatCard({ title, value }: Props) {
   return (
     <div className="stat bg-base-100 rounded-lg shadow-sm p-4">
       <div className="stat-title text-sm">{title}</div>
       <div className="stat-value text-primary text-xl">
         {value}
       </div>
     </div>
   );
 }
