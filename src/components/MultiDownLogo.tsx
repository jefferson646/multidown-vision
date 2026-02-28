const MultiDownLogo = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  const sizes = { sm: "text-xl", md: "text-3xl", lg: "text-4xl" };
  const subtitleSizes = { sm: "text-xs", md: "text-sm", lg: "text-base" };

  return (
    <div className="flex flex-col items-center gap-1">
      <h1 className={`${sizes[size]} font-display font-bold brand-gradient-text`}>
        🎬 MultiDown
      </h1>
      <p className={`${subtitleSizes[size]} text-muted-foreground`}>
        Plataforma de Automação
      </p>
    </div>
  );
};

export default MultiDownLogo;
