"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var radius = 175;
var diameter = Math.round(Math.PI * radius * 2);
var getOffset = function (val) {
    if (val === void 0) { val = 0; }
    return Math.round((100 - val) / 100 * diameter);
};
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Circle.prototype, "text", {
        get: function () {
            var _a = this.props, progress = _a.progress, showPercentage = _a.showPercentage, textColor = _a.textColor, textStyle = _a.textStyle, percentSpacing = _a.percentSpacing, showPercentageSymbol = _a.showPercentageSymbol;
            if (!showPercentage)
                return;
            return (React.createElement("text", { style: textStyle, fill: textColor, x: "50%", y: "50%", dx: "-25", textAnchor: "middle" },
                progress,
                showPercentageSymbol && React.createElement("tspan", { dx: percentSpacing }, "%")));
        },
        enumerable: true,
        configurable: true
    });
    Circle.prototype.render = function () {
        var text = this.text;
        var _a = this.props, progress = _a.progress, size = _a.size, bgColor = _a.bgColor, progressColor = _a.progressColor, lineWidth = _a.lineWidth, animate = _a.animate, animationDuration = _a.animationDuration, roundedStroke = _a.roundedStroke, responsive = _a.responsive;
        var strokeDashoffset = getOffset(progress);
        var transition = animate ? "stroke-dashoffset " + animationDuration + " ease-out" : null;
        var strokeLinecap = roundedStroke ? 'round' : 'butt';
        var svgSize = responsive ? '100%' : size;
        return (React.createElement("svg", { width: svgSize, height: svgSize, viewBox: "-25 -25 400 400" },
            React.createElement("circle", { stroke: bgColor, cx: "175", cy: "175", r: "175", strokeWidth: lineWidth, fill: "none" }),
            React.createElement("circle", { stroke: progressColor, transform: "rotate(-90 175 175)", cx: "175", cy: "175", r: "175", strokeDasharray: "1100", strokeWidth: lineWidth, strokeDashoffset: "1100", strokeLinecap: strokeLinecap, fill: "none", style: { strokeDashoffset: strokeDashoffset, transition: transition } }),
            text));
    };
    Circle.defaultProps = {
        progress: 0,
        animate: true,
        animationDuration: '1s',
        showPercentage: true,
        showPercentageSymbol: true,
        progressColor: 'rgb(76, 154, 255)',
        bgColor: '#ecedf0',
        textColor: '#6b778c',
        size: '100',
        lineWidth: '25',
        percentSpacing: 10,
        textStyle: { font: 'bold 4rem Helvetica, Arial, sans-serif' }
    };
    return Circle;
}(react_1.Component));
exports.Circle = Circle;
