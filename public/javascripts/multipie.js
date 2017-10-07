// Break down of crime data
var crimeData = [
    {
        "charge":"NO\/IMPROPER TAG LIGHT",
        "Female_Black":1,
        "Female_Hispanic":0,
        "Female_White":6,
        "Male_Asian":0,
        "Male_Black":9,
        "Male_Hispanic":0,
        "Male_Indian":0,
        "Male_Other\/Unk":1,
        "Male_White":7,
        "Unknown_Other\/Unk":0,
        "Female":7,
        "Male":17,
        "Unknown":0,
        "Black":10,
        "Asian":0,
        "Hispanic":0,
        "Indian":0,
        "Other\/Unk":1,
        "White":13
    },
    {
        "charge":"CRIMINAL TRESPASS 1ST",
        "Female_Black":0,
        "Female_Hispanic":0,
        "Female_White":1,
        "Male_Asian":0,
        "Male_Black":9,
        "Male_Hispanic":0,
        "Male_Indian":0,
        "Male_Other\/Unk":0,
        "Male_White":6,
        "Unknown_Other\/Unk":0,
        "Female":1,
        "Male":15,
        "Unknown":0,
        "Black":9,
        "Asian":0,
        "Hispanic":0,
        "Indian":0,
        "Other\/Unk":0,
        "White":7
    },
    {
        "charge":"DISORDERLY CONDUCT",
        "Female_Black":2,
        "Female_Hispanic":0,
        "Female_White":4,
        "Male_Asian":0,
        "Male_Black":5,
        "Male_Hispanic":0,
        "Male_Indian":0,
        "Male_Other\/Unk":0,
        "Male_White":3,
        "Unknown_Other\/Unk":0,
        "Female":6,
        "Male":8,
        "Unknown":0,
        "Black":7,
        "Asian":0,
        "Hispanic":0,
        "Indian":0,
        "Other\/Unk":0,
        "White":7
    },
    {
        "charge":"CRIMINAL TRESPASS 2ND",
        "Female_Black":0,
        "Female_Hispanic":0,
        "Female_White":0,
        "Male_Asian":0,
        "Male_Black":3,
        "Male_Hispanic":0,
        "Male_Indian":0,
        "Male_Other\/Unk":0,
        "Male_White":0,
        "Unknown_Other\/Unk":0,
        "Female":0,
        "Male":3,
        "Unknown":0,
        "Black":3,
        "Asian":0,
        "Hispanic":0,
        "Indian":0,
        "Other\/Unk":0,
        "White":0
    },
    {
        "charge":"DV 3RD RECKLESS ENDANGERMENT",
        "Female_Black":0,
        "Female_Hispanic":0,
        "Female_White":0,
        "Male_Asian":0,
        "Male_Black":2,
        "Male_Hispanic":0,
        "Male_Indian":0,
        "Male_Other\/Unk":0,
        "Male_White":3,
        "Unknown_Other\/Unk":0,
        "Female":0,
        "Male":5,
        "Unknown":0,
        "Black":2,
        "Asian":0,
        "Hispanic":0,
        "Indian":0,
        "Other\/Unk":0,
        "White":3
    },
    {
        "charge":"DV CRIMINAL MISCHIEF 2ND",
        "Female_Black":0,
        "Female_Hispanic":0,
        "Female_White":1,
        "Male_Asian":0,
        "Male_Black":4,
        "Male_Hispanic":0,
        "Male_Indian":0,
        "Male_Other\/Unk":0,
        "Male_White":5,
        "Unknown_Other\/Unk":0,
        "Female":1,
        "Male":9,
        "Unknown":0,
        "Black":4,
        "Asian":0,
        "Hispanic":0,
        "Indian":0,
        "Other\/Unk":0,
        "White":6
    },
    {
        "charge":"DRIVING WHILE LICENSE SUSPENDED",
        "Female_Black":89,
        "Female_Hispanic":4,
        "Female_White":192,
        "Male_Asian":0,
        "Male_Black":228,
        "Male_Hispanic":13,
        "Male_Indian":1,
        "Male_Other\/Unk":5,
        "Male_White":318,
        "Unknown_Other\/Unk":0,
        "Female":285,
        "Male":565,
        "Unknown":0,
        "Black":317,
        "Asian":0,
        "Hispanic":17,
        "Indian":1,
        "Other\/Unk":5,
        "White":510
    },
    {
        "charge":"RECKLESS ENDANGERMENT",
        "Female_Black":4,
        "Female_Hispanic":0,
        "Female_White":3,
        "Male_Asian":0,
        "Male_Black":10,
        "Male_Hispanic":0,
        "Male_Indian":0,
        "Male_Other\/Unk":0,
        "Male_White":19,
        "Unknown_Other\/Unk":0,
        "Female":7,
        "Male":29,
        "Unknown":0,
        "Black":14,
        "Asian":0,
        "Hispanic":0,
        "Indian":0,
        "Other\/Unk":0,
        "White":22
    },
    {
        "charge":"ATTEMPT TO ELUDE POLICE",
        "Female_Black":2,
        "Female_Hispanic":0,
        "Female_White":1,
        "Male_Asian":0,
        "Male_Black":12,
        "Male_Hispanic":1,
        "Male_Indian":0,
        "Male_Other\/Unk":0,
        "Male_White":8,
        "Unknown_Other\/Unk":0,
        "Female":3,
        "Male":21,
        "Unknown":0,
        "Black":14,
        "Asian":0,
        "Hispanic":1,
        "Indian":0,
        "Other\/Unk":0,
        "White":9
    },
    {
        "charge":"GRAD DL>1 PASSENGERS IN VEHICLE",
        "Female_Black":0,
        "Female_Hispanic":0,
        "Female_White":0,
        "Male_Asian":0,
        "Male_Black":2,
        "Male_Hispanic":0,
        "Male_Indian":0,
        "Male_Other\/Unk":0,
        "Male_White":1,
        "Unknown_Other\/Unk":0,
        "Female":0,
        "Male":3,
        "Unknown":0,
        "Black":2,
        "Asian":0,
        "Hispanic":0,
        "Indian":0,
        "Other\/Unk":0,
        "White":1
    },
    {
        "charge":"DRIVERS LICENSE NOT IN POSSESSION",
        "Female_Black":10,
        "Female_Hispanic":1,
        "Female_White":32,
        "Male_Asian":0,
        "Male_Black":24,
        "Male_Hispanic":3,
        "Male_Indian":0,
        "Male_Other\/Unk":1,
        "Male_White":29,
        "Unknown_Other\/Unk":0,
        "Female":43,
        "Male":57,
        "Unknown":0,
        "Black":34,
        "Asian":0,
        "Hispanic":4,
        "Indian":0,
        "Other\/Unk":1,
        "White":61
    },
    {
        "charge":"CRIMINAL TRESPASS 3RD",
        "Female_Black":15,
        "Female_Hispanic":0,
        "Female_White":20,
        "Male_Asian":0,
        "Male_Black":42,
        "Male_Hispanic":1,
        "Male_Indian":0,
        "Male_Other\/Unk":2,
        "Male_White":47,
        "Unknown_Other\/Unk":1,
        "Female":35,
        "Male":92,
        "Unknown":1,
        "Black":57,
        "Asian":0,
        "Hispanic":1,
        "Indian":0,
        "Other\/Unk":3,
        "White":67
    },
    {
        "charge":"DRIVING WHILE LICENSE REVOKED",
        "Female_Black":21,
        "Female_Hispanic":0,
        "Female_White":61,
        "Male_Asian":0,
        "Male_Black":136,
        "Male_Hispanic":5,
        "Male_Indian":0,
        "Male_Other\/Unk":0,
        "Male_White":196,
        "Unknown_Other\/Unk":0,
        "Female":82,
        "Male":337,
        "Unknown":0,
        "Black":157,
        "Asian":0,
        "Hispanic":5,
        "Indian":0,
        "Other\/Unk":0,
        "White":257
    },
    {
        "charge":"DV HARASSMENT 3RD",
        "Female_Black":21,
        "Female_Hispanic":1,
        "Female_White":37,
        "Male_Asian":1,
        "Male_Black":90,
        "Male_Hispanic":7,
        "Male_Indian":1,
        "Male_Other\/Unk":1,
        "Male_White":105,
        "Unknown_Other\/Unk":0,
        "Female":59,
        "Male":205,
        "Unknown":0,
        "Black":111,
        "Asian":1,
        "Hispanic":8,
        "Indian":1,
        "Other\/Unk":1,
        "White":142
    },
    {
        "charge":"HARASSING COMMUNICATIONS",
        "Female_Black":4,
        "Female_Hispanic":0,
        "Female_White":22,
        "Male_Asian":0,
        "Male_Black":56,
        "Male_Hispanic":0,
        "Male_Indian":0,
        "Male_Other\/Unk":0,
        "Male_White":0,
        "Unknown_Other\/Unk":0,
        "Female":26,
        "Male":56,
        "Unknown":0,
        "Black":60,
        "Asian":0,
        "Hispanic":0,
        "Indian":0,
        "Other\/Unk":0,
        "White":22
    },
    {
        "charge":"GIVING FALSE INFORMATION TO AN O",
        "Female_Black":10,
        "Female_Hispanic":0,
        "Female_White":17,
        "Male_Asian":0,
        "Male_Black":32,
        "Male_Hispanic":2,
        "Male_Indian":0,
        "Male_Other\/Unk":0,
        "Male_White":24,
        "Unknown_Other\/Unk":0,
        "Female":27,
        "Male":58,
        "Unknown":0,
        "Black":42,
        "Asian":0,
        "Hispanic":2,
        "Indian":0,
        "Other\/Unk":0,
        "White":41
    },
    {
        "charge":"POSSESSION OF MARIJUANA 2ND",
        "Female_Black":28,
        "Female_Hispanic":0,
        "Female_White":51,
        "Male_Asian":0,
        "Male_Black":122,
        "Male_Hispanic":8,
        "Male_Indian":1,
        "Male_Other\/Unk":2,
        "Male_White":156,
        "Unknown_Other\/Unk":0,
        "Female":79,
        "Male":289,
        "Unknown":0,
        "Black":150,
        "Asian":0,
        "Hispanic":8,
        "Indian":1,
        "Other\/Unk":2,
        "White":207
    },
    {
        "charge":"VIOLATION OF NOISE ORDINANCE",
        "Female_Black":3,
        "Female_Hispanic":0,
        "Female_White":5,
        "Male_Asian":0,
        "Male_Black":11,
        "Male_Hispanic":0,
        "Male_Indian":0,
        "Male_Other\/Unk":0,
        "Male_White":9,
        "Unknown_Other\/Unk":0,
        "Female":8,
        "Male":20,
        "Unknown":0,
        "Black":14,
        "Asian":0,
        "Hispanic":0,
        "Indian":0,
        "Other\/Unk":0,
        "White":14
    },
    {
        "charge":"TOTAL",
        "Female_Black": 19.4,
        "Female_Asian": 1.4,
        "Female_Hispanic": 3.6,
        "Female_Indian": 0,
        "Female_Other/Unk": 2.4,
        "Female_White": 75.0,
        "Male_Black": 19.4,
        "Male_Asian": 1.4,
        "Male_Hispanic": 3.6,
        "Male_Indian": 0,
        "Male_Other/Unk": 2.4,
        "Male_White": 75.0,
        "Black": 19.4,
        "Asian": 1.4,
        "Hispanic": 3.6,
        "Indian": 0,
        "Other/Unk": 2.4,
        "White": 75.0
    }
];

