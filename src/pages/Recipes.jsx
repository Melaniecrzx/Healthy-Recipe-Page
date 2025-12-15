import SearchFilters from "../components/SearchFilters/SearchFilters";
import { useMemo, useState } from "react";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import recipes from "../../data.json";
import SelectFilters from "../components/ui/SelectFilters";
import { motion } from "framer-motion";
import PageTransition from "../components/ui/PageTransition";


export default function Recipes() {
    const [searchRecipe, setSearchRecipe] = useState('');
    const [filters, setFilters] = useState({
        prep: null,
        cook: null
    })


    const timeFilters = [
        {
            key: "prep",
            title: "Max Prep Time",
            options: [
                { name: "0 minutes", value: 0 },
                { name: "5 minutes", value: 5 },
                { name: "10 minutes", value: 10 },
            ],
        },
        {
            key: "cook",
            title: "Max Cook Time",
            options: [
                { name: "0 minutes", value: 0 },
                { name: "5 minutes", value: 5 },
                { name: "10 minutes", value: 10 },
                { name: "15 minutes", value: 15 },
            ],
        },
    ];

    const handleFilterChange = (filterName, value) => {
        setFilters(prev => ({
            ...prev,
            [filterName]: value
        }))
    }
    const filteredRecipes = useMemo(() => {
        return recipes.filter((recipe) => {

            const matchPrep = filters.prep === null || filters.prep === undefined || recipe.prepMinutes <= filters.prep;
            const matchCook = filters.cook === null || filters.prep === undefined || recipe.cookMinutes <= filters.cook;

            if (searchRecipe.trim() === '') return matchCook && matchPrep;




            const matchTitle = recipe.title.toLowerCase().includes(searchRecipe.toLowerCase());
            console.log(matchPrep);
            const matchIngredient = recipe.ingredients.some((ingredient) =>
                ingredient.toLowerCase().includes(searchRecipe.toLowerCase()));
            return (matchTitle || matchIngredient) && matchCook && matchPrep;
        })

    }, [searchRecipe, filters]);

    const hasNoResults = filteredRecipes.length === 0 && searchRecipe !== '';

    return (
        <PageTransition>
            <section className="px-4 md:px-8 lg:px-31 flex flex-col gap-12 lg:gap-18 mt-18 lg:mt-20">
                <div className="flex flex-col gap-3 justify-center items-center">
                    <h2 className="font2">Explore our simple, healthy recipes</h2>
                    <p className="font6 lg:text-center">Discover eight quick, whole-food dishes that fit real-life schedules and taste amazing. Use the search bar to find a recipe by name or ingredient, or simply scroll the list and let something delicious catch your eye.</p>
                </div>
                <div className=" flex flex-col gap-6">
                    <div className="flex flex-col md:flex-row gap-3 md:justify-between">
                        <div className="flex gap-4 flex-col md:flex-row">
                            {timeFilters.map((filter) => (
                                <SelectFilters
                                    key={filter.key}
                                    title={filter.title}
                                    options={filter.options}
                                    name={filter.key}
                                    value={filters[filter.key]}
                                    onChange={handleFilterChange}

                                />
                            ))}
                        </div>
                        <SearchFilters searchRecipe={searchRecipe} setSearchRecipe={setSearchRecipe} />

                    </div>
                    {hasNoResults ? (
                        <p className="font5 text-center">No recipes found !</p>
                    ) :
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {filteredRecipes.map(recipe => (
                                <div key={recipe.id} className="h-full">
                                    <RecipeCard
                                        img={[
                                            { src: `${import.meta.env.BASE_URL}${recipe.image.large}`, width: 1000 },
                                            { src: `${import.meta.env.BASE_URL}${recipe.image.small}`, width: 366 }
                                        ]}
                                        title={recipe.title}
                                        overview={recipe.overview}
                                        servings={recipe.servings}
                                        cookMinutes={recipe.cookMinutes}
                                        prepMinutes={recipe.prepMinutes}
                                        slug={recipe.slug}
                                    />
                                </div>
                            ))}
                        </div>}
                </div>
            </section>

        </PageTransition>

    )
}