import React from 'react'
import {Animal } from './Animal'

export class Cat extends Animal{

    
    render(){
        const parent=super.render()
       return (<>
        <div>I am cat that</div>
        {parent}
        <div>and meow</div>
        </>)
    }
}