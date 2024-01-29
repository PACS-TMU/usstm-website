import Image from "next/image";
import { useState } from "react";

export default function ImageFallback({ fileName, imageName, alt, width, height, className }) {
    const [error, setError] = useState(false);

    return (
        <Image
            src={!error ? `/images/about/${fileName}/${imageName}` : '/images/usstm-people.png'}
            alt={alt}
            width={width}
            height={height}
            onError={() => setError(true)}
            placeholder="blur"
            blurDataURL="text/plain;loading"
            loading="lazy"
            className={className}
        />
    )
}