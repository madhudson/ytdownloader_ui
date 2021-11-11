import React, { useState } from 'react';

export const Nav = ({changeSelection}) => {
  const [selected, setSelected] = useState("download");

  const handleSelected = (val) => () => {
    setSelected(val);
    changeSelection(val);
  }

  const setClass = (val) => {
    return val === selected ? "nav-link px-2 link-secondary" : "nav-link px-2 link-dark";
  }

  return (
    <div className="container">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      
      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li onClick={handleSelected("download")}><a href="#" className={setClass("download")}>Download</a></li>
        <li onClick={handleSelected("videos")}><a href="#" className={setClass("videos")}>Videos</a></li>        
      </ul>

      
    </header>
  </div>
  )
}

export default Nav;