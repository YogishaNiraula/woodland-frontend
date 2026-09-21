type Props = {
  src: string;
  srcSmall?: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  imgClassName?: string;
  ratio?: string;
  priority?: boolean;
};

export function ResponsiveImage({
  src,
  srcSmall,
  alt,
  width,
  height,
  className = "",
  imgClassName = "",
  ratio,
  priority = false,
}: Props) {
  return (
    <div
      className={`overflow-hidden bg-cream-deep ${className}`}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      <img
        src={src}
        srcSet={srcSmall ? `${srcSmall} 720w, ${src} ${width}w` : undefined}
        sizes="(min-width: 768px) 50vw, 100vw"
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  );
}
