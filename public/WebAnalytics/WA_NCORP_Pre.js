// Version 2.1 TEMPLATE - tags <> in variables must be replaced with appropriate values
var wa_production_report_suite = 'ncienterprise';
var wa_dev_report_suite = 'ncienterprise-dev';
var wa_channel = 'DCP';
var wa_search_function_name = 'DCP Search';
var wa_production_url_match = 'ncorp.cancer.gov';
var wa_linkInternalFilters = 'javascript:,';
var currentHostname = location.hostname.toLowerCase();
wa_linkInternalFilters += currentHostname;
var wa_is_production_report_suite = false;
var wa_p30 = "";
var wa_p44 = "";
var wa_hier2 = "";
var page_URL = document.URL;

if (new URL(page_URL).hostname === wa_production_url_match ) {
    // production
    var s_account = wa_production_report_suite;
}
else {
    // non-production
    var s_account = wa_dev_report_suite;
}
	
var pageNameOverride = currentHostname + location.pathname.toLowerCase();
