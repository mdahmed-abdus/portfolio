import React from 'react';
import '../Footer/Footer.scss';

function Footer(props) {
  let year = new Date().getFullYear();
  return (
    <footer className="darkBg mt80 footerStyle flexVerticleCenter">
      @copyrights {year}
    </footer>
  );
}

export default Footer;
