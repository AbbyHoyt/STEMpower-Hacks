document.addEventListener('DOMContentLoaded', function () {
    Highcharts.setOptions({
        colors: ['#FFD8D8', '#ED3500', '#093FB4'],
    });

    const localGovRepresentation = Highcharts.chart('localGovRepresentation', {
        chart: {
            type: 'bar',
            backgroundColor: '#FFFCFB', 
            plotBackgroundColor: '#FFFCFB' 
        },
        plotOptions: {
            bar: {
                colorByPoint: true
            }
        },
        title: {
            text: 'Female Representation in Local Governments by Region (2024)',
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Percentage',
            }
        },
        series: [{
            name: 'Percentage',
            dataSorting: {
                   enabled: true,
                   sortKey: 'y'
            },
            data: [
                   { name: 'Central and Southern Asia', y: 41 },
                   { name: 'Europe and Northern America', y: 37 }, 
                   { name: 'Oceania', y: 31 },
                   { name: 'Eastern and South-Eastern Asia', y: 31 },
                    { name: 'Latin America and the Caribbean', y: 29 },
                   { name: 'Sub-Saharan Africa', y: 26 },
                   { name: 'Western Asia and Northern Africa', y: 2 }
                  ]
        }]
    });

    const voterTurnoutMen = Highcharts.chart('voterTurnoutMen', {
        chart: {
            type: 'pie',
            backgroundColor: '#FFFCFB', 
            plotBackgroundColor: '#FFFCFB', 
            zooming: {
                type: 'xy'
            },
            panning: {
                enabled: true,
                type: 'xy'
            },
            panKey: 'shift'
        },
        title: {
            text: 'Proportion of Eligible Adult Population Who Reported Voting (Men, 2024)',
        },
        tooltip: {
            valueSuffix: '%'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: [{
                    enabled: true,
                    distance: 20
                }, {
                    enabled: true,
                    distance: -40,
                    format: '{point.percentage:.1f}%',
                    style: {
                        fontSize: '1.2em',
                        textOutline: 'none',
                        opacity: 0.7
                    },
                    filter: {
                        operator: '>',
                        property: 'percentage',
                        value: 10
                    }
                }]
            }
        },
        series: [
            {
                name: 'Percentage',
                colorByPoint: true,
                data: [
                    {
                        name: 'Voted',
                        y: 63.7
                    },
                    {
                        name: 'Did Not Vote',
                        y: 36.3
                    },
                ]
            }
        ]
    });

    const voterTurnoutWomen = Highcharts.chart('voterTurnoutWomen', {
        chart: {
            type: 'pie',
            backgroundColor: '#FFFCFB', 
            plotBackgroundColor: '#FFFCFB',
            zooming: {
                type: 'xy'
            },
            panning: {
                enabled: true,
                type: 'xy'
            },
            panKey: 'shift'
        },
        title: {
            text: 'Proportion of Eligible Adult Population Who Reported Voting (Women, 2024)',
        },
        tooltip: {
            valueSuffix: '%'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: [{
                    enabled: true,
                    distance: 20
                }, {
                    enabled: true,
                    distance: -40,
                    format: '{point.percentage:.1f}%',
                    style: {
                        fontSize: '1.2em',
                        textOutline: 'none',
                        opacity: 0.7
                    },
                    filter: {
                        operator: '>',
                        property: 'percentage',
                        value: 10
                    }
                }]
            }
        },
        series: [
            {
                name: 'Percentage',
                colorByPoint: true,
                data: [
                    {
                        name: 'Voted',
                        y: 66.9
                    },
                    {
                        name: 'Did Not Vote',
                        y: 33.1
                    },
                ]
            }
        ]
    });
});