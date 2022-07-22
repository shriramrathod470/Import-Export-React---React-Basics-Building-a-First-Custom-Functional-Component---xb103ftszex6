import React, { Component, useState } from "react";
import '../styles/App.css';
import from './component/Heading'
import from './component/SubHeading'
import from './component/InputQuery'
import from './component/SubmitButton'
const App = () => {
  return (
    <div id="main">
      < Heading/>
      < SubHeading/>
      < InputQuery/>
      < SubmitButton/>
    </div>
  )
}


