import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import { List } from './pages/List/List';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<List />} />
            </Routes>
        </Router>
    );
}

export default App;
