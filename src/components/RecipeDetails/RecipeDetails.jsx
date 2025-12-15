import Image from "../ui/Image";
import IngredientList from "../IngredientList/IngredientList";
import RecipesPrepInfo from "../RecipePrepInfos/recipesPreInfo";

export default function RecipeDetails({ recipe }) {
    return (
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <Image
                variants={[
                    { src: `${import.meta.env.BASE_URL}${recipe.image.large}`, width: 1000 },
                    { src: `${import.meta.env.BASE_URL}${recipe.image.small}`, width: 366 },
                ]}
                alt={`${recipe.title} image`}
                sizes="100vw"
                className="rounded-[20px]"
            />
            <div className="flex flex-col gap-5">
                <h2 className="font3">{recipe.title}</h2>
                <p className="font6">{recipe.overview}</p>
                <RecipesPrepInfo servings={recipe.servings} prepMinutes={recipe.prepMinutes} cookMinutes={recipe.cookMinutes} />
                <IngredientList title='Ingredients' items={recipe.ingredients} />
                <IngredientList title='Instructions' items={recipe.instructions} />
            </div>

        </div>


    )
}