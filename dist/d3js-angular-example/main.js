(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/01_line_chart/line-chart.component.css":
/*!********************************************************!*\
  !*** ./src/app/01_line_chart/line-chart.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".axis {\n    font: 10px sans-serif;\n}\n\n.axis path,\n.axis line {\n    fill: none;\n    stroke: #000;\n    shape-rendering: crispEdges;\n}\n\n.axis-title {\n    fill: none;\n    stroke: black;\n    stroke-width: 0.5px;\n}\n\n.axis--x path {\n    /*display: none;*/\n}\n\n.line {\n    fill: none;\n    stroke: steelblue;\n    stroke-width: 1.5px;\n}\n"

/***/ }),

/***/ "./src/app/01_line_chart/line-chart.component.html":
/*!*********************************************************!*\
  !*** ./src/app/01_line_chart/line-chart.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{ title }}</h2>\n<svg width=\"900\" height=\"500\"></svg>\n<form>\n    <label><input type=\"radio\" name=\"mode\" value=\"sumBySize\" checked> Size</label>\n    <label><input type=\"radio\" name=\"mode\" value=\"sumByCount\"> Count</label>\n  </form>"

/***/ }),

/***/ "./src/app/01_line_chart/line-chart.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/01_line_chart/line-chart.component.ts ***!
  \*******************************************************/
/*! exports provided: LineChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChartComponent", function() { return LineChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/index.js");
/* harmony import */ var d3_axis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-axis */ "./node_modules/d3-axis/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LineChartComponent = /** @class */ (function () {
    function LineChartComponent() {
        this.title = 'Treemap Template';
        this.margin = { top: 20, right: 20, bottom: 30, left: 50 };
    }
    LineChartComponent.prototype.ngOnInit = function () {
        this.initAxis();
    };
    LineChartComponent.prototype.initSvg = function () {
        this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]('svg')
            .append('g')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
    };
    // private initAxis() {
    //     this.x = d3Scale.scaleTime().range([0, this.width]);
    //     this.y = d3Scale.scaleLinear().range([this.height, 0]);
    //     this.x.domain(d3Array.extent(STOCKS, (d) => d.date ));
    //     this.y.domain(d3Array.extent(STOCKS, (d) => d.value ));
    // }
    LineChartComponent.prototype.initAxis = function () {
        var svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]("svg");
        this.width = +svg.attr("width"),
            this.height = +svg.attr("height");
        var fader = function (color) { return d3__WEBPACK_IMPORTED_MODULE_1__["interpolateRgb"](color, "#fff")(0.2); }, color = d3__WEBPACK_IMPORTED_MODULE_1__["scaleOrdinal"](d3__WEBPACK_IMPORTED_MODULE_1__["schemeCategory10"].map(fader)), format = d3__WEBPACK_IMPORTED_MODULE_1__["format"](",d");
        var treemap = d3__WEBPACK_IMPORTED_MODULE_1__["treemap"]()
            .tile(d3__WEBPACK_IMPORTED_MODULE_1__["treemapResquarify"])
            .size([this.width, this.height])
            .round(true)
            .paddingInner(1);
        // d3.json("flare.json", function(error, data) {
        //   if (error) throw error;
        // debugger
        var data = {
            "name": "flare",
            "children": [
                {
                    "name": "analytics",
                    "children": [
                        {
                            "name": "cluster",
                            "children": [
                                { "name": "AgglomerativeCluster", "size": 3938 },
                                { "name": "CommunityStructure", "size": 3812 },
                                { "name": "HierarchicalCluster", "size": 6714 },
                                { "name": "MergeEdge", "size": 743 }
                            ]
                        },
                        {
                            "name": "graph",
                            "children": [
                                { "name": "BetweennessCentrality", "size": 3534 },
                                { "name": "LinkDistance", "size": 5731 },
                                { "name": "MaxFlowMinCut", "size": 7840 },
                                { "name": "ShortestPaths", "size": 5914 },
                                { "name": "SpanningTree", "size": 3416 }
                            ]
                        },
                        {
                            "name": "optimization",
                            "children": [
                                { "name": "AspectRatioBanker", "size": 7074 }
                            ]
                        }
                    ]
                },
                {
                    "name": "animate",
                    "children": [
                        { "name": "Easing", "size": 17010 },
                        { "name": "FunctionSequence", "size": 5842 },
                        {
                            "name": "interpolate",
                            "children": [
                                { "name": "ArrayInterpolator", "size": 1983 },
                                { "name": "ColorInterpolator", "size": 2047 },
                                { "name": "DateInterpolator", "size": 1375 },
                                { "name": "Interpolator", "size": 8746 },
                                { "name": "MatrixInterpolator", "size": 2202 },
                                { "name": "NumberInterpolator", "size": 1382 },
                                { "name": "ObjectInterpolator", "size": 1629 },
                                { "name": "PointInterpolator", "size": 1675 },
                                { "name": "RectangleInterpolator", "size": 2042 }
                            ]
                        },
                        { "name": "ISchedulable", "size": 1041 },
                        { "name": "Parallel", "size": 5176 },
                        { "name": "Pause", "size": 449 },
                        { "name": "Scheduler", "size": 5593 },
                        { "name": "Sequence", "size": 5534 },
                        { "name": "Transition", "size": 9201 },
                        { "name": "Transitioner", "size": 19975 },
                        { "name": "TransitionEvent", "size": 1116 },
                        { "name": "Tween", "size": 6006 }
                    ]
                },
                {
                    "name": "data",
                    "children": [
                        {
                            "name": "converters",
                            "children": [
                                { "name": "Converters", "size": 721 },
                                { "name": "DelimitedTextConverter", "size": 4294 },
                                { "name": "GraphMLConverter", "size": 9800 },
                                { "name": "IDataConverter", "size": 1314 },
                                { "name": "JSONConverter", "size": 2220 }
                            ]
                        },
                        { "name": "DataField", "size": 1759 },
                        { "name": "DataSchema", "size": 2165 },
                        { "name": "DataSet", "size": 586 },
                        { "name": "DataSource", "size": 3331 },
                        { "name": "DataTable", "size": 772 },
                        { "name": "DataUtil", "size": 3322 }
                    ]
                },
                {
                    "name": "display",
                    "children": [
                        { "name": "DirtySprite", "size": 8833 },
                        { "name": "LineSprite", "size": 1732 },
                        { "name": "RectSprite", "size": 3623 },
                        { "name": "TextSprite", "size": 10066 }
                    ]
                },
                {
                    "name": "flex",
                    "children": [
                        { "name": "FlareVis", "size": 4116 }
                    ]
                },
                {
                    "name": "physics",
                    "children": [
                        { "name": "DragForce", "size": 1082 },
                        { "name": "GravityForce", "size": 1336 },
                        { "name": "IForce", "size": 319 },
                        { "name": "NBodyForce", "size": 10498 },
                        { "name": "Particle", "size": 2822 },
                        { "name": "Simulation", "size": 9983 },
                        { "name": "Spring", "size": 2213 },
                        { "name": "SpringForce", "size": 1681 }
                    ]
                },
                {
                    "name": "query",
                    "children": [
                        { "name": "AggregateExpression", "size": 1616 },
                        { "name": "And", "size": 1027 },
                        { "name": "Arithmetic", "size": 3891 },
                        { "name": "Average", "size": 891 },
                        { "name": "BinaryExpression", "size": 2893 },
                        { "name": "Comparison", "size": 5103 },
                        { "name": "CompositeExpression", "size": 3677 },
                        { "name": "Count", "size": 781 },
                        { "name": "DateUtil", "size": 4141 },
                        { "name": "Distinct", "size": 933 },
                        { "name": "Expression", "size": 5130 },
                        { "name": "ExpressionIterator", "size": 3617 },
                        { "name": "Fn", "size": 3240 },
                        { "name": "If", "size": 2732 },
                        { "name": "IsA", "size": 2039 },
                        { "name": "Literal", "size": 1214 },
                        { "name": "Match", "size": 3748 },
                        { "name": "Maximum", "size": 843 },
                        {
                            "name": "methods",
                            "children": [
                                { "name": "add", "size": 593 },
                                { "name": "and", "size": 330 },
                                { "name": "average", "size": 287 },
                                { "name": "count", "size": 277 },
                                { "name": "distinct", "size": 292 },
                                { "name": "div", "size": 595 },
                                { "name": "eq", "size": 594 },
                                { "name": "fn", "size": 460 },
                                { "name": "gt", "size": 603 },
                                { "name": "gte", "size": 625 },
                                { "name": "iff", "size": 748 },
                                { "name": "isa", "size": 461 },
                                { "name": "lt", "size": 597 },
                                { "name": "lte", "size": 619 },
                                { "name": "max", "size": 283 },
                                { "name": "min", "size": 283 },
                                { "name": "mod", "size": 591 },
                                { "name": "mul", "size": 603 },
                                { "name": "neq", "size": 599 },
                                { "name": "not", "size": 386 },
                                { "name": "or", "size": 323 },
                                { "name": "orderby", "size": 307 },
                                { "name": "range", "size": 772 },
                                { "name": "select", "size": 296 },
                                { "name": "stddev", "size": 363 },
                                { "name": "sub", "size": 600 },
                                { "name": "sum", "size": 280 },
                                { "name": "update", "size": 307 },
                                { "name": "variance", "size": 335 },
                                { "name": "where", "size": 299 },
                                { "name": "xor", "size": 354 },
                                { "name": "_", "size": 264 }
                            ]
                        },
                        { "name": "Minimum", "size": 843 },
                        { "name": "Not", "size": 1554 },
                        { "name": "Or", "size": 970 },
                        { "name": "Query", "size": 13896 },
                        { "name": "Range", "size": 1594 },
                        { "name": "StringUtil", "size": 4130 },
                        { "name": "Sum", "size": 791 },
                        { "name": "Variable", "size": 1124 },
                        { "name": "Variance", "size": 1876 },
                        { "name": "Xor", "size": 1101 }
                    ]
                },
                {
                    "name": "scale",
                    "children": [
                        { "name": "IScaleMap", "size": 2105 },
                        { "name": "LinearScale", "size": 1316 },
                        { "name": "LogScale", "size": 3151 },
                        { "name": "OrdinalScale", "size": 3770 },
                        { "name": "QuantileScale", "size": 2435 },
                        { "name": "QuantitativeScale", "size": 4839 },
                        { "name": "RootScale", "size": 1756 },
                        { "name": "Scale", "size": 4268 },
                        { "name": "ScaleType", "size": 1821 },
                        { "name": "TimeScale", "size": 5833 }
                    ]
                },
                {
                    "name": "util",
                    "children": [
                        { "name": "Arrays", "size": 8258 },
                        { "name": "Colors", "size": 10001 },
                        { "name": "Dates", "size": 8217 },
                        { "name": "Displays", "size": 12555 },
                        { "name": "Filter", "size": 2324 },
                        { "name": "Geometry", "size": 10993 },
                        {
                            "name": "heap",
                            "children": [
                                { "name": "FibonacciHeap", "size": 9354 },
                                { "name": "HeapNode", "size": 1233 }
                            ]
                        },
                        { "name": "IEvaluable", "size": 335 },
                        { "name": "IPredicate", "size": 383 },
                        { "name": "IValueProxy", "size": 874 },
                        {
                            "name": "math",
                            "children": [
                                { "name": "DenseMatrix", "size": 3165 },
                                { "name": "IMatrix", "size": 2815 },
                                { "name": "SparseMatrix", "size": 3366 }
                            ]
                        },
                        { "name": "Maths", "size": 17705 },
                        { "name": "Orientation", "size": 1486 },
                        {
                            "name": "palette",
                            "children": [
                                { "name": "ColorPalette", "size": 6367 },
                                { "name": "Palette", "size": 1229 },
                                { "name": "ShapePalette", "size": 2059 },
                                { "name": "SizePalette", "size": 2291 }
                            ]
                        },
                        { "name": "Property", "size": 5559 },
                        { "name": "Shapes", "size": 19118 },
                        { "name": "Sort", "size": 6887 },
                        { "name": "Stats", "size": 6557 },
                        { "name": "Strings", "size": 22026 }
                    ]
                },
                {
                    "name": "vis",
                    "children": [
                        {
                            "name": "axis",
                            "children": [
                                { "name": "Axes", "size": 1302 },
                                { "name": "Axis", "size": 24593 },
                                { "name": "AxisGridLine", "size": 652 },
                                { "name": "AxisLabel", "size": 636 },
                                { "name": "CartesianAxes", "size": 6703 }
                            ]
                        },
                        {
                            "name": "controls",
                            "children": [
                                { "name": "AnchorControl", "size": 2138 },
                                { "name": "ClickControl", "size": 3824 },
                                { "name": "Control", "size": 1353 },
                                { "name": "ControlList", "size": 4665 },
                                { "name": "DragControl", "size": 2649 },
                                { "name": "ExpandControl", "size": 2832 },
                                { "name": "HoverControl", "size": 4896 },
                                { "name": "IControl", "size": 763 },
                                { "name": "PanZoomControl", "size": 5222 },
                                { "name": "SelectionControl", "size": 7862 },
                                { "name": "TooltipControl", "size": 8435 }
                            ]
                        },
                        {
                            "name": "data",
                            "children": [
                                { "name": "Data", "size": 20544 },
                                { "name": "DataList", "size": 19788 },
                                { "name": "DataSprite", "size": 10349 },
                                { "name": "EdgeSprite", "size": 3301 },
                                { "name": "NodeSprite", "size": 19382 },
                                {
                                    "name": "render",
                                    "children": [
                                        { "name": "ArrowType", "size": 698 },
                                        { "name": "EdgeRenderer", "size": 5569 },
                                        { "name": "IRenderer", "size": 353 },
                                        { "name": "ShapeRenderer", "size": 2247 }
                                    ]
                                },
                                { "name": "ScaleBinding", "size": 11275 },
                                { "name": "Tree", "size": 7147 },
                                { "name": "TreeBuilder", "size": 9930 }
                            ]
                        },
                        {
                            "name": "events",
                            "children": [
                                { "name": "DataEvent", "size": 2313 },
                                { "name": "SelectionEvent", "size": 1880 },
                                { "name": "TooltipEvent", "size": 1701 },
                                { "name": "VisualizationEvent", "size": 1117 }
                            ]
                        },
                        {
                            "name": "legend",
                            "children": [
                                { "name": "Legend", "size": 20859 },
                                { "name": "LegendItem", "size": 4614 },
                                { "name": "LegendRange", "size": 10530 }
                            ]
                        },
                        {
                            "name": "operator",
                            "children": [
                                {
                                    "name": "distortion",
                                    "children": [
                                        { "name": "BifocalDistortion", "size": 4461 },
                                        { "name": "Distortion", "size": 6314 },
                                        { "name": "FisheyeDistortion", "size": 3444 }
                                    ]
                                },
                                {
                                    "name": "encoder",
                                    "children": [
                                        { "name": "ColorEncoder", "size": 3179 },
                                        { "name": "Encoder", "size": 4060 },
                                        { "name": "PropertyEncoder", "size": 4138 },
                                        { "name": "ShapeEncoder", "size": 1690 },
                                        { "name": "SizeEncoder", "size": 1830 }
                                    ]
                                },
                                {
                                    "name": "filter",
                                    "children": [
                                        { "name": "FisheyeTreeFilter", "size": 5219 },
                                        { "name": "GraphDistanceFilter", "size": 3165 },
                                        { "name": "VisibilityFilter", "size": 3509 }
                                    ]
                                },
                                { "name": "IOperator", "size": 1286 },
                                {
                                    "name": "label",
                                    "children": [
                                        { "name": "Labeler", "size": 9956 },
                                        { "name": "RadialLabeler", "size": 3899 },
                                        { "name": "StackedAreaLabeler", "size": 3202 }
                                    ]
                                },
                                {
                                    "name": "layout",
                                    "children": [
                                        { "name": "AxisLayout", "size": 6725 },
                                        { "name": "BundledEdgeRouter", "size": 3727 },
                                        { "name": "CircleLayout", "size": 9317 },
                                        { "name": "CirclePackingLayout", "size": 12003 },
                                        { "name": "DendrogramLayout", "size": 4853 },
                                        { "name": "ForceDirectedLayout", "size": 8411 },
                                        { "name": "IcicleTreeLayout", "size": 4864 },
                                        { "name": "IndentedTreeLayout", "size": 3174 },
                                        { "name": "Layout", "size": 7881 },
                                        { "name": "NodeLinkTreeLayout", "size": 12870 },
                                        { "name": "PieLayout", "size": 2728 },
                                        { "name": "RadialTreeLayout", "size": 12348 },
                                        { "name": "RandomLayout", "size": 870 },
                                        { "name": "StackedAreaLayout", "size": 9121 },
                                        { "name": "TreeMapLayout", "size": 9191 }
                                    ]
                                },
                                { "name": "Operator", "size": 2490 },
                                { "name": "OperatorList", "size": 5248 },
                                { "name": "OperatorSequence", "size": 4190 },
                                { "name": "OperatorSwitch", "size": 2581 },
                                { "name": "SortOperator", "size": 2023 }
                            ]
                        },
                        { "name": "Visualization", "size": 16540 }
                    ]
                }
            ]
        };
        var root = d3__WEBPACK_IMPORTED_MODULE_1__["hierarchy"](data)
            .eachBefore(function (d) { d.data.id = (d.parent ? d.parent.data.id + "." : "") + d.data.name; })
            .sum(sumBySize)
            .sort(function (a, b) { return b.height - a.height || b.value - a.value; });
        treemap(root);
        var cell = svg.selectAll("g")
            .data(root.leaves())
            .enter().append("g")
            .attr("transform", function (d) { return "translate(" + d.x0 + "," + d.y0 + ")"; });
        cell.append("rect")
            .attr("id", function (d) { return d.data.id; })
            .attr("width", function (d) { return d.x1 - d.x0; })
            .attr("height", function (d) { return d.y1 - d.y0; })
            .attr("fill", function (d) { return color(d.parent.data.id); });
        cell.append("clipPath")
            .attr("id", function (d) { return "clip-" + d.data.id; })
            .append("use")
            .attr("xlink:href", function (d) { return "#" + d.data.id; });
        cell.append("text")
            .attr("clip-path", function (d) { return "url(#clip-" + d.data.id + ")"; })
            .selectAll("tspan")
            .data(function (d) { return d.data.name.split(/(?=[A-Z][^A-Z])/g); })
            .enter().append("tspan")
            .attr("x", 4)
            .attr("y", function (d, i) { return 13 + i * 10; })
            .text(function (d) { return d; });
        cell.append("title")
            .text(function (d) { return d.data.id + "\n" + format(d.value); });
        d3__WEBPACK_IMPORTED_MODULE_1__["selectAll"]("input")
            .data([sumBySize, sumByCount], function (d) { return d ? d.name : this.value; })
            .on("change", changed);
        var timeout = d3__WEBPACK_IMPORTED_MODULE_1__["timeout"](function () {
            d3__WEBPACK_IMPORTED_MODULE_1__["select"]("input[value=\"sumByCount\"]")
                .property("checked", true)
                .dispatch("change");
        }, 2000);
        function changed(sum) {
            timeout.stop();
            treemap(root.sum(sum));
            cell.transition()
                .duration(750)
                .attr("transform", function (d) { return "translate(" + d.x0 + "," + d.y0 + ")"; })
                .select("rect")
                .attr("width", function (d) { return d.x1 - d.x0; })
                .attr("height", function (d) { return d.y1 - d.y0; });
        }
        function sumByCount(d) {
            return d.children ? 0 : 1;
        }
        function sumBySize(d) {
            return d.size;
        }
    };
    LineChartComponent.prototype.drawAxis = function () {
        this.svg.append('g')
            .attr('class', 'axis axis--x')
            .attr('transform', 'translate(0,' + this.height + ')')
            .call(d3_axis__WEBPACK_IMPORTED_MODULE_3__["axisBottom"](this.x));
        this.svg.append('g')
            .attr('class', 'axis axis--y')
            .call(d3_axis__WEBPACK_IMPORTED_MODULE_3__["axisLeft"](this.y))
            .append('text')
            .attr('class', 'axis-title')
            .attr('transform', 'rotate(-90)')
            .attr('y', 6)
            .attr('dy', '.71em')
            .style('text-anchor', 'end')
            .text('Price ($)');
    };
    LineChartComponent.prototype.drawLine = function () {
        var _this = this;
        this.line = d3_shape__WEBPACK_IMPORTED_MODULE_2__["line"]()
            .x(function (d) { return _this.x(d.date); })
            .y(function (d) { return _this.y(d.value); });
        this.svg.append('path')
            .datum(_shared__WEBPACK_IMPORTED_MODULE_4__["STOCKS"])
            .attr('class', 'line')
            .attr('d', this.line);
    };
    LineChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-line-chart',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: __webpack_require__(/*! ./line-chart.component.html */ "./src/app/01_line_chart/line-chart.component.html"),
            styles: [__webpack_require__(/*! ./line-chart.component.css */ "./src/app/01_line_chart/line-chart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LineChartComponent);
    return LineChartComponent;
}());



/***/ }),

/***/ "./src/app/02_multi_series_line_chart/multi-series.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/02_multi_series_line_chart/multi-series.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chart-label {\n    font-size: 1.5em;\n    line-height: normal;\n    color: black;\n  }\n  \n  .chart {\n    margin: 10px 0;\n    width: 100%;\n    height: 250px;\n  }\n  \n  .chart svg {\n    overflow: visible !important;\n  }\n  \n  .chart.large {\n    height: 400px;\n  }\n  \n  .plot-area {\n    background-color: white;\n  }\n  \n  .y-axis-label {\n    white-space: nowrap;\n  }\n  \n  #bubble-chart .legend {\n    position: absolute;\n    bottom: 40px;\n    right: 0;\n    left: auto;\n    width: 170px;\n    height: 110px;\n  }\n  \n  #bubble-chart {\n    position: relative;\n  }\n  \n  #bubble-chart .point {\n    stroke: transparent;\n  }\n  \n  #bubble-chart text.label {\n    stroke: none;\n    fill: #000;\n    font: 12px sans-serif;\n  }\n  "

/***/ }),

/***/ "./src/app/02_multi_series_line_chart/multi-series.component.html":
/*!************************************************************************!*\
  !*** ./src/app/02_multi_series_line_chart/multi-series.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{ title }}</h2>\n<!-- <svg width=\"960\" height=\"500\"></svg> -->\n<svg width=\"960\" height=\"960\" font-family=\"sans-serif\" font-size=\"10\" text-anchor=\"middle\"></svg>"

/***/ }),

/***/ "./src/app/02_multi_series_line_chart/multi-series.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/02_multi_series_line_chart/multi-series.component.ts ***!
  \**********************************************************************/
/*! exports provided: MultiSeriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSeriesComponent", function() { return MultiSeriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MultiSeriesComponent = /** @class */ (function () {
    function MultiSeriesComponent() {
        this.title = 'Multi-Series Line Chart';
        this.margin = { top: 20, right: 80, bottom: 30, left: 50 };
    }
    MultiSeriesComponent.prototype.ngOnInit = function () {
        this.data = _shared__WEBPACK_IMPORTED_MODULE_2__["TEMPERATURES"].map(function (v) { return v.values.map(function (v) { return v.date; }); })[0];
        //.reduce((a, b) => a.concat(b), []);
        this.initChart();
    };
    MultiSeriesComponent.prototype.initChart = function () {
        var svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]("svg"), width = +svg.attr("width"), height = +svg.attr("height");
        var format = d3__WEBPACK_IMPORTED_MODULE_1__["format"](",d");
        var color = d3__WEBPACK_IMPORTED_MODULE_1__["scaleOrdinal"](d3__WEBPACK_IMPORTED_MODULE_1__["schemeCategory10"]);
        var pack = d3__WEBPACK_IMPORTED_MODULE_1__["pack"]()
            .size([width, height])
            .padding(1.5);
        d3__WEBPACK_IMPORTED_MODULE_1__["csv"]("flare.csv", function (d) {
            d.value = +d.value;
            if (d.value)
                return d;
        }, function (error, classes) {
            if (error)
                throw error;
            var root = d3__WEBPACK_IMPORTED_MODULE_1__["hierarchy"]({ children: classes })
                .sum(function (d) { return d.value; })
                .each(function (d) {
                if (id = d.data.id) {
                    var id, i = id.lastIndexOf(".");
                    d.id = id;
                    d.package = id.slice(0, i);
                    d.class = id.slice(i + 1);
                }
            });
            var node = svg.selectAll(".node")
                .data(pack(root).leaves())
                .enter().append("g")
                .attr("class", "node")
                .attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; });
            node.append("circle")
                .attr("id", function (d) { return d.id; })
                .attr("r", function (d) { return d.r; })
                .style("fill", function (d) { return color(d.package); });
            node.append("clipPath")
                .attr("id", function (d) { return "clip-" + d.id; })
                .append("use")
                .attr("xlink:href", function (d) { return "#" + d.id; });
            node.append("text")
                .attr("clip-path", function (d) { return "url(#clip-" + d.id + ")"; })
                .selectAll("tspan")
                .data(function (d) { return d.class.split(/(?=[A-Z][^A-Z])/g); })
                .enter().append("tspan")
                .attr("x", 0)
                .attr("y", function (d, i, nodes) { return 13 + (i - nodes.length / 2 - 0.5) * 10; })
                .text(function (d) { return d; });
            node.append("title")
                .text(function (d) { return d.id + "\n" + format(d.value); });
        });
    };
    MultiSeriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-multi-series-line-chart',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: __webpack_require__(/*! ./multi-series.component.html */ "./src/app/02_multi_series_line_chart/multi-series.component.html"),
            styles: [__webpack_require__(/*! ./multi-series.component.css */ "./src/app/02_multi_series_line_chart/multi-series.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MultiSeriesComponent);
    return MultiSeriesComponent;
}());



/***/ }),

/***/ "./src/app/03_bar_chart/bar-chart.component.css":
/*!******************************************************!*\
  !*** ./src/app/03_bar_chart/bar-chart.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "circle {\n    stroke: #fff;\n  }\n  #readout {\n    color: gray;\n    font-size: 24px;\n    font-family: \"Helvetica Neue\", Helvetica, sans-serif;\n  }"

/***/ }),

/***/ "./src/app/03_bar_chart/bar-chart.component.html":
/*!*******************************************************!*\
  !*** ./src/app/03_bar_chart/bar-chart.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{ title }}</h2>\n<svg width=\"960\" height=\"500\"></svg>\n"

/***/ }),

/***/ "./src/app/03_bar_chart/bar-chart.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/03_bar_chart/bar-chart.component.ts ***!
  \*****************************************************/
/*! exports provided: BarChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartComponent", function() { return BarChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/index.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/index.js");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/index.js");
/* harmony import */ var d3_axis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-axis */ "./node_modules/d3-axis/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BarChartComponent = /** @class */ (function () {
    function BarChartComponent() {
        this.title = 'Bar Chart';
        this.margin = { top: 20, right: 20, bottom: 30, left: 40 };
    }
    BarChartComponent.prototype.ngOnInit = function () {
        this.initSvg();
        this.initAxis();
        this.drawAxis();
        this.drawBars();
    };
    BarChartComponent.prototype.initSvg = function () {
        this.svg = d3_selection__WEBPACK_IMPORTED_MODULE_1__["select"]('svg');
        this.width = +this.svg.attr('width') - this.margin.left - this.margin.right;
        this.height = +this.svg.attr('height') - this.margin.top - this.margin.bottom;
        this.g = this.svg.append('g')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
    };
    BarChartComponent.prototype.initAxis = function () {
        this.x = d3_scale__WEBPACK_IMPORTED_MODULE_2__["scaleBand"]().rangeRound([0, this.width]).padding(0.1);
        this.y = d3_scale__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]().rangeRound([this.height, 0]);
        this.x.domain(_shared__WEBPACK_IMPORTED_MODULE_5__["STATISTICS"].map(function (d) { return d.letter; }));
        this.y.domain([0, d3_array__WEBPACK_IMPORTED_MODULE_3__["max"](_shared__WEBPACK_IMPORTED_MODULE_5__["STATISTICS"], function (d) { return d.frequency; })]);
    };
    BarChartComponent.prototype.drawAxis = function () {
        this.g.append('g')
            .attr('class', 'axis axis--x')
            .attr('transform', 'translate(0,' + this.height + ')')
            .call(d3_axis__WEBPACK_IMPORTED_MODULE_4__["axisBottom"](this.x));
        this.g.append('g')
            .attr('class', 'axis axis--y')
            .call(d3_axis__WEBPACK_IMPORTED_MODULE_4__["axisLeft"](this.y).ticks(10, '%'))
            .append('text')
            .attr('class', 'axis-title')
            .attr('transform', 'rotate(-90)')
            .attr('y', 6)
            .attr('dy', '0.71em')
            .attr('text-anchor', 'end')
            .text('Frequency');
    };
    BarChartComponent.prototype.drawBars = function () {
        var _this = this;
        this.g.selectAll('.bar')
            .data(_shared__WEBPACK_IMPORTED_MODULE_5__["STATISTICS"])
            .enter().append('rect')
            .attr('class', 'bar')
            .attr('x', function (d) { return _this.x(d.letter); })
            .attr('y', function (d) { return _this.y(d.frequency); })
            .attr('width', this.x.bandwidth())
            .attr('height', function (d) { return _this.height - _this.y(d.frequency); });
    };
    BarChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bar-chart',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: __webpack_require__(/*! ./bar-chart.component.html */ "./src/app/03_bar_chart/bar-chart.component.html"),
            styles: [__webpack_require__(/*! ./bar-chart.component.css */ "./src/app/03_bar_chart/bar-chart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BarChartComponent);
    return BarChartComponent;
}());



