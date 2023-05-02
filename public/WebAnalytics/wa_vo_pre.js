var wa_production_report_suite = 'ncienterprise';
var wa_dev_report_suite = 'ncienterprise-dev';
var wa_channel = 'Visuals Online';
var wa_search_function_name = 'Visuals Online Search';
var wa_production_url_match = 'visualsonline.cancer.gov';

var wa_linkInternalFilters = 'javascript:,';
var currentHostname = location.hostname.toLowerCase();
wa_linkInternalFilters += currentHostname;

if (document.URL.indexOf(wa_production_url_match) != -1)
// production 
    var s_account = wa_production_report_suite;
else
// non-production
    var s_account = wa_dev_report_suite;

var pageNameOverride = currentHostname + location.pathname.toLowerCase();