//COUNTER APP

let count=0;
const addCounter = () => {
    /* console.log('I will add 1'); */
    count++;
   
    reRender(); /* re rendering by calling the ReactDOM.render inside the function */
    
};

const deleteCounter = () => {
      /* console.log('I will delete 1'); */
    count--;
    
    reRender(); /* re rendering by calling the ReactDOM.render inside the function */
};

const resetCounter = () => {
     /* console.log('I will RESET'); */
     count=0;
   
   reRender(); /* re rendering by calling the ReactDOM.render inside the function */
};

/*
const templateCounter=(
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={addCounter}>+1</button>
      <button onClick={deleteCounter}>-1</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
);

*/

const appRoot=document.getElementById('app');//getting root element from index.html
//ReactDOM.render(templateCounter, appRoot);//rendering particular template

//but above will not render the h1 count, to make mit happen we wiil set a function to re-render 


const reRender = () => {
    
    const templateCounter=(
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={addCounter}>+1</button> 
        /* note we're not calling funtion here on click i.e we're not using parethesis, were just referencing it, if we want it to return something then use (), else no */
      <button onClick={deleteCounter}>-1</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
        
     /* 
     YOU MAY THINK--------------- all the above lines wiil be re-rendered when button is clicked every time! but no, only the line which changes will be re-rendered, in our case its just h1 tag, this is achieved by React using VIRTUAL DOM, which is very efficient and fast. What is does is basically compare the virtual DOM with actual DOM and render only what is changed.  
     You can see it happenig in dev tools under elements column, see which line flases when you click on the button, its only inside h1 tag! 
     */  
        
        
);
 ReactDOM.render(templateCounter, appRoot);   
}

reRender();