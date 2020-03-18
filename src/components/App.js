import React, {Component} from 'react';
import { directive } from '@babel/types';
import Projects from './Projects';
import SOCIALPROFILE from './Socialprofile';

class App extends Component {

    state = { displaybio: false};

    // constructor(){
    //     super();
    //     this.state = {displaybio: false};

    //     // this.readMore = this.readMore.bind(this);
    //     // this.readLess = this.readLess.bind(this);
    //     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    // }

    // readMore(){
    //     this.setState({ displaybio: true});
    // }

    // readLess(){
    //     this.setState({ displaybio: false});
    // }

    toggleDisplayBio = () =>{
        this.setState({ displaybio: !this.state.displaybio});
    }

    render(){
        
        return(
            <div>
                <h1>hi there</h1>
                <p>My name is Addjoy Barreto. I am a software developer</p>
                <p>and i like to develop web applications</p>
                {
                    this.state.displaybio ? (
                        <div>
                            <p>the 1ts para in the inner div</p>
                            <p>the 2nd para in the inner div</p>
                            <p>the 2nd para in the inner div</p>
                            <button onClick={this.toggleDisplayBio}>
                            Read Less
                            </button>
                        </div>
                    ) : 
                    (
                        <div>
                            <button onClick={this.toggleDisplayBio}>
                            Read More
                            </button>
                        </div>
                    )
                }
                <hr />
                <Projects />
                <hr />
                <SOCIALPROFILE />
            </div>
        )
    }
}

export default App;