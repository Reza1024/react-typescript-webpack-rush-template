import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { increment } from './store';

interface Props {
  count: number
}

interface Actions {
  inc: () => {}
};

class AppComponent extends React.Component<Props & Actions> {
  render() {
    return (
      <>
        Count: {this.props.count}
        <button onClick={this.props.inc}>+</button>
      </>
    );
  }
}

const MapStateToProps = (state: number) : Props => ({
  count: state
});

const MapDispatchToProps = (dispatch: Dispatch) => ({
  inc: () => dispatch(increment())
});

export const App = connect(MapStateToProps, MapDispatchToProps)(AppComponent);
