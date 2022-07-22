import React, { Component, useState } from "react";
import '../styles/App.css';
import from './components/Heading'
import from './components/SubHeading'
import from './components/InputQuery'
import from './components/SubmitButton'
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


