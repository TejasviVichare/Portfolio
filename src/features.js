import Footer from './footer'
import html from './html.webp'
export default function Features() {
    return (
    <section>
        <div className="features w-100">
            <div className="container">
                <br></br><br></br>              
                <div className="row" id="first-row">
                    <div className="col">
                        <p id="features-title">FEATURES</p>
                        <h1 style={{color:"rgb(201, 198, 198)"}}>What I Do</h1>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className="row w-100" id="second-row">
                    <div className="col-md-3" id="features-box">
                      <i class="fa-solid  fa-2x fa-bars"></i><br></br><br></br>
                        <h1 style={{color:"rgb(201, 198, 198)"}} id="title">Frontend Development</h1>
                        <p style={{color:"rgb(201, 198, 198)"}}>I am a frontend developer with expertise in HTML, CSS, and JavaScript.</p>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                    <div className="col-md-3" id="features-box">
                      <i class="fa-solid  fa-2x fa-bars"></i><br></br><br></br>
                        <h1 style={{color:"rgb(201, 198, 198)"}} id="title">Responsive Design</h1>
                        <p style={{color:"rgb(201, 198, 198)"}}>As a Frontend developer, I specialize in creating websites that seamlessly adapt to different screen sizes and devices.</p>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                  
                    <div className="col-md-3" id="features-box">
                    <i class="fa-solid  fa-2x fa-bars"></i><br></br><br></br>
                        <h1 style={{color:"rgb(201, 198, 198)"}} id="title">React Development</h1>
                        <p style={{color:"rgb(201, 198, 198)"}}> I create reusable UI components that efficiently update and render data changes. </p>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
                <br></br><br></br><br></br>
            
              
            </div>
            
        </div>
      </section>
     
    )
}
