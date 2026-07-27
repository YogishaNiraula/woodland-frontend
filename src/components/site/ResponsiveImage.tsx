type Props = {
  src: string;
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
  alt,
  width,
  height,
  className = "",
  imgClassName = "",
  ratio,
  priority = false,
}: Props) {
  return (
    <div className={`overflow-hidden bg-cream-deep ${className}`} style={ratio ? { aspectRatio: ratio } : undefined}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  );
}