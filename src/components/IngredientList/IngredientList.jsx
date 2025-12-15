import bulletPoint from "../../../public/assets/images/icon-bullet-point.svg";

export default function IngredientList({title, items}) {
    return(
        <section className="flex flex-col gap-4">
            <h4 className="font4">{title}:</h4>
            <ul className="flex flex-col gap-2">
                {items.map((item, index) => (
                    <li key={index} className="flex gap-2 items-center">
                        <img src={bulletPoint} alt="Bullet Point" className="w-6 h-6" />
                        <p className="font6">{item}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}