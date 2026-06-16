const ServicesHeader = () => {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <div
        className="
          inline-flex
          items-center
          gap-2
          px-5
          py-2
          rounded-full
          bg-lime-100
          text-lime-600
          font-semibold
        "
      >
        ✨ OUR SERVICES
      </div>

      <h2
        className="
          mt-6
          text-4xl
          md:text-6xl
          font-black
          text-slate-900
          leading-tight
        "
      >
        Layanan Terbaik Untuk
        <span className="block text-lime-500">
          Kendaraan Anda
        </span>
      </h2>

      <p
        className="
          mt-6
          text-slate-500
          text-lg
          leading-relaxed
        "
      >
        Kami memberikan perawatan terbaik
        untuk menjaga kendaraan tetap bersih
        dan kinclong setiap saat.
      </p>
    </div>
  );
};

export default ServicesHeader;