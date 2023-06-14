/*
* Set Web Analytics variables for for CBIIT sites
*/
var wa_production_report_suite = 'ncienterprise';
var wa_dev_report_suite = 'ncienterprise-dev';
var wa_channel = '';
var wa_search_function_name = '';
var wa_production_url_match = '';
var wa_linkInternalFilters = 'javascript:,';
var currentHostname = location.hostname.toLowerCase();
wa_linkInternalFilters += currentHostname;
var page_URL = document.URL;

// Set channel, search name, and prod URL 
if (page_URL.indexOf('cbiitsolutions.cancer.gov') != -1) {	
    wa_channel = 'CBIIT Solutions - Main';
    wa_search_function_name = 'CBIIT Solutions - Search';
    wa_production_url_match = 'cbiitsolutions.cancer.gov';
}
else {	
    wa_channel = 'CBIIT - Dev';
    wa_search_function_name = 'CBIIT - Search Dev';
}

// Set Prod or Dev suite depending on URL
if (page_URL.indexOf(wa_production_url_match) != -1 && wa_production_url_match.length > 0)
    var s_account = wa_production_report_suite;
else
    var s_account = wa_dev_report_suite;

var pageNameOverride = currentHostname + location.pathname.toLowerCase();