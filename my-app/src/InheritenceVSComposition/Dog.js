import React from 'react'
import {Animal } from './Animal'

export class Dog extends Animal{

    
    render(){
        const parent=super.render()
       return (<>
        <div>I am Dog that</div>
        {parent}
        <div>and bark</div>
        </>)
    }
}