import { Link } from "react-router-dom";

export default function Breadcrumb({ items }) {
    items = [
        { label: 'Trang chủ', path: '/' },
        { label: 'Danh sách bài học' }
    ]

    return (
        <nav className="text-sm text-gray-600 mb-2" aria-label="Breadcrumb">
            <ol className="list-reset flex">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;
                    return (
                        <li key={index} className="flex items-center">
                            {isLast ? (
                                <span className="text-gray-800 font-semibold">{item.label}</span>
                            ) : (
                                <Link to={item.path} className="text-blue-600 underline">
                                    {item.label}
                                </Link>
                            )}
                            {!isLast && <span className="mx-2">{'>'}</span>}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
