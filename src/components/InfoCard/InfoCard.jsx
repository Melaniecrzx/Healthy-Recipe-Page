import patterKnife from "../../../public/assets/images/pattern-knife.svg";
import patterFork from "../../../public/assets/images/pattern-fork.svg";
import Button from "../ui/Button";
import { Link } from "react-router-dom";


export default function InfoCard() {
    return (
        <div className="relative bg-neutral-200 rounded-2xl py-12 md:py-20 lg:py-24 flex flex-col items-center gap-8 md:gap-10 overflow-hidden mx-4 md:mx-8 lg:mx-31">
            <div className="text-center flex flex-col gap-3 z-2">
                <h2 className="font2">Ready to cook smarter ?</h2>
                <p className="font6">Hit the button, pick a recipe, and get dinner on the table—fast.</p>
            </div>
            <Link to="/recipes">
                <Button className="px-6">Browse recipes</Button>
            </Link>
            <img src={patterFork} alt="Fork Image" className="md:block hidden absolute -left-12 lg:-left-18 -bottom-14 lg:-bottom-4 w-[179px] lg:w-[314px]" />
            <img src={patterKnife} alt="Knife Image" className="z-1 md:block hidden absolute -right-5 lg:-right-17 lg:-top-6 -top-13 w-[179px] lg:w-[338px]" />

        </div>
    )
}