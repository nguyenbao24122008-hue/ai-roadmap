export type Topic = { id: number; title: string; description: string };
export type Phase = { id: number; title: string; summary: string; topics: Topic[] };

export const roadmap: Phase[] = [
  {
    id: 1,
    title: "Nền tảng: Python và toán",
    summary: "Công cụ và kiến thức nền để làm việc với dữ liệu và mô hình.",
    topics: [
      { id: 101, title: "Python cơ bản", description: "Biến, hàm, vòng lặp, lớp, xử lý file và lỗi." },
      { id: 102, title: "NumPy, Pandas, Matplotlib", description: "Xử lý bảng số liệu, tính toán mảng và vẽ biểu đồ." },
      { id: 103, title: "Toán cho AI", description: "Đại số tuyến tính, xác suất thống kê, đạo hàm cơ bản." },
      { id: 104, title: "Git và dòng lệnh", description: "Quản lý mã nguồn và làm việc nhóm với GitHub." },
    ],
  },
  {
    id: 2,
    title: "Machine Learning cơ bản",
    summary: "Hiểu cách máy học từ dữ liệu bằng các thuật toán cổ điển.",
    topics: [
      { id: 201, title: "Hồi quy và phân loại", description: "Linear/Logistic Regression, cây quyết định, random forest." },
      { id: 202, title: "Đánh giá mô hình", description: "Train/test split, overfitting, accuracy, precision, recall." },
      { id: 203, title: "scikit-learn", description: "Thư viện chuẩn để huấn luyện và so sánh mô hình ML." },
      { id: 204, title: "Xử lý đặc trưng", description: "Làm sạch dữ liệu, mã hóa biến, chuẩn hóa, tạo đặc trưng mới." },
    ],
  },
  {
    id: 3,
    title: "Deep Learning",
    summary: "Mạng nơ-ron và các kiến trúc đứng sau AI hiện đại.",
    topics: [
      { id: 301, title: "Mạng nơ-ron cơ bản", description: "Perceptron, lan truyền ngược, hàm kích hoạt, tối ưu hóa." },
      { id: 302, title: "PyTorch", description: "Viết và huấn luyện mô hình deep learning bằng PyTorch." },
      { id: 303, title: "CNN cho ảnh", description: "Nhận diện và phân loại ảnh bằng mạng tích chập." },
      { id: 304, title: "Transformer", description: "Kiến trúc nền tảng của các mô hình ngôn ngữ lớn hiện nay." },
    ],
  },
  {
    id: 4,
    title: "LLM và ứng dụng AI",
    summary: "Xây sản phẩm dựa trên các mô hình ngôn ngữ lớn.",
    topics: [
      { id: 401, title: "Prompt engineering", description: "Viết prompt rõ ràng, dùng ví dụ, ép định dạng đầu ra." },
      { id: 402, title: "Gọi API của LLM", description: "Dùng API như Claude hoặc OpenAI trong ứng dụng của bạn." },
      { id: 403, title: "RAG", description: "Embedding, vector database, cho mô hình trả lời dựa trên tài liệu riêng." },
      { id: 404, title: "Agent và tool use", description: "Cho mô hình gọi công cụ và thực hiện chuỗi hành động." },
      { id: 405, title: "Đánh giá chất lượng (evals)", description: "Đo hệ thống AI đúng hay sai bằng bộ test." },
    ],
  },
  {
    id: 5,
    title: "Đưa vào sản phẩm (MLOps)",
    summary: "Biến mô hình thành dịch vụ chạy ổn định cho người dùng thật.",
    topics: [
      { id: 501, title: "Xây API cho mô hình", description: "Bọc mô hình thành dịch vụ bằng FastAPI hoặc Next.js." },
      { id: 502, title: "Docker", description: "Đóng gói ứng dụng để chạy giống nhau ở mọi nơi." },
      { id: 503, title: "Deploy lên cloud", description: "Đưa sản phẩm lên Vercel, Render hoặc dịch vụ cloud." },
      { id: 504, title: "Giám sát", description: "Theo dõi lỗi, chi phí và chất lượng khi chạy thật." },
    ],
  },
  {
    id: 6,
    title: "Portfolio và đi làm",
    summary: "Chứng minh năng lực bằng sản phẩm thật.",
    topics: [
      { id: 601, title: "Dự án portfolio", description: "Làm 3–5 dự án hoàn chỉnh, có người dùng thật càng tốt." },
      { id: 602, title: "README và demo", description: "Mô tả rõ vấn đề, cách chạy và quay video demo ngắn." },
      { id: 603, title: "Kaggle và hackathon", description: "Thi đấu để rèn tốc độ và học từ người khác." },
      { id: 604, title: "CV và phỏng vấn", description: "Chuẩn bị hồ sơ và ôn câu hỏi về ML, code, hệ thống." },
    ],
  },
];