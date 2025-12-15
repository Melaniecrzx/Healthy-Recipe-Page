import Button from "../ui/Button";
import Image from "../ui/Image";
import RecipesPrepInfo from "../RecipePrepInfos/recipesPreInfo";
import { Link } from "react-router-dom";


export default function RecipeCard({
    img,
    title,
    overview,
    servings,
    cookMinutes,
    prepMinutes,
    slug
}) {

    return (
        <section className="bg-white rounded-[10px] p-2 flex flex-col gap-4 h-full">

            <Image
                variants={img}
                sizes="100vw"
                alt={`${title} preview image`}
                className="rounded-[10px]" />
            <div className="flex flex-col gap-2.5">
                <h5 className="font5">{title}</h5>
                <p>{overview}</p>
            </div>
            <RecipesPrepInfo servings={servings} cookMinutes={cookMinutes} prepMinutes={prepMinutes} />
            <Link to={`/recipes/${slug}`} className="mt-auto">
                <Button className="rounded-full w-full">View Recipe</Button>
            </Link>


        </section>
    )
}