import Image from "next/image";
import { useState } from "react";

export default function ImageFallback({ fileName, imageName, fallback, alt, width, height, className }) {
    const [error, setError] = useState(false);

    return (
        <Image
            src={!error ? `/images/about/${fileName}/${imageName}` : fallback}
            alt={alt}
            width={width}
            height={height}
            onError={() => {
                    setError(true);
                }
            }
            priority={true}
            className={className}
        />
    )
}