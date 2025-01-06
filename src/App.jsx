import DarkVariantExample from "./DarkVariantExample"
import UncontrolledExample from "./DarkVariantExample"
import { Route, Routes, useLocation } from "react-router-dom";
import './App.css'
import TypesExample from "./TypesExample"
import ColorSchemesExample from "./Nav"
import BasicExample from "./Cardcom"
import CloseButton from 'react-bootstrap/CloseButton';
import CardP from "./page/CardP"
import Home from "./page/Home";
function App() {
 
  return (
    <>
    <ColorSchemesExample></ColorSchemesExample>
    <h2>rafe</h2>
    <DarkVariantExample></DarkVariantExample>
    <br />
    <TypesExample></TypesExample>
    <br/>
    {/* <CardP></CardP> */}
    <CloseButton />


    <Routes>
        <Route path="/" element={<Home/>} />
         <Route path="/about-us" element={ <CardP></CardP>} />
        {/* <Route path="/products" element={<Product />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/location" element={<MapWithContact />} />
        <Route path="/core-product" element={<OurCoreProducts />} />
        <Route path="/event" element={<EventSection />} />
        <Route path="/leader" element={<AboutSection />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/gallery" element={<GalleryPage />} />  */}
      </Routes>
    </>
  )
}

export default App
