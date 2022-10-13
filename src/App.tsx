import React from 'react';
import './App.css';
import {Header} from './Header/Header';
import {Main} from './Main/Main';
import {Skills} from './Skills/Skills';
import {MyWorks} from './MyWorks/MyWorks';
import {Form} from './ContactForm/Form';
import {Footer} from './Footer/Footer';

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks/>
            <Form/>
            <Footer/>
        </div>
    );
}

export default App;
