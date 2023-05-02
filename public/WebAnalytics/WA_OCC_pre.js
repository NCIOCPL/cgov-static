var wa_production_report_suite = 'ncienterprise';
var wa_dev_report_suite = 'ncienterprise-dev';
var wa_channel = 'OCC - Cancer Centers';
var wa_search_function_name = 'OCC - Cancer Centers Search';
var wa_production_url_match = 'cancercenters.cancer.gov';
var wa_production_linkInternalFilters = 'javascript:,cancercenters.cancer.gov';
var wa_dev_linkInternalFilters = 'javascript:,cancercentersqa.cancer.gov';

if (document.URL.indexOf(wa_production_url_match) != -1)
    // production 
    var s_account=wa_production_report_suite;
else 
    // non-production
    var s_account=wa_dev_report_suite;

var pageNameOverride = location.hostname.toLowerCase() + location.pathname.toLowerCase();

if(pageNameOverride.toLowerCase() == "cancer.gov/ccp/index.html")
	pageNameOverride = "cancer.gov/ccp/";