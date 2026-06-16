const NavLink = ({
  href,
  label,
  active = false,
}) => {
  return (
    <a
      href={href}
      className={`
        relative
        text-sm
        font-medium
        transition-all
        duration-300
        hover:text-lime-400

        ${
          active
            ? "text-white"
            : "text-gray-300"
        }
      `}
    >
      {label}

      {active && (
        <span
          className="
            absolute
            left-0
            -bottom-2
            h-[2px]
            w-full
            bg-lime-400
          "
        />
      )}
    </a>
  );
};

export default NavLink;