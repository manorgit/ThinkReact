import {Dog} from './Dog'
import { ComposedDog } from './ComposedDog';
import { Cat } from './Cat';
import { ComposedCat } from './ComposedCat';
import React from 'react'


function InheritenceVSComposition() {
    return (
      <div >
        {/* Inheritence vs Composition
       
        Being react Developer need not worry about Inheritence because we never learnt it
        We use only composition
  
        In general programming ,always favour compostion over inheritence because 
          inheritence tries to predict the future 
          composition accomodates the future.
  
        Dog 
          bark
         
        
        Cat
          meow
          
  
        Animal
          walk
          bite
          
         I need a dog that bark and walk that doesn't bite 
        */}
        <div>Inherited Dog</div>
        <div>******************************************************</div>
  
        <Dog/>
        <div>******************************************************</div>
        <div>Composed  Dog</div>
        <div>******************************************************</div>
        <ComposedDog></ComposedDog>
        <div>***************************************************************************************</div>
        <div>Inherited  Cat</div>
        <div>******************************************************</div>
        <Cat></Cat>
        <div>******************************************************</div>
        <div>Composed  Cat</div>
        <div>******************************************************</div>
        <ComposedCat></ComposedCat>
      </div>
    );
  }
  
  export default InheritenceVSComposition;