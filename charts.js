document.addEventListener('DOMContentLoaded', function () {
    Highcharts.setOptions({
        colors: ['#093FB4', '#FFD8D8', '#ED3500'],
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
});