export type TSocialsData = {
    image: string;
    width: number;
    alt: string;
    title: string;
    link: string;
};

const SocialsArray: TSocialsData[] = [
    {
        image: "/images/vendors/github-logo.svg",
        width: 40,
        alt: "@jvmersin",
        title: "@jvmersin",
        link: "https://github.com/jvmersin"
    },
    {
        image: "/images/vendors/linkedin-logo.svg",
        width: 40,
        alt: "James Ehrenberg",
        title: "jmehrenberg",
        link: "https://www.linkedin.com/in/jmehrenberg/"
    },
    {
        image: "/images/vendors/instagram-logo.svg",
        width: 40,
        alt: "@jvmersin",
        title: "@jvmersin",
        link: "https://www.instagram.com/jvmersin/"
    },
    {
        image: "/images/vendors/twitter-logo.svg",
        width: 40,
        alt: "@jvmersin",
        title: "@jvmersin",
        link: "https://twitter.com/jvmersin"
    },
];

export { SocialsArray };
