import React from 'react'
import { Bite } from './Bite'
import { Walk } from './Walk'
import { Meow } from './Meow'

export const ComposedCat=()=>{
    return (
        <>
        <div>
            I am a Cat that
        </div>
        <Walk/>
        <Bite></Bite>
        and
        <Meow/>
        </>
    )
}


