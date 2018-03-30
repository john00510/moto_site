import React from 'react';
import {Link} from 'react-router-dom';
import { PageHeaderLogo } from './svg/logos';
import './fonts.css';
import './main.css';

export const HomePage = () => (
  <html lang="en">
    <head>
      <title></title>
    </head>
    <body data-rendering-name="Homepage">
      <div className="wrapper">
        <header>
          <PageHeaderLogo />
        </header>
        <content>

        </content>
        <footer>

        </footer>
      </div>
    </body>
  </html>
);