var width = 960,
    height = 960,
    gridHeight = 450;

var indexHeight = (height - gridHeight);

var gridColumns = 6;
var radiusFraction = 0.95;
var gridRadius = Math.floor(width / gridColumns / 2 * radiusFraction);
var buffer = 2 * gridRadius;

var color = d3.scaleOrdinal(d3.schemeCategory10);

var svg = d3.select("div#svg")
    .append("svg")
    .attr("width", width)
    .attr("height", height)

var pie = d3.pie()
    .sort(null)
    .value(function (d) {
        return d.value;
    });

function addArcs(data, node, rad, doLabel) {
    var path = d3.arc()
        .outerRadius(rad - 10)
        .innerRadius(0);

    var arc = node.selectAll(".arc")
        .data(pie(data))
        .enter().append("g")
        .attr("class", "arc");

    arc.append("path")
        .attr("d", path)
        .attr("fill", function (d) {
            return color(d.data.key);
        });


    if (doLabel) {
        var label = d3.arc()
            .outerRadius(rad * 0.6)
            .innerRadius(rad * 0.6);

        arc.append("text")
            .attr("transform", function (d) {
                return "translate(" + label.centroid(d) + ")";
            })
            .attr("dy", "0.35em")
            .text(function (d) {
                return d.data.key;
            });
    }
}

