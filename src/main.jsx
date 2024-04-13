import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from './routes/Layout.jsx'
import CreatePage from './routes/CreatePage.jsx'
import Home from './components/home/Home.jsx'
import GalleryPage from './routes/GalleryPage.jsx'
import DetailPage from './routes/DetailPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index={true} element={<Home />} />
        <Route index={true} path="/create" element={<CreatePage />} />
        <Route index={true} path="/gallery" element={<GalleryPage />} />
        <Route index={false} path="/dweller/:id" element={<DetailPage />} />
      </Route>   
    </Routes>
  </BrowserRouter>
)
