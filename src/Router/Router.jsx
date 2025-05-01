import { BrowserRouter, Route, Routes } from "react-router-dom"
import Gallery from "../components/Gallery"

export default function Router() {
  return (
    <>
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/team" element={<Team />} />
        </Routes>
        </BrowserRouter>
    </>
  )
}