function addChartOnGrid(record, xIndex, yIndex, toolTipText) {
    var x = (width - gridColumns * buffer) / 2 + gridRadius + xIndex * buffer;
    var y = gridRadius + yIndex * buffer;

    addChart(record, x, y, gridRadius, toolTipText, false)
}

function addChart(record, x, y, radius, toolTipText, doLabel) {

    g = svg.append("g")
        .attr("class", "chart")
        .attr("transform", "translate(" + x + "," + y + ")")
        .on("mouseover", function (d1) {

            var xPosition = x;
            var yPosition = y;

            var toolTip = d3.select("#tooltip");

            toolTip
                .style("left", xPosition + "px")
                .style("top", yPosition + "px")
                .select("#charge")
                .text(toolTipText);

            // Updates existing values
            var payload = toolTip.selectAll("#payload").data(d3.entries(record));

            // Create elements as needed
            payload.enter().append("p")
                .attr("id", "payload")
                .merge(payload)
                .text(function (d) {
                    return d.key + ": " + d.value;
                });

            // remove old elements as needed
            payload.exit().remove();


            d3.select("#tooltip").classed("hidden", false);

        })
        .on("mouseout", function () {
            d3.select("#tooltip").classed("hidden", true);
        });

    addArcs(d3.entries(record), g, radius, doLabel);

}

