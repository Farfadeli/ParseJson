var data = [{

    values: typeData[1],

    labels: typeData[0],

    hole: .4,
    type: 'pie',

    textinfo: 'none'

}];


var layout = {

    width: 2.5

};

Plotly.newPlot('myDiv', data, layout, { "displayModeBar": false , responsive: true});
