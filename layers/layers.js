ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31984").setExtent([292099.906681, 8584398.450658, 313849.893273, 8592594.241060]);
var wms_layers = [];

var format_PerimetroBDNPABarraVerde_Banco_DadosNacional_0 = new ol.format.GeoJSON();
var features_PerimetroBDNPABarraVerde_Banco_DadosNacional_0 = format_PerimetroBDNPABarraVerde_Banco_DadosNacional_0.readFeatures(json_PerimetroBDNPABarraVerde_Banco_DadosNacional_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_PerimetroBDNPABarraVerde_Banco_DadosNacional_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PerimetroBDNPABarraVerde_Banco_DadosNacional_0.addFeatures(features_PerimetroBDNPABarraVerde_Banco_DadosNacional_0);
var lyr_PerimetroBDNPABarraVerde_Banco_DadosNacional_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PerimetroBDNPABarraVerde_Banco_DadosNacional_0, 
                style: style_PerimetroBDNPABarraVerde_Banco_DadosNacional_0,
                popuplayertitle: 'Perimetro-BDN-PA-Barra-Verde_Banco_Dados-Nacional',
                interactive: true,
                title: '<img src="styles/legend/PerimetroBDNPABarraVerde_Banco_DadosNacional_0.png" /> Perimetro-BDN-PA-Barra-Verde_Banco_Dados-Nacional'
            });
var format_AssentamentoconfrontanteaoPABarraVerdeassentamento_brasil_ba_1 = new ol.format.GeoJSON();
var features_AssentamentoconfrontanteaoPABarraVerdeassentamento_brasil_ba_1 = format_AssentamentoconfrontanteaoPABarraVerdeassentamento_brasil_ba_1.readFeatures(json_AssentamentoconfrontanteaoPABarraVerdeassentamento_brasil_ba_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_AssentamentoconfrontanteaoPABarraVerdeassentamento_brasil_ba_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AssentamentoconfrontanteaoPABarraVerdeassentamento_brasil_ba_1.addFeatures(features_AssentamentoconfrontanteaoPABarraVerdeassentamento_brasil_ba_1);
var lyr_AssentamentoconfrontanteaoPABarraVerdeassentamento_brasil_ba_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AssentamentoconfrontanteaoPABarraVerdeassentamento_brasil_ba_1, 
                style: style_AssentamentoconfrontanteaoPABarraVerdeassentamento_brasil_ba_1,
                popuplayertitle: 'Assentamento-confrontante-ao-PA-Barra-Verde — assentamento_brasil_ba',
                interactive: true,
                title: '<img src="styles/legend/AssentamentoconfrontanteaoPABarraVerdeassentamento_brasil_ba_1.png" /> Assentamento-confrontante-ao-PA-Barra-Verde — assentamento_brasil_ba'
            });
var format_confrontantesPABarraVerdesigef_brasil_ba_112025_2 = new ol.format.GeoJSON();
var features_confrontantesPABarraVerdesigef_brasil_ba_112025_2 = format_confrontantesPABarraVerdesigef_brasil_ba_112025_2.readFeatures(json_confrontantesPABarraVerdesigef_brasil_ba_112025_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_confrontantesPABarraVerdesigef_brasil_ba_112025_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_confrontantesPABarraVerdesigef_brasil_ba_112025_2.addFeatures(features_confrontantesPABarraVerdesigef_brasil_ba_112025_2);
var lyr_confrontantesPABarraVerdesigef_brasil_ba_112025_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_confrontantesPABarraVerdesigef_brasil_ba_112025_2, 
                style: style_confrontantesPABarraVerdesigef_brasil_ba_112025_2,
                popuplayertitle: 'confrontantes-PA-Barra-Verde — sigef_brasil_ba_112025',
                interactive: true,
                title: '<img src="styles/legend/confrontantesPABarraVerdesigef_brasil_ba_112025_2.png" /> confrontantes-PA-Barra-Verde — sigef_brasil_ba_112025'
            });
var format_lote_3 = new ol.format.GeoJSON();
var features_lote_3 = format_lote_3.readFeatures(json_lote_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_lote_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lote_3.addFeatures(features_lote_3);
var lyr_lote_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lote_3, 
                style: style_lote_3,
                popuplayertitle: 'lote',
                interactive: true,
                title: '<img src="styles/legend/lote_3.png" /> lote'
            });
