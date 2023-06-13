"use client"

import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import TextBlock from './textblock';
import './page.css'
import Image from 'next/image';
import TrailText from './trail';
import first from './image/1.png'
import second from './image/2.png'
import third from './image/3.png'
import moon from './image/moon.png'
import snow from './image/snow.png'
import BouncingArrow from './arrow';

const ParallaxApp = () => {
    
    return (
        <div className=''>

        <Parallax pages={2}>
            <ParallaxLayer offset={0}>
            <div className=' p-96' style={{backgroundColor:'#232428'}}></div>
            </ParallaxLayer>
            
            <ParallaxLayer offset={0} speed={0.15} style={{height: "auto"}}> 
               <div style={{ backgroundPosition: 'bottom'}}>
                <Image src={snow} alt="" ></Image>
               </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={-0.2} style={{height: "auto"}}> 
               <div style={{ backgroundPosition: 'bottom'}}>
                <Image src={moon} alt="" ></Image>
               </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.2} style={{height: "auto"}}> 
               <div style={{ backgroundPosition: 'bottom'}}>
                <Image src={third} alt="" ></Image>
               </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={-0.1} style={{height: "auto"}}> 
               <div style={{ backgroundPosition: 'bottom'}}>
                <Image src={second} alt="" ></Image>
               </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.1}  style={{height: "auto"}}> 
               <div style={{ backgroundPosition: 'bottom'}}>
                <Image src={first} alt="" ></Image>
               </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0}>
            <div className=' p-96' style={{backgroundColor:'black' , opacity: 0.25}}></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={-0.3} className='Herotext'>
                <TrailText/>
            </ParallaxLayer>
            <ParallaxLayer offset={0.9} speed={0.4} className='arrow'>
                <BouncingArrow/>
            </ParallaxLayer>
            <ParallaxLayer offset={1}>
            <div className=' p-96' style={{backgroundColor:'#ecd7d0'}}></div>
            </ParallaxLayer>
            <ParallaxLayer offset={1.05} speed={0.5}>
                <TextBlock/>
            </ParallaxLayer>
            <ParallaxLayer offset={2}>
            <div className=' p-96' style={{backgroundColor:'#ecd7d0'}}></div>
            </ParallaxLayer>
        </Parallax>
        </div>
      )
};

export default ParallaxApp