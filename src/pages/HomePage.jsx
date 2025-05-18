import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import Slider from "../components/Slider";

export default function HomePage() {

    const breadcrumbItems = [
        { label: "Trang chủ", path: "/" }
    ];

    return (
        <>
            <Slider />

            <div className="container mx-auto px-4 py-10 space-y-16">
                <Breadcrumb items={breadcrumbItems} />

                {/* Tiêu đề chính */}
                <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-700 mb-8 text-center">
                    Chào mừng đến với KoLearn - Hành Trình Học Tiếng Hàn Bắt Đầu Tại Đây!
                </h2>

                {/* Giới thiệu về Hàn Quốc */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-white rounded-xl shadow hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] transition p-4 sm:p-6">
                    <img
                        src="https://vnpay.vn/s1/statics.vnpay.vn/2024/4/0nr0uq8jszpo1712916357891.jpg"
                        alt="Korea Landscape"
                        className="w-full rounded-lg object-cover aspect-video"
                    />
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl sm:text-2xl font-semibold text-blue-600 mb-4">
                            Khám Phá Hàn Quốc
                        </h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            Hàn Quốc là một quốc gia sôi động với lịch sử phong phú, công nghệ hiện đại và cảnh quan tuyệt đẹp. Hãy đắm chìm trong văn hóa và ngôn ngữ độc đáo của đất nước này.
                        </p>
                    </div>
                </section>

                {/* Các tính năng học tập */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 sm:p-6 rounded-xl shadow hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] transition">
                        <h3 className="text-xl sm:text-1xl font-semibold text-blue-500 mb-2">
                            Học Bảng Chữ Cái Hangul
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Thành thạo hệ thống chữ viết tiếng Hàn qua các bài học đơn giản và tương tác.
                        </p>
                    </div>

                    <div className="bg-white p-4 sm:p-6 rounded-xl shadow hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] transition">
                        <h3 className="text-xl sm:text-1xl font-semibold text-blue-500 mb-2">
                            Mở Rộng Từ Vựng
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Tăng cường vốn từ tiếng Hàn với luyện tập hàng ngày và các cụm từ hữu ích.
                        </p>
                    </div>

                    <div className="bg-white p-4 sm:p-6 rounded-xl shadow hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] transition">
                        <h3 className="text-xl sm:text-1xl font-semibold text-blue-500 mb-2">
                            Hiểu Ngữ Pháp
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Nhận giải thích rõ ràng về các quy tắc ngữ pháp tiếng Hàn và cấu trúc câu.
                        </p>
                    </div>
                </section>

                {/* Văn hóa & Du lịch */}
                <section className="bg-white rounded-xl shadow hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] transition p-4 sm:p-6">
                    <h3 className="text-2xl sm:text-2xl font-semibold text-blue-600 mb-6 sm:mb-8 text-center">
                        Văn Hóa & Du Lịch Hàn Quốc
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex flex-col items-center text-center">
                            <img
                                src="https://media.vietravel.com/images/Content/du-lich-han-quoc-trai-nghiem-mac-hanbok-1.jpg"
                                alt=""
                                className="rounded-lg mb-4 aspect-video w-full object-cover"
                            />
                            <h4 className="font-semibold mb-2">
                                Hanbok
                            </h4>
                            <p className="text-gray-600 text-sm">
                                Trang phục truyền thống Hàn Quốc được mặc trong các dịp lễ hội và sự kiện đặc biệt.
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <img
                                src="https://transviet.com.vn/images/CNDL2019/Han%20Quoc/Am%20thuc%20Han%20Quoc/am-thuc-han-quoc-bia.jpg"
                                alt=""
                                className="rounded-lg mb-4 aspect-video w-full object-cover"
                            />
                            <h4 className="font-semibold mb-2">
                                Ẩm Thực Hàn Quốc
                            </h4>
                            <p className="text-gray-600 text-sm">
                                Trải nghiệm hương vị Hàn Quốc qua các món ăn như kimchi, bibimbap và nhiều hơn nữa.
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <img
                                src="https://duhoc.thanhgiang.com.vn/sites/default/files/seoul_0.jpg"
                                alt=""
                                className="rounded-lg mb-4 aspect-video w-full object-cover"
                            />
                            <h4 className="font-semibold mb-2">
                                Thành Phố Seoul
                            </h4>
                            <p className="text-gray-600 text-sm">
                                Khám phá thủ đô nhộn nhịp với kiến trúc hiện đại và các di tích lịch sử.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Học tiếng Hàn */}
                <section className="bg-white rounded-xl shadow hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] transition p-4 sm:p-6">
                    <h3 className="text-2xl sm:text-2xl font-semibold text-blue-600 mb-6 text-center">
                        Tại Sao Nên Học Tiếng Hàn?
                    </h3>
                    <p className="text-gray-700 text-center text-sm max-w-3xl mx-auto mb-6">
                        Học tiếng Hàn mở ra cánh cửa đến văn hóa, kinh doanh và du lịch. Đây là lý do vì sao bạn nên đầu tư thời gian.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-blue-50 rounded-lg p-4 text-center">
                            <h4 className="font-semibold mb-2">
                                Phổ Biến Toàn Cầu
                            </h4>
                            <p className="text-gray-700 text-sm">
                                Văn hóa pop Hàn Quốc được yêu thích trên toàn thế giới, khiến việc học tiếng Hàn vừa hữu ích vừa thú vị.
                            </p>
                        </div>

                        <div className="bg-blue-50 rounded-lg p-4 text-center">
                            <h4 className="font-semibold mb-2">
                                Cơ Hội Nghề Nghiệp
                            </h4>
                            <p className="text-gray-700 text-sm">
                                Kiến thức tiếng Hàn có thể giúp bạn nâng cao cơ hội việc làm trong nhiều ngành nghề khác nhau.
                            </p>
                        </div>

                        <div className="bg-blue-50 rounded-lg p-4 text-center">
                            <h4 className="font-semibold mb-2">
                                Hiểu Biết Văn Hóa
                            </h4>
                            <p className="text-gray-700 text-sm">
                                Đạt được cái nhìn sâu sắc hơn về truyền thống, lịch sử và cuộc sống hàng ngày của người Hàn.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        to="/lessons"
                        className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-medium text-lg px-8 py-3 rounded-full transition"
                    >
                        🚀 Bắt Đầu Học Ngay
                    </Link>
                </div>
            </div>
        </>
    );
}
