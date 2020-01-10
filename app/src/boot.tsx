import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { connect, Provider } from "react-redux";
import { createStore, Dispatch } from 'redux';

const increment = () => ({ type: 'INCREMENT' });
const counterReducer =
    (state = 10, action: { type: string }) => (action.type === 'INCREMENT') ? state + 1 : state;

interface Props { count: number }
interface Actions { inc: () => {} };
class AppComponent extends React.Component<Props & Actions> {
    render = () =>
    (<>
        Count: {this.props.count}
        <button onClick={this.props.inc}>+</button>
    </>);
}
const mapStateToProps = (state: number) : Props => ({ count: state });
const mapDispatchToProps = (dispatch: Dispatch) => ({ inc: () => dispatch(increment()) });
const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
  
ReactDOM.render(
    <Provider store={createStore(counterReducer)}>
        <App />
    </Provider>,
    document.getElementById("root")
);
