import React from 'react';

class Footer extends React.Component{
  render() {
    return (
      <footer className="text-center">
          <ul>
              <li>
                  <a href="#">About Us</a>
              </li>
              <li>
                  <a href="#">Pricing</a>
              </li>
              <li>
                  <a href="#">Apps</a>
              </li>
              <li>
                  <a href="#">Jobs</a>
              </li>
              <li>
                  <a href="#">Blog</a>
              </li>
              <li>
                  <a href="#">Developers</a>
              </li>
              <li>
                  <a href="#">Help</a>
              </li>
              <li>
                  <a href="#">Legal</a>
              </li>
          </ul>
          <p>&copy; Copyright 2017, MadFlatter LLC. All rights
              reserved.</p>
      </footer>
    );
  }
}

export default Footer;
