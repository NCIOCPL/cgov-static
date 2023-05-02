var wa_production_report_suite = 'ncienterprise';
//var wa_dev_report_suite = 'ncienterprise-dev';
var wa_channel = 'Frederick National Lab';
var wa_search_function_name = 'ctl00$ctl00$FnlHeader$ctl06';
var wa_production_url_match = 'frederick.cancer.gov';
var wa_production_linkInternalFilters = 'javascript:,frederick.cancer.gov';
//var wa_dev_linkInternalFilters = 'javascript:,<site URL>';

if (page_URL.indexOf(wa_production_url_match) != -1) {
	// production
	var s_account=wa_production_report_suite;
else
	// non-production
	var s_account=wa_dev_report_suite;
	
var pageNameOverride = location.hostname.toLowerCase() + location.pathname.toLowerCase();