import profileimg from './Images/Tejasvi.jpg'
import { Link } from 'react-router-dom';

const divStyle = {
    fontSize: 60,
    
}
const textStyle ={
    color:'#ff014f'
}

const textStyle2={
    fontSize: 40,
}
export default function Slider(){
    return(
        <section>
            <div className="slider">
                <div className="div1 text-left">
                    <div>
                    <p>WELCOME TO MY WORLD</p>
                    <p style={divStyle}><strong id='name'> Hi, I'm  <span style={textStyle}>Tejasvi Vichare</span> <p style={textStyle2} id='name2'> a  Frontend Developer.</p></strong></p>
                    <p style={{marginTop:'20px',fontFamily:'sans-serif'}}>I'm a Frontend Developer with 2 years of experience in React.js, Next.js with proficiency in web technologies like HTML5, CSS3, JavaScript, building large-scale web applications, cross-browser platforms, and design constraints on the web, and building responsive user interfaces. 
</p>
                   <br></br><br></br> <Link  to="https://drive.google.com/file/d/1KASC3JMI_DFA38WZOilIffTYfzPyTFZ8/view?usp=sharing" id='download-cv'>Download Resume</Link>
                    </div>

                </div>
                 <div className="div2">
                    <center>
                    <img src={profileimg} ></img>
                    </center>
                </div> 
            </div>
        </section>
    )
}