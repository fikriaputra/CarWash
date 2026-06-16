import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const FooterContact = () => {
  return (
    <div>
      <h3
        className="
          text-slate-900

          text-sm
          font-semibold

          uppercase
          tracking-wider
        "
      >
        Contact
      </h3>

      <div
        className="
          mt-6
          space-y-5
        "
      >
        <div className="flex gap-3">
          <FaMapMarkerAlt
            className="
              text-lime-500
              mt-1
            "
          />

          <p
            className="
              text-slate-600
              text-sm
            "
          >
            Jl. Raya Serpong No. 88,
            Tangerang Selatan
          </p>
        </div>

        <div className="flex gap-3">
          <FaPhoneAlt
            className="
              text-lime-500
              mt-1
            "
          />

          <p
            className="
              text-slate-600
              text-sm
            "
          >
            +62 821 2845 2142
          </p>
        </div>

        <div className="flex gap-3">
          <FaEnvelope
            className="
              text-lime-500
              mt-1
            "
          />

          <p
            className="
              text-slate-600
              text-sm
            "
          >
            info@bundacarwash.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;