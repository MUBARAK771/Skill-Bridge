import Header from "@/components/Header";
import SearchPage from "@/components/Search";
import FeaturedBrowserJob from "@/components/BrowseJob";
export default function JobsPage(){
    return(
        <div>
            <Header />
            <div className="p-9 md:px-8 lg:px-16 flex flex-col gap-4">
                <div>
                    <h1 className="font-semibold text-[40px]">Browse Opportunities</h1>
                <p className="text-muted text-lg">965 opportunities available right now</p>
                </div>
                <SearchPage/>
                <FeaturedBrowserJob />
            </div>
        </div>
    )
}