import imageAboutLarge from "../../../public/assets/images/image-about-our-mission-large.webp";
import imageAboutSmall from "../../../public/assets/images/image-about-our-mission-small.webp";
import Image from "../ui/Image";
import pattern2 from "../../../public/assets/images/pattern-squiggle-2.svg";

export default function OurMission() {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 px-4 md:px-8 lg:px-31 gap-10 md:gap-16 relative pt-12 md:pt-16  lg:pt-20  items-center">
            <div className="flex flex-col gap-6">
                <p className="bg-orange-500 px-1.5 py-0.5 w-[119px] rounded-md font5">Our mission</p>
                <h2 className="font2">Help more people cook nourishing meals, more often.</h2>
                <p className="font6">Healthy Recipe Finder was created to prove that healthy eating can be convenient, affordable, and genuinely delicious.</p>
                <p className="font6">We showcase quick, whole-food dishes that anyone can master—no fancy equipment, no ultra-processed shortcuts—just honest ingredients and straightforward steps.</p>
            </div>
            <Image variants={[
                { src: imageAboutSmall, width: 606 },
                { src: imageAboutLarge, width: 1068 }
            ]}
                alt='Woman cutting carrots'
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
                priority={true}
                className="rounded-[10px]"
            />
            <img src={pattern2} alt="Pattern" className="absolute hidden lg:block right-10 bottom-18"/>
        </section>
    )
}