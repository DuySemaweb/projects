$(function(){
  $.getJSON('wattmap.json', function(data){
    new jvm.Map({
      map: 'world_mill_en',
        regionsSelectableOne: true,
      container: $('#map'),
      series: {
        regions: [{
          scale: {
            '1': '#f2c300',
            '2': '#ffa700',
            '3': '#c19c00'
          },
          attribute: 'fill',
          values: data['prises'].results
        }]
      },
    onRegionOver: function (e, code) {
        
        var map = $('#map').vectorMap('get', 'mapObject');
        
        var image1temp =data.prises.results.produits[code];
        var image2temp =data.prises.results.produits2[code];
        var image1 = image1temp;
        var image2 = image2temp;
        if (image1temp==null){image1 = ""}
        if (image2temp==null){image2 = ""}
        
        customTip.css({
          left: left,
          top: top
        })
        customTip.width(250);
        
        customTip.html('<div style="text-align:center; font-size:18px; font-weight:bold; margin-top:10px; margin-bottom:10px;">'+map.tip.text()+'</div>'
                    + "Produits disponibles"
                    + "<br>"
                    + '<div style="text-align:center; margin-bottom:10px; margin-top:10px;"><img src="'+image1+'" alt=""/> <img src="'+image2+'" alt=""/></div>'
                    + '<div><a target="_blank" href="'+data.prises.results.urlliste[code]+'">Liste des produits</a></div>');
        customTip.show();
        document.body.style.cursor = "pointer";
        customTip.append('<br><br><p style="font-style:italic; font-size:9px; text-align:right;">Fermer</p>');
        customTip.children("p").click(function(){
        customTip.hide(); 
        document.body.style.cursor = "";
        
        }) 
 
    },
    onRegionTipShow: function (e, tip, code) {
        e.preventDefault();
    },
    
       
});
var map = $('#map').vectorMap('get', 'mapObject');
var customTip=$('#customTip');
var left,top;
$('#map').vectorMap('get', 'mapObject').container.mouseout(function(e){
   left = e.pageX + 0;
   top = e.pageY + 20;
    


    });
     });
});

