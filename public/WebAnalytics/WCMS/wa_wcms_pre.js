var wa_hier1="",wa_hier2="",wa_lang="",live_or_other="other";-1==document.URL.indexOf("www.cancer.gov")&&-1==document.URL.indexOf("dceg.cancer.gov")&&-1==document.URL.indexOf("cancergenome.nih.gov")||(live_or_other="live");var AllSuites={nciglobal:{live:"nciglobal",other:"ncidevelopment"},ncienterprise:{live:"ncienterprise",other:"ncienterprise-dev"},"ncienglish-all":{live:"ncienglish-all",other:"ncienglish-all-dev"},"ncispanish-all":{live:"ncispanish-all",other:"ncispanish-all-dev"},ncincidictionary:{live:"ncincidictionary",other:"ncincidictionary-dev"},ncidrugdictionary:{live:"ncidrugdictionary",other:"ncidrugdictionary-dev"},ncinews:{live:"ncinews",other:"ncinews-dev"},nciresearch:{live:"nciresearch",other:"nciresearch-dev"},nciabout:{live:"nciabout",other:"nciabout-dev"},nciclinicaltrials:{live:"nciclinicaltrials",other:"nciclinicaltrials-dev"},ncicancertopics:{live:"ncicancertopics",other:"ncicancertopics-dev"},ncitiposdecancer:{live:"ncitiposdecancer",other:"ncitiposdecancer-dev"},ncinoticias:{live:"ncinoticias",other:"ncinoticias-dev"},ncinuestroinstituto:{live:"ncinuestroinstituto",other:"ncinuestroinstituto-dev"},ncielcancer:{live:"ncielcancer",other:"ncielcancer-dev"},"nciogcr-governmentcongressionalrelations":{live:"nciogcr-governmentcongressionalrelations",other:"nciogcr-govcongressionalrelations-dev"},"ncidcp-cancerprevention":{live:"ncidcp-cancerprevention",other:"ncidcp-cancerprevention-dev"},"ncidceg-cancerepidemiologyandgenetics":{live:"ncidceg-cancerepidemiologyandgenetics",other:"ncidceg-cancerepidemiologyandgenetics-dev"},"ncicssi-strategicscientificinitiatives":{live:"ncicssi-strategicscientificinitiatives",other:"ncicssi-strategicscientificinitiatives-dev"}},AnalyticsMapping={GetSuites:function(e){var n=e.split(","),c="";for(i=0;i<n.length;i++)try{var t=n[i].replace(" ","");c+=AllSuites[t][live_or_other],i<n.length-1&&(c+=",")}catch(i){c+=""}return c}};