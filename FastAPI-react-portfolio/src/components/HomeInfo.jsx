import React from 'react'


const renderContent = {
  1: (
    <div>
      <h1>Hi, I'm John Doe</h1>
      <p>
        I'm a full-stack developer with a passion for building beautiful and functional web applications.
      </p>
    </div>
  ),
  2: (
    <div>
      <h1>My Skills</h1>
      <p>
        I have experience with a wide range of technologies including React, Node.js, and MongoDB.
      </p>
    </div>
  ),
  3: (
    <div>
      <h1>My Projects</h1>
      <p>
        Check out some of my projects below!
      </p>
    </div>
  ),
  4: (
    <h1>Contact Me</h1>
  ),
  

}
const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage]  (
    <div>HomeInfo</div>
  )
}

export default HomeInfo