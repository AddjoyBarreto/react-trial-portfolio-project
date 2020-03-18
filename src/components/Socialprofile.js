import React from 'react';
import SOCIAL_PROFILE from '../data/socialProfile';
import { compileFunction } from 'vm';

const SocialProfile = props =>{
        const {image,link} = props.socialprofile;

        return(
            <div style={{display:'inline-block'}}>
               <a href={link}  target="_blank" rel="noopener noreferrer"><img src={image} alt="none" style={{width:50, height:50, margin:10}} /></a>
            </div>
        )
    }



const Socialprofile = () => {
        return(
            <div>
                <h3>Connect with me</h3>
                {
                    SOCIAL_PROFILE.map(SOCIAL_PROFILE=>{
                        return(
                            <SocialProfile key={SOCIAL_PROFILE.id} socialprofile={SOCIAL_PROFILE} />
                        )
                    })
                }
            </div>
        )
    }

export default Socialprofile;