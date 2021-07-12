import React from "react";
import { Link, withRouter } from "react-router-dom";
import { AppBar, Toolbar, Grid } from "@material-ui/core";

function Navigation(props) {
  return (
    <div className="navigation">
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Link class="navbar-brand" style={{ color:"#ECECEC", fontSize:26}} to="/">
            HOME
          </Link>
          <Grid container direction="row" justifyContent="flex-end">
              <Link class="nav-link" style={{ color:"#ECECEC", fontSize:12}} to="/about">
                ABOUT
              </Link>
              <Link class="nav-link" style={{ color:"#ECECEC", fontSize:12}} to="/contact">
                CONTACT
              </Link>
          </Grid>
        </Toolbar> 
      </AppBar>
    </div>
  );
}

export default withRouter(Navigation);
