import React from 'react';
import './Sidebar.css'; 
const Sidebar = () => {
  return (
    <aside>
        <div className="sidebar-contentt">
      <div className="sidebar-content">
        <img src="FB_IMG_1651957779603.jpg" alt="Profile" />
        <div>
          <h3 className='h3'>EDICHA JULIUS</h3>
          <p className='h3'>Frontend Developer</p>   
        </div>
        

      </div>
      <div className="sidebar-sections">
        <h3>Skills</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
        </ul>
        <h3>Projects</h3>
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
        </ul>

      </div>
      </div>
    </aside>
  );
};

export default Sidebar;