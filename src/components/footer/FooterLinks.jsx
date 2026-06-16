const FooterLinks = ({
  title,
  links,
}) => {
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
        {title}
      </h3>

      <ul
        className="
          mt-6
          space-y-4
        "
      >
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="
                text-slate-600

                hover:text-lime-500
                hover:translate-x-1

                inline-block

                transition-all
                duration-300
              "
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;