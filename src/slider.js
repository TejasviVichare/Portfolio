import profileimg from './tejasvi.png'
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
                    <p style={divStyle}><strong id='name'> Hi, I'm  <span style={textStyle}>Tejasvi Vichare</span> <p style={textStyle2} id='name2'> a  Frontend Developer.|</p></strong></p>
                    <p style={{marginTop:'20px',fontFamily:'sans-serif'}}>I'm a front end developer with 1 years of experience in web development. 
                            I'm passionate about creating great user experiences and have a strong understanding of usability and accessibility standards.</p>
                   <br></br><br></br> <Link  to="https://drive.google.com/file/d/1bnJt6zf_FvsfY30DZ-vHVZvZkpic8ang/view?usp=sharing" id='download-cv'>Download Resume</Link>
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