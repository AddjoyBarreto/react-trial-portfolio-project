import React, { Component }  from "react";
import Slider from "react-slick";
import PROJECTS from '../data/projects';
import $ from "jquery";


const Project = props => {
  // console.log("props",props)  //here this.props wont work
  const { title, image, discription,link} = props.project;
  return(
    <div>
      <div style={{display:'inline-block', margin: 30, width:300, height:350, border:"2px solid black"}}>
          {/* {this.props.project.title} */}
          <h3>{title}</h3>
          <img src={image} alt="none" style={{width:300, height:200}} />
          <div>{discription}</div>
          <a href={link} className="btn btn-primary" target="_blank" rel="noopener noreferrer"> Check the code</a>
      </div>
    </div> 
  )
}

// const Projects =() => {
//   return(
//       <div>
//       {
//           PROJECTS.map( PROJECTS =>{        
//           return(                 
//               <Project key={PROJECTS.id} project={PROJECTS} />
//           )
//           })              
//       }
//       </div>
//   )
// }
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
} 

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}


export default class CenterMode extends Component {
    render() {
        const settings = {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "60px",
          slidesToShow: 3,
          speed: 500
        };

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

        return (
          <div className={"container center"}>
            <h2>Center Mode</h2>
            <Slider {...settings}>
                  {
                      PROJECTS.map( PROJECTS =>{        
                      return(<div>
                              <div>             
                                <Project key={PROJECTS.id} project={PROJECTS} />
                              </div>
                            </div>
                      )
                      })              
                  }                
                {
                      PROJECTS.map( PROJECTS =>{        
                      return(<div>
                              <div>             
                                <Project key={PROJECTS.id} project={PROJECTS} />
                              </div>
                            </div>
                      )
                      })              
                  }
              
            </Slider>
          </div>
        );
      }
    }