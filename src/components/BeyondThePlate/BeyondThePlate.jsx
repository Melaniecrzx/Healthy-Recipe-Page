import Image from "../ui/Image"
import beyondImageLarge from "../../../public/assets/images/image-about-beyond-the-plate-large.webp";
import beyondImageSmall from "../../../public/assets/images/image-about-beyond-the-plate-small.webp";

export default function BeyondThePlace() {
    return (
        <div className="px-4 md:px-8 lg:px-31 grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
            <div className="col-span-1 flex flex-col gap-5">
                <h2 className="font2">Beyond the plate</h2>
                <div className="flex flex-col gap-3">
                    <p className="font6">We believe food is a catalyst for community and well-being. By sharing approachable recipes, we hope to:</p>
                    <ul className="font6 list-disc pl-6">
                        <li>Encourage family dinners and social cooking.</li>
                        <li>Reduce reliance on single-use packaging and delivery waste.</li>
                        <li>Spark curiosity about seasonal produce and local agriculture.</li>
                    </ul>
                </div>

            </div>

            <Image variants={[
                { src: beyondImageSmall, width: 606 },
                { src: beyondImageLarge, width: 1068 }
            ]}
                alt='Family laughing'
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
                priority={true}
                className="rounded-[10px] col-span-2"
            />
        </div>
    )
}