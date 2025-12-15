import iconMinimumFuss from "../../../public/assets/images/icon-minimum-fuss.svg";
import iconSearchInSeconds from "../../../public/assets/images/icon-search-in-seconds.svg";
import iconWholeFoodRecipes from "../../../public/assets/images/icon-whole-food-recipes.svg";

export default function Features() {
    const features = [
        { id: 1, icon: iconWholeFoodRecipes, title: 'Whole-food recipes', desc: 'Each dish uses everyday, unprocessed ingredients.' },
        { id: 2, icon: iconMinimumFuss, title: 'Minimum fuss', desc: 'All recipes are designed to make eating healthy quick and easy.' },
        { id: 3, icon: iconSearchInSeconds, title: 'Search in seconds', desc: 'Filter by name or ingredient and jump straight to the recipe you need.' }
    ]


    return (
        <section className="justify-center items-start lg:items-center flex flex-col gap-8 md:gap-12 px-4 md:px-8 lg:px-31">
            <h2 className="font2 lg:text-center">What you’ll get</h2>
            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                {features.map((feature) => (
                    <Feature key={feature.id} {...feature} />
                ))}
            </ul>
        </section>
    )
}

function Feature({ icon, title, desc }) {
    return (
        <li className="flex flex-col gap-5 md:gap-6">
            <div className="w-15 h-15 flex border border-neutral-200 bg-white rounded-xl items-center justify-center">
                <img src={icon} alt={`icon-${title}`} className=""/>
            </div>
            
            <div className="flex flex-col gap-3 ">
                <h3 className="font3">{title}</h3>
                <p className="font6">{desc}</p>
            </div>
        </li>
    )
}