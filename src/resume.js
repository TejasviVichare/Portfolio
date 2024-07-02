import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Resume() {

  const [activeSection, setActiveSection] = useState('education');

  const handleTabClick= (section) =>{
    setActiveSection(section);
  }



    return (
        <section>
            <div className="resume w-100">
                <div className="container">
                    <br></br><br></br>
                    <div className="row justify-content-center" id="first-row">
                        <div className="col">
                            <p id="features-title">1 YEAR OF EXPERIENCE</p>
                            <h1 style={{ color: "rgb(201, 198, 198)" }}>My Resume</h1>
                        </div>
                    </div>

                    <div className="row resume-list justify-content-center">
                        <div className="col-md-12 justify-content-center">
                            <ul className="justify-content-center">
                                <li id="education-id"><a onClick={() => handleTabClick('education')}>Education</a></li>
                                <li id="experience-id"><a onClick={() => handleTabClick('experience')} >Experience</a></li> 
                                <li id="professional-id"><a onClick={() => handleTabClick('professional')} >Professional Skills</a></li>                           
                                <li id="Certificates-id"><a onClick={() => handleTabClick('certificates')}>Certificates</a></li>

                            </ul>
                        </div>
                    </div>
                    


                    <div className="row education" id="education"  style={{display: activeSection === 'education' ? 'block' : 'none'}}>
                        <div className="col-md-12">
                            <div className="row" style={{ marginTop: '60px' }}>
                                <div className="col-md-12">
                                    <p id="features-title" style={{color:'#ff014f'}}>2016 - 2022</p>
                                    <h1 style={{ color: "rgb(201, 198, 198)" }}>Education Quality</h1>
                                    <div className="education-main">

                                        <div className="education-main1">
                                            <div style={{ width: '50px', height: '80px', }} id="div1">
                                             <div className="inner-div">
                                                <div id="span1">
                                                    <center>
                                                      <div id="span2"></div>
                                                    </center>
                                                </div>                                               
                                             </div>                                              
                                            </div>
                                            <div  className="education-main2">
                                                <h3 style={{fontSize:'30px', fontWeight:'600'}}>Bachelor of Science in Information Technology</h3> <br></br>
                                                <p style={{fontSize:'16px',fontWeight:'600'}}>University of Mumbai</p><br></br>
                                                <p style={{fontSize:'16px',fontWeight:'600'}}>2019 - 2022</p><br></br>
                                                <p style={{fontSize:'16px',fontWeight:'600'}}>Institute Of Computer Science And Information Technology, Sawarde</p><br></br>
                                                <p style={{fontSize:'16px',fontWeight:'600'}}>CGPA: 9.37</p>
                                            </div>
                                        </div>

                                        <div className="education-main1">
                                            <div style={{ width: '50px', height: '80px', }} id="div1">
                                             <div className="inner-div">
                                                <div id="span1">
                                                    <center>
                                                      <div id="span2"></div>
                                                    </center>
                                                </div>                                               
                                             </div>                                              
                                            </div>
                                            <div  className="education-main2">
                                                <h3 style={{fontSize:'30px', fontWeight:'600'}}>Higher Secondary School</h3>  <br></br>
                                                <p style={{fontSize:'16px',fontWeight:'600'}}>Konkan Board</p><br></br>
                                                <p style={{fontSize:'16px',fontWeight:'600'}}>2018 - 2019</p><br></br>
                                                <p style={{fontSize:'16px',fontWeight:'600'}}>Govindrao Nikam Secondary & Higher Secondary School, Sawarde &nbsp;&nbsp;&nbsp;&nbsp;</p><br></br>
                                                <p style={{fontSize:'16px',fontWeight:'600'}}>Percentage : 60.62 %</p>
                                            </div>
                                        </div>


                                        <div className="education-main1">
                                            <div style={{ width: '50px', height: '80px', }} id="div1">
                                             <div className="inner-div">
                                                <div id="span1">
                                                    <center>
                                                      <div id="span2"></div>
                                                    </center>
                                                </div>                                               
                                             </div>                                              
                                            </div>
                                            <div  className="education-main2">
                                            <h3 style={{fontSize:'30px', fontWeight:'600'}}> Secondary School</h3>  <br></br>
                                                <p style={{fontSize:'16px',fontWeight:'600'}}>Konkan Board</p><br></br>
                                                <p style={{fontSize:'16px',fontWeight:'600'}}>2016 – 2017</p><br></br>
                                                <p style={{fontSize:'16px',fontWeight:'600'}}>Govindrao Nikam Secondary & Higher Secondary School, Sawarde &nbsp;&nbsp;&nbsp;&nbsp;</p><br></br>
                                                <p style={{fontSize:'16px',fontWeight:'600'}}> Percentage : 91.60 %</p>
                                            </div>
                                        </div>
                                     
                                    </div>


                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                    <div className="row" id="experience" style={{display: activeSection === 'experience' ? 'block' : 'none', transition: '4s'}}>
                    <div className="col-md-12">
                        <br />
                                    <p id="features-title" style={{color:'#ff014f'}}>May 2023 - Present</p>
                                    <h1 style={{ color: "rgb(201, 198, 198)" }}>Job Experience</h1>

                                         <div className="education-main">

                                        <div className="education-main1">
                                            <div style={{ width: '50px', height: '80px', }} id="div1">
                                             <div className="inner-div">
                                                <div id="span1">
                                                    <center>
                                                      <div id="span2"></div>
                                                    </center>
                                                </div>                                               
                                             </div>                                              
                                            </div>
                                            <div  className="education-main2">
                                                <h3 style={{fontSize:'30px', fontWeight:'600'}}>Worldex India Exhibition & Promotion Pvt. Ltd.</h3>   <br></br>
                                                <p style={{fontSize:'16px',fontWeight:'600',marginBottom:'5px'}}>Web Developer</p>
                                                <p style={{fontSize:'16px',fontWeight:'600'}}>&#x2022; Developed responsive and user-friendly web applications using HTML5, CSS3, and JavaScript.</p>
                                                <p style={{fontSize:'16px',fontWeight:'600'}}>&#x2022; Utilized frameworks such as React.js for building interactive and dynamic user interfaces.</p>
                                                <p style={{fontSize:'16px',fontWeight:'600'}}>&#x2022; Maintained front-end web applications, resulting in a 20 % reduction in page load speeds.</p>

                                         
                                         
                                            </div>
                                        </div>

                                        {/* <div className="education-main1">
                                            <div style={{ width: '50px', height: '80px', }} id="div1">
                                             <div className="inner-div">
                                                <div id="span1">
                                                    <center>
                                                      <div id="span2"></div>
                                                    </center>
                                                </div>                                               
                                             </div>                                              
                                            </div>
                                            <div  className="education-main2">
                                                <h3 style={{fontSize:'30px', fontWeight:'600'}}>BSc in Computer Science</h3>  
                                                <p style={{fontSize:'13px',fontWeight:'600'}}>University of DVI (2006 - 2010)</p><br></br><br></br>
                                                <p style={{fontSize:'17px',fontWeight:'600'}}>The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.</p>
                                            </div>
                                        </div>


                                        <div className="education-main1">
                                            <div style={{ width: '50px', height: '80px', }} id="div1">
                                             <div className="inner-div">
                                                <div id="span1">
                                                    <center>
                                                      <div id="span2"></div>
                                                    </center>
                                                </div>                                               
                                             </div>                                              
                                            </div>
                                            <div  className="education-main2">
                                                <h3 style={{fontSize:'30px', fontWeight:'600'}}>BSc in Computer Science</h3>  
                                                <p style={{fontSize:'13px',fontWeight:'600'}}>University of DVI (2006 - 2010)</p><br></br><br></br>
                                                <p style={{fontSize:'17px',fontWeight:'600'}}>The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.</p>
                                            </div>
                                        </div> */}
                                     
                                    </div>

                                </div>
                    </div>
                    <div className="row" id="Professional-Skills" style={{display: activeSection === 'professional' ? 'block' : 'none', transition: '4s'}}>
                        <div className="col-md-12">
                            <div className="row text-center" style={{ marginTop: '60px' }}>
                                <div className="col">
                                    <p style={{color:'#ff014f'}}>FEATURES</p>
                                    <h1 style={{ color: "rgb(201, 198, 198)",fontSize:'40px',fontWeight:'bold' }}>Development Skill</h1>
                                    
                                    <div className="row text-left justify-content-center">
                                        <div className="col-md-8">
                                            <p style={{fontSize:'21px'}}>REACT</p>
                                            <br></br>
                                            <div id="react-span">
                                                <div id="react-span-inner"> 

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row text-left justify-content-center">
                                        <div className="col-md-8">
                                            <p style={{fontSize:'21px'}}>HTML 5</p>
                                            <br></br>
                                            <div id="react-span">
                                                 <div id="html-span-inner"> 

                                                 </div>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="row text-left justify-content-center">
                                        <div className="col-md-8">
                                            <p style={{fontSize:'21px'}}>CSS3</p>
                                            <br></br>
                                            <div id="react-span">
                                                <div id="css-span-inner"> 

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row text-left justify-content-center">
                                        <div className="col-md-8">
                                            <p style={{fontSize:'21px'}}>JAVASCRIPT</p>
                                            <br></br>
                                            <div id="react-span">
                                              <div id="javascript-span-inner"> 

                                              </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row text-left justify-content-center">
                                        <div className="col-md-8">
                                            <p style={{fontSize:'21px'}}>Bootstrap</p>
                                            <br></br>
                                            <div id="react-span">
                                              <div id="Bootstrap-span-inner"> 

                                              </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              
                            </div>
                        </div>
                    </div>

                    {/* Certificates */}
                    <div className="row education" id="Certificates" style={{display: activeSection === 'certificates' ? 'block' : 'none'}}>
                        <div className="col-md-12">
                            <div className="row" style={{ marginTop: '60px' }}>
                                <div className="col-md-12">
                                    
                                    <h1 style={{ color: "rgb(201, 198, 198)" }}>Certificates &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                                    <div className="education-main">

                                        <div className="education-main1">
                                            <div style={{ width: '50px', height: '80px', }} id="div1">
                                             <div className="inner-div">
                                                <div id="span1">
                                                    <center>
                                                      <div id="span2"></div>
                                                    </center>
                                                </div>                                               
                                             </div>                                              
                                            </div>
                                            <div  className="education-main2">
                                                <h3 style={{fontSize:'30px', fontWeight:'600'}}>Full Stack Development</h3>  <br></br>
                                                <p style={{fontSize:'17px',fontWeight:'600'}}>Quastech Institute </p><br></br>
                                               <Link to="https://drive.google.com/file/d/1fILMOQ83jotMS6BTQrgdSLryiA6IUSSC/view"> <p style={{fontSize:'17px',fontWeight:'600'}}>View Certificate</p></Link>
                                            </div>
                                        </div>

                                        <div className="education-main1">
                                            <div style={{ width: '50px', height: '80px', }} id="div1">
                                             <div className="inner-div">
                                                <div id="span1">
                                                    <center>
                                                      <div id="span2"></div>
                                                    </center>
                                                </div>                                               
                                             </div>                                              
                                            </div>
                                            <div  className="education-main2">
                                                <h3 style={{fontSize:'30px', fontWeight:'600'}}>Learn To Code For The Web </h3>  <br></br>
                                                <p style={{fontSize:'17px',fontWeight:'600'}}>FutureLearn  </p><br></br>
                                               <Link to="https://drive.google.com/file/d/1F4cGbxQ_LLcwORY2LxorNvyICEfnOf-6/view?usp=drive_link"> <p style={{fontSize:'17px',fontWeight:'600'}}>View Certificate</p></Link>
                                            </div>
                                        </div>
                                     
                                    </div>


                                </div>
                                {/* <div className="col-md-6">
                                    <p id="features-title" style={{color:'#ff014f'}}>&nbsp;</p>
                                    <h1 style={{ color: "rgb(201, 198, 198)" }}></h1>

                                         <div className="education-main">

                                        <div className="education-main1">
                                            <div style={{ width: '50px', height: '80px', }} id="div1">
                                             <div className="inner-div">
                                                <div id="span1">
                                                    <center>
                                                      <div id="span2"></div>
                                                    </center>
                                                </div>                                               
                                             </div>                                              
                                            </div>
                                            <div  className="education-main2">
                                                <h3 style={{fontSize:'30px', fontWeight:'600'}}>BSc in Computer Science</h3>  
                                                <p style={{fontSize:'13px',fontWeight:'600'}}>University of DVI (2006 - 2010)</p><br></br><br></br>
                                                <p style={{fontSize:'17px',fontWeight:'600'}}>The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.</p>
                                            </div>
                                        </div>

                                        <div className="education-main1">
                                            <div style={{ width: '50px', height: '80px', }} id="div1">
                                             <div className="inner-div">
                                                <div id="span1">
                                                    <center>
                                                      <div id="span2"></div>
                                                    </center>
                                                </div>                                               
                                             </div>                                              
                                            </div>
                                            <div  className="education-main2">
                                                <h3 style={{fontSize:'30px', fontWeight:'600'}}>BSc in Computer Science</h3>  
                                                <p style={{fontSize:'13px',fontWeight:'600'}}>University of DVI (2006 - 2010)</p><br></br><br></br>
                                                <p style={{fontSize:'17px',fontWeight:'600'}}>The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.</p>
                                            </div>
                                        </div>


                                        <div className="education-main1">
                                            <div style={{ width: '50px', height: '80px', }} id="div1">
                                             <div className="inner-div">
                                                <div id="span1">
                                                    <center>
                                                      <div id="span2"></div>
                                                    </center>
                                                </div>                                               
                                             </div>                                              
                                            </div>
                                            <div  className="education-main2">
                                                <h3 style={{fontSize:'30px', fontWeight:'600'}}>BSc in Computer Science</h3>  
                                                <p style={{fontSize:'13px',fontWeight:'600'}}>University of DVI (2006 - 2010)</p><br></br><br></br>
                                                <p style={{fontSize:'17px',fontWeight:'600'}}>The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.</p>
                                            </div>
                                        </div>
                                     
                                    </div>

                                </div> */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )

  
}

