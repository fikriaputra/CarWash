import exteriorImg from "../../../assets/services/Exterior.jpeg";
import interiorImg from "../../../assets/services/Interior.jpeg";
import detailingImg from "../../../assets/services/Detailing.jpeg";

import {
  FaCarSide,
  FaCouch,
  FaShieldAlt,
} from "react-icons/fa";

export const servicesData = [
  {
    id: 1,
    title: "Cuci Luar",
    description:
      "Bersih maksimal untuk eksterior mobil hingga kinclong seperti baru.",
    image: exteriorImg,
    icon: FaCarSide,
  },

  {
    id: 2,
    title: "Cuci Dalam",
    description:
      "Interior bersih dan higienis untuk kenyamanan berkendara yang maksimal.",
    image: interiorImg,
    icon: FaCouch,
  },

  {
    id: 3,
    title: "Detailing Premium",
    description:
      "Perlindungan cat dan perawatan menyeluruh untuk hasil maksimal dan tahan lama.",
    image: detailingImg,
    icon: FaShieldAlt,
  },
];