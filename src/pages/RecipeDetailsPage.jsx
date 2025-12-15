import { Link, useParams } from "react-router-dom";
import recipes from "../../data.json";
import RecipeDetails from "../components/RecipeDetails/RecipeDetails";
import RelatedRecipes from "../components/RelatedRecipes/RelatedRecipes";
import PageTransition from "../components/ui/PageTransition";

export default function RecipeDeatilsPage() {
    const { id } = useParams();
    const recipe = recipes.find((r) => r.slug === id);
    const recipeId = recipes.indexOf(recipe);



    return (
        <PageTransition>
            <section className="px-4 md:px-8 lg:px-31 flex flex-col gap-4 mt-12">
                <div>
                    <Link to="/recipes">
                        Recipes /
                    </Link>
                    <span> {recipe.title}</span>
                </div>

                <RecipeDetails recipe={recipe} />
                <hr className="border-t border-neutral-200 w-full " />
                <RelatedRecipes recipeId={recipeId} />

            </section >
        </PageTransition>

    )
}