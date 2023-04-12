import { useState } from "react";

const Content = () => {
     const [state, setstate] = useState(false);
     
    const onPush = ()=>{

        setstate(!state)
    }

    const changeClick = ()=>{
        const s = 'Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart’s content.' 
       return setstate(s) 
    }
    const t = 'HI IT YOUR TIME'
    const r = 'OKEY LET STARTED'
    return (
        <div className={ state ? 'block-color' : 'colorChange'}>
            <div className='content'>
                <h1 className="content">{state ? t : r}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra convallis auctor. Sed accumsan libero quis mi commodo et suscipit enim lacinia. Morbi rutrum vulputate est sed faucibus.consectetur adipiscing elit. Aliquam viverra convallis auctor. Sed accumsan libero quis mi commodo et suscipit enim lacinia.</p>
                <h1 onClick={onPush} className="push" >push</h1>
            </div>
            <p className="content-state">{state}</p>
            <div className='content'>
                <h1 className="content">The title on the article</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Aliquam viverra convallis auctor. Sed accumsan libero
                      quis mi commodo et suscipit enim lacinia. Morbi rutrum
                       vulputate est sed faucibus.consectetur adipiscing elit.
                        Aliquam viverra convallis auctor. Sed accumsan libero 
                        quis mi commodo et suscipit enim lacinia.</p>
                <h1 onClick={changeClick} className="push" >push2</h1>
                
            </div>
        </div>
    )
}
export default Content;