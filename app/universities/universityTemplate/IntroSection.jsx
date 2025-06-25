import { TiTick } from "react-icons/ti";

export default function IntroSection({ data }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6 ">
      <h2 className="text-3xl font-bold text-blue-700 mb-4 text-center">
        {data.title}
      </h2>
      <ul className="space-y-3">
        {data.points.map((point, idx) => (
          <li key={idx} className="flex items-start gap-2 text-lg">
            <div>
              <TiTick className="text-green-500 mt-1 text-2xl" />
            </div>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
