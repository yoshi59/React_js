import styled from 'styled-components';
import React, { Component } from 'react';
import ImgBg from '../../images/ichika.jpg';


export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0,0,0,0.7),rgba(0,0,0,1)), url()(${ImgBg})
  url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;