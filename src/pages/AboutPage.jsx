import Breadcrumb from "../components/Breadcrumb";

export default function AboutPage() {
    const methodList = [
        "Thực hành qua ví dụ thực tế: Các bài học đi kèm minh họa cụ thể giúp bạn dễ dàng áp dụng ngay.",
        "Học từ vựng và ngữ pháp theo chủ đề: Hệ thống bài học khoa học, từng bước xây dựng nền tảng vững chắc.",
        "Tương tác và phản hồi nhanh: Chúng tôi luôn lắng nghe và hỗ trợ bạn qua các kênh liên hệ."
    ];

    const breadcrumbItems = [
        { label: "Trang chủ", path: "/" },
        { label: "Giới Thiệu", path: "/about" },
    ];

    return (
        <div className="container mx-auto px-4 py-10">
            <Breadcrumb items={breadcrumbItems} />

            <h1 className="text-3xl font-extrabold text-blue-700 mb-10 text-center">
                Về KoLearn
            </h1>

            {/* Intro */}
            <section className="bg-white shadow rounded-xl p-6 mb-8 shadow hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] transition">
                <p className="leading-relaxed text-gray-800">
                    KoLearn ra đời với sứ mệnh đồng hành cùng bạn trên hành trình chinh phục tiếng Hàn một cách dễ dàng và hiệu quả nhất. Chúng tôi tin rằng việc học ngoại ngữ không chỉ là tiếp thu kiến thức mà còn là trải nghiệm thú vị, giúp mở rộng cánh cửa văn hóa và cơ hội mới.
                </p>
            </section>

            {/* Vision */}
            <SectionWithImage img={"https://kjvc.com.vn/uploads/plugin/news/2018/07/1611805120-8126.jpg"} title={"Tầm nhìn của chúng tôi"} content={"Trở thành nền tảng học tiếng Hàn hàng đầu Việt Nam, cung cấp tài liệu chất lượng, phương pháp học hiện đại, và môi trường học thân thiện, giúp mọi người từ người mới bắt đầu đến nâng cao đều có thể tự tin giao tiếp và phát triển kỹ năng."} />

            {/* Method */}
            <SectionWithImage img={"https://media.istockphoto.com/id/1137568153/vi/anh/hoa-anh-%C4%91%C3%A0o-v%C3%A0o-m%C3%B9a-xu%C3%A2n-seoul-%E1%BB%9F-h%C3%A0n-qu%E1%BB%91c.jpg?s=612x612&w=0&k=20&c=kLNxKZOjO56UO1XII7kMfMo_St9wAEq88bOv_UwEfWs="} title={"Phương pháp học tại KoLearn"}>
                <ul className="space-y-2">
                    {Array.isArray(methodList) && methodList.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1">✔️</span>
                            <span className="text-gray-700">{item}</span>
                        </li>
                    ))}
                </ul>
            </SectionWithImage>

            {/* Team */}
            <SectionWithImage img={"https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/shutterstock1020921643huge-1661704936584.jpg"} title={"Đội ngũ phát triển"} content={"KoLearn được xây dựng bởi những người đam mê tiếng Hàn và giáo dục, luôn không ngừng cải tiến để mang đến trải nghiệm học tập tốt nhất."} />

            {/* Contact */}
            <SectionWithImage img={"https://blog.masterkorean.vn/storage/photos/blog/images/thanh-pho-seoul-han-quoc-1_1721187618.jpg"} title={"Liên hệ với chúng tôi"}>
                <p className="text-gray-700 leading-relaxed">Nếu bạn có câu hỏi hay góp ý, đừng ngần ngại liên hệ qua số điện thoại 0385906406 hoặc gửi mail về địa chỉ duongnv10504@gmail.com để chúng tôi có thể hỗ trợ bạn nhanh nhất.</p>
            </SectionWithImage>
        </div>
    );
}

function SectionWithImage({ img, title, content, children }) {
    return (
        <section className="bg-white shadow rounded-xl p-6 mb-8 grid md:grid-cols-2 gap-6 items-center shadow hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] transition">
            <img
                src={img}
                alt={title}
                className="rounded-xl shadow-md w-full h-auto max-h-64 object-cover"
            />
            <div>
                <h2 className="text-xl font-semibold text-blue-600 mb-3">{title}</h2>
                {content && <p className="text-gray-700 leading-relaxed">{content}</p>}
                {children}
            </div>
        </section>
    );
}