import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersPosts from "../usersPosts/UsersPosts";
import UsersDet  from "../../Components/UsersDet"; 

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<><UsersPosts /></>} />
                <Route path="/post/:id" element={<><UsersDet/></>} />
                <Route path="*" element={<div>404</div>} />
            </Routes>
        </Router>
    )
};


export default App;