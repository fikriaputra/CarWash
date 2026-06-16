import FooterBrand from "../footer/FooterBrand";
import FooterLinks from "../footer/FooterLinks";
import FooterLocations from "../footer/FooterLocations";
import FooterContact from "../footer/FooterContact";

import {
  menuLinks,
} from "../footer/footerData";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="
        relative
        overflow-hidden

        bg-[#F8FAFC]
      "
    >
      {/* Accent Line */}
      <div
        className="
          h-1
          w-full

          bg-slate-200
        "
      />

      {/* Glow kiri */}
      <div
        className="
          absolute
          left-[-200px]
          bottom-[-150px]

          w-[450px]
          h-[450px]

          rounded-full

          bg-lime-400/5

          blur-[150px]
        "
      />

      {/* Glow kanan */}
      <div
        className="
          absolute
          right-[-200px]
          top-[-150px]

          w-[450px]
          h-[450px]

          rounded-full

          bg-lime-400/5

          blur-[150px]
        "
      />

      <div
        className="
          relative
          z-10

          max-w-7xl
          mx-auto

          px-6
          lg:px-8

          py-16
        "
      >
        <div
          className="
            grid
            gap-14

            md:grid-cols-2

            xl:grid-cols-[1.7fr_1fr_1fr_1fr]
          "
        >
          <FooterBrand />

          <FooterLinks
            title="Pages"
            links={menuLinks}
          />

          <FooterLocations />

          <FooterContact />
        </div>

        <div
          className="
            mt-14
            pt-8

            border-t
            border-slate-200

            text-center
          "
        >
          <p
            className="
              text-slate-500
              text-sm
            "
          >
            © 2026 Bunda Car Wash.
            All Rights Reserved. Created by fikriaputra
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;