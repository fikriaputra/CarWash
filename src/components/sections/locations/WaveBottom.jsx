const WaveBottom = () => {
  return (
    <div
      className="
        absolute
        bottom-0
        left-0
        w-full
      "
    >
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="w-full h-[180px]"
      >
        <path
          fill="#F5F8FA"
          d="
            M0,160
            C260,280
            500,320
            760,240

            C980,170
            1180,160
            1440,210

            L1440,320
            L0,320
            Z
          "
        />
      </svg>
    </div>
  );
};

export default WaveBottom;