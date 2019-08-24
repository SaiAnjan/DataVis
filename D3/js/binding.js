d3.csv("data/rainfall in india 1901-2015.csv", function(data){
    data.forEach(function(d){
        d["JAN"] = parseFloat(d["JAN"]);
        d["FEB"] = parseFloat(d["FEB"]);
        d["MAR"] = parseFloat(d["MAR"]);
        d["APR"] = parseFloat(d["APR"]);
        d["MAY"] = parseFloat(d["MAY"]);
        d["JUN"] = parseFloat(d["JUN"]);
        d["JUL"] = parseFloat(d["JUL"]);
        d["AUG"] = parseFloat(d["AUG"]);
        d["SEP"] = parseFloat(d["SEP"]);
        d["OCT"] = parseFloat(d["OCT"]);
        d["NOV"] = parseFloat(d["NOV"]);
        d["DEC"] = parseFloat(d["DEC"]);
        d["ANNUAL"] = parseFloat(d["ANNUAL"]);

        d["Jan-Feb"] = parseFloat(d["Jan-Feb"]);
        d["Mar-May"] = parseFloat(d["Mar-May"]);
        d["Jun-Sep"] = parseFloat(d["Jun-Sep"]);
        d["Oct-Dec"] = parseFloat(d["Oct-Dec"]);

        d["YEAR"] = parseFloat(d["YEAR"]);
    });

    var visualization_data = [];
    var year = 2015;
    for(var i in data){
    	if(data[i]["YEAR"] == year){
    		visualization_data.push(data[i])
    	}
    }

    var month = "JAN";
    var month2 = "FEB";
    var width = 1000;
    var height = 500;
    var margin = {
    	"top": 10,
    	"left": 100,
    	"bottom": 50,
    	"right": 50
    }
    var y_scale = d3.scaleLinear()
  					.domain([
  						0,
  						d3.max(visualization_data, function(d){return d[month]})
  						])
  					.range([0, 200]);

  	console.log(y_scale(10))

    var svg = d3.select("#bar_graph").append("svg")
    		.attr("width", width + (margin.left + margin.right))
    		.attr("height", height + (margin.top + margin.bottom));
    var name = svg.append("text")
    .attr("x", 150)
    .attr("y", 70)
    .text("");
    var g = svg.append("g")
    		.attr("transform", "translate(" + margin.left + ", " + margin.top + ")")

    var data_binding = g.selectAll("rect")
			.data(visualization_data)
			.enter()

      .append("rect")
			.attr("x", function(d, i){
				return i*20;
			})
			.attr("y", function(d, i){return 200-y_scale(d[month])})
			.attr("width", 10)
			.attr('height', function(d, i){return y_scale(d[month]);})
			.attr("fill", function(d, i){
        return "rgb(" +i*10+ ",0,0)"
    })
      .on("mouseover", function(d, i){
        name.text(d["SUBDIVISION"])
      });










	g.append("g")
      	.attr("transform", "translate(0, 0)")
      	.call(d3.axisLeft(y_scale));
    

});
