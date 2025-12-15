import OurMission from "../components/OurMission/OurMission";
import WhyWeExist from "../components/WhyWeExit/WhyWeExist";
import OurPhilosophy from "../components/OurPhilosophy/OurPhilosophy";
import BeyondThePlace from "../components/BeyondThePlate/BeyondThePlate";
import InfoCard from "../components/InfoCard/InfoCard";
import PageTransition from "../components/ui/PageTransition";

export default function About() {
    return (
        <PageTransition>
            <div className="flex flex-col gap-16 md:gap-20 lg:gap-24">
                <OurMission />
                <hr className="border-t  border-neutral-200 w-full" />
                <WhyWeExist />
                <hr className="border-t  border-neutral-200 w-full" />
                <OurPhilosophy />
                <hr className="border-t  border-neutral-200 w-full" />
                <BeyondThePlace />
                <InfoCard />
            </div>
        </PageTransition>
    )
}