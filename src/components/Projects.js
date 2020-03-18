import React from 'react';
import PROJECTS from '../data/projects';

const Project = props => {
        // console.log("props",props)  //here this.props wont work
        const { title, image, discription,link} = props.project;
        return(
            <div style={{display:'inline-block', margin: 30, width:300}}>
                {/* {this.props.project.title} */}
                <h3>{title}</h3>
                <img src={image} alt="none" style={{width:300, height:200}} />
                <div>{discription}</div>
                <a href={link} className="btn btn-primary" target="_blank" rel="noopener noreferrer"> Check the code</a>
            </div>
        )
}

const Projects =() => {
        return(
            <div>
            {
                PROJECTS.map( PROJECTS =>{        
                return(
                    // <div key={PROJECTS.id}>{PROJECTS.title}</div>                   
                    <Project key={PROJECTS.id} project={PROJECTS} />
                )
                })              
            }
            
            {/* <div>{PROJECTS[0].title}</div> */}
            </div>
        )
    }

export default Projects;