/***/ }),

/***/ "./src/app/04_stacked_bar_chart/stacked-bar-chart.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/04_stacked_bar_chart/stacked-bar-chart.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".axis .domain {\n  display: none;\n}\n"

/***/ }),

/***/ "./src/app/04_stacked_bar_chart/stacked-bar-chart.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/04_stacked_bar_chart/stacked-bar-chart.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{ title }}</h2>\n<svg width=\"960\" height=\"500\"></svg>\n"

/***/ }),

/***/ "./src/app/04_stacked_bar_chart/stacked-bar-chart.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/04_stacked_bar_chart/stacked-bar-chart.component.ts ***!
  \*********************************************************************/
/*! exports provided: StackedBarChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StackedBarChartComponent", function() { return StackedBarChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/index.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/index.js");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/index.js");
/* harmony import */ var d3_axis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-axis */ "./node_modules/d3-axis/index.js");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/index.js");
/* harmony import */ var _shared_data04__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/data04 */ "./src/app/shared/data04.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StackedBarChartComponent = /** @class */ (function () {
    function StackedBarChartComponent() {
        this.title = 'Stacked Bar Chart';
    }
    StackedBarChartComponent.prototype.ngOnInit = function () {
        this.initMargins();
        this.initSvg();
        this.drawChart(_shared_data04__WEBPACK_IMPORTED_MODULE_6__["SAMPLE_DATA"]);
    };
    StackedBarChartComponent.prototype.initMargins = function () {
        this.margin = { top: 20, right: 20, bottom: 30, left: 40 };
    };
    StackedBarChartComponent.prototype.initSvg = function () {
        this.svg = d3_selection__WEBPACK_IMPORTED_MODULE_1__["select"]('svg');
        this.width = +this.svg.attr('width') - this.margin.left - this.margin.right;
        this.height = +this.svg.attr('height') - this.margin.top - this.margin.bottom;
        this.g = this.svg.append('g').attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
        this.x = d3_scale__WEBPACK_IMPORTED_MODULE_2__["scaleBand"]()
            .rangeRound([0, this.width])
            .paddingInner(0.05)
            .align(0.1);
        this.y = d3_scale__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]()
            .rangeRound([this.height, 0]);
        this.z = d3_scale__WEBPACK_IMPORTED_MODULE_2__["scaleOrdinal"]()
            .range(['#98abc5', '#8a89a6', '#7b6888', '#6b486b', '#a05d56', '#d0743c', '#ff8c00']);
    };
    StackedBarChartComponent.prototype.drawChart = function (data) {
        var _this = this;
        var keys = Object.getOwnPropertyNames(data[0]).slice(1);
        data = data.map(function (v) {
            v.total = keys.map(function (key) { return v[key]; }).reduce(function (a, b) { return a + b; }, 0);
            return v;
        });
        data.sort(function (a, b) { return b.total - a.total; });
        this.x.domain(data.map(function (d) { return d.State; }));
        this.y.domain([0, d3_array__WEBPACK_IMPORTED_MODULE_5__["max"](data, function (d) { return d.total; })]).nice();
        this.z.domain(keys);
        this.g.append('g')
            .selectAll('g')
            .data(d3_shape__WEBPACK_IMPORTED_MODULE_3__["stack"]().keys(keys)(data))
            .enter().append('g')
            .attr('fill', function (d) { return _this.z(d.key); })
            .selectAll('rect')
            .data(function (d) { return d; })
            .enter().append('rect')
            .attr('x', function (d) { return _this.x(d.data.State); })
            .attr('y', function (d) { return _this.y(d[1]); })
            .attr('height', function (d) { return _this.y(d[0]) - _this.y(d[1]); })
            .attr('width', this.x.bandwidth());
        this.g.append('g')
            .attr('class', 'axis')
            .attr('transform', 'translate(0,' + this.height + ')')
            .call(d3_axis__WEBPACK_IMPORTED_MODULE_4__["axisBottom"](this.x));
        this.g.append('g')
            .attr('class', 'axis')
            .call(d3_axis__WEBPACK_IMPORTED_MODULE_4__["axisLeft"](this.y).ticks(null, 's'))
            .append('text')
            .attr('x', 2)
            .attr('y', this.y(this.y.ticks().pop()) + 0.5)
            .attr('dy', '0.32em')
            .attr('fill', '#000')
            .attr('font-weight', 'bold')
            .attr('text-anchor', 'start')
            .text('Population');
        var legend = this.g.append('g')
            .attr('font-family', 'sans-serif')
            .attr('font-size', 10)
            .attr('text-anchor', 'end')
            .selectAll('g')
            .data(keys.slice().reverse())
            .enter().append('g')
            .attr('transform', function (d, i) { return 'translate(0,' + i * 20 + ')'; });
        legend.append('rect')
            .attr('x', this.width - 19)
            .attr('width', 19)
            .attr('height', 19)
            .attr('fill', this.z);
        legend.append('text')
            .attr('x', this.width - 24)
            .attr('y', 9.5)
            .attr('dy', '0.32em')
            .text(function (d) { return d; });
    };
    StackedBarChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stacked-bar-chart',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: __webpack_require__(/*! ./stacked-bar-chart.component.html */ "./src/app/04_stacked_bar_chart/stacked-bar-chart.component.html"),
            styles: [__webpack_require__(/*! ./stacked-bar-chart.component.css */ "./src/app/04_stacked_bar_chart/stacked-bar-chart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StackedBarChartComponent);
    return StackedBarChartComponent;
}());



/***/ }),

/***/ "./src/app/05_brush_zoom/brush-zoom.component.css":
/*!********************************************************!*\
  !*** ./src/app/05_brush_zoom/brush-zoom.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".area {\n    fill: steelblue;\n    -webkit-clip-path: url(#clip);\n            clip-path: url(#clip);\n}\n\n.zoom {\n    cursor: move;\n    fill: none;\n    pointer-events: all;\n}\n"

/***/ }),

/***/ "./src/app/05_brush_zoom/brush-zoom.component.html":
/*!*********************************************************!*\
  !*** ./src/app/05_brush_zoom/brush-zoom.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{ title }}</h2>\n<svg width=\"960\" height=\"500\"></svg>\n"

/***/ }),

/***/ "./src/app/05_brush_zoom/brush-zoom.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/05_brush_zoom/brush-zoom.component.ts ***!
  \*******************************************************/
/*! exports provided: BrushZoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrushZoomComponent", function() { return BrushZoomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/index.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/index.js");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/index.js");
/* harmony import */ var d3_axis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-axis */ "./node_modules/d3-axis/index.js");
/* harmony import */ var d3_zoom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-zoom */ "./node_modules/d3-zoom/index.js");
/* harmony import */ var d3_brush__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-brush */ "./node_modules/d3-brush/index.js");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/index.js");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! d3-time-format */ "./node_modules/d3-time-format/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var BrushZoomComponent = /** @class */ (function () {
    function BrushZoomComponent() {
        this.title = 'Brush & Zoom';
        this.parseDate = d3_time_format__WEBPACK_IMPORTED_MODULE_8__["timeParse"]('%b %Y');
    }
    BrushZoomComponent.prototype.ngOnInit = function () {
        this.initMargins();
        this.initSvg();
        this.drawChart(this.parseData(_shared__WEBPACK_IMPORTED_MODULE_9__["SP500"]));
    };
    BrushZoomComponent.prototype.initMargins = function () {
        this.margin = { top: 20, right: 20, bottom: 110, left: 40 };
        this.margin2 = { top: 430, right: 20, bottom: 30, left: 40 };
    };
    BrushZoomComponent.prototype.parseData = function (data) {
        var _this = this;
        return data.map(function (v) { return ({ date: _this.parseDate(v.date), price: v.price }); });
    };
    BrushZoomComponent.prototype.initSvg = function () {
        var _this = this;
        this.svg = d3_selection__WEBPACK_IMPORTED_MODULE_1__["select"]('svg');
        this.width = +this.svg.attr('width') - this.margin.left - this.margin.right;
        this.height = +this.svg.attr('height') - this.margin.top - this.margin.bottom;
        this.height2 = +this.svg.attr('height') - this.margin2.top - this.margin2.bottom;
        this.x = d3_scale__WEBPACK_IMPORTED_MODULE_2__["scaleTime"]().range([0, this.width]);
        this.x2 = d3_scale__WEBPACK_IMPORTED_MODULE_2__["scaleTime"]().range([0, this.width]);
        this.y = d3_scale__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]().range([this.height, 0]);
        this.y2 = d3_scale__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]().range([this.height2, 0]);
        this.xAxis = d3_axis__WEBPACK_IMPORTED_MODULE_4__["axisBottom"](this.x);
        this.xAxis2 = d3_axis__WEBPACK_IMPORTED_MODULE_4__["axisBottom"](this.x2);
        this.yAxis = d3_axis__WEBPACK_IMPORTED_MODULE_4__["axisLeft"](this.y);
        this.brush = d3_brush__WEBPACK_IMPORTED_MODULE_6__["brushX"]()
            .extent([[0, 0], [this.width, this.height2]])
            .on('brush end', this.brushed.bind(this));
        this.zoom = d3_zoom__WEBPACK_IMPORTED_MODULE_5__["zoom"]()
            .scaleExtent([1, Infinity])
            .translateExtent([[0, 0], [this.width, this.height]])
            .extent([[0, 0], [this.width, this.height]])
            .on('zoom', this.zoomed.bind(this));
        this.area = d3_shape__WEBPACK_IMPORTED_MODULE_3__["area"]()
            .curve(d3_shape__WEBPACK_IMPORTED_MODULE_3__["curveMonotoneX"])
            .x(function (d) { return _this.x(d.date); })
            .y0(this.height)
            .y1(function (d) { return _this.y(d.price); });
        this.area2 = d3_shape__WEBPACK_IMPORTED_MODULE_3__["area"]()
            .curve(d3_shape__WEBPACK_IMPORTED_MODULE_3__["curveMonotoneX"])
            .x(function (d) { return _this.x2(d.date); })
            .y0(this.height2)
            .y1(function (d) { return _this.y2(d.price); });
        this.svg.append('defs').append('clipPath')
            .attr('id', 'clip')
            .append('rect')
            .attr('width', this.width)
            .attr('height', this.height);
        this.focus = this.svg.append('g')
            .attr('class', 'focus')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
        this.context = this.svg.append('g')
            .attr('class', 'context')
            .attr('transform', 'translate(' + this.margin2.left + ',' + this.margin2.top + ')');
    };
    BrushZoomComponent.prototype.brushed = function () {
        if (d3_selection__WEBPACK_IMPORTED_MODULE_1__["event"].sourceEvent && d3_selection__WEBPACK_IMPORTED_MODULE_1__["event"].sourceEvent.type === 'zoom')
            return; // ignore brush-by-zoom
        var s = d3_selection__WEBPACK_IMPORTED_MODULE_1__["event"].selection || this.x2.range();
        this.x.domain(s.map(this.x2.invert, this.x2));
        this.focus.select('.area').attr('d', this.area);
        this.focus.select('.axis--x').call(this.xAxis);
        this.svg.select('.zoom').call(this.zoom.transform, d3_zoom__WEBPACK_IMPORTED_MODULE_5__["zoomIdentity"]
            .scale(this.width / (s[1] - s[0]))
            .translate(-s[0], 0));
    };
    BrushZoomComponent.prototype.zoomed = function () {
        if (d3_selection__WEBPACK_IMPORTED_MODULE_1__["event"].sourceEvent && d3_selection__WEBPACK_IMPORTED_MODULE_1__["event"].sourceEvent.type === 'brush')
            return; // ignore zoom-by-brush
        var t = d3_selection__WEBPACK_IMPORTED_MODULE_1__["event"].transform;
        this.x.domain(t.rescaleX(this.x2).domain());
        this.focus.select('.area').attr('d', this.area);
        this.focus.select('.axis--x').call(this.xAxis);
        this.context.select('.brush').call(this.brush.move, this.x.range().map(t.invertX, t));
    };
    BrushZoomComponent.prototype.drawChart = function (data) {
        this.x.domain(d3_array__WEBPACK_IMPORTED_MODULE_7__["extent"](data, function (d) { return d.date; }));
        this.y.domain([0, d3_array__WEBPACK_IMPORTED_MODULE_7__["max"](data, function (d) { return d.price; })]);
        this.x2.domain(this.x.domain());
        this.y2.domain(this.y.domain());
        this.focus.append('path')
            .datum(data)
            .attr('class', 'area')
            .attr('d', this.area);
        this.focus.append('g')
            .attr('class', 'axis axis--x')
            .attr('transform', 'translate(0,' + this.height + ')')
            .call(this.xAxis);
        this.focus.append('g')
            .attr('class', 'axis axis--y')
            .call(this.yAxis);
        this.context.append('path')
            .datum(data)
            .attr('class', 'area')
            .attr('d', this.area2);
        this.context.append('g')
            .attr('class', 'axis axis--x')
            .attr('transform', 'translate(0,' + this.height2 + ')')
            .call(this.xAxis2);
        this.context.append('g')
            .attr('class', 'brush')
            .call(this.brush)
            .call(this.brush.move, this.x.range());
        this.svg.append('rect')
            .attr('class', 'zoom')
            .attr('width', this.width)
            .attr('height', this.height)
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')')
            .call(this.zoom);
    };
    BrushZoomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-brush-zoom',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: __webpack_require__(/*! ./brush-zoom.component.html */ "./src/app/05_brush_zoom/brush-zoom.component.html"),
            styles: [__webpack_require__(/*! ./brush-zoom.component.css */ "./src/app/05_brush_zoom/brush-zoom.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BrushZoomComponent);
    return BrushZoomComponent;
}());



/***/ }),

/***/ "./src/app/06_pie_chart/pie-chart.component.css":
/*!******************************************************!*\
  !*** ./src/app/06_pie_chart/pie-chart.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chart-label {\n    font-size: 1.5em;\n    line-height: normal;\n    color: black;\n  }\n  \n  .chart {\n    margin: 10px 0;\n    width: 100%;\n    height: 250px;\n  }\n  \n  .chart svg {\n    overflow: visible !important;\n  }\n  \n  .chart.large {\n    height: 400px;\n  }\n  \n  .plot-area {\n    background-color: white;\n  }\n  \n  .y-axis-label {\n    white-space: nowrap;\n  }\n  \n  #bubble-chart .legend {\n    position: absolute;\n    bottom: 40px;\n    right: 0;\n    left: auto;\n    width: 170px;\n    height: 110px;\n  }\n  \n  #bubble-chart {\n    position: relative;\n  }\n  \n  #bubble-chart .point {\n    stroke: transparent;\n  }\n  \n  #bubble-chart text.label {\n    stroke: none;\n    fill: #000;\n    font: 12px sans-serif;\n  }\n  "

/***/ }),

/***/ "./src/app/06_pie_chart/pie-chart.component.html":
/*!*******************************************************!*\
  !*** ./src/app/06_pie_chart/pie-chart.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"bubble-chart\" class=\"chart large\">Loading...</div>\n"

/***/ }),

/***/ "./src/app/06_pie_chart/pie-chart.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/06_pie_chart/pie-chart.component.ts ***!
  \*****************************************************/
