s.channel=wa_channel;
s.events='event1';
var s_code=s.t();if(s_code)document.write(s_code);

var NCIAnalytics = {

    SiteSearch: function(sender) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'channel,prop14,eVar14,events';
        s.linkTrackEvents = 'event2';
        s.prop14 = document.words.q.value;
        s.eVar14 = document.words.q.value;
        s.channel = wa_channel;
        s.events = 'event2';
        s.tl(this, 'o', wa_search_function_name);
    }
}