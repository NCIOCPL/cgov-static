var wa_production_report_suite = 'ncienterprise';
var wa_dev_report_suite = 'ncienterprise-dev';
var wa_channel = '';
var wa_search_function_name = 'NCI OA - Search';
var wa_production_url_match = 'ncioa.cancer.gov';
var wa_linkInternalFilters = 'javascript:,';
var currentHostname = location.hostname.toLowerCase();
wa_linkInternalFilters += currentHostname;
var wa_p30 = "";
var wa_p44 = "";
var wa_hier2 = "";
var page_URL = document.URL;
var portal_url_path = '/oa-internet/fnlcr/index.html';

// Use prod or dev report suite depending on URL
if (page_URL.indexOf(wa_production_url_match) != -1) {
    var s_account = wa_production_report_suite;
}
else {
    var s_account = wa_dev_report_suite;
}

// Set correct channel based on URL
if (page_URL.indexOf(portal_url_path) != -1) {
    wa_channel = 'FNLCR Acquisition Portal';
}
else {
    wa_channel = 'NCIOA Main';
}
	
var pageNameOverride = currentHostname + location.pathname.toLowerCase();
