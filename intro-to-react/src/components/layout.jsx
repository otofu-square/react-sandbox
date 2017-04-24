import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootswatch/journal/bootstrap.css'
import { Navbar, Grid } from 'react-bootstrap'

const Layout = (props) =>
  <div>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          React Simple Weather App
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
    <Grid>
      {props.children}
    </Grid>
  </div>

export default Layout