var format_preprojeto_PA_BARRA_VERDE_SIRGASUTM24_4 = new ol.format.GeoJSON();
var features_preprojeto_PA_BARRA_VERDE_SIRGASUTM24_4 = format_preprojeto_PA_BARRA_VERDE_SIRGASUTM24_4.readFeatures(json_preprojeto_PA_BARRA_VERDE_SIRGASUTM24_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_preprojeto_PA_BARRA_VERDE_SIRGASUTM24_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_preprojeto_PA_BARRA_VERDE_SIRGASUTM24_4.addFeatures(features_preprojeto_PA_BARRA_VERDE_SIRGASUTM24_4);
var lyr_preprojeto_PA_BARRA_VERDE_SIRGASUTM24_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_preprojeto_PA_BARRA_VERDE_SIRGASUTM24_4, 
                style: style_preprojeto_PA_BARRA_VERDE_SIRGASUTM24_4,
                popuplayertitle: 'pre-projeto_PA_BARRA_VERDE_SIRGASUTM24',
                interactive: true,
                title: '<img src="styles/legend/preprojeto_PA_BARRA_VERDE_SIRGASUTM24_4.png" /> pre-projeto_PA_BARRA_VERDE_SIRGASUTM24'
            });
var format_FAZENDASANTAMARINA_vertice_5 = new ol.format.GeoJSON();
var features_FAZENDASANTAMARINA_vertice_5 = format_FAZENDASANTAMARINA_vertice_5.readFeatures(json_FAZENDASANTAMARINA_vertice_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_FAZENDASANTAMARINA_vertice_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FAZENDASANTAMARINA_vertice_5.addFeatures(features_FAZENDASANTAMARINA_vertice_5);
var lyr_FAZENDASANTAMARINA_vertice_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FAZENDASANTAMARINA_vertice_5, 
                style: style_FAZENDASANTAMARINA_vertice_5,
                popuplayertitle: 'FAZENDA SANTA MARINA_vertice',
                interactive: true,
                title: '<img src="styles/legend/FAZENDASANTAMARINA_vertice_5.png" /> FAZENDA SANTA MARINA_vertice'
            });
var format_v2_Poligono_Extraido_ODS_Perimetropoligonos_wgs84_corrigido_6 = new ol.format.GeoJSON();
var features_v2_Poligono_Extraido_ODS_Perimetropoligonos_wgs84_corrigido_6 = format_v2_Poligono_Extraido_ODS_Perimetropoligonos_wgs84_corrigido_6.readFeatures(json_v2_Poligono_Extraido_ODS_Perimetropoligonos_wgs84_corrigido_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_v2_Poligono_Extraido_ODS_Perimetropoligonos_wgs84_corrigido_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_v2_Poligono_Extraido_ODS_Perimetropoligonos_wgs84_corrigido_6.addFeatures(features_v2_Poligono_Extraido_ODS_Perimetropoligonos_wgs84_corrigido_6);
var lyr_v2_Poligono_Extraido_ODS_Perimetropoligonos_wgs84_corrigido_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_v2_Poligono_Extraido_ODS_Perimetropoligonos_wgs84_corrigido_6, 
                style: style_v2_Poligono_Extraido_ODS_Perimetropoligonos_wgs84_corrigido_6,
                popuplayertitle: 'v2_Poligono_Extraido_ODS_Perimetro — poligonos_wgs84_corrigido',
                interactive: true,
                title: '<img src="styles/legend/v2_Poligono_Extraido_ODS_Perimetropoligonos_wgs84_corrigido_6.png" /> v2_Poligono_Extraido_ODS_Perimetro — poligonos_wgs84_corrigido'
            });
var format_v2_Vertices_Extraidos_ODS_Perimetrovertices_extraidos_7 = new ol.format.GeoJSON();
var features_v2_Vertices_Extraidos_ODS_Perimetrovertices_extraidos_7 = format_v2_Vertices_Extraidos_ODS_Perimetrovertices_extraidos_7.readFeatures(json_v2_Vertices_Extraidos_ODS_Perimetrovertices_extraidos_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31984'});
var jsonSource_v2_Vertices_Extraidos_ODS_Perimetrovertices_extraidos_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_v2_Vertices_Extraidos_ODS_Perimetrovertices_extraidos_7.addFeatures(features_v2_Vertices_Extraidos_ODS_Perimetrovertices_extraidos_7);
var lyr_v2_Vertices_Extraidos_ODS_Perimetrovertices_extraidos_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_v2_Vertices_Extraidos_ODS_Perimetrovertices_extraidos_7, 
                style: style_v2_Vertices_Extraidos_ODS_Perimetrovertices_extraidos_7,
                popuplayertitle: 'v2_Vertices_Extraidos_ODS_Perimetro — vertices_extraidos',
                interactive: true,
                title: '<img src="styles/legend/v2_Vertices_Extraidos_ODS_Perimetrovertices_extraidos_7.png" /> v2_Vertices_Extraidos_ODS_Perimetro — vertices_extraidos'
            });

