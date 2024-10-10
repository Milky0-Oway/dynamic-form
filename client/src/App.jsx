import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import { List } from './pages/List/List';
import { Create } from './pages/Create/Create';
import { Edit } from './pages/Edit/Edit';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<List />} />
                <Route path="/create" element={<Create />} />
                <Route path="/edit/:id" element={<Edit />} />
            </Routes>
        </Router>
    );
}

export default App;
