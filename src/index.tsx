import React from "react";
import ReactDom from 'react-dom'
import GlobalStyled from "./styles/global";
import App from './App'


ReactDom.render(
<React.StrictMode>
    <App />
    <GlobalStyled/>
</React.StrictMode>,
  document.getElementById('root')
  )