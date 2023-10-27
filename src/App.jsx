import { useState, useEffect, useRef } from 'react';
import './App.css';
import Banner from './components/Banner';
import Catalog from './components/Catalog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Questions from './components/Questions';
import Info from './components/info';

function App() {
    const slides = [
        './src/assets/ph1.jpg',
        './src/assets/ph2.jpg',
        './src/assets/ph3.jpg',
        './src/assets/ph4.jpg',
        './src/assets/ph5.jpg',
    ];
    const [currSlide, setCurrSlide] = useState(0);
    const timerRef = useRef(null);

    const prevSlide = () => {
        const isFirstSlide = currSlide === 0;
        const newSlide = isFirstSlide ? slides.length - 1 : currSlide - 1;
        setCurrSlide(newSlide);
    };

    const nextSlide = () => {
        const isLastSlide = currSlide === slides.length - 1;
        const newSlide = isLastSlide ? 0 : currSlide + 1;
        setCurrSlide(newSlide);
    };

    useEffect(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
            nextSlide();
        }, 3000);
    });

    return (
        <>
            <div className='wrapper' name='top'>
                <div className='content'>
                    <Header />
                    <main className='content-wrapper'>
                        <Banner
                            slides={slides}
                            currSlide={currSlide}
                            prevSlide={prevSlide}
                            nextSlide={nextSlide}
                        />
                        <Info />
                        <Questions />
                        <Catalog />
                        <Contact />
                    </main>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default App;
