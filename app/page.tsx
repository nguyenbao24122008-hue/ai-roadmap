import Link from "next/link";

const concepts = [
  {
    name: "AI (Trí tuệ nhân tạo)",
    text: "Lĩnh vực rộng nhất: làm cho máy tính thực hiện những việc thường cần trí thông minh của con người, như hiểu ngôn ngữ, nhận diện hình ảnh hay ra quyết định.",
  },
  {
    name: "Machine Learning",
    text: "Một nhánh của AI. Thay vì viết sẵn từng quy tắc, ta cho máy học quy luật từ dữ liệu rồi dùng nó để dự đoán.",
  },
  {
    name: "Deep Learning",
    text: "Một nhánh của ML, dùng mạng nơ-ron nhiều tầng. Mạnh ở dữ liệu phức tạp như hình ảnh, âm thanh và văn bản.",
  },
  {
    name: "Generative AI / LLM",
    text: "AI tạo ra nội dung mới như văn bản, hình ảnh, mã nguồn. LLM (mô hình ngôn ngữ lớn) như Claude hay GPT là ví dụ tiêu biểu.",
  },
];

const roles = [
  {
    name: "Data Scientist",
    text: "Phân tích dữ liệu, tìm ra thông tin hữu ích và xây mô hình dự đoán để giúp doanh nghiệp ra quyết định.",
  },
  {
    name: "ML Engineer",
    text: "Huấn luyện, tối ưu và đưa mô hình vào hệ thống chạy thật. Mạnh về lập trình và hạ tầng.",
  },
  {
    name: "AI Engineer",
    text: "Xây ứng dụng dựa trên các mô hình có sẵn như LLM: chatbot, RAG, agent. Thiên về kỹ thuật phần mềm.",
  },
  {
    name: "Research Scientist",
    text: "Nghiên cứu phương pháp và kiến trúc mô hình mới, thường cần nền tảng học thuật sâu và công bố bài báo.",
  },
];

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Khám phá ngành AI
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          Hiểu AI là gì, các vai trò trong ngành, và con đường để trở thành AI
          Engineer.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/become"
            className="rounded-lg bg-indigo-600 px-5 py-2.5 font-medium text-white hover:bg-indigo-700"
          >
            Trở thành AI Engineer
          </Link>
          <Link
            href="/roadmap"
            className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 font-medium hover:bg-slate-100"
          >
            Xem lộ trình học
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold">AI là gì?</h2>
        <p className="mt-3 max-w-3xl text-slate-700">
          Trí tuệ nhân tạo (AI) là lĩnh vực làm cho máy tính có khả năng học
          hỏi, suy luận và đưa ra quyết định. Bạn đã dùng AI mỗi ngày mà có thể
          không để ý: gợi ý video, dịch tự động, nhận diện khuôn mặt để mở khóa
          điện thoại, hay các trợ lý chat.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold">Bốn khái niệm hay bị nhầm lẫn</h2>
        <p className="mt-3 max-w-3xl text-slate-700">
          Chúng lồng vào nhau: Deep Learning là một phần của Machine Learning,
          Machine Learning là một phần của AI. Generative AI hiện nay chủ yếu
          dựa trên Deep Learning.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {concepts.map((item) => (
            <div
              key={item.name}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h3 className="font-semibold text-indigo-600">{item.name}</h3>
              <p className="mt-2 text-sm text-slate-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold">Các vai trò trong ngành</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {roles.map((role) => (
            <div
              key={role.name}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h3 className="font-semibold">{role.name}</h3>
              <p className="mt-2 text-sm text-slate-700">{role.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}