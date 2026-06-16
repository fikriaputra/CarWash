import { navigationLinks } from "../../constants/navigation";

const MobileMenu = ({ isOpen }) => {
  return (
    <div
      className={`
        md:hidden
        overflow-hidden
        transition-all
        duration-300

        ${
          isOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }
      `}
    >
      <div
        className="
          mt-2
          rounded-2xl
          bg-[#041A28]/90
          backdrop-blur-md
          p-6
          flex
          flex-col
          gap-6
        "
      >
        {navigationLinks.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className="
              text-white
              font-medium
              hover:text-lime-400
              transition
            "
          >
            {item.label}
          </a>
        ))}

        <button
          className="
            bg-lime-400
            text-black
            py-2.5
            rounded-xl
            font-semibold
          "
        >
          Join Today
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;