import React from 'react';

export class Provider extends React.Component {
  getChildContext(props) {
    return {
      store: props.store
    };
  }

  render() {
    return this.props.children;
  }
}

const bindDispatch = (dispatch) => (actionCreator) => (...args) => dispatch(actionCreator(...args));

const noOp = () => null;

export const connect = (mapStateProps = noOp, mapDispatchProps = noOp, mapStateAndDispatchProps = noOp) =>

  (Component) => {
    const ConnectedComponent = (ownProps, context) => {
      let dispatchProps;
      if (typeof mapDispatchProps === 'function') {
        dispatchProps = mapDispatchProps(bindDispatch(context.store.dispatch), ownProps);
      } else {
        dispatchProps = Object.entries(mapDispatchProps).reduce((dp, [key, value]) => Object.assign(dp, {
          [key]: bindDispatch(context.store.dispatch)(value)
        }));
      }

      const props = mapStateAndDispatchProps(
        mapStateProps(context.store.getState(), ownProps),
        dispatchProps,
        ownProps
      );

      return <Component {...props}/>;
    };

    ConnectedComponent.displayName = `connect(${Component.displayName})`;
    ConnectedComponent.contextTypes = {
      store: PropTypes.object.isRequired
    };

    return ConnectedComponent;
  };

MyConnectedComponent = connect(
  (state, ownProps) => {
    return {
      environment: state.environment,
    };
  },
  {
    setEnvironment
  }
)(MyComponent);

const MyComponent = (props) => {
  props.environment;
  props.setEnvironment('college');
  props.count
}

<MyConnectedComponent count={1}/>
