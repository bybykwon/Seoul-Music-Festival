'use client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/header/Header';
import Main from '@/components/layout/Main';
import Home from './home/home';

export default function Page() {
    return (
        <>
            <Header />
            <Main>
                <Home />
            </Main>
            <Footer />
        </>
    );
}
