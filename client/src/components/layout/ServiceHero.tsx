import { Card } from "@/components/ui/card";

interface ServiceHeroProps {
  title: string;
  description: string;
  image: string;
}

export function ServiceHero({ title, description, image }: ServiceHeroProps) {
  return (
    <div className="container px-6 md:px-8 py-16 md:py-24">
      <div className="grid gap-12 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
          <p className="mt-6 text-lg text-muted-foreground">{description}</p>
        </div>
        <Card className="overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-64 object-cover"
          />
        </Card>
      </div>
    </div>
  );
}