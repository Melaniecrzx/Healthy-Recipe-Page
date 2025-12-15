import Image from "../ui/Image";
import realLifeSmallImage from "../../../public/assets/images/image-home-real-life-small.webp";
import realLifeLargeImage from "../../../public/assets/images/image-home-real-life-large.webp";


export default function RealLife() {
    return (
        <section className="grid grid-cols-1 gap-8 md:gap-10 lg:gap-12 lg:grid-cols-2 items-center px-4 md:px-8 lg:px-31">
            <div className="flex flex-col gap-5">
                <h2 className="font2">Built for real life</h2>

                <p className="font6">
                    Cooking shouldn’t be complicated. These recipes come in under <span className="font5">30 minutes</span> of active time, fit busy schedules, and taste good enough to repeat.
                </p>
                <p className="font6">
                    Whether you’re new to the kitchen or just need fresh ideas, we’ve got you covered.
                </p>

            </div>
            <Image
                variants={[
                    { src: realLifeSmallImage, width: 606 },
                    { src: realLifeLargeImage, width: 1068 }
                ]}
                alt="Preparing healthy meal"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
                className="rounded-[10px]" />

        </section>
    )
}