export type Book = {
  id: string;
  title: string;
  author: string;
  category: string;
  cover: string; // gradient class
  accent: string;
  rating: number;
  available: number;
  pages: number;
  year: number;
  description: string;
  excerpt: string;
};

export const categories = [
  "Tất cả",
  "Văn học",
  "Tiểu thuyết",
  "Lịch sử",
  "Khoa học",
  "Thiếu nhi",
  "Kỹ năng",
];

export const books: Book[] = [
  {
    id: "1",
    title: "Đắc Nhân Tâm",
    author: "Dale Carnegie",
    category: "Kỹ năng",
    cover: "from-amber-700 to-amber-900",
    accent: "oklch(0.55 0.16 50)",
    rating: 4.8,
    available: 5,
    pages: 320,
    year: 1936,
    description:
      "Cuốn sách kinh điển về nghệ thuật ứng xử, giao tiếp và xây dựng mối quan hệ.",
    excerpt:
      "Bất kỳ ai cũng có thể chỉ trích, oán trách và than phiền — và phần lớn những kẻ ngu xuẩn đều làm thế. Nhưng phải là người biết tự chủ và có một tâm hồn cao thượng mới có thể hiểu và biết tha thứ...",
  },
  {
    id: "2",
    title: "Số Đỏ",
    author: "Vũ Trọng Phụng",
    category: "Văn học",
    cover: "from-rose-700 to-rose-900",
    accent: "oklch(0.5 0.18 25)",
    rating: 4.7,
    available: 3,
    pages: 268,
    year: 1936,
    description:
      "Tiểu thuyết trào phúng về xã hội Việt Nam thời thực dân nửa phong kiến.",
    excerpt:
      "Xuân tóc đỏ — một kẻ vô học bỗng chốc trở thành người nổi tiếng nhờ những trò may rủi của thời cuộc. Câu chuyện phơi bày sự lố lăng của xã hội thượng lưu...",
  },
  {
    id: "3",
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "Lịch sử",
    cover: "from-stone-700 to-stone-900",
    accent: "oklch(0.4 0.04 60)",
    rating: 4.9,
    available: 2,
    pages: 512,
    year: 2011,
    description:
      "Lược sử loài người — hành trình từ thời kỳ đồ đá đến kỷ nguyên công nghệ.",
    excerpt:
      "100.000 năm trước, có ít nhất sáu loài người sinh sống trên Trái Đất. Hôm nay chỉ còn lại một. Chúng ta. Homo sapiens. Làm thế nào loài chúng ta thống trị hành tinh?",
  },
  {
    id: "4",
    title: "Nhà Giả Kim",
    author: "Paulo Coelho",
    category: "Tiểu thuyết",
    cover: "from-yellow-600 to-orange-800",
    accent: "oklch(0.62 0.18 60)",
    rating: 4.6,
    available: 7,
    pages: 224,
    year: 1988,
    description:
      "Câu chuyện về Santiago — chàng chăn cừu đi tìm kho báu và khám phá bản thân.",
    excerpt:
      "Khi bạn thực sự khao khát một điều gì đó, cả vũ trụ sẽ hợp lực giúp bạn đạt được điều đó. Đây là chân lý lớn nhất trên Trái Đất...",
  },
  {
    id: "5",
    title: "Vũ Trụ Trong Vỏ Hạt Dẻ",
    author: "Stephen Hawking",
    category: "Khoa học",
    cover: "from-indigo-800 to-slate-900",
    accent: "oklch(0.35 0.1 270)",
    rating: 4.7,
    available: 4,
    pages: 224,
    year: 2001,
    description:
      "Hành trình khám phá vũ trụ qua lăng kính vật lý lý thuyết hiện đại.",
    excerpt:
      "Ai đó đã từng nói rằng tôi đã đặt cả vũ trụ vào vỏ hạt dẻ. Có lẽ ý họ là khả năng tóm gọn những ý tưởng phức tạp về không-thời gian...",
  },
  {
    id: "6",
    title: "Dế Mèn Phiêu Lưu Ký",
    author: "Tô Hoài",
    category: "Thiếu nhi",
    cover: "from-emerald-700 to-emerald-900",
    accent: "oklch(0.45 0.12 160)",
    rating: 4.8,
    available: 6,
    pages: 180,
    year: 1941,
    description:
      "Cuộc phiêu lưu thú vị của chú Dế Mèn qua những vùng đất mới lạ.",
    excerpt:
      "Tôi sống độc lập từ thuở bé. Ấy là tục lệ lâu đời trong họ nhà dế chúng tôi. Vả lại, mẹ thường bảo chúng tôi rằng: phải như thế để các con biết kiếm ăn một mình...",
  },
  {
    id: "7",
    title: "Tuổi Trẻ Đáng Giá Bao Nhiêu",
    author: "Rosie Nguyễn",
    category: "Kỹ năng",
    cover: "from-pink-600 to-rose-800",
    accent: "oklch(0.55 0.2 15)",
    rating: 4.5,
    available: 8,
    pages: 290,
    year: 2016,
    description: "Cẩm nang truyền cảm hứng cho người trẻ trên hành trình tự khám phá.",
    excerpt:
      "Tuổi trẻ là khoảng thời gian đẹp nhất và cũng dễ tổn thương nhất. Hãy sống sao cho khi nhìn lại, bạn không phải hối tiếc vì những điều mình đã không làm...",
  },
  {
    id: "8",
    title: "1984",
    author: "George Orwell",
    category: "Tiểu thuyết",
    cover: "from-zinc-700 to-zinc-900",
    accent: "oklch(0.3 0.02 250)",
    rating: 4.8,
    available: 1,
    pages: 368,
    year: 1949,
    description: "Tác phẩm dystopia kinh điển về một xã hội bị giám sát toàn trị.",
    excerpt:
      "Đó là một ngày tháng Tư lạnh giá và trong sáng, đồng hồ điểm mười ba giờ. Winston Smith, cằm rụt vào ngực để tránh gió rét, lướt nhanh qua cánh cửa kính...",
  },
];

export const getBookById = (id: string) => books.find((b) => b.id === id);
