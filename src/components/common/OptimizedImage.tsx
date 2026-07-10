import type { ImgHTMLAttributes } from 'react';

type OptimizedImageProps = ImgHTMLAttributes<HTMLImageElement> & {
    webpSrc?: string;
    eager?: boolean;
};

function OptimizedImage({
    src,
    alt,
    webpSrc,
    eager = false,
    loading,
    decoding,
    fetchPriority,
    ...rest
}: OptimizedImageProps) {
    const resolvedLoading = loading ?? (eager ? 'eager' : 'lazy');
    const resolvedDecoding = decoding ?? 'async';
    const resolvedFetchPriority = fetchPriority ?? (eager ? 'high' : 'auto');

    if (webpSrc) {
        return (
            <picture className="contents">
                <source srcSet={webpSrc} type="image/webp" />
                <img
                    src={src}
                    alt={alt}
                    loading={resolvedLoading}
                    decoding={resolvedDecoding}
                    fetchPriority={resolvedFetchPriority}
                    {...rest}
                />
            </picture>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            loading={resolvedLoading}
            decoding={resolvedDecoding}
            fetchPriority={resolvedFetchPriority}
            {...rest}
        />
    );
}

export default OptimizedImage;
