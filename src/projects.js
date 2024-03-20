import projects from './goind.jpg';
import derbyprints from './derby-prints.jpg'
import currency from './currency-converter.jpg'
import portfolio from './portfolio.jpg'
import cart from './cart.jpg'
import tic from './tic-tac-toe.png'
import { Link } from 'react-router-dom';
export default function Projects(){
    return(
        <section>
        <div className="projects">
        <div className="container">
            <br></br><br></br>              
            <div className="row justify-content-center" id="first-row">
                <div className="col">
                    <p id="features-title">VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</p>
                    <h1 style={{color:"rgb(201, 198, 198)"}}>My Projects</h1>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className="row justify-content-center" id="second-row">
            <div className="col-md-3" id="features-box">
                    <img src={portfolio}></img><br></br>
                    <h1 style={{color:"rgb(201, 198, 198)"}} id="title">Portfolio  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i class="fa-brands fa-github"></i>
                    </h1><br></br>
                    <p style={{color:"rgb(201, 198, 198)"}}>Developed a personal portfolio website using React.js to showcase my skills, projects, and professional experience. 
</p><br></br>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
                <div className="col-md-3" id="features-box">                
                    <img src={projects}></img><br></br>               
                    <h1 style={{color:"rgb(201, 198, 198)"}} id="title">GOIND &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="https://github.com/TejasviVichare/Goind"><i class="fa-brands fa-github"></i></Link> 
                    </h1><br></br>
                    <p style={{color:"rgb(201, 198, 198)"}}>This project is designed to seamlessly scale and adjust its layout for optimal viewing on various devices.
</p><br></br>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
              
                <div className="col-md-3" id="features-box">
                    <img src={currency}></img><br></br>
                    <h1 style={{color:"rgb(201, 198, 198)"}} id="title">Currency Converter  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="https://github.com/TejasviVichare/Currency-Converter"><i class="fa-brands fa-github"></i></Link> 
                    </h1><br></br>
                    <p style={{color:"rgb(201, 198, 198)"}}>The Currency Converter is a web-based application designed to facilitate easy and accurate currency conversion for users.</p><br></br>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
            </div>
            <br></br>
            <div className="row justify-content-center" id="second-row">
            <div className="col-md-3" id="features-box">
                    <img src={derbyprints}></img><br></br>
                    <h1 style={{color:"rgb(201, 198, 198)"}} id="title">Derby Prints  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="https://github.com/TejasviVichare/Derby-Prints"><i class="fa-brands fa-github"></i></Link> 
                    </h1><br></br>
                    <p style={{color:"rgb(201, 198, 198)"}}>Created a responsive layout with CSS media queries, ensuring optimal display and functionality across different
devices, including desktops, tablets, and mobile phones.
</p><br></br>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
           
                <div className="col-md-3" id="features-box">
                    <img src={cart}></img><br></br>
                    <h1 style={{color:"rgb(201, 198, 198)"}} id="title">Cart   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="https://github.com/TejasviVichare/Goind"><i class="fa-brands fa-github"></i></Link> 
                    </h1><br></br>
                    <p style={{color:"rgb(201, 198, 198)"}}>A cart was developed using React in which you can add products along with their quantities and the cart will display the results.<br></br><br></br> </p><br></br>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
                <div className="col-md-3" id="features-box">
                    <img src={tic}></img><br></br>
                    <h1 style={{color:"rgb(201, 198, 198)"}} id="title">Tic-Tac-Toe   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="https://github.com/TejasviVichare/Tic-Tac-Toe"><i class="fa-brands fa-github"></i></Link> 
                    </h1><br></br>
                    <p style={{color:"rgb(201, 198, 198)"}}>Developed Tic tac Toe game by using HTML5, CSS3, Javascript. It offers a platform for users to engage in a strategic battle by placing their markers (X or O) on a 3x3 grid. </p><br></br>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
            </div>
        </div>
    </div>
    </section>
    )
}