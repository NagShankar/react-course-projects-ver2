"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
//    const option=e.target.elements.option.value;//fetch value give in input name 'option' and store it in variable option
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
var IndecisionApp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    var _this;

    _classCallCheck(this, IndecisionApp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IndecisionApp).call(this, props));
    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_assertThisInitialized(_this));
    _this.selectRandomNum = _this.selectRandomNum.bind(_assertThisInitialized(_this));
    _this.handleAddOption = _this.handleAddOption.bind(_assertThisInitialized(_this)); //setting dafault state

    _this.state = {
      //options:['marc', 'alex', 'honda']
      options: []
    };
    {
      /*now we need to send these options to Options component which has wipeall method which can delete and make the options zero, since button to wipe all doesnt exist in this component, hence sending as props to Options component
      */
    }
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      //alert(option);
      //validation
      if (!option) {
        //if option doesnt exist
        return 'Please add something :(';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'Option already exist!!!!';
      } else {
        this.setState(function (prevState) {
          //prevState.options.push(option); //we shoundnt do this, cuz we're manipulating prevState directly by pushin new option, push basically alter original array, we shud use concat instead
          return {
            //options:prevState.options  //here we directly manipulated prevState and assgining it to Options array, which is actually origianl array, we should use concat instead
            //using concat now
            options: prevState.options.concat([option]) //or options:prevState.options.concat(option) - passing non array value, both give same result, and new array is returned, which is basic behaviour of concat to return new array

          };
        });
      }
    }
  }, {
    key: "selectRandomNum",
    value: function selectRandomNum() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      alert(randomNum + " " + this.state.options[randomNum]);
    }
  }, {
    key: "render",
    value: function render() {
      var titleText = 'Indicision App';
      var subTitleText = 'Small application using React';
      return React.createElement("div", null, React.createElement(Header, {
        title: titleText,
        subtitle: subTitleText
      }), React.createElement(Action, {
        hasOptions: this.state.options.length > 0,
        sendRandomNum: this.selectRandomNum
      }), React.createElement(Options, {
        allOptions: this.state.options,
        resettingOptions: this.handleDeleteOptions
      }), React.createElement(AddOption, {
        addingOption: this.handleAddOption
      }));
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    //React is an object we're extending its components capability
    value: function render() {
      //es6 may not have any methods defined but in React needs render method to be defined all the time
      //render returns JSX
      return React.createElement("div", null, React.createElement("h1", null, this.props.title), React.createElement("h2", null, this.props.subtitle));
    }
  }]);

  return Header;
}(React.Component);

var Action =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, _getPrototypeOf(Action).apply(this, arguments));
  }

  _createClass(Action, [{
    key: "render",
    //    handlePick(){
    //    alert('Damn i was clicked!!!');    
    //    }
    //     wipeAll(){
    //        alert('Warning! i\'ll wipe all');
    //        
    //    }
    value: function render() {
      return React.createElement("div", null, React.createElement("button", {
        onClick:
        /*this.handlePick*/
        this.props.sendRandomNum,
        disabled: !this.props.hasOptions
      }, "What should i do? Pick random option"));
    }
  }]);

  return Action;
}(React.Component);
/* nesting Option component inside Options component */


var Options =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(Options, _React$Component4);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, _getPrototypeOf(Options).apply(this, arguments));
  }

  _createClass(Options, [{
    key: "render",
    //this is efficient way to bind
    //    constructor(props){
    //        super(props);
    //        this.wipeAll=this.wipeAll.bind(this);
    //        
    //    }
    //      wipeAll(){
    //        //alert('Warning! i\'ll wipe all');
    //          console.log(this.props.allOptions);
    //        
    //    }
    value: function render() {
      return React.createElement("div", null, React.createElement("button", {
        onClick: this.props.resettingOptions
      }, "Wipe All"), React.createElement("p", null, "Here are your options"), React.createElement("p", null, "Here is the length: ", this.props.allOptions.length), React.createElement("ol", null, this.props.allOptions.map(function (option) {
        return React.createElement(Option, {
          key: option,
          optionText: option
        });
      })));
    }
  }]);

  return Options;
}(React.Component);

var AddOption =
/*#__PURE__*/
function (_React$Component5) {
  _inherits(AddOption, _React$Component5);

  //using constructor here sine we're using props inside addOption method and we need to bind this
  function AddOption(props) {
    var _this2;

    _classCallCheck(this, AddOption);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(AddOption).call(this, props));
    _this2.addOption = _this2.addOption.bind(_assertThisInitialized(_this2)); //receiving error

    _this2.state = {
      error: false //by default its undefined, in other words false

    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: "addOption",
    value: function addOption(e) {
      //alert('i will add something');
      e.preventDefault(); //const option=e.target.elements.option.value;

      var option = e.target.elements.option.value.trim(); //trimming out empty spaces
      //now vaidation is done inside parent component itself
      //        if(option){
      //           //alert(option);
      //            this.props.addingOption(option);
      //            e.target.elements.option.value='';//emptying the input box after submitting
      //        }

      var whatsTheOutput = this.props.addingOption(option);
      this.setState(function () {
        return {
          error: whatsTheOutput
        };
      });
      e.target.elements.option.value = ''; //emptying the input box after submitting
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("form", {
        onSubmit: this.addOption
      }, React.createElement("input", {
        type: "text",
        name: "option"
      }), React.createElement("button", null, "Add Options")), this.state.error && React.createElement("p", null, this.state.error));
    }
  }]);

  return AddOption;
}(React.Component);

var Option =
/*#__PURE__*/
function (_React$Component6) {
  _inherits(Option, _React$Component6);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, _getPrototypeOf(Option).apply(this, arguments));
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      return React.createElement("li", null, this.props.optionText);
    }
  }]);

  return Option;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
