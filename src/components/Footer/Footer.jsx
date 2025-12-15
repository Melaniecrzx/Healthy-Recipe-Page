import tikTokIcon from "../../../public/assets/images/icon-tiktok.svg";
import blueSkyIcon from "../../../public/assets/images/icon-bluesky.svg";
import instaIcon from "../../../public/assets/images/icon-instagram.svg";




export default function Footer() {
    const socialLinks = [
        {id: 1, src: instaIcon, alt: 'Instagram Icon', to:''},
        {id: 2, src: tikTokIcon, alt: 'Tiktok Icon', to:''},
        {id: 3, src: blueSkyIcon, alt: 'BlueSky Icon', to:''}
    ]

    return(
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 py-8 md:py-10 px-4 md:px-8 lg:px-32">
            <p>Made with ❤️ and 🥑</p>

            <ul className="flex gap-6 items-center">
                {socialLinks.map((socialLink) => (
                    <li key={socialLink.id} className="cursor-pointer">
                        <img src={socialLink.src} alt={`${socialLink.alt}`} className="w-[22px]" />
                    </li>
                ))}
            </ul>
            
        </div>
    )
}