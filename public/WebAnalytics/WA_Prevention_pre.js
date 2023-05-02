var wa_production_report_suite = 'ncienterprise';
var wa_dev_report_suite = 'ncienterprise-dev';
var wa_channel = 'DCP';
var wa_search_function_name = 'DCP Search';
var wa_production_url_match = '';
var currentHostname = location.hostname.toLowerCase();
var wa_linkInternalFilters = 'javascript:,' + currentHostname;
var page_URL = document.URL;


// Set channel, search name, and prod URL 
if (page_URL.indexOf('dcp.cancer.gov') != -1) {    
    wa_production_url_match = 'dcp.cancer.gov';
}
else if (page_URL.indexOf('cpfp.cancer.gov') != -1) {
    wa_channel = 'DCP - CPFP';
    wa_search_function_name = 'DCP - CPFP - Search';
    wa_production_url_match = 'cpfp.cancer.gov';
}
else if (page_URL.indexOf('glycomics.cancer.gov') != -1) {    
    wa_channel = 'DCP - Glycomics';
    wa_search_function_name = 'DCP - Glycomics - Search';
    wa_production_url_match = 'glycomics.cancer.gov';
}
else if (page_URL.indexOf('prevention.cancer.gov') != -1) {    
    wa_production_url_match = 'prevention.cancer.gov';
}
else {
    wa_channel = 'DCP - other';
}


// Set Prod or Dev suite depending on URL
if (page_URL.indexOf(wa_production_url_match) != -1 && wa_production_url_match.length > 0) {
    var s_account = wa_production_report_suite;
}
else {
    var s_account = wa_dev_report_suite;
}
var pageNameOverride = currentHostname + location.pathname.toLowerCase();
if(pageNameOverride.toLowerCase() == "dcp.cancer.gov/home") {
    pageNameOverride = "dcp.cancer.gov/";
}