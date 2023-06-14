/*
* This is a reusable Web Analytics snippet for sites that only report to the 'nciglobal' suite. 
* This should be paired with "wa_global_pre.js" in the site's Pageload tag. If the site requires more 
* tracking beyond channel, suite, and search, please create site-specific analytics files for the site.
*/
s.linkInternalFilters = wa_linkInternalFilters;

s.channel = wa_channel;
s.events = 'event1';
var s_code = s.t(); if (s_code) document.write(s_code);

var NCIAnalytics = {
    SiteSearch: function(sender) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'channel,prop14,eVar14,events';
        s.linkTrackEvents = 'event2';
        s.prop14 = sender.elements[0].value;
        s.eVar14 = sender.elements[0].value;
        s.channel = wa_channel;
        s.events = 'event2';
        s.tl(this, 'o', wa_search_function_name);
    }
};
