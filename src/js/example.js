
document.addEventListener("DOMContentLoaded", function (event) {
  const csData = {
    "ir_کیش": 16.63,
    "ir_آذربایجان غربی": 11.58,
    "ir_اردبیل": 158.97,
    "ir_آذربایجان شرقی": 85.81,
    "ir_همدان": 1.1,
    "ir_زنجان": 351.02,
    "ir_کردستان": 8.83,
    "ir_مازندران": 1219.72,
    "ir_قزوین": 366.26,
    "ir_گیلان": 52.17,
    "ir_ایلام": 7.54,
    "ir_لرستان": 21.73,
    "ir_کرمانشاه": 105.4,
    "ir_قم": 3.96,
    "ir_مرکزی": 52.89,
    "ir_البرز": 461.33,
    "ir_تهران": 1.43,
    "ir_چهارمحال بختیاری": 6.49,
    "ir_بوشهر": 1.4,
    "ir_خوزستان": 19.18,
    "ir_کهگیلویه و بویراحمد": 16.2,
    "ir_یزد": 12.5,
    "ir_فارس": 2023.53,
    "ir_اصفهان": 11.96,
    "ir_خراسان رضوی": 44.84,
    "ir_گلستان": 8.67,
    "ir_سمنان": 1.47,
    "ir_خراسان شمالی": 11.36,
    "ir_سیستان و بلوچستان": 21.88,
    "ir_کرمان": 1563.66,
    "ir_هرمزگان": 1.57,
    "ir_خراسان جنوبی": 20.11,
  };
  const jvm_map = $('#iran_map');

  jvm_map.vectorMap({
    map: 'ir_mill',
    panOnDrag: true,
    enableZoom: false,
    container: $('#iran_map'),
    backgroundColor: 'transparent',
    zoomOnScroll: true,
    normalizeFunction: "polynomial",
    hoverOpacity: .7,
    regionsSelectable: true,
    regionsSelectableOne: true,
    hoverColor: false,
    regionStyle: {
      initial: {
          "fill": '#DCE3E8',
          "fill-opacity": 1,
          "stroke": '#fff',
          "stroke-width": 2,
          "stroke-opacity": 1
      }
  },
    focusOn: {
      x: 0.5,
      y: 0.5,
      scale: 1,
      animate: true
    },
    series: {
      regions: [{
        scale: ['#DCE3E8'],
        normalizeFunction: 'polynomial',
        values: csData
      }]
    },
    regionLabelStyle: {
      initial: {
        fill: 'gray',
        'font-size': '10'
      },
      hover: {
        fill: 'white'
      }
    },
    labels: {
      regions: {
        render: function (code) {
          var doNotShow = ['US-RI', 'US-DC', 'US-DE', 'US-MD'];

          if (doNotShow.indexOf(code) === -1) {
            return code.split('_')[1];
          }
        },
        offsets: function (code) {
          return {
            'سمنان': [10, 10],
            'هرمزگان': [10, -15],
            'آذربایجان غربی': [10, 43],
            'آذربایجان شرقی': [-10, 0],
            'گیلان': [0, 15],
            'تهران': [-8, -8],
            'اصفهان': [0, -25],
            'یزد': [00, -15],
            'مرکزی': [-5, 5],
            'کرمان': [0, -30]
          }[code.split('_')[1]];
        }
      }
    },
    onRegionClick: function (event, code) {
      alert(csData[code])

      // ================================ show city
      // if (code !== 'ir_kish') {
      //     const jvm_container = jvm_map.children('.jvectormap-container');
      //     jvm_container.addClass('ir_mill').hide();
      //     $('.jvm_back').show();
      //     setTimeout(function () {
      //         jvm_map.vectorMap({
      //             map: code,
      //             enableZoom: false,
      //             backgroundColor: 'transparent',
      //             zoomOnScroll: true,
      //             normalizeFunction: "polynomial",
      //             hoverOpacity: .7,
      //             hoverColor: false,
      //             regionStyle: {
      //                 initial: {
      //                     fill: '#DCE3E8',
      //                     "fill-opacity": 1,
      //                     stroke: '#fff',
      //                     "stroke-width": 2,
      //                     "stroke-opacity": 1
      //                 }
      //             }
      //         });
      //     }, 300);
      // } else {
      //     event.stopImmediatePropagation();
      // }
    },
  })

  $('.jvm_back').click(function () {
    $(this).hide();
    $('.jvectormap-container:not(.ir_mill)').remove();
    $('.jvectormap-container.ir_mill').removeClass('ir_mill').show();
  });



});
