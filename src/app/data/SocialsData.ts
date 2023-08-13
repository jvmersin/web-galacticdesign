export type TSocialsData = {
    image: string;
    width: number;
    alt: string;
    title: string;
    link: string;
};

const SocialsArray: TSocialsData[] = [
    {
        image: "https://cdn.galacticdesign.io/images/vendors/github-logo.svg",
        width: 60,
        alt: "@jvmersin",
        title: "@jvmersin",
        link: "https://github.com/jvmersin"
    },
    {
        image: "https://cdn.galacticdesign.io/images/vendors/linkedin-logo.svg",
        width: 60,
        alt: "James Ehrenberg",
        title: "James Ehrenberg",
        link: "https://www.linkedin.com/in/jmehrenberg/"
    },
    {
        image: "https://cdn.galacticdesign.io/images/vendors/instagram-logo.svg",
        width: 60,
        alt: "@jvmersin",
        title: "@jvmersin",
        link: "https://www.instagram.com/jvmersin/"
    },
    {
        image: "https://cdn.galacticdesign.io/images/vendors/twitter-logo.svg",
        width: 60,
        alt: "@jvmersin",
        title: "@jvmersin",
        link: "https://twitter.com/jvmersin"
    },
];

export { SocialsArray };
