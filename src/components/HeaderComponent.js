import React, { Component } from "react";
import { Navbar, NavbarBrand, Jumbotron } from "reactstrap";

class Header extends Component {
  //   render() {
  //     return (
  //       <React.Fragment>
  //         <Navbar dark expand="sm" fixed="top">
  //           <div className="container">
  //             <NavbarBrand href="/">
  //               <img src={logo} alt={title} height="30" width="41" />
  //             </NavbarBrand>
  //           </div>
  //         </Navbar>
  //         <Jumbotron>
  //             <div className="container">
  //                 <div className="row row-header">
  //                     <div className="col-12 col-sm-6">
  //                         <h1>Ristorante Con Fusion</h1>
  //                         <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Or lipsmacking will tickle your culinary senses!</p>
  //                     </div>
  //                 </div>
  //             </div>
  //         </Jumbotron>
  //       </React.Fragment>
  //     );
  //   }

  render() {
    const logo = "./assets/images/logo.png";
    const title = "Ristorante Con Fusion";

    return (
      <React.Fragment>
        {/* navbar */}
        <Navbar dark>
          <div className="container">
            <NavbarBrand href="/" title={title}>
              <img src={logo} alt={title} height="30" width="41" /> {title}
            </NavbarBrand>
          </div>
        </Navbar>
        {/* ./navbar */}
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Ristorante Con Fusion</h1>
                <p>
                  We take inspiration from the World's best cuisines, and create
                  a unique fusion experience. Or lipsmacking will tickle your
                  culinary senses!
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default Header;
