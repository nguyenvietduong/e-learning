export default function Footer() {

    return (
        <footer className="bg-gray-50 text-gray-700 py-8 border-t mt-10">
            <div className="container mx-auto px-4 text-center space-y-3 sm:space-y-4">
                <p
                    className="font-semibold text-base sm:text-lg md:text-xl text-pink-600"
                    id="chuong-trinh"
                >
                    📚 Chương Trình Học Tiếng Hàn
                </p>

                <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
                    Trang web giúp bạn ôn tập dựa trên các sách tiếng Hàn phổ biến tại Việt Nam. Bao gồm từ vựng, ngữ pháp, bài tập thực hành và ví dụ chi tiết cho mỗi bài học.
                </p>

                <p className="text-xs sm:text-sm text-gray-400 mt-6" id="lien-he">
                    © 2025 Học Tiếng Hàn Online — Liên hệ: duongnv10504@gmail.com
                </p>
            </div>
        </footer>
    );
}
