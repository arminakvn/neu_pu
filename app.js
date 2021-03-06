// Generated by CoffeeScript 1.7.1
(function() {
  var draw, map, textControl;

  L.mapbox.accessToken = "pk.eyJ1IjoiYXJtaW5hdm4iLCJhIjoiSTFteE9EOCJ9.iDzgmNaITa0-q-H_jw1lJw";

  map = L.mapbox.map("map", "arminavn.l00353h2").setView([42.34, -71.09], 16);

  textControl = L.Control.extend({
    options: {
      position: "topleft"
    },
    onAdd: (function(_this) {
      return function(map) {
        var disable3D, _el, _textDomEl, _textDomObj;
        _textDomEl = L.DomUtil.create('div', 'container control-info');
        _el = L.DomUtil.create('svg', 'svg');
        map.getPanes().overlayPane.appendChild(_el);
        L.DomUtil.enableTextSelection(_textDomEl);
        map.getPanes().overlayPane.appendChild(_textDomEl);
        _textDomObj = $(L.DomUtil.get(_textDomEl));
        _textDomObj.css('width', $(map.getContainer())[0].clientWidth / 3);
        _textDomObj.css('height', $(map.getContainer())[0].clientHeight);
        _textDomObj.css('background-color', 'white');
        _textDomObj.css('overflow', 'scroll');
        L.DomUtil.setOpacity(L.DomUtil.get(_textDomEl), .8);
        return L.DomUtil.setPosition(L.DomUtil.get(_textDomEl), L.point(40, -65), disable3D = 0);
      };
    })(this)
  });

  map.addControl(new textControl());

  queue().defer(d3.json, "http://localhost:27080/pudb/buildingdb/_find").await(function(err, data) {
    draw(data);
  });

  draw = function(data) {
    return console.log("data", data);
  };

}).call(this);
