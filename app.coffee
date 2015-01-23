
#################
L.mapbox.accessToken = "pk.eyJ1IjoiYXJtaW5hdm4iLCJhIjoiSTFteE9EOCJ9.iDzgmNaITa0-q-H_jw1lJw"
map = L.mapbox.map("map", "arminavn.l00353h2").setView([
  42.34
  -71.09
], 16)
textControl = L.Control.extend(
	options:
		position: "topleft"
	onAdd: (map) =>
		_textDomEl = L.DomUtil.create('div', 'container control-info')
		_el = L.DomUtil.create('svg', 'svg')
		map.getPanes().overlayPane.appendChild(_el)
		L.DomUtil.enableTextSelection(_textDomEl)  
		map.getPanes().overlayPane.appendChild(_textDomEl)
		_textDomObj = $(L.DomUtil.get(_textDomEl))
		_textDomObj.css('width', $(map.getContainer())[0].clientWidth/3)
		_textDomObj.css('height', $(map.getContainer())[0].clientHeight)
		_textDomObj.css('background-color', 'white')
		_textDomObj.css('overflow', 'scroll')
		L.DomUtil.setOpacity(L.DomUtil.get(_textDomEl), .8)
		L.DomUtil.setPosition(L.DomUtil.get(_textDomEl), L.point(40, -65), disable3D=0)
)
map.addControl new textControl()

queue().defer(d3.json, "http://localhost:27080/pudb/buildingdb/_find").await (err, data) ->
  draw data
  return
draw = (data) ->
	console.log "data", data