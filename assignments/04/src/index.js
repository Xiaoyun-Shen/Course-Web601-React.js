import React from 'react';
import ReactDOM from 'react-dom';

function getAjaxPromise(url) {
  return new Promise(resolve => {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
      if(httpRequest.readyState === XMLHttpRequest.DONE) {
        resolve(httpRequest.responseText);
      }
    };
    httpRequest.open('GET', url);
    httpRequest.send();
  });
}

/*
 * This is a template to get you started on Assignment #4. 
 *
 * You can put all of your code in this file to work on the assignment.
 *
 * If you forget how to install or compile this project, refer to the README.txt
 */

class Pokemon extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            userInput: ''            
        };
    }
    handleChange(e) {		
        this.setState({userInput: e.target.value});
    }
    handleClick(e) {
        let url="https://pokeapi.co/api/v2/pokemon/"+this.state.userInput+"/";
        getAjaxPromise(url)
            .then(JSON.parse)
            .then(response => {
				let name=response.name;
				let frontDefault=response.sprites.front_default;
				let type=response.types[0].type.name;
				let weight=response.weight;
				let height=response.height;
				//let moves=JSON.stringfy(response.moves);
				
				this.setState({name: name});				
				this.setState({frontDefault: frontDefault});
				this.setState({type: type});
				//this.setState({moves: moves});
				this.setState({weight: weight});
				this.setState({height: height});
    });


    }
    render() {
        return (
            <div>
				<input onChange={this.handleChange}/>
				<button onClick={this.handleClick}>Search</button>
				<div className="container">
					<img src={this.state.frontDefault} /> 
					<div className="middle">
						<div className="text">{this.state.name}</div>
					</div>
				</div>	
				<p>Name:  <span>{this.state.name}</span></p>
				<p>Type:  <span>{this.state.type}</span></p>
				<p>Weight:  <span>{this.state.weight}</span></p>		
				<p>Height:  <span> {this.state.height}</span></p>
			</div>
		);
    }
}

ReactDOM.render(
<div className="pokemon">
    <Pokemon/>
    </div>,
    document.getElementById('root')
);
