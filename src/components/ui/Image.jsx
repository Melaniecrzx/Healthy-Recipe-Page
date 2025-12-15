export default function Image({
    variants,
    alt,
    sizes,
    priority = false,
    className, ...props
}) {

    const srcset = variants.map((v) => `${v.src} ${v.width}w`).join(',');
    return (
        <img src={`${variants[0].src}`}
            srcSet={`${srcset}`}
            sizes={sizes ? sizes : "100vw"}
            className={className}
            alt={alt}
            loading={`${priority ? "eager" : "lazy"}`}
            {...props}
        />
    )
}