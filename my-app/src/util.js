const sort1=(items)=>{

   return items.sort()
}

// just items, objects, multiple props
const sort2=(items,config)=>{

    return items.sort((a,b)=>{

        if(a[config.key]>b[config.key])
        return 1;
        if(a[config.key]<b[config.key])
        return -1
        if(a[config.key]===b[config.key])
        return 0
    })
 }


  const sort3=(items,config)=>{

    return items.sort((a,b)=>{

        if(a[config.key]>b[config.key])
        return 1;
        if(a[config.key]<b[config.key])
        return -1
        if(a[config.key]===b[config.key]){
            if(a[config.secondaryKey]>b[config.secondaryKey])
                return 1;
            if(a[config.secondaryKey]<b[config.secondaryKey])
                return -1
            if(a[config.secondaryKey]===b[config.secondaryKey])
                return 0
        }
        
    })
 }

 //use Case Order by
 const sort4=(items,config)=>{

    return items.sort((a,b)=>{

        if(config.orderBy==='Asc'){

        if(a[config.key]>b[config.key])
        return 1;
        if(a[config.key]<b[config.key])
        return -1
        if(a[config.key]===b[config.key]){
            if(a[config.secondaryKey]>b[config.secondaryKey])
                return 1;
            if(a[config.secondaryKey]<b[config.secondaryKey])
                return -1
            if(a[config.secondaryKey]===b[config.secondaryKey])
                return 0
        }
    }
    else{
        if(a[config.key]>b[config.key])
        return -1;
        if(a[config.key]<b[config.key])
        return 1
        if(a[config.key]===b[config.key]){
            if(a[config.secondaryKey]>b[config.secondaryKey])
                return -1;
            if(a[config.secondaryKey]<b[config.secondaryKey])
                return 1
            if(a[config.secondaryKey]===b[config.secondaryKey])
                return 0
        }
    }
        
    })
 }

const sort=(items,callback)=>{
    return items.sort(callback)
 }
const items=[1,2,4,3]
const employees=[{name:'Ajay',age:33,id:2},{name:'mano',age:33,id:1},{name:'Praveen',age:25,id:3}]
const config2={key:'age'}
const config3={key:'age',secondaryKey:'id'}
const config4={key:'age',secondaryKey:'id',orderBy:'desc'}
const cb1=(a,b)=>b-a
const cb2=(a,b)=>a.age-b.age



 const sorted=sort1(employees,cb1)
 sorted

 