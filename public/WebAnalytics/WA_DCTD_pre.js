/*
* Set Web Analytics variables for for GDC sites
*/
var wa_production_report_suite = 'ncienterprise';
var wa_dev_report_suite = 'ncienterprise-dev';
var wa_channel = '';
var wa_search_function_name = '';
var wa_production_url_match = '';
var currentHostname = location.hostname.toLowerCase();
var wa_linkInternalFilters = 'javascript:,ctd.cancer.gov,';
wa_linkInternalFilters += 'imaging.cancer.gov,';
wa_linkInternalFilters += 'nciformulary.cancer.gov,';
wa_linkInternalFilters += 'cdp.cancer.gov,';
wa_linkInternalFilters += 'ctep.cancer.gov,';
wa_linkInternalFilters += 'dtp.cancer.gov,';
wa_linkInternalFilters += 'rrp.cancer.gov,';
wa_linkInternalFilters += 'cam.cancer.gov,';
wa_linkInternalFilters += 'dtc.cancer.gov,';
wa_linkInternalFilters += 'trp.cancer.gov,';
wa_linkInternalFilters += 'brb.nci.nih.gov,';
wa_linkInternalFilters += 'pdmr.cancer.gov,';
wa_linkInternalFilters += 'next.cancer.gov,';
wa_linkInternalFilters += 'nctn-data-archive.nci.nih.gov,';

var page_URL = document.URL;

// Set channel, search name, and prod URL 
if (page_URL.indexOf('dctd.cancer.gov') != -1) {
    wa_channel = 'DCTD - Main';
    wa_search_function_name = 'DCTD - Main Search';
    wa_production_url_match = 'dctd.cancer.gov';
}
else if (page_URL.indexOf('imaging.cancer.gov') != -1) {
    wa_channel = 'DCTD - Imaging';
    wa_search_function_name = 'DCTD - Imaging Search';
    wa_production_url_match = 'imaging.cancer.gov';
}
else if (page_URL.indexOf('nciformulary.cancer.gov') != -1) {
    wa_channel = 'DCTD - Forumulary';
    wa_search_function_name = 'DCTD - Formulary Search';
    wa_production_url_match = 'nciformulary.cancer.gov';
}
else if (page_URL.indexOf('cdp.cancer.gov') != -1) {
    wa_channel = 'DCTD - CDP';
    wa_search_function_name = 'DCTD - CDP Search';
    wa_production_url_match = 'cdp.cancer.gov';
}
else if (page_URL.indexOf('ctep.cancer.gov') != -1) {
    wa_channel = 'DCTD - CTEP';
    wa_search_function_name = 'DCTD - CTEP Search';
    wa_production_url_match = 'ctep.cancer.gov';
}
else if (page_URL.indexOf('dtp.cancer.gov') != -1) {
    wa_channel = 'DCTD - DTP';
    wa_search_function_name = 'DCTD - DTP Search';
    wa_production_url_match = 'dtp.cancer.gov';
}
else if (page_URL.indexOf('rrp.cancer.gov') != -1) {
    wa_channel = 'DCTD - RRP';
    wa_search_function_name = 'DCTD - RRP Search';
    wa_production_url_match = 'rrp.cancer.gov';
}
else if (page_URL.indexOf('cam.cancer.gov') != -1) {
    wa_channel = 'DCTD - CAM';
    wa_search_function_name = 'DCTD - CAM Search';
    wa_production_url_match = 'cam.cancer.gov';
}
else if (page_URL.indexOf('dtc.cancer.gov') != -1) {
    wa_channel = 'DCTD - DTC';
    wa_search_function_name = 'DCTD - DTC Search';
    wa_production_url_match = 'dtc.cancer.gov';
}
else if (page_URL.indexOf('trp.cancer.gov') != -1) {
    wa_channel = 'DCTD - TRP';
    wa_search_function_name = 'DCTD - TRP Search';
    wa_production_url_match = 'trp.cancer.gov';
}
else if (page_URL.indexOf('brb.nci.nih.gov') != -1) {
    wa_channel = 'DCTD - BRB';
    wa_search_function_name = 'DCTD - BRB Search';
    wa_production_url_match = 'brb.nci.nih.gov';
}
else if (page_URL.indexOf('pdmr.cancer.gov') != -1) {
    wa_channel = 'DCTD - PDMR';
    wa_search_function_name = 'DCTD - PDMR Search';
    wa_production_url_match = 'pdmr.cancer.gov';
}
else if (page_URL.indexOf('next.cancer.gov') != -1) {
    wa_channel = 'DCTD - NEXT';
    wa_search_function_name = 'DCTD - NEXT Search';
    wa_production_url_match = 'next.cancer.gov';
}
else if (page_URL.indexOf('nctn-data-archive.nci.nih.gov') != -1) {
    wa_channel = 'DCTD - NCTN Data Archive';
    wa_search_function_name = 'DCTD - NCTN Data Archive Search';
    wa_production_url_match = 'nctn-data-archive.nci.nih.gov';
}
else {
    wa_channel = 'DCTD dev';
    wa_search_function_name = 'DCTD search dev';
}

// Set Prod or Dev suite depending on URL
if (page_URL.indexOf(wa_production_url_match) != -1 && wa_production_url_match.length > 0)
    var s_account = wa_production_report_suite;
else
    var s_account = wa_dev_report_suite;

var pageNameOverride = currentHostname + location.pathname.toLowerCase();