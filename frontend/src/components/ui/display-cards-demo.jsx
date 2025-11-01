import React from "react";
import DisplayCards from "./display-cards";
import { Mic, Shield, Layers } from "lucide-react";

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
      "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Layers className="size-4 text-white" />,
    title: "3-Level Interface",
    description: "Choose your comfort: Simple, Standard, or Advanced banking UI.",
    date: "Your choice",
    iconClassName: "text-green-600",
    titleClassName: "text-gray-900",
    className: "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
  },
];