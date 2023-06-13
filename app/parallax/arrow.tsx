"use client"

import React from 'react';
import { useSpring, animated } from 'react-spring';
import { FaArrowDown } from 'react-icons/fa';
import './page.css'

const BouncingArrow = () => {
    const arrowProps = useSpring({
      to: async (next) => {
        while (true) {
          await next({ y: 15 });
          await next({ y: 0 });
        }
      },
      from: { y: 0 },
      config: { tension: 800, friction: 15 },
      reset: true,
    });
  
    return (
        <div>
        <animated.div style={{ ...arrowProps, justifyContent: 'center'}}>
        <FaArrowDown size={20} className='FaArrow'/>
        </animated.div>
        </div>
    );
  };

  
export default BouncingArrow

