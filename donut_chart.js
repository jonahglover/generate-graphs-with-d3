var d3 = require('d3');

var barChart = module.exports = function(params) {
    debugger
    var chart = function(container) {
        var dataset = {
          percentages: [params['blue'], params['green'], params['grey']],
        };

        var width = 280,
            height = width,
            radius = Math.min(width, height) / 2,
            innerFactor = 96,
            outerFactor = 50,
            innerRadiusVal = radius - innerFactor,
            outerRadiusVal = radius - outerFactor

        var colours = ["#5e9bd4", "#62cf9d", "#dedede"];

        var pie = d3.layout.pie()
            .sort(null);

        var arc = d3.svg.arc()
            .innerRadius(innerRadiusVal)
            .outerRadius(outerRadiusVal);

        var svg = container.append("svg")
            .attr("width", 180)
            .attr("height", 180)
            .append("g")
            .attr("transform", "translate(" + outerRadiusVal + "," + outerRadiusVal + ")");

        var path = svg.selectAll("path")
            .data(pie(dataset.percentages))
          .enter().append("path")
            .attr("fill", function(d, i) {return colours[i]; })
            .attr("d", arc);
    }

    return chart;
}
