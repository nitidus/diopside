/*!
 * GEM
 * @version 1.0
 * @author Ali Alizade Haqiqi <alializade@peedes.com>
 */

 (function($){
  'Use Strict';

  $('.parallax').parallax();
  $('.carousel').carousel();

  var HBSC = '',
      LBSC = '',
      PBSC = '';

  var currentHref = window.location.href,
      currentOrigin = window.location.origin;

  function _convertDigitsToEnglish(string) {
      return string.replace(/[\u0660-\u0669]/g, function (c) {
          return c.charCodeAt(0) - 0x0660;
      }).replace(/[\u06f0-\u06f9]/g, function (c) {
         return c.charCodeAt(0) - 0x06f0;
     });
   }

  function _convertDigitsToPersian(string) {
    return string.replace(/[0-9]/g, function (c) {
        return String.fromCharCode(c.charCodeAt(0) + 0x0630);
    });
  }

  function _gregorian_to_jalali(gy, gm, gd) {
   g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];

   if (gy > 1600){
    jy = 979;
    gy -= 1600;
   }else{
    jy = 0;
    gy -= 621;
   }

   gy2 = (gm > 2)? (gy + 1): gy;
   days = (365*gy) + (parseInt((gy2+3)/4)) - (parseInt((gy2 + 99) / 100)) +(parseInt((gy2 + 399) / 400)) - 80 + gd + g_d_m[gm - 1];
   jy += 33 * (parseInt(days / 12053));
   days %= 12053;
   jy += 4 * (parseInt(days / 1461));
   days %= 1461;

   if (days > 365){
    jy += parseInt((days - 1) / 365);
    days = (days - 1) % 365;
   }

   jm = (days < 186)? 1 + parseInt(days/31): 7 + parseInt((days - 186) / 30);
   jd = 1 + ((days < 186)? (days % 31): ((days - 186) % 30));

   return {
     year: jy,
     month: jm,
     day: jd
   };
 }

 function _jalali_to_gregorian(jy, jm, jd) {
   if (jy > 979){
    gy = 1600;
    jy -= 979;
   }else{
    gy = 621;
   }

   days = (365 * jy) + ((parseInt(jy / 33)) * 8) + (parseInt(((jy % 33) + 3) / 4)) + 78 + jd + ((jm < 7)? (jm - 1) * 31: ((jm - 7) * 30) + 186);
   gy += 400 * (parseInt(days / 146097));
   days %= 146097;

   if (days > 36524){
    gy += 100 *(parseInt(--days / 36524));
    days %= 36524;

    if (days >= 365) days++;
   }

   gy += 4 * (parseInt(days / 1461));
   days %= 1461;

   if (days > 365){
    gy += parseInt((days - 1) / 365);
    days = (days - 1) % 365;
   }

   gd = days + 1;
   sal_a = [0, 31, ((gy % 4 == 0 && gy % 100 != 0) || (gy % 400 == 0))? 29: 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

   for (gm = 0; gm < 13; gm++){
    v = sal_a[gm];

    if (gd <= v) break;

    gd-=v;
   }

   return (new Date(gy + '/' + gm + '/' + gd));
 }

 function _getMonthName(monthNum){
    var months = [
          "فروردین",
          "اردیبهشت",
          "خرداد",
          "تیر",
          "مرداد",
          "شهریور",
          "مهر",
          "آبان",
          "آذر",
          "دی",
          "بهمن",
          "اسفند"
        ];

      return months[monthNum - 1];
  }

  if (currentOrigin + '/profile/wallet/new' == currentHref){
    var targetCredit = document.getElementById('target-credit');

    noUiSlider.create(targetCredit, {
      start: 10000,
      direction: 'rtl',
      step: 10000,
      range: {
        'min': 10000,
        'max': 1000000
      },
      tooltips: wNumb({
        decimals: 0,
        postfix: ' تومان',
        edit: function(value){
          return '<span data-value="' + value.replace(/\ تومان/g, '') + '">' + _convertDigitsToPersian(value) + '</span>';
        }
      }),
      connect: [true, false],
      pips: {
        mode: 'values',
        stepped: true,
        values: [10000, 250000, 500000, 750000, 1000000],
        density: 6,
        format: wNumb({
          decimals: 0,
          postfix: ' تومان',
          edit: function(value){
            return _convertDigitsToPersian(value.toString());
          }
        })
      }
    });

    targetCredit.noUiSlider.on('change', function(){
      $('#credit-details .SPD-title span').html($('#target-credit .noUi-tooltip span').html());
    });
  }else if (currentOrigin + '/profile/accounts/new' == currentHref || currentOrigin + '/profile/accounts/new/' == currentHref){
    var linkIsListeningOn = {
      status: false,
      index: -1,
      type: null
    };
  }else if (currentHref.match(new RegExp(currentOrigin + '/profile/accounts/.{24}$', 'g')) != null) {
    var navigationOption = {
      buttonOptions: {
        theme: {
          fill: 'transparent',
          states: {
            hover: {
              fill: 'transparent'
            },
            select: {
              fill: 'transparent'
            }
          }
        }
      },
      menuStyle: {
        "margin": "10px -5px 0 0",
        "padding": "1.2rem 1.5rem 1rem 1.5rem",
        "box-shadow": "none",
        "border-radius": "6px",
        "border": "none",
        "background-color": "rgb(247, 247, 247)",
      },
      menuItemStyle: {
        "border-radius": "6px",
        "padding": "1rem",
        "margin-bottom": "5px",
        "font-size": "13px"
      },
      menuItemHoverStyle: {
        "background-color": "#5b0bbb"
      }
    },
    exportingOption = {
      buttons: {
        contextButton: {
          symbol: 'circle',
          symbolStrokeWidth: 4,
          symbolFill: 'transparent',
          symbolStroke: '#5b0bbb',
          width: 20,
          height: 20,
          symbolSize: 20,
          x: -33,
          y: 23
        }
      }
    },
    creditsOption = {
        enabled: false
    },
    tooltipOptions = {
      borderWidth: 0,
      shadow: false,
      padding: 18,
      pointFormatter: function(){
        var value = (typeof this.y != 'undefined')? this.y : this.value,
            color = (typeof this.options.color != 'undefined')? this.options.color : this.series.color,
            tooltipContent = '';

        tooltipContent += '<span>';

        if (typeof this.series.chart.userOptions.chart.type != 'undefined' && this.series.chart.userOptions.chart.type == 'treemap'){
          tooltipContent += '<span>' + this.options.name.replace(/<br>/g, ' ') + ': </span><br>';
        }else if (typeof this.series.userOptions.type != 'undefined' && this.series.userOptions.type == 'pie') {
          tooltipContent += '<span>' + this.address + ': </span><br>';
        }

        tooltipContent += '<span style="font-size: 1rem; color: ' + color + '">●</span> ';

        if (value > 1000){
          tooltipContent += ( ((value / 1000).toFixed(1) % 1).toFixed(1) * 10 > 0 )? _convertDigitsToPersian((value / 1000).toFixed(1).toString()): _convertDigitsToPersian((value / 1000).toFixed(0).toString()) + ' هزار</span>';
        }else{
          tooltipContent += _convertDigitsToPersian(value.toString()) + '</span>';
        }

        return tooltipContent;
      }
    },
    TotalLocationsTitle = function(){
      var total = 0

      for (var i = 0, len = this.series[0].yData.length; i < len; i++) {
          total += this.series[0].yData[i];
      }

      if (this.totalTitle) {
          this.totalTitle.destroy();
      }

      var r = this.renderer,
          x = this.series[0].center[0] + this.plotLeft,
          y = this.series[0].center[1] + this.plotTop;

      this.totalTitle = r.text('<tspan style="font-size: 2.5rem; text-anchor: middle;">' +
      _convertDigitsToPersian(total.toString()) +
      '</tspan><br>'/* +
      '<tspan style="text-anchor: middle; dominant-baseline: hanging;"> موقعیت جغرافیایی</tspan>'*/, 0, 0)
      .hide()
      .add();

      var bbox = this.totalTitle.getBBox();

      this.totalTitle.attr({
          x: x ,
          y: y
      }).show();
    };

    var hashedToken = JSON.parse(Cookies.get('hashed-token'));

    $.ajax({
      url: currentOrigin + '/analysis/' + hashedToken.user + '/' + hashedToken.service,
      type: "get",
      success: function(analysis){
        if (analysis.meta.code == 200){
          var analysisData = analysis.data,
              colors = ["#6E66E6", "#E84851", "#F7BC5C", "#8DCA5F", "#A3B2B8", "#41A0F1"],
              seriesData = [];

          if (analysisData.length > 0){
            for (var i = analysisData.length - 1; i >= 0; i--) {
              if (analysisData[i].service.micro_service.type == 'periods'){
                var microServiceContentText = analysisData[i].service.micro_service.content.text.first +
                                              ',<br>' +
                                              analysisData[i].service.micro_service.content.text.second;

                if (seriesData.length > 0){
                  for (var j = 0; j < seriesData.length; j++) {
                    if (seriesData[j].name.toLowerCase() == microServiceContentText.toLowerCase()){
                      seriesData[j].value++;
                    }else{
                      if (seriesData.length <= 6){
                        seriesData.push({
                          name: microServiceContentText,
                          value: 1,
                          color: colors[((seriesData.length > 0)? (seriesData.length - 1) : 0)]
                        });
                      }
                    }
                  }
                }else{
                  seriesData.push({
                    name: microServiceContentText,
                    value: 1,
                    color: colors[((seriesData.length > 0)? (seriesData.length - 1) : 0)]
                  });
                }
              }
            }

            Highcharts.chart('periods-in-detail', {
                chart: {
                  type: 'treemap',
                  borderRadius: 4,
                  spacingLeft: 15,
                  spacingRight: 15
                },
                title: {
                  text: 'جزئیات زمانبندی‌ها',
                  align: 'right',
                  margin: 60,
                  y: 40,
                  x: 25
                },
                plotOptions: {
                  series: {
                    borderWidth: 3,
                    borderColor: '#FFFFFF',
                    dataLabels: {
                      style: {
                        "textOutline": "none"
                      }
                    },
                    states: {
                      hover: {
                        enabled: false
                      }
                    }
                  }
                },
                tooltip: tooltipOptions,
                series: [{
                  layoutAlgorithm: 'squarified',
                  data: seriesData
                }],
                credits: creditsOption,
                navigation: navigationOption,
                exporting: exportingOption
            });
          }
        }else{
          Materialize.toast(analysis.meta.error_message, 4000);
        }
      }
    })

    $.ajax({
      url: currentOrigin + '/analysis/' + hashedToken.user + '/' + hashedToken.service,
      type: "get",
      success: function(analysis){
        if (analysis.meta.code == 200){
          var analysisData = analysis.data,
              colors = ["#6E66E6", "#E84851", "#F7BC5C", "#8DCA5F", "#A3B2B8", "#41A0F1"],
              seriesData = [];

          if (analysisData.length > 0){
            for (var i = analysisData.length - 1; i >= 0; i--) {
              if (analysisData[i].service.micro_service.type == 'locations'){
                var microServiceContentText = analysisData[i].service.micro_service.content.text;

                if (seriesData.length > 0){
                  for (var j = 0; j < seriesData.length; j++) {
                    if (seriesData[j].address.toLowerCase() == microServiceContentText.toLowerCase()){
                      seriesData[j].y++;
                    }else{
                      if (seriesData.length <= 6){
                        seriesData.push({
                          name: (microServiceContentText.substr(0, 15) + '...'),
                          address: microServiceContentText,
                          y: 1,
                          color: colors[((seriesData.length > 0)? (seriesData.length - 1) : 0)]
                        });
                      }
                    }
                  }
                }else{
                  seriesData.push({
                    name: (microServiceContentText.substr(0, 15) + '...'),
                    address: microServiceContentText,
                    y: 1,
                    color: colors[((seriesData.length > 0)? (seriesData.length - 1) : 0)]
                  });
                }
              }
            }

            Highcharts.chart('locations-in-detail', {
                chart: {
                  plotBackgroundColor: null,
                  plotBorderWidth: 0,
                  plotShadow: false,
                  borderRadius: 4,
                  spacingLeft: 30,
                  events: {
                    load: TotalLocationsTitle,
                    redraw: TotalLocationsTitle
                  }
                },
                title: {
                  text: 'جزئیات موقعیت‌های جغرافیایی',
                  align: 'right',
                  margin: 60,
                  y: 40,
                  x: 10
                },
                tooltip: tooltipOptions,
                credits: creditsOption,
                plotOptions: {
                  pie: {
                    dataLabels: {
                      enabled: false
                    },
                    startAngle: 0,
                    endAngle: 360,
                    center: ['50%', '50%'],
                    innerSize: '93%',
                    borderWidth: 3,
                    showInLegend: true
                  }
                },
                legend: {
                    layout: 'vertical',
                    verticalAlign: 'middle',
                    align: 'left',
                    itemMarginTop: 20
                },
                series: [{
                  type: 'pie',
                  name: 'Location',
                  data: seriesData
                }],
                navigation: navigationOption,
                exporting: exportingOption
            });
          }
        }else{
          Materialize.toast(analysis.meta.error_message, 4000);
        }
      }
    })

    $.ajax({
      url: currentOrigin + '/analysis/' + hashedToken.user + '/' + hashedToken.service,
      type: "get",
      success: function(analysis){
        if (analysis.meta.code == 200){
          var analysisData = analysis.data,
              colors = ["#41A0F1", "#F7BC5C", "#E84851", "#8DCA5F", "#6E66E6"],
              seriesData = [],
              xAxisCategories = [];

          if (analysisData.length > 0){
            for (var i = analysisData.length - 1; i >= 0; i--) {
              if (analysisData[i].service.micro_service.type == 'hashtags'){
                var microServiceContentText = '';

                switch (analysisData[i].service.micro_service.content.type) {
                  case 'hashtag':
                    microServiceContentText = '#' + analysisData[i].service.micro_service.content.text;
                    break;
                  case 'mention':
                    microServiceContentText = analysisData[i].service.micro_service.content.text;
                    break;
                }

                var hashtagIndex = xAxisCategories.indexOf(microServiceContentText);

                if (hashtagIndex != -1){
                  seriesData[hashtagIndex].y++;
                }else{
                  if (xAxisCategories.length <= 5 && seriesData.length <= 5){
                    xAxisCategories.push(microServiceContentText);
                    seriesData.push({
                      y: 1,
                      color: colors[xAxisCategories.length - 1]
                    });
                  }
                }
              }
            }

            Highcharts.chart('hashtags-in-detail', {
                chart: {
                  type: 'bar',
                  spacingLeft: 40,
                  borderRadius: 4
                },
                title: {
                  text: 'جزئیات هشتگ‌ها',
                  align: 'right',
                  margin: 60,
                  y: 40,
                  x: 0
                },
                tooltip: {
                  enabled: false
                },
                xAxis: {
                  lineWidth: 0,
                  tickWidth: 0,
                  categories: xAxisCategories,
                  maxPadding: 0.3,
                  labels: {
                    style: {
                      "font-size": "1rem"
                    }
                  }
                },
                yAxis: {
                  min: 0,
                  title: {
                      text: ''
                  },
                  visible: false
                },
                legend: {
                  enabled: false
                },
                credits: creditsOption,
                plotOptions: {
                  series: {
                    colorByPoint: true,
                    pointWidth: 10,
                    borderRadius: 6,
                    dataLabels: {
                      enabled: true,
                      formatter: function(){
                        var value = this.point.y;

                        if (value > 1000){
                          return ( ((value / 1000).toFixed(1) % 1).toFixed(1) * 10 > 0 )? _convertDigitsToPersian((value / 1000).toFixed(1).toString()) + ' هزار': _convertDigitsToPersian((value / 1000).toFixed(0).toString()) + ' هزار';
                        }else{
                          return value;
                        }
                      }
                    }
                  }
                },
                series: [{
                  data: seriesData
                }],
                navigation: navigationOption,
                exporting: exportingOption
            });
          }
        }else{
          Materialize.toast(analysis.meta.error_message, 4000);
        }
      }
    })

    $.ajax({
      url: currentOrigin + '/analysis/' + hashedToken.user + '/' + hashedToken.service,
      type: "get",
      success: function(analysis){
        if (analysis.meta.code == 200){
          var analysisData = analysis.data,
              seriesData = [
                {
                  name: 'هشتگ‌ها',
                  data: [0, 0, 0, 0, 0, 0, 0],
                  color: '#E84851'
                },
                {
                  name: 'موقعیت‌های جغرافیایی',
                  data: [0, 0, 0, 0, 0, 0, 0],
                  color: '#41A0F1'
                },
                {
                  name: 'زمان‌بندی‌ها',
                  data: [0, 0, 0, 0, 0, 0, 0],
                  color: '#F7BC5C'
                }
              ];

          if (analysisData.length > 0){
            for (var i = 0; i < analysisData.length; i++) {
              var created_at = new Date(analysisData[i].created_at),
                  seriesOptionIndex = 0;

              switch (analysisData[i].service.micro_service.type) {
                case 'hashtags':
                  seriesOptionIndex = 0
                  break;
                case 'locations':
                  seriesOptionIndex = 1
                  break;
                case 'periods':
                  seriesOptionIndex = 2
                  break;
              }

              seriesData[seriesOptionIndex].data[created_at.getDay()]++;
            }

            Highcharts.chart('weekly-services', {
                title: {
                  text: 'سرویس‌ها در طول هفته',
                  align: 'right',
                  margin: 140,
                  y: 40,
                  x: 30
                },
                chart: {
                  type: 'areaspline',
                  borderRadius: 4
                },
                tooltip: tooltipOptions,
                xAxis: {
                  lineWidth: 0,
                  tickWidth: 0,
                  labels: {
                    y: 70
                  },
                  categories: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
                },
                yAxis: {
                    title: {
                        text: ''
                    },
                    labels: {
                        enabled: false
                    },
                    gridLineWidth: 2,
                    gridLineColor: '#F3F6F7',
                    gridLineDashStyle: 'dash'
                },
                legend: {
                  align: 'right',
                  verticalAlign: 'top',
                  y: 20,
                  x: -70
                },
                credits: creditsOption,
                plotOptions: {
                    series: {
                        fillOpacity: 0,
                        lineWidth: 3,
                        marker: {
                            symbol: 'circle',
                            radius: 5
                        }
                    }
                },
                series: seriesData,
                navigation: navigationOption,
                exporting: exportingOption,
                responsive: {
                    rules: [{
                        condition: {
                            maxWidth: 500
                        },
                        chartOptions: {
                          legend: {
                            align: 'center',
                            verticalAlign: 'top',
                            y: 60,
                            x: 0
                          }
                        }
                    }]
                }
            });
          }
        }else{
          Materialize.toast(analysis.meta.error_message, 4000);
        }
      }
    })
  }else if (currentOrigin + '/profile' == currentHref) {
    var navigationOption = {
      buttonOptions: {
        theme: {
          fill: 'transparent',
          states: {
            hover: {
              fill: 'transparent'
            },
            select: {
              fill: 'transparent'
            }
          }
        }
      },
      menuStyle: {
        "margin": "10px -5px 0 0",
        "padding": "1.2rem 1.5rem 1rem 1.5rem",
        "box-shadow": "none",
        "border-radius": "6px",
        "border": "none",
        "background-color": "rgb(247, 247, 247)"
      },
      menuItemStyle: {
        "border-radius": "6px",
        "padding": "1rem",
        "margin-bottom": "5px",
        "font-size": "13px"
      },
      menuItemHoverStyle: {
        "background-color": "#5b0bbb"
      }
    },
    exportingOption = {
      buttons: {
        contextButton: {
          symbol: 'circle',
          symbolStrokeWidth: 4,
          symbolFill: 'transparent',
          symbolStroke: '#ffffff',
          width: 20,
          height: 20,
          symbolSize: 20,
          x: -33,
          y: 23
        }
      }
    },
    creditsOption = {
        enabled: false
    },
    tooltipOptions = {
      borderWidth: 0,
      shadow: false,
      padding: 18,
      formatter: function () {
          return '<div style="direction: ltr !important">' +
          '<span style="font-size: 10px; font-weight: bold;">' + this.point.name + '</span><br/>' +
          '<span style="color:' + this.point.color + '">●</span> ' + _convertDigitsToPersian(this.point.y.toString()) + ' تومان' +
          '</div>';
      }
    },
    TotalPricesTitle = function(){
      var total = 0

      for (var i = 0, len = this.series[0].yData.length; i < len; i++) {
          total += this.series[0].yData[i];
      }

      if (this.totalTitle) {
          this.totalTitle.destroy();
      }

      var r = this.renderer,
          x = this.series[0].center[0] + this.plotLeft,
          y = this.series[0].center[1] + this.plotTop;

      this.totalTitle = r.text('<tspan style="color: #FFFFFF; font-size: 2.5rem;">' +
        _convertDigitsToPersian(total.toString()) +
      '</tspan> ' +
      '<span style="color: #FFFFFF; font-size: 1rem; font-weight: 600;">تومان</span><br/>'/* +
      '<tspan style="color: #FFFFFF; ">همه</tspan>'*/, 0, 0)
      .css({
        'textAnchor': 'middle',
        'dominantBaseline': 'hanging'
      })
      .hide()
      .add();

      var bbox = this.totalTitle.getBBox();

      this.totalTitle.attr({
          x: x ,
          y: y
      }).show();
    };

    var hashedToken = Cookies.get('hashed-token');

    $.ajax({
      url: currentOrigin + "/services/" + hashedToken,
      type: "get",
      success: function(totalUserServices){
        if (totalUserServices.meta.code == 200){
          totalUserServices = totalUserServices.data;

          if (totalUserServices.length > 0){
            $.ajax({
              url: currentOrigin + "/credits/" + hashedToken,
              type: "get",
              success: function(credits){
                if (credits.meta.code == 200){
                  var creditsData = credits.data,
                      lastCreditsContent = '';

                  if (creditsData.length > 0){
                    if (creditsData.length > 3){
                      for (var i = creditsData.length - 1; i >= creditsData.length - 3; i--) {
                        var trending = {
                          mode: '',
                          color: ''
                        };

                        if (typeof creditsData[i].balance.previous != 'undefined'){
                          if (creditsData[i].balance.new >= creditsData[i].balance.previous){
                            trending.mode = 'trending_up';
                            trending.color = 'green';
                          }else{
                            trending.mode = 'trending_down';
                            trending.color = 'red';
                          }
                        }else{
                          trending.mode = 'trending_up';
                          trending.color = 'green';
                        }

                        lastCreditsContent += '<div class="chip ' + trending.color + '">' +
                          '<i class="material-icons circle ' + trending.color + '">' + trending.mode + '</i>' +
                          '<span>' + creditsData[i].payment.content.price + ' <sup>تومان</sup></span>' +
                        '</div>';
                      }
                    }else{
                      for (var i = 0; i < creditsData.length; i++) {
                        var trending = {
                          mode: '',
                          color: ''
                        };

                        if (typeof creditsData[i].balance.previous != 'undefined'){
                          if (creditsData[i].balance.new >= creditsData[i].balance.previous){
                            trending.mode = 'trending_up';
                            trending.color = 'green';
                          }else{
                            trending.mode = 'trending_down';
                            trending.color = 'red';
                          }
                        }else{
                          trending.mode = 'trending_up';
                          trending.color = 'green';
                        }

                        lastCreditsContent += '<div class="chip ' + trending.color + '">' +
                          '<i class="material-icons circle ' + trending.color + '">' + trending.mode + '</i>' +
                          '<span>' + creditsData[i].payment.content.price + ' <sup>تومان</sup></span>' +
                        '</div>';
                      }
                    }

                    $('#profile-dashboard-container #user-balance-detail .recommend-detail .last-credits').html(lastCreditsContent);
                  }
                }else{
                  Materialize.toast(credits.meta.error_message, 4000);
                }
              }
            })

            $.ajax({
              url: currentOrigin + "/services/grouped/" + hashedToken,
              type: "get",
              success: function(services){
                if (services.meta.code == 200){
                  var inprogressServices = services.data.inprogress,
                      colors = ["#41A0F1", "#F7BC5C", "#E84851", "#8DCA5F"],
                      seriesData = [],
                      xAxisCategories = [];

                  if (inprogressServices.length > 0){
                    if (inprogressServices.length > 4){
                      for (var i = inprogressServices.length - 1; i >= inprogressServices.length - 4; i--) {
                        var created_at = new Date(inprogressServices[i].created_at).getTime(),
                            today = new Date().getTime(),
                            daysRemain = Math.floor((today - created_at) / (1000 * 60 * 60 * 24));

                        xAxisCategories.push(inprogressServices[i].owner.username.toUpperCase() + '<br>(' + inprogressServices[i].type + ')');

                        seriesData.push({
                          y: daysRemain,
                          color: colors[i]
                        });
                      }
                    }else{
                      for (var i = 0; i < inprogressServices.length; i++) {
                        var created_at = new Date(inprogressServices[i].created_at).getTime(),
                            today = new Date().getTime(),
                            daysRemain = Math.floor((today - created_at) / (1000 * 60 * 60 * 24));

                        xAxisCategories.push(inprogressServices[i].owner.username + '<br>(' + inprogressServices[i].type.persian + ')');

                        seriesData.push({
                          y: daysRemain,
                          color: colors[i]
                        });
                      }
                    }

                    Highcharts.chart('service-time-in-detail', {
                        chart: {
                          type: 'bar',
                          spacingLeft: 40,
                          borderRadius: 4,
                          backgroundColor: '#5b0bbb'
                        },
                        title: {
                          text: 'زمان سرویس‌ها بطور خلاصه',
                          align: 'right',
                          style: {
                            'color': '#ffffff'
                          },
                          margin: 60,
                          y: 40,
                          x: -320
                        },
                        tooltip: {
                          enabled: false
                        },
                        xAxis: {
                          lineWidth: 0,
                          tickWidth: 0,
                          categories: xAxisCategories,
                          labels: {
                            style: {
                              "font-size": "1rem",
                              "color": "#ffffff",
                              "direction": "ltr"
                            }
                          }
                        },
                        yAxis: {
                          min: 0,
                          title: {
                              text: ''
                          },
                          visible: false
                        },
                        legend: {
                          enabled: false
                        },
                        credits: creditsOption,
                        plotOptions: {
                          series: {
                            colorByPoint: true,
                            pointWidth: 10,
                            borderWidth: 0,
                            borderRadius: 6,
                            dataLabels: {
                              enabled: true,
                              style: {
                                color: "#ffffff",
                                "textOutline": "none"
                              },
                              formatter: function(){
                                var value = this.point.y;

                                if (value > 1){
                                  return _convertDigitsToPersian(value.toString()) + ' روز';
                                }else{
                                  return _convertDigitsToPersian(value.toString()) + ' روز';
                                }
                              }
                            }
                          }
                        },
                        series: [{
                          data: seriesData
                        }],
                        navigation: navigationOption,
                        exporting: exportingOption
                    });
                  }
                }else{
                  Materialize.toast(services.meta.error_message, 4000);
                }
              }
            })

            $.ajax({
              url: currentOrigin + "/services/" + hashedToken,
              type: "get",
              success: function(services){
                if (services.meta.code == 200){
                  var servicesData = services.data,
                      seriesData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

                  for (var i = 0; i < servicesData.length; i++) {
                    var created_at = new Date(servicesData[i].created_at),
                        jalali_created_at = _gregorian_to_jalali(created_at.getFullYear(), created_at.getMonth(), created_at.getDay());

                    seriesData[jalali_created_at.month]++;
                  }

                  Highcharts.chart('services-count-in-detail', {
                      title: {
                        text: 'تعداد سرویس‌ها بطور خلاصه',
                        align: 'right',
                        margin: 140,
                        y: 40,
                        x: -320,
                        style: {
                          'color': '#ffffff'
                        }
                      },
                      chart: {
                        type: 'areaspline',
                        borderRadius: 4,
                        backgroundColor: '#5b0bbb'
                      },
                      tooltip: {
                        borderWidth: 0,
                        shadow: false,
                        padding: 18,
                        formatter: function () {
                            return '<div style="direction: ltr !important">' +
                            '<span style="font-size: 10px; font-weight: bold;">' + this.key + '</span><br/>' +
                            '<span style="color:' + this.point.color + '">●</span> ' + _convertDigitsToPersian(this.point.y.toString()) +
                            '</div>';
                        }
                      },
                      xAxis: {
                        lineWidth: 0,
                        tickWidth: 0,
                        labels: {
                          y: 70,
                          style: {
                            'color': '#ffffff'
                          }
                        },
                        categories: ['فرو', 'ارد', 'خرد', 'تیر', 'مرد', 'شهر', 'مهر', 'آبا', 'آذر', 'دی', 'بهم', 'اسف']
                      },
                      yAxis: {
                          title: {
                              text: ''
                          },
                          labels: {
                              enabled: false
                          },
                          gridLineWidth: 2,
                          gridLineColor: '#7F7E80',
                          gridLineDashStyle: 'dash'
                      },
                      legend: {
                        rtl: true,
                        align: 'right',
                        verticalAlign: 'top',
                        itemStyle: {
                          'color': '#ffffff'
                        },
                        y: 70,
                        x: -135,
                        symbolWidth: 80
                      },
                      credits: creditsOption,
                      plotOptions: {
                          series: {
                              fillOpacity: 0,
                              lineWidth: 3,
                              marker: {
                                  symbol: 'circle',
                                  radius: 5
                              }
                          }
                      },
                      series: [{
                          name: 'تعداد',
                          data: seriesData,
                          color: '#E84851'
                      }],
                      navigation: navigationOption,
                      exporting: exportingOption,
                      responsive: {
                          rules: [{
                              condition: {
                                  maxWidth: 500
                              },
                              chartOptions: {
                                legend: {
                                  align: 'center',
                                  verticalAlign: 'top',
                                  y: 60,
                                  x: 0
                                }
                              }
                          }]
                      }
                  });
                }else{
                  Materialize.toast(services.meta.error_message, 4000);
                }
              }
            })

            $.ajax({
              url: currentOrigin + "/services/" + hashedToken,
              type: "get",
              success: function(services){
                if (services.meta.code == 200){
                  var colors = ['#6E66E6', '#E84851', '#F7BC5C', '#8DCA5F' ,'#A3B2B8' ,'#41A0F1'],
                      servicesData = services.data,
                      seriesData = [];

                  if (servicesData.length > 0){
                    if (servicesData.length > 6){
                      for (var i = servicesData.length - 1; i >= servicesData.length - 6; i--) {
                        seriesData.push({
                          name: servicesData[i].owner.username,
                          y: servicesData[i].price.total,
                          color: colors[i]
                        });
                      }
                    }else{
                      for (var i = 0; i < servicesData.length; i++) {
                        seriesData.push({
                          name: servicesData[i].owner.username,
                          y: servicesData[i].price.total,
                          color: colors[i]
                        });
                      }
                    }

                    Highcharts.chart('services-price-in-detail', {
                        chart: {
                          plotBackgroundColor: null,
                          plotBorderWidth: 0,
                          plotShadow: false,
                          borderRadius: 4,
                          spacingLeft: 30,
                          events: {
                            load: TotalPricesTitle,
                            redraw: TotalPricesTitle
                          },
                          backgroundColor: '#5b0bbb'
                        },
                        title: {
                          text: 'قیمت سرویس‌ها بطور خلاصه',
                          align: 'right',
                          margin: 60,
                          y: 40,
                          x: -320,
                          style: {
                            'color': '#ffffff'
                          }
                        },
                        tooltip: tooltipOptions,
                        credits: creditsOption,
                        plotOptions: {
                          pie: {
                            dataLabels: {
                              enabled: false
                            },
                            startAngle: 0,
                            endAngle: 360,
                            center: ['50%', '50%'],
                            innerSize: '93%',
                            borderWidth: 3,
                            borderColor: '#5B0BBB',
                            showInLegend: true
                          }
                        },
                        legend: {
                            rtl: true,
                            layout: 'vertical',
                            verticalAlign: 'middle',
                            align: 'right',
                            itemMarginTop: 20,
                            itemStyle: {
                              'color': '#DFDFDF'
                            },
                            itemHoverStyle: {
                              'color': '#FFFFFF'
                            },
                            symbolWidth: 120,
                            x: -180
                        },
                        series: [{
                          type: 'pie',
                          name: 'Price',
                          data: seriesData
                        }],
                        navigation: navigationOption,
                        exporting: exportingOption
                    });
                  }
                }else{
                  Materialize.toast(services.meta.error_message, 4000);
                }
              }
            })
          }
        }
      }
    });
  }else if (currentHref.match(new RegExp(currentOrigin + '/profile/accounts/.{24}/scheduled/media$', 'g')) != null) {
    var hashService = $('#service-scheduled-media-calendar #scheduled-media-calendar').data('hash');

    $.getJSON("/schedules/" + hashService, function(res){
      if (res.meta.code == 200){
        var events = [];

        $.each(res.data, function(i, schedule){
            events.push({
              id: schedule._id,
              title: schedule.media.caption,
              start: schedule.scheduled_at,
              photo: schedule.media.content
            })
        });

        var todayDate = moment().startOf('day'),
            YM = todayDate.format('YYYY-MM'),
            YESTERDAY = todayDate.clone().subtract(1, 'day').format('YYYY-MM-DD'),
            TODAY = todayDate.format('YYYY-MM-DD'),
            TOMORROW = todayDate.clone().add(1, 'day').format('YYYY-MM-DD');

        var scheduler = {
          element: '#scheduled-media-calendar',
          header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay,listWeek'
          },
          events: events,
          editable: true,
          navLinks: true,
          eventDrop: function(event, delta, revertFunc) {
            var today = (new Date()).getTime(),
                _start = (new Date(event.start.format())).getTime(),
                eventDiffer = _start - today,
                eventDifferOnDay = Math.floor(eventDiffer / (1000 * 60 * 60 * 24)),
                element = $(this);

            $('#service-scheduled-media-calendar #change-event-modal').find('.modal-content h4').html(event.title);

            $('#service-scheduled-media-calendar #change-event-modal').find('.modal-content p').html(
              'The event was dropped on ' + ((eventDifferOnDay != 0)? ((eventDifferOnDay > 0)? eventDifferOnDay + ' days later': Math.abs(eventDifferOnDay) + ' days ago') : 'today') + '.'
            );

            $('#service-scheduled-media-calendar #change-event-modal').openModal();

            $('#service-scheduled-media-calendar #change-event-modal .change-agree').on('click', function(){
              var todayObj = new Date(),
                  schedule = {
                    _id: element.data('hash'),
                    scheduled_at: (new Date(event.start)).toISOString(),
                    modified_at: todayObj.toISOString()
                  };

              $.ajax({
                url: "/schedule/" + element.data('hash') + "/set",
                type: "put",
                data: JSON.stringify(schedule),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function(res){
                  if (res.meta.code == 200){
                    $('#service-scheduled-media-calendar #scheduled-media-calendar').fullCalendar('updateEvent', event);
                  }else{
                    revertFunc();

                    Materialize.toast(res.meta.error_message, 4000);
                  }
                }
              })
            })

            $('#service-scheduled-media-calendar #change-event-modal .change-disagree').on('click', function(){
              revertFunc();
            })

            $(document).on('click', function(e){
              if ($(e.target).hasClass('lean-overlay')){
                revertFunc();
              }
            })

            $(document).on('keyup', function(e){
              if (e.keyCode == 27){
                revertFunc();
              }
            })
          }
        };

        createScheduler(scheduler);
      }else{
        Materialize.toast(res.meta.error_message, 4000);
      }
    });
  }else if (currentHref.match(new RegExp(currentOrigin + '/profile/accounts/.{24}/scheduled/media/upload$', 'g')) != null) {
    var activeSequence = $('.media-upload-tabs li a.active').html();

    $('.media-upload-page-handler .breadcrumb').on('click', function(){
      if (!$(this).hasClass('activated current')){
        var selectedIndex = $(this).index();

        $('.media-upload-page-handler .breadcrumb.activated.current').removeClass('current');
        $('.media-upload-page-handler .breadcrumb').eq(selectedIndex).addClass('current');

        $('ul.tabs').tabs('select_tab', $(this).attr('value'));
      }
    });

    if (activeSequence === 'MUZ'){
      var mediaUploadZone = $('#media-upload-zone #scheduled-media-upload-zone'),
          mediaUploadZoneHTMLContent = '';

      mediaUploadZoneHTMLContent += '<div class="upload-pulse-container">' +
        '<div class="btn-floating pulse upload-pulse">' +
          '<i class="material-icons">file_upload</i>' +
        '</div>' +
      '</div>' +
      '<label for="upload-trigger" class="btn-floating purple-heart-dark waves-effect browse-media-btn">بارگذاری مدیای تصویری</label>' +
      '<input id="upload-trigger" type="file"/>';

      mediaUploadZone.html(mediaUploadZoneHTMLContent);
      mediaUploadZone.addClass('z-depth-1');

      mediaUploadZone.on('dragenter',function(e){
        e.stopPropagation();
        e.preventDefault();

        mediaUploadZone.removeClass('z-depth-1');
        mediaUploadZone.addClass('z-depth-2');

        mediaUploadZone.find('.upload-pulse-container .upload-pulse').removeClass('pulse');
      });

      mediaUploadZone.on('dragleave',function(e){
        e.stopPropagation();
        e.preventDefault();

        mediaUploadZone.removeClass('z-depth-2');
        mediaUploadZone.addClass('z-depth-1');

        if (!mediaUploadZone.find('.upload-pulse-container .upload-pulse').hasClass('triggered')){
          mediaUploadZone.find('.upload-pulse-container .upload-pulse').addClass('pulse');
        }
      });

      mediaUploadZone.on('dragover',function(e){
        e.stopPropagation();
        e.preventDefault();
      });

      var nonSquareAspectRatio = {
        allow: false,
        ratio: 1.0
      };

      $(window).on('resize', function(){
        var aspectiveModal = $('#media-upload-zone #aspective-crop-modal'),
            aspectivePhoto = aspectiveModal.find('#aspective-photo');

        aspectivePhoto.css({'max-height': aspectiveModal.height() - 180});

        aspectivePhoto.cropper();
      });

      $('#media-upload-zone #aspective-crop-modal #media-upload-crop-photo-btn').on('click', function(){
        var aspectiveModal = $('#media-upload-zone #aspective-crop-modal'),
            aspectivePhoto = aspectiveModal.find('#aspective-photo');

        var croppedAspectivePhoto = aspectivePhoto.cropper('getCroppedCanvas');

        aspectiveModal.find('#media-upload-change-aspect-ratio-btn').fadeOut(300);

        mediaUploadZone.find('.upload-pulse-container .upload-pulse').html('');
        mediaUploadZone.find('.upload-pulse-container .upload-pulse').removeClass('pulse');
        mediaUploadZone.find('.upload-pulse-container .upload-pulse').addClass('triggered');

        mediaUploadZone.find('.upload-pulse-container .upload-pulse').css('background-image', 'url(' + croppedAspectivePhoto.toDataURL('image/jpeg') + ')');

        $('#media-upload-zone #media-upload-write-caption-btn').removeAttr('disabled');
        $('#media-upload-zone #media-upload-write-caption-btn').removeClass('disabled');

      })

      $('#media-upload-zone #aspective-crop-modal #media-upload-change-aspect-ratio-btn').on('click', function(){
        var aspectiveModal = $('#media-upload-zone #aspective-crop-modal'),
            aspectivePhoto = aspectiveModal.find('#aspective-photo');

        if (!nonSquareAspectRatio.allow){
          var aspectivePhotoWidth = aspectivePhoto.width(),
              aspectivePhotoHeight = aspectivePhoto.height(),
              aspectRatio = (aspectivePhotoWidth * 1.0) / (aspectivePhotoHeight * 1.0);

          if (aspectRatio > 1.0 || aspectRatio < 1.0) {
            if (aspectivePhotoWidth > aspectivePhotoHeight){
              if (aspectRatio > 1.5804154303){
                aspectRatio = (600 * 1.0) / (337 * 1.0);
              }
            }else{
              if (aspectRatio > 0.5804154303){
                aspectRatio = (480 * 1.0) / (600 * 1.0);
              }
            }
          }

          nonSquareAspectRatio.allow = true;
          nonSquareAspectRatio.ratio = aspectRatio;
        }else{
          nonSquareAspectRatio.allow = false;
          nonSquareAspectRatio.ratio = 1.0;
        }

        aspectivePhoto.cropper('setAspectRatio', nonSquareAspectRatio.ratio);
      })

      mediaUploadZone.on('drop',function(e){
        e.preventDefault();

        var formData = new FormData(),
            reader = new FileReader(),
            files = e.originalEvent.dataTransfer.files,
            length = files.length;

        mediaUploadZone.css('border-color','#F8F8F8');

        if (length === 1){
          reader.onload = function (event){
            var aspectiveModal = $('#media-upload-zone #aspective-crop-modal'),
                aspectivePhoto = aspectiveModal.find('#aspective-photo');

            aspectivePhoto.cropper('destroy');
            aspectivePhoto.attr({'src': event.target.result});

            aspectivePhoto.css({'max-width': '100%', 'max-height': aspectiveModal.height() - 180});
            aspectiveModal.openModal();

            var aspectivePhotoWidth = aspectivePhoto.width(),
                aspectivePhotoHeight = aspectivePhoto.height(),
                aspectRatio = (aspectivePhotoWidth * 1.0) / (aspectivePhotoHeight * 1.0);

            if (aspectRatio > 1.0 || aspectRatio < 1.0) {
              aspectiveModal.find('#media-upload-change-aspect-ratio-btn').fadeIn(300);
            }

            var options = {
              aspectRatio: nonSquareAspectRatio.ratio,
              viewMode: 1,
              responsive: true
            };

            if (aspectivePhotoHeight > aspectivePhotoWidth + 100){
              options.minContainerHeight = 400;
            }

            aspectivePhoto.cropper(options);

            nonSquareAspectRatio.allow = false;
            nonSquareAspectRatio.ratio = 1.0;
          }

          reader.readAsDataURL(files[0]);
        }
      });

      mediaUploadZone.find('input[type="file"]#upload-trigger').on('change',function(e){
        e.preventDefault();

        var formData = new FormData(),
            reader = new FileReader(),
            files = $(this)[0].files,
            length = files.length;

        mediaUploadZone.css('border-color','#F8F8F8');

        if (length === 1){
          reader.onload = function (event){
            mediaUploadZone.find('.upload-pulse-container .upload-pulse').html('');
            mediaUploadZone.find('.upload-pulse-container .upload-pulse').removeClass('pulse');
            mediaUploadZone.find('.upload-pulse-container .upload-pulse').addClass('triggered');

            mediaUploadZone.find('.upload-pulse-container .upload-pulse').css('background-image', 'url(' + event.target.result + ')');

            $('#media-upload-zone #media-upload-write-caption-btn').removeAttr('disabled');
            $('#media-upload-zone #media-upload-write-caption-btn').removeClass('disabled');
          }

          reader.readAsDataURL(files[0]);
        }
      });

      $('#media-upload-zone #media-upload-write-caption-btn').on('click', function(){
        var lastActivatedIndex = $('.media-upload-page-handler .breadcrumb.activated.current').index();

        $('.media-upload-page-handler .breadcrumb.activated.current').removeClass('current');
        $('.media-upload-page-handler .breadcrumb').eq(lastActivatedIndex + 1).addClass('activated current');

        $('ul.tabs').tabs('select_tab', 'media-upload-caption');
      });

      var linkIsListeningOn = {
        status: false,
        index: -1,
        type: null
      };

      $('#media-upload-caption #scheduled-media-upload-caption').on('keyup', function(){
        var caption = $(this).val();

        if (caption.length > 0){
          switch (caption[caption.length - 1]) {
            case '#':
              var isValidHashtag = false;

              if (caption.length > 1){
                if (caption[caption.length - 2] == ' '){
                  isValidHashtag = true;
                }
              }else{
                isValidHashtag = true;
              }

              if (isValidHashtag){
                linkIsListeningOn.index = caption.length;
                linkIsListeningOn.status = true;
                linkIsListeningOn.type = '#';
              }
              break;

            case '@':
              var isValidMention = false;

              if (caption.length > 1){
                if (caption[caption.length - 2] == ' '){
                  isValidMention = true;
                }
              }else{
                isValidMention = true;
              }

              if (isValidMention){
                linkIsListeningOn.index = caption.length;
                linkIsListeningOn.status = true;
                linkIsListeningOn.type = '@';
              }
              break;

            case ' ':
              linkIsListeningOn.index = -1;
              linkIsListeningOn.status = false;
              linkIsListeningOn.type = null;
              break;
          }

          if (linkIsListeningOn.status == true && (caption.length - linkIsListeningOn.index) >= 2){
            $.getJSON(currentOrigin + '/reveal/tokens/gemflw', function(gem){
              if (gem.meta.code == 200){
                gem = gem.data;

                var ACCESS_TOKEN = gem.access_token;

                switch (linkIsListeningOn.type) {
                  case '#':
                    var requestedHashtag = caption.substr(linkIsListeningOn.index);

                    $.getJSON('/api/instagram/tags/search?q=' + requestedHashtag + '&count=5&access_token=' + ACCESS_TOKEN, function(hashtagsData){
                      if (hashtagsData.meta.code == 200){
                        var hashtags = hashtagsData.data,
                            hashtagsHTMLContent = '';

                        hashtags = hashtags.sort(function(a, b){
                          return b.media_count-a.media_count
                        });

                        for (var i = 0; i < hashtags.length; i++) {
                          var hashtagRegexp = new RegExp('^' + requestedHashtag);

                          hashtagsHTMLContent += '<a title="' + hashtags[i].mediaCount + ' Media" data-value="' + hashtags[i].mediaCount + '" class="collection-item">' +
                            '<headline>#<span class="title">' + requestedHashtag + '</span>' +
                          (hashtags[i].name).replace(hashtagRegexp, '') + '</headline><subline>' + hashtags[i].mediaCount + ' Media</subline></a>';
                        }

                        $('#media-upload-caption #link-request-modal .collection.chips-dropdown').html(hashtagsHTMLContent);

                        $('#media-upload-caption #link-request-modal').openModal();
                      }else{
                        Materialize.toast(hashtagsData.meta.error_message, 4000);
                      }
                    });
                    break;

                  case '@':
                    var requestedMention = caption.substr(linkIsListeningOn.index);

                    $.getJSON('/api/instagram/users/search?q=' + requestedMention + '&count=4&access_token=' + ACCESS_TOKEN, function(mentionsData){
                      if (mentionsData.meta.code == 200){
                        var mentions = mentionsData.data,
                            mentionsHTMLContent = '';

                        mentions = mentions.sort(function(a, b){
                          return b.followerCount-a.followerCount
                        });

                        for (var i = 0; i < mentions.length; i++) {
                          var mentionRegexp = new RegExp('^' + requestedMention),
                              mentionValue = '';

                          if (mentions[i].username.match(mentionRegexp) != null){
                            mentionValue = mentions[i].username;
                          }else{
                            mentionValue = mentions[i].fullName;
                          }

                          mentionsHTMLContent += '<a title="' + mentions[i].followerCount + ' Followers" data-value="' + mentions[i].followerCount + '" class="collection-item">' +
                            '<headline>@<span class="title">' + requestedMention + '</span>' +
                          mentionValue.replace(mentionRegexp, '') + '</headline><subline>' + mentions[i].followerCount + ' Followers</subline></a>';
                        }

                        $('#media-upload-caption #link-request-modal .collection.chips-dropdown').html(mentionsHTMLContent);

                        $('#media-upload-caption #link-request-modal').openModal();
                      }else{
                        Materialize.toast(mentionsData.meta.error_message, 4000);
                      }
                    });
                    break;
                }
              }
            })
          }else{
            $('#media-upload-caption #link-request-modal').closeModal();
          }

          if (caption[caption.length - 1] != '#' && caption[caption.length - 1] != '@'){
            $('#media-upload-caption #media-upload-set-schedule-btn').removeAttr('disabled');
            $('#media-upload-caption #media-upload-set-schedule-btn').removeClass('disabled');
          }
        }else{
          $('#media-upload-caption #media-upload-set-schedule-btn').attr('disabled', 'disabled');
          $('#media-upload-caption #media-upload-set-schedule-btn').addClass('disabled');
        }
      });

      $(document).on('click', '#media-upload-caption #link-request-modal .collection.chips-dropdown a', function(){
        var selectedHashtag = ($(this).find('headline').text().toLowerCase()).replace(/(#|@)/g, ''),
            caption = $('#media-upload-caption #scheduled-media-upload-caption').val();

        caption = caption.replaceAt(linkIsListeningOn.index, selectedHashtag);

        $('#media-upload-caption #scheduled-media-upload-caption').val(caption);

        $('#media-upload-caption #link-request-modal').closeModal();

        linkIsListeningOn.index = -1;
        linkIsListeningOn.status = false;

        $('#media-upload-caption #scheduled-media-upload-caption').focus();
        $('#media-upload-caption #scheduled-media-upload-caption').val($('#media-upload-caption #scheduled-media-upload-caption').val() + ' ');
      });

      $('#media-upload-caption #media-upload-set-schedule-btn').on('click', function(){
        var lastActivatedIndex = $('.media-upload-page-handler .breadcrumb.activated.current').index();

        $('.media-upload-page-handler .breadcrumb.activated.current').removeClass('current');
        $('.media-upload-page-handler .breadcrumb').eq(lastActivatedIndex + 1).addClass('activated current');

        $('ul.tabs').tabs('select_tab', 'media-upload-schedule');

        var hashService = $('#media-upload-schedule #scheduled-media-upload-calendar').data('hash');

        $.getJSON("/schedules/" + hashService, function(res){
          if (res.meta.code == 200){
            var events = [];

            if (res.data.length > 0){
              $.each(res.data, function(i, schedule){
                  events.push({
                    id: schedule._id,
                    title: schedule.media.caption,
                    start: schedule.scheduled_at,
                    photo: schedule.media.content
                  })

                  var todayDate = moment().startOf('day'),
                      YM = todayDate.format('YYYY-MM'),
                      YESTERDAY = todayDate.clone().subtract(1, 'day').format('YYYY-MM-DD'),
                      TODAY = todayDate.format('YYYY-MM-DD'),
                      TOMORROW = todayDate.clone().add(1, 'day').format('YYYY-MM-DD');

                  var media = {
                    content: $('#media-upload-zone #scheduled-media-upload-zone .upload-pulse-container .upload-pulse').css('background-image').replace(/(url\(|\))/g, ''),
                    caption: $('#media-upload-caption #scheduled-media-upload-caption').val()
                  };

                  var scheduler = {
                        element: '#scheduled-media-upload-calendar',
                        customButtons: {
                            currentEventBtn: {
                                text: '<img src="' + media.content + '"></img><span>' + media.caption + '</span>'
                            }
                        },
                        header: {
                    			left: 'prev,next today',
                    			center: 'title currentEventBtn',
                    			right: 'month,agendaWeek,agendaDay,listWeek'
                    		},
                        events: events,
                        eventDrop: function(event, delta, revertFunc) {
                          var today = (new Date()).getTime(),
                              _start = (new Date(event.start.format())).getTime(),
                              eventDiffer = _start - today,
                              eventDifferOnDay = Math.floor(eventDiffer / (1000 * 60 * 60 * 24));

                          $('#media-upload-schedule #change-event-modal').find('.modal-content h4').html(event.title);

                          $('#media-upload-schedule #change-event-modal').find('.modal-content p').html(
                            'رویداد بر روی  ' + ((eventDifferOnDay != 0)? ((eventDifferOnDay > 0)? _convertDigitsToPersian(eventDifferOnDay) + ' روز بعد': _convertDigitsToPersian(Math.abs(eventDifferOnDay)) + ' روز قبل') : 'امروز') + 'تنظیم بشود؟'
                          );

                          $('#media-upload-schedule #change-event-modal').openModal();

                          $('#media-upload-schedule #change-event-modal .change-agree').on('click', function(){
                            $('#media-upload-schedule #scheduled-media-upload-calendar').fullCalendar('updateEvent', event);

                            window.schedule.scheduled_at = new Date(_start).toISOString();
                          })

                          $('#media-upload-schedule #change-event-modal .change-disagree').on('click', function(){
                            revertFunc();
                          })

                          $(document).on('click', function(e){
                            if ($(e.target).hasClass('lean-overlay')){
                              revertFunc();
                            }
                          })

                          $(document).on('keyup', function(e){
                            if (e.keyCode == 27){
                              revertFunc();
                            }
                          })
                        },
                        navLinks: true,
                        droppable: true,
                        drop: function(date) {
                  				$(this).remove();

                          var today = new Date();

                          window.schedule = {
                            media: {
                              content: media.content,
                              caption: media.caption
                            },
                            scheduled_at: (new Date(date)).toISOString(),
                            created_at: today.toISOString(),
                            modified_at: today.toISOString()
                          };

                          $('#media-upload-schedule #save-schedule-btn').removeAttr('disabled');
                          $('#media-upload-schedule #save-schedule-btn').removeClass('disabled');
                  			},
                        editable: true
                    };

                  createScheduler(scheduler);

                  $('#media-upload-schedule #scheduled-media-upload-calendar .fc-currentEventBtn-button').data('event', {
                    title: media.caption,
                    photo: media.content,
                    stick: true
            			})

                  $('#media-upload-schedule #scheduled-media-upload-calendar .fc-currentEventBtn-button').draggable({
                      revert: true,      // immediately snap back to original position
                      revertDuration: 0,  //
                      cancel: false
                  });
              });
            }else{
              var todayDate = moment().startOf('day'),
                  YM = todayDate.format('YYYY-MM'),
                  YESTERDAY = todayDate.clone().subtract(1, 'day').format('YYYY-MM-DD'),
                  TODAY = todayDate.format('YYYY-MM-DD'),
                  TOMORROW = todayDate.clone().add(1, 'day').format('YYYY-MM-DD');

              var media = {
                content: $('#media-upload-zone #scheduled-media-upload-zone .upload-pulse-container .upload-pulse').css('background-image').replace(/(url\(|\))/g, ''),
                caption: $('#media-upload-caption #scheduled-media-upload-caption').val()
              };

              var scheduler = {
                    element: '#scheduled-media-upload-calendar',
                    customButtons: {
                        currentEventBtn: {
                            text: '<img src="' + media.content + '"></img><span>' + media.caption + '</span>'
                        }
                    },
                    header: {
                      left: 'prev,next today',
                      center: 'title currentEventBtn',
                      right: 'month,agendaWeek,agendaDay,listWeek'
                    },
                    events: events,
                    eventDrop: function(event, delta, revertFunc) {
                      var today = (new Date()).getTime(),
                          _start = (new Date(event.start.format())).getTime(),
                          eventDiffer = _start - today,
                          eventDifferOnDay = Math.floor(eventDiffer / (1000 * 60 * 60 * 24));

                      $('#media-upload-schedule #change-event-modal').find('.modal-content h4').html(event.title);

                      $('#media-upload-schedule #change-event-modal').find('.modal-content p').html(
                        'رویداد بر روی  ' + ((eventDifferOnDay != 0)? ((eventDifferOnDay > 0)? _convertDigitsToPersian(eventDifferOnDay) + ' روز بعد': _convertDigitsToPersian(Math.abs(eventDifferOnDay)) + ' روز قبل') : 'امروز') + 'تنظیم بشود؟'
                      );

                      $('#media-upload-schedule #change-event-modal').openModal();

                      $('#media-upload-schedule #change-event-modal .change-agree').on('click', function(){
                        $('#media-upload-schedule #scheduled-media-upload-calendar').fullCalendar('updateEvent', event);

                        window.schedule.scheduled_at = new Date(_start).toISOString();
                      })

                      $('#media-upload-schedule #change-event-modal .change-disagree').on('click', function(){
                        revertFunc();
                      })

                      $(document).on('click', function(e){
                        if ($(e.target).hasClass('lean-overlay')){
                          revertFunc();
                        }
                      })

                      $(document).on('keyup', function(e){
                        if (e.keyCode == 27){
                          revertFunc();
                        }
                      })
                    },
                    navLinks: true,
                    droppable: true,
                    drop: function(date) {
                      $(this).remove();

                      var today = new Date();

                      window.schedule = {
                        media: {
                          content: media.content,
                          caption: media.caption
                        },
                        scheduled_at: (new Date(date)).toISOString(),
                        created_at: today.toISOString(),
                        modified_at: today.toISOString()
                      };

                      $('#media-upload-schedule #save-schedule-btn').removeAttr('disabled');
                      $('#media-upload-schedule #save-schedule-btn').removeClass('disabled');
                    },
                    editable: true
                };

              createScheduler(scheduler);

              $('#media-upload-schedule #scheduled-media-upload-calendar .fc-currentEventBtn-button').data('event', {
                title: media.caption,
                photo: media.content,
                stick: true
              })

              $('#media-upload-schedule #scheduled-media-upload-calendar .fc-currentEventBtn-button').draggable({
                  revert: true,      // immediately snap back to original position
                  revertDuration: 0,  //
                  cancel: false
              });
            }
          }else{
            Materialize.toast(res.meta.error_message, 4000);
          }
        })
    });

    $('#media-upload-schedule #save-schedule-btn').on('click', function(){
      var schedule = window.schedule;

      delete window.schedule;

      schedule.service_id = $(this).data('hash')

      $.ajax({
        url: "/schedule/" + schedule.service_id + "/set",
        type: "post",
        data: JSON.stringify(schedule),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(res){
          if (res.meta.code == 200){
            window.location.replace('/profile/accounts/' + schedule.service_id + '/scheduled/media');
          }else{
            Materialize.toast(res.meta.error_message, 4000);
          }
        }
      })
    });
  }
}




  var map;
  $('#signup-btn').on('click', function(){
    var signupForm = $('#signup'),
        signupEmail = signupForm.find('#email').val(),
        signupPassword = signupForm.find('#password').val(),
        signupRepassword = signupForm.find('#re-password').val(),
        signupTerms = ((signupForm.find('#terms-cond:checked').length > 0)? true: false);

    if (signupTerms){
      signupForm.find('.terms-cond i').fadeOut(300);

      if (signupEmail != '' && signupPassword != ''){
        var alphabeticalyCheck = signupPassword.match(/[a-zA-Z]+/g),
            numericalCheck = signupPassword.match(/[0-9]+/g),
            specialCharsCheck = signupPassword.match(/[!#$%@^&*()\/_~?><]+/g);

        if (alphabeticalyCheck != null && numericalCheck != null & specialCharsCheck != null){
          if (signupPassword === signupRepassword){
            var today = (new Date()).toISOString(),
                confirmationId = Math.floor(Math.random() * (999 - 100 + 1) + 100) + '-' + Math.floor(Math.random() * (999 - 100 + 1) + 100),
                subscriber = {
                  email: signupEmail,
                  password: signupPassword,
                  created_at: today,
                  modified_at: today,
                  confirmation: {
                    code: confirmationId,
                    confirmed: false
                  }
                };

            $.ajax({
              url: "/users",
              type: "post",
              data: JSON.stringify(subscriber),
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              success: function(res){
                if (res.meta.code == 200){
                  signupForm.find('#email+label, #re-password+label, #password+label').removeClass('active');
                  signupForm.find('#email, #password, #re-password').val('');
                  signupForm.find('#terms-cond').removeAttr('checked');

                  $('ul.tabs').tabs('select_tab', 'login');
                  $('#login #email').val(subscriber.email);
                  $('#login #email+label').addClass('active');
                  $('#login #password').trigger('focus');

                  Materialize.toast('حساب کاربری شما با موفقیت ایجاد گردید!<br>لطفا برای تایید حساب کاربری به ایمیل خود مراجعه نمایید.', 4000);
                }else{
                  Materialize.toast(res.meta.error_message, 4000);
                }
              }
            })
          }else{
            Materialize.toast('لطفاً مطمئن شوید که گذرواژه و تایید آن با یکدیگر برابر هستند!', 4000);
          }
        }else{
          Materialize.toast('حروف بزرگ و کوچک، اعداد و یکسری از کاراکترهای خاص مجاز می‌باشد!', 4000);
        }
      }else{
        var message = '';

        if (signupEmail == '' && signupPassword == ''){
          message += 'هرد دو فیلد ';
        }else if (signupEmail != '' && signupPassword == '') {
          message += 'فیلد گذرواژه ';
        }else if (signupEmail == '' && signupPassword != '') {
          message += 'فیلد پست الکترونیک ';
        }

        message += 'خالی رها شده است!';

        Materialize.toast(message, 4000);
      }
    }else{
      signupForm.find('.terms-cond i').fadeIn(300);
      Materialize.toast('لطفاً شرایط استفاده از جم‌فالو را ابتدا مطالعه و سپس آن را تایید نمایید.', 4000);
    }
  })
  $('#login-btn').on('click', function(){
    var loginForm = $('#login'),
        loginEmail = loginForm.find('#email').val(),
        loginPassword = loginForm.find('#password').val(),
        loginRemember = ((loginForm.find('#remember:checked').length > 0)? true: false);

    if (loginEmail != '' && loginPassword != ''){
      var auth = {
          email: loginEmail,
          password: loginPassword,
          remember: loginRemember
        };

      $.ajax({
        url: "/users/auth/",
        type: "post",
        data: JSON.stringify(auth),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(res){
          if (res.meta.code == 200){
            window.location.replace('/profile');
          }else{
            Materialize.toast(res.meta.error_message, 4000);
          }
        }
      })
    }else{
      var message = '';

      if (loginEmail == '' && loginPassword == ''){
        message += 'هر دو فیلد ';
      }else if (loginEmail != '' && loginPassword == '') {
        message += 'فیلد گذرواژه ';
      }else if (loginEmail == '' && loginPassword != '') {
        message += 'فیلد پست الکترونیک ';
      }

      message += 'خالی رها شده است!';

      Materialize.toast(message, 4000);
    }
  })
  $('#service-chooser .carousel-item').on('click', function(){
    $(this).parent().attr('data-service', $(this).data('service'));
    $('#choose-service-type-btn span').html($(this).data('service'));
  });

  $('#gateway-chooser .carousel-item').on('click', function(){
    $(this).parent().attr('data-service', $(this).data('service'));
    $('#pay-now-btn span').html($(this).data('service'));
  });

  $('#service-type-chooser .carousel-item').on('click', function(){
    $(this).parent().attr('data-plan-en', $(this).data('plan-en'));
    $(this).parent().attr('data-plan-fa', $(this).data('plan-fa'));
    $('#choose-service-detail-btn span').html($(this).data('plan'));
  });

  $('#choose-service-type-btn').on('click', function(){
    appendServiceSession('type', {
      persian: $('#service-chooser div.carousel').data('service-fa'),
      english: $('#service-chooser div.carousel').data('service-en')
    });
    today = new Date();
    appendServiceSession('created_at', today.toISOString());
    appendServiceSession('modified_at', today.toISOString());

    $('ul.tabs').tabs('select_tab', 'service-type-chooser');
    $('.carousel').carousel();
  });

  $('#choose-service-detail-btn').on('click', function(){
    appendServiceSession('plan', {
      persian: $('#service-type-chooser div.carousel').data('plan-fa'),
      english: $('#service-type-chooser div.carousel').data('plan-en')
    });

    $('ul.tabs').tabs('select_tab', 'service-plan-details');

    var targetFollowerCount = 1;

    switch ($('#service-type-chooser .carousel').data('plan-en').toLowerCase().replace(/ +/ig,'-')) {
      case 'starter':
      default:
        targetFollowerCount = 1;
        $('#target-month-1').attr('checked','checked');
        break;
      case 'semi-starter':
        targetFollowerCount = 3;
        $('#target-month-2').attr('checked','checked');
        break;
      case 'semi-intermediate':
        targetFollowerCount = 8;
        $('#target-month-2').attr('checked','checked');
        break;
      case 'intermediate':
        targetFollowerCount = 15;
        $('#target-month-3').attr('checked','checked');
        break;
      case 'enterprise':
        targetFollowerCount = 25;
        $('#target-month-3').attr('checked','checked');
        break;
      case 'expert':
        targetFollowerCount = 30;
        $('#target-month-3').attr('checked','checked');
        break;
    }

    var targetFollower = document.getElementById('target-follower');

    noUiSlider.create(targetFollower, {
      start: targetFollowerCount,
      direction: 'rtl',
      range: {
        'min': 1,
        'max': 50
      },
      tooltips: wNumb({
        decimals: 0,
        postfix: ' هزار',
        edit: function(value){
          return '<span data-value="' + (value.replace(/ هزار/g, '')) * 1000 + '">' + _convertDigitsToPersian(value.toString()) + '</span>';
        }
      }),
      connect: [true, false],
      pips: {
        mode: 'values',
        stepped: true,
        values: [2, 10, 25, 50],
        density: 6,
        format: wNumb({
          decimals: 0,
          edit: function(value){
            return _convertDigitsToPersian(value.toString());
          },
          postfix: ' هزار'
        })
      }
    });

    targetFollower.noUiSlider.on('change', function(){
      $('#service-plan-details .SPD-title span').html($('#target-follower .noUi-tooltip span').html());
    });
  });

  $('#target-month input[type=radio]').on('change', function(){
    $('#target-month h4.bold span').html($(this).data('value-fa'));
  });

  $('#target-micro-service input[type=checkbox]').on('change', function(){
    if ($(this).attr('checked') == 'checked'){
      $(this).removeAttr('checked');
    }else{
      $(this).attr('checked', 'checked');
    }

    HBSC = $('#hashtag-based-setting-checkbox').attr('checked'),
    LBSC = $('#location-based-setting-checkbox').attr('checked'),
    PBSC = $('#period-based-setting-checkbox').attr('checked');

    if ( HBSC == 'checked' && LBSC == 'checked' && PBSC == 'checked' ){
      $('#define-next-level-type-btn').html('تعییر تنظیمات مربوط به  <span>مایکروسرویس‌ها</span>');
    }else{
      if ( typeof HBSC != 'undefined' || typeof LBSC != 'undefined' || typeof PBSC != 'undefined' ){
        $('#define-next-level-type-btn').html('تعییر تنظیمات مربوط به  <span>مایکروسرویس‌ها</span>');
      }else{
        $('#define-next-level-type-btn').html('احراز حساب کاربری');
      }
    }
  });

  $('#define-third-level-micro-service-btn').on('click', function(){
    $('#hashtag-service-details hashtags .chips').material_chip({
      data: analyzedHashtags(),
    });
    var positions = analyzedLocations();

    var hashtags = [],
        locations = [],
        periods = [];

    for (var i = 0; i < positions.length; i++) {
      $.ajax({
        url: "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + positions[i].lat + "," + positions[i].lng + "&sensor=true&key=AIzaSyCQQwxmPEZPNchzrARjmY5RRpr5gzVqSWA",
        type: "get",
        async: false,
        success: function(locs){
          if ( locs.status != 'ZERO_RESULTS' ){
            var locs = locs.results,
                formatted_address = locs[0].formatted_address;

            locations.push({
              text: formatted_address,
              data: {
                latitude: locs[0].geometry.location.lat,
                longitude: locs[0].geometry.location.lng
              }
            })
          }else{
            Materialize.toast('لطفاً یک آدرس صحیح وارد نمایید!', 4000);
          }
        }
      })
    }

    $('#hashtag-service-details hashtags .chips .chip').each(function(){
      var hashtag = $(this),
          hashtagText = hashtag.html().toString().replace(/(#|@)/g, ''),
          strippedHashtagText = hashtagText.replace(/<[^>]*>/g, '');

      hashtags.push({
        text: strippedHashtagText,
        data: hashtag.data('value'),
        type: hashtag.data('type')
      })
    });

    $('#period-service-details hashtags .chips .chip').each(function(){
      var period = $(this),
          periodText = {
            first: period.find('span').eq(0).html().toString(),
            second: period.find('span').eq(1).html().toString()
          },
          strippedPeriodText = {
            first: periodText.first.replace(/<[^>]*>/g, ''),
            second: periodText.second.replace(/<[^>]*>/g, '')
          };

      periods.push({
        text: strippedPeriodText,
        data: {
          first: period.data('first-value'),
          second: period.data('second-value')
        }
      })
    });

    appendServiceSession('hashtags', hashtags);
    appendServiceSession('locations', locations);
    appendServiceSession('periods', periods);

    loadAuthenticationLevel();
  });

  $('#define-first-level-micro-service-btn').on('click', function(){
    var hashtags = [];

    $('#hashtag-service-details hashtags .chips .chip').each(function(){
      var hashtag = $(this),
          hashtagText = hashtag.html().toString().replace(/(#|@)/g, ''),
          strippedHashtagText =  hashtagText.replace(/<[^>]*>/g, '');

      hashtags.push({
        text: strippedHashtagText,
        data: hashtag.data('value'),
        type: hashtag.data('type')
      })
    });

    appendServiceSession('hashtags', hashtags);

    if ( LBSC == 'checked' ){
      loadLocationMicroService(analyzedLocations());
    }else if ( PBSC == 'checked' ){
      loadPeriodMicroService(analyzedPeriods());
    }else{
      loadAuthenticationLevel();
    }
  });
  $('#checkout-micro-service-btn').on('click', function(){
    $('#hashtag-service-details hashtags .chips').material_chip({
      data: analyzedHashtags(),
    });
    var positions = analyzedLocations();

    var hashtags = [],
        locations = [],
        periods = [];

    for (var i = 0; i < positions.length; i++) {
      $.ajax({
        url: "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + positions[i].lat + "," + positions[i].lng + "&sensor=true&key=AIzaSyCQQwxmPEZPNchzrARjmY5RRpr5gzVqSWA",
        type: "get",
        async: false,
        success: function(locs){
          if ( locs.status != 'ZERO_RESULTS' ){
            var locs = locs.results,
                formatted_address = locs[0].formatted_address;

            locations.push({
              text: formatted_address,
              data: {
                latitude: locs[0].geometry.location.lat,
                longitude: locs[0].geometry.location.lng
              }
            })
          }else{
            Materialize.toast('لطفاً یک آدرس صحیح وارد نمایید!', 4000);
          }
        }
      })
    }
    var periodsData = analyzedPeriods();

    $('#hashtag-service-details hashtags .chips .chip').each(function(){
      var hashtag = $(this),
          hashtagText = hashtag.html().toString().replace(/(#|@)/g, ''),
          strippedHashtagText = hashtagText.replace(/<[^>]*>/g, '');

      hashtags.push({
        text: strippedHashtagText,
        data: hashtag.data('value'),
        type: hashtag.data('type')
      })
    });
    periods = periodsData;

    appendServiceSession('hashtags', hashtags);
    appendServiceSession('locations', locations);
    appendServiceSession('periods', periods);

    var hashId = $(this).data('hash-id');

    $.getJSON('/invoices/' + hashId, function(res){
      if (res.meta.code == 200){
        var invoices = res.data,
            service = JSON.parse(Cookies.get('service')),
            servicePrice = checkout(service),
            invoiceCreatedAt = new Date(service.created_at),
            jalaliInvoiceCreatedAt = _gregorian_to_jalali(invoiceCreatedAt.getFullYear(), invoiceCreatedAt.getMonth(), invoiceCreatedAt.getDay()),
            invoiceFormattedCreatedAt = jalaliInvoiceCreatedAt.day + ' ' + _getMonthName(jalaliInvoiceCreatedAt.month) + '، ' + jalaliInvoiceCreatedAt.year,
            targetPeriod = (new Date(service.target.period)).getTime(),
            createdAt = (new Date(service.created_at)).getTime(),
            periodDifference = targetPeriod - createdAt,
            defaultMonth = periodDifference / (1000 * 60 * 60 * 24 * 30),
            defaultMonthValue = getDefaultMonthValue(defaultMonth);

        appendServiceSession('price', servicePrice);

        service.invoice = {
          no: parseInt(invoices.length + 1),
          month: defaultMonthValue
        };

        appendServiceSession('invoice', service.invoice);

        $('#checkout-details .checkout-invoice h3.inv-no span').html('#' + _convertDigitsToPersian((parseInt(invoices.length + 1)).toString()));
        $('#checkout-details .checkout-invoice span.inv-date').html(invoiceFormattedCreatedAt);
        $('#checkout-details .checkout-invoice div.inv-photo').css('background-image', $('#authorized-details .aside .photo div.service-photo').css('background-image'));
        if (service.customized){
          $('#checkout-details .checkout-invoice .inv-content td.inv-service').html('شخصی‌سازی شده');
        }else{
          $('#checkout-details .checkout-invoice .inv-content td.inv-service').html(service.plan.persian);
        }
        $('#checkout-details .checkout-invoice .inv-content td.inv-qty').html(_convertDigitsToPersian((service.target.followers / 1000).toString()) + ' هزار');
        $('#checkout-details .checkout-invoice .inv-content td.inv-month').html(defaultMonthValue);
        $('#checkout-details .checkout-invoice .inv-content td.inv-price').html(_convertDigitsToPersian(servicePrice.total.toString()) + ' تومان');

        $('ul.tabs').tabs('select_tab', 'checkout-details');
      }
    })
  });

  $('#choose-payment-gateway-btn').on('click', function(){
    if ($(this).hasClass('credit-payment')){
      var today = new Date(),
          credit_amount = {
            content: {
              price: $('#credit-details #target-credit .noUi-tooltip span').data('value')
            }
          };

      appendCreditSession('payment', credit_amount);
      appendCreditSession('created_at', today.toISOString());
    }

    $('ul.tabs').tabs('select_tab', 'gateway-chooser');
  });

  $('#pay-now-btn').on('click', function(){
    var gateway = $('#gateway-chooser div.carousel').data('service');

    if ($(this).hasClass('credit-payment')){
      var credit = JSON.parse(Cookies.get('credit')),
          gatewayDetails = {
            gateway: gateway,
            price: credit.payment.content.price,
            description: 'A credit payment for your own account',
            callback_url: currentOrigin + '/profile'
          };

      credit.payment.gateway = gateway;

      appendCreditSession('payment', credit.payment);

      $.ajax({
        url: "/payment/" + ((new Date()).getTime()).toString(16),
        type: "post",
        data: JSON.stringify(gatewayDetails),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(paymentResault){
          if (paymentResault.meta.code == 200){
            credit.payment.content.authority = paymentResault.data.authority;

            appendServiceSession('payment', credit.payment);

            $.ajax({
              url: "/session/credit/" + credit.user_id,
              type: "post",
              data: JSON.stringify(credit),
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              success: function(sessionResault){
                Cookies.remove('credit');

                window.location.replace(paymentResault.data.url);
              }
            })
          }
        }
      })
    }else{
      var service = Cookies.get('service'),
          user_id = $(this).data('hash-id');

      if (!service){
        service = {};
      }else{
        service = JSON.parse(service);
      }

      var servicePrice = checkout(service),
          description = 'پرداختی برای طرح ' + service.type.persian + ' مربوط به حساب کاربری شما.',
          gatewayDetails = {
            gateway: gateway,
            price: servicePrice.total,
            description: description,
            callback_url: currentOrigin + '/profile/accounts/new'
          };

      if (!service.price){
        service.price = servicePrice;
        appendServiceSession('price', service.price);
      }

      $.ajax({
        url: "/payment/" + service.owner.access_token,
        type: "post",
        data: JSON.stringify(gatewayDetails),
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(paymentResault){
          if (paymentResault.meta.code == 200){
            service.payment = {
              gateway: gateway,
              content: {
                authority: paymentResault.data.authority
              }
            };

            appendServiceSession('payment', service.payment);

            $.ajax({
              url: "/session/service/" + service.owner.access_token,
              type: "post",
              data: JSON.stringify(service),
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              success: function(sessionResault){
                Cookies.remove('service');

                window.location.replace(paymentResault.data.url);
              }
            })
          }else{
            Materialize.toast(paymentResault.meta.error_message, 4000);
          }
        }
      });
    }
  });

  $('#pay-later-btn').on('click', function(){
    if ($(this).hasClass('session-saved')){
      window.location.replace('/profile/accounts');
    }else{
      var service = Cookies.get('service');

      if (!service){
        service = {};
      }else{
        service = JSON.parse(service);
      }

      service.price = checkout(service);
      appendServiceSession('price', service.price);

      $.ajax({
        url: "/session/service/" + service.owner.access_token,
        type: "post",
        data: JSON.stringify(service),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(res){
          Cookies.remove('service');

          window.location.replace('/profile/accounts/');
        }
      })
    }
  })

  $('#edit-profile .profile-uploader').on('change', function(){
    if (this.files && this.files.length === 1) {
        var reader = new FileReader();

        $('#edit-profile .profile-photo').css('background-position', 'center');

        reader.onload = function (e) {
          $('#edit-profile .peoples-photo.profile-photo-bg .profile-photo').remove();
          $('#edit-profile .peoples-photo.profile-photo-bg').addClass('regular');
          $('#edit-profile .peoples-photo.profile-photo-bg form').before('<div class="profile-photo" style="background-image: url(' + e.target.result + ')"></div>');
        }

        reader.readAsDataURL(this.files[0]);
    }
  });

  $('#edit-profile #name, #edit-profile #email').unbind('keyup').on('keyup', function(e) {
    var value = $(this).attr('value');

    value = $(this).val();

    $(this).attr('value', value);
  });

  $('#edit-profile-btn').on('click', function(){
    var account = {
      _id: $(this).data('id'),
      modified_at: (new Date()).toISOString()
    };

    if (!$('#edit-profile .profile-photo').hasClass('no-image')){
      account.profile = $('#edit-profile .profile-photo').css('background-image').replace(/(url\(|\))/g, '');
    }
    if ($('#edit-profile #name').val() != ''){
      account.name = $('#edit-profile #name').val();
    }
    if ($('#edit-profile #email').val() != ''){
      account.email = $('#edit-profile #email').val();
    }else{
      Materialize.toast('Email field can not be empty!', 4000);
    }
    if ($('#edit-profile #email').val() != $('#edit-profile #email').data('value')){
      var confirmationId = Math.floor(Math.random() * (999 - 100 + 1) + 100) + '-' + Math.floor(Math.random() * (999 - 100 + 1) + 100);

      account.confirmation = {
        code: confirmationId,
        confirmed: false
      };
    }

    if ($('#edit-profile #email').val() != ''){
      $.ajax({
        url: "/users",
        type: "put",
        data: JSON.stringify(account),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(res){
          if (res.meta.code == 200){
            if ($('#edit-profile #email').val() != $('#edit-profile #email').data('value')){
              window.location.replace('/logout');
            }else{
              window.location.replace('/profile');
            }
          }
        }
      })
    }
  });

  $('#passwd-btn').on('click', function(){
    var oldPass = $('#edit-password #old-pass').val(),
        newPass = $('#edit-password #new-pass').val(),
        rePass = $('#edit-password #re-pass').val(),
        account = {
          _id: $(this).data('id'),
          password: newPass,
          modified_at: (new Date()).toISOString()
        };

    if (oldPass != '' && newPass != ''){
      if (newPass === rePass){
        var alphabeticalyCheck = newPass.match(/[a-zA-Z]+/g),
            numericalCheck = newPass.match(/[0-9]+/g),
            specialCharsCheck = newPass.match(/[!#$%@^&*()\/_~?><]+/g);

        if (alphabeticalyCheck != null && numericalCheck != null & specialCharsCheck != null){
          $.ajax({
            url: "/users/password",
            type: "put",
            data: JSON.stringify(account),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(res){
              if (res.meta.code == 200){
                window.location.replace('/profile');
              }
            }
          })
        }else{
          Materialize.toast('&mdash; Upper &amp; lowercase letters<br>&mdash; At least one number<br>&mdash; At least one special character', 4000);
        }
      }else{
        Materialize.toast('Please make sure your passwords match!', 4000);
      }
    }else{
      var message = 'Your ';

      if (oldPass == ''){
        message += 'old password field and ';
      }
      if (newPass == ''){
        message += 'new password field ';
      }

      message += 'can not be empty!';

      Materialize.toast(message, 4000);
    }
  });

    $('#define-second-level-micro-service-btn').on('click', function(){
      $('#hashtag-service-details hashtags .chips').material_chip({
        data: analyzedHashtags(),
      });

      var hashtags = [],
          locations = [];

      $('#hashtag-service-details hashtags .chips .chip').each(function(){
        var hashtag = $(this),
            hashtagText = hashtag.html().toString().replace(/(#|@)/g, ''),
            strippedHashtagText = hashtagText.replace(/<[^>]*>/g, '');

        hashtags.push({
          text: strippedHashtagText,
          data: hashtag.data('value'),
          type: hashtag.data('type')
        })
      });

      $('#location-service-details hashtags .chips .chip').each(function(){
        var location = $(this),
            locationText = location.data('value').toString().replace(/(#|@)/g, ''),
            strippedLocationText = locationText.replace(/<[^>]*>/g, '');

        locations.push({
          address: strippedLocationText,
          data: {
            latitude: location.data('latitude'),
            longitude: location.data('longitude')
          }
        })
      });

      appendServiceSession('hashtags', hashtags);
      appendServiceSession('locations', locations);

      if ( PBSC == 'checked' ){
        loadPeriodMicroService(analyzedPeriods());
      }else{
        loadAuthenticationLevel();
      }
    });

    $('#authenticate-service-btn').on('click', function(){
      var user_id = $(this).data('hash-id'),
          username = $('#authentication-level-details #auth-username').val(),
          password = $('#authentication-level-details #auth-password').val();

      if (username != '' && password != ''){
        auth = {
          user_id: user_id,
          username: username,
          password: password
        };

        $.ajax({
          url: "/api/instagram/users",
          type: "post",
          data: JSON.stringify({
            username: auth.username,
            password: auth.password
          }),
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          success: function(res){
            if (res.meta.code == 200){
              var seed = res.data;

              seed.username = auth.username;
              seed.password = auth.password;

              $.ajax({
                url: "/profile/accounts/authorization",
                type: "post",
                data: JSON.stringify(seed),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function(token){
                  if (token.meta.code == 200){
                    var owner = token.data;

                    appendServiceSession('owner', owner);

                    loadAuthorizationLevel();
                  }
                }
              })
            }else{
              Materialize.toast(res.meta.error_message, 4000);
            }
          }
        })
      }else{
        var message = '';

        if (username == ''){
          if (message != ''){
            message += ' and username';
          }else{
            message += 'Username';
          }
        }

        if (password == ''){
          if (message != ''){
            message += ' and password';
          }else{
            message += 'Password';
          }
        }

        Materialize.toast(message + ' can not be empty!', 4000);
      }
    });

    $('#define-next-level-type-btn').on('click', function(){
      var month = $('#service-plan-details #target-month input[name="target-month"]:checked').val(),
          service_followers = $('#service-plan-details #target-follower .noUi-tooltip span').data('value'),
          service_plan = $('#service-type-chooser div.carousel').data('plan-en'),
          service_period = '',
          serviceCookie = JSON.parse(Cookies.get('service')),
          today = new Date(serviceCookie.created_at);


      if (service_followers != 2000 && service_followers != 5000 && service_followers != 10000){
        appendServiceSession('customized', true);
      }

      switch (month) {
        case '1 Month':
          service_period = (new Date(today.getTime() + (1000 * 60 * 60 * 24 * 30))).toISOString();
          break;
        case '3 Month':
          service_period = (new Date(today.getTime() + (1000 * 60 * 60 * 24 * 30 * 3))).toISOString();
          break;
        case '6 Month':
          service_period = (new Date(today.getTime() + (1000 * 60 * 60 * 24 * 30 * 6))).toISOString();
          break;
        case '1 Year':
          service_period = (new Date(today.getTime() + (1000 * 60 * 60 * 24 * 30 * 12))).toISOString();
          appendServiceSession('customized', true);
          break;
        case '2 Year':
          service_period = (new Date(today.getTime() + (1000 * 60 * 60 * 24 * 30 * 24))).toISOString();
          appendServiceSession('customized', true);
          break;
      }

      appendServiceSession('target', {
        followers: $('#service-plan-details #target-follower .noUi-tooltip span').data('value'),
        period: service_period
      });

      HBSC = $('#hashtag-based-setting-checkbox').attr('checked'),
      LBSC = $('#location-based-setting-checkbox').attr('checked'),
      PBSC = $('#period-based-setting-checkbox').attr('checked');

      if ( HBSC == 'checked' ){
        loadHashtagMicroService(analyzedHashtags());
      }else if ( LBSC == 'checked' ){
        loadLocationMicroService(analyzedLocations());
      }else if ( PBSC == 'checked' ){
        loadPeriodMicroService(analyzedPeriods());
      }else{
        loadAuthenticationLevel();
      }
    });

    $(document).on('keyup', '#hashtag-service-details hashtags .chips input', function(){
      var self = $(this),
          currentChip = self.val();

      if (currentChip.length > 0){
        switch (currentChip[0]) {
          case '#':
          default:
            var isValidHashtag = false;

            if (currentChip.length > 1){
              if (currentChip[currentChip.length - 2] == ' '){
                isValidHashtag = true;
              }
            }else{
              isValidHashtag = true;
            }

            if (isValidHashtag){
              linkIsListeningOn.index = 1;
              linkIsListeningOn.status = true;
              linkIsListeningOn.type = '#';
            }
            break;

          case '@':
            var isValidMention = false;

            if (currentChip.length > 1){
              if (currentChip[currentChip.length - 2] == ' '){
                isValidMention = true;
              }
            }else{
              isValidMention = true;
            }

            if (isValidMention){
              linkIsListeningOn.index = 1;
              linkIsListeningOn.status = true;
              linkIsListeningOn.type = '@';
            }
            break;
        }

      if (linkIsListeningOn.status == true && (currentChip.length - linkIsListeningOn.index) >= 2){
        $.getJSON(currentOrigin + '/reveal/tokens/gemflw', function(gem){
          if (gem.meta.code == 200){
            gem = gem.data;

            var ACCESS_TOKEN = gem.access_token;

            switch (linkIsListeningOn.type) {
              case '#':
                var requestedHashtag = currentChip.substr(linkIsListeningOn.index);

                $.getJSON('/api/instagram/tags/search?q=' + requestedHashtag + '&count=5&access_token=' + ACCESS_TOKEN, function(hashtagsData){
                  if (hashtagsData.meta.code == 200){
                    var hashtags = hashtagsData.data,
                        hashtagsHTMLContent = '';

                    hashtags = hashtags.sort(function(a, b){
                      return b.mediaCount-a.mediaCount
                    });

                    for (var i = 0; i < hashtags.length; i++) {
                      var hashtagRegexp = new RegExp('^' + requestedHashtag);

                      hashtagsHTMLContent += '<a title="' + hashtags[i].mediaCount + ' Media" data-type="hashtag" data-value="' + hashtags[i].mediaCount + '" class="collection-item">' +
                        '<headline>#<span class="title">' + requestedHashtag + '</span>' +
                      (hashtags[i].name).replace(hashtagRegexp, '') + '</headline><subline>' + hashtags[i].mediaCount + ' Media</subline></a>';
                    }

                    self.parent().parent().find('.chips-dropdown').html(hashtagsHTMLContent);

                    self.parent().parent().find('.chips-dropdown').fadeIn(300);
                  }else{
                    Materialize.toast(hashtagsData.meta.error_message, 4000);
                  }
                });
                break;

              case '@':
                var requestedMention = currentChip.substr(linkIsListeningOn.index);

                $.getJSON('/api/instagram/users/search?q=' + requestedMention + '&count=4&access_token=' + ACCESS_TOKEN, function(mentionsData){
                  if (mentionsData.meta.code == 200){
                    var mentions = mentionsData.data,
                        mentionsHTMLContent = '';

                    mentions = mentions.sort(function(a, b){
                      return b.followerCount-a.followerCount
                    });

                    for (var i = 0; i < mentions.length; i++) {
                      var mentionRegexp = new RegExp('^' + requestedMention),
                          mentionValue = '';

                      if (mentions[i].username.match(mentionRegexp) != null){
                        mentionValue = mentions[i].username;
                      }else{
                        mentionValue = mentions[i].fullName;
                      }

                      mentionsHTMLContent += '<a title="' + mentions[i].followerCount + ' Followers" data-type="mention" data-value="' + mentions[i].followerCount + '" class="collection-item">' +
                        '<headline>@<span class="title">' + requestedMention + '</span>' +
                      mentionValue.replace(mentionRegexp, '') + '</headline><subline>' + mentions[i].followerCount + ' Followers</subline></a>';
                    }

                    self.parent().parent().find('.chips-dropdown').html(mentionsHTMLContent);

                    self.parent().parent().find('.chips-dropdown').fadeIn(300);
                  }else{
                    Materialize.toast(mentionsData.meta.error_message, 4000);
                  }
                });
                break;
            }
          }
        })
      }else{
        self.parent().parent().find('.chips-dropdown').fadeOut(300);
      }
    }else{
      self.parent().parent().find('.chips-dropdown').fadeOut(300);
    }
  });

    $(document).on('blur', '#hashtag-service-details hashtags .chips input', function(){
      if ($(this).val() != ''){
        $(this).parent().parent().find('.chips-dropdown').fadeOut(300);
      }
    });

    $(document).on('focus', '#hashtag-service-details hashtags .chips input', function(){
      if ($(this).val() != ''){
        $(this).parent().parent().find('.chips-dropdown').fadeIn(300);
      }
    });

    $(document).on('click', '#hashtag-service-details hashtags .chips-dropdown a', function(){
      $(this).parent().parent().find('.chips input').before('<div class="chip" data-type="' + $(this).data('type') + '" data-value="' + $(this).data('value') + '">' + $(this).find('headline').text().toLowerCase() + '<i class="material-icons close">close</i></div>')
      $(this).parent().parent().find('.chips input').val('');
      $(this).parent().parent().find('.chips-dropdown').fadeOut(300);
    });

    $('#search-location').on('click', function(){
      var location_address = $('#location_search').val();
      location_address = location_address.replace(/ +/g, "+");

      $.getJSON("https://maps.googleapis.com/maps/api/geocode/json?address=" + location_address + "&sensor=true&key=AIzaSyCQQwxmPEZPNchzrARjmY5RRpr5gzVqSWA", function(locations){
        if ( locations.status != 'ZERO_RESULTS' ){
          var locations = locations.results,
              location = locations[0].geometry.location;

          map.setCenter(location);
        }else{
          $('#location_search').val('');
          Materialize.toast('Please Type a Valid Address!', 4000);
        }
      });
    });

    $('#location_search').on('keyup', function(e){
      if (e.keyCode == 13) {
          $('#search-location').trigger('click');
      }
    });

    $(document).ajaxStart(function(){
      $('#loading-overlay').css({
        'display': 'block',
        'max-height': '5rem',
        'background-color': '#040404'
      });

      $('#pace').css({
        'display': 'block',
        'visibility': 'visible',
        'right': 'calc(50% - 9px)',
        'top': 'calc(2.5rem - 9px)'
      });

      $('#pace .pace-activity').css({
        'border-width': '3px',
        'width': '18px',
        'height': '18px',
        'border-top-color': '#fff',
        'border-left-color': '#fff'
      });
    });

    $(document).ajaxStop(function(){
      $('#loading-overlay').css({
        'display': 'none',
        'max-height': 'none',
        'background-color': '#fff'
      });

      $('#pace').css({
        'display': 'none',
        'visibility': 'hidden',
        'right': '1rem',
        'top': '1rem'
      });

      $('#pace .pace-activity').css({
        'border-width': '2px',
        'width': '14px',
        'height': '14px',
        'border-top-color': '#040404',
        'border-left-color': '#040404'
      });
    });

    $(window).on('resize', function(){
      $('.carousel').carousel();
    });

    /***
    **
    *
    Functions
    *
    **
    ***/

    String.prototype.replaceAt = function(index, replacement) {
        return this.substr(0, index) + replacement + this.substr(index + replacement.length);
    }
    Date.prototype.getMonthName = function() {
      var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      return months[this.getMonth()];
    }
    function createScheduler(scheduler){
      customButtons = scheduler.customButtons || false;
      editable = scheduler.editable || false;
      droppable = scheduler.droppable || false;
      eventDrop = scheduler.eventDrop || false;
      navLinks = scheduler.navLinks || false;
      drop = scheduler.drop || false;

      var calendarContent = {
        header: scheduler.header,
        eventLimit: true,
        events: scheduler.events,
        eventRender: function(event, element, view) {
          if (typeof event.id != 'undefined'){
            $(element).attr('data-hash', event.id);
          }

          switch (view.type) {
            case 'agendaDay':
              if(event.photo){
                if (event.allDay){
                  $(element).find('.fc-content').prepend('<div class="fc-photo"><img src="' + event.photo + '" /></div>');
                }else{
                  $(element).find('.fc-content').prepend('<div class="fc-photo"><img src="' + event.photo + '" /></div>');
                }
              }
              break;
            case 'agendaWeek':
              if(event.photo){
                if (event.allDay){
                  $(element).find('.fc-content').prepend('<div class="fc-photo"><img src="' + event.photo + '" /></div>');
                }else{
                  $(element).find('.fc-content').prepend('<div class="fc-photo"><img src="' + event.photo + '" /></div>');
                }
              }
              break;
          }
        },
      };

      if (customButtons){
        calendarContent.customButtons = customButtons;
      }

      if (editable){
        calendarContent.editable = editable;
      }

      if (droppable){
        calendarContent.droppable = droppable;
      }

      if (navLinks){
        calendarContent.navLinks = navLinks;
      }

      if (eventDrop){
        calendarContent.eventDrop = eventDrop;
      }

      if (drop){
        calendarContent.drop = drop;
      }

    	$(scheduler.element).fullCalendar(calendarContent);
    }
    function getDefaultMonthValue(defaultMonth){
      var defaultMonthVal = '';

      switch (defaultMonth) {
        case 1:
          defaultMonthVal += 'تا انتهای ماه بعد';
          break;
        case 3:
          defaultMonthVal += 'تا انتهای سه‌ماه بعد';
          break;
        case 6:
          defaultMonthVal += 'تا انتهای شش‌ماه بعد';
          break;
        case 12:
          defaultMonthVal += 'تا انتهای سال بعد';
          break;
        case 24:
          defaultMonthVal += 'تا انتهای دوسال بعد';
          break;
      }

      return defaultMonthVal;
    }
    function coefficientForDifferenceInPeriod(periodDifference, defaultTime){
      var coeff = 1;

      switch (periodDifference) {
        case defaultTime * 3:
          coeff = 0.9;
          break;
        case defaultTime * 6:
          coeff = 0.8;
          break;
        case defaultTime * 12:
          coeff = 0.7;
          break;
        case defaultTime * 24:
          coeff = 0.6;
          break;
      }

      return coeff;
    }
    function coefficientForDifferenceInFollower(followersDifference){
      if (followersDifference <= 15000){
        return 0.75;
      }else if (followersDifference > 15000 && followersDifference <= 25000){
        return 0.80;
      }else if (followersDifference > 25000 && followersDifference <= 35000){
        return 0.85;
      }else{
        return 0.95;
      }
    }
    function pricePeriodMonth(defaultMonth){
      var basePrice;

      switch (defaultMonth) {
        case 1:
          basePrice = 100000;
          break;
        case 3:
          basePrice = 150000;
          break;
        case 6:
          basePrice = 250000;
          break;
        case 12:
          basePrice = 440000;
          break;
        case 24:
          basePrice = 780000;
          break;
      }

      return basePrice;
    }
    function checkout(service){
      var price = {
        total: 0
      },
      targetPeriod = (new Date(service.target.period)).getTime(),
      createdAt = (new Date(service.created_at)).getTime(),
      periodDifference = targetPeriod - createdAt,
      defaultMonth = periodDifference / (1000 * 60 * 60 * 24 * 30),
      defaultTime = 1000 * 60 * 60 * 24 * 30 * defaultMonth,
      periodCoefficient = coefficientForDifferenceInPeriod(periodDifference, defaultTime),
      pricePerPeriodMonth = pricePeriodMonth(defaultMonth);

      price.monthly = {
        raw: pricePerPeriodMonth
      }

      if (!service.customized){
        price.monthly.processed = periodCoefficient * pricePerPeriodMonth;
        price.total += price.monthly.processed;
      }else{
        price.monthly.processed = periodCoefficient * pricePerPeriodMonth;
        price.total += price.monthly.processed;

        var planFollower;

        switch (service.plan.english.toLowerCase().replace(/ +/ig, '-')) {
          case 'starter':
            planFollower = 1000;
            break;
          case 'semi-starter':
            planFollower = 3000;
            break;
          case 'semi-intermediate':
            planFollower = 8000;
            break;
          case 'intermediate':
            planFollower = 15000;
            break;
          case 'enterprise':
            planFollower = 25000;
            break;
          case 'expert':
            planFollower = 30000;
            break;
        }

        if (service.target.followers != planFollower){
          var followersDifference = service.target.followers - planFollower;
              followerCoefficient = coefficientForDifferenceInFollower(followersDifference);

          price.followers = Math.round(followerCoefficient * (followersDifference / 1000))
          price.total += price.followers;
        }
      }

      return price;
    }

    function appendCreditSession(dataKey, dataContent){
      var credit = Cookies.get('credit');

      if (!credit){
        credit = {};
      }else{
        credit = JSON.parse(credit);
      }

      credit[dataKey] = dataContent;

      Cookies.set('credit', JSON.stringify(credit));
    }

    function appendServiceSession(dataKey, dataContent){
      var service = Cookies.get('service');

      if (!service){
        service = {};
      }else{
        service = JSON.parse(service);
      }

      if (dataKey == 'hashtags' || dataKey == 'locations' || dataKey == 'periods'){
        if (!service.micro_services){
          service.micro_services = {};
        }

        service.micro_services[dataKey] = dataContent;
      }else{
        service[dataKey] = dataContent;
      }

      Cookies.set('service', JSON.stringify(service));
    }

    function analyzedHashtags(){
      return [{
        tag: '#instanature',
        data: 3000,
        type: 'hashtag'
      }, {
        tag: '#instaartist',
        data: 24,
        type: 'hashtag'
      }, {
        tag: '#instafitness',
        data: 2,
        type: 'hashtag'
      }];
    }
    function analyzedLocations(){
      return [
        {lat: 35.76909663604188, lng: 51.45969271659851},
        {lat: 35.781631070592056, lng: 51.37935519218445},
        {lat: 35.79611284503807, lng: 51.43291354179382},
        {lat: 35.734825768432756, lng: 51.43325686454773},
        {lat: 35.69356971947041, lng: 51.436346769332886},
        {lat: 35.713364137980875, lng: 51.42124056816101},
        {lat: 35.72395631456603, lng: 51.49024844169617},
        {lat: 35.72451375853924, lng: 51.3381564617157}
      ];
    }
    function analyzedPeriods(){
      return [
        {
          text: {
            first: '۱۲:۰۰ قبل‌ازظهر',
            second: '۰۲:۰۰ قبل‌ازظهر'
          },
          data: {
            first: 0,
            second: 7200
          }
        },
        {
          text: {
            first: '۰۸:۰۰ قبل‌ازظهر',
            second: '۱۰:۰۰ قبل‌ازظهر'
          },
          data: {
            first: 28800,
            second: 36000
          }
        },
        {
          text: {
            first: '۰۵:۰۰ بعدازظهر',
            second: '۰۷:۰۰ بعدازظهر'
          },
          data: {
            first: 61200,
            second: 68400
          }
        }
      ];
    }

    function loadHashtagMicroService(analyzedHashtags){
      $('ul.tabs').tabs('select_tab', 'hashtag-service-details');

      $('#hashtag-service-details hashtags .chips').material_chip({
        data: analyzedHashtags
      });

      if ( LBSC == 'checked' ){
        $('#define-first-level-micro-service-btn').html('تنظمیات مربوط به <span>موقعیت جغرافیایی</span>');
      }else if ( PBSC == 'checked' ){
        $('#define-first-level-micro-service-btn').html('تنظمیات مربوط به <span>سرویس زمان‌بندی</span>');
      }else{
        $('#define-first-level-micro-service-btn').html('احراز حساب کاربری');
      }
    }

    function loadAuthenticationLevel(){
      var service = JSON.parse(Cookies.get('service'));

      $('ul.tabs').tabs('select_tab', 'authentication-level-details');

      $('#authentication-level-details h3.bold span').html(service.type);
    }

    function loadAuthorizationLevel(){
      var service = JSON.parse(Cookies.get('service')),
          params = {};

      switch (service.type.english.toLowerCase()) {
        case 'instagram':
          $.getJSON("/api/instagram/users?access_token=" + service.owner.access_token, function(res){
            if (res.meta.code == 200){
              var authorizedDetails = $('#authorized-details .aside'),
                  user = res.data;

              service.owner = user;
              appendServiceSession('owner', service.owner);

              authorizedDetails.find('.photo .service-photo').css('background-image', 'url(' + user.picture + ')');
              authorizedDetails.find('.details h3.bold').html(user.username);

              if (typeof user.website != 'undefined'){
                authorizedDetails.find('.details').append(
                  '<span>' +
                    '<strong>' +
                      user.website +
                    '</strong>' +
                  '</span>'
                );
              }

              if (typeof user.biography != 'undefined'){
                authorizedDetails.find('.details').append(
                  '<p>' +
                    user.biography +
                  '</p>'
                );
              }

              $('ul.tabs').tabs('select_tab', 'authorized-details');
            }else{
              Materialize.toast(res.meta.error_message, 4000);
            }
          })
          break;
        case 'twitter':
          alert('تعریف نشده است')
          break;
      }
    }

    function ZoomControl(controlDiv, map) {
       var zoominControlUI = document.createElement('div');
       zoominControlUI.className += 'zoomin';
       controlDiv.appendChild(zoominControlUI);

       var zoominControlText = document.createElement('div');
       zoominControlText.innerHTML = '<i class="fa fa-plus" aria-hidden="true"></i>';
       zoominControlUI.appendChild(zoominControlText);

       var zoomoutControlUI = document.createElement('div');
       zoomoutControlUI.className += 'zoomout';
       controlDiv.appendChild(zoomoutControlUI);

       var zoomoutControlText = document.createElement('div');
       zoomoutControlText.innerHTML = '<i class="fa fa-minus" aria-hidden="true"></i>';
       zoomoutControlUI.appendChild(zoomoutControlText);

       zoominControlUI.addEventListener('click', function() {
         map.setZoom(map.getZoom() + 1);
       });

       zoomoutControlUI.addEventListener('click', function() {
         map.setZoom(map.getZoom() - 1);
       });
     }

     function CorporateControl(controlDiv, map) {
        var corporateBrandUI = document.createElement('div');
        corporateBrandUI.className += 'corporate-brand unselectable left';
        corporateBrandUI.innerHTML = '<a href="/">Gem Follow</a>';
        controlDiv.appendChild(corporateBrandUI);

        var corporateDetailUI = document.createElement('div');
        corporateDetailUI.className += 'corporate-detail unselectable';
        corporateDetailUI.innerHTML = 'Map data ©2017 Google, ZENRIN | <a href="https://www.google.com/intl/en-US_US/help/terms_maps.html">Terms of Use</a>';
        controlDiv.appendChild(corporateDetailUI);
      }

      function addHellip(str, len){
        var editedStr = str.substr(0, len - 1);

        if ( editedStr[editedStr.length - 1] != ' ' ){
          return editedStr + ' &hellip;';
        }else{
          return editedStr + '&hellip;';
        }
      }

      function placeMarker(location, map){
        $.getJSON("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + location.lat + "," + location.lng + "&sensor=true&key=AIzaSyCQQwxmPEZPNchzrARjmY5RRpr5gzVqSWA", function(locations){
          if ( locations.status != 'ZERO_RESULTS' ){
            var marker = new google.maps.Marker({
              position: location,
              map: map,
              icon: '/vendors/images/ui/pin.png'
            });

            var locations = locations.results,
                formatted_address = locations[0].formatted_address;

            $('#location-service-details hashtags .chips').append('<div class="chip" title="' + formatted_address + '" data-value="' + formatted_address + '" data-latitude="' + location.lat + '" data-longitude="' + location.lng + '">' + addHellip(formatted_address, 20) + '<i class="material-icons close">close</i></div>');
          }else{
            Materialize.toast('لطفاً یک آدرس صحیح وارد نمایید!', 4000);
          }
        });
      }

      function loadLocationMicroService(analyzedLocations){
        $('ul.tabs').tabs('select_tab', 'location-service-details');

        //$('#location-service-details hashtags .chips').material_chip();

        /*if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var currentLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };*/

            var currentLocation = {
                lat: 35.6935862,
                lng: 51.4426304
            };

            map = new google.maps.Map(document.getElementById('map'), {
              name: '#map',
              zoom: 16,
              center: currentLocation,
              mapTypeControl: false,
              zoomControl: false,
              streetViewControl: false,
              fullscreenControl: false,
              styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
            });

            var zoomControlDiv = document.createElement('div');
                zoomControlDiv.id += 'zoom-control';
            var zoomControl = new ZoomControl(zoomControlDiv, map);

            map.controls[google.maps.ControlPosition.TOP_LEFT].push(zoomControlDiv);

            var corporateControlDiv = document.createElement('div');
                corporateControlDiv.id += 'corporate';
            var corporateControl = new CorporateControl(corporateControlDiv, map);

            map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(corporateControlDiv);

            google.maps.event.addListener(map, 'click', function(event) {
              var location = {
                lat: event.latLng.lat(),
                lng: event.latLng.lng()
              };

              placeMarker(location, map);
            });

            placeMarker(currentLocation, map);

            var positions = analyzedLocations;
            for (var i = 0; i < positions.length; i++) {
              placeMarker(positions[i], map);
            }
          /*});
        }*/

        if ( PBSC == 'checked' ){
          $('#define-second-level-micro-service-btn').html('تنظمیات مربوط به <span>سرویس زمان‌بندی</span>');
        }else{
          $('#define-second-level-micro-service-btn').html('احراز حساب کاربری');
        }
      }

      function loadPeriodMicroService(analyzedPeriods){
        $('ul.tabs').tabs('select_tab', 'period-service-details');

        for (var i = 0; i < analyzedPeriods.length; i++) {
          period = analyzedPeriods[i];
          periods = {
            first: {
              value: period.data.first,
              text: period.text.first
            },
            second: {
              value: period.data.second,
              text: period.text.second
            }
          };

          $('#period-service-details hashtags .chips').append('<div class="chip" data-first-value="' +
          period.data.first + '" data-second-value="' +
          period.text.second + '"><span>' + period.text.first + '</span>، <span>' + period.text.second +
          '</span><i class="material-icons close">close</i></div>');
        }

        var today = new Date(),
            now = (today.getHours() * 60 * 60) + today.getMinutes() * 60;

        var targetPeriods = document.getElementById('target-periods');

        noUiSlider.create(targetPeriods, {
          start: [now, 2 * 60 * 60 + now],
          range: {
            'min': 0,
            'max': 60 * 60 * 24
          },
          step: 60 * 60 * 2,
          tooltips: [
            wNumb({
              decimals: 0,
              edit: function(value){
                var hours = Math.floor(value / (60 * 60)),
                    minutes = Math.floor((value % (60 * 60)) / 60),
                    meridiem = '',
                    twelveHours;

                if (hours > 12){
                  twelveHours = hours - 12;
                  meridiem = 'بعدازظهر';
                }else{
                  twelveHours = (hours != 0)? hours: 12;
                  meridiem = 'قبل‌ازظهر';
                }

                twelveHours = (twelveHours.toString().length > 1)? twelveHours: '0' + twelveHours;
                minutes = (minutes.toString().length > 1)? minutes: '0' + minutes;

                return '<span data-value="' + value + '">' + _convertDigitsToPersian(twelveHours + ':' + minutes) + ' ' + meridiem + '</span>';
              }
            }),
            wNumb({
              decimals: 0,
              edit: function(value){
                var hours = Math.floor(value / (60 * 60)),
                    minutes = Math.floor((value % (60 * 60)) / 60),
                    meridiem = '',
                    twelveHours;

                if (hours > 12){
                  twelveHours = hours - 12;
                  meridiem = 'بعدازظهر';
                }else{
                  twelveHours = (hours != 0)? hours: 12;
                  meridiem = 'قبل‌ازظهر';
                }

                twelveHours = (twelveHours.toString().length > 1)? twelveHours: '0' + twelveHours;
                minutes = (minutes.toString().length > 1)? minutes: '0' + minutes;

                return '<span data-value="' + value + '">' + _convertDigitsToPersian(twelveHours + ':' + minutes) + ' ' + meridiem + '</span>';
              }
            })
          ],
          connect: [false, true, false]/*,
          pips: {
            mode: 'values',
            stepped: true,
            values: [2, 10, 25, 50],
            density: 6,
            format: wNumb({
              decimals: 0,
              postfix: 'K'
            })
          }*/
        });

        var overlayID = 0,
            firstPeriod,
            secondPeriod,
            periods = {};

        $('#period-service-details #period-modal').on('click', function(e){
          if ($(e.target).hasClass('modal-set')){
            $(this).closeModal({
              complete: function(){
                $('#period-service-details hashtags .chips').append('<div class="chip" data-first-value="' +
                periods.first.value + '" data-second-value="' +
                periods.second.value + '"><span>' + periods.first.text + '</span>, <span>' + periods.second.text +
                '</span><i class="material-icons close">close</i></div>');

                targetPeriods.noUiSlider.set([now, 2 * 60 * 60 + now]);
                $('#set-period').fadeOut(300);
              }
            });
          }
        });

        $(document).on('click', function(e){
          if ($(e.target).hasClass('lean-overlay')){
            targetPeriods.noUiSlider.set([now, 2 * 60 * 60 + now]);
            $('#set-period').fadeOut(300);
          }
        });

        $(document).on('keyup.leanModalmaterialize-lean-overlay-' + overlayID, function(e){
          if (e.keyCode === 27){
            targetPeriods.noUiSlider.set([now, 2 * 60 * 60 + now]);
            $('#set-period').fadeOut(300);
          }
        });

        targetPeriods.noUiSlider.on('change', function(){
          if ($('#set-period').css('display') == 'none'){
            $('#set-period').fadeIn(300);
          }
        });

        $('#set-period a').on('click', function(){
          firstPeriod = $('#target-periods').find('.noUi-origin').eq(0).find('.noUi-tooltip span'),
          secondPeriod = $('#target-periods').find('.noUi-origin').eq(1).find('.noUi-tooltip span'),
          periods = {
            first: {
              value: firstPeriod.data('value'),
              text: firstPeriod.html()
            },
            second: {
              value: secondPeriod.data('value'),
              text: secondPeriod.html()
            }
          };

          if (periods.second.value - periods.first.value <= 2 * 60 * 60){
            $('#period-service-details #period-modal').find('.modal-content p').html(
              'بازه زمانی انتخابی بین ' +
              '<span>' + periods.first.text + '</span> و ' +
              '<span>' + periods.second.text + '</span> می‌باشد.'
            );

            $('#period-service-details #period-modal').openModal({
              ready: function(){
                overlayID++;
              }
            });
          }else{
            Materialize.toast('شما اجازه انتخاب بازه زمانی بیش از ۲ ساعت را ندارید!', 4000);
          }
        });
      }
}(jQuery));
