function initSvgObjects2() {
    console.log("initSvgObjects2")

    // dataFile1 = [{"x","y1","y2"},{5,90,22},{25,30,25},{45,50,80},{65,55,9},{85,25,95}]

}


function initSvgObjects() {
    console.log("initSvgObjects")

    var skills = ['', 'javascript  ', 'jquery  ', 'html/css  ', 'bootstrap  ', 'rails  ', 'ruby  ', 'node/express  ', 'sequelize  ', 'postgres  ', 'd3'];

    var experience = [22,20,22,10,14,12,10,8,12,6];

    var colors = ['#0000b4','#0094ff','#0d4bcf','#0066AE','#285964','#405F83','#0283AF','#79BCBF','#99C19E','#99C16E'];

    // x1y1x2y2: sets position of vertical grid lines
    // y2: bottom of grid
    // y1: top of grid
    // d3.range(6): number of xScale value numbers
    var grid = d3.range(6).map(function(i){
        return {'x1':0,'y1':40,'x2':0,'y2':290};
    });

    // == X scale numbers (1 * 5 = every 5th number)
    var tickVals = grid.map(function(d,i){
        if ((i > 0) && (i < 25)) {
            return i * 5;
        } else if(i === 0){
            return "0";
        }
    });

    // == set size/location of graph container
    // Range: scale locXY start/end
    // Domain: data max/min values
    var xscale = d3.scale.linear()
                    .domain([0,25])
                    .range([0,200]);

    var yscale = d3.scale.linear()
                    .domain([0,skills.length])
                    .range([50,300]);

    // == draw colored data bars
    var colorScale = d3.scale.quantize()
                    .domain([0,skills.length])
                    .range(colors);

    // == add svg object to container
    var canvas = d3.select('#skillsGraph')
                    .append('svg')
                    .attr({'width':900,'height':500});

    // == make vertical grid lines
    // translate(locX grid left, locY grid top):
    var grids = canvas.append('g')
                      .attr('id','grid')
                      .attr('transform','translate(100,10)')
                      .selectAll('line')
                      .data(grid)
                      .enter()
                      .append('line')
                      .attr({'x1':function(d,i){ return i*30; },
                             'y1':function(d){ return d.y1; },
                             'x2':function(d,i){ return i*30; },
                             'y2':function(d){ return d.y2; },
                        })
                      .style({'stroke':'#adadad','stroke-width':'1px'});

    // == x axis labels
    var	xAxis = d3.svg.axis();
        xAxis
            .orient('bottom')
            .scale(xscale)
            .tickValues(tickVals);

    // == y axis labels
    var	yAxis = d3.svg.axis();
        yAxis
            .orient('left')
            .scale(yscale)
            .tickSize(2)
            .tickFormat(function(d,i){ return skills[i]; })
            .tickValues(d3.range(17));

    // positoining of Y_xis: translate(locX of Y_xis, locY top of Y_xis )
    var y_xis = canvas.append('g')
                      .attr("transform", "translate(100,0)")
                      .attr('id','yaxis')
                      .call(yAxis);

    // positoining of X_xis: translate(locX of X_xis, locY top of X_xis )
    var x_xis = canvas.append('g')
                      .attr("transform", "translate(98,300)")
                      .attr('id','xaxis')
                      .call(xAxis);

    // == color bars (colored rect graph elements)
    // translate: translate(locX bars left, locY bars top):
    // attr('height',15): each bar 15px high
    var chart = canvas.append('g')
                        .attr("transform", "translate(100,0)")
                        .attr('id','bars')
                        .selectAll('rect')
                        .data(experience)
                        .enter()
                        .append('rect')
                        .attr('height',15)
                        .attr({'x':0,'y':function(d,i){ return yscale(i)+19; }})
                        .style('fill',function(d,i){ return colorScale(i); })
                        .attr('width',function(d){ return 0; });

    // == animate bar growth (500ms transition)
    var transit = d3.select("svg").selectAll("rect")
                        .data(experience)
                        .transition()
                        .duration(500)
                        .attr("width", function(d) {return xscale(d); });

    // var transitext = d3.select('#bars')
    //                     .selectAll('text')
    //                     .data(experience)
    //                     .enter()
    //                     .append('text')
    //                     .attr({'x':function(d) {return xscale(d)-200; },'y':function(d,i){ return yscale(i)+35; }})
    //                     .text(function(d){ return d+"$"; }).style({'fill':'#fff','font-size':'14px'});

}
