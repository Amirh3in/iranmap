document.addEventListener("DOMContentLoaded", function (event) {
    const jvm_map = $('#iran_map');
    jvm_map.vectorMap({
        map: 'ir_mill',
        enableZoom: false,
        container : $('#iran_map'),
        backgroundColor: 'transparent',
        zoomOnScroll: true,
        normalizeFunction: "polynomial",
        hoverOpacity: .7,
        hoverColor: false,
        regionStyle: {
            initial: {
                fill: '#DCE3E8',
                "fill-opacity": 1,
                stroke: '#fff',
                "stroke-width": 2,
                "stroke-opacity": 1
            }
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
              render: function(code){
                var doNotShow = ['US-RI', 'US-DC', 'US-DE', 'US-MD'];
      
                if (doNotShow.indexOf(code) === -1) {
                  return code.split('_')[1];
                }
              },
              offsets: function(code){
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
            alert('clicked!')
            // console.log(code);
            // console.log(event);

            // ================================ show cities
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
        }
    });
    $('.jvm_back').click(function () {
        $(this).hide();
        $('.jvectormap-container:not(.ir_mill)').remove();
        $('.jvectormap-container.ir_mill').removeClass('ir_mill').show();
    });
});