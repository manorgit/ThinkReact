import React from 'react'
import { Bark } from './Bark'
import { Walk } from './Walk'
import { Bite } from './Bite'

export const ComposedDog=()=>{
    return (
        <>
        <div>
            I am a dog that
        </div>
        <Walk/>
        
        and
        <Bark/>
        </>
    )
}


