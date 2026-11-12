const tasks = [
  "Chọn mô hình hoặc API phù hợp với bài toán (chất lượng, chi phí, tốc độ).",
  "Xây các tính năng như chatbot, RAG (hỏi đáp trên tài liệu riêng), agent gọi công cụ.",
  "Viết prompt và đo chất lượng đầu ra bằng bộ test (evals).",
  "Đưa vào sản phẩm: xây API, deploy, theo dõi lỗi và chi phí.",
  "Tối ưu độ trễ, chi phí và độ an toàn của hệ thống.",
];

const skills = [
  {
    name: "Lập trình",
    text: "Python và/hoặc TypeScript, Git, làm việc với API và JSON.",
  },
  {
    name: "Nền tảng ML",
    text: "Hiểu khái niệm ML và deep learning, cách đánh giá mô hình, overfitting.",
  },
  {
    name: "Làm việc với LLM",
    text: "Prompt engineering, RAG, embedding, agent, evals.",
  },
  {
    name: "Kỹ thuật phần mềm",
    text: "Database, thiết kế API, Docker, deploy lên cloud.",
  },
  {
    name: "Kỹ năng mềm",
    text: "Hiểu bài toán thực tế, giao tiếp, đọc tài liệu tiếng Anh.",
  },
];

const comparison = [
  {
    label: "Trọng tâm",
    ai: "Xây ứng dụng dựa trên mô hình có sẵn (LLM, API)",
    ml: "Huấn luyện, tối ưu và vận hành mô hình",
  },
  {
    label: "Công việc điển hình",
    ai: "Chatbot, RAG, agent, tích hợp API, đánh giá chất lượng",
    ml: "Pipeline dữ liệu, huấn luyện, tinh chỉnh, triển khai mô hình",
  },
  {
    label: "Nền tảng cần mạnh",
    ai: "Kỹ thuật phần mềm, thiết kế hệ thống, prompt, evals",
    ml: "Toán, thống kê, ML/Deep Learning, PyTorch",
  },
  {
    label: "Công cụ hay dùng",
    ai: "API của LLM, vector database, framework web",
    ml: "scikit-learn, PyTorch, công cụ theo dõi thí nghiệm, hạ tầng huấn luyện",
  },
  {
    label: "Đầu ra",
    ai: "Tính năng hoặc sản phẩm người dùng dùng được",
    ml: "Mô hình và hệ thống chạy ổn định",
  },
];

const paths = [
  {
    name: "Tự học",
    text: "Học qua khóa online, tài liệu mở và dự án cá nhân. Linh hoạt, chi phí thấp, nhưng cần kỷ luật và một portfolio rõ ràng để thay cho bằng cấp.",
  },
  {
    name: "Đại học",
    text: "Các ngành như CNTT, Khoa học dữ liệu, Toán tin cho nền tảng toán và lý thuyết vững, có môi trường và cơ hội thực tập. Chương trình thường chậm hơn thực tế nên cần tự làm thêm dự án.",
  },
  {
    name: "Chuyển ngành",
    text: "Từ lập trình viên, kỹ sư dữ liệu hay phân tích dữ liệu, bạn tận dụng được kinh nghiệm sẵn có. Lập trình viên web thường chuyển khá nhanh vì đã quen API, back-end và deploy.",
  },
];

export default function BecomePage() {
  return (
    <div className="space-y-14">
      <header>
        <h1 className="text-3xl font-bold sm:text-4xl">
          Trở thành AI Engineer
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-slate-600">
          AI Engineer biến các mô hình AI thành sản phẩm thật mà người dùng có
          thể sử dụng.
        </p>
      </header>

      <section>
        <h2 className="text-2xl font-bold">AI Engineer làm gì?</h2>
        <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-slate-700">
          {tasks.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold">Kỹ năng cần có</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h3 className="font-semibold text-indigo-600">{skill.name}</h3>
              <p className="mt-2 text-sm text-slate-700">{skill.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold">AI Engineer khác ML Engineer ở đâu?</h2>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="p-3 font-semibold">Tiêu chí</th>
                <th className="p-3 font-semibold">AI Engineer</th>
                <th className="p-3 font-semibold">ML Engineer</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.label} className="border-t border-slate-200">
                  <td className="p-3 font-medium">{row.label}</td>
                  <td className="p-3 text-slate-700">{row.ai}</td>
                  <td className="p-3 text-slate-700">{row.ml}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-slate-500">
          Ranh giới giữa hai vai trò khác nhau tùy công ty và hay chồng lấn
          nhau, hãy đọc kỹ mô tả công việc cụ thể.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold">Các con đường đi</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {paths.map((path) => (
            <div
              key={path.name}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h3 className="font-semibold">{path.name}</h3>
              <p className="mt-2 text-sm text-slate-700">{path.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}