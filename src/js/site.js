
document.addEventListener("DOMContentLoaded", function (event) {

  var data;
  $(document).ready(function () {

    //====== get data from data.json file
    $.ajax({
      type: "GET",
      url: "../../data.json",
      success: function (res) {
        data = res;
      }
    })
  })

  //========== map settings
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
        values: data
      }]
    },
    regionLabelStyle: {
      initial: {
        fill: 'gray',
        'font-size': '10'
      },
      hover: {
        fill: 'black'
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
            'کرمان': [0, -30],
            'سیستان و بلوچستان': [0, 20]
          }[code.split('_')[1]];
        }
      }
    },

    //================ onClick in each region 
    onRegionClick: function (event, code) {
      alert(data[code])


      // ================================ show city

      //     // if (code !== 'ir_kish') {
      //     //     const jvm_container = jvm_map.children('.jvectormap-container');
      //     //     jvm_container.addClass('ir_mill').hide();
      //     //     $('.jvm_back').show();
      //     //     setTimeout(function () {
      //     //         jvm_map.vectorMap({
      //     //             map: code,
      //     //             enableZoom: false,
      //     //             backgroundColor: 'transparent',
      //     //             zoomOnScroll: true,
      //     //             normalizeFunction: "polynomial",
      //     //             hoverOpacity: .7,
      //     //             hoverColor: false,
      //     //             regionStyle: {
      //     //                 initial: {
      //     //                     fill: '#DCE3E8',
      //     //                     "fill-opacity": 1,
      //     //                     stroke: '#fff',
      //     //                     "stroke-width": 2,
      //     //                     "stroke-opacity": 1
      //     //                 }
      //     //             }
      //     //         });
      //     //     }, 300);
      //     // } else {
      //     //     event.stopImmediatePropagation();
      //     // }
    },
  })


  $('.jvm_back').click(function () {
    $(this).hide();
    $('.jvectormap-container:not(.ir_mill)').remove();
    $('.jvectormap-container.ir_mill').removeClass('ir_mill').show();
  });



});
