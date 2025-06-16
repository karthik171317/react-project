import menu from '../assets/svg/menu.svg'
import {useState} from 'react';


function Header ({dataSend ,titleNameValue}){
    debugger
    // const [titleName, titleNameFunc] = useState('Time')
    const [data, setData] = useState(false);
    return (<header className='top-0 sticky bg-black text-white h-[7%]'>
                <h1 className="text-3xl flex justify-between px-5 py-4 items-center cursor-default h-full">
                    <span className='cursor-pointer' onClick={()=> {setData(!data);dataSend(!data);} }>  
                        <img src={menu} alt="" />
                    </span>
                    <span>    
                        {titleNameValue}
                    </span>
                </h1>
            </header>);
}

export default Header;