var hours = ['4000-01-01T00:00:00',
            '4000-01-01T01:00:00',
            '4000-01-01T02:00:00',
            '4000-01-01T03:00:00',
            '4000-01-01T04:00:00',
            '4000-01-01T05:00:00',
            '4000-01-01T06:00:00',
            '4000-01-01T07:00:00',
            '4000-01-01T08:00:00',
            '4000-01-01T09:00:00',
            '4000-01-01T10:00:00',
            '4000-01-01T11:00:00',
            '4000-01-01T12:00:00',
            '4000-01-01T13:00:00',
            '4000-01-01T14:00:00',
            '4000-01-01T15:00:00',
            '4000-01-01T16:00:00',
            '4000-01-01T17:00:00',
            '4000-01-01T18:00:00',
            '4000-01-01T19:00:00',
            '4000-01-01T20:00:00',
            '4000-01-01T21:00:00',
             '4000-01-01T22:00:00',
            '4000-01-01T23:00:00'
            ];

var data = {
        labels: hours,
        datasets: [{
            label: 'mg of caffeine in body',
            data: [],
    
            "borderColor":"rgb(75, 192, 192)",
            backgroundColor:['rgb(75, 192, 192)'],
            borderColor: ['rgb(75, 174, 192)'],
            pointStyle:['round'],
            fill: false,
            borderWidth: 4,
            pointBorderWidth:7,
            spanGaps: true
        }]
    };

var options = {
        scales: {
            yAxes: [{
                ticks: {
                     min: 0,
                     max: 300,
                     beginAtZero: true
                }
            }],
             xAxes: [{
    type: 'time',
    position: 'bottom',
    time: {displayFormats: {
               hour: 'hh:mm a',
           },
      unit: "hour"      
    }
  }]
        },
    legend: {
                        onClick: (e) => e.stopPropagation()
                    }
    };