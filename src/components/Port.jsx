import React, {useEffect, useRef } from 'react'

import { portText } from '../constants'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

const Port = () => {
    const horizontalRef = useRef(null)
    const sectionsRef = useRef([])

    useEffect(() =>{
        gsap.registerPlugin(ScrollTrigger)

        const horizontal = horizontalRef.current
        const sections = sectionsRef.current

        let scrollTween = gsap.to(sections, {
            xPercent: -120*(sections.length-1),
            ease:'none',
            scrollTrigger:{
                trigger:horizontal,
                start:'top 56px',
                end:() =>'+='+horizontal.offsetWidth,
                pin:true,
                scrub:1,
                invalidateOnRefresh:true,
                anticipatePin:1
            }
        })

        return() =>{
            scrollTween.kill()
        }
    },[])



    return (
        <section id='port'>
            <div className='port_inner'>
                <div className='port_title'>
                    portfolio<em>포폴 작업물</em>
                </div>
                    <div className='port_wrap'>
                        {portText.map((port, key) => (
                            <article className={`port_item p${key+1}`} key={key}>
                                <span className='num'>{port.num}.</span>
                                <a href={port.code} target='_blank' className='img' rel='noreferrer'>
                                    <img src={port.img} alt={port.name} />
                                </a>
                                <h3 className='title'>{port.title}</h3>
                                <p className='desc'>{port.desc}</p>
                                <a href={port.view} target='_blank' className='site' rel='noreferrer'>사이트 보기</a>
                            </article>
                        ))}
                    </div>
            </div>
        </section>
    )
}

export default Port