/* eslint-env browser */
var isNode = typeof module !== 'undefined' && module.exports
  , React = isNode ? require('react') : window.React
  , ReactDOM = isNode ? require('react-dom') : window.ReactDOM;

class ReactApp extends React.Component {
  render () {
    return (
      <div>
        <p>
          Loaded from react.
        </p>
      </div>
    );
  }

  componentDidMount() {
    console.log('JS executed');
  }
}

if (!isNode.__esModule) {
  exports.ReactApp = ReactApp;
} else {
  var name = window.INIT_PROPS.name;
  ReactDOM.render(<ReactApp name={name} />, document.getElementById('mount'));
}

export default ReactApp;
