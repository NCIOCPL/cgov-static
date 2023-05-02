var wa_production_report_suite = 'ncienterprise';
var wa_dev_report_suite = 'ncienterprise-dev';
var wa_channel = 'Pubs Locator';
var wa_search_function_name = 'Pubs Locator - Search';
var wa_production_url_match = 'pubs.cancer.gov';
var wa_dev_url_match = 'pubs-dev.cancer.gov';
var wa_production_linkInternalFilters = 'javascript:,pubs.cancer.gov';
var wa_dev_linkInternalFilters = 'javascript:,pubs-dev.cancer.gov';

if (document.URL.indexOf(wa_production_url_match) != -1)
    // production 
    var s_account=wa_production_report_suite;
else 
    // non-production
    var s_account=wa_dev_report_suite;

var pageNameOverride = location.hostname.toLowerCase() + location.pathname.toLowerCase();
