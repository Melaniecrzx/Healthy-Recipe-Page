import { twMerge } from 'tailwind-merge';


export default function Button({children, className, ...props}) {
    return(
        <button className={twMerge(`rounded-[10px] cursor-pointer bg-neutral-900 text-white px-4 py-3`,className)}
        {...props}>
            {children}
        </button>
    );
}