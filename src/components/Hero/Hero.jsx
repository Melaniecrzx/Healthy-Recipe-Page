import Button from "../ui/Button";
import Image from "../ui/Image";
import { Link } from "react-router-dom";
import heroSmallImage from '../../../public/assets/images/image-home-hero-small.webp';
import heroLargeImage from '../../../public/assets/images/image-home-hero-large.webp';
import pattern1 from '../../../public/assets/images/pattern-squiggle-1.svg';

export default function Hero() {
    return (
        <section className="flex flex-col justify-center items-start lg:items-center gap-10 lg:gap-20 lg:text-center relative">
            <div className="px-4 md:px-8 lg:px-31 flex flex-col gap-8 lg:gap-10 z-2">
                <div className="flex flex-col gap-8 lg:gap-10 items-center">
                    <div className="flex flex-col gap-4 items-center lg:gap-3">
                        <h1 className="font1 text-neutral-900">  <span
                            className=" relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-1 after:w-full
      after:h-[0.6em]
      after:bg-orange-500
      after:opacity-40
      after:rounded-sm
      after:-z-10
    "
                        >
                            Healthy
                        </span> meals, zero fuss</h1>
                        <p className="text-neutral-800 font6 max-w-[580px] w-full">Discover eight quick, whole-food recipes that you can cook tonight—no processed junk, no guesswork.</p>

                    </div>
                    <Link to="/recipes">
                        <Button >Start exploring</Button>
                    </Link>
                </div>


                <div className="border-white bg-white relative border-4 md:border-10 rounded-2xl ">
                    <Image
                        variants={[
                            { src: heroSmallImage, width: 606 },
                            { src: heroLargeImage, width: 1068 },
                        ]}
                        alt="Woman preparing a healthy meal"
                        sizes="100vw"
                        priority={true}
                        className="rounded-[10px]" />
                </div>
            </div>

            <img src={pattern1} alt="Pattern" className="absolute z-1 bottom-0" />

        </section>
    )
}