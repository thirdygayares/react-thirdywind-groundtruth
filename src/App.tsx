import { Routes, Route, Link } from 'react-router-dom';
import CreditPage from "@pages/Credit/CreditPage";
import Homepage from "@pages/Home/Homepage";


export const  App = ()=> {
    return (
        <div className="container mx-auto px-4">
            <nav className="flex gap-4 py-4 border-b">
                <Link className="text-blue-500" to="/">Home</Link>
                <Link className="text-blue-500" to="/credits">Credits</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/credits" element={<CreditPage />} />
            </Routes>
        </div>
    );
}
