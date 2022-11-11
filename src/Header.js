import React, { useState } from 'react'
import '../src/css/header.css'



const Header = (props) => {
  console.log(props)
const {setShow}= props


  return (


    <header>
      <div class="container-fluid head">
        <div class="row ">
          <div class="col-md-3 ">
            <div class="logo">
              <img src='new.png'></img>
            </div>
          </div>
          {props.profileIcon ?
            <div class="col-md-9 icon">
              <img className="img" onClick={() => setShow(true)}
                src='avtar.jpg'></img>
              <i class="fa-solid fa-xmark icon" onClick={() => setShow(false)}></i>
            </div>
            :
             <>
            </>
          }
          {
          
        }

        </div>
      </div>
    </header>

  )
}
export default Header





