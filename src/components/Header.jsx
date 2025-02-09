import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav>
                <ul style={{ display: "flex", gap: "40px" }}>
                    <li>
                        <Link to={"product/1"}>Keyboards</Link>
                    </li>
                    <li>
                        <Link to={"product/2"}>Laptops</Link>
                    </li>
                    <li>
                        <Link to={"product/3"}>Computer-screens</Link>
                    </li>
                </ul>
            </nav>
        </header>

    );
}


