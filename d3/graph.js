const dims = {height: 300, width: 300, radius: 150};
const cent = {x: (dims.width / 2+5), y:(dims.height/ 2 + 5)};


const svg = d3.select('.canvas')
    .append('svg')
    .attr('width', dims.width + 150)
    .attr('height', dims.height + 150);


const graph = svg.append('g')
    .attr('transform', `translate(${cent.x}, ${cent.y})`);

const colour = d3.scaleOrdinal(d3['schemeSet3'])


//legend

const legendGroup =  svg.append('g')
    .attr('transform', `translate(${dims.width + 40}, 10)`)


const legend = d3.legendColor()
    .shape('circle')
    .shapePadding(10)
    .scale(colour)

const pie = d3.pie()
    .sort(null)
    .value(d => d.cost);


const arcPath = d3.arc()
    .outerRadius(dims.radius)
    .innerRadius(dims.radius/2);


// update function

const update = (data) =>{
    console.log(data);
    colour.domain(data.map(d => d.name))


    legendGroup.call(legend);
    legendGroup.selectAll('text').attr('fill', 'white');
    // join enhanced data path to path element
    const paths = graph.selectAll('path')
        .data(pie(data));

    paths.exit()
    .transition().duration(750)
    .attrTween('d', arcTweenExit)
    .remove();

    paths
    .attr('d', arcPath)
    .transition().duration(750)
    .attrTween('d', arcTweenEnter);

    paths.enter()
        .append('path')
        .attr('class', 'arc')
        .attr('d', arcPath)
        .attr('stroke', '#fff') 
        .attr('stroke-width', 3)
        .attr('fill', d => colour(d.data.name))
        .each(function(d){this._current = d})
        .transition().duration(750)
        .attrTween('d', arcTweenEnter)


    // add event listeners
    graph.selectAll('path')
        .on('mouseover', handleMouseOver)
        .on('mouseout', handleMouseOut)
        .on('click', handleClick);
}
// data
var data = [];

db.collection('expenses').onSnapshot(res =>{
    res.docChanges().forEach(change =>{
        const doc = {...change.doc.data(), id: change.doc.id}


        switch (change.type){
            case 'added':
                data.push(doc);
                break;
            case 'modified':
                const index = data.findIndex(item => item.id == doc.id);
                data[index] = doc;
                break;
            case 'removed':
                data = data.filter(item => item.id !== doc.id);
                break;
            default: 
                break

        }
    });
    update(data);
})


const arcTweenEnter = (d) => {
    var i = d3.interpolate(d.endAngle, d.startAngle);

    return function(t){
        d.startAngle = i(t);
        return arcPath(d);
    }
}

const arcTweenExit = (d) => {
    var i = d3.interpolate(d.startAngle, d.endAngle);

    return function(t){
        d.startAngle = i(t);
        return arcPath(d);
    }
}


const arcTweenUpdate = (d) =>{
    var i = d3.interpolate(this._current, d);
    this._current = d;
    return function(t){
        return arcPath(i(t));
    }
}



// Handle Mouse Hover
const handleMouseOver = (d, i , n) =>{
    d3.select(n[i]) 
        .transition('changeSliceFill').duration(300)
        .attr('fill', 'white')
}

// Handle Mouse Out
const handleMouseOut = (d, i , n) =>{
    d3.select(n[i]) 
        .transition('changeSliceFill').duration(300)
        .attr('fill', colour(d.data.name))
}

// Handle Click
const handleClick = (d) =>{
    const id = d.data.id;
    db.collection('expenses').doc(id).delete();
}