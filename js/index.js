var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var placeHolder = "# Hi, This is a header\n## This is a sub-header\n### Header of level 3\n#### Welcome to markdown\n*Some italic text*\n__some bold text__\nSome inline code: `printf(\"Hello World!\");`\n\n```js\n//Some block of code\nconsole.log(\"Markdown is fun\");\n```\n- bullet point 1\n- bullet point 2\n\n> created By [![twitter logo](https://twitter.com/favicon.ico) Rajat Kanti Nandi](https://twitter.com/rajatkantinandi)";
marked.setOptions({
  highlight: function highlight(code) {
    return hljs.highlightAuto(code).value;
  },
  breaks: true,
  gfm: true
});
var renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return "<a target=\"_blank\" href=\"" + href + "\">" + text + '</a>';
};

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      input: placeHolder
    };
    _this.handleInput = _this.handleInput.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "handleInput",
    value: function handleInput(event) {
      this.setState({
        input: event.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "app" },
        React.createElement(Editor, { onChange: this.handleInput, input: this.state.input }),
        React.createElement(Viewer, { input: this.state.input })
      );
    }
  }]);

  return App;
}(React.Component);

var Editor = function (_React$Component2) {
  _inherits(Editor, _React$Component2);

  function Editor(props) {
    _classCallCheck(this, Editor);

    return _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this, props));
  }

  _createClass(Editor, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "panel editor" },
        React.createElement(
          "div",
          { className: "title" },
          "Markdown Editor"
        ),
        React.createElement("textarea", {
          id: "editor",
          className: "textinput",
          value: this.props.input,
          onChange: this.props.onChange
        })
      );
    }
  }]);

  return Editor;
}(React.Component);

var Viewer = function (_React$Component3) {
  _inherits(Viewer, _React$Component3);

  function Viewer(props) {
    _classCallCheck(this, Viewer);

    return _possibleConstructorReturn(this, (Viewer.__proto__ || Object.getPrototypeOf(Viewer)).call(this, props));
  }

  _createClass(Viewer, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "panel viewer" },
        React.createElement(
          "div",
          { className: "title" },
          "Preview"
        ),
        React.createElement("div", {
          id: "preview",
          className: "preview",
          dangerouslySetInnerHTML: { __html: marked(this.props.input, { renderer: renderer }) }
        })
      );
    }
  }]);

  return Viewer;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.querySelector(".container"));