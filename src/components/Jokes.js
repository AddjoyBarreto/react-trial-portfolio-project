import React, { Component } from 'react';
import 'slick-carousel';
import $ from 'jquery';

const Joke = ({ joke : { setup, punchline}  }) => (
<div style={{margin:'5px'}}>{setup}<div>{punchline}</div></div>)

class Jokes extends Component {

    state ={ joke: {}, jokes:[]}

    componentDidMount(){
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then( json => this.setState({ joke: json}))
    }

    fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
        .then(response => response.json())
        .then( json => this.setState({ jokes: json}))
    }

    somejs = () =>{
        $('.center').slick({
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 1
                }
              }
            ]
          });
    }
          
    render()
    {
        // const { setup, punchline} = this.state.joke;
        return(
            <div>
                <div className="center" style={this.somejs} data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                    <div><h3>5</h3></div>
                    <div><h3>6</h3></div>
                </div>
                <h3>Random jokes</h3>
                {/* <div>{setup}</div><div>{punchline}</div> */}
                <Joke joke={this.state.joke}/>
                <hr />
                <div>
                    <h3>ten jokes</h3>
                    <button onClick={this.fetchJokes}>click here</button>
                    {
                        this.state.jokes.map( joke =>(<Joke key={joke.id} joke={joke}/>))
                    }
                </div>
            </div>
            
        )
    }
}

export default Jokes; 