/*! exports provided: PieChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChartComponent", function() { return PieChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var d3fc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3fc */ "./node_modules/d3fc/build/d3fc.js");
/* harmony import */ var d3fc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3fc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var d3_svg_legend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-svg-legend */ "./node_modules/d3-svg-legend/indexRollupNext.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PieChartComponent = /** @class */ (function () {
    function PieChartComponent() {
        this.title = 'Pie Chart';
        this.margin = { top: 20, right: 20, bottom: 30, left: 50 };
        this.width = 900 - this.margin.left - this.margin.right;
        this.height = 500 - this.margin.top - this.margin.bottom;
        this.radius = Math.min(this.width, this.height) / 2;
    }
    PieChartComponent.prototype.ngOnInit = function () {
        this.initSvg();
    };
    PieChartComponent.prototype.initSvg = function () {
        // d3.json("https://d3fc.io/examples/bubble/data.json").then(function(data) {
        //     // convert string properties to numbers
        //     data.forEach(function(d) {
        //       d.income = Number(d.income);
        //       d.population = Number(d.population);
        //       d.lifeExpectancy = Number(d.lifeExpectancy);
        //     });
        var data = [
            {
                "name": "China",
                "region": "East Asia & Pacific",
                "income": 648.86068677913,
                "population": 731149966.56273,
                "lifeExpectancy": 56.558222188827
            },
            {
                "name": "India",
                "region": "South Asia",
                "income": 699.8921741744,
                "population": 492897584.25067,
                "lifeExpectancy": 46.163342976293
            },
            {
                "name": "France",
                "region": "Europe & Central Asia",
                "income": 13074.263804711,
                "population": 49103385.881204,
                "lifeExpectancy": 71.473800954277
            },
            {
                "name": "Japan",
                "region": "East Asia & Pacific",
                "income": 8791.7631153023,
                "population": 99599456.164557,
                "lifeExpectancy": 70.969704324304
            },
            {
                "name": "Germany",
                "region": "Europe & Central Asia",
                "income": 14664.769673893,
                "population": 76086898.329226,
                "lifeExpectancy": 70.683180674005
            },
            {
                "name": "Italy",
                "region": "Europe & Central Asia",
                "income": 9400.1564282226,
                "population": 52259171.777436,
                "lifeExpectancy": 70.8623188188
            },
            {
                "name": "Bangladesh",
                "region": "South Asia",
                "income": 754.05120787467,
                "population": 61292463.244881,
                "lifeExpectancy": 42.661698538528
            },
            {
                "name": "Indonesia",
                "region": "East Asia & Pacific",
                "income": 795.86387271293,
                "population": 106754651.72634,
                "lifeExpectancy": 44.744933313296
            },
            {
                "name": "United Kingdom",
                "region": "Europe & Central Asia",
                "income": 13873.045716272,
                "population": 54581399.218545,
                "lifeExpectancy": 71.546819325995
            },
            {
                "name": "Pakistan",
                "region": "South Asia",
                "income": 923.11864597814,
                "population": 58720063.023744,
                "lifeExpectancy": 52.328571965285
            },
            {
                "name": "Spain",
                "region": "Europe & Central Asia",
                "income": 7488.633793816,
                "population": 32374718.789909,
                "lifeExpectancy": 71.195337190517
            },
            {
                "name": "Nigeria",
                "region": "Sub-Saharan Africa",
                "income": 1246.4298996882,
                "population": 45900097.977496,
                "lifeExpectancy": 39.281644437765
            },
            {
                "name": "Ukraine",
                "region": "Europe & Central Asia",
                "income": 5685.2656100302,
                "population": 45581392.093925,
                "lifeExpectancy": 71.843234774768
            },
            {
                "name": "Poland",
                "region": "Europe & Central Asia",
                "income": 6310.2099267386,
                "population": 31475322.677387,
                "lifeExpectancy": 69.823800954277
            },
            {
                "name": "Turkey",
                "region": "Europe & Central Asia",
                "income": 3121.7943847917,
                "population": 32524903.965361,
                "lifeExpectancy": 53.67539129128
            },
            {
                "name": "United States",
                "region": "America",
                "income": 22041.774651539,
                "population": 196085484.76538,
                "lifeExpectancy": 70.425795168501
            },
            {
                "name": "Korea, Rep.",
                "region": "East Asia & Pacific",
                "income": 1483.1969042342,
                "population": 29282313.408724,
                "lifeExpectancy": 56.696981628283
            },
            {
                "name": "Mexico",
                "region": "America",
                "income": 5542.8427091709,
                "population": 46244453.968366,
                "lifeExpectancy": 59.714313033024
            },
            {
                "name": "Vietnam",
                "region": "East Asia & Pacific",
                "income": 752.57669609648,
                "population": 38142976.622159,
                "lifeExpectancy": 46.963288875531
            },
            {
                "name": "Romania",
                "region": "Europe & Central Asia",
                "income": 6107.089858737,
                "population": 19116938.241537,
                "lifeExpectancy": 66.885283089755
            },
            {
                "name": "Congo, Dem. Rep.",
                "region": "Sub-Saharan Africa",
                "income": 889.67949656235,
                "population": 19240811.601871,
                "lifeExpectancy": 42.637439606267
            },
            {
                "name": "Sudan",
                "region": "Sub-Saharan Africa",
                "income": 1804.7371518203,
                "population": 12315544.680054,
                "lifeExpectancy": 44.862210617275
            },
            {
                "name": "Ireland",
                "region": "Europe & Central Asia",
                "income": 7258.5733843033,
                "population": 2882318.0674005,
                "lifeExpectancy": 70.303018371717
            },
            {
                "name": "Thailand",
                "region": "East Asia & Pacific",
                "income": 1212.2101190968,
                "population": 32831057.390465,
                "lifeExpectancy": 57.206981628283
            },
            {
                "name": "Brazil",
                "region": "America",
                "income": 3359.2564601571,
                "population": 85039293.700605,
                "lifeExpectancy": 56.998005785776
            },
            {
                "name": "Korea, Dem. Rep.",
                "region": "East Asia & Pacific",
                "income": 1566.5149716347,
                "population": 12155519.391968,
                "lifeExpectancy": 58.734933313296
            },
            {
                "name": "Hungary",
                "region": "Europe & Central Asia",
                "income": 8759.6136641996,
                "population": 10177911.68971,
                "lifeExpectancy": 69.770216403051
            },
            {
                "name": "Nepal",
                "region": "South Asia",
                "income": 692.70502122704,
                "population": 11016461.653079,
                "lifeExpectancy": 40.659596122779
            },
            {
                "name": "Myanmar",
                "region": "East Asia & Pacific",
                "income": 663.8098504715,
                "population": 25296947.760905,
                "lifeExpectancy": 47.991294661307
            },
            {
                "name": "Belgium",
                "region": "Europe & Central Asia",
                "income": 12654.187272044,
                "population": 9495248.5779765,
                "lifeExpectancy": 70.635283089755
            },
            {
                "name": "Austria",
                "region": "Europe & Central Asia",
                "income": 12426.328166585,
                "population": 7311306.4669196,
                "lifeExpectancy": 70.194825111771
            },
            {
                "name": "Portugal",
                "region": "Europe & Central Asia",
                "income": 5860.0530499305,
                "population": 9113015.3435774,
                "lifeExpectancy": 65.803018371717
            },
            {
                "name": "Afghanistan",
                "region": "South Asia",
                "income": 836.05090468497,
                "population": 11206727.928166,
                "lifeExpectancy": 33.295903370027
            },
            {
                "name": "Tanzania",
                "region": "Sub-Saharan Africa",
                "income": 825.02390126612,
                "population": 12155496.627005,
                "lifeExpectancy": 45.234825111771
            },
            {
                "name": "Ethiopia",
                "region": "Sub-Saharan Africa",
                "income": 503.63618138784,
                "population": 27188480.019461,
                "lifeExpectancy": 41.565903370027
            },
            {
                "name": "Morocco",
                "region": "Middle East & North Africa",
                "income": 1650.5338497952,
                "population": 14341370.595484,
                "lifeExpectancy": 49.509084044032
            },
            {
                "name": "Algeria",
                "region": "Middle East & North Africa",
                "income": 3124.8325427358,
                "population": 12260078.865988,
                "lifeExpectancy": 50.309650223541
            },
            {
                "name": "Yemen, Rep.",
                "region": "Middle East & North Africa",
                "income": 850.73213885863,
                "population": 6600645.7576361,
                "lifeExpectancy": 36.242210617275
            },
            {
                "name": "Sweden",
                "region": "Europe & Central Asia",
                "income": 15677.930420408,
                "population": 7792250.8969831,
                "lifeExpectancy": 74.077439606267
            },
            {
                "name": "Kenya",
                "region": "Sub-Saharan Africa",
                "income": 1019.6508438216,
                "population": 9797526.4343465,
                "lifeExpectancy": 49.802264718037
            },
            {
                "name": "Belarus",
                "region": "Europe & Central Asia",
                "income": 4406.6722772141,
                "population": 8672307.2339107,
                "lifeExpectancy": 73.304313033024
            },
            {
                "name": "Netherlands",
                "region": "Europe & Central Asia",
                "income": 12992.517647368,
                "population": 12420572.671601,
                "lifeExpectancy": 73.560512078747
            },
            {
                "name": "Greece",
                "region": "Europe & Central Asia",
                "income": 7632.864664688,
                "population": 8600338.9239584,
                "lifeExpectancy": 70.509029943269
            },
            {
                "name": "Bulgaria",
                "region": "Europe & Central Asia",
                "income": 5251.2175297742,
                "population": 8246145.343089,
                "lifeExpectancy": 71.244716910245
            },
            {
                "name": "Philippines",
                "region": "East Asia & Pacific",
                "income": 1770.5979201262,
                "population": 34086315.508059,
                "lifeExpectancy": 55.992722696021
            },
            {
                "name": "Serbia",
                "region": "Europe & Central Asia",
                "income": 7855.3304715032,
                "population": 7890235.714919,
                "lifeExpectancy": 66.173288875531
            },
            {
                "name": "Slovak Republic",
                "region": "Europe & Central Asia",
                "income": 8035.7924533193,
                "population": 4400778.2767404,
                "lifeExpectancy": 70.410566179509
            },
            {
                "name": "Uganda",
                "region": "Sub-Saharan Africa",
                "income": 883.0260919713,
                "population": 8587412.0087538,
                "lifeExpectancy": 47.185957470789
            },
            {
                "name": "Mozambique",
                "region": "Sub-Saharan Africa",
                "income": 541.3804365631,
                "population": 8447499.9743397,
                "lifeExpectancy": 37.475903370027
            },
            {
                "name": "Saudi Arabia",
                "region": "Middle East & North Africa",
                "income": 15611.134802194,
                "population": 5439524.782545,
                "lifeExpectancy": 48.461806740053
            },
            {
                "name": "Cambodia",
                "region": "East Asia & Pacific",
                "income": 509.15151857835,
                "population": 6742609.1907803,
                "lifeExpectancy": 45.201132359019
            },
            {
                "name": "Kazakhstan",
                "region": "Europe & Central Asia",
                "income": 5791.1789829318,
                "population": 12121467.857647,
                "lifeExpectancy": 60.809596122779
            },
            {
                "name": "Ghana",
                "region": "Sub-Saharan Africa",
                "income": 1145.2965980388,
                "population": 8195889.4275463,
                "lifeExpectancy": 47.369029943269
            },
            {
                "name": "Taiwan",
                "region": "East Asia & Pacific",
                "income": 2787.9920727355,
                "population": 13248811.98114,
                "lifeExpectancy": 67.4
            },
            {
                "name": "Switzerland",
                "region": "Europe & Central Asia",
                "income": 22461.080616148,
                "population": 5984857.1965285,
                "lifeExpectancy": 72.440566179509
            },
            {
                "name": "Uzbekistan",
                "region": "Europe & Central Asia",
                "income": 2129.0101874578,
                "population": 10461524.039486,
                "lifeExpectancy": 61.383800954277
            },
            {
                "name": "Cameroon",
                "region": "Sub-Saharan Africa",
                "income": 1487.4372645302,
                "population": 6193159.4326558,
                "lifeExpectancy": 44.079596122779
            },
            {
                "name": "Madagascar",
                "region": "Sub-Saharan Africa",
                "income": 1582.1164947214,
                "population": 6172669.436225,
                "lifeExpectancy": 42.165903370027
            },
            {
                "name": "Burkina Faso",
                "region": "Sub-Saharan Africa",
                "income": 738.49226096104,
                "population": 5067811.5586655,
                "lifeExpectancy": 39.953800954277
            },
            {
                "name": "Angola",
                "region": "Sub-Saharan Africa",
                "income": 5264.844952474,
                "population": 5187283.231694,
                "lifeExpectancy": 35.315903370027
            },
            {
                "name": "South Africa",
                "region": "Sub-Saharan Africa",
                "income": 6742.4521985949,
                "population": 20326484.5572,
                "lifeExpectancy": 51.268005785776
            },
            {
                "name": "Chad",
                "region": "Sub-Saharan Africa",
                "income": 1225.5580903182,
                "population": 3403841.6608183,
                "lifeExpectancy": 42.950108201525
            },
            {
                "name": "Mali",
                "region": "Sub-Saharan Africa",
                "income": 536.93461997971,
                "population": 5078398.1576436,
                "lifeExpectancy": 36.834771011008
            },
            {
                "name": "Peru",
                "region": "America",
                "income": 5662.5836397791,
                "population": 11727209.497689,
                "lifeExpectancy": 50.640674381035
            },
            {
                "name": "Niger",
                "region": "Sub-Saharan Africa",
                "income": 1080.214733441,
                "population": 4417866.5425856,
                "lifeExpectancy": 37.837385505504
            },
            {
                "name": "Croatia",
                "region": "Europe & Central Asia",
                "income": 6841.5240398993,
                "population": 4151095.9904572,
                "lifeExpectancy": 68.125337190517
            },
            {
                "name": "Sri Lanka",
                "region": "South Asia",
                "income": 1072.6382097907,
                "population": 11413457.249239,
                "lifeExpectancy": 60.022264718037
            },
            {
                "name": "Colombia",
                "region": "America",
                "income": 2643.9001217267,
                "population": 19084930.821355,
                "lifeExpectancy": 59.375903370027
            },
            {
                "name": "Finland",
                "region": "Europe & Central Asia",
                "income": 10709.063773528,
                "population": 4577266.0901304,
                "lifeExpectancy": 69.540674381035
            },
            {
                "name": "Denmark",
                "region": "Europe & Central Asia",
                "income": 14707.567465905,
                "population": 4789216.4819476,
                "lifeExpectancy": 72.463180674005
            },
            {
                "name": "Bolivia",
                "region": "America",
                "income": 2469.5920276515,
                "population": 3926098.3466957,
                "lifeExpectancy": 44.484825111771
            },
            {
                "name": "Iraq",
                "region": "Middle East & North Africa",
                "income": 8925.2144189804,
                "population": 8183747.7960326,
                "lifeExpectancy": 55.156011571552
            },
            {
                "name": "Cote d'Ivoire",
                "region": "Sub-Saharan Africa",
                "income": 2106.8384483601,
                "population": 4484529.0647331,
                "lifeExpectancy": 43.598059886539
            },
            {
                "name": "Zimbabwe",
                "region": "Sub-Saharan Africa",
                "income": 545.22268625315,
                "population": 4804066.6725401,
                "lifeExpectancy": 53.510620280272
            },
            {
                "name": "Georgia",
                "region": "Europe & Central Asia",
                "income": 2845.9727332156,
                "population": 4506929.9217418,
                "lifeExpectancy": 65.978005785776
            },
            {
                "name": "Senegal",
                "region": "Sub-Saharan Africa",
                "income": 1678.9386764098,
                "population": 3832862.9980839,
                "lifeExpectancy": 41.471644437765
            },
            {
                "name": "Somalia",
                "region": "Sub-Saharan Africa",
                "income": 1214.527167224,
                "population": 3339342.7036105,
                "lifeExpectancy": 38.303800954277
            },
            {
                "name": "Guinea",
                "region": "Sub-Saharan Africa",
                "income": 700.22514971635,
                "population": 3371966.94094,
                "lifeExpectancy": 37.941132359019
            },
            {
                "name": "Norway",
                "region": "Europe & Central Asia",
                "income": 14328.703948604,
                "population": 3747220.8880039,
                "lifeExpectancy": 73.951132359019
            },
            {
                "name": "Rwanda",
                "region": "Sub-Saharan Africa",
                "income": 486.60171732352,
                "population": 3338531.3777661,
                "lifeExpectancy": 43.787951685013
            },
            {
                "name": "Burundi",
                "region": "Sub-Saharan Africa",
                "income": 385.91631476124,
                "population": 3236168.9896683,
                "lifeExpectancy": 43.075337190517
            },
            {
                "name": "Azerbaijan",
                "region": "Europe & Central Asia",
                "income": 3932.8857002635,
                "population": 4673396.1634294,
                "lifeExpectancy": 63.411698538528
            },
            {
                "name": "Tunisia",
                "region": "Middle East & North Africa",
                "income": 1991.0204328061,
                "population": 4652833.6615321,
                "lifeExpectancy": 51.132776796784
            },
            {
                "name": "Bosnia and Herzegovina",
                "region": "Europe & Central Asia",
                "income": 2135.2862640418,
                "population": 3530908.4044032,
                "lifeExpectancy": 63.872264718037
            },
            {
                "name": "Canada",
                "region": "America",
                "income": 15740.460803246,
                "population": 20369152.511553,
                "lifeExpectancy": 71.892668595259
            },
            {
                "name": "Sierra Leone",
                "region": "Sub-Saharan Africa",
                "income": 1220.8154476462,
                "population": 2613314.2450314,
                "lifeExpectancy": 34.593234774768
            },
            {
                "name": "Lithuania",
                "region": "Europe & Central Asia",
                "income": 9293.4514066035,
                "population": 2988796.8385243,
                "lifeExpectancy": 71.816361348011
            },
            {
                "name": "Chile",
                "region": "America",
                "income": 4957.894217981,
                "population": 8648950.6418455,
                "lifeExpectancy": 59.670674381035
            },
            {
                "name": "Papua New Guinea",
                "region": "East Asia & Pacific",
                "income": 1473.4610767555,
                "population": 2033402.0859225,
                "lifeExpectancy": 41.311186459781
            },
            {
                "name": "Zambia",
                "region": "Sub-Saharan Africa",
                "income": 1726.1467520757,
                "population": 3772975.8425067,
                "lifeExpectancy": 47.192210617275
            },
            {
                "name": "Malawi",
                "region": "Sub-Saharan Africa",
                "income": 456.81949280535,
                "population": 4000103.6412819,
                "lifeExpectancy": 39.059542022016
            },
            {
                "name": "Haiti",
                "region": "America",
                "income": 1523.0748630574,
                "population": 4207934.3761506,
                "lifeExpectancy": 45.402776796784
            },
            {
                "name": "Moldova",
                "region": "Europe & Central Asia",
                "income": 3792.5498803805,
                "population": 3381417.0479017,
                "lifeExpectancy": 63.626415448773
            },
            {
                "name": "Benin",
                "region": "Sub-Saharan Africa",
                "income": 1049.0777213811,
                "population": 2355917.4029755,
                "lifeExpectancy": 43.373288875531
            },
            {
                "name": "Mongolia",
                "region": "East Asia & Pacific",
                "income": 1181.9706540933,
                "population": 1113260.946012,
                "lifeExpectancy": 50.26385505504
            },
            {
                "name": "Guatemala",
                "region": "America",
                "income": 3145.1929725364,
                "population": 4594005.058008,
                "lifeExpectancy": 49.023342976293
            },
            {
                "name": "Latvia",
                "region": "Europe & Central Asia",
                "income": 4104.2286309501,
                "population": 2273440.3623624,
                "lifeExpectancy": 71.168409662997
            },
            {
                "name": "Cuba",
                "region": "America",
                "income": 5159.7132340234,
                "population": 7948439.6277567,
                "lifeExpectancy": 67.519650223541
            },
            {
                "name": "Libya",
                "region": "Middle East & North Africa",
                "income": 16879.89310854,
                "population": 1679175.5023106,
                "lifeExpectancy": 49.373288875531
            },
            {
                "name": "Argentina",
                "region": "America",
                "income": 7969.9447574858,
                "population": 22542538.801668,
                "lifeExpectancy": 65.774771011008
            },
            {
                "name": "Ecuador",
                "region": "America",
                "income": 4484.4796855393,
                "population": 5240080.9897058,
                "lifeExpectancy": 56.145903370027
            },
            {
                "name": "Slovenia",
                "region": "Europe & Central Asia",
                "income": 9244.9840620656,
                "population": 1629510.936657,
                "lifeExpectancy": 69.22
            },
            {
                "name": "Tajikistan",
                "region": "Europe & Central Asia",
                "income": 3786.9886589316,
                "population": 2575485.8082429,
                "lifeExpectancy": 58.633800954277
            },
            {
                "name": "Togo",
                "region": "Sub-Saharan Africa",
                "income": 1418.8599530375,
                "population": 1681783.7363339,
                "lifeExpectancy": 47.19539129128
            },
            {
                "name": "Albania",
                "region": "Europe & Central Asia",
                "income": 2639.8615798174,
                "population": 1922595.7776985,
                "lifeExpectancy": 66.043234774768
            },
            {
                "name": "Armenia",
                "region": "Europe & Central Asia",
                "income": 2658.6863293319,
                "population": 2259427.5862419,
                "lifeExpectancy": 68.519596122779
            },
            {
                "name": "Jamaica",
                "region": "America",
                "income": 6005.7551831536,
                "population": 1811107.838374,
                "lifeExpectancy": 66.972210617275
            },
            {
                "name": "Bhutan",
                "region": "South Asia",
                "income": 803.82585407822,
                "population": 964161.9480783,
                "lifeExpectancy": 38.804313033024
            },
            {
                "name": "Macedonia, FYR",
                "region": "Europe & Central Asia",
                "income": 4180.3477533156,
                "population": 1485608.6726528,
                "lifeExpectancy": 64.162264718037
            },
            {
                "name": "Mauritania",
                "region": "Sub-Saharan Africa",
                "income": 1396.6432486757,
                "population": 1208764.8532141,
                "lifeExpectancy": 46.314825111771
            },
            {
                "name": "Turkmenistan",
                "region": "Europe & Central Asia",
                "income": 5406.1374388386,
                "population": 1924617.259308,
                "lifeExpectancy": 56.903800954277
            },
            {
                "name": "Estonia",
                "region": "Europe & Central Asia",
                "income": 6974.3060745911,
                "population": 1297576.5219597,
                "lifeExpectancy": 70.686307247248
            },
            {
                "name": "Australia",
                "region": "East Asia & Pacific",
                "income": 13835.514462186,
                "population": 11609734.102528,
                "lifeExpectancy": 70.853638651989
            },
            {
                "name": "Lebanon",
                "region": "Middle East & North Africa",
                "income": 6425.7148604276,
                "population": 2108200.4876207,
                "lifeExpectancy": 63.346415448773
            },
            {
                "name": "Oman",
                "region": "Middle East & North Africa",
                "income": 2898.9824443025,
                "population": 692923.98053876,
                "lifeExpectancy": 45.551806740053
            },
            {
                "name": "Congo, Rep.",
                "region": "Sub-Saharan Africa",
                "income": 2591.8674820603,
                "population": 1145443.8579479,
                "lifeExpectancy": 51.891752639291
            },
            {
                "name": "Liberia",
                "region": "Sub-Saharan Africa",
                "income": 717.91635458543,
                "population": 1236092.0161927,
                "lifeExpectancy": 42.703800954277
            },
            {
                "name": "Malaysia",
                "region": "East Asia & Pacific",
                "income": 2286.5397028215,
                "population": 9846790.7971222,
                "lifeExpectancy": 58.144421234549
            },
            {
                "name": "Lesotho",
                "region": "Sub-Saharan Africa",
                "income": 462.37268249615,
                "population": 969457.76034114,
                "lifeExpectancy": 48.350566179509
            },
            {
                "name": "El Salvador",
                "region": "America",
                "income": 4242.4913543976,
                "population": 3105005.0012398,
                "lifeExpectancy": 54.914879212533
            },
            {
                "name": "Namibia",
                "region": "Sub-Saharan Africa",
                "income": 4047.5729590112,
                "population": 684847.57842732,
                "lifeExpectancy": 50.272264718037
            },
            {
                "name": "Guinea-Bissau",
                "region": "Sub-Saharan Africa",
                "income": 716.91205319909,
                "population": 599302.8594883,
                "lifeExpectancy": 36.073234774768
            },
            {
                "name": "Jordan",
                "region": "Middle East & North Africa",
                "income": 2820.6945673817,
                "population": 1097729.4966375,
                "lifeExpectancy": 50.274421234549
            },
            {
                "name": "Israel",
                "region": "Middle East & North Africa",
                "income": 8374.6484051546,
                "population": 2627890.6055153,
                "lifeExpectancy": 70.317439606267
            },
            {
                "name": "Eritrea",
                "region": "Sub-Saharan Africa",
                "income": 457.45647706353,
                "population": 1767726.1485893,
                "lifeExpectancy": 41.521698538528
            },
            {
                "name": "Nicaragua",
                "region": "America",
                "income": 4480.9912694894,
                "population": 1795195.5749709,
                "lifeExpectancy": 50.799138144795
            },
            {
                "name": "Cyprus",
                "region": "Europe & Central Asia",
                "income": 5607.5526601796,
                "population": 594116.98538528,
                "lifeExpectancy": 69.907951685013
            },
            {
                "name": "Mauritius",
                "region": "Sub-Saharan Africa",
                "income": 2450.7664778149,
                "population": 770242.77897584,
                "lifeExpectancy": 61.161644437765
            },
            {
                "name": "Guyana",
                "region": "America",
                "income": 2264.1540271255,
                "population": 653119.56358718,
                "lifeExpectancy": 58.658517864523
            },
            {
                "name": "West Bank and Gaza",
                "region": "Middle East & North Africa",
                "income": 2532.1706349326,
                "population": 1230470.9818913,
                "lifeExpectancy": 50.2823188188
            },
            {
                "name": "Gabon",
                "region": "Sub-Saharan Africa",
                "income": 8032.5147683811,
                "population": 480019.346846,
                "lifeExpectancy": 43.023397077056
            },
            {
                "name": "Puerto Rico",
                "region": "America",
                "income": 6496.9722793704,
                "population": 2620935.8692565,
                "lifeExpectancy": 70.591132359019
            },
            {
                "name": "Paraguay",
                "region": "America",
                "income": 2226.8039005147,
                "population": 2216086.1289402,
                "lifeExpectancy": 64.804771011008
            },
            {
                "name": "Timor-Leste",
                "region": "East Asia & Pacific",
                "income": 1075.217099843,
                "population": 560222.94698877,
                "lifeExpectancy": 36.769650223541
            },
            {
                "name": "Malta",
                "region": "Europe & Central Asia",
                "income": 2651.0786110381,
                "population": 317835.62632904,
                "lifeExpectancy": 69.236873426757
            },
            {
                "name": "Fiji",
                "region": "East Asia & Pacific",
                "income": 1971.737224706,
                "population": 471780.68993501,
                "lifeExpectancy": 57.879596122779
            },
            {
                "name": "Honduras",
                "region": "America",
                "income": 2478.8551733854,
                "population": 2395881.7405418,
                "lifeExpectancy": 49.985957470789
            },
            {
                "name": "Luxembourg",
                "region": "Europe & Central Asia",
                "income": 19341.957403163,
                "population": 333391.47142803,
                "lifeExpectancy": 69.328921741744
            },
            {
                "name": "Montenegro",
                "region": "Europe & Central Asia",
                "income": 5807.0384160499,
                "population": 495385.19423677,
                "lifeExpectancy": 65.940728481797
            },
            {
                "name": "Botswana",
                "region": "Sub-Saharan Africa",
                "income": 1101.2151530977,
                "population": 544311.45001315,
                "lifeExpectancy": 52.662210617275
            },
            {
                "name": "New Zealand",
                "region": "East Asia & Pacific",
                "income": 15247.146889206,
                "population": 2677637.1097419,
                "lifeExpectancy": 71.169433820491
            },
            {
                "name": "Reunion",
                "region": "Sub-Saharan Africa",
                "income": 3818.8940658226,
                "population": 401113.48762069,
                "lifeExpectancy": 59.481752639291
            },
            {
                "name": "Swaziland",
                "region": "Sub-Saharan Africa",
                "income": 2440.8062114438,
                "population": 407741.8731262,
                "lifeExpectancy": 46.014313033024
            },
            {
                "name": "Martinique",
                "region": "America",
                "income": 8171.2325037611,
                "population": 314852.01784574,
                "lifeExpectancy": 65.916981628283
            },
            {
                "name": "Barbados",
                "region": "America",
                "income": 7004.6879366571,
                "population": 235964.82875606,
                "lifeExpectancy": 67.130620280272
            },
            {
                "name": "Kuwait",
                "region": "Middle East & North Africa",
                "income": 86425.483317805,
                "population": 513349.05312395,
                "lifeExpectancy": 63.175499492805
            },
            {
                "name": "Guadeloupe",
                "region": "America",
                "income": 3435.8658048224,
                "population": 305843.91114701,
                "lifeExpectancy": 65.499542022016
            },
            {
                "name": "Suriname",
                "region": "America",
                "income": 4588.8702830522,
                "population": 343897.01190968,
                "lifeExpectancy": 61.820108201525
            },
            {
                "name": "Equatorial Guinea",
                "region": "Sub-Saharan Africa",
                "income": 864.06902731337,
                "population": 255609.79062253,
                "lifeExpectancy": 38.47692752752
            },
            {
                "name": "Panama",
                "region": "America",
                "income": 4163.9998268024,
                "population": 1356928.7917121,
                "lifeExpectancy": 63.517493707029
            },
            {
                "name": "Bahrain",
                "region": "Middle East & North Africa",
                "income": 14186.392395837,
                "population": 195585.83288876,
                "lifeExpectancy": 58.889650223541
            },
            {
                "name": "French Polynesia",
                "region": "East Asia & Pacific",
                "income": 15322.906035241,
                "population": 97753.621144382,
                "lifeExpectancy": 58.471698538528
            },
            {
                "name": "Iceland",
                "region": "Europe & Central Asia",
                "income": 13510.709138896,
                "population": 194911.57748807,
                "lifeExpectancy": 73.358247360709
            },
            {
                "name": "Trinidad and Tobago",
                "region": "America",
                "income": 5517.3904282977,
                "population": 949742.99188489,
                "lifeExpectancy": 65.413180674005
            },
            {
                "name": "Solomon Islands",
                "region": "East Asia & Pacific",
                "income": 1287.2525317362,
                "population": 146159.03370027,
                "lifeExpectancy": 52.094879212533
            },
            {
                "name": "Comoros",
                "region": "Sub-Saharan Africa",
                "income": 1819.2889487921,
                "population": 210458.40158545,
                "lifeExpectancy": 45.771698538528
            },
            {
                "name": "Cape Verde",
                "region": "Sub-Saharan Africa",
                "income": 751.45367885186,
                "population": 237650.87553068,
                "lifeExpectancy": 54.609084044032
            },
            {
                "name": "Uruguay",
                "region": "America",
                "income": 5709.3976000301,
                "population": 2715304.6780253,
                "lifeExpectancy": 68.623692752752
            },
            {
                "name": "Costa Rica",
                "region": "America",
                "income": 4015.231972048,
                "population": 1527753.9490551,
                "lifeExpectancy": 64.762776796784
            },
            {
                "name": "Samoa",
                "region": "East Asia & Pacific",
                "income": 3439.5198882919,
                "population": 129590.56377503,
                "lifeExpectancy": 52.734879212533
            },
            {
                "name": "Netherlands Antilles",
                "region": "America",
                "income": 9465.5155117657,
                "population": 148259.40613142,
                "lifeExpectancy": 67.736415448773
            },
            {
                "name": "Maldives",
                "region": "South Asia",
                "income": 648.64082360897,
                "population": 100270.95469061,
                "lifeExpectancy": 47.227547807792
            },
            {
                "name": "United Arab Emirates",
                "region": "Middle East & North Africa",
                "income": 10667.755800178,
                "population": 153887.95363865,
                "lifeExpectancy": 57.5723188188
            },
            {
                "name": "Macao, China",
                "region": "East Asia & Pacific",
                "income": 7130.7499839201,
                "population": 230205.19686667,
                "lifeExpectancy": 63.778626066048
            },
            {
                "name": "Singapore",
                "region": "East Asia & Pacific",
                "income": 4454.4353368149,
                "population": 1924413.5251907,
                "lifeExpectancy": 67.281698538528
            },
            {
                "name": "New Caledonia",
                "region": "East Asia & Pacific",
                "income": 20001.567379118,
                "population": 92809.830634557,
                "lifeExpectancy": 59.758517864523
            },
            {
                "name": "Grenada",
                "region": "America",
                "income": 1919.8865990908,
                "population": 93518.240184844,
                "lifeExpectancy": 63.928975842507
            },
            {
                "name": "Vanuatu",
                "region": "East Asia & Pacific",
                "income": 2142.6410955091,
                "population": 75724.762069354,
                "lifeExpectancy": 49.97385505504
            },
            {
                "name": "Belize",
                "region": "America",
                "income": 2040.968908968,
                "population": 109452.73903896,
                "lifeExpectancy": 64.334879212533
            },
            {
                "name": "Djibouti",
                "region": "Middle East & North Africa",
                "income": 3023.373408348,
                "population": 117194.39628809,
                "lifeExpectancy": 41.269084044032
            },
            {
                "name": "Sao Tome and Principe",
                "region": "Sub-Saharan Africa",
                "income": 1312.4871901416,
                "population": 69539.990306947,
                "lifeExpectancy": 53.616981628283
            },
            {
                "name": "Hong Kong, China",
                "region": "East Asia & Pacific",
                "income": 6239.6398361949,
                "population": 3623172.2696021,
                "lifeExpectancy": 69.263288875531
            },
            {
                "name": "Aruba",
                "region": "America",
                "income": 3990.32966131,
                "population": 58713.573731074,
                "lifeExpectancy": 67.720620280272
            },
            {
                "name": "Tonga",
                "region": "East Asia & Pacific",
                "income": 1757.75211209,
                "population": 75974.967276553,
                "lifeExpectancy": 63.506415448773
            },
            {
                "name": "Micronesia, Fed. Sts.",
                "region": "East Asia & Pacific",
                "income": 3230.1971115083,
                "population": 49924.012322952,
                "lifeExpectancy": 59.895903370027
            },
            {
                "name": "Qatar",
                "region": "Middle East & North Africa",
                "income": 69506.352202825,
                "population": 75839.950520345,
                "lifeExpectancy": 57.438113987301
            },
            {
                "name": "French Guiana",
                "region": "America",
                "income": 5770.4922428785,
                "population": 41722.713754368,
                "lifeExpectancy": 62.622884998309
            },
            {
                "name": "Mayotte",
                "region": "Sub-Saharan Africa",
                "income": 9617.82,
                "population": 32198.828380359,
                "lifeExpectancy": 59.11385505504
            },
            {
                "name": "Brunei",
                "region": "East Asia & Pacific",
                "income": 45820.663555998,
                "population": 105742.83176166,
                "lifeExpectancy": 64.173288875531
            },
            {
                "name": "Tokelau",
                "region": "East Asia & Pacific",
                "income": 889.43,
                "population": 1810.0371416764,
                "lifeExpectancy": 69
            }
        ];
        var regions = d3__WEBPACK_IMPORTED_MODULE_1__["set"](data.map(function (d) { return d.region; }));
        var color = d3__WEBPACK_IMPORTED_MODULE_1__["scaleOrdinal"](d3__WEBPACK_IMPORTED_MODULE_1__["schemeCategory10"])
            .domain(regions.values());
        var legend = d3_svg_legend__WEBPACK_IMPORTED_MODULE_3__["legendColor"]()
            .scale(color);
        var size = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().range([20, 800])
            .domain(d3fc__WEBPACK_IMPORTED_MODULE_2__["extentLinear"]()
            .accessors([function (d) { return d.population; }])(data));
        var pointSeries = d3fc__WEBPACK_IMPORTED_MODULE_2__["seriesSvgPoint"]()
            .crossValue(function (d) { return d.income; })
            .mainValue(function (d) { return d.lifeExpectancy; })
            .size(function (d) { return size(d.population); })
            .decorate(function (sel) {
            sel.enter()
                .attr("fill", function (d) { return color(d.region); });
        });
        var chart = d3fc__WEBPACK_IMPORTED_MODULE_2__["chartSvgCartesian"](d3__WEBPACK_IMPORTED_MODULE_1__["scaleLog"](), d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]())
            .xDomain(d3fc__WEBPACK_IMPORTED_MODULE_2__["extentLinear"]()
            .accessors([function (d) { return d.income; }])(data))
            .yDomain(d3fc__WEBPACK_IMPORTED_MODULE_2__["extentLinear"]()
            .accessors([function (d) { return d.lifeExpectancy; }])(data))
            .chartLabel("The Wealth & Health of Nations")
            .xLabel("Income (dollars)")
            .yLabel("Life expectancy (years)")
            .xTicks(2, d3__WEBPACK_IMPORTED_MODULE_1__["format"](",d"))
            .yOrient("left")
            .plotArea(pointSeries)
            .decorate(function (selection) {
            // append an svg for the d3-legend
            selection.enter()
                .append("svg")
                .attr("class", "legend");
            // render the legend
            selection.select(".legend")
                .call(legend);
        });
        d3__WEBPACK_IMPORTED_MODULE_1__["select"]("#bubble-chart")
            .text(null)
            .datum(data)
            .call(chart);
        //  });
    };
    PieChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pie-chart',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: __webpack_require__(/*! ./pie-chart.component.html */ "./src/app/06_pie_chart/pie-chart.component.html"),
            styles: [__webpack_require__(/*! ./pie-chart.component.css */ "./src/app/06_pie_chart/pie-chart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PieChartComponent);
    return PieChartComponent;
}());



/***/ }),

/***/ "./src/app/07_donut_chart/donut-chart.component.css":
/*!**********************************************************!*\
  !*** ./src/app/07_donut_chart/donut-chart.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n\n.arc text {\n  font: 10px sans-serif;\n  text-anchor: middle;\n}\n\n.arc path {\n  stroke: #fff;\n}"

/***/ }),

/***/ "./src/app/07_donut_chart/donut-chart.component.html":
/*!***********************************************************!*\
  !*** ./src/app/07_donut_chart/donut-chart.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{ title }}</h2>\n<svg width=\"960\" height=\"500\"></svg>\n"

/***/ }),

/***/ "./src/app/07_donut_chart/donut-chart.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/07_donut_chart/donut-chart.component.ts ***!
  \*********************************************************/
