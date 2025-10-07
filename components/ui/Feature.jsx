import {
  FaCrown,
  FaThumbsUp,
  FaGem,
  FaUserShield,
  FaProjectDiagram,
} from "react-icons/fa";

const features = [
  {
    icon: <FaCrown className="text-blue-600 text-[70px]" />,
    title: "40 anos de expertise",
    subtitle: "no segmento de vidros e alumínio",
  },
  {
    icon: <FaThumbsUp className="text-blue-600 text-[70px]" />,
    title: "+36 anos",
    subtitle: "de experiência",
  },
  {
    icon: <FaGem className="text-blue-600 text-[70px]" />,
    title: "Acabamento",
    subtitle: "Impecável",
  },
  {
    icon: <FaUserShield className="text-blue-600 text-[70px]" />,
    title: "Conformidade total",
    subtitle: "com normas de segurança",
  },
  {
    icon: <FaProjectDiagram className="text-blue-600 text-[70px]" />,
    title: "Ecossistema",
    subtitle: "de Soluções",
  },
];

export default function Features() {
  return (
    <section className="w-full bg-white py-12 px-4">
      <div
        className="
          max-w-6xl mx-auto 
          grid gap-8 
          xs:grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-5
          text-center
        "
      >
        {features.map((feature, idx) => (
          <div key={idx} className="flex flex-col items-center gap-3">
            {feature.icon}
            <h3 className="text-base font-bold text-blue-700">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