lyr_PerimetroBDNPABarraVerde_Banco_DadosNacional_0.setVisible(false);lyr_AssentamentoconfrontanteaoPABarraVerdeassentamento_brasil_ba_1.setVisible(true);lyr_confrontantesPABarraVerdesigef_brasil_ba_112025_2.setVisible(true);lyr_lote_3.setVisible(false);lyr_preprojeto_PA_BARRA_VERDE_SIRGASUTM24_4.setVisible(false);lyr_FAZENDASANTAMARINA_vertice_5.setVisible(false);lyr_v2_Poligono_Extraido_ODS_Perimetropoligonos_wgs84_corrigido_6.setVisible(true);lyr_v2_Vertices_Extraidos_ODS_Perimetrovertices_extraidos_7.setVisible(true);
var layersList = [lyr_PerimetroBDNPABarraVerde_Banco_DadosNacional_0,lyr_AssentamentoconfrontanteaoPABarraVerdeassentamento_brasil_ba_1,lyr_confrontantesPABarraVerdesigef_brasil_ba_112025_2,lyr_lote_3,lyr_preprojeto_PA_BARRA_VERDE_SIRGASUTM24_4,lyr_FAZENDASANTAMARINA_vertice_5,lyr_v2_Poligono_Extraido_ODS_Perimetropoligonos_wgs84_corrigido_6,lyr_v2_Vertices_Extraidos_ODS_Perimetrovertices_extraidos_7];
lyr_PerimetroBDNPABarraVerde_Banco_DadosNacional_0.set('fieldAliases', {'fid': 'fid', 'cd_sipra': 'cd_sipra', 'uf': 'uf', 'nome_proje': 'nome_proje', 'municipio': 'municipio', 'area_hecta': 'area_hecta', 'capacidade': 'capacidade', 'num_famili': 'num_famili', 'fase': 'fase', 'data_de_cr': 'data_de_cr', 'forma_obte': 'forma_obte', 'data_obten': 'data_obten', 'area_calc_': 'area_calc_', 'sr': 'sr', 'descricao_': 'descricao_', });
lyr_AssentamentoconfrontanteaoPABarraVerdeassentamento_brasil_ba_1.set('fieldAliases', {'fid': 'fid', 'cd_sipra': 'cd_sipra', 'uf': 'uf', 'nome_proje': 'nome_proje', 'municipio': 'municipio', 'area_hecta': 'area_hecta', 'capacidade': 'capacidade', 'num_famili': 'num_famili', 'fase': 'fase', 'data_de_cr': 'data_de_cr', 'forma_obte': 'forma_obte', 'data_obten': 'data_obten', 'area_calc_': 'area_calc_', 'sr': 'sr', 'descricao_': 'descricao_', });
lyr_confrontantesPABarraVerdesigef_brasil_ba_112025_2.set('fieldAliases', {'fid': 'fid', 'parcela_co': 'parcela_co', 'rt': 'rt', 'art': 'art', 'situacao_i': 'situacao_i', 'codigo_imo': 'codigo_imo', 'data_submi': 'data_submi', 'data_aprov': 'data_aprov', 'status': 'status', 'nome_area': 'nome_area', 'registro_m': 'registro_m', 'registro_d': 'registro_d', 'municipio_': 'municipio_', 'uf_id': 'uf_id', });
lyr_lote_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ID_Lote': 'ID_Lote', 'Cod_PA': 'Cod_PA', 'Numero': 'Numero', 'Descricao': 'Descricao', 'Nome_lote': 'Nome_lote', 'Municipio': 'Municipio', 'Tipologia': 'Tipologia', 'CPF': 'CPF', 'Nome_Prop': 'Nome_Prop', 'Tipo_lote': 'Tipo_lote', 'area_ha': 'area_ha', });
lyr_preprojeto_PA_BARRA_VERDE_SIRGASUTM24_4.set('fieldAliases', {'Text': 'Text', 'p_area_ha': 'p_area_ha', });
lyr_FAZENDASANTAMARINA_vertice_5.set('fieldAliases', {'sigma_z': 'sigma_z', 'sigma_y': 'sigma_y', 'sigma_x': 'sigma_x', 'lado': 'lado', 'tipo_verti': 'tipo_verti', 'indice': 'indice', 'metodo_pos': 'metodo_pos', 'vertice': 'vertice', 'qrcode': 'qrcode', });
lyr_v2_Poligono_Extraido_ODS_Perimetropoligonos_wgs84_corrigido_6.set('fieldAliases', {'fid': 'fid', 'ID_Original': 'ID_Original', });
lyr_v2_Vertices_Extraidos_ODS_Perimetrovertices_extraidos_7.set('fieldAliases', {'fid': 'fid', 'Arquivo_Origem': 'Arquivo_Origem', 'Vertice': 'Vertice', 'Longitude_GMS': 'Longitude_GMS', 'Sigma_Lon': 'Sigma_Lon', 'Latitude_GMS': 'Latitude_GMS', 'Sigma_Lat': 'Sigma_Lat', 'Altitude': 'Altitude', 'Sigma_Alt': 'Sigma_Alt', 'Metodo': 'Metodo', 'Tipo_Limite': 'Tipo_Limite', 'cns': 'cns', 'Matricula': 'Matricula', 'Descricao': 'Descricao', });
lyr_PerimetroBDNPABarraVerde_Banco_DadosNacional_0.set('fieldImages', {'fid': 'TextEdit', 'cd_sipra': 'TextEdit', 'uf': 'TextEdit', 'nome_proje': 'TextEdit', 'municipio': 'TextEdit', 'area_hecta': 'TextEdit', 'capacidade': 'Range', 'num_famili': 'Range', 'fase': 'Range', 'data_de_cr': 'TextEdit', 'forma_obte': 'TextEdit', 'data_obten': 'TextEdit', 'area_calc_': 'TextEdit', 'sr': 'TextEdit', 'descricao_': 'TextEdit', });
lyr_AssentamentoconfrontanteaoPABarraVerdeassentamento_brasil_ba_1.set('fieldImages', {'fid': 'TextEdit', 'cd_sipra': 'TextEdit', 'uf': 'TextEdit', 'nome_proje': 'TextEdit', 'municipio': 'TextEdit', 'area_hecta': 'TextEdit', 'capacidade': 'Range', 'num_famili': 'Range', 'fase': 'Range', 'data_de_cr': 'TextEdit', 'forma_obte': 'TextEdit', 'data_obten': 'TextEdit', 'area_calc_': 'TextEdit', 'sr': 'TextEdit', 'descricao_': 'TextEdit', });
lyr_confrontantesPABarraVerdesigef_brasil_ba_112025_2.set('fieldImages', {'fid': 'TextEdit', 'parcela_co': 'TextEdit', 'rt': 'TextEdit', 'art': 'TextEdit', 'situacao_i': 'TextEdit', 'codigo_imo': 'TextEdit', 'data_submi': 'DateTime', 'data_aprov': 'DateTime', 'status': 'TextEdit', 'nome_area': 'TextEdit', 'registro_m': 'TextEdit', 'registro_d': 'DateTime', 'municipio_': 'Range', 'uf_id': 'Range', });
lyr_lote_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ID_Lote': 'TextEdit', 'Cod_PA': 'TextEdit', 'Numero': 'TextEdit', 'Descricao': 'TextEdit', 'Nome_lote': 'TextEdit', 'Municipio': 'TextEdit', 'Tipologia': 'TextEdit', 'CPF': 'TextEdit', 'Nome_Prop': 'TextEdit', 'Tipo_lote': 'TextEdit', 'area_ha': 'TextEdit', });
lyr_preprojeto_PA_BARRA_VERDE_SIRGASUTM24_4.set('fieldImages', {'Text': 'TextEdit', 'p_area_ha': '', });
lyr_FAZENDASANTAMARINA_vertice_5.set('fieldImages', {'sigma_z': 'TextEdit', 'sigma_y': 'TextEdit', 'sigma_x': 'TextEdit', 'lado': 'TextEdit', 'tipo_verti': 'TextEdit', 'indice': 'TextEdit', 'metodo_pos': 'TextEdit', 'vertice': 'TextEdit', 'qrcode': 'TextEdit', });
lyr_v2_Poligono_Extraido_ODS_Perimetropoligonos_wgs84_corrigido_6.set('fieldImages', {'fid': 'TextEdit', 'ID_Original': 'TextEdit', });
lyr_v2_Vertices_Extraidos_ODS_Perimetrovertices_extraidos_7.set('fieldImages', {'fid': 'TextEdit', 'Arquivo_Origem': 'TextEdit', 'Vertice': 'TextEdit', 'Longitude_GMS': 'TextEdit', 'Sigma_Lon': 'TextEdit', 'Latitude_GMS': 'TextEdit', 'Sigma_Lat': 'TextEdit', 'Altitude': 'TextEdit', 'Sigma_Alt': 'TextEdit', 'Metodo': 'TextEdit', 'Tipo_Limite': 'TextEdit', 'cns': 'TextEdit', 'Matricula': 'TextEdit', 'Descricao': 'TextEdit', });
lyr_PerimetroBDNPABarraVerde_Banco_DadosNacional_0.set('fieldLabels', {'fid': 'no label', 'cd_sipra': 'no label', 'uf': 'no label', 'nome_proje': 'no label', 'municipio': 'no label', 'area_hecta': 'no label', 'capacidade': 'no label', 'num_famili': 'no label', 'fase': 'no label', 'data_de_cr': 'no label', 'forma_obte': 'no label', 'data_obten': 'no label', 'area_calc_': 'no label', 'sr': 'no label', 'descricao_': 'no label', });
lyr_AssentamentoconfrontanteaoPABarraVerdeassentamento_brasil_ba_1.set('fieldLabels', {'fid': 'hidden field', 'cd_sipra': 'no label', 'uf': 'no label', 'nome_proje': 'no label', 'municipio': 'no label', 'area_hecta': 'no label', 'capacidade': 'no label', 'num_famili': 'no label', 'fase': 'no label', 'data_de_cr': 'no label', 'forma_obte': 'no label', 'data_obten': 'no label', 'area_calc_': 'no label', 'sr': 'no label', 'descricao_': 'no label', });
lyr_confrontantesPABarraVerdesigef_brasil_ba_112025_2.set('fieldLabels', {'fid': 'hidden field', 'parcela_co': 'no label', 'rt': 'no label', 'art': 'no label', 'situacao_i': 'no label', 'codigo_imo': 'no label', 'data_submi': 'no label', 'data_aprov': 'no label', 'status': 'no label', 'nome_area': 'no label', 'registro_m': 'no label', 'registro_d': 'no label', 'municipio_': 'no label', 'uf_id': 'no label', });
lyr_lote_3.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ID_Lote': 'no label', 'Cod_PA': 'no label', 'Numero': 'no label', 'Descricao': 'no label', 'Nome_lote': 'no label', 'Municipio': 'no label', 'Tipologia': 'no label', 'CPF': 'no label', 'Nome_Prop': 'no label', 'Tipo_lote': 'no label', 'area_ha': 'no label', });
lyr_preprojeto_PA_BARRA_VERDE_SIRGASUTM24_4.set('fieldLabels', {'Text': 'no label', 'p_area_ha': 'no label', });
lyr_FAZENDASANTAMARINA_vertice_5.set('fieldLabels', {'sigma_z': 'no label', 'sigma_y': 'no label', 'sigma_x': 'no label', 'lado': 'no label', 'tipo_verti': 'no label', 'indice': 'no label', 'metodo_pos': 'no label', 'vertice': 'no label', 'qrcode': 'no label', });
lyr_v2_Poligono_Extraido_ODS_Perimetropoligonos_wgs84_corrigido_6.set('fieldLabels', {'fid': 'hidden field', 'ID_Original': 'no label', });
lyr_v2_Vertices_Extraidos_ODS_Perimetrovertices_extraidos_7.set('fieldLabels', {'fid': 'hidden field', 'Arquivo_Origem': 'no label', 'Vertice': 'no label', 'Longitude_GMS': 'no label', 'Sigma_Lon': 'no label', 'Latitude_GMS': 'no label', 'Sigma_Lat': 'no label', 'Altitude': 'no label', 'Sigma_Alt': 'no label', 'Metodo': 'no label', 'Tipo_Limite': 'no label', 'cns': 'no label', 'Matricula': 'no label', 'Descricao': 'no label', });
lyr_v2_Vertices_Extraidos_ODS_Perimetrovertices_extraidos_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});