import React from 'react';
import {Link} from 'react-router-dom';
import { PageHeaderLogo } from './svg/logos';
import './fonts.css';
import './main.css';

export const HomePage = () => (
  <html lang="en">
    <head>
      <title>Home Page</title>
    </head>
    <body data-rendering-name="Homepage">
      <div className="wrapper">
        <header>
          <PageHeaderLogo />
          <h1>######</h1>
        </header>
        <content>
          <h1>???????</h1>
        </content>
        <footer>
          <h1>!!!!!!!!</h1>
        </footer>
      </div>
    </body>
  </html>
);
