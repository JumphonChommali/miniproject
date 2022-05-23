var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTerrainHybrid_2 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_1325462558_3 = new ol.format.GeoJSON();
var features_1325462558_3 = format_1325462558_3.readFeatures(json_1325462558_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1325462558_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1325462558_3.addFeatures(features_1325462558_3);
var lyr_1325462558_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1325462558_3, 
                style: style_1325462558_3,
                interactive: true,
    title: 'ข้อมูลสถิติปริมาณฝนเฉลี่ย 13 ปี(พ.ศ.2546 - 2558)<br />\
    <img src="styles/legend/1325462558_3_0.png" /> 1000 - 2000 mm/Year<br />\
    <img src="styles/legend/1325462558_3_1.png" /> 2000 - 3000 mm/Year<br />\
    <img src="styles/legend/1325462558_3_2.png" /> 3000 - 4000 mm/Year<br />\
    <img src="styles/legend/1325462558_3_3.png" /> 4000 - 5000 mm/Year<br />'
        });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__4, 
                style: style__4,
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> สถานีตรวจวัดอากาศ'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_GoogleTerrainHybrid_2.setVisible(true);lyr_1325462558_3.setVisible(true);lyr__4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleMaps_1,lyr_GoogleTerrainHybrid_2,lyr_1325462558_3,lyr__4];
lyr_1325462558_3.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM1_EN': 'ADM1_EN', 'ADM1_TH': 'ADM1_TH', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM1_REF': 'ADM1_REF', 'ADM1ALT1EN': 'ADM1ALT1EN', 'ADM1ALT2EN': 'ADM1ALT2EN', 'ADM1ALT1TH': 'ADM1ALT1TH', 'ADM1ALT2TH': 'ADM1ALT2TH', 'ADM0_EN': 'ADM0_EN', 'ADM0_TH': 'ADM0_TH', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'totalrain_mm_2546': 'totalrain_mm_2546', 'totalrain_mm_2547': 'totalrain_mm_2547', 'totalrain_mm_2548': 'totalrain_mm_2548', 'totalrain_mm_2549': 'totalrain_mm_2549', 'totalrain_mm_2550': 'totalrain_mm_2550', 'totalrain_mm_2551': 'totalrain_mm_2551', 'totalrain_mm_2552': 'totalrain_mm_2552', 'totalrain_mm_2553': 'totalrain_mm_2553', 'totalrain_mm_2554': 'totalrain_mm_2554', 'totalrain_mm_2555': 'totalrain_mm_2555', 'totalrain_mm_2556': 'totalrain_mm_2556', 'totalrain_mm_2557': 'totalrain_mm_2557', 'totalrain_mm_2558': 'totalrain_mm_2558', 'totalrain_mm_Average13Y': 'totalrain_mm_Average13Y', });
lyr__4.set('fieldAliases', {'WmoStation': 'WmoStation', 'StationNam': 'StationNam', 'StationN_1': 'StationN_1', 'Province': 'Province', 'date': 'date', 'time': 'time', 'MeanSeaLev': 'MeanSeaLev', 'MeanSeaL_1': 'MeanSeaL_1', 'temperatur': 'temperatur', 'temperat_1': 'temperat_1', 'maxTempera': 'maxTempera', 'maxTempe_1': 'maxTempe_1', 'DifferentF': 'DifferentF', 'Differen_1': 'Differen_1', 'MinTempera': 'MinTempera', 'MinTempe_1': 'MinTempe_1', 'Differen_2': 'Differen_2', 'Differen_3': 'Differen_3', 'RelativeHu': 'RelativeHu', 'Relative_1': 'Relative_1', 'WindDirect': 'WindDirect', 'WindDire_1': 'WindDire_1', 'WindSpeed': 'WindSpeed', 'WindSpeed_': 'WindSpeed_', 'Rainfall': 'Rainfall', 'Rainfall_u': 'Rainfall_u', });
lyr_1325462558_3.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_TH': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM1_REF': 'TextEdit', 'ADM1ALT1EN': 'TextEdit', 'ADM1ALT2EN': 'TextEdit', 'ADM1ALT1TH': 'TextEdit', 'ADM1ALT2TH': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_TH': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'totalrain_mm_2546': 'TextEdit', 'totalrain_mm_2547': 'TextEdit', 'totalrain_mm_2548': 'TextEdit', 'totalrain_mm_2549': 'TextEdit', 'totalrain_mm_2550': 'TextEdit', 'totalrain_mm_2551': 'TextEdit', 'totalrain_mm_2552': 'TextEdit', 'totalrain_mm_2553': 'TextEdit', 'totalrain_mm_2554': 'TextEdit', 'totalrain_mm_2555': 'TextEdit', 'totalrain_mm_2556': 'TextEdit', 'totalrain_mm_2557': 'TextEdit', 'totalrain_mm_2558': 'TextEdit', 'totalrain_mm_Average13Y': 'TextEdit', });
lyr__4.set('fieldImages', {'WmoStation': 'TextEdit', 'StationNam': 'TextEdit', 'StationN_1': 'TextEdit', 'Province': 'TextEdit', 'date': 'DateTime', 'time': 'TextEdit', 'MeanSeaLev': 'TextEdit', 'MeanSeaL_1': 'TextEdit', 'temperatur': 'TextEdit', 'temperat_1': 'TextEdit', 'maxTempera': 'TextEdit', 'maxTempe_1': 'TextEdit', 'DifferentF': 'TextEdit', 'Differen_1': 'TextEdit', 'MinTempera': 'TextEdit', 'MinTempe_1': 'TextEdit', 'Differen_2': 'TextEdit', 'Differen_3': 'TextEdit', 'RelativeHu': 'TextEdit', 'Relative_1': 'TextEdit', 'WindDirect': 'TextEdit', 'WindDire_1': 'TextEdit', 'WindSpeed': 'TextEdit', 'WindSpeed_': 'TextEdit', 'Rainfall': 'TextEdit', 'Rainfall_u': 'TextEdit', });
lyr_1325462558_3.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM1_EN': 'no label', 'ADM1_TH': 'no label', 'ADM1_PCODE': 'no label', 'ADM1_REF': 'no label', 'ADM1ALT1EN': 'no label', 'ADM1ALT2EN': 'no label', 'ADM1ALT1TH': 'no label', 'ADM1ALT2TH': 'no label', 'ADM0_EN': 'no label', 'ADM0_TH': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'totalrain_mm_2546': 'no label', 'totalrain_mm_2547': 'no label', 'totalrain_mm_2548': 'no label', 'totalrain_mm_2549': 'no label', 'totalrain_mm_2550': 'no label', 'totalrain_mm_2551': 'no label', 'totalrain_mm_2552': 'no label', 'totalrain_mm_2553': 'no label', 'totalrain_mm_2554': 'no label', 'totalrain_mm_2555': 'no label', 'totalrain_mm_2556': 'no label', 'totalrain_mm_2557': 'no label', 'totalrain_mm_2558': 'no label', 'totalrain_mm_Average13Y': 'no label', });
lyr__4.set('fieldLabels', {'WmoStation': 'no label', 'StationNam': 'no label', 'StationN_1': 'no label', 'Province': 'no label', 'date': 'no label', 'time': 'no label', 'MeanSeaLev': 'no label', 'MeanSeaL_1': 'no label', 'temperatur': 'no label', 'temperat_1': 'no label', 'maxTempera': 'no label', 'maxTempe_1': 'no label', 'DifferentF': 'no label', 'Differen_1': 'no label', 'MinTempera': 'no label', 'MinTempe_1': 'no label', 'Differen_2': 'no label', 'Differen_3': 'no label', 'RelativeHu': 'no label', 'Relative_1': 'no label', 'WindDirect': 'no label', 'WindDire_1': 'no label', 'WindSpeed': 'no label', 'WindSpeed_': 'no label', 'Rainfall': 'no label', 'Rainfall_u': 'no label', });
lyr__4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});