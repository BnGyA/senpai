'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*const appRoot = document.getElementById('app');

const app = {
    title: 'Build it visible'
};

let spoiler = false;

const spoil = () => {
    spoiler = !spoiler;
    console.log(spoiler);
    render();
};

const render = () => {

    const template = (
      <div>
          <h1>{app.title}</h1>
          <button onClick={spoil}>{spoiler ? 'Hide' : 'Show'} details</button>
          //{<p>{spoiler ? 'Here are some details blahblah' : '' }</p>}
          {spoiler && (
              <p>Here are some spoil</p>
          )}
      </div>
    );

    ReactDOM.render(template, appRoot);
};

render();

*/

var Spoil = function (_React$Component) {
    _inherits(Spoil, _React$Component);

    function Spoil(props) {
        _classCallCheck(this, Spoil);

        var _this = _possibleConstructorReturn(this, (Spoil.__proto__ || Object.getPrototypeOf(Spoil)).call(this, props));

        _this.spoil = _this.spoil.bind(_this);
        _this.state = {
            spoiler: false
        };
        return _this;
    }

    _createClass(Spoil, [{
        key: 'spoil',
        value: function spoil() {
            this.setState(function (prevState) {
                return {
                    spoiler: !prevState.spoiler
                };
            });
            console.log(this.state);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Build it visible'
                ),
                React.createElement(
                    'button',
                    { onClick: this.spoil },
                    this.state.spoiler ? 'Hide' : 'Show'
                ),
                this.state.spoiler && React.createElement(
                    'p',
                    null,
                    'Here are some spoil'
                )
            );
        }
    }]);

    return Spoil;
}(React.Component);

ReactDOM.render(React.createElement(Spoil, null), document.getElementById('app'));
