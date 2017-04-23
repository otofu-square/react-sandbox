// @flow

import React from 'react'

import { ButtonToolbar } from 'react-bootstrap'
import {
  DefaultButton,
  PrimaryButton,
  SuccessButton,
  InfoButton,
  WarningButton,
  DangerButton,
  LinkButton,
} from './components/buttons'
import './App.css'

const App = () =>
  <div>
    <ButtonToolbar>
      <DefaultButton className="a" label="Default Button"/>
      <PrimaryButton className="a" label="Primary Button"/>
      <SuccessButton className="a" label="Success Button"/>
      <InfoButton className="a" label="Info Button"/>
      <WarningButton className="a" label="Warning Button"/>
      <DangerButton className="a" label="Danger Button"/>
      <LinkButton className="a" label="Link Button"/>
    </ButtonToolbar>
  </div>

export default App
