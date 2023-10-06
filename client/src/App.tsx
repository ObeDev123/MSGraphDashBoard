import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

import { Users } from './views/Users'
import { Landing } from './views/Landing'
import { Groups } from './views/Groups'
import { GroupDetails } from './views/GroupDetails'
import { Reports } from './views/Reports'
import { Teams } from './views/Teams'
import { SharePoint } from './views/SharePoint'

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/users" element={<Users />} />
                <Route path="/groups" element={<Groups />} />
                <Route path="/group" element={<GroupDetails />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/sharepoint" element={<SharePoint />} />
                <Route path="/reports" element={<Reports />} />
            </Routes>
        </Router>
    )
}
