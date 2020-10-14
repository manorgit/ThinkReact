import React,{useState} from 'react'

const Toggle =(props)=>{
    
    const [on,setOn]=useState(false)
    const toggle=()=>{
        setOn(!on)
    }
   return(<>
    {props.children(on,toggle)}
    </>)
}

export const MyToggle=()=>{

    return(
    <Toggle>
       { (on,toggle)=>
            <button onClick={toggle}>{on?'on':'off'}</button>
        }
    </Toggle>)
    
}

const withToggle=(Comp)=>{

 return class extends React.Component{

    constructor(props){
        super(props)
        this.state={on:false}
    }
   
     toggle=()=>{
        this.setState({on:!this.state.on})
    }
    render(){ 
      return  (<Comp toggle={this.toggle} on={this.state.on} {...this.props }></Comp>)
    }
}
}
export const HOCToggle=(props)=>{

    return(<button onClick={props.toggle}>{props.on?'online':'offline'}</button>)
    
}

export const MyHoCToggle= withToggle(HOCToggle)



