import React, {useEffect} from 'react';
import './App.css';
import Menu from "./components/Menu";
import './styles/global.scss';
// @ts-ignore
const tg = window.Telegram.WebApp;

function App() {

    useEffect(() => {
        tg.ready();
    }, []);
    const handleCloseClick = () => {
        tg.close();
    }

    const menuPositions = [
        {
            name: 'Лапша по домашнему',
            order: 1
        },
        {
            name: 'Мясные тефтели. Пюре.',
            order: 2
        },
        {
            name: 'Блинчики с курицей и грибами.',
            order: 3
        }
    ]

    return (
        <div className="App">
            <Menu menuPositions={menuPositions}/>
        </div>
    );
}

export default App;
