var init = function () {
  var data = [4, 8, 15, 16, 23, 42];

  withRange('.chart', data);
};


var withRange = function (elementClass, data) {
  var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 420]);

  d3.select(elementClass)
    .selectAll('div')
      .data(data)
    .enter().append('div')
    .style("width", function(d) { return x(d) + "px"; })
    .text(function(d) { return d; });

}


var initialTestingD3 = function () {
  var body = d3.select('body');
  var div = body.append('div');
  div.html('teste').style('color', '#');
};

var chartMeWidth = function (elementClass, data) {


  d3.select(elementClass)
    .selectAll('div')
      .data(data)
      .enter().append('div')
        .style('width', function (d) { return d * 10 + 'px';})
        .style('color', 'white')
        .style('color', function (d, i) { return i % 2 == 0 ? '#F5F5F5' : '#742480' })
        .style('background-color', function (d, i) { return i % 2 == 0 ? '#742480' : '#F5F5F5' })
        .style('border', 'solid 2px black')
        .style('text-align', 'right')
        .style('padding', '10px')
        .style('margin', '10px')
        .style('font-size', '18px')
        .text(function (d) { return d;
   });
};
