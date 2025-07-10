"use client";
import { roboto, poppins } from "@/libs/configs/config.styles";

const Fontsprovider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <style jsx global>{`
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: ${roboto.style.fontFamily};
        }
        p,
        div,
        span,
        lalel {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
    </>
  );
};

export default Fontsprovider;
