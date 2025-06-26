import { TiTick } from "react-icons/ti";

export default function WhyStudy({ data }) {
  return (
    <div className="bg-white flex flex-col gap-7 p-4 md:p-6 lg:p-8">
      <h2 className="md:text-4xl text-2xl text-primary font-bold">
        {data.title}
      </h2>
      <ul className="space-y-4">
        {data.points.map((point, idx) => (
          <li key={idx} className="flex items-start gap-2 text-lg">
            <div>
              <TiTick className="text-green-500 mt-1 text-2xl" />
            </div>
            <span className="text-sm md:text-base text-secondary font-medium">
              {point}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
