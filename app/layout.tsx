 import Link from "next/link";
 import "./globals.css";
 export default function RootLayout({
   children,
 }: {
   children: React.ReactNode;
 }) {
   return (
     <html lang="es">
       <body className="bg-base-200 min-h-screen">
         <div className="navbar bg-base-100 shadow-sm px-6">
           <div className="max-w-6xl mx-auto w-full flex justify-between">
             <Link href="/" className="font-bold text-lg">
               Solar Explorer
             </Link>

             <Link href="/" className="btn btn-ghost btn-sm">
               Planets
             </Link>
           </div>
         </div>

         <main className="max-w-6xl mx-auto px-6 py-8">
           {children}
         </main>
       </body>
     </html>
   );
 }
