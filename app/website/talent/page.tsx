import Header from "@/components/Header";
import SearchPage from "@/components/Search";
import FeaturedTalentJob from "@/components/TalentFeatured";
export default function talentPage(){
    return(
        <div>
            <Header />
            <div className="p-9 md:px-8 lg:px-16 flex flex-col gap-4">
                <div>
                    <h1 className="font-semibold text-[40px]">Our Talents </h1>
                <p className="text-muted text-lg">Discover verified professionals across Africa</p>
                </div>
                <SearchPage/>
                <FeaturedTalentJob />
            </div>
            
        </div>
    )
}