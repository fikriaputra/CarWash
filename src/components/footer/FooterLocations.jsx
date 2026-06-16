const locations = [
  "Sumedang",
  "Bandung",
];

const FooterLocations = () => {
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
        Lokasi Kami
      </h3>

      <ul
        className="
          mt-6
          space-y-4
        "
      >
        {locations.map((location) => (
          <li key={location}>
            <a
              href="#locations"
              className="
                text-slate-600

                hover:text-lime-500
                hover:translate-x-1

                inline-block

                transition-all
                duration-300
              "
            >
              {location}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLocations;