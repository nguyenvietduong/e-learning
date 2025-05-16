import { useState } from "react";

const tabs = [
    { key: "ancient", label: "Thời kỳ cổ đại" },
    { key: "threeKingdoms", label: "Ba Vương quốc" },
    { key: "goryeo", label: "Triều đại Goryeo" },
    { key: "joseon", label: "Triều đại Joseon" },
    { key: "modern", label: "Hàn Quốc hiện đại" },
];

const content = {
    ancient: (
        <ul className="list-disc list-inside space-y-2">
            <li><strong>Thế kỷ 1 trước Công Nguyên:</strong> Các bộ tộc đầu tiên xuất hiện trên bán đảo Triều Tiên.</li>
            <li>Vương quốc Gojoseon được xem là vương quốc đầu tiên với nền tảng văn hóa và chính trị quan trọng.</li>
        </ul>
    ),
    threeKingdoms: (
        <ul className="list-disc list-inside space-y-2">
            <li><strong>Thế kỷ 1 đến thế kỷ 7:</strong> Ba vương quốc Goguryeo, Baekje và Silla tồn tại và cạnh tranh.</li>
            <li>Silla thống nhất bán đảo năm 668, đánh dấu bước ngoặt lớn.</li>
        </ul>
    ),
    goryeo: (
        <ul className="list-disc list-inside space-y-2">
            <li>Triều đại Goryeo (918-1392) phát triển hệ thống chính quyền tập trung.</li>
            <li><strong>In ấn kinh Phật đầu tiên trên thế giới</strong> được thực hiện trong giai đoạn này.</li>
        </ul>
    ),
    joseon: (
        <ul className="list-disc list-inside space-y-2">
            <li>Triều đại Joseon (1392-1897) phát triển văn hóa, khoa học và đạo đức Nho giáo.</li>
            <li><strong>Bảng chữ cái Hangul</strong> được sáng tạo bởi Vua Sejong Đại Đế.</li>
            <li>Xây dựng nhiều công trình kiến trúc như <strong>Cung điện Gyeongbokgung</strong>.</li>
        </ul>
    ),
    modern: (
        <ul className="list-disc list-inside space-y-2">
            <li>Thế kỷ 20 với nhiều biến động: Nhật Bản chiếm đóng (1910-1945), chiến tranh Triều Tiên (1950-1953).</li>
            <li>Phát triển kinh tế thần kỳ sau chiến tranh.</li>
            <li>Hàn Quốc hiện đại là nền kinh tế hàng đầu thế giới với văn hóa <strong>Hallyu</strong> lan rộng toàn cầu.</li>
        </ul>
    ),
};

export default function KoreanHistory() {
    const [activeTab, setActiveTab] = useState("ancient");

    return (
        <div className="max-w mx-auto p-24 pt-10 pb-10 h-[520px] bg-white rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.3)] transition">
            <div className="flex justify-center gap-4 mb-6 flex-wrap">
                {tabs.map(({ key, label }) => (
                    <button
                        key={key}
                        className={`px-4 py-2 rounded-full font-medium ${activeTab === key
                            ? "bg-blue-600 text-white shadow-lg"
                            : "bg-gray-200 text-gray-700 hover:bg-blue-100"
                            } transition`}
                        onClick={() => setActiveTab(key)}
                    >
                        {label}
                    </button>
                ))}
            </div>

            <div className="prose max-w-none text-gray-800">{content[activeTab]}</div>
        </div>
    );
}