function filterKeysByPrefix(d, prefix) {
    return Object.keys(d).filter(function(k) {
        return k.toString().startsWith(prefix)
    });
}

function parseData(groupBy) {
    svg.selectAll("g.chart").remove();

    crimeData.forEach(function (d, i) {
        var charge = d['charge'];

        var stride = gridColumns;
        var xIndex = i % stride;
        var yIndex = Math.floor(i / stride);

        var keys, prefix;

        if (groupBy === "Total") {
            prefix = "";
            keys = ['Asian', 'Black', 'Hispanic', 'Indian', 'Other/Unk', 'White'];
        } else {
            switch(groupBy) {
                case "Female":
                    prefix = "Female_";
                    break;
                case "Male":
                    prefix = "Male_";
                    break;
                case "Unknown":
                    prefix = "Unknown_";
                    break;
            }
            keys = filterKeysByPrefix(d, prefix);
        }

        var out = keys.reduce(function(acc, cur) {
            var value = d[cur];
            if (value > 0) {
                acc[cur.replace(prefix, "")] = d[cur];
            }
            return acc;
        }, {});

        if (charge === "TOTAL") {
            // Add the total demographics
            addChart(out, width / 2, gridHeight + indexHeight / 2,
                radiusFraction * (indexHeight / 2), charge, true);
        } else {
            // Add each charge to the grid
            addChartOnGrid(out, xIndex, yIndex, charge);

        }
    });
}
//container for all buttons
var allButtons= svg.append("g")
    .attr("id","allButtons")

//fontawesome button labels
// var labels= ['\uf017','\uf200','\uf183'];
var groups = ["Female", "Male", "Unknown", "Total"];

//colors for different button states
var defaultColor= "#7777BB";
var hoverColor= "#0000ff";
var pressedColor= "#000077";

//groups for each button (which will hold a rect and text)
var buttonGroups = allButtons.selectAll("g.button")
    .data(groups)
    .enter()
    .append("g")
    .attr("class","button")
    .style("cursor","pointer")
    .on("click",function(d,i) {
        updateButtonColors(d3.select(this), d3.select(this.parentNode));
        console.log(d);
        console.log(i);
        parseData(d);
    })
    .on("mouseover", function() {
        if (d3.select(this).select("rect").attr("fill") !== pressedColor) {
            d3.select(this)
                .select("rect")
                .attr("fill",hoverColor);
        }
    })
    .on("mouseout", function() {
        if (d3.select(this).select("rect").attr("fill") !== pressedColor) {
            d3.select(this)
                .select("rect")
                .attr("fill",defaultColor);
        }
    });

var bWidth = 120; //button width
var bHeight = 45; //button height
var bSpace = 10; //space between buttons
var x0 = 60; //x offset
var y0 = gridHeight + indexHeight / 2 - 2 * (bHeight + bSpace); //y offset

//adding a rect to each toggle button group
//rx and ry give the rect rounded corner
buttonGroups.append("rect")
    .attr("class","buttonRect")
    .attr("width",bWidth)
    .attr("height",bHeight)
    .attr("x", x0)
    .attr("y", function(d, i) {return y0 + (bHeight + bSpace) * i;})
    .attr("rx",5) //rx and ry give the buttons rounded corners
    .attr("ry",5)
    .attr("fill",defaultColor)

//adding text to each toggle button group, centered
//within the toggle button rect
buttonGroups.append("text")
    .attr("class","buttonText")
    .attr("x", x0 + bWidth/2)
    .attr("y", function(d, i) {
        return y0 + (bHeight + bSpace) * i +bHeight / 2;
    })
    .attr("text-anchor","middle")
    .attr("dominant-baseline","central")
    .attr("fill","white")
    .text(function(d) {return d;});

function updateButtonColors(button, parent) {
    parent.selectAll("rect")
        .attr("fill",defaultColor);

    button.select("rect")
        .attr("fill",pressedColor);
}

parseData("total");
//allButtons.select("g.button").on("click")();
