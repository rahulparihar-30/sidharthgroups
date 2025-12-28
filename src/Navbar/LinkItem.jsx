import { Link } from "react-router-dom";

const LinkItem = ({ title, subtitle, to = "#", hoverColor = "orange" }) => {
    const handleClick = (e) => {
        if (to.startsWith("/#") || to.startsWith("#")) {
            const id = to.split("#")[1];
            const element = document.getElementById(id);
            if (element) {
                e.preventDefault();
                element.scrollIntoView({ behavior: "smooth" });
                window.history.pushState(null, "", to);
            }
        }
    };

    const hoverMap = {
        blue: "group-hover/link:text-blue-600",
        orange: "group-hover/link:text-orange-500",
        cyan: "group-hover/link:text-cyan-500",
        purple: "group-hover/link:text-purple-500",
        indigo: "group-hover/link:text-indigo-600",
        teal: "group-hover/link:text-teal-500",
    };


    const hoverClass = hoverMap[hoverColor] || hoverMap.orange;

    return (
        <Link
            to={to}
            onClick={handleClick}
            className="group/link block transition-transform hover:-translate-y-0.5"
        >
            <div
                className={`text-gray-400 font-medium text-sm transition-colors flex items-center gap-2 ${hoverClass}`}
            >
                <span className="w-1 h-1 rounded-full bg-yellow-500 opacity-0 group-hover/link:opacity-100 transition-opacity"></span>
                {title}
            </div>

            {subtitle && (
                <div
                    className={`text-gray-600 text-xs mt-0.5 ml-3 transition-colors ${hoverClass}`}
                >
                    {subtitle}
                </div>
            )}
        </Link>
    );
};

export default LinkItem;
