import Image from "next/image";

export default function NavigationLogo() {
  return (
    <Image
        priority
        width={80}
      height={80}
      style={{
        width: "100%",
        height: "auto",
        maxWidth: "100px",
        margin: "0 30px",
      }}
        placeholder="blur"
        blurDataURL="https://cdn.galacticdesign.io/images/logo/logo.svg"
      src="https://cdn.galacticdesign.io/images/logo/logo.svg"
      alt="Minimilast Planet"
    />
  );
}
