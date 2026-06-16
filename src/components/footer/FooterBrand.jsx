import {
  FaLinkedin,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

import logo from "../../assets/images/Logo_Bunda_Wash.png";

const socials = [
  {
    icon: FaInstagram,
    href: "https://instagram.com/fikriaputraa_",
    label: "Instagram",
  },

  {
    icon: FaTiktok,
    href: "https://www.tiktok.com/@fapstoryy",
    label: "TikTok",
  },

  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/fikriaputra/",
    label: "LinkedIn",
  },
];

const FooterBrand = () => {
  return (
    <div>
      {/* Logo */}
      <div className="flex items-center gap-4">
        <img
          src={logo}
          alt="Bunda Car Wash"
          className="
            h-24
            md:h-28
            object-contain
          "
        />

        <div>
          <h2
            className="
              text-2xl
              md:text-3xl
              font-bold
              text-slate-900
            "
          >
            Bunda Car Wash
          </h2>
        </div>
      </div>

      {/* Description */}
      <p
        className="
          mt-4

          max-w-[320px]

          text-slate-600
          leading-relaxed
        "
      >
        Memberikan perawatan terbaik
        untuk kendaraan Anda dengan
        pelayanan cepat, bersih, dan
        profesional.
      </p>

      {/* Social */}
      <div className="mt-8">
        <h4
          className="
            text-slate-900
            text-sm
            font-semibold
            uppercase
            tracking-wider
          "
        >
          Social Media
        </h4>

        <div
          className="
            flex
            items-center
            gap-3

            mt-4
          "
        >
          {socials.map(
            (
              {
                icon: Icon,
                href,
                label,
              },
              index
            ) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="
                  w-11
                  h-11

                  rounded-full

                  bg-white

                  border
                  border-slate-200

                  flex
                  items-center
                  justify-center

                  text-slate-600

                  hover:bg-lime-400
                  hover:text-black
                  hover:border-lime-400

                  hover:-translate-y-1

                  hover:shadow-[0_10px_25px_rgba(163,230,53,0.25)]

                  transition-all
                  duration-300
                "
              >
                <Icon />
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default FooterBrand;