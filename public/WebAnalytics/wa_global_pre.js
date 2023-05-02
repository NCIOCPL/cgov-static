/*
* This is a reusable Web Analytics snippet for sites that only report to the 'nciglobal' suite. 
* This should be paired with "wa_global_post.js" in the Pageload tag. If the site requires more 
* tracking beyond channel, suite, and search, please create site-specific analytics files for the site.
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
if (page_URL.indexOf('ocg.cancer.gov') != -1) {	
    wa_channel = 'CCG - Main';
    wa_search_function_name = 'CCG - Search';
    wa_production_url_match = 'ocg.cancer.gov';
}
else if (page_URL.indexOf('visualsonline.cancer.gov') != -1) {	
    wa_channel = 'Visuals Online';
    wa_search_function_name = 'Visuals Online Search';
    wa_production_url_match = 'visualsonline.cancer.gov';
}
else {	
    wa_channel = 'NCI Global dev';
    wa_search_function_name = 'NCI search dev';
}

// Set Prod or Dev suite depending on URL
if (page_URL.indexOf(wa_production_url_match) != -1 && wa_production_url_match.length > 0)
    var s_account = wa_production_report_suite;
else
    var s_account = wa_dev_report_suite;

var pageNameOverride = currentHostname + location.pathname.toLowerCase();