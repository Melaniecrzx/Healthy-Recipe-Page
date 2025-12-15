import servingIcon from "../../../public/assets/images/icon-servings.svg";
import cookTimeIcon from "../../../public/assets/images/icon-cook-time.svg";
import prepTimeIcon from "../../../public/assets/images/icon-prep-time.svg";


export default function RecipesPrepInfo({ servings, prepMinutes, cookMinutes }) {
    return (
        <ul className="flex flex-wrap gap-4">
            <li className="items-center flex gap-1.5">
                <img src={servingIcon} alt='Serving Icon' className="w-5 h-5" />
                <p>Servings : {servings}</p>
            </li>
            <li className="items-center flex gap-1.5">
                <img src={prepTimeIcon} alt='Prep Icon' className="w-5 h-5" />
                <p>Prep : {prepMinutes}</p>
            </li>   
            <li className="items-center flex gap-1.5">
                <img src={cookTimeIcon} alt='Cook Icon' className="w-5 h-5" />
                <p>Cook : {cookMinutes} mins</p>
            </li>
        </ul>
    )
}