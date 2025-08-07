/*
* Set Web Analytics variables for for CSSI sites
*/
var wa_production_report_suite = 'ncienterprise';
var wa_dev_report_suite = 'ncienterprise-dev';
var wa_channel = '';
var wa_search_function_name = '';
var wa_production_url_match = '';
var currentHostname = location.hostname.toLowerCase();
var wa_linkInternalFilters = 'javascript:,' + currentHostname;
var page_URL = document.URL;
var wa_p30 = '';
var wa_p44 = '';

// Set channel, search name, and prod URL 
if (new URL(page_URL).hostname === 'cssi.cancer.gov') {
    wa_channel = 'CSSI - OD';
    wa_search_function_name = 'CSSI - OD - Search';
    wa_production_url_match = 'cssi.cancer.gov';
}
else {
    wa_channel = 'CSSI dev';
    wa_search_function_name = 'CSSI dev search';
}

// Set Prod or Dev suite depending on URL
if (new URL(page_URL).hostname === wa_production_url_match && wa_production_url_match.length > 0)
    var s_account = wa_production_report_suite;
else
    var s_account = wa_dev_report_suite;

var pageNameOverride = currentHostname + location.pathname.toLowerCase();
