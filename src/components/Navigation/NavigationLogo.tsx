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
      }}
      placeholder="blur"
      blurDataURL="/images/logo/logo.svg"
      src="/images/logo/logo.svg"
      alt="Minimilast Planet"
    />
  );
}
