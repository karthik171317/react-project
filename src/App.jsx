import './App.css';
import Header from './components/Header'
import Section from './components/Section'
import Aside from './components/Aside'
import StopWatch from './components/StopWatch'
import Timer from './components/Timer'
import { useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

function App() {
    const [parentComp, childComp] = useState(false);
    const [titleName, titleNameFunc] = useState('Time');
    return (
        <>
        <Router>
                <Routes>
                    <Route
                        exact
                        path="/time"
                        element={<div className='flex h-full'>
                                <Aside className={ parentComp ? 'width-0  position-unset asideMenu' : 'w-[15%] asideMenu'} titleNameFunc={titleNameFunc} dataSend={childComp}/>
                                <section className={ parentComp ? 'w-full h-full section' : 'md:w-[85%] h-full section w-full'}>
                                    <Header dataSend={childComp} titleNameValue={titleName}/>
                                    <Section/>
                                </section>
                            </div>}
                    />
                    <Route
                        path="/stop-watch"
                        element={<div className='flex h-full'>
                                <Aside className={ parentComp ? 'width-0 position-unset asideMenu' : 'w-[15%] asideMenu'} titleNameFunc={titleNameFunc} dataSend={childComp}/>
                                <section className={ parentComp ? 'w-full h-full section' : 'md:w-[85%] h-full section w-full'}>
                                    <Header dataSend={childComp}  titleNameValue={titleName}/>
                                    <StopWatch/>
                                </section>
                            </div>}
                    />
                    <Route
                        path="/timer"
                        element={<div className='flex h-full'>
                                <Aside className={ parentComp ? 'width-0  position-unset asideMenu' : 'w-[15%] asideMenu'} titleNameFunc={titleNameFunc} dataSend={childComp}/>
                                <section className={ parentComp ? 'w-full h-full section' : 'md:w-[85%] h-full section w-full'}>
                                    <Header dataSend={childComp}  titleNameValue={titleName}/>
                                    <Timer/>
                                </section>
                            </div>}
                    />
                    <Route
                        path="*"
                        element={<Navigate to="/time" />}
                    />
                </Routes>
            </Router>
        
        </>
    )
}

export default App;
