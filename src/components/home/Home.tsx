import React from 'react'; 
import {header, headerSubTitle, headerTitle, contentContainer, contentTypography} from './HomeStyle';
import personalTrainer from './assets/personalTrainer.svg'; 
import stabilityBall from './assets/stabilityBall.svg'; 
import meditation from './assets/meditation.svg'; 
import healthyHabit from './assets/heallthyHabit.svg'; 

class Home extends React.Component {
    render(){
        return <section>
           <div style={header}>
                <div id="image-area" >
                <img src={personalTrainer} alt="personal trainer"/>
                </div>
                <div id="text-area" >
                    <h1 style={headerTitle}>Welcome to Locals Fit,</h1>
                    <h2 style={headerSubTitle}>get fit with qualified ,<br></br> expert personal trainers matched for you</h2>
                </div>
           </div>

        <div id="content-container" style={contentContainer}>     

        <div>
            <h1 className="title has-text-centered is-family-monospace">Personal Trainers</h1>
            <p style={contentTypography}>
            find your personal trainer with locals fit, we offer coaches from multiple sports and healthy activites, 
            our certified coaches will get you healthy and fit in no time people of all experience levels will be able to find a coach 
            that will change our clients's life
            </p>
        </div>


            <img src={stabilityBall} alt="stability-ball"/>
            <img src={meditation} alt="meditation"/>
       

        <div>
            <h1 className="title has-text-centered is-family-monospace">Meditation</h1>
            <p style={contentTypography}>
            Meditation is crucial for your health and helps maintain cognitive function aswell as cure depression and help with focus and mental sharpness, Meditation is also great for spirtual healthy and helps you find balance in your own life, get with one of our expert spirtual gurus that will help you open up your chakaras and connect with the universe. these coaches are highly regraded and helped transformed many lifes. book today and feel the change!
            </p>
            </div>


        <div>
            <h1 className="title has-text-centered is-family-monospace">Improve Health</h1>
            <p style={contentTypography}>
            Are you tired of your medicine cabinet being filled with useless drugs that make you feel worse, and produce bad side effects. did you know that most people have two or more vitamin/mineral deficincies. fine tuning your diet can be a very tricky and proccess because humans need alot of differnt nutrients to perform at their peak. get with our nutrients and supplement experts today and we will help you improve your diet. our experts have improved many people's diets and improve lifes. 
            </p>
        </div>

   
        <img src={healthyHabit} alt=""/>
        </div>

        </section>
    }
};

export default Home; 
