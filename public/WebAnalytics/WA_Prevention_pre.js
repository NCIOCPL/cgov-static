var wa_production_report_suite = 'ncienterprise';
var wa_dev_report_suite = 'ncienterprise-dev';
var wa_channel = 'DCP';
var wa_search_function_name = 'DCP Search';
var wa_production_url_match = '';
var currentHostname = location.hostname.toLowerCase();
var wa_linkInternalFilters = 'javascript:,' + currentHostname;
var page_URL = document.URL;


// Set channel, search name, and prod URL 
if (new URL(page_URL).hostname === 'dcp.cancer.gov') {    
    wa_production_url_match = 'dcp.cancer.gov';
}
else if (new URL(page_URL).hostname === 'cpfp.cancer.gov') {
    wa_channel = 'DCP - CPFP';
    wa_search_function_name = 'DCP - CPFP - Search';
    wa_production_url_match = 'cpfp.cancer.gov';
}
else if (new URL(page_URL).hostname === 'glycomics.cancer.gov') {    
    wa_channel = 'DCP - Glycomics';
    wa_search_function_name = 'DCP - Glycomics - Search';
    wa_production_url_match = 'glycomics.cancer.gov';
}
else if (new URL(page_URL).hostname === 'prevention.cancer.gov') {    
    wa_production_url_match = 'prevention.cancer.gov';
}
else {
    wa_channel = 'DCP - other';
}


// Set Prod or Dev suite depending on URL
if (new URL(page_URL).hostname === wa_production_url_match && wa_production_url_match.length > 0) {
    var s_account = wa_production_report_suite;
}
else {
    var s_account = wa_dev_report_suite;
}
var pageNameOverride = currentHostname + location.pathname.toLowerCase();
if(pageNameOverride.toLowerCase() == "dcp.cancer.gov/home") {
    pageNameOverride = "dcp.cancer.gov/";
}