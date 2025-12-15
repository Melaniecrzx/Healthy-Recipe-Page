import RecipeCard from "../RecipeCard/RecipeCard";
import recipes from "../../../data.json";


export default function RelatedRecipes({ recipeId, limit = 3 }) {
    const otherRecipes = recipes.filter((recipe) => recipe.id !== recipeId + 1).slice(0, limit);
    console.log(recipeId);
    return (
        <section className="flex flex-col gap-6">
            <h3 className="font3">More recipes</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {otherRecipes.map((recipe) => (
                    <RecipeCard
                        img={[
                            { src: recipe.image.large, width: 1000 },
                            { src: recipe.image.small, width: 366 },
                        ]}
                        title={recipe.title}
                        overview={recipe.overview}
                        servings={recipe.servings}
                        cookMinutes={recipe.cookMinutes}
                        prepMinutes={recipe.prepMinutes}
                        slug={recipe.slug}
                        key={recipe.id} />
                ))}
            </div>

        </section>
    )
}