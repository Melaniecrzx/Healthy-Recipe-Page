import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import RealLife from "../components/RealLife/RealLife";
import InfoCard from "../components/InfoCard/InfoCard";
import PageTransition from "../components/ui/PageTransition";


export default function Home() {
    return (
        <PageTransition>
            <div className="text-neutral-900 flex flex-col gap-24 mt-12 lg:mt-20 ">
                <Hero />
                <Features />
                <hr className="border-t  border-neutral-200 w-full hidden md:block lg:max-w-[1192px] mx-auto" />
                <RealLife />
                <InfoCard />
            </div>
        </PageTransition>

    )
}