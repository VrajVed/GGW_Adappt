import React from "react";
import { cn } from "@/lib/utils";
import { Sparkles, Mic, Shield, Layers } from "lucide-react";

function DisplayCard({
  className,
  icon = <Sparkles className="size-4 text-blue-300" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  iconClassName = "text-blue-500",
  titleClassName = "text-blue-500",
}) {
  return (
    <div
      className={cn(
  "relative flex h-44 w-full max-w-[28rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 bg-muted/70 backdrop-blur-sm px-6 py-4 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[28rem] after:bg-gradient-to-l after:from-background after:to-transparent after:content-[''] hover:border-white/20 hover:bg-muted [&>*]:flex [&>*]:items-center [&>*]:gap-2",
        className
      )}
    >
      <div>
        <span className="relative inline-block rounded-full bg-blue-800 p-1">
          {icon}
        </span>
        <p className={cn("text-lg font-medium", titleClassName)}>{title}</p>
      </div>
  <p className="text-base md:text-lg truncate max-w-[20rem]">{description}</p>
      <p className="text-muted-foreground">{date}</p>
    </div>
  );
}

export default function DisplayCards({ cards }) {
  const defaultCards = [
    {
      icon: <Mic className="size-4 text-white" />,
      title: "Voice Banking",
      description: "Bank in Hindi, English, or your local language. Just speak naturally.",
      date: "Available now",
      iconClassName: "text-blue-600",
      titleClassName: "text-gray-900",
      className:
        "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Shield className="size-4 text-white" />,
      title: "ScamShield",
      description: "Real-time fraud detection with educational alerts to keep you safe.",
      date: "Protected 24/7",
      iconClassName: "text-red-600",
      titleClassName: "text-gray-900",
      className:
        "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Layers className="size-4 text-white" />,
      title: "3-Level Interface",
      description: "Choose your comfort: Simple, Standard, or Advanced banking UI.",
      date: "Your choice",
      iconClassName: "text-green-600",
      titleClassName: "text-gray-900",
      className: "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
    },
  ];

  const displayCards = cards || defaultCards;

  return (
  <div className="relative overflow-hidden pb-8 md:pb-12">
      {/* Heading above the cards */}
      <div className="max-w-7xl mx-auto text-center mb-8 px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-2">
          Banking Made <span className="gradient-primary bg-clip-text text-transparent">Simple &amp; Safe</span>
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Every feature designed with accessibility, trust, and simplicity at its core.
        </p>
      </div>
      <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700 px-4 mt-12 md:mt-24">
        {displayCards.map((cardProps, index) => (
          <DisplayCard key={index} {...cardProps} />
        ))}
      </div>
      {/* Spacer reserves room for translated/stacked cards so they don't overflow adjacent content */}
      <div aria-hidden className="h-40 md:h-64" />
    </div>
  );
}
