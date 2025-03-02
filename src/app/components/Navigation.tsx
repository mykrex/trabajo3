import Link from "next/link";

export default function Navigation() {
    return <header className="flex flex-row flex-wrap items-center justify-items-center p-4 sm:p-10 sm:items-start shadow-2xl shadow-blue-black-900/50" style={{backgroundColor: '#2471A3'}}>

        <Link href="/" className="text-white text-2xl"> 
        Weather Now</Link>
        
    </header>;
}