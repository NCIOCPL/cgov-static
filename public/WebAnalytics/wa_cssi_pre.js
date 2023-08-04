/*
* Set Web Analytics variables for for CSSI sites
*/
var wa_production_report_suite = 'ncienterprise';
var wa_dev_report_suite = 'ncienterprise-dev';
var wa_channel = '';
var wa_search_function_name = '';
var wa_production_url_match = '';
var currentHostname = location.hostname.toLowerCase();
var wa_linkInternalFilters = 'javascript:,' + currentHostname + ',';
wa_production_linkInternalFilters += "itcr.cancer.gov";
var page_URL = document.URL;
var wa_p30 = '';
var wa_p44 = '';

// Set channel, search name, and prod URL 
if (page_URL.indexOf('cssi.cancer.gov') != -1) {
    wa_channel = 'CSSI - OD';
    wa_search_function_name = 'CSSI - OD - Search';
    wa_production_url_match = 'cssi.cancer.gov';
}
else if (page_URL.indexOf('imat.cancer.gov') != -1) {
    wa_channel = 'CSSI - IMAT';
    wa_search_function_name = 'CSSI - IMAT - Search';
    wa_production_url_match = 'imat.cancer.gov';
}
else if (page_URL.indexOf('nano.cancer.gov') != -1) {
    wa_channel = 'CSSI - Nano';
    wa_search_function_name = 'CSSI - Nano - Search';
    wa_production_url_match = 'nano.cancer.gov';
}
else if (page_URL.indexOf('ncl.cancer.gov') != -1) {
    wa_channel = 'CSSI - NCL';
    wa_search_function_name = 'CSSI - NCL - Search';
    wa_production_url_match = 'ncl.cancer.gov';
}
else if (page_URL.indexOf('physics.cancer.gov') != -1) {
    wa_channel = 'CSSI - Physics';
    wa_search_function_name = 'CSSI - Physics - Search';
    wa_production_url_match = 'physics.cancer.gov';
}
else if (page_URL.indexOf('proteomics.cancer.gov') != -1) {
    wa_channel = 'CSSI - Proteomics';
    wa_search_function_name = 'CSSI - Proteomics - Search';
    wa_production_url_match = 'proteomics.cancer.gov';
}
else if (page_URL.indexOf('fundedresearch.cancer.gov') != -1) {
    wa_channel = 'CSSI - Funded Research';
    wa_search_function_name = 'CSSI - Funded Research- Search';
    wa_production_url_match = 'fundedresearch.cancer.gov';
}
else if (page_URL.indexOf('assays.cancer.gov') != -1) { 
    wa_channel = 'CSSI - Assays';
    wa_search_function_name = 'CSSI - Assays- Search';
    wa_production_url_match = 'assays.cancer.gov';
}
else if (page_URL.indexOf('itcr.cancer.gov') != -1) {	
    wa_channel = 'CSSI - ITCR';
    wa_search_function_name = 'CSSI - ITCR - Search';
    wa_production_url_match = 'itcr.cancer.gov';
    wa_is_production_report_suite = true;
}
else {
    wa_channel = 'CSSI dev';
    wa_search_function_name = 'CSSI dev search';
}

// Set Prod or Dev suite depending on URL
if (page_URL.indexOf(wa_production_url_match) != -1 && wa_production_url_match.length > 0)
    var s_account = wa_production_report_suite;
else
    var s_account = wa_dev_report_suite;

var pageNameOverride = currentHostname + location.pathname.toLowerCase();
