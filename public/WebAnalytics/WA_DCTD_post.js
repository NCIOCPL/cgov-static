/*
* Web Analytics functions snippet for DCTD sites
*/
s.linkInternalFilters = wa_linkInternalFilters;

s.channel=wa_channel;
s.eVar59 = "static_" + "DCTD_" + location.hostname.toLowerCase();
s.events='event1';
var s_code=s.t();if(s_code)document.write(s_code);

var NCIAnalytics = {
	SiteSearch : function(sender) {
		var s=s_gi(s_account); 
		s.linkTrackVars='channel,prop14,eVar14,events'; 
		s.linkTrackEvents='event2';
		s.prop14=document.search.swKeyWord.value;
		s.eVar14=document.search.swKeyWord.value;
		s.channel=wa_channel;
		s.events='event2';
		s.tl(this,'o',wa_search_function_name);
	}
};