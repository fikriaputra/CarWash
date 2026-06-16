const NavLink = ({
  href,
  label,
  active,
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

      <span
        className={`
          absolute
          left-0
          -bottom-2

          h-[2px]

          bg-lime-400

          transition-all
          duration-300

          ${
            active
              ? "w-full"
              : "w-0"
          }
        `}
      />
    </a>
  );
};

export default NavLink;