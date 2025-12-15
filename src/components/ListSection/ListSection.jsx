import bulletPoint from "../../../public/assets/images/icon-bullet-point.svg";


export default function ListSection({ title, items}) {
    return (
        <section className={`grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-x-16 lg:gap-y-10 px-4 md:px-8 lg:px-31 items-start`}>
            <h2 className="font2 col-span-1">{title}</h2>
            
            <ul className="flex flex-col gap-6 md:gap-8 lg:gap-10 col-span-2">
                {items.map((item) => (
                    <li key={item.id} className="flex gap-4 md:gap-5">
                        <img 
                            src={bulletPoint} 
                            alt="" 
                            aria-hidden="true"
                            className="w-8 h-8 mt-1" 
                        />
                        <div className="flex flex-col gap-2 md:gap-3">
                            <h4 className="font4">{item.title}</h4>
                            <p className="font6 text-neutral-600">{item.desc}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}