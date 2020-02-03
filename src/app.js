// JSX - JavaScript XML

//...........................TIP: only one kind of comments inside JSX expression/templates works, {/* A JSX comment */}. Null, undefined and booleans values are all ignored in JSX and not printed in html file


//INDECISION APP using plain JSX

//Forms and input

//const app2={
//    name:'Indecision App',
//    options:[]
//    
//}
//
//const onFormSubmit = (e) => {
//    e.preventDefault();
//    console.log('Form submitted!');
//    
//    const option=e.target.elements.option.value;//fetch value give in input name 'option' ans store it in variable option
//    if(option){
//        app2.options.push(option); //push the value into 
//        e.target.elements.option.value='';//emptying the input box
//        
//        renderingTemp();//re rendering after pushing into app2.options
//    }
//};
//
//function wipeAll(){
//    app2.options=[];
//    renderingTemp();//re rendering after wiping out app2.options
//}
//
//function onMakeDecision(){
//    const randomNum=Math.floor(Math.random() * app2.options.length);//math.random generate between 0 and 1, multiplying with array length gives random number between 0 and array length
//   //console.log(randomNum);
//    const selectedOption=app2.options[randomNum];
//    alert(selectedOption);
//}
//
//const appRoot=document.getElementById('app');
//
//
// function renderingTemp(){
//    
//    const template=(
//    <div>
//       <h1>Name: {app2.name}</h1>
//        <p>{app2.options.length > 0 ? 'Here are your options' : 'No options'}</p>
//        <p>{app2.options.length}</p>
//        <button disabled={app2.options.length === 0} onClick={onMakeDecision}>What should i do?</button>
//        <button onClick={wipeAll}>Remove All</button>
//        
//        <ol>
//          {
//            app2.options.map((option)=>{
//               return <li key={option}>{option}</li>;
//            })
//          }
//        </ol>
//        
//        
//       <form onSubmit={onFormSubmit}>
//             <input type="text" name="option"/>
//             <button>Add option</button>
//    
//       </form>
//    
//    </div>
//
//
//);
// ReactDOM.render(template, appRoot);   
//    
//};
//
//
//renderingTemp();
//




//INDECISION APP using components

class IndecisionApp extends React.Component{
    render(){
        const titleText='Indicision App';
        const subTitleText='Small application using React';
        const options=['one', 'two', 'three'];
        
        return(
         <div>
                  <Header title={titleText} subtitle={subTitleText}/>
                   <Action/>
                   <Options allOptions={options}/>
                   <AddOption/>
            
            </div>
        
        );
        
    }
    
    
}


class Header extends React.Component{ //React is an object we're extending its components capability
    render(){ //es6 may not have any methods defined but in React needs render method to be defined all the time
        
               
        //render returns JSX
        return (
            <div>
            <h1>{this.props.title}</h1> 
            <h2>{this.props.subtitle}</h2>
            </div>
        );
        
    }
     
}

class Action extends React.Component{
    render(){
        
        return(
         <button>What should i do?</button>
        );
        
        
    }
    
    
    
}


/* nesting Option component inside Options component */
class Options extends React.Component{
    render(){
        
        return(
          <div>
             <p>Here are your options</p>
             <p>Here is the length: {this.props.allOptions.length}</p>
            
       <ol>     
       {
         this.props.allOptions.map((option)=>{
             return  <Option key={option} optionText={option} />
         })
        }
     
         </ol>   
            
           
            </div>
        );
        
    }
    
}

class AddOption extends React.Component{
    render(){
        
        return(
          <div>
              <button>Add Options</button>
            </div>
        );
        
    }
    
}

class Option extends React.Component{
    render(){
      
        return(
      
             <li>{this.props.optionText}</li>
              
         
        );
        
    }
    
    
}



ReactDOM.render(
<IndecisionApp />,
document.getElementById('app')
)
