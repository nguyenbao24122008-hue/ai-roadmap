import { roadmap } from "@/data/roadmap";

export default function RoadmapPage() {
  const totalTopics = roadmap.reduce(
    (sum, phase) => sum + phase.topics.length,
    0
  );

  return (
    <div>
      <h1 className="text-3xl font-bold sm:text-4xl">Lộ trình học AI Engineer</h1>
      <p className="mt-3 max-w-3xl text-slate-600">
        {roadmap.length} giai đoạn, {totalTopics} chủ đề. Học lần lượt từ trên
        xuống, nhưng bạn nên bắt đầu làm dự án nhỏ ngay từ giai đoạn đầu.
      </p>

      <div className="mt-8 space-y-6">
        {roadmap.map((phase) => (
          <section
            key={phase.id}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-600 font-bold text-white">
                {phase.id}
              </span>
              <div>
                <h2 className="text-xl font-bold">{phase.title}</h2>
                <p className="mt-1 text-slate-600">{phase.summary}</p>
              </div>
            </div>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {phase.topics.map((topic) => (
                <li key={topic.id} className="rounded-lg bg-slate-50 p-4">
                  <p className="font-medium">{topic.title}</p>
                  <p className="mt-1 text-sm text-slate-600">
                    {topic.description}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}