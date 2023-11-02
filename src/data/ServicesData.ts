export type TServicesData = {
  image: string;
  width: number;
  alt: string;
  title: string;
};

const ServicesArray: TServicesData[] = [
  {
    image: "/images/icons/coding.svg",
    width: 60,
    alt: "App Development",
    title: "App Development",
  },
  {
    image: "/images/icons/consulting.svg",
    width: 60,
    alt: "Consulting",
    title: "Consulting",
  },
  {
    image: "/images/icons/graphics-design.svg",
    width: 60,
    alt: "Graphics Design",
    title: "Graphics Design",
  },
  {
    image: "/images/icons/web-design.svg",
    width: 60,
    alt: "UI/UX Design",
    title: "UI/UX Design",
  },
  {
    image: "/images/icons/it-services.svg",
    width: 60,
    alt: "IT Services",
    title: "IT Services",
  },
];

export { ServicesArray };
