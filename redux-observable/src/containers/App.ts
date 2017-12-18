import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { App, ViewProps, ActionProps } from '../components/App';
import { fetchRequest } from '../actions';
import { State } from '../types';

const mapStateToProps = ({ id, userId, title, body }: State): ViewProps => ({
  id,
  userId,
  title,
  body,
});

const mapDispatchToProps = (dispatch: Dispatch<State>): ActionProps => ({
  onClick: () => {
    dispatch(fetchRequest());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
