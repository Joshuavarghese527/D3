/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.5 - Activity: Adding SVGs to the screen
*/

d3.csv("data/ages.csv").then(function(data){
  data.forEach(function(d){
    d.age = +d.age;
  });

var svg= d3.select("#chart-area").append("svg")
  .attr("width", 400)
  .attr("height", 400);

var circles = svg.selectAll("circle")
    .data(data);

circles.enter()
      .append("circle")
        .attr("cx", (d, i) =>{
            console.log(d);
            return (i * 50) + 25;
        })
        .attr("cy", 200)
        .attr("r", d =>{
          return d.age * 2;
        })
        .attr("fill", function(d){
          if (d.name == "Emily") {
            return "blue";
          }
          else {
            return "red";
          }
      });
  }).catch(function(error){
    console.log(error);
  })
