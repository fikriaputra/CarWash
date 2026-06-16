import {
  FaTint,
  FaCrown,
  FaGem,
} from "react-icons/fa";

export const pricingData = [
  {
    id: 1,
    icon: FaTint,
    title: "Our Washes",
    description:
      "Pilihan cuci reguler dengan kualitas terbaik untuk menjaga kendaraan tetap bersih setiap hari.",

    features: [
      "Free Vacuums",
      "Self-Grab Towels",
      "Usable At Any Branch",
    ],

    buttonText: "Lihat Pencucian",
  },

  {
    id: 2,
    icon: FaCrown,
    title: "Unlimited Club",
    highlight: true,

    description:
      "Cuci sepuasnya setiap bulan dengan keuntungan eksklusif dan harga lebih hemat.",

    features: [
      "Unlimited Wash",
      "Free Vacuums",
      "Self-Grab Towels",
      "All Branch Access",
    ],

    buttonText: "Bergabung dengan Klub",
  },

  {
    id: 3,
    icon: FaGem,
    title: "Unlimited Perks",

    description:
      "Nikmati berbagai fasilitas premium dan jalur express khusus member.",

    features: [
      "Express Lane",
      "Unlimited Wash",
      "Free Vacuums",
      "All Branch Access",
    ],

    buttonText: "Dapatkan Keuntungan",
  },
];