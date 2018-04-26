import React from 'react';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

    class App extends React.Component{
      state={
        country:undefined,
        city:undefined,

        temperature1:undefined,
        humidity1:undefined,
        description1:undefined,

        temperature2:undefined,
        humidity2:undefined,
        description2:undefined,

        error:undefined
      }

        getWeather=async(e)=>{
          e.preventDefault();
          const API_KEY="10d0b9bf0476955dd9c619f9c27e2608";
          const city=e.target.elements.city.value;
          const country=e.target.elements.country.value;
          const api_call=await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`);
          console.log(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`)
          const data=await api_call.json();

          if(city&&country){
            console.log(data);
            this.setState({
                country:data.city.country,
                city:data.city.name,

                temperature1:data.list[0].main.temp,
                humidity1:data.list[0].main.humidity,
                description1:data.list[0].weather[0].description,

                temperature2:data.list[8].main.temp,
                humidity2:data.list[8].main.humidity,
                description2:data.list[8].weather[0].description,

                error:''
              });
          }else{
            this.setState({
                country:undefined,
                city:undefined,

                temperature1:undefined,
                humidity1:undefined,
                description1:undefined,

                temperature2:undefined,
                humidity2:undefined,
                description2:undefined,
                error:'Please enter the city and country'
              });

          }


        }
        render(){
            return(
              <div>
                <div className="wrapper">
                  <div className="main">
                    <div className="container">

                      <div className="titles">
                          <Titles/>
                      </div>
                                  <div className="row form-container" >
                                      <div className="form-search">
                                          <Form getWeather={this.getWeather}/>
                                      </div>

                                      <div className="form-content">
                                          <Nav/>
                                          <Route exact path="/" render={() => (
                                            <Weather
                                              country={this.state.country}
                                              city={this.state.city}
                                              temperature={this.state.temperature1}
                                              humidity={this.state.humidity1}
                                              description={this.state.description1}
                                              error={this.state.error} />)} />
                                          <Route exact path="/tomorrow" render={
                                            () =>(
                                              <Weather
                                                country={this.state.country}
                                                city={this.state.city}
                                                temperature={this.state.temperature2}
                                                humidity={this.state.humidity2}
                                                description={this.state.description2}
                                                error={this.state.error} />)}/>
                                      </div>
                                    </div>
                      </div>
                    </div>
                  </div>
              </div>


            );
        }
    }

 export default App;
