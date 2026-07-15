"use client"
import PATHS from "@/route";
import { Search } from "lucide-react"
import { useState } from "react";
export default function SearchPage(){
    const [search, setSearch] = useState ("")
    return(
        <div className="text-muted border border-muted w-full p-4 flex gap-2 items-center pl-5 rounded-xl">
            <Search size={24} />
            <input type="text" value="search" onChange={(e) => setSearch(e.target.value)} id="search" placeholder="Search talents......" className="outline-none w-full" />
        </div>
    )
}