/*! exports provided: DonutChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonutChartComponent", function() { return DonutChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/index.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/index.js");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DonutChartComponent = /** @class */ (function () {
    function DonutChartComponent() {
        this.title = 'Donut Chart';
    }
    DonutChartComponent.prototype.ngOnInit = function () {
        this.initSvg();
        this.drawChart(_shared__WEBPACK_IMPORTED_MODULE_4__["POPULATION"]);
    };
    DonutChartComponent.prototype.initSvg = function () {
        this.svg = d3_selection__WEBPACK_IMPORTED_MODULE_1__["select"]('svg');
        this.width = +this.svg.attr('width');
        this.height = +this.svg.attr('height');
        this.radius = Math.min(this.width, this.height) / 2;
        this.color = d3_scale__WEBPACK_IMPORTED_MODULE_2__["scaleOrdinal"]()
            .range(['#98abc5', '#8a89a6', '#7b6888', '#6b486b', '#a05d56', '#d0743c', '#ff8c00']);
        this.arc = d3_shape__WEBPACK_IMPORTED_MODULE_3__["arc"]()
            .outerRadius(this.radius - 10)
            .innerRadius(this.radius - 70);
        this.pie = d3_shape__WEBPACK_IMPORTED_MODULE_3__["pie"]()
            .sort(null)
            .value(function (d) { return d.population; });
        this.svg = d3_selection__WEBPACK_IMPORTED_MODULE_1__["select"]('svg')
            .append('g')
            .attr('transform', 'translate(' + this.width / 2 + ',' + this.height / 2 + ')');
    };
    DonutChartComponent.prototype.drawChart = function (data) {
        var _this = this;
        var g = this.svg.selectAll('.arc')
            .data(this.pie(data))
            .enter().append('g')
            .attr('class', 'arc');
        g.append('path')
            .attr('d', this.arc)
            .style('fill', function (d) { return _this.color(d.data.age); });
        g.append('text')
            .attr('transform', function (d) { return 'translate(' + _this.arc.centroid(d) + ')'; })
            .attr('dy', '.35em')
            .text(function (d) { return d.data.age; });
    };
    DonutChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-donut-chart',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: __webpack_require__(/*! ./donut-chart.component.html */ "./src/app/07_donut_chart/donut-chart.component.html"),
            styles: [__webpack_require__(/*! ./donut-chart.component.css */ "./src/app/07_donut_chart/donut-chart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DonutChartComponent);
    return DonutChartComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n    text-align:center\n}\n\nmat-drawer-content {\n    padding: 20px;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container fullscreen>\n    <mat-drawer mode=\"side\" opened=\"true\">\n        <mat-menu ></mat-menu>\n        <a mat-menu-item *ngFor=\"let item of examples\" [routerLink]=\"item.route\" routerLinkActive=\"active\">{{ item.title }}</a>\n    </mat-drawer>\n    <mat-drawer-content>\n        <h1>{{ title }}</h1>\n        <router-outlet></router-outlet>\n    </mat-drawer-content>\n</mat-drawer-container>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'D3.js with Angular!';
        this.examples = [
            {
                title: 'Tree Map',
                route: '/line-chart'
            },
            {
                title: 'Bar Chart',
                route: '/bar-chart'
            },
            {
                title: 'Stacked Bar Chart',
                route: '/stacked-bar-chart'
            },
            {
                title: 'Brush Zoom',
                route: '/brush-zoom'
            },
            {
                title: 'Buble Chart',
                route: '/pie-chart'
            },
            {
                title: 'Donut chart',
                route: '/donut-chart'
            },
        ];
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _01_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./01_line_chart/line-chart.component */ "./src/app/01_line_chart/line-chart.component.ts");
/* harmony import */ var _02_multi_series_line_chart_multi_series_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./02_multi_series_line_chart/multi-series.component */ "./src/app/02_multi_series_line_chart/multi-series.component.ts");
/* harmony import */ var _03_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./03_bar_chart/bar-chart.component */ "./src/app/03_bar_chart/bar-chart.component.ts");
/* harmony import */ var _04_stacked_bar_chart_stacked_bar_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./04_stacked_bar_chart/stacked-bar-chart.component */ "./src/app/04_stacked_bar_chart/stacked-bar-chart.component.ts");
/* harmony import */ var _05_brush_zoom_brush_zoom_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./05_brush_zoom/brush-zoom.component */ "./src/app/05_brush_zoom/brush-zoom.component.ts");
/* harmony import */ var _06_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./06_pie_chart/pie-chart.component */ "./src/app/06_pie_chart/pie-chart.component.ts");
/* harmony import */ var _07_donut_chart_donut_chart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./07_donut_chart/donut-chart.component */ "./src/app/07_donut_chart/donut-chart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: 'line-chart', component: _01_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_6__["LineChartComponent"] },
    { path: 'multi-series', component: _02_multi_series_line_chart_multi_series_component__WEBPACK_IMPORTED_MODULE_7__["MultiSeriesComponent"] },
    { path: 'bar-chart', component: _03_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_8__["BarChartComponent"] },
    { path: 'stacked-bar-chart', component: _04_stacked_bar_chart_stacked_bar_chart_component__WEBPACK_IMPORTED_MODULE_9__["StackedBarChartComponent"] },
    { path: 'brush-zoom', component: _05_brush_zoom_brush_zoom_component__WEBPACK_IMPORTED_MODULE_10__["BrushZoomComponent"] },
    { path: 'pie-chart', component: _06_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_11__["PieChartComponent"] },
    { path: 'donut-chart', component: _07_donut_chart_donut_chart_component__WEBPACK_IMPORTED_MODULE_12__["DonutChartComponent"] },
    { path: '',
        redirectTo: '/line-chart',
        pathMatch: 'full'
    },
    { path: '**', component: _01_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_6__["LineChartComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _01_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_6__["LineChartComponent"],
                _02_multi_series_line_chart_multi_series_component__WEBPACK_IMPORTED_MODULE_7__["MultiSeriesComponent"],
                _03_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_8__["BarChartComponent"],
                _04_stacked_bar_chart_stacked_bar_chart_component__WEBPACK_IMPORTED_MODULE_9__["StackedBarChartComponent"],
                _05_brush_zoom_brush_zoom_component__WEBPACK_IMPORTED_MODULE_10__["BrushZoomComponent"],
                _06_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_11__["PieChartComponent"],
                _07_donut_chart_donut_chart_component__WEBPACK_IMPORTED_MODULE_12__["DonutChartComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/shared/data04.ts":
/*!**********************************!*\
  !*** ./src/app/shared/data04.ts ***!
  \**********************************/
/*! exports provided: SAMPLE_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAMPLE_DATA", function() { return SAMPLE_DATA; });
var SAMPLE_DATA = [
    { State: 'AL', 'Under 5 Years': 310504, '5 to 13 Years': 552339, '14 to 17 Years': 259034, '18 to 24 Years': 450818, '25 to 44 Years': 1231572, '45 to 64 Years': 1215966, '65 Years and Over': 641667 },
    { State: 'AK', 'Under 5 Years': 52083, '5 to 13 Years': 85640, '14 to 17 Years': 42153, '18 to 24 Years': 74257, '25 to 44 Years': 198724, '45 to 64 Years': 183159, '65 Years and Over': 50277 },
    { State: 'AZ', 'Under 5 Years': 515910, '5 to 13 Years': 828669, '14 to 17 Years': 362642, '18 to 24 Years': 601943, '25 to 44 Years': 1804762, '45 to 64 Years': 1523681, '65 Years and Over': 862573 },
    { State: 'AR', 'Under 5 Years': 202070, '5 to 13 Years': 343207, '14 to 17 Years': 157204, '18 to 24 Years': 264160, '25 to 44 Years': 754420, '45 to 64 Years': 727124, '65 Years and Over': 407205 },
    { State: 'CA', 'Under 5 Years': 2704659, '5 to 13 Years': 4499890, '14 to 17 Years': 2159981, '18 to 24 Years': 3853788, '25 to 44 Years': 10604510, '45 to 64 Years': 8819342, '65 Years and Over': 4114496 },
    { State: 'CO', 'Under 5 Years': 358280, '5 to 13 Years': 587154, '14 to 17 Years': 261701, '18 to 24 Years': 466194, '25 to 44 Years': 1464939, '45 to 64 Years': 1290094, '65 Years and Over': 511094 },
    { State: 'CT', 'Under 5 Years': 211637, '5 to 13 Years': 403658, '14 to 17 Years': 196918, '18 to 24 Years': 325110, '25 to 44 Years': 916955, '45 to 64 Years': 968967, '65 Years and Over': 478007 },
    { State: 'DE', 'Under 5 Years': 59319, '5 to 13 Years': 99496, '14 to 17 Years': 47414, '18 to 24 Years': 84464, '25 to 44 Years': 230183, '45 to 64 Years': 230528, '65 Years and Over': 121688 },
    { State: 'DC', 'Under 5 Years': 36352, '5 to 13 Years': 50439, '14 to 17 Years': 25225, '18 to 24 Years': 75569, '25 to 44 Years': 193557, '45 to 64 Years': 140043, '65 Years and Over': 70648 },
    { State: 'FL', 'Under 5 Years': 1140516, '5 to 13 Years': 1938695, '14 to 17 Years': 925060, '18 to 24 Years': 1607297, '25 to 44 Years': 4782119, '45 to 64 Years': 4746856, '65 Years and Over': 3187797 },
    { State: 'GA', 'Under 5 Years': 740521, '5 to 13 Years': 1250460, '14 to 17 Years': 557860, '18 to 24 Years': 919876, '25 to 44 Years': 2846985, '45 to 64 Years': 2389018, '65 Years and Over': 981024 },
    { State: 'HI', 'Under 5 Years': 87207, '5 to 13 Years': 134025, '14 to 17 Years': 64011, '18 to 24 Years': 124834, '25 to 44 Years': 356237, '45 to 64 Years': 331817, '65 Years and Over': 190067 },
    { State: 'ID', 'Under 5 Years': 121746, '5 to 13 Years': 201192, '14 to 17 Years': 89702, '18 to 24 Years': 147606, '25 to 44 Years': 406247, '45 to 64 Years': 375173, '65 Years and Over': 182150 },
    { State: 'IL', 'Under 5 Years': 894368, '5 to 13 Years': 1558919, '14 to 17 Years': 725973, '18 to 24 Years': 1311479, '25 to 44 Years': 3596343, '45 to 64 Years': 3239173, '65 Years and Over': 1575308 },
    { State: 'IN', 'Under 5 Years': 443089, '5 to 13 Years': 780199, '14 to 17 Years': 361393, '18 to 24 Years': 605863, '25 to 44 Years': 1724528, '45 to 64 Years': 1647881, '65 Years and Over': 813839 },
    { State: 'IA', 'Under 5 Years': 201321, '5 to 13 Years': 345409, '14 to 17 Years': 165883, '18 to 24 Years': 306398, '25 to 44 Years': 750505, '45 to 64 Years': 788485, '65 Years and Over': 444554 },
    { State: 'KS', 'Under 5 Years': 202529, '5 to 13 Years': 342134, '14 to 17 Years': 155822, '18 to 24 Years': 293114, '25 to 44 Years': 728166, '45 to 64 Years': 713663, '65 Years and Over': 366706 },
    { State: 'KY', 'Under 5 Years': 284601, '5 to 13 Years': 493536, '14 to 17 Years': 229927, '18 to 24 Years': 381394, '25 to 44 Years': 1179637, '45 to 64 Years': 1134283, '65 Years and Over': 565867 },
    { State: 'LA', 'Under 5 Years': 310716, '5 to 13 Years': 542341, '14 to 17 Years': 254916, '18 to 24 Years': 471275, '25 to 44 Years': 1162463, '45 to 64 Years': 1128771, '65 Years and Over': 540314 },
    { State: 'ME', 'Under 5 Years': 71459, '5 to 13 Years': 133656, '14 to 17 Years': 69752, '18 to 24 Years': 112682, '25 to 44 Years': 331809, '45 to 64 Years': 397911, '65 Years and Over': 199187 },
    { State: 'MD', 'Under 5 Years': 371787, '5 to 13 Years': 651923, '14 to 17 Years': 316873, '18 to 24 Years': 543470, '25 to 44 Years': 1556225, '45 to 64 Years': 1513754, '65 Years and Over': 679565 },
    { State: 'MA', 'Under 5 Years': 383568, '5 to 13 Years': 701752, '14 to 17 Years': 341713, '18 to 24 Years': 665879, '25 to 44 Years': 1782449, '45 to 64 Years': 1751508, '65 Years and Over': 871098 },
    { State: 'MI', 'Under 5 Years': 625526, '5 to 13 Years': 1179503, '14 to 17 Years': 585169, '18 to 24 Years': 974480, '25 to 44 Years': 2628322, '45 to 64 Years': 2706100, '65 Years and Over': 1304322 },
    { State: 'MN', 'Under 5 Years': 358471, '5 to 13 Years': 606802, '14 to 17 Years': 289371, '18 to 24 Years': 507289, '25 to 44 Years': 1416063, '45 to 64 Years': 1391878, '65 Years and Over': 650519 },
    { State: 'MS', 'Under 5 Years': 220813, '5 to 13 Years': 371502, '14 to 17 Years': 174405, '18 to 24 Years': 305964, '25 to 44 Years': 764203, '45 to 64 Years': 730133, '65 Years and Over': 371598 },
    { State: 'MO', 'Under 5 Years': 399450, '5 to 13 Years': 690476, '14 to 17 Years': 331543, '18 to 24 Years': 560463, '25 to 44 Years': 1569626, '45 to 64 Years': 1554812, '65 Years and Over': 805235 },
    { State: 'MT', 'Under 5 Years': 61114, '5 to 13 Years': 106088, '14 to 17 Years': 53156, '18 to 24 Years': 95232, '25 to 44 Years': 236297, '45 to 64 Years': 278241, '65 Years and Over': 137312 },
    { State: 'NE', 'Under 5 Years': 132092, '5 to 13 Years': 215265, '14 to 17 Years': 99638, '18 to 24 Years': 186657, '25 to 44 Years': 457177, '45 to 64 Years': 451756, '65 Years and Over': 240847 },
    { State: 'NV', 'Under 5 Years': 199175, '5 to 13 Years': 325650, '14 to 17 Years': 142976, '18 to 24 Years': 212379, '25 to 44 Years': 769913, '45 to 64 Years': 653357, '65 Years and Over': 296717 },
    { State: 'NH', 'Under 5 Years': 75297, '5 to 13 Years': 144235, '14 to 17 Years': 73826, '18 to 24 Years': 119114, '25 to 44 Years': 345109, '45 to 64 Years': 388250, '65 Years and Over': 169978 },
    { State: 'NJ', 'Under 5 Years': 557421, '5 to 13 Years': 1011656, '14 to 17 Years': 478505, '18 to 24 Years': 769321, '25 to 44 Years': 2379649, '45 to 64 Years': 2335168, '65 Years and Over': 1150941 },
    { State: 'NM', 'Under 5 Years': 148323, '5 to 13 Years': 241326, '14 to 17 Years': 112801, '18 to 24 Years': 203097, '25 to 44 Years': 517154, '45 to 64 Years': 501604, '65 Years and Over': 260051 },
    { State: 'NY', 'Under 5 Years': 1208495, '5 to 13 Years': 2141490, '14 to 17 Years': 1058031, '18 to 24 Years': 1999120, '25 to 44 Years': 5355235, '45 to 64 Years': 5120254, '65 Years and Over': 2607672 },
    { State: 'NC', 'Under 5 Years': 652823, '5 to 13 Years': 1097890, '14 to 17 Years': 492964, '18 to 24 Years': 883397, '25 to 44 Years': 2575603, '45 to 64 Years': 2380685, '65 Years and Over': 1139052 },
    { State: 'ND', 'Under 5 Years': 41896, '5 to 13 Years': 67358, '14 to 17 Years': 33794, '18 to 24 Years': 82629, '25 to 44 Years': 154913, '45 to 64 Years': 166615, '65 Years and Over': 94276 },
    { State: 'OH', 'Under 5 Years': 743750, '5 to 13 Years': 1340492, '14 to 17 Years': 646135, '18 to 24 Years': 1081734, '25 to 44 Years': 3019147, '45 to 64 Years': 3083815, '65 Years and Over': 1570837 },
    { State: 'OK', 'Under 5 Years': 266547, '5 to 13 Years': 438926, '14 to 17 Years': 200562, '18 to 24 Years': 369916, '25 to 44 Years': 957085, '45 to 64 Years': 918688, '65 Years and Over': 490637 },
    { State: 'OR', 'Under 5 Years': 243483, '5 to 13 Years': 424167, '14 to 17 Years': 199925, '18 to 24 Years': 338162, '25 to 44 Years': 1044056, '45 to 64 Years': 1036269, '65 Years and Over': 503998 },
    { State: 'PA', 'Under 5 Years': 737462, '5 to 13 Years': 1345341, '14 to 17 Years': 679201, '18 to 24 Years': 1203944, '25 to 44 Years': 3157759, '45 to 64 Years': 3414001, '65 Years and Over': 1910571 },
    { State: 'RI', 'Under 5 Years': 60934, '5 to 13 Years': 111408, '14 to 17 Years': 56198, '18 to 24 Years': 114502, '25 to 44 Years': 277779, '45 to 64 Years': 282321, '65 Years and Over': 147646 },
    { State: 'SC', 'Under 5 Years': 303024, '5 to 13 Years': 517803, '14 to 17 Years': 245400, '18 to 24 Years': 438147, '25 to 44 Years': 1193112, '45 to 64 Years': 1186019, '65 Years and Over': 596295 },
    { State: 'SD', 'Under 5 Years': 58566, '5 to 13 Years': 94438, '14 to 17 Years': 45305, '18 to 24 Years': 82869, '25 to 44 Years': 196738, '45 to 64 Years': 210178, '65 Years and Over': 116100 },
    { State: 'TN', 'Under 5 Years': 416334, '5 to 13 Years': 725948, '14 to 17 Years': 336312, '18 to 24 Years': 550612, '25 to 44 Years': 1719433, '45 to 64 Years': 1646623, '65 Years and Over': 819626 },
    { State: 'TX', 'Under 5 Years': 2027307, '5 to 13 Years': 3277946, '14 to 17 Years': 1420518, '18 to 24 Years': 2454721, '25 to 44 Years': 7017731, '45 to 64 Years': 5656528, '65 Years and Over': 2472223 },
    { State: 'UT', 'Under 5 Years': 268916, '5 to 13 Years': 413034, '14 to 17 Years': 167685, '18 to 24 Years': 329585, '25 to 44 Years': 772024, '45 to 64 Years': 538978, '65 Years and Over': 246202 },
    { State: 'VT', 'Under 5 Years': 32635, '5 to 13 Years': 62538, '14 to 17 Years': 33757, '18 to 24 Years': 61679, '25 to 44 Years': 155419, '45 to 64 Years': 188593, '65 Years and Over': 86649 },
    { State: 'VA', 'Under 5 Years': 522672, '5 to 13 Years': 887525, '14 to 17 Years': 413004, '18 to 24 Years': 768475, '25 to 44 Years': 2203286, '45 to 64 Years': 2033550, '65 Years and Over': 940577 },
    { State: 'WA', 'Under 5 Years': 433119, '5 to 13 Years': 750274, '14 to 17 Years': 357782, '18 to 24 Years': 610378, '25 to 44 Years': 1850983, '45 to 64 Years': 1762811, '65 Years and Over': 783877 },
    { State: 'WV', 'Under 5 Years': 105435, '5 to 13 Years': 189649, '14 to 17 Years': 91074, '18 to 24 Years': 157989, '25 to 44 Years': 470749, '45 to 64 Years': 514505, '65 Years and Over': 285067 },
    { State: 'WI', 'Under 5 Years': 362277, '5 to 13 Years': 640286, '14 to 17 Years': 311849, '18 to 24 Years': 553914, '25 to 44 Years': 1487457, '45 to 64 Years': 1522038, '65 Years and Over': 750146 },
    { State: 'WY', 'Under 5 Years': 38253, '5 to 13 Years': 60890, '14 to 17 Years': 29314, '18 to 24 Years': 53980, '25 to 44 Years': 137338, '45 to 64 Years': 147279, '65 Years and Over': 65614 }
];


/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: SAMPLE_DATA, STOCKS, TEMPERATURES, STATISTICS, SP500, POPULATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stocks */ "./src/app/shared/stocks.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STOCKS", function() { return _stocks__WEBPACK_IMPORTED_MODULE_0__["STOCKS"]; });

/* harmony import */ var _temperatures__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./temperatures */ "./src/app/shared/temperatures.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TEMPERATURES", function() { return _temperatures__WEBPACK_IMPORTED_MODULE_1__["TEMPERATURES"]; });

/* harmony import */ var _statistics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./statistics */ "./src/app/shared/statistics.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATISTICS", function() { return _statistics__WEBPACK_IMPORTED_MODULE_2__["STATISTICS"]; });

/* harmony import */ var _data04__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data04 */ "./src/app/shared/data04.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SAMPLE_DATA", function() { return _data04__WEBPACK_IMPORTED_MODULE_3__["SAMPLE_DATA"]; });

/* harmony import */ var _sp500__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sp500 */ "./src/app/shared/sp500.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SP500", function() { return _sp500__WEBPACK_IMPORTED_MODULE_4__["SP500"]; });

/* harmony import */ var _population__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./population */ "./src/app/shared/population.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "POPULATION", function() { return _population__WEBPACK_IMPORTED_MODULE_5__["POPULATION"]; });









/***/ }),

/***/ "./src/app/shared/population.ts":
/*!**************************************!*\
  !*** ./src/app/shared/population.ts ***!
  \**************************************/
/*! exports provided: POPULATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POPULATION", function() { return POPULATION; });
var POPULATION = [
    { age: '<5', population: 2704659 },
    { age: '5-13', population: 4499890 },
    { age: '14-17', population: 2159981 },
    { age: '18-24', population: 3853788 },
    { age: '25-44', population: 14106543 },
    { age: '45-64', population: 8819342 },
    { age: '≥65', population: 612463 }
];


/***/ }),

/***/ "./src/app/shared/sp500.ts":
/*!*********************************!*\
  !*** ./src/app/shared/sp500.ts ***!
  \*********************************/
/*! exports provided: SP500 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SP500", function() { return SP500; });
var SP500 = [
    { date: 'Jan 2000', price: 1394.46 },
    { date: 'Feb 2000', price: 1366.42 },
    { date: 'Mar 2000', price: 1498.58 },
    { date: 'Apr 2000', price: 1452.43 },
    { date: 'May 2000', price: 1420.6 },
    { date: 'Jun 2000', price: 1454.6 },
    { date: 'Jul 2000', price: 1430.83 },
    { date: 'Aug 2000', price: 1517.68 },
    { date: 'Sep 2000', price: 1436.51 },
    { date: 'Oct 2000', price: 1429.4 },
    { date: 'Nov 2000', price: 1314.95 },
    { date: 'Dec 2000', price: 1320.28 },
    { date: 'Jan 2001', price: 1366.01 },
    { date: 'Feb 2001', price: 1239.94 },
    { date: 'Mar 2001', price: 1160.33 },
    { date: 'Apr 2001', price: 1249.46 },
    { date: 'May 2001', price: 1255.82 },
    { date: 'Jun 2001', price: 1224.38 },
    { date: 'Jul 2001', price: 1211.23 },
    { date: 'Aug 2001', price: 1133.58 },
    { date: 'Sep 2001', price: 1040.94 },
    { date: 'Oct 2001', price: 1059.78 },
    { date: 'Nov 2001', price: 1139.45 },
    { date: 'Dec 2001', price: 1148.08 },
    { date: 'Jan 2002', price: 1130.2 },
    { date: 'Feb 2002', price: 1106.73 },
    { date: 'Mar 2002', price: 1147.39 },
    { date: 'Apr 2002', price: 1076.92 },
    { date: 'May 2002', price: 1067.14 },
    { date: 'Jun 2002', price: 989.82 },
    { date: 'Jul 2002', price: 911.62 },
    { date: 'Aug 2002', price: 916.07 },
    { date: 'Sep 2002', price: 815.28 },
    { date: 'Oct 2002', price: 885.76 },
    { date: 'Nov 2002', price: 936.31 },
    { date: 'Dec 2002', price: 879.82 },
    { date: 'Jan 2003', price: 855.7 },
    { date: 'Feb 2003', price: 841.15 },
    { date: 'Mar 2003', price: 848.18 },
    { date: 'Apr 2003', price: 916.92 },
    { date: 'May 2003', price: 963.59 },
    { date: 'Jun 2003', price: 974.5 },
    { date: 'Jul 2003', price: 990.31 },
    { date: 'Aug 2003', price: 1008.01 },
    { date: 'Sep 2003', price: 995.97 },
    { date: 'Oct 2003', price: 1050.71 },
    { date: 'Nov 2003', price: 1058.2 },
    { date: 'Dec 2003', price: 1111.92 },
    { date: 'Jan 2004', price: 1131.13 },
    { date: 'Feb 2004', price: 1144.94 },
    { date: 'Mar 2004', price: 1126.21 },
    { date: 'Apr 2004', price: 1107.3 },
    { date: 'May 2004', price: 1120.68 },
    { date: 'Jun 2004', price: 1140.84 },
    { date: 'Jul 2004', price: 1101.72 },
    { date: 'Aug 2004', price: 1104.24 },
    { date: 'Sep 2004', price: 1114.58 },
    { date: 'Oct 2004', price: 1130.2 },
    { date: 'Nov 2004', price: 1173.82 },
    { date: 'Dec 2004', price: 1211.92 },
    { date: 'Jan 2005', price: 1181.27 },
    { date: 'Feb 2005', price: 1203.6 },
    { date: 'Mar 2005', price: 1180.59 },
    { date: 'Apr 2005', price: 1156.85 },
    { date: 'May 2005', price: 1191.5 },
    { date: 'Jun 2005', price: 1191.33 },
    { date: 'Jul 2005', price: 1234.18 },
    { date: 'Aug 2005', price: 1220.33 },
    { date: 'Sep 2005', price: 1228.81 },
    { date: 'Oct 2005', price: 1207.01 },
    { date: 'Nov 2005', price: 1249.48 },
    { date: 'Dec 2005', price: 1248.29 },
    { date: 'Jan 2006', price: 1280.08 },
    { date: 'Feb 2006', price: 1280.66 },
    { date: 'Mar 2006', price: 1294.87 },
    { date: 'Apr 2006', price: 1310.61 },
    { date: 'May 2006', price: 1270.09 },
    { date: 'Jun 2006', price: 1270.2 },
    { date: 'Jul 2006', price: 1276.66 },
    { date: 'Aug 2006', price: 1303.82 },
    { date: 'Sep 2006', price: 1335.85 },
    { date: 'Oct 2006', price: 1377.94 },
    { date: 'Nov 2006', price: 1400.63 },
    { date: 'Dec 2006', price: 1418.3 },
    { date: 'Jan 2007', price: 1438.24 },
    { date: 'Feb 2007', price: 1406.82 },
    { date: 'Mar 2007', price: 1420.86 },
    { date: 'Apr 2007', price: 1482.37 },
    { date: 'May 2007', price: 1530.62 },
    { date: 'Jun 2007', price: 1503.35 },
    { date: 'Jul 2007', price: 1455.27 },
    { date: 'Aug 2007', price: 1473.99 },
    { date: 'Sep 2007', price: 1526.75 },
    { date: 'Oct 2007', price: 1549.38 },
    { date: 'Nov 2007', price: 1481.14 },
    { date: 'Dec 2007', price: 1468.36 },
    { date: 'Jan 2008', price: 1378.55 },
    { date: 'Feb 2008', price: 1330.63 },
    { date: 'Mar 2008', price: 1322.7 },
    { date: 'Apr 2008', price: 1385.59 },
    { date: 'May 2008', price: 1400.38 },
    { date: 'Jun 2008', price: 1280 },
    { date: 'Jul 2008', price: 1267.38 },
    { date: 'Aug 2008', price: 1282.83 },
    { date: 'Sep 2008', price: 1166.36 },
    { date: 'Oct 2008', price: 968.75 },
    { date: 'Nov 2008', price: 896.24 },
    { date: 'Dec 2008', price: 903.25 },
    { date: 'Jan 2009', price: 825.88 },
    { date: 'Feb 2009', price: 735.09 },
    { date: 'Mar 2009', price: 797.87 },
    { date: 'Apr 2009', price: 872.81 },
    { date: 'May 2009', price: 919.14 },
    { date: 'Jun 2009', price: 919.32 },
    { date: 'Jul 2009', price: 987.48 },
    { date: 'Aug 2009', price: 1020.62 },
    { date: 'Sep 2009', price: 1057.08 },
    { date: 'Oct 2009', price: 1036.19 },
    { date: 'Nov 2009', price: 1095.63 },
    { date: 'Dec 2009', price: 1115.1 },
    { date: 'Jan 2010', price: 1073.87 },
    { date: 'Feb 2010', price: 1104.49 },
    { date: 'Mar 2010', price: 1140.45 }
];


/***/ }),

/***/ "./src/app/shared/statistics.ts":
/*!**************************************!*\
  !*** ./src/app/shared/statistics.ts ***!
  \**************************************/
/*! exports provided: STATISTICS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATISTICS", function() { return STATISTICS; });
var STATISTICS = [
    { letter: 'A', frequency: .08167 },
    { letter: 'B', frequency: .01492 },
    { letter: 'C', frequency: .02782 },
    { letter: 'D', frequency: .04253 },
    { letter: 'E', frequency: .12702 },
    { letter: 'F', frequency: .02288 },
    { letter: 'G', frequency: .02015 },
    { letter: 'H', frequency: .06094 },
    { letter: 'I', frequency: .06966 },
    { letter: 'J', frequency: .00153 },
    { letter: 'K', frequency: .00772 },
    { letter: 'L', frequency: .04025 },
    { letter: 'M', frequency: .02406 },
    { letter: 'N', frequency: .06749 },
    { letter: 'O', frequency: .07507 },
    { letter: 'P', frequency: .01929 },
    { letter: 'Q', frequency: .00095 },
    { letter: 'R', frequency: .05987 },
    { letter: 'S', frequency: .06327 },
    { letter: 'T', frequency: .09056 },
    { letter: 'U', frequency: .02758 },
    { letter: 'V', frequency: .00978 },
    { letter: 'W', frequency: .02360 },
    { letter: 'X', frequency: .00150 },
    { letter: 'Y', frequency: .01974 },
    { letter: 'Z', frequency: .00074 }
];


/***/ }),

/***/ "./src/app/shared/stocks.ts":
/*!**********************************!*\
  !*** ./src/app/shared/stocks.ts ***!
  \**********************************/
/*! exports provided: STOCKS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOCKS", function() { return STOCKS; });
var STOCKS = [
    { date: new Date('2010-01-01'), value: 210.73 },
    { date: new Date('2010-01-04'), value: 214.01 },
    { date: new Date('2010-01-05'), value: 214.38 },
    { date: new Date('2010-01-06'), value: 210.97 },
    { date: new Date('2010-01-07'), value: 210.58 },
    { date: new Date('2010-01-08'), value: 211.98 },
    { date: new Date('2010-01-11'), value: 210.11 },
    { date: new Date('2010-01-12'), value: 207.72 },
    { date: new Date('2010-01-13'), value: 210.65 },
    { date: new Date('2010-01-14'), value: 209.43 },
    { date: new Date('2010-01-15'), value: 205.93 },
    { date: new Date('2010-01-18'), value: 205.93 },
    { date: new Date('2010-01-19'), value: 215.04 },
    { date: new Date('2010-01-20'), value: 211.72 },
    { date: new Date('2010-01-21'), value: 208.07 },
    { date: new Date('2010-01-22'), value: 197.75 },
    { date: new Date('2010-01-25'), value: 203.08 },
    { date: new Date('2010-01-26'), value: 205.94 },
    { date: new Date('2010-01-27'), value: 207.88 },
    { date: new Date('2010-01-28'), value: 199.29 },
    { date: new Date('2010-01-29'), value: 192.06 },
    { date: new Date('2010-02-01'), value: 194.73 },
    { date: new Date('2010-02-02'), value: 195.86 },
    { date: new Date('2010-02-03'), value: 199.23 },
    { date: new Date('2010-02-04'), value: 192.05 },
    { date: new Date('2010-02-05'), value: 195.46 },
    { date: new Date('2010-02-08'), value: 194.12 },
    { date: new Date('2010-02-09'), value: 196.19 },
    { date: new Date('2010-02-10'), value: 195.12 },
    { date: new Date('2010-02-11'), value: 198.67 },
    { date: new Date('2010-02-12'), value: 200.38 },
    { date: new Date('2010-02-15'), value: 200.38 },
    { date: new Date('2010-02-16'), value: 203.40 },
    { date: new Date('2010-02-17'), value: 202.55 },
    { date: new Date('2010-02-18'), value: 202.93 },
    { date: new Date('2010-02-19'), value: 201.67 },
    { date: new Date('2010-02-22'), value: 200.42 },
    { date: new Date('2010-02-23'), value: 197.06 },
    { date: new Date('2010-02-24'), value: 200.66 },
    { date: new Date('2010-02-25'), value: 202.00 },
    { date: new Date('2010-02-26'), value: 204.62 },
    { date: new Date('2010-03-01'), value: 208.99 },
    { date: new Date('2010-03-02'), value: 208.85 },
    { date: new Date('2010-03-03'), value: 209.33 },
    { date: new Date('2010-03-04'), value: 210.71 },
    { date: new Date('2010-03-05'), value: 218.95 },
    { date: new Date('2010-03-08'), value: 219.08 },
    { date: new Date('2010-03-09'), value: 223.02 },
    { date: new Date('2010-03-10'), value: 224.84 },
    { date: new Date('2010-03-11'), value: 225.50 },
    { date: new Date('2010-03-12'), value: 226.60 },
    { date: new Date('2010-03-15'), value: 223.84 },
    { date: new Date('2010-03-16'), value: 224.45 },
    { date: new Date('2010-03-17'), value: 224.12 },
    { date: new Date('2010-03-18'), value: 224.65 },
    { date: new Date('2010-03-19'), value: 222.25 },
    { date: new Date('2010-03-22'), value: 224.75 },
    { date: new Date('2010-03-23'), value: 228.36 },
    { date: new Date('2010-03-24'), value: 229.37 },
    { date: new Date('2010-03-25'), value: 226.65 },
    { date: new Date('2010-03-26'), value: 230.90 },
    { date: new Date('2010-03-29'), value: 232.39 },
    { date: new Date('2010-03-30'), value: 235.84 },
    { date: new Date('2010-03-31'), value: 235.00 },
    { date: new Date('2010-04-01'), value: 235.97 },
    { date: new Date('2010-04-02'), value: 235.97 },
    { date: new Date('2010-04-05'), value: 238.49 },
    { date: new Date('2010-04-06'), value: 239.54 },
    { date: new Date('2010-04-07'), value: 240.60 },
    { date: new Date('2010-04-08'), value: 239.95 },
    { date: new Date('2010-04-09'), value: 241.79 },
    { date: new Date('2010-04-12'), value: 242.29 },
    { date: new Date('2010-04-13'), value: 242.43 },
    { date: new Date('2010-04-14'), value: 245.69 },
    { date: new Date('2010-04-15'), value: 248.92 },
    { date: new Date('2010-04-16'), value: 247.40 },
    { date: new Date('2010-04-19'), value: 247.07 },
    { date: new Date('2010-04-20'), value: 244.59 },
    { date: new Date('2010-04-21'), value: 259.22 },
    { date: new Date('2010-04-22'), value: 266.47 },
    { date: new Date('2010-04-23'), value: 270.83 },
    { date: new Date('2010-04-26'), value: 269.50 },
    { date: new Date('2010-04-27'), value: 262.04 },
    { date: new Date('2010-04-28'), value: 261.60 },
    { date: new Date('2010-04-29'), value: 268.64 },
    { date: new Date('2010-04-30'), value: 261.09 },
    { date: new Date('2010-05-03'), value: 266.35 },
    { date: new Date('2010-05-04'), value: 258.68 },
    { date: new Date('2010-05-05'), value: 255.98 },
    { date: new Date('2010-05-06'), value: 246.25 },
    { date: new Date('2010-05-07'), value: 235.86 },
    { date: new Date('2010-05-10'), value: 253.99 },
    { date: new Date('2010-05-11'), value: 256.52 },
    { date: new Date('2010-05-12'), value: 262.09 },
    { date: new Date('2010-05-13'), value: 258.36 },
    { date: new Date('2010-05-14'), value: 253.82 },
    { date: new Date('2010-05-17'), value: 254.22 },
    { date: new Date('2010-05-18'), value: 252.36 },
    { date: new Date('2010-05-19'), value: 248.34 },
    { date: new Date('2010-05-20'), value: 237.76 },
    { date: new Date('2010-05-21'), value: 242.32 },
    { date: new Date('2010-05-24'), value: 246.76 },
    { date: new Date('2010-05-25'), value: 245.22 },
    { date: new Date('2010-05-26'), value: 244.11 },
    { date: new Date('2010-05-27'), value: 253.35 },
    { date: new Date('2010-05-28'), value: 256.88 },
    { date: new Date('2010-05-31'), value: 256.88 },
    { date: new Date('2010-06-01'), value: 260.83 },
    { date: new Date('2010-06-02'), value: 263.95 },
    { date: new Date('2010-06-03'), value: 263.12 },
    { date: new Date('2010-06-04'), value: 255.96 },
    { date: new Date('2010-06-07'), value: 250.94 },
    { date: new Date('2010-06-08'), value: 249.33 },
    { date: new Date('2010-06-09'), value: 243.20 },
    { date: new Date('2010-06-10'), value: 250.51 },
    { date: new Date('2010-06-11'), value: 253.51 },
    { date: new Date('2010-06-14'), value: 254.28 },
    { date: new Date('2010-06-15'), value: 259.69 },
    { date: new Date('2010-06-16'), value: 267.25 },
    { date: new Date('2010-06-17'), value: 271.87 },
    { date: new Date('2010-06-18'), value: 274.07 },
    { date: new Date('2010-06-21'), value: 270.17 },
    { date: new Date('2010-06-22'), value: 273.85 },
    { date: new Date('2010-06-23'), value: 270.97 },
    { date: new Date('2010-06-24'), value: 269.00 },
    { date: new Date('2010-06-25'), value: 266.70 },
    { date: new Date('2010-06-28'), value: 268.30 },
    { date: new Date('2010-06-29'), value: 256.17 },
    { date: new Date('2010-06-30'), value: 251.53 },
    { date: new Date('2010-07-01'), value: 248.48 },
    { date: new Date('2010-07-02'), value: 246.94 },
    { date: new Date('2010-07-05'), value: 246.94 },
    { date: new Date('2010-07-06'), value: 248.63 },
    { date: new Date('2010-07-07'), value: 258.66 },
    { date: new Date('2010-07-08'), value: 258.09 },
    { date: new Date('2010-07-09'), value: 259.62 },
    { date: new Date('2010-07-12'), value: 257.28 },
    { date: new Date('2010-07-13'), value: 251.80 },
    { date: new Date('2010-07-14'), value: 252.73 },
    { date: new Date('2010-07-15'), value: 251.45 },
    { date: new Date('2010-07-16'), value: 249.90 },
    { date: new Date('2010-07-19'), value: 245.58 },
    { date: new Date('2010-07-20'), value: 251.89 },
    { date: new Date('2010-07-21'), value: 254.24 },
    { date: new Date('2010-07-22'), value: 259.02 },
    { date: new Date('2010-07-23'), value: 259.94 },
    { date: new Date('2010-07-26'), value: 259.28 },
    { date: new Date('2010-07-27'), value: 264.08 },
    { date: new Date('2010-07-28'), value: 260.96 },
    { date: new Date('2010-07-29'), value: 258.11 },
    { date: new Date('2010-07-30'), value: 257.25 },
    { date: new Date('2010-08-02'), value: 261.85 },
    { date: new Date('2010-08-03'), value: 261.93 },
    { date: new Date('2010-08-04'), value: 262.98 },
    { date: new Date('2010-08-05'), value: 261.70 },
    { date: new Date('2010-08-06'), value: 260.09 },
    { date: new Date('2010-08-09'), value: 261.75 },
    { date: new Date('2010-08-10'), value: 259.41 },
    { date: new Date('2010-08-11'), value: 250.19 },
    { date: new Date('2010-08-12'), value: 251.79 },
    { date: new Date('2010-08-13'), value: 249.10 },
    { date: new Date('2010-08-16'), value: 247.64 },
    { date: new Date('2010-08-17'), value: 251.97 },
    { date: new Date('2010-08-18'), value: 253.07 },
    { date: new Date('2010-08-19'), value: 249.88 },
    { date: new Date('2010-08-20'), value: 249.64 },
    { date: new Date('2010-08-23'), value: 245.80 },
    { date: new Date('2010-08-24'), value: 239.93 },
    { date: new Date('2010-08-25'), value: 242.89 },
    { date: new Date('2010-08-26'), value: 240.28 },
    { date: new Date('2010-08-27'), value: 241.62 },
    { date: new Date('2010-08-30'), value: 242.50 },
    { date: new Date('2010-08-31'), value: 243.10 },
    { date: new Date('2010-09-01'), value: 250.33 },
    { date: new Date('2010-09-02'), value: 252.17 },
    { date: new Date('2010-09-03'), value: 258.77 },
    { date: new Date('2010-09-06'), value: 258.77 },
    { date: new Date('2010-09-07'), value: 257.81 },
    { date: new Date('2010-09-08'), value: 262.92 },
    { date: new Date('2010-09-09'), value: 263.07 },
    { date: new Date('2010-09-10'), value: 263.41 },
    { date: new Date('2010-09-13'), value: 267.04 },
    { date: new Date('2010-09-14'), value: 268.06 },
    { date: new Date('2010-09-15'), value: 270.22 },
    { date: new Date('2010-09-16'), value: 276.57 },
    { date: new Date('2010-09-17'), value: 275.37 },
    { date: new Date('2010-09-20'), value: 283.23 },
    { date: new Date('2010-09-21'), value: 283.77 },
    { date: new Date('2010-09-22'), value: 287.75 },
    { date: new Date('2010-09-23'), value: 288.92 },
    { date: new Date('2010-09-24'), value: 292.32 },
    { date: new Date('2010-09-27'), value: 291.16 },
    { date: new Date('2010-09-28'), value: 286.86 },
    { date: new Date('2010-09-29'), value: 287.37 },
    { date: new Date('2010-09-30'), value: 283.75 },
    { date: new Date('2010-10-01'), value: 282.52 },
    { date: new Date('2010-10-04'), value: 278.64 },
    { date: new Date('2010-10-05'), value: 288.94 },
    { date: new Date('2010-10-06'), value: 289.19 },
    { date: new Date('2010-10-07'), value: 289.22 },
    { date: new Date('2010-10-08'), value: 294.07 },
    { date: new Date('2010-10-11'), value: 295.36 },
    { date: new Date('2010-10-12'), value: 298.54 },
    { date: new Date('2010-10-13'), value: 300.14 },
    { date: new Date('2010-10-14'), value: 302.31 },
    { date: new Date('2010-10-15'), value: 314.74 },
    { date: new Date('2010-10-18'), value: 318.00 },
    { date: new Date('2010-10-19'), value: 309.49 },
    { date: new Date('2010-10-20'), value: 310.53 },
    { date: new Date('2010-10-21'), value: 309.52 },
    { date: new Date('2010-10-22'), value: 307.47 },
    { date: new Date('2010-10-25'), value: 308.84 },
    { date: new Date('2010-10-26'), value: 308.05 },
    { date: new Date('2010-10-27'), value: 307.83 },
    { date: new Date('2010-10-28'), value: 305.24 },
    { date: new Date('2010-10-29'), value: 300.98 },
    { date: new Date('2010-11-01'), value: 304.18 },
    { date: new Date('2010-11-02'), value: 309.36 },
    { date: new Date('2010-11-03'), value: 312.80 },
    { date: new Date('2010-11-04'), value: 318.27 },
    { date: new Date('2010-11-05'), value: 317.13 },
    { date: new Date('2010-11-08'), value: 318.62 },
    { date: new Date('2010-11-09'), value: 316.08 },
    { date: new Date('2010-11-10'), value: 318.03 },
    { date: new Date('2010-11-11'), value: 316.66 },
    { date: new Date('2010-11-12'), value: 308.03 },
    { date: new Date('2010-11-15'), value: 307.04 },
    { date: new Date('2010-11-16'), value: 301.59 },
    { date: new Date('2010-11-17'), value: 300.50 },
    { date: new Date('2010-11-18'), value: 308.43 },
    { date: new Date('2010-11-19'), value: 306.73 },
    { date: new Date('2010-11-22'), value: 313.36 },
    { date: new Date('2010-11-23'), value: 308.73 },
    { date: new Date('2010-11-24'), value: 314.80 },
    { date: new Date('2010-11-26'), value: 315.00 },
    { date: new Date('2010-11-29'), value: 316.87 },
    { date: new Date('2010-11-30'), value: 311.15 },
    { date: new Date('2010-12-01'), value: 316.40 },
    { date: new Date('2010-12-02'), value: 318.15 },
    { date: new Date('2010-12-03'), value: 317.44 },
    { date: new Date('2010-12-06'), value: 320.15 },
    { date: new Date('2010-12-07'), value: 318.21 },
    { date: new Date('2010-12-08'), value: 321.01 },
    { date: new Date('2010-12-09'), value: 319.76 },
    { date: new Date('2010-12-10'), value: 320.56 },
    { date: new Date('2010-12-13'), value: 321.67 },
    { date: new Date('2010-12-14'), value: 320.29 },
    { date: new Date('2010-12-15'), value: 320.36 },
    { date: new Date('2010-12-16'), value: 321.25 },
    { date: new Date('2010-12-17'), value: 320.61 },
    { date: new Date('2010-12-20'), value: 322.21 },
    { date: new Date('2010-12-21'), value: 324.20 },
    { date: new Date('2010-12-22'), value: 325.16 },
    { date: new Date('2010-12-23'), value: 323.60 },
    { date: new Date('2010-12-27'), value: 324.68 },
    { date: new Date('2010-12-28'), value: 325.47 },
    { date: new Date('2010-12-29'), value: 325.29 },
    { date: new Date('2010-12-30'), value: 323.66 },
    { date: new Date('2010-12-31'), value: 322.56 },
    { date: new Date('2011-01-03'), value: 329.57 },
    { date: new Date('2011-01-04'), value: 331.29 },
    { date: new Date('2011-01-05'), value: 334.00 },
    { date: new Date('2011-01-06'), value: 333.73 },
    { date: new Date('2011-01-07'), value: 336.12 },
    { date: new Date('2011-01-10'), value: 342.46 },
    { date: new Date('2011-01-11'), value: 341.64 },
    { date: new Date('2011-01-12'), value: 344.42 },
    { date: new Date('2011-01-13'), value: 345.68 },
    { date: new Date('2011-01-14'), value: 348.48 },
    { date: new Date('2011-01-18'), value: 340.65 },
    { date: new Date('2011-01-19'), value: 338.84 },
    { date: new Date('2011-01-20'), value: 332.68 },
    { date: new Date('2011-01-21'), value: 326.72 },
    { date: new Date('2011-01-24'), value: 337.45 },
    { date: new Date('2011-01-25'), value: 341.40 },
    { date: new Date('2011-01-26'), value: 343.85 },
    { date: new Date('2011-01-27'), value: 343.21 },
    { date: new Date('2011-01-28'), value: 336.10 },
    { date: new Date('2011-01-31'), value: 339.32 },
    { date: new Date('2011-02-01'), value: 345.03 },
    { date: new Date('2011-02-02'), value: 344.32 },
    { date: new Date('2011-02-03'), value: 343.44 },
    { date: new Date('2011-02-04'), value: 346.50 },
    { date: new Date('2011-02-07'), value: 351.88 },
    { date: new Date('2011-02-08'), value: 355.20 },
    { date: new Date('2011-02-09'), value: 358.16 },
    { date: new Date('2011-02-10'), value: 354.54 },
    { date: new Date('2011-02-11'), value: 356.85 },
    { date: new Date('2011-02-14'), value: 359.18 },
    { date: new Date('2011-02-15'), value: 359.90 },
    { date: new Date('2011-02-16'), value: 363.13 },
    { date: new Date('2011-02-17'), value: 358.30 },
    { date: new Date('2011-02-18'), value: 350.56 },
    { date: new Date('2011-02-22'), value: 338.61 },
    { date: new Date('2011-02-23'), value: 342.62 },
    { date: new Date('2011-02-24'), value: 342.88 },
    { date: new Date('2011-02-25'), value: 348.16 },
    { date: new Date('2011-02-28'), value: 353.21 },
    { date: new Date('2011-03-01'), value: 349.31 },
    { date: new Date('2011-03-02'), value: 352.12 },
    { date: new Date('2011-03-03'), value: 359.56 },
    { date: new Date('2011-03-04'), value: 360.00 },
    { date: new Date('2011-03-07'), value: 355.36 },
    { date: new Date('2011-03-08'), value: 355.76 },
    { date: new Date('2011-03-09'), value: 352.47 },
    { date: new Date('2011-03-10'), value: 346.67 },
    { date: new Date('2011-03-11'), value: 351.99 },
    { date: new Date('2011-03-14'), value: 353.56 },
    { date: new Date('2011-03-15'), value: 345.43 },
    { date: new Date('2011-03-16'), value: 330.01 },
    { date: new Date('2011-03-17'), value: 334.64 },
    { date: new Date('2011-03-18'), value: 330.67 },
    { date: new Date('2011-03-21'), value: 339.30 },
    { date: new Date('2011-03-22'), value: 341.20 },
    { date: new Date('2011-03-23'), value: 339.19 },
    { date: new Date('2011-03-24'), value: 344.97 },
    { date: new Date('2011-03-25'), value: 351.54 },
    { date: new Date('2011-03-28'), value: 350.44 },
    { date: new Date('2011-03-29'), value: 350.96 },
    { date: new Date('2011-03-30'), value: 348.63 },
    { date: new Date('2011-03-31'), value: 348.51 },
    { date: new Date('2011-04-01'), value: 344.56 },
    { date: new Date('2011-04-04'), value: 341.19 },
    { date: new Date('2011-04-05'), value: 338.89 },
    { date: new Date('2011-04-06'), value: 338.04 },
    { date: new Date('2011-04-07'), value: 338.08 },
    { date: new Date('2011-04-08'), value: 335.06 },
    { date: new Date('2011-04-11'), value: 330.80 },
    { date: new Date('2011-04-12'), value: 332.40 },
    { date: new Date('2011-04-13'), value: 336.13 },
    { date: new Date('2011-04-14'), value: 332.42 },
    { date: new Date('2011-04-15'), value: 327.46 },
    { date: new Date('2011-04-18'), value: 331.85 },
    { date: new Date('2011-04-19'), value: 337.86 },
    { date: new Date('2011-04-20'), value: 342.41 },
    { date: new Date('2011-04-21'), value: 350.70 },
    { date: new Date('2011-04-25'), value: 353.01 },
    { date: new Date('2011-04-26'), value: 350.42 },
    { date: new Date('2011-04-27'), value: 350.15 },
    { date: new Date('2011-04-28'), value: 346.75 },
    { date: new Date('2011-04-29'), value: 350.13 },
    { date: new Date('2011-05-02'), value: 346.28 },
    { date: new Date('2011-05-03'), value: 348.20 },
    { date: new Date('2011-05-04'), value: 349.57 },
    { date: new Date('2011-05-05'), value: 346.75 },
    { date: new Date('2011-05-06'), value: 346.66 },
    { date: new Date('2011-05-09'), value: 347.60 },
    { date: new Date('2011-05-10'), value: 349.45 },
    { date: new Date('2011-05-11'), value: 347.23 },
    { date: new Date('2011-05-12'), value: 346.57 },
    { date: new Date('2011-05-13'), value: 340.50 },
    { date: new Date('2011-05-16'), value: 333.30 },
    { date: new Date('2011-05-17'), value: 336.14 },
    { date: new Date('2011-05-18'), value: 339.87 },
    { date: new Date('2011-05-19'), value: 340.53 },
    { date: new Date('2011-05-20'), value: 335.22 },
    { date: new Date('2011-05-23'), value: 334.40 },
    { date: new Date('2011-05-24'), value: 332.19 },
    { date: new Date('2011-05-25'), value: 336.78 },
    { date: new Date('2011-05-26'), value: 335.00 },
    { date: new Date('2011-05-27'), value: 337.41 },
    { date: new Date('2011-05-31'), value: 347.83 },
    { date: new Date('2011-06-01'), value: 345.51 },
    { date: new Date('2011-06-02'), value: 346.10 },
    { date: new Date('2011-06-03'), value: 343.44 },
    { date: new Date('2011-06-06'), value: 338.04 },
    { date: new Date('2011-06-07'), value: 332.04 },
    { date: new Date('2011-06-08'), value: 332.24 },
    { date: new Date('2011-06-09'), value: 331.49 },
    { date: new Date('2011-06-10'), value: 325.90 },
    { date: new Date('2011-06-13'), value: 326.60 },
    { date: new Date('2011-06-14'), value: 332.44 },
    { date: new Date('2011-06-15'), value: 326.75 },
    { date: new Date('2011-06-16'), value: 325.16 },
    { date: new Date('2011-06-17'), value: 320.26 },
    { date: new Date('2011-06-20'), value: 315.32 },
    { date: new Date('2011-06-21'), value: 325.30 },
    { date: new Date('2011-06-22'), value: 322.61 },
    { date: new Date('2011-06-23'), value: 331.23 },
    { date: new Date('2011-06-24'), value: 326.35 },
    { date: new Date('2011-06-27'), value: 332.04 },
    { date: new Date('2011-06-28'), value: 335.26 },
    { date: new Date('2011-06-29'), value: 334.04 },
    { date: new Date('2011-06-30'), value: 335.67 },
    { date: new Date('2011-07-01'), value: 343.26 },
    { date: new Date('2011-07-05'), value: 349.43 },
    { date: new Date('2011-07-06'), value: 351.76 },
    { date: new Date('2011-07-07'), value: 357.20 },
    { date: new Date('2011-07-08'), value: 359.71 },
    { date: new Date('2011-07-11'), value: 354.00 },
    { date: new Date('2011-07-12'), value: 353.75 },
    { date: new Date('2011-07-13'), value: 358.02 },
    { date: new Date('2011-07-14'), value: 357.77 },
    { date: new Date('2011-07-15'), value: 364.92 },
    { date: new Date('2011-07-18'), value: 373.80 },
    { date: new Date('2011-07-19'), value: 376.85 },
    { date: new Date('2011-07-20'), value: 386.90 },
    { date: new Date('2011-07-21'), value: 387.29 },
    { date: new Date('2011-07-22'), value: 393.30 },
    { date: new Date('2011-07-25'), value: 398.50 },
    { date: new Date('2011-07-26'), value: 403.41 },
    { date: new Date('2011-07-27'), value: 392.59 },
    { date: new Date('2011-07-28'), value: 391.82 },
    { date: new Date('2011-07-29'), value: 390.48 },
    { date: new Date('2011-08-01'), value: 396.75 },
    { date: new Date('2011-08-02'), value: 388.91 },
    { date: new Date('2011-08-03'), value: 392.57 },
    { date: new Date('2011-08-04'), value: 377.37 },
    { date: new Date('2011-08-05'), value: 373.62 },
    { date: new Date('2011-08-08'), value: 353.21 },
    { date: new Date('2011-08-09'), value: 374.01 },
    { date: new Date('2011-08-10'), value: 363.69 },
    { date: new Date('2011-08-11'), value: 373.70 },
    { date: new Date('2011-08-12'), value: 376.99 },
    { date: new Date('2011-08-15'), value: 383.41 },
    { date: new Date('2011-08-16'), value: 380.48 },
    { date: new Date('2011-08-17'), value: 380.44 },
    { date: new Date('2011-08-18'), value: 366.05 },
    { date: new Date('2011-08-19'), value: 356.03 },
    { date: new Date('2011-08-22'), value: 356.44 },
    { date: new Date('2011-08-23'), value: 373.60 },
    { date: new Date('2011-08-24'), value: 376.18 },
    { date: new Date('2011-08-25'), value: 373.72 },
    { date: new Date('2011-08-26'), value: 383.58 },
    { date: new Date('2011-08-29'), value: 389.97 },
    { date: new Date('2011-08-30'), value: 389.99 },
    { date: new Date('2011-08-31'), value: 384.83 },
    { date: new Date('2011-09-01'), value: 381.03 },
    { date: new Date('2011-09-02'), value: 374.05 },
    { date: new Date('2011-09-06'), value: 379.74 },
    { date: new Date('2011-09-07'), value: 383.93 },
    { date: new Date('2011-09-08'), value: 384.14 },
    { date: new Date('2011-09-09'), value: 377.48 },
    { date: new Date('2011-09-12'), value: 379.94 },
    { date: new Date('2011-09-13'), value: 384.62 },
    { date: new Date('2011-09-14'), value: 389.30 },
    { date: new Date('2011-09-15'), value: 392.96 },
    { date: new Date('2011-09-16'), value: 400.50 },
    { date: new Date('2011-09-19'), value: 411.63 },
    { date: new Date('2011-09-20'), value: 413.45 },
    { date: new Date('2011-09-21'), value: 412.14 },
    { date: new Date('2011-09-22'), value: 401.82 },
    { date: new Date('2011-09-23'), value: 404.30 },
    { date: new Date('2011-09-26'), value: 403.17 },
    { date: new Date('2011-09-27'), value: 399.26 },
    { date: new Date('2011-09-28'), value: 397.01 },
    { date: new Date('2011-09-29'), value: 390.57 },
    { date: new Date('2011-09-30'), value: 381.32 },
    { date: new Date('2011-10-03'), value: 374.60 },
    { date: new Date('2011-10-04'), value: 372.50 },
    { date: new Date('2011-10-05'), value: 378.25 },
    { date: new Date('2011-10-06'), value: 377.37 },
    { date: new Date('2011-10-07'), value: 369.80 },
    { date: new Date('2011-10-10'), value: 388.81 },
    { date: new Date('2011-10-11'), value: 400.29 },
    { date: new Date('2011-10-12'), value: 402.19 },
    { date: new Date('2011-10-13'), value: 408.43 },
    { date: new Date('2011-10-14'), value: 422.00 },
    { date: new Date('2011-10-17'), value: 419.99 },
    { date: new Date('2011-10-18'), value: 422.24 },
    { date: new Date('2011-10-19'), value: 398.62 },
    { date: new Date('2011-10-20'), value: 395.31 },
    { date: new Date('2011-10-21'), value: 392.87 },
    { date: new Date('2011-10-24'), value: 405.77 },
    { date: new Date('2011-10-25'), value: 397.77 },
    { date: new Date('2011-10-26'), value: 400.60 },
    { date: new Date('2011-10-27'), value: 404.69 },
    { date: new Date('2011-10-28'), value: 404.95 },
    { date: new Date('2011-10-31'), value: 404.78 },
    { date: new Date('2011-11-01'), value: 396.51 },
    { date: new Date('2011-11-02'), value: 397.41 },
    { date: new Date('2011-11-03'), value: 403.07 },
    { date: new Date('2011-11-04'), value: 400.24 },
    { date: new Date('2011-11-07'), value: 399.73 },
    { date: new Date('2011-11-08'), value: 406.23 },
    { date: new Date('2011-11-09'), value: 395.28 },
    { date: new Date('2011-11-10'), value: 385.22 },
    { date: new Date('2011-11-11'), value: 384.62 },
    { date: new Date('2011-11-14'), value: 379.26 },
    { date: new Date('2011-11-15'), value: 388.83 },
    { date: new Date('2011-11-16'), value: 384.77 },
    { date: new Date('2011-11-17'), value: 377.41 },
    { date: new Date('2011-11-18'), value: 374.94 },
    { date: new Date('2011-11-21'), value: 369.01 },
    { date: new Date('2011-11-22'), value: 376.51 },
    { date: new Date('2011-11-23'), value: 366.99 },
    { date: new Date('2011-11-25'), value: 363.57 },
    { date: new Date('2011-11-28'), value: 376.12 },
    { date: new Date('2011-11-29'), value: 373.20 },
    { date: new Date('2011-11-30'), value: 382.20 },
    { date: new Date('2011-12-01'), value: 387.93 },
    { date: new Date('2011-12-02'), value: 389.70 },
    { date: new Date('2011-12-05'), value: 393.01 },
    { date: new Date('2011-12-06'), value: 390.95 },
    { date: new Date('2011-12-07'), value: 389.09 },
    { date: new Date('2011-12-08'), value: 390.66 },
    { date: new Date('2011-12-09'), value: 393.62 },
    { date: new Date('2011-12-12'), value: 391.84 },
    { date: new Date('2011-12-13'), value: 388.81 },
    { date: new Date('2011-12-14'), value: 380.19 },
    { date: new Date('2011-12-15'), value: 378.94 },
    { date: new Date('2011-12-16'), value: 381.02 },
    { date: new Date('2011-12-19'), value: 382.21 },
    { date: new Date('2011-12-20'), value: 395.95 },
    { date: new Date('2011-12-21'), value: 396.44 },
    { date: new Date('2011-12-22'), value: 398.55 },
    { date: new Date('2011-12-23'), value: 403.43 },
    { date: new Date('2011-12-27'), value: 406.53 },
    { date: new Date('2011-12-28'), value: 402.64 },
    { date: new Date('2011-12-29'), value: 405.12 },
    { date: new Date('2011-12-30'), value: 405.00 },
    { date: new Date('2012-01-03'), value: 411.23 },
    { date: new Date('2012-01-04'), value: 413.44 },
    { date: new Date('2012-01-05'), value: 418.03 },
    { date: new Date('2012-01-06'), value: 422.40 },
    { date: new Date('2012-01-09'), value: 421.73 },
    { date: new Date('2012-01-10'), value: 423.24 },
    { date: new Date('2012-01-11'), value: 422.55 },
    { date: new Date('2012-01-12'), value: 421.39 },
    { date: new Date('2012-01-13'), value: 419.81 },
    { date: new Date('2012-01-17'), value: 424.70 },
    { date: new Date('2012-01-18'), value: 429.11 },
    { date: new Date('2012-01-19'), value: 427.75 },
    { date: new Date('2012-01-20'), value: 420.30 },
    { date: new Date('2012-01-23'), value: 427.41 },
    { date: new Date('2012-01-24'), value: 420.41 },
    { date: new Date('2012-01-25'), value: 446.66 },
    { date: new Date('2012-01-26'), value: 444.63 },
    { date: new Date('2012-01-27'), value: 447.28 },
    { date: new Date('2012-01-30'), value: 453.01 },
    { date: new Date('2012-01-31'), value: 456.48 },
    { date: new Date('2012-02-01'), value: 456.19 },
    { date: new Date('2012-02-02'), value: 455.12 },
    { date: new Date('2012-02-03'), value: 459.68 },
    { date: new Date('2012-02-06'), value: 463.97 },
    { date: new Date('2012-02-07'), value: 468.83 },
    { date: new Date('2012-02-08'), value: 476.68 },
    { date: new Date('2012-02-09'), value: 493.17 },
    { date: new Date('2012-02-10'), value: 493.42 },
    { date: new Date('2012-02-13'), value: 502.60 },
    { date: new Date('2012-02-14'), value: 509.46 },
    { date: new Date('2012-02-15'), value: 497.67 },
    { date: new Date('2012-02-16'), value: 502.21 },
    { date: new Date('2012-02-17'), value: 502.12 },
    { date: new Date('2012-02-21'), value: 514.85 },
    { date: new Date('2012-02-22'), value: 513.04 },
    { date: new Date('2012-02-23'), value: 516.39 },
    { date: new Date('2012-02-24'), value: 522.41 },
    { date: new Date('2012-02-27'), value: 525.76 },
    { date: new Date('2012-02-28'), value: 535.41 },
    { date: new Date('2012-02-29'), value: 542.44 },
    { date: new Date('2012-03-01'), value: 544.47 },
    { date: new Date('2012-03-02'), value: 545.18 },
    { date: new Date('2012-03-05'), value: 533.16 },
    { date: new Date('2012-03-06'), value: 530.26 },
    { date: new Date('2012-03-07'), value: 530.69 },
    { date: new Date('2012-03-08'), value: 541.99 },
    { date: new Date('2012-03-09'), value: 545.17 },
    { date: new Date('2012-03-12'), value: 552.00 },
    { date: new Date('2012-03-13'), value: 568.10 },
    { date: new Date('2012-03-14'), value: 589.58 },
    { date: new Date('2012-03-15'), value: 585.56 },
    { date: new Date('2012-03-16'), value: 585.57 },
    { date: new Date('2012-03-19'), value: 601.10 },
    { date: new Date('2012-03-20'), value: 605.96 },
    { date: new Date('2012-03-21'), value: 602.50 },
    { date: new Date('2012-03-22'), value: 599.34 },
    { date: new Date('2012-03-23'), value: 596.05 },
    { date: new Date('2012-03-26'), value: 606.98 },
    { date: new Date('2012-03-27'), value: 614.48 },
    { date: new Date('2012-03-28'), value: 617.62 },
    { date: new Date('2012-03-29'), value: 609.86 },
    { date: new Date('2012-03-30'), value: 599.55 },
    { date: new Date('2012-04-02'), value: 618.63 },
    { date: new Date('2012-04-03'), value: 629.32 },
    { date: new Date('2012-04-04'), value: 624.31 },
    { date: new Date('2012-04-05'), value: 633.68 },
    { date: new Date('2012-04-09'), value: 636.23 },
    { date: new Date('2012-04-10'), value: 628.44 },
    { date: new Date('2012-04-11'), value: 626.20 },
    { date: new Date('2012-04-12'), value: 622.77 },
    { date: new Date('2012-04-13'), value: 605.23 },
    { date: new Date('2012-04-16'), value: 580.13 },
    { date: new Date('2012-04-17'), value: 609.70 },
    { date: new Date('2012-04-18'), value: 608.34 },
    { date: new Date('2012-04-19'), value: 587.44 },
    { date: new Date('2012-04-20'), value: 572.98 },
    { date: new Date('2012-04-23'), value: 571.70 },
    { date: new Date('2012-04-24'), value: 560.28 },
    { date: new Date('2012-04-25'), value: 610.00 },
    { date: new Date('2012-04-26'), value: 607.70 },
    { date: new Date('2012-04-27'), value: 603.00 },
    { date: new Date('2012-04-30'), value: 583.98 },
    { date: new Date('2012-05-01'), value: 582.13 },
];


/***/ }),

/***/ "./src/app/shared/temperatures.ts":
/*!****************************************!*\
  !*** ./src/app/shared/temperatures.ts ***!
  \****************************************/
/*! exports provided: TEMPERATURES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEMPERATURES", function() { return TEMPERATURES; });
var TEMPERATURES = [
    {
        'id': 'New York',
        'values': [
            { 'date': new Date('2011-10-01'), 'temperature': 63.4 },
            { 'date': new Date('2011-10-02'), 'temperature': 58.0 },
            { 'date': new Date('2011-10-03'), 'temperature': 53.3 },
            { 'date': new Date('2011-10-04'), 'temperature': 55.7 },
            { 'date': new Date('2011-10-05'), 'temperature': 64.2 },
            { 'date': new Date('2011-10-06'), 'temperature': 58.8 },
            { 'date': new Date('2011-10-07'), 'temperature': 57.9 },
            { 'date': new Date('2011-10-08'), 'temperature': 61.8 },
            { 'date': new Date('2011-10-09'), 'temperature': 69.3 },
            { 'date': new Date('2011-10-10'), 'temperature': 71.2 },
            { 'date': new Date('2011-10-11'), 'temperature': 68.7 },
            { 'date': new Date('2011-10-12'), 'temperature': 61.8 },
            { 'date': new Date('2011-10-13'), 'temperature': 63.0 },
            { 'date': new Date('2011-10-14'), 'temperature': 66.9 },
            { 'date': new Date('2011-10-15'), 'temperature': 61.7 },
            { 'date': new Date('2011-10-16'), 'temperature': 61.8 },
            { 'date': new Date('2011-10-17'), 'temperature': 62.8 },
            { 'date': new Date('2011-10-18'), 'temperature': 60.8 },
            { 'date': new Date('2011-10-19'), 'temperature': 62.1 },
            { 'date': new Date('2011-10-20'), 'temperature': 65.1 },
            { 'date': new Date('2011-10-21'), 'temperature': 55.6 },
            { 'date': new Date('2011-10-22'), 'temperature': 54.4 },
            { 'date': new Date('2011-10-23'), 'temperature': 54.4 },
            { 'date': new Date('2011-10-24'), 'temperature': 54.8 },
            { 'date': new Date('2011-10-25'), 'temperature': 57.9 },
            { 'date': new Date('2011-10-26'), 'temperature': 54.6 },
            { 'date': new Date('2011-10-27'), 'temperature': 54.4 },
            { 'date': new Date('2011-10-28'), 'temperature': 42.5 },
            { 'date': new Date('2011-10-29'), 'temperature': 40.9 },
            { 'date': new Date('2011-10-30'), 'temperature': 38.6 },
            { 'date': new Date('2011-10-31'), 'temperature': 44.2 },
            { 'date': new Date('2011-11-01'), 'temperature': 49.6 },
            { 'date': new Date('2011-11-02'), 'temperature': 47.2 },
            { 'date': new Date('2011-11-03'), 'temperature': 50.1 },
            { 'date': new Date('2011-11-04'), 'temperature': 50.1 },
            { 'date': new Date('2011-11-05'), 'temperature': 43.5 },
            { 'date': new Date('2011-11-06'), 'temperature': 43.8 },
            { 'date': new Date('2011-11-07'), 'temperature': 48.9 },
            { 'date': new Date('2011-11-08'), 'temperature': 55.5 },
            { 'date': new Date('2011-11-09'), 'temperature': 53.7 },
            { 'date': new Date('2011-11-10'), 'temperature': 57.7 },
            { 'date': new Date('2011-11-11'), 'temperature': 48.5 },
            { 'date': new Date('2011-11-12'), 'temperature': 46.8 },
            { 'date': new Date('2011-11-13'), 'temperature': 51.1 },
            { 'date': new Date('2011-11-14'), 'temperature': 56.8 },
            { 'date': new Date('2011-11-15'), 'temperature': 59.7 },
            { 'date': new Date('2011-11-16'), 'temperature': 56.5 },
            { 'date': new Date('2011-11-17'), 'temperature': 49.6 },
            { 'date': new Date('2011-11-18'), 'temperature': 41.5 },
            { 'date': new Date('2011-11-19'), 'temperature': 44.3 },
            { 'date': new Date('2011-11-20'), 'temperature': 54.0 },
            { 'date': new Date('2011-11-21'), 'temperature': 54.1 },
            { 'date': new Date('2011-11-22'), 'temperature': 49.4 },
            { 'date': new Date('2011-11-23'), 'temperature': 50.0 },
            { 'date': new Date('2011-11-24'), 'temperature': 44.0 },
            { 'date': new Date('2011-11-25'), 'temperature': 50.3 },
            { 'date': new Date('2011-11-26'), 'temperature': 52.1 },
            { 'date': new Date('2011-11-27'), 'temperature': 49.6 },
            { 'date': new Date('2011-11-28'), 'temperature': 57.2 },
            { 'date': new Date('2011-11-29'), 'temperature': 59.1 },
            { 'date': new Date('2011-11-30'), 'temperature': 50.6 },
            { 'date': new Date('2011-12-01'), 'temperature': 44.3 },
            { 'date': new Date('2011-12-02'), 'temperature': 43.9 },
            { 'date': new Date('2011-12-03'), 'temperature': 42.1 },
            { 'date': new Date('2011-12-04'), 'temperature': 43.9 },
            { 'date': new Date('2011-12-05'), 'temperature': 50.2 },
            { 'date': new Date('2011-12-06'), 'temperature': 54.2 },
            { 'date': new Date('2011-12-07'), 'temperature': 54.6 },
            { 'date': new Date('2011-12-08'), 'temperature': 43.4 },
            { 'date': new Date('2011-12-09'), 'temperature': 42.2 },
            { 'date': new Date('2011-12-10'), 'temperature': 45.0 },
            { 'date': new Date('2011-12-11'), 'temperature': 33.8 },
            { 'date': new Date('2011-12-12'), 'temperature': 36.8 },
            { 'date': new Date('2011-12-13'), 'temperature': 38.6 },
            { 'date': new Date('2011-12-14'), 'temperature': 41.9 },
            { 'date': new Date('2011-12-15'), 'temperature': 49.6 },
            { 'date': new Date('2011-12-16'), 'temperature': 50.2 },
            { 'date': new Date('2011-12-17'), 'temperature': 40.6 },
            { 'date': new Date('2011-12-18'), 'temperature': 29.1 },
            { 'date': new Date('2011-12-19'), 'temperature': 33.7 },
            { 'date': new Date('2011-12-20'), 'temperature': 45.8 },
            { 'date': new Date('2011-12-21'), 'temperature': 47.4 },
            { 'date': new Date('2011-12-22'), 'temperature': 54.4 },
            { 'date': new Date('2011-12-23'), 'temperature': 47.8 },
            { 'date': new Date('2011-12-24'), 'temperature': 34.9 },
            { 'date': new Date('2011-12-25'), 'temperature': 35.9 },
            { 'date': new Date('2011-12-26'), 'temperature': 43.6 },
            { 'date': new Date('2011-12-27'), 'temperature': 42.9 },
            { 'date': new Date('2011-12-28'), 'temperature': 46.2 },
            { 'date': new Date('2011-12-29'), 'temperature': 30.8 },
            { 'date': new Date('2011-12-30'), 'temperature': 40.8 },
            { 'date': new Date('2011-12-31'), 'temperature': 49.8 },
            { 'date': new Date('2012-01-01'), 'temperature': 46.3 },
            { 'date': new Date('2012-01-02'), 'temperature': 43.2 },
            { 'date': new Date('2012-01-03'), 'temperature': 30.3 },
            { 'date': new Date('2012-01-04'), 'temperature': 19.2 },
            { 'date': new Date('2012-01-05'), 'temperature': 32.1 },
            { 'date': new Date('2012-01-06'), 'temperature': 41.2 },
            { 'date': new Date('2012-01-07'), 'temperature': 47.0 },
            { 'date': new Date('2012-01-08'), 'temperature': 46.0 },
            { 'date': new Date('2012-01-09'), 'temperature': 34.7 },
            { 'date': new Date('2012-01-10'), 'temperature': 39.4 },
            { 'date': new Date('2012-01-11'), 'temperature': 40.4 },
            { 'date': new Date('2012-01-12'), 'temperature': 45.4 },
            { 'date': new Date('2012-01-13'), 'temperature': 40.7 },
            { 'date': new Date('2012-01-14'), 'temperature': 30.4 },
            { 'date': new Date('2012-01-15'), 'temperature': 23.9 },
            { 'date': new Date('2012-01-16'), 'temperature': 22.6 },
            { 'date': new Date('2012-01-17'), 'temperature': 39.8 },
            { 'date': new Date('2012-01-18'), 'temperature': 43.2 },
            { 'date': new Date('2012-01-19'), 'temperature': 26.3 },
            { 'date': new Date('2012-01-20'), 'temperature': 32.8 },
            { 'date': new Date('2012-01-21'), 'temperature': 27.4 },
            { 'date': new Date('2012-01-22'), 'temperature': 25.0 },
            { 'date': new Date('2012-01-23'), 'temperature': 39.4 },
            { 'date': new Date('2012-01-24'), 'temperature': 48.7 },
            { 'date': new Date('2012-01-25'), 'temperature': 43.0 },
            { 'date': new Date('2012-01-26'), 'temperature': 37.1 },
            { 'date': new Date('2012-01-27'), 'temperature': 48.2 },
            { 'date': new Date('2012-01-28'), 'temperature': 43.7 },
            { 'date': new Date('2012-01-29'), 'temperature': 40.1 },
            { 'date': new Date('2012-01-30'), 'temperature': 38.0 },
            { 'date': new Date('2012-01-31'), 'temperature': 43.5 },
            { 'date': new Date('2012-02-01'), 'temperature': 50.4 },
            { 'date': new Date('2012-02-02'), 'temperature': 45.8 },
            { 'date': new Date('2012-02-03'), 'temperature': 37.5 },
            { 'date': new Date('2012-02-04'), 'temperature': 40.8 },
            { 'date': new Date('2012-02-05'), 'temperature': 36.5 },
            { 'date': new Date('2012-02-06'), 'temperature': 39.1 },
            { 'date': new Date('2012-02-07'), 'temperature': 43.2 },
            { 'date': new Date('2012-02-08'), 'temperature': 36.5 },
            { 'date': new Date('2012-02-09'), 'temperature': 36.5 },
            { 'date': new Date('2012-02-10'), 'temperature': 38.3 },
            { 'date': new Date('2012-02-11'), 'temperature': 36.9 },
            { 'date': new Date('2012-02-12'), 'temperature': 29.7 },
            { 'date': new Date('2012-02-13'), 'temperature': 33.1 },
            { 'date': new Date('2012-02-14'), 'temperature': 39.6 },
            { 'date': new Date('2012-02-15'), 'temperature': 42.3 },
            { 'date': new Date('2012-02-16'), 'temperature': 39.7 },
            { 'date': new Date('2012-02-17'), 'temperature': 46.0 },
            { 'date': new Date('2012-02-18'), 'temperature': 41.2 },
            { 'date': new Date('2012-02-19'), 'temperature': 39.8 },
            { 'date': new Date('2012-02-20'), 'temperature': 38.1 },
            { 'date': new Date('2012-02-21'), 'temperature': 37.1 },
            { 'date': new Date('2012-02-22'), 'temperature': 45.5 },
            { 'date': new Date('2012-02-23'), 'temperature': 50.6 },
            { 'date': new Date('2012-02-24'), 'temperature': 42.7 },
            { 'date': new Date('2012-02-25'), 'temperature': 42.6 },
            { 'date': new Date('2012-02-26'), 'temperature': 36.9 },
            { 'date': new Date('2012-02-27'), 'temperature': 40.9 },
            { 'date': new Date('2012-02-28'), 'temperature': 45.9 },
            { 'date': new Date('2012-02-29'), 'temperature': 40.7 },
            { 'date': new Date('2012-03-01'), 'temperature': 41.3 },
            { 'date': new Date('2012-03-02'), 'temperature': 36.8 },
            { 'date': new Date('2012-03-03'), 'temperature': 47.6 },
            { 'date': new Date('2012-03-04'), 'temperature': 44.2 },
            { 'date': new Date('2012-03-05'), 'temperature': 38.5 },
            { 'date': new Date('2012-03-06'), 'temperature': 32.9 },
            { 'date': new Date('2012-03-07'), 'temperature': 43.3 },
            { 'date': new Date('2012-03-08'), 'temperature': 51.2 },
            { 'date': new Date('2012-03-09'), 'temperature': 47.8 },
            { 'date': new Date('2012-03-10'), 'temperature': 37.2 },
            { 'date': new Date('2012-03-11'), 'temperature': 42.9 },
            { 'date': new Date('2012-03-12'), 'temperature': 48.8 },
            { 'date': new Date('2012-03-13'), 'temperature': 52.6 },
            { 'date': new Date('2012-03-14'), 'temperature': 60.5 },
            { 'date': new Date('2012-03-15'), 'temperature': 47.2 },
            { 'date': new Date('2012-03-16'), 'temperature': 44.7 },
            { 'date': new Date('2012-03-17'), 'temperature': 48.2 },
            { 'date': new Date('2012-03-18'), 'temperature': 48.2 },
            { 'date': new Date('2012-03-19'), 'temperature': 53.1 },
            { 'date': new Date('2012-03-20'), 'temperature': 57.8 },
            { 'date': new Date('2012-03-21'), 'temperature': 57.5 },
            { 'date': new Date('2012-03-22'), 'temperature': 57.3 },
            { 'date': new Date('2012-03-23'), 'temperature': 61.7 },
            { 'date': new Date('2012-03-24'), 'temperature': 55.8 },
            { 'date': new Date('2012-03-25'), 'temperature': 48.4 },
            { 'date': new Date('2012-03-26'), 'temperature': 49.8 },
            { 'date': new Date('2012-03-27'), 'temperature': 39.6 },
            { 'date': new Date('2012-03-28'), 'temperature': 49.7 },
            { 'date': new Date('2012-03-29'), 'temperature': 56.8 },
            { 'date': new Date('2012-03-30'), 'temperature': 46.5 },
            { 'date': new Date('2012-03-31'), 'temperature': 42.2 },
            { 'date': new Date('2012-04-01'), 'temperature': 45.3 },
            { 'date': new Date('2012-04-02'), 'temperature': 48.1 },
            { 'date': new Date('2012-04-03'), 'temperature': 51.2 },
            { 'date': new Date('2012-04-04'), 'temperature': 61.0 },
            { 'date': new Date('2012-04-05'), 'temperature': 50.7 },
            { 'date': new Date('2012-04-06'), 'temperature': 48.0 },
            { 'date': new Date('2012-04-07'), 'temperature': 51.1 },
            { 'date': new Date('2012-04-08'), 'temperature': 55.7 },
            { 'date': new Date('2012-04-09'), 'temperature': 58.3 },
            { 'date': new Date('2012-04-10'), 'temperature': 55.0 },
            { 'date': new Date('2012-04-11'), 'temperature': 49.0 },
            { 'date': new Date('2012-04-12'), 'temperature': 51.7 },
            { 'date': new Date('2012-04-13'), 'temperature': 53.1 },
            { 'date': new Date('2012-04-14'), 'temperature': 55.2 },
            { 'date': new Date('2012-04-15'), 'temperature': 62.3 },
            { 'date': new Date('2012-04-16'), 'temperature': 62.9 },
            { 'date': new Date('2012-04-17'), 'temperature': 69.3 },
            { 'date': new Date('2012-04-18'), 'temperature': 59.0 },
            { 'date': new Date('2012-04-19'), 'temperature': 54.1 },
            { 'date': new Date('2012-04-20'), 'temperature': 56.5 },
            { 'date': new Date('2012-04-21'), 'temperature': 58.2 },
            { 'date': new Date('2012-04-22'), 'temperature': 52.4 },
            { 'date': new Date('2012-04-23'), 'temperature': 51.6 },
            { 'date': new Date('2012-04-24'), 'temperature': 49.3 },
            { 'date': new Date('2012-04-25'), 'temperature': 52.5 },
            { 'date': new Date('2012-04-26'), 'temperature': 50.5 },
            { 'date': new Date('2012-04-27'), 'temperature': 51.9 },
            { 'date': new Date('2012-04-28'), 'temperature': 47.4 },
            { 'date': new Date('2012-04-29'), 'temperature': 54.1 },
            { 'date': new Date('2012-04-30'), 'temperature': 51.9 },
            { 'date': new Date('2012-05-01'), 'temperature': 57.4 },
            { 'date': new Date('2012-05-02'), 'temperature': 53.7 },
            { 'date': new Date('2012-05-03'), 'temperature': 53.1 },
            { 'date': new Date('2012-05-04'), 'temperature': 57.2 },
            { 'date': new Date('2012-05-05'), 'temperature': 57.0 },
            { 'date': new Date('2012-05-06'), 'temperature': 56.6 },
            { 'date': new Date('2012-05-07'), 'temperature': 54.6 },
            { 'date': new Date('2012-05-08'), 'temperature': 57.9 },
            { 'date': new Date('2012-05-09'), 'temperature': 59.2 },
            { 'date': new Date('2012-05-10'), 'temperature': 61.1 },
            { 'date': new Date('2012-05-11'), 'temperature': 59.7 },
            { 'date': new Date('2012-05-12'), 'temperature': 64.1 },
            { 'date': new Date('2012-05-13'), 'temperature': 65.3 },
            { 'date': new Date('2012-05-14'), 'temperature': 64.2 },
            { 'date': new Date('2012-05-15'), 'temperature': 62.0 },
            { 'date': new Date('2012-05-16'), 'temperature': 63.8 },
            { 'date': new Date('2012-05-17'), 'temperature': 64.5 },
            { 'date': new Date('2012-05-18'), 'temperature': 61.0 },
            { 'date': new Date('2012-05-19'), 'temperature': 62.6 },
            { 'date': new Date('2012-05-20'), 'temperature': 66.2 },
            { 'date': new Date('2012-05-21'), 'temperature': 62.7 },
            { 'date': new Date('2012-05-22'), 'temperature': 63.7 },
            { 'date': new Date('2012-05-23'), 'temperature': 66.4 },
            { 'date': new Date('2012-05-24'), 'temperature': 64.5 },
            { 'date': new Date('2012-05-25'), 'temperature': 65.4 },
            { 'date': new Date('2012-05-26'), 'temperature': 69.4 },
            { 'date': new Date('2012-05-27'), 'temperature': 71.9 },
            { 'date': new Date('2012-05-28'), 'temperature': 74.4 },
            { 'date': new Date('2012-05-29'), 'temperature': 75.9 },
            { 'date': new Date('2012-05-30'), 'temperature': 72.9 },
            { 'date': new Date('2012-05-31'), 'temperature': 72.5 },
            { 'date': new Date('2012-06-01'), 'temperature': 67.2 },
            { 'date': new Date('2012-06-02'), 'temperature': 68.3 },
            { 'date': new Date('2012-06-03'), 'temperature': 67.7 },
            { 'date': new Date('2012-06-04'), 'temperature': 61.9 },
            { 'date': new Date('2012-06-05'), 'temperature': 58.3 },
            { 'date': new Date('2012-06-06'), 'temperature': 61.7 },
            { 'date': new Date('2012-06-07'), 'temperature': 66.7 },
            { 'date': new Date('2012-06-08'), 'temperature': 68.7 },
            { 'date': new Date('2012-06-09'), 'temperature': 72.2 },
            { 'date': new Date('2012-06-10'), 'temperature': 72.6 },
            { 'date': new Date('2012-06-11'), 'temperature': 69.2 },
            { 'date': new Date('2012-06-12'), 'temperature': 66.9 },
            { 'date': new Date('2012-06-13'), 'temperature': 66.7 },
            { 'date': new Date('2012-06-14'), 'temperature': 67.7 },
            { 'date': new Date('2012-06-15'), 'temperature': 68.5 },
            { 'date': new Date('2012-06-16'), 'temperature': 67.5 },
            { 'date': new Date('2012-06-17'), 'temperature': 64.2 },
            { 'date': new Date('2012-06-18'), 'temperature': 61.7 },
            { 'date': new Date('2012-06-19'), 'temperature': 66.4 },
            { 'date': new Date('2012-06-20'), 'temperature': 77.9 },
            { 'date': new Date('2012-06-21'), 'temperature': 88.3 },
            { 'date': new Date('2012-06-22'), 'temperature': 82.2 },
            { 'date': new Date('2012-06-23'), 'temperature': 77.0 },
            { 'date': new Date('2012-06-24'), 'temperature': 75.4 },
            { 'date': new Date('2012-06-25'), 'temperature': 70.9 },
            { 'date': new Date('2012-06-26'), 'temperature': 65.9 },
            { 'date': new Date('2012-06-27'), 'temperature': 73.5 },
            { 'date': new Date('2012-06-28'), 'temperature': 77.4 },
            { 'date': new Date('2012-06-29'), 'temperature': 79.6 },
            { 'date': new Date('2012-06-30'), 'temperature': 84.2 },
            { 'date': new Date('2012-07-01'), 'temperature': 81.8 },
            { 'date': new Date('2012-07-02'), 'temperature': 82.5 },
            { 'date': new Date('2012-07-03'), 'temperature': 80.2 },
            { 'date': new Date('2012-07-04'), 'temperature': 77.8 },
            { 'date': new Date('2012-07-05'), 'temperature': 86.1 },
            { 'date': new Date('2012-07-06'), 'temperature': 79.9 },
            { 'date': new Date('2012-07-07'), 'temperature': 83.5 },
            { 'date': new Date('2012-07-08'), 'temperature': 81.5 },
            { 'date': new Date('2012-07-09'), 'temperature': 77.8 },
            { 'date': new Date('2012-07-10'), 'temperature': 76.1 },
            { 'date': new Date('2012-07-11'), 'temperature': 76.3 },
            { 'date': new Date('2012-07-12'), 'temperature': 75.8 },
            { 'date': new Date('2012-07-13'), 'temperature': 77.2 },
            { 'date': new Date('2012-07-14'), 'temperature': 79.3 },
            { 'date': new Date('2012-07-15'), 'temperature': 78.9 },
            { 'date': new Date('2012-07-16'), 'temperature': 79.6 },
            { 'date': new Date('2012-07-17'), 'temperature': 83.3 },
            { 'date': new Date('2012-07-18'), 'temperature': 84.3 },
            { 'date': new Date('2012-07-19'), 'temperature': 75.1 },
            { 'date': new Date('2012-07-20'), 'temperature': 68.4 },
            { 'date': new Date('2012-07-21'), 'temperature': 68.4 },
            { 'date': new Date('2012-07-22'), 'temperature': 72.2 },
            { 'date': new Date('2012-07-23'), 'temperature': 75.6 },
            { 'date': new Date('2012-07-24'), 'temperature': 82.6 },
            { 'date': new Date('2012-07-25'), 'temperature': 78.4 },
            { 'date': new Date('2012-07-26'), 'temperature': 77.0 },
            { 'date': new Date('2012-07-27'), 'temperature': 79.4 },
            { 'date': new Date('2012-07-28'), 'temperature': 77.4 },
            { 'date': new Date('2012-07-29'), 'temperature': 72.5 },
            { 'date': new Date('2012-07-30'), 'temperature': 72.9 },
            { 'date': new Date('2012-07-31'), 'temperature': 73.6 },
            { 'date': new Date('2012-08-01'), 'temperature': 75.0 },
            { 'date': new Date('2012-08-02'), 'temperature': 77.7 },
            { 'date': new Date('2012-08-03'), 'temperature': 79.7 },
            { 'date': new Date('2012-08-04'), 'temperature': 79.6 },
            { 'date': new Date('2012-08-05'), 'temperature': 81.5 },
            { 'date': new Date('2012-08-06'), 'temperature': 80.0 },
            { 'date': new Date('2012-08-07'), 'temperature': 75.7 },
            { 'date': new Date('2012-08-08'), 'temperature': 77.8 },
            { 'date': new Date('2012-08-09'), 'temperature': 78.6 },
            { 'date': new Date('2012-08-10'), 'temperature': 77.8 },
            { 'date': new Date('2012-08-11'), 'temperature': 78.5 },
            { 'date': new Date('2012-08-12'), 'temperature': 78.8 },
            { 'date': new Date('2012-08-13'), 'temperature': 78.6 },
            { 'date': new Date('2012-08-14'), 'temperature': 76.8 },
            { 'date': new Date('2012-08-15'), 'temperature': 76.7 },
            { 'date': new Date('2012-08-16'), 'temperature': 75.9 },
            { 'date': new Date('2012-08-17'), 'temperature': 77.6 },
            { 'date': new Date('2012-08-18'), 'temperature': 72.6 },
            { 'date': new Date('2012-08-19'), 'temperature': 70.4 },
            { 'date': new Date('2012-08-20'), 'temperature': 71.8 },
            { 'date': new Date('2012-08-21'), 'temperature': 73.6 },
            { 'date': new Date('2012-08-22'), 'temperature': 74.7 },
            { 'date': new Date('2012-08-23'), 'temperature': 74.6 },
            { 'date': new Date('2012-08-24'), 'temperature': 76.0 },
            { 'date': new Date('2012-08-25'), 'temperature': 76.2 },
            { 'date': new Date('2012-08-26'), 'temperature': 73.4 },
            { 'date': new Date('2012-08-27'), 'temperature': 74.6 },
            { 'date': new Date('2012-08-28'), 'temperature': 79.4 },
            { 'date': new Date('2012-08-29'), 'temperature': 74.7 },
            { 'date': new Date('2012-08-30'), 'temperature': 73.5 },
            { 'date': new Date('2012-08-31'), 'temperature': 77.9 },
            { 'date': new Date('2012-09-01'), 'temperature': 80.7 },
            { 'date': new Date('2012-09-02'), 'temperature': 75.1 },
            { 'date': new Date('2012-09-03'), 'temperature': 73.5 },
            { 'date': new Date('2012-09-04'), 'temperature': 73.5 },
            { 'date': new Date('2012-09-05'), 'temperature': 77.7 },
            { 'date': new Date('2012-09-06'), 'temperature': 74.2 },
            { 'date': new Date('2012-09-07'), 'temperature': 76.0 },
            { 'date': new Date('2012-09-08'), 'temperature': 77.1 },
            { 'date': new Date('2012-09-09'), 'temperature': 69.7 },
            { 'date': new Date('2012-09-10'), 'temperature': 67.8 },
            { 'date': new Date('2012-09-11'), 'temperature': 64.0 },
            { 'date': new Date('2012-09-12'), 'temperature': 68.1 },
            { 'date': new Date('2012-09-13'), 'temperature': 69.3 },
            { 'date': new Date('2012-09-14'), 'temperature': 70.0 },
            { 'date': new Date('2012-09-15'), 'temperature': 69.3 },
            { 'date': new Date('2012-09-16'), 'temperature': 66.3 },
            { 'date': new Date('2012-09-17'), 'temperature': 67.0 },
            { 'date': new Date('2012-09-18'), 'temperature': 72.8 },
            { 'date': new Date('2012-09-19'), 'temperature': 67.2 },
            { 'date': new Date('2012-09-20'), 'temperature': 62.1 },
            { 'date': new Date('2012-09-21'), 'temperature': 64.0 },
            { 'date': new Date('2012-09-22'), 'temperature': 65.5 },
            { 'date': new Date('2012-09-23'), 'temperature': 65.7 },
            { 'date': new Date('2012-09-24'), 'temperature': 60.4 },
            { 'date': new Date('2012-09-25'), 'temperature': 63.2 },
            { 'date': new Date('2012-09-26'), 'temperature': 68.5 },
            { 'date': new Date('2012-09-27'), 'temperature': 69.2 },
            { 'date': new Date('2012-09-28'), 'temperature': 68.7 },
            { 'date': new Date('2012-09-29'), 'temperature': 62.5 },
            { 'date': new Date('2012-09-30'), 'temperature': 62.3 }
        ]
    },
    {
        'id': 'San Francisco',
        'values': [
            { 'date': new Date('2011-10-01'), 'temperature': 62.7 },
            { 'date': new Date('2011-10-02'), 'temperature': 59.9 },
            { 'date': new Date('2011-10-03'), 'temperature': 59.1 },
            { 'date': new Date('2011-10-04'), 'temperature': 58.8 },
            { 'date': new Date('2011-10-05'), 'temperature': 58.7 },
            { 'date': new Date('2011-10-06'), 'temperature': 57.0 },
            { 'date': new Date('2011-10-07'), 'temperature': 56.7 },
            { 'date': new Date('2011-10-08'), 'temperature': 56.8 },
            { 'date': new Date('2011-10-09'), 'temperature': 56.7 },
            { 'date': new Date('2011-10-10'), 'temperature': 60.1 },
            { 'date': new Date('2011-10-11'), 'temperature': 61.1 },
            { 'date': new Date('2011-10-12'), 'temperature': 61.5 },
            { 'date': new Date('2011-10-13'), 'temperature': 64.3 },
            { 'date': new Date('2011-10-14'), 'temperature': 67.1 },
            { 'date': new Date('2011-10-15'), 'temperature': 64.6 },
            { 'date': new Date('2011-10-16'), 'temperature': 61.6 },
            { 'date': new Date('2011-10-17'), 'temperature': 61.1 },
            { 'date': new Date('2011-10-18'), 'temperature': 59.2 },
            { 'date': new Date('2011-10-19'), 'temperature': 58.9 },
            { 'date': new Date('2011-10-20'), 'temperature': 57.2 },
            { 'date': new Date('2011-10-21'), 'temperature': 56.4 },
            { 'date': new Date('2011-10-22'), 'temperature': 60.7 },
            { 'date': new Date('2011-10-23'), 'temperature': 65.1 },
            { 'date': new Date('2011-10-24'), 'temperature': 60.9 },
            { 'date': new Date('2011-10-25'), 'temperature': 56.1 },
            { 'date': new Date('2011-10-26'), 'temperature': 54.6 },
            { 'date': new Date('2011-10-27'), 'temperature': 56.1 },
            { 'date': new Date('2011-10-28'), 'temperature': 58.1 },
            { 'date': new Date('2011-10-29'), 'temperature': 57.5 },
            { 'date': new Date('2011-10-30'), 'temperature': 57.7 },
            { 'date': new Date('2011-10-31'), 'temperature': 55.1 },
            { 'date': new Date('2011-11-01'), 'temperature': 57.9 },
            { 'date': new Date('2011-11-02'), 'temperature': 64.6 },
            { 'date': new Date('2011-11-03'), 'temperature': 56.2 },
            { 'date': new Date('2011-11-04'), 'temperature': 50.5 },
            { 'date': new Date('2011-11-05'), 'temperature': 51.3 },
            { 'date': new Date('2011-11-06'), 'temperature': 52.6 },
            { 'date': new Date('2011-11-07'), 'temperature': 51.4 },
            { 'date': new Date('2011-11-08'), 'temperature': 50.6 },
            { 'date': new Date('2011-11-09'), 'temperature': 54.6 },
            { 'date': new Date('2011-11-10'), 'temperature': 55.6 },
            { 'date': new Date('2011-11-11'), 'temperature': 53.9 },
            { 'date': new Date('2011-11-12'), 'temperature': 54.0 },
            { 'date': new Date('2011-11-13'), 'temperature': 53.8 },
            { 'date': new Date('2011-11-14'), 'temperature': 53.5 },
            { 'date': new Date('2011-11-15'), 'temperature': 53.4 },
            { 'date': new Date('2011-11-16'), 'temperature': 52.2 },
            { 'date': new Date('2011-11-17'), 'temperature': 52.7 },
            { 'date': new Date('2011-11-18'), 'temperature': 53.1 },
            { 'date': new Date('2011-11-19'), 'temperature': 49.0 },
            { 'date': new Date('2011-11-20'), 'temperature': 50.4 },
            { 'date': new Date('2011-11-21'), 'temperature': 51.1 },
            { 'date': new Date('2011-11-22'), 'temperature': 52.3 },
            { 'date': new Date('2011-11-23'), 'temperature': 54.6 },
            { 'date': new Date('2011-11-24'), 'temperature': 55.1 },
            { 'date': new Date('2011-11-25'), 'temperature': 51.5 },
            { 'date': new Date('2011-11-26'), 'temperature': 53.6 },
            { 'date': new Date('2011-11-27'), 'temperature': 52.3 },
            { 'date': new Date('2011-11-28'), 'temperature': 51.0 },
            { 'date': new Date('2011-11-29'), 'temperature': 49.5 },
            { 'date': new Date('2011-11-30'), 'temperature': 49.8 },
            { 'date': new Date('2011-12-01'), 'temperature': 60.4 },
            { 'date': new Date('2011-12-02'), 'temperature': 62.2 },
            { 'date': new Date('2011-12-03'), 'temperature': 58.3 },
            { 'date': new Date('2011-12-04'), 'temperature': 52.7 },
            { 'date': new Date('2011-12-05'), 'temperature': 51.5 },
            { 'date': new Date('2011-12-06'), 'temperature': 49.9 },
            { 'date': new Date('2011-12-07'), 'temperature': 48.6 },
            { 'date': new Date('2011-12-08'), 'temperature': 46.4 },
            { 'date': new Date('2011-12-09'), 'temperature': 49.8 },
            { 'date': new Date('2011-12-10'), 'temperature': 52.1 },
            { 'date': new Date('2011-12-11'), 'temperature': 48.8 },
            { 'date': new Date('2011-12-12'), 'temperature': 47.4 },
            { 'date': new Date('2011-12-13'), 'temperature': 47.2 },
            { 'date': new Date('2011-12-14'), 'temperature': 46.1 },
            { 'date': new Date('2011-12-15'), 'temperature': 48.8 },
            { 'date': new Date('2011-12-16'), 'temperature': 47.9 },
            { 'date': new Date('2011-12-17'), 'temperature': 49.8 },
            { 'date': new Date('2011-12-18'), 'temperature': 49.1 },
            { 'date': new Date('2011-12-19'), 'temperature': 48.3 },
            { 'date': new Date('2011-12-20'), 'temperature': 49.3 },
            { 'date': new Date('2011-12-21'), 'temperature': 48.4 },
            { 'date': new Date('2011-12-22'), 'temperature': 53.3 },
            { 'date': new Date('2011-12-23'), 'temperature': 47.5 },
            { 'date': new Date('2011-12-24'), 'temperature': 47.9 },
            { 'date': new Date('2011-12-25'), 'temperature': 48.9 },
            { 'date': new Date('2011-12-26'), 'temperature': 45.9 },
            { 'date': new Date('2011-12-27'), 'temperature': 47.2 },
            { 'date': new Date('2011-12-28'), 'temperature': 48.9 },
            { 'date': new Date('2011-12-29'), 'temperature': 50.9 },
            { 'date': new Date('2011-12-30'), 'temperature': 52.9 },
            { 'date': new Date('2011-12-31'), 'temperature': 50.1 },
            { 'date': new Date('2012-01-01'), 'temperature': 53.9 },
            { 'date': new Date('2012-01-02'), 'temperature': 53.1 },
            { 'date': new Date('2012-01-03'), 'temperature': 49.7 },
            { 'date': new Date('2012-01-04'), 'temperature': 52.7 },
            { 'date': new Date('2012-01-05'), 'temperature': 52.6 },
            { 'date': new Date('2012-01-06'), 'temperature': 49.0 },
            { 'date': new Date('2012-01-07'), 'temperature': 51.0 },
            { 'date': new Date('2012-01-08'), 'temperature': 56.8 },
            { 'date': new Date('2012-01-09'), 'temperature': 52.3 },
            { 'date': new Date('2012-01-10'), 'temperature': 51.6 },
            { 'date': new Date('2012-01-11'), 'temperature': 49.8 },
            { 'date': new Date('2012-01-12'), 'temperature': 51.9 },
            { 'date': new Date('2012-01-13'), 'temperature': 53.7 },
            { 'date': new Date('2012-01-14'), 'temperature': 52.9 },
            { 'date': new Date('2012-01-15'), 'temperature': 49.7 },
            { 'date': new Date('2012-01-16'), 'temperature': 45.3 },
            { 'date': new Date('2012-01-17'), 'temperature': 43.6 },
            { 'date': new Date('2012-01-18'), 'temperature': 45.0 },
            { 'date': new Date('2012-01-19'), 'temperature': 47.3 },
            { 'date': new Date('2012-01-20'), 'temperature': 51.4 },
            { 'date': new Date('2012-01-21'), 'temperature': 53.7 },
            { 'date': new Date('2012-01-22'), 'temperature': 48.3 },
            { 'date': new Date('2012-01-23'), 'temperature': 52.9 },
            { 'date': new Date('2012-01-24'), 'temperature': 49.1 },
            { 'date': new Date('2012-01-25'), 'temperature': 52.1 },
            { 'date': new Date('2012-01-26'), 'temperature': 53.6 },
            { 'date': new Date('2012-01-27'), 'temperature': 50.4 },
            { 'date': new Date('2012-01-28'), 'temperature': 50.3 },
            { 'date': new Date('2012-01-29'), 'temperature': 53.8 },
            { 'date': new Date('2012-01-30'), 'temperature': 51.9 },
            { 'date': new Date('2012-01-31'), 'temperature': 50.0 },
            { 'date': new Date('2012-02-01'), 'temperature': 50.0 },
            { 'date': new Date('2012-02-02'), 'temperature': 51.3 },
            { 'date': new Date('2012-02-03'), 'temperature': 51.5 },
            { 'date': new Date('2012-02-04'), 'temperature': 52.0 },
            { 'date': new Date('2012-02-05'), 'temperature': 53.8 },
            { 'date': new Date('2012-02-06'), 'temperature': 54.6 },
            { 'date': new Date('2012-02-07'), 'temperature': 54.3 },
            { 'date': new Date('2012-02-08'), 'temperature': 51.9 },
            { 'date': new Date('2012-02-09'), 'temperature': 53.8 },
            { 'date': new Date('2012-02-10'), 'temperature': 53.9 },
            { 'date': new Date('2012-02-11'), 'temperature': 52.3 },
            { 'date': new Date('2012-02-12'), 'temperature': 50.1 },
            { 'date': new Date('2012-02-13'), 'temperature': 49.5 },
            { 'date': new Date('2012-02-14'), 'temperature': 48.6 },
            { 'date': new Date('2012-02-15'), 'temperature': 49.9 },
            { 'date': new Date('2012-02-16'), 'temperature': 52.4 },
            { 'date': new Date('2012-02-17'), 'temperature': 49.9 },
            { 'date': new Date('2012-02-18'), 'temperature': 51.6 },
            { 'date': new Date('2012-02-19'), 'temperature': 47.8 },
            { 'date': new Date('2012-02-20'), 'temperature': 48.7 },
            { 'date': new Date('2012-02-21'), 'temperature': 49.7 },
            { 'date': new Date('2012-02-22'), 'temperature': 53.4 },
            { 'date': new Date('2012-02-23'), 'temperature': 54.1 },
            { 'date': new Date('2012-02-24'), 'temperature': 55.9 },
            { 'date': new Date('2012-02-25'), 'temperature': 51.7 },
            { 'date': new Date('2012-02-26'), 'temperature': 47.7 },
            { 'date': new Date('2012-02-27'), 'temperature': 45.4 },
            { 'date': new Date('2012-02-28'), 'temperature': 47.0 },
            { 'date': new Date('2012-02-29'), 'temperature': 49.8 },
            { 'date': new Date('2012-03-01'), 'temperature': 48.9 },
            { 'date': new Date('2012-03-02'), 'temperature': 48.1 },
            { 'date': new Date('2012-03-03'), 'temperature': 50.7 },
            { 'date': new Date('2012-03-04'), 'temperature': 55.0 },
            { 'date': new Date('2012-03-05'), 'temperature': 48.8 },
            { 'date': new Date('2012-03-06'), 'temperature': 48.4 },
            { 'date': new Date('2012-03-07'), 'temperature': 49.9 },
            { 'date': new Date('2012-03-08'), 'temperature': 49.2 },
            { 'date': new Date('2012-03-09'), 'temperature': 51.7 },
            { 'date': new Date('2012-03-10'), 'temperature': 49.3 },
            { 'date': new Date('2012-03-11'), 'temperature': 50.0 },
            { 'date': new Date('2012-03-12'), 'temperature': 48.6 },
            { 'date': new Date('2012-03-13'), 'temperature': 53.9 },
            { 'date': new Date('2012-03-14'), 'temperature': 55.2 },
            { 'date': new Date('2012-03-15'), 'temperature': 55.9 },
            { 'date': new Date('2012-03-16'), 'temperature': 54.6 },
            { 'date': new Date('2012-03-17'), 'temperature': 48.2 },
            { 'date': new Date('2012-03-18'), 'temperature': 47.1 },
            { 'date': new Date('2012-03-19'), 'temperature': 45.8 },
            { 'date': new Date('2012-03-20'), 'temperature': 49.7 },
            { 'date': new Date('2012-03-21'), 'temperature': 51.4 },
            { 'date': new Date('2012-03-22'), 'temperature': 51.4 },
            { 'date': new Date('2012-03-23'), 'temperature': 48.4 },
            { 'date': new Date('2012-03-24'), 'temperature': 49.0 },
            { 'date': new Date('2012-03-25'), 'temperature': 46.4 },
            { 'date': new Date('2012-03-26'), 'temperature': 49.7 },
            { 'date': new Date('2012-03-27'), 'temperature': 54.1 },
            { 'date': new Date('2012-03-28'), 'temperature': 54.6 },
            { 'date': new Date('2012-03-29'), 'temperature': 52.3 },
            { 'date': new Date('2012-03-30'), 'temperature': 54.5 },
            { 'date': new Date('2012-03-31'), 'temperature': 56.2 },
            { 'date': new Date('2012-04-01'), 'temperature': 51.1 },
            { 'date': new Date('2012-04-02'), 'temperature': 50.5 },
            { 'date': new Date('2012-04-03'), 'temperature': 52.2 },
            { 'date': new Date('2012-04-04'), 'temperature': 50.6 },
            { 'date': new Date('2012-04-05'), 'temperature': 47.9 },
            { 'date': new Date('2012-04-06'), 'temperature': 47.4 },
            { 'date': new Date('2012-04-07'), 'temperature': 49.4 },
            { 'date': new Date('2012-04-08'), 'temperature': 50.0 },
            { 'date': new Date('2012-04-09'), 'temperature': 51.3 },
            { 'date': new Date('2012-04-10'), 'temperature': 53.8 },
            { 'date': new Date('2012-04-11'), 'temperature': 52.9 },
            { 'date': new Date('2012-04-12'), 'temperature': 53.9 },
            { 'date': new Date('2012-04-13'), 'temperature': 50.2 },
            { 'date': new Date('2012-04-14'), 'temperature': 50.9 },
            { 'date': new Date('2012-04-15'), 'temperature': 51.5 },
            { 'date': new Date('2012-04-16'), 'temperature': 51.9 },
            { 'date': new Date('2012-04-17'), 'temperature': 53.2 },
            { 'date': new Date('2012-04-18'), 'temperature': 53.0 },
            { 'date': new Date('2012-04-19'), 'temperature': 55.1 },
            { 'date': new Date('2012-04-20'), 'temperature': 55.8 },
            { 'date': new Date('2012-04-21'), 'temperature': 58.0 },
            { 'date': new Date('2012-04-22'), 'temperature': 52.8 },
            { 'date': new Date('2012-04-23'), 'temperature': 55.1 },
            { 'date': new Date('2012-04-24'), 'temperature': 57.9 },
            { 'date': new Date('2012-04-25'), 'temperature': 57.5 },
            { 'date': new Date('2012-04-26'), 'temperature': 55.3 },
            { 'date': new Date('2012-04-27'), 'temperature': 53.5 },
            { 'date': new Date('2012-04-28'), 'temperature': 54.7 },
            { 'date': new Date('2012-04-29'), 'temperature': 54.0 },
            { 'date': new Date('2012-04-30'), 'temperature': 53.4 },
            { 'date': new Date('2012-05-01'), 'temperature': 52.7 },
            { 'date': new Date('2012-05-02'), 'temperature': 50.7 },
            { 'date': new Date('2012-05-03'), 'temperature': 52.6 },
            { 'date': new Date('2012-05-04'), 'temperature': 53.4 },
            { 'date': new Date('2012-05-05'), 'temperature': 53.1 },
            { 'date': new Date('2012-05-06'), 'temperature': 56.5 },
            { 'date': new Date('2012-05-07'), 'temperature': 55.3 },
            { 'date': new Date('2012-05-08'), 'temperature': 52.0 },
            { 'date': new Date('2012-05-09'), 'temperature': 52.4 },
            { 'date': new Date('2012-05-10'), 'temperature': 53.4 },
            { 'date': new Date('2012-05-11'), 'temperature': 53.1 },
            { 'date': new Date('2012-05-12'), 'temperature': 49.9 },
            { 'date': new Date('2012-05-13'), 'temperature': 52.0 },
            { 'date': new Date('2012-05-14'), 'temperature': 56.0 },
            { 'date': new Date('2012-05-15'), 'temperature': 53.0 },
            { 'date': new Date('2012-05-16'), 'temperature': 51.0 },
            { 'date': new Date('2012-05-17'), 'temperature': 51.4 },
            { 'date': new Date('2012-05-18'), 'temperature': 52.2 },
            { 'date': new Date('2012-05-19'), 'temperature': 52.4 },
            { 'date': new Date('2012-05-20'), 'temperature': 54.5 },
            { 'date': new Date('2012-05-21'), 'temperature': 52.8 },
            { 'date': new Date('2012-05-22'), 'temperature': 53.9 },
            { 'date': new Date('2012-05-23'), 'temperature': 56.5 },
            { 'date': new Date('2012-05-24'), 'temperature': 54.7 },
            { 'date': new Date('2012-05-25'), 'temperature': 52.5 },
            { 'date': new Date('2012-05-26'), 'temperature': 52.1 },
            { 'date': new Date('2012-05-27'), 'temperature': 52.2 },
            { 'date': new Date('2012-05-28'), 'temperature': 52.9 },
            { 'date': new Date('2012-05-29'), 'temperature': 52.1 },
            { 'date': new Date('2012-05-30'), 'temperature': 52.1 },
            { 'date': new Date('2012-05-31'), 'temperature': 53.3 },
            { 'date': new Date('2012-06-01'), 'temperature': 54.8 },
            { 'date': new Date('2012-06-02'), 'temperature': 54.0 },
            { 'date': new Date('2012-06-03'), 'temperature': 52.3 },
            { 'date': new Date('2012-06-04'), 'temperature': 55.3 },
            { 'date': new Date('2012-06-05'), 'temperature': 53.5 },
            { 'date': new Date('2012-06-06'), 'temperature': 54.1 },
            { 'date': new Date('2012-06-07'), 'temperature': 53.9 },
            { 'date': new Date('2012-06-08'), 'temperature': 54.4 },
            { 'date': new Date('2012-06-09'), 'temperature': 55.0 },
            { 'date': new Date('2012-06-10'), 'temperature': 60.0 },
            { 'date': new Date('2012-06-11'), 'temperature': 57.2 },
            { 'date': new Date('2012-06-12'), 'temperature': 55.1 },
            { 'date': new Date('2012-06-13'), 'temperature': 53.3 },
            { 'date': new Date('2012-06-14'), 'temperature': 53.4 },
            { 'date': new Date('2012-06-15'), 'temperature': 54.6 },
            { 'date': new Date('2012-06-16'), 'temperature': 57.0 },
            { 'date': new Date('2012-06-17'), 'temperature': 55.6 },
            { 'date': new Date('2012-06-18'), 'temperature': 52.5 },
            { 'date': new Date('2012-06-19'), 'temperature': 53.9 },
            { 'date': new Date('2012-06-20'), 'temperature': 55.3 },
            { 'date': new Date('2012-06-21'), 'temperature': 53.3 },
            { 'date': new Date('2012-06-22'), 'temperature': 54.1 },
            { 'date': new Date('2012-06-23'), 'temperature': 55.2 },
            { 'date': new Date('2012-06-24'), 'temperature': 55.8 },
            { 'date': new Date('2012-06-25'), 'temperature': 56.8 },
            { 'date': new Date('2012-06-26'), 'temperature': 57.5 },
            { 'date': new Date('2012-06-27'), 'temperature': 57.7 },
            { 'date': new Date('2012-06-28'), 'temperature': 56.6 },
            { 'date': new Date('2012-06-29'), 'temperature': 56.4 },
            { 'date': new Date('2012-06-30'), 'temperature': 58.4 },
            { 'date': new Date('2012-07-01'), 'temperature': 58.8 },
            { 'date': new Date('2012-07-02'), 'temperature': 56.4 },
            { 'date': new Date('2012-07-03'), 'temperature': 56.5 },
            { 'date': new Date('2012-07-04'), 'temperature': 55.8 },
            { 'date': new Date('2012-07-05'), 'temperature': 54.8 },
            { 'date': new Date('2012-07-06'), 'temperature': 54.9 },
            { 'date': new Date('2012-07-07'), 'temperature': 54.7 },
            { 'date': new Date('2012-07-08'), 'temperature': 52.8 },
            { 'date': new Date('2012-07-09'), 'temperature': 53.7 },
            { 'date': new Date('2012-07-10'), 'temperature': 53.1 },
            { 'date': new Date('2012-07-11'), 'temperature': 52.7 },
            { 'date': new Date('2012-07-12'), 'temperature': 52.0 },
            { 'date': new Date('2012-07-13'), 'temperature': 53.4 },
            { 'date': new Date('2012-07-14'), 'temperature': 54.0 },
            { 'date': new Date('2012-07-15'), 'temperature': 54.0 },
            { 'date': new Date('2012-07-16'), 'temperature': 54.5 },
            { 'date': new Date('2012-07-17'), 'temperature': 56.7 },
            { 'date': new Date('2012-07-18'), 'temperature': 57.5 },
            { 'date': new Date('2012-07-19'), 'temperature': 57.1 },
            { 'date': new Date('2012-07-20'), 'temperature': 58.1 },
            { 'date': new Date('2012-07-21'), 'temperature': 57.6 },
            { 'date': new Date('2012-07-22'), 'temperature': 56.0 },
            { 'date': new Date('2012-07-23'), 'temperature': 56.6 },
            { 'date': new Date('2012-07-24'), 'temperature': 57.8 },
            { 'date': new Date('2012-07-25'), 'temperature': 57.5 },
            { 'date': new Date('2012-07-26'), 'temperature': 56.4 },
            { 'date': new Date('2012-07-27'), 'temperature': 55.3 },
            { 'date': new Date('2012-07-28'), 'temperature': 55.0 },
            { 'date': new Date('2012-07-29'), 'temperature': 55.6 },
            { 'date': new Date('2012-07-30'), 'temperature': 55.6 },
            { 'date': new Date('2012-07-31'), 'temperature': 55.9 },
            { 'date': new Date('2012-08-01'), 'temperature': 55.4 },
            { 'date': new Date('2012-08-02'), 'temperature': 54.4 },
            { 'date': new Date('2012-08-03'), 'temperature': 53.7 },
            { 'date': new Date('2012-08-04'), 'temperature': 54.1 },
            { 'date': new Date('2012-08-05'), 'temperature': 57.8 },
            { 'date': new Date('2012-08-06'), 'temperature': 58.2 },
            { 'date': new Date('2012-08-07'), 'temperature': 58.0 },
            { 'date': new Date('2012-08-08'), 'temperature': 57.0 },
            { 'date': new Date('2012-08-09'), 'temperature': 55.0 },
            { 'date': new Date('2012-08-10'), 'temperature': 54.8 },
            { 'date': new Date('2012-08-11'), 'temperature': 53.0 },
            { 'date': new Date('2012-08-12'), 'temperature': 52.5 },
            { 'date': new Date('2012-08-13'), 'temperature': 53.3 },
            { 'date': new Date('2012-08-14'), 'temperature': 53.9 },
            { 'date': new Date('2012-08-15'), 'temperature': 56.2 },
            { 'date': new Date('2012-08-16'), 'temperature': 57.1 },
            { 'date': new Date('2012-08-17'), 'temperature': 55.3 },
            { 'date': new Date('2012-08-18'), 'temperature': 56.2 },
            { 'date': new Date('2012-08-19'), 'temperature': 54.3 },
            { 'date': new Date('2012-08-20'), 'temperature': 53.1 },
            { 'date': new Date('2012-08-21'), 'temperature': 53.4 },
            { 'date': new Date('2012-08-22'), 'temperature': 54.5 },
            { 'date': new Date('2012-08-23'), 'temperature': 55.7 },
            { 'date': new Date('2012-08-24'), 'temperature': 54.8 },
            { 'date': new Date('2012-08-25'), 'temperature': 53.8 },
            { 'date': new Date('2012-08-26'), 'temperature': 56.5 },
            { 'date': new Date('2012-08-27'), 'temperature': 58.3 },
            { 'date': new Date('2012-08-28'), 'temperature': 58.7 },
            { 'date': new Date('2012-08-29'), 'temperature': 57.5 },
            { 'date': new Date('2012-08-30'), 'temperature': 55.9 },
            { 'date': new Date('2012-08-31'), 'temperature': 55.4 },
            { 'date': new Date('2012-09-01'), 'temperature': 55.7 },
            { 'date': new Date('2012-09-02'), 'temperature': 53.1 },
            { 'date': new Date('2012-09-03'), 'temperature': 53.5 },
            { 'date': new Date('2012-09-04'), 'temperature': 52.5 },
            { 'date': new Date('2012-09-05'), 'temperature': 54.5 },
            { 'date': new Date('2012-09-06'), 'temperature': 56.3 },
            { 'date': new Date('2012-09-07'), 'temperature': 56.4 },
            { 'date': new Date('2012-09-08'), 'temperature': 56.5 },
            { 'date': new Date('2012-09-09'), 'temperature': 56.4 },
            { 'date': new Date('2012-09-10'), 'temperature': 55.4 },
            { 'date': new Date('2012-09-11'), 'temperature': 56.2 },
            { 'date': new Date('2012-09-12'), 'temperature': 55.7 },
            { 'date': new Date('2012-09-13'), 'temperature': 54.3 },
            { 'date': new Date('2012-09-14'), 'temperature': 55.2 },
            { 'date': new Date('2012-09-15'), 'temperature': 54.3 },
            { 'date': new Date('2012-09-16'), 'temperature': 52.9 },
            { 'date': new Date('2012-09-17'), 'temperature': 54.8 },
            { 'date': new Date('2012-09-18'), 'temperature': 54.8 },
            { 'date': new Date('2012-09-19'), 'temperature': 56.8 },
            { 'date': new Date('2012-09-20'), 'temperature': 55.4 },
            { 'date': new Date('2012-09-21'), 'temperature': 55.8 },
            { 'date': new Date('2012-09-22'), 'temperature': 55.9 },
            { 'date': new Date('2012-09-23'), 'temperature': 52.8 },
            { 'date': new Date('2012-09-24'), 'temperature': 54.5 },
            { 'date': new Date('2012-09-25'), 'temperature': 53.3 },
            { 'date': new Date('2012-09-26'), 'temperature': 53.6 },
            { 'date': new Date('2012-09-27'), 'temperature': 52.1 },
            { 'date': new Date('2012-09-28'), 'temperature': 52.6 },
            { 'date': new Date('2012-09-29'), 'temperature': 53.9 },
            { 'date': new Date('2012-09-30'), 'temperature': 55.1 }
        ]
    },
    {
        'id': 'Austin',
        'values': [
            { 'date': new Date('2011-10-01'), 'temperature': 72.2 },
            { 'date': new Date('2011-10-02'), 'temperature': 67.7 },
            { 'date': new Date('2011-10-03'), 'temperature': 69.4 },
            { 'date': new Date('2011-10-04'), 'temperature': 68.0 },
            { 'date': new Date('2011-10-05'), 'temperature': 72.4 },
            { 'date': new Date('2011-10-06'), 'temperature': 77.0 },
            { 'date': new Date('2011-10-07'), 'temperature': 82.3 },
            { 'date': new Date('2011-10-08'), 'temperature': 78.9 },
            { 'date': new Date('2011-10-09'), 'temperature': 68.8 },
            { 'date': new Date('2011-10-10'), 'temperature': 68.7 },
            { 'date': new Date('2011-10-11'), 'temperature': 70.3 },
            { 'date': new Date('2011-10-12'), 'temperature': 75.3 },
            { 'date': new Date('2011-10-13'), 'temperature': 76.6 },
            { 'date': new Date('2011-10-14'), 'temperature': 66.6 },
            { 'date': new Date('2011-10-15'), 'temperature': 68.0 },
            { 'date': new Date('2011-10-16'), 'temperature': 70.6 },
            { 'date': new Date('2011-10-17'), 'temperature': 71.1 },
            { 'date': new Date('2011-10-18'), 'temperature': 70.0 },
            { 'date': new Date('2011-10-19'), 'temperature': 61.6 },
            { 'date': new Date('2011-10-20'), 'temperature': 57.4 },
            { 'date': new Date('2011-10-21'), 'temperature': 64.3 },
            { 'date': new Date('2011-10-22'), 'temperature': 72.4 },
            { 'date': new Date('2011-10-23'), 'temperature': 72.4 },
            { 'date': new Date('2011-10-24'), 'temperature': 72.5 },
            { 'date': new Date('2011-10-25'), 'temperature': 72.7 },
            { 'date': new Date('2011-10-26'), 'temperature': 73.4 },
            { 'date': new Date('2011-10-27'), 'temperature': 70.7 },
            { 'date': new Date('2011-10-28'), 'temperature': 56.8 },
            { 'date': new Date('2011-10-29'), 'temperature': 51.0 },
            { 'date': new Date('2011-10-30'), 'temperature': 54.9 },
            { 'date': new Date('2011-10-31'), 'temperature': 58.8 },
            { 'date': new Date('2011-11-01'), 'temperature': 62.6 },
            { 'date': new Date('2011-11-02'), 'temperature': 71.0 },
            { 'date': new Date('2011-11-03'), 'temperature': 58.4 },
            { 'date': new Date('2011-11-04'), 'temperature': 45.1 },
            { 'date': new Date('2011-11-05'), 'temperature': 52.2 },
            { 'date': new Date('2011-11-06'), 'temperature': 73.0 },
            { 'date': new Date('2011-11-07'), 'temperature': 75.4 },
            { 'date': new Date('2011-11-08'), 'temperature': 72.1 },
            { 'date': new Date('2011-11-09'), 'temperature': 56.6 },
            { 'date': new Date('2011-11-10'), 'temperature': 55.4 },
            { 'date': new Date('2011-11-11'), 'temperature': 46.7 },
            { 'date': new Date('2011-11-12'), 'temperature': 62.0 },
            { 'date': new Date('2011-11-13'), 'temperature': 71.6 },
            { 'date': new Date('2011-11-14'), 'temperature': 75.5 },
            { 'date': new Date('2011-11-15'), 'temperature': 72.1 },
            { 'date': new Date('2011-11-16'), 'temperature': 65.7 },
            { 'date': new Date('2011-11-17'), 'temperature': 56.8 },
            { 'date': new Date('2011-11-18'), 'temperature': 49.9 },
            { 'date': new Date('2011-11-19'), 'temperature': 71.7 },
            { 'date': new Date('2011-11-20'), 'temperature': 77.7 },
            { 'date': new Date('2011-11-21'), 'temperature': 76.4 },
            { 'date': new Date('2011-11-22'), 'temperature': 68.8 },
            { 'date': new Date('2011-11-23'), 'temperature': 57.0 },
            { 'date': new Date('2011-11-24'), 'temperature': 55.5 },
            { 'date': new Date('2011-11-25'), 'temperature': 61.6 },
            { 'date': new Date('2011-11-26'), 'temperature': 64.1 },
            { 'date': new Date('2011-11-27'), 'temperature': 51.1 },
            { 'date': new Date('2011-11-28'), 'temperature': 43.0 },
            { 'date': new Date('2011-11-29'), 'temperature': 46.4 },
            { 'date': new Date('2011-11-30'), 'temperature': 48.0 },
            { 'date': new Date('2011-12-01'), 'temperature': 48.1 },
            { 'date': new Date('2011-12-02'), 'temperature': 60.6 },
            { 'date': new Date('2011-12-03'), 'temperature': 62.6 },
            { 'date': new Date('2011-12-04'), 'temperature': 57.1 },
            { 'date': new Date('2011-12-05'), 'temperature': 44.2 },
            { 'date': new Date('2011-12-06'), 'temperature': 37.4 },
            { 'date': new Date('2011-12-07'), 'temperature': 35.0 },
            { 'date': new Date('2011-12-08'), 'temperature': 37.0 },
            { 'date': new Date('2011-12-09'), 'temperature': 45.4 },
            { 'date': new Date('2011-12-10'), 'temperature': 50.7 },
            { 'date': new Date('2011-12-11'), 'temperature': 48.6 },
            { 'date': new Date('2011-12-12'), 'temperature': 52.2 },
            { 'date': new Date('2011-12-13'), 'temperature': 60.8 },
            { 'date': new Date('2011-12-14'), 'temperature': 70.0 },
            { 'date': new Date('2011-12-15'), 'temperature': 64.2 },
            { 'date': new Date('2011-12-16'), 'temperature': 50.9 },
            { 'date': new Date('2011-12-17'), 'temperature': 51.6 },
            { 'date': new Date('2011-12-18'), 'temperature': 55.2 },
            { 'date': new Date('2011-12-19'), 'temperature': 62.1 },
            { 'date': new Date('2011-12-20'), 'temperature': 56.3 },
            { 'date': new Date('2011-12-21'), 'temperature': 47.2 },
            { 'date': new Date('2011-12-22'), 'temperature': 52.3 },
            { 'date': new Date('2011-12-23'), 'temperature': 45.2 },
            { 'date': new Date('2011-12-24'), 'temperature': 43.6 },
            { 'date': new Date('2011-12-25'), 'temperature': 42.9 },
            { 'date': new Date('2011-12-26'), 'temperature': 48.2 },
            { 'date': new Date('2011-12-27'), 'temperature': 45.4 },
            { 'date': new Date('2011-12-28'), 'temperature': 44.2 },
            { 'date': new Date('2011-12-29'), 'temperature': 50.4 },
            { 'date': new Date('2011-12-30'), 'temperature': 52.4 },
            { 'date': new Date('2011-12-31'), 'temperature': 53.5 },
            { 'date': new Date('2012-01-01'), 'temperature': 55.9 },
            { 'date': new Date('2012-01-02'), 'temperature': 48.2 },
            { 'date': new Date('2012-01-03'), 'temperature': 41.0 },
            { 'date': new Date('2012-01-04'), 'temperature': 48.9 },
            { 'date': new Date('2012-01-05'), 'temperature': 54.8 },
            { 'date': new Date('2012-01-06'), 'temperature': 61.2 },
            { 'date': new Date('2012-01-07'), 'temperature': 59.7 },
            { 'date': new Date('2012-01-08'), 'temperature': 52.5 },
            { 'date': new Date('2012-01-09'), 'temperature': 54.0 },
            { 'date': new Date('2012-01-10'), 'temperature': 47.7 },
            { 'date': new Date('2012-01-11'), 'temperature': 49.2 },
            { 'date': new Date('2012-01-12'), 'temperature': 48.4 },
            { 'date': new Date('2012-01-13'), 'temperature': 40.2 },
            { 'date': new Date('2012-01-14'), 'temperature': 43.9 },
            { 'date': new Date('2012-01-15'), 'temperature': 45.2 },
            { 'date': new Date('2012-01-16'), 'temperature': 65.0 },
            { 'date': new Date('2012-01-17'), 'temperature': 68.2 },
            { 'date': new Date('2012-01-18'), 'temperature': 47.5 },
            { 'date': new Date('2012-01-19'), 'temperature': 57.1 },
            { 'date': new Date('2012-01-20'), 'temperature': 61.9 },
            { 'date': new Date('2012-01-21'), 'temperature': 54.6 },
            { 'date': new Date('2012-01-22'), 'temperature': 56.7 },
            { 'date': new Date('2012-01-23'), 'temperature': 54.4 },
            { 'date': new Date('2012-01-24'), 'temperature': 52.7 },
            { 'date': new Date('2012-01-25'), 'temperature': 61.8 },
            { 'date': new Date('2012-01-26'), 'temperature': 55.0 },
            { 'date': new Date('2012-01-27'), 'temperature': 50.7 },
            { 'date': new Date('2012-01-28'), 'temperature': 52.9 },
            { 'date': new Date('2012-01-29'), 'temperature': 44.4 },
            { 'date': new Date('2012-01-30'), 'temperature': 49.1 },
            { 'date': new Date('2012-01-31'), 'temperature': 62.8 },
            { 'date': new Date('2012-02-01'), 'temperature': 64.6 },
            { 'date': new Date('2012-02-02'), 'temperature': 61.1 },
            { 'date': new Date('2012-02-03'), 'temperature': 70.0 },
            { 'date': new Date('2012-02-04'), 'temperature': 61.3 },
            { 'date': new Date('2012-02-05'), 'temperature': 48.2 },
            { 'date': new Date('2012-02-06'), 'temperature': 44.2 },
            { 'date': new Date('2012-02-07'), 'temperature': 51.3 },
            { 'date': new Date('2012-02-08'), 'temperature': 49.2 },
            { 'date': new Date('2012-02-09'), 'temperature': 45.7 },
            { 'date': new Date('2012-02-10'), 'temperature': 54.1 },
            { 'date': new Date('2012-02-11'), 'temperature': 44.9 },
            { 'date': new Date('2012-02-12'), 'temperature': 36.5 },
            { 'date': new Date('2012-02-13'), 'temperature': 44.8 },
            { 'date': new Date('2012-02-14'), 'temperature': 52.3 },
            { 'date': new Date('2012-02-15'), 'temperature': 68.0 },
            { 'date': new Date('2012-02-16'), 'temperature': 54.6 },
            { 'date': new Date('2012-02-17'), 'temperature': 53.8 },
            { 'date': new Date('2012-02-18'), 'temperature': 56.2 },
            { 'date': new Date('2012-02-19'), 'temperature': 50.8 },
            { 'date': new Date('2012-02-20'), 'temperature': 53.0 },
            { 'date': new Date('2012-02-21'), 'temperature': 61.0 },
            { 'date': new Date('2012-02-22'), 'temperature': 68.8 },
            { 'date': new Date('2012-02-23'), 'temperature': 69.4 },
            { 'date': new Date('2012-02-24'), 'temperature': 59.3 },
            { 'date': new Date('2012-02-25'), 'temperature': 47.2 },
            { 'date': new Date('2012-02-26'), 'temperature': 47.7 },
            { 'date': new Date('2012-02-27'), 'temperature': 61.9 },
            { 'date': new Date('2012-02-28'), 'temperature': 67.2 },
            { 'date': new Date('2012-02-29'), 'temperature': 70.1 },
            { 'date': new Date('2012-03-01'), 'temperature': 62.1 },
            { 'date': new Date('2012-03-02'), 'temperature': 72.7 },
            { 'date': new Date('2012-03-03'), 'temperature': 59.0 },
            { 'date': new Date('2012-03-04'), 'temperature': 51.8 },
            { 'date': new Date('2012-03-05'), 'temperature': 55.0 },
            { 'date': new Date('2012-03-06'), 'temperature': 61.8 },
            { 'date': new Date('2012-03-07'), 'temperature': 67.1 },
            { 'date': new Date('2012-03-08'), 'temperature': 72.0 },
            { 'date': new Date('2012-03-09'), 'temperature': 46.4 },
            { 'date': new Date('2012-03-10'), 'temperature': 46.7 },
            { 'date': new Date('2012-03-11'), 'temperature': 56.9 },
            { 'date': new Date('2012-03-12'), 'temperature': 61.9 },
            { 'date': new Date('2012-03-13'), 'temperature': 68.8 },
            { 'date': new Date('2012-03-14'), 'temperature': 71.9 },
            { 'date': new Date('2012-03-15'), 'temperature': 72.0 },
            { 'date': new Date('2012-03-16'), 'temperature': 72.5 },
            { 'date': new Date('2012-03-17'), 'temperature': 71.7 },
            { 'date': new Date('2012-03-18'), 'temperature': 71.1 },
            { 'date': new Date('2012-03-19'), 'temperature': 73.0 },
            { 'date': new Date('2012-03-20'), 'temperature': 63.8 },
            { 'date': new Date('2012-03-21'), 'temperature': 60.0 },
            { 'date': new Date('2012-03-22'), 'temperature': 62.3 },
            { 'date': new Date('2012-03-23'), 'temperature': 61.1 },
            { 'date': new Date('2012-03-24'), 'temperature': 62.0 },
            { 'date': new Date('2012-03-25'), 'temperature': 64.6 },
            { 'date': new Date('2012-03-26'), 'temperature': 66.0 },
            { 'date': new Date('2012-03-27'), 'temperature': 65.8 },
            { 'date': new Date('2012-03-28'), 'temperature': 69.2 },
            { 'date': new Date('2012-03-29'), 'temperature': 69.5 },
            { 'date': new Date('2012-03-30'), 'temperature': 73.5 },
            { 'date': new Date('2012-03-31'), 'temperature': 73.9 },
            { 'date': new Date('2012-04-01'), 'temperature': 75.3 },
            { 'date': new Date('2012-04-02'), 'temperature': 75.4 },
            { 'date': new Date('2012-04-03'), 'temperature': 77.3 },
            { 'date': new Date('2012-04-04'), 'temperature': 67.0 },
            { 'date': new Date('2012-04-05'), 'temperature': 71.1 },
            { 'date': new Date('2012-04-06'), 'temperature': 70.4 },
            { 'date': new Date('2012-04-07'), 'temperature': 73.6 },
            { 'date': new Date('2012-04-08'), 'temperature': 71.1 },
            { 'date': new Date('2012-04-09'), 'temperature': 70.0 },
            { 'date': new Date('2012-04-10'), 'temperature': 69.0 },
            { 'date': new Date('2012-04-11'), 'temperature': 69.2 },
            { 'date': new Date('2012-04-12'), 'temperature': 74.5 },
            { 'date': new Date('2012-04-13'), 'temperature': 73.4 },
            { 'date': new Date('2012-04-14'), 'temperature': 76.0 },
            { 'date': new Date('2012-04-15'), 'temperature': 74.5 },
            { 'date': new Date('2012-04-16'), 'temperature': 63.6 },
            { 'date': new Date('2012-04-17'), 'temperature': 67.3 },
            { 'date': new Date('2012-04-18'), 'temperature': 65.1 },
            { 'date': new Date('2012-04-19'), 'temperature': 67.9 },
            { 'date': new Date('2012-04-20'), 'temperature': 68.9 },
            { 'date': new Date('2012-04-21'), 'temperature': 65.1 },
            { 'date': new Date('2012-04-22'), 'temperature': 65.4 },
            { 'date': new Date('2012-04-23'), 'temperature': 70.1 },
            { 'date': new Date('2012-04-24'), 'temperature': 67.0 },
            { 'date': new Date('2012-04-25'), 'temperature': 75.4 },
            { 'date': new Date('2012-04-26'), 'temperature': 77.5 },
            { 'date': new Date('2012-04-27'), 'temperature': 77.0 },
            { 'date': new Date('2012-04-28'), 'temperature': 77.7 },
            { 'date': new Date('2012-04-29'), 'temperature': 77.7 },
            { 'date': new Date('2012-04-30'), 'temperature': 77.7 },
            { 'date': new Date('2012-05-01'), 'temperature': 77.0 },
            { 'date': new Date('2012-05-02'), 'temperature': 77.9 },
            { 'date': new Date('2012-05-03'), 'temperature': 79.1 },
            { 'date': new Date('2012-05-04'), 'temperature': 80.1 },
            { 'date': new Date('2012-05-05'), 'temperature': 82.1 },
            { 'date': new Date('2012-05-06'), 'temperature': 79.0 },
            { 'date': new Date('2012-05-07'), 'temperature': 79.8 },
            { 'date': new Date('2012-05-08'), 'temperature': 70.0 },
            { 'date': new Date('2012-05-09'), 'temperature': 69.8 },
            { 'date': new Date('2012-05-10'), 'temperature': 71.3 },
            { 'date': new Date('2012-05-11'), 'temperature': 69.4 },
            { 'date': new Date('2012-05-12'), 'temperature': 72.0 },
            { 'date': new Date('2012-05-13'), 'temperature': 72.4 },
            { 'date': new Date('2012-05-14'), 'temperature': 72.5 },
            { 'date': new Date('2012-05-15'), 'temperature': 67.6 },
            { 'date': new Date('2012-05-16'), 'temperature': 69.0 },
            { 'date': new Date('2012-05-17'), 'temperature': 72.7 },
            { 'date': new Date('2012-05-18'), 'temperature': 73.7 },
            { 'date': new Date('2012-05-19'), 'temperature': 77.5 },
            { 'date': new Date('2012-05-20'), 'temperature': 75.8 },
            { 'date': new Date('2012-05-21'), 'temperature': 76.9 },
            { 'date': new Date('2012-05-22'), 'temperature': 78.8 },
            { 'date': new Date('2012-05-23'), 'temperature': 77.7 },
            { 'date': new Date('2012-05-24'), 'temperature': 80.6 },
            { 'date': new Date('2012-05-25'), 'temperature': 81.4 },
            { 'date': new Date('2012-05-26'), 'temperature': 82.3 },
            { 'date': new Date('2012-05-27'), 'temperature': 80.3 },
            { 'date': new Date('2012-05-28'), 'temperature': 80.3 },
            { 'date': new Date('2012-05-29'), 'temperature': 82.2 },
            { 'date': new Date('2012-05-30'), 'temperature': 81.9 },
            { 'date': new Date('2012-05-31'), 'temperature': 82.4 },
            { 'date': new Date('2012-06-01'), 'temperature': 77.9 },
            { 'date': new Date('2012-06-02'), 'temperature': 81.1 },
            { 'date': new Date('2012-06-03'), 'temperature': 82.2 },
            { 'date': new Date('2012-06-04'), 'temperature': 81.2 },
            { 'date': new Date('2012-06-05'), 'temperature': 83.0 },
            { 'date': new Date('2012-06-06'), 'temperature': 83.2 },
            { 'date': new Date('2012-06-07'), 'temperature': 82.1 },
            { 'date': new Date('2012-06-08'), 'temperature': 77.5 },
            { 'date': new Date('2012-06-09'), 'temperature': 77.9 },
            { 'date': new Date('2012-06-10'), 'temperature': 82.9 },
            { 'date': new Date('2012-06-11'), 'temperature': 86.8 },
            { 'date': new Date('2012-06-12'), 'temperature': 85.3 },
            { 'date': new Date('2012-06-13'), 'temperature': 76.9 },
            { 'date': new Date('2012-06-14'), 'temperature': 84.5 },
            { 'date': new Date('2012-06-15'), 'temperature': 84.4 },
            { 'date': new Date('2012-06-16'), 'temperature': 83.8 },
            { 'date': new Date('2012-06-17'), 'temperature': 82.5 },
            { 'date': new Date('2012-06-18'), 'temperature': 82.9 },
            { 'date': new Date('2012-06-19'), 'temperature': 82.5 },
            { 'date': new Date('2012-06-20'), 'temperature': 81.3 },
            { 'date': new Date('2012-06-21'), 'temperature': 80.8 },
            { 'date': new Date('2012-06-22'), 'temperature': 81.7 },
            { 'date': new Date('2012-06-23'), 'temperature': 83.9 },
            { 'date': new Date('2012-06-24'), 'temperature': 85.5 },
            { 'date': new Date('2012-06-25'), 'temperature': 87.2 },
            { 'date': new Date('2012-06-26'), 'temperature': 88.0 },
            { 'date': new Date('2012-06-27'), 'temperature': 89.6 },
            { 'date': new Date('2012-06-28'), 'temperature': 86.7 },
            { 'date': new Date('2012-06-29'), 'temperature': 85.3 },
            { 'date': new Date('2012-06-30'), 'temperature': 81.7 },
            { 'date': new Date('2012-07-01'), 'temperature': 78.5 },
            { 'date': new Date('2012-07-02'), 'temperature': 83.1 },
            { 'date': new Date('2012-07-03'), 'temperature': 83.1 },
            { 'date': new Date('2012-07-04'), 'temperature': 84.5 },
            { 'date': new Date('2012-07-05'), 'temperature': 84.6 },
            { 'date': new Date('2012-07-06'), 'temperature': 84.2 },
            { 'date': new Date('2012-07-07'), 'temperature': 86.7 },
            { 'date': new Date('2012-07-08'), 'temperature': 84.3 },
            { 'date': new Date('2012-07-09'), 'temperature': 83.7 },
            { 'date': new Date('2012-07-10'), 'temperature': 77.1 },
            { 'date': new Date('2012-07-11'), 'temperature': 77.4 },
            { 'date': new Date('2012-07-12'), 'temperature': 80.6 },
            { 'date': new Date('2012-07-13'), 'temperature': 81.4 },
            { 'date': new Date('2012-07-14'), 'temperature': 80.2 },
            { 'date': new Date('2012-07-15'), 'temperature': 81.8 },
            { 'date': new Date('2012-07-16'), 'temperature': 77.3 },
            { 'date': new Date('2012-07-17'), 'temperature': 80.8 },
            { 'date': new Date('2012-07-18'), 'temperature': 81.6 },
            { 'date': new Date('2012-07-19'), 'temperature': 80.9 },
            { 'date': new Date('2012-07-20'), 'temperature': 83.9 },
            { 'date': new Date('2012-07-21'), 'temperature': 85.6 },
            { 'date': new Date('2012-07-22'), 'temperature': 83.6 },
            { 'date': new Date('2012-07-23'), 'temperature': 84.0 },
            { 'date': new Date('2012-07-24'), 'temperature': 83.0 },
            { 'date': new Date('2012-07-25'), 'temperature': 84.8 },
            { 'date': new Date('2012-07-26'), 'temperature': 84.4 },
            { 'date': new Date('2012-07-27'), 'temperature': 84.3 },
            { 'date': new Date('2012-07-28'), 'temperature': 83.9 },
            { 'date': new Date('2012-07-29'), 'temperature': 85.0 },
            { 'date': new Date('2012-07-30'), 'temperature': 84.9 },
            { 'date': new Date('2012-07-31'), 'temperature': 86.3 },
            { 'date': new Date('2012-08-01'), 'temperature': 86.5 },
            { 'date': new Date('2012-08-02'), 'temperature': 85.8 },
            { 'date': new Date('2012-08-03'), 'temperature': 85.3 },
            { 'date': new Date('2012-08-04'), 'temperature': 86.0 },
            { 'date': new Date('2012-08-05'), 'temperature': 84.2 },
            { 'date': new Date('2012-08-06'), 'temperature': 81.9 },
            { 'date': new Date('2012-08-07'), 'temperature': 86.5 },
            { 'date': new Date('2012-08-08'), 'temperature': 86.1 },
            { 'date': new Date('2012-08-09'), 'temperature': 86.8 },
            { 'date': new Date('2012-08-10'), 'temperature': 88.0 },
            { 'date': new Date('2012-08-11'), 'temperature': 85.1 },
            { 'date': new Date('2012-08-12'), 'temperature': 87.4 },
            { 'date': new Date('2012-08-13'), 'temperature': 88.0 },
            { 'date': new Date('2012-08-14'), 'temperature': 88.0 },
            { 'date': new Date('2012-08-15'), 'temperature': 87.2 },
            { 'date': new Date('2012-08-16'), 'temperature': 86.1 },
            { 'date': new Date('2012-08-17'), 'temperature': 86.8 },
            { 'date': new Date('2012-08-18'), 'temperature': 84.9 },
            { 'date': new Date('2012-08-19'), 'temperature': 76.8 },
            { 'date': new Date('2012-08-20'), 'temperature': 80.6 },
            { 'date': new Date('2012-08-21'), 'temperature': 80.0 },
            { 'date': new Date('2012-08-22'), 'temperature': 78.2 },
            { 'date': new Date('2012-08-23'), 'temperature': 79.1 },
            { 'date': new Date('2012-08-24'), 'temperature': 81.9 },
            { 'date': new Date('2012-08-25'), 'temperature': 84.7 },
            { 'date': new Date('2012-08-26'), 'temperature': 83.5 },
            { 'date': new Date('2012-08-27'), 'temperature': 82.1 },
            { 'date': new Date('2012-08-28'), 'temperature': 84.0 },
            { 'date': new Date('2012-08-29'), 'temperature': 85.7 },
            { 'date': new Date('2012-08-30'), 'temperature': 87.2 },
            { 'date': new Date('2012-08-31'), 'temperature': 82.9 },
            { 'date': new Date('2012-09-01'), 'temperature': 84.8 },
            { 'date': new Date('2012-09-02'), 'temperature': 83.9 },
            { 'date': new Date('2012-09-03'), 'temperature': 85.5 },
            { 'date': new Date('2012-09-04'), 'temperature': 86.4 },
            { 'date': new Date('2012-09-05'), 'temperature': 85.8 },
            { 'date': new Date('2012-09-06'), 'temperature': 85.4 },
            { 'date': new Date('2012-09-07'), 'temperature': 85.3 },
            { 'date': new Date('2012-09-08'), 'temperature': 81.9 },
            { 'date': new Date('2012-09-09'), 'temperature': 74.8 },
            { 'date': new Date('2012-09-10'), 'temperature': 71.6 },
            { 'date': new Date('2012-09-11'), 'temperature': 75.9 },
            { 'date': new Date('2012-09-12'), 'temperature': 82.1 },
            { 'date': new Date('2012-09-13'), 'temperature': 80.5 },
            { 'date': new Date('2012-09-14'), 'temperature': 70.0 },
            { 'date': new Date('2012-09-15'), 'temperature': 71.2 },
            { 'date': new Date('2012-09-16'), 'temperature': 70.3 },
            { 'date': new Date('2012-09-17'), 'temperature': 72.1 },
            { 'date': new Date('2012-09-18'), 'temperature': 73.7 },
            { 'date': new Date('2012-09-19'), 'temperature': 72.7 },
            { 'date': new Date('2012-09-20'), 'temperature': 71.7 },
            { 'date': new Date('2012-09-21'), 'temperature': 72.9 },
            { 'date': new Date('2012-09-22'), 'temperature': 73.1 },
            { 'date': new Date('2012-09-23'), 'temperature': 75.6 },
            { 'date': new Date('2012-09-24'), 'temperature': 78.3 },
            { 'date': new Date('2012-09-25'), 'temperature': 78.3 },
            { 'date': new Date('2012-09-26'), 'temperature': 79.6 },
            { 'date': new Date('2012-09-27'), 'temperature': 76.4 },
            { 'date': new Date('2012-09-28'), 'temperature': 77.2 },
            { 'date': new Date('2012-09-29'), 'temperature': 75.2 },
            { 'date': new Date('2012-09-30'), 'temperature': 71.9 }
        ]
    },
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\D3charts-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map