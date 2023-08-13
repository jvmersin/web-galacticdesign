export type TServicesData = {
  image: string;
  width: number;
  alt: string;
  title: string;
};

const ServicesArray: TServicesData[] = [
  {
    image: "https://cdn.galacticdesign.io/images/icons/coding.svg",
    width: 60,
    alt: "Web & Software Development",
    title: "Web & Software Development",
  },
  {
    image: "https://cdn.galacticdesign.io/images/icons/consulting.svg",
    width: 60,
    alt: "Web & Software Consulting",
    title: "Web & Software Consulting",
  },
  {
    image: "https://cdn.galacticdesign.io/images/icons/graphics-design.svg",
    width: 60,
    alt: "Graphics Design",
    title: "Graphics Design",
  },
  {
    image: "https://cdn.galacticdesign.io/images/icons/web-design.svg",
    width: 60,
    alt: "UI/UX Design",
    title: "UI/UX Design",
  },
  {
    image: "https://cdn.galacticdesign.io/images/icons/it-services.svg",
    width: 60,
    alt: "IT Services",
    title: "IT Services",
  },
];

export { ServicesArray };