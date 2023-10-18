import dynamic from "next/dynamic";
const Hero = dynamic(() => import("@/Sections/Hero"), {
  ssr: false,
});
export default async function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
