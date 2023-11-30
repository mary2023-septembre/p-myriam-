import React from "react";
import Container from 'react-bootstrap/Container';
import home1 from '../assets/products/home/home1.jpg'
import home2 from '../assets/products/home/home1.jpg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import { Overlay } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import HomeMain from "./HomeMain";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Header from "./Header";
import Footer from "./Footer";
import HeaderH from "./HeaderH";
export default function Home() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  
  return (
  <>
  <HeaderH/>
<HomeMain/>

<Home3/>
<Footer/>
</>    
  )
}








