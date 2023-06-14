s.linkInternalFilters = wa_linkInternalFilters;

s.channel = wa_channel;
s.events = 'event1';
var s_code = s.t(); if (s_code) document.write(s_code);

var NCIAnalytics = {
    
    // Legacy site search function
    SiteSearch: function(sender) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'channel,prop14,eVar14,events';
        s.linkTrackEvents = 'event2';
        s.prop14 = sender.elements[0].value;
        s.eVar14 = sender.elements[0].value;
        s.channel = wa_channel;
        s.events = 'event2';
        s.tl(this, 'o', wa_search_function_name);
    },
    
    // Function to track search dropdown, more search options
    SearchOptions: function(sender, value, type) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'channel,prop11,eVar11,prop14,eVar14,events';
        s.linkTrackEvents = 'event2';        
        s.prop11 = type;
        s.eVar11 = type;
        s.prop14 = value;
        s.eVar14 = value;
        s.channel = wa_channel;
        s.events = 'event2';
        s.tl(this, 'o', 'SearchOptions');
    },

    // Function to track call to action links on details pages
    DetailsActionClick: function(sender, value) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'channel,prop5,events';
        s.linkTrackEvents = 'event59';
        s.prop5 = value;
        s.channel = wa_channel; 
        s.events = 'event59';
        s.tl(this, 'o', 'DetailsActionClick');
    },

    // Function to track call to action links on "My Photos" pages
    FavoritesActionClick: function(sender, value) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'channel,prop5,events';
        s.linkTrackEvents = 'event61';
        s.prop5 = value;
        s.channel = wa_channel; 
        s.events = 'event61';
        s.tl(this, 'o', 'FavoritesActionClick');
    },

    // Function to track click of homepage cards
    HomepageCardClick: function(sender, title, type) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'channel,prop57,prop58,prop59,prop67';
        s.prop57 = title;
        s.prop58 = title;
        s.prop59 = type;
        s.prop67 = 'D=pageName';
        s.channel = wa_channel;
        s.tl(this, 'o', 'HomepageCardClick');
    },

    // Function to track button clicks on details pages
    UtilityLinkClick: function(sender, value) {
        var s = s_gi(s_account);
        s.linkTrackVars = 'channel,prop5,prop67,events';
        s.linkTrackEvents = 'event60';
        s.prop5 = value;
        s.prop67 = 'D=pageName';
        s.channel = wa_channel; 
        s.events = 'event60';
        s.tl(this, 'o', 'UtilityLinkClick');
    }
    
};
