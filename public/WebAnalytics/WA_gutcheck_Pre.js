
// Version 2.1 TEMPLATE - tags <> in variables must be replaced with appropreate values
var wa_production_report_suite = 'ncienterprise';
var wa_dev_report_suite = 'ncienterprise-dev';
var wa_channel = 'OCE - Gut Check';
var wa_search_function_name = 'search';
var wa_production_url_match = 'gutcheck.cancer.gov';
var wa_production_linkInternalFilters = 'javascript:,gutcheck.cancer.gov';
var wa_dev_linkInternalFilters = 'javascript:,gutcheck-dev.nci.nih.gov';
var wa_is_production_report_suite = false;
var wa_p30 = "";
var wa_p44 = "";
var wa_hier2 = "";
var page_URL = document.URL;

if (page_URL.indexOf(wa_production_url_match) != -1) // production
{
        var s_account=wa_production_report_suite;
        var wa_is_production_report_suite = true;
}
else	// non-production
{
	var s_account=wa_dev_report_suite;
	var wa_is_dev_report_suite = true;
}
var pageNameOverride = location.hostname.toLowerCase() + location.pathname.toLowerCase();
