import React from 'react';

class Form extends React.Component{
    render(){
        return(
            <div>

                    <form onSubmit={this.props.getWeather}>
                      <div >
                          <input type="text"  name="city" placeholder="City..."/>
                          <input type="text" name="country" placeholder="Country..."/>
                          <button className="btn">Go!</button>
                        </div>
                    </form>

              </div>
        );
    }

}

export default Form;
