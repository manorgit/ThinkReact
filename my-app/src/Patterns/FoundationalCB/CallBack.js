/* Call backs

Abstraction is an idea that we should think of when creating Reusable code

Generally while creating an abstraction to cater the different use cases we tend to send
    configuration but for sure in future use cases are going to increase.
    when new use cases are introduced to preserve the existing code we dont refactor inline with our 
        new use cases.
     so the code turns bulkier unmaintainable code.
     
since we cannot predict the future during abastraction we could use callback to determine certain logic

    callback is the interface on time/relationship
    when developing abstractin/reusable think in terms of connecting present and future
        declare a callback and call the call back when necessary.
    When consuming abstraction/resusable think in terms of connecting  present and past
        already callback is defined so while invoking abstraction, pass the call back imp as an argument.

    sort([])
    sort([],config)
    sort([],callback)

    filter([])
    filter([],config:{})
    filter([],callback)


IOC=Call back (SOLID)=>LID
    show the wikipedia and explain dependency injection

Render Props
    State => object that store some info that changes over time
    Props => when passed as args
    Shared State =>  Formik is a parent that has initial values but those are internal to formik how we can pass the same value
    to the name-input i.e child of formik, here is where render props comes
    formik => abstraction
    presentaion => user

     function as child

IOC and UseEffect
    re render(inverse inversion)
    state without re render


Prop getters
    Tab
    Toggle




*/