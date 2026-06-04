import Header from "@/components/Header";
import FeaturedBrowserJob from "@/components/BrowseJob";
import { SearchIcon } from "lucide-react";
export default function JobsPage(){
    return(
        <div>
            <Header />
            <div className="p-9 md:px-8 lg:px-16 flex flex-col gap-4 mt-19">
                <div>
                    <h1 className="font-semibold text-[40px]">Browse Opportunities</h1>
                <p className="text-muted text-lg">965 opportunities available right now</p>
                </div>
                 <div className="text-muted border border-muted w-full p-4 flex gap-2 items-center pl-5 rounded-xl">
            <SearchIcon size={24} />
            <input type="text" id="search" placeholder="Search job, companies, skills......" className="outline-none w-full" />
        </div>
                <FeaturedBrowserJob />
            </div>
        </div>
    )
}