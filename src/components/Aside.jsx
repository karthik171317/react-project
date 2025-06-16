import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import menu from '../assets/svg/menu.svg'

function Aside(props){
    const {className,titleNameFunc,dataSend} = props;
    const getCurrentRoute = useLocation();
    const [data, setData] = useState(false);

    useEffect(()=>{
        if(window.innerWidth < 768 && data == false){
            document.getElementsByClassName('asideMain')[0].style.display = 'none';
            setData(true)
        }
    })

    return (
        <>
            <aside className={className + ' bg-gray-200 asideMain'}>
                <div className="text-[34px] flex md:justify-center border-b cursor-default appTitle border-r justify-between">
                    <span className='cursor-pointer p-2 asideIcon hidden' onClick={()=> {dataSend(parentComp => !parentComp);} }>  
                        <img src={menu} alt="" />
                    </span>
                    React App
                </div>
                <div className="asideListParent">
                    <div className="flex flex-col">
                        <Link to="/time" className={ (getCurrentRoute.pathname == '/time' ? 'active' : '') + ' asideListMenu' } onClick={() => titleNameFunc('Time')}>
                            Time
                        </Link>
                        <Link to="/stop-watch" className={ (getCurrentRoute.pathname == '/stop-watch' ? 'active' : '') + ' asideListMenu' } onClick={() => titleNameFunc('Stop Watch')}>
                            Stop Watch
                        </Link>
                        <Link to="/timer" className={ (getCurrentRoute.pathname == '/timer' ? 'active' : '') + ' asideListMenu' } onClick={() => titleNameFunc('Timer')}>
                            Timer
                        </Link>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Aside;