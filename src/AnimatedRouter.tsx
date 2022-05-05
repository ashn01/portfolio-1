import react from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './components/body/Home'
import Project from './components/body/Project'

import {AnimatePresence} from 'framer-motion'

export default function AnimatedRouter() {

    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/portfolio-1" element={<Home />} />
                <Route path="/portfolio-1/:id" element={<Project />} />
            </Routes>
        </AnimatePresence>
    )
}