var PREBID_TIMEOUT = 2000;
var FAILSAFE_TIMEOUT = 3000;
var REFRESH_TIMEOUT = 60000;

var customConfigObjectA = {
 "buckets" : [{
    "precision": 2,  //default is 2 if omitted - means 2.1234 rounded to 2 decimal places = 2.12
    "min" : 0,
    "max" : 20,
    "increment" : 0.01  // from $0 to $20, 1-cent increments
    }]
};

var div_1_sizes = [728, 90];
var div_2_sizes = [728, 90];
var div_3_sizes = [300, 250];
var div_4_sizes =  [320, 50];
if (typeof mobileCheck === 'function') {
  if (!mobileCheck() && window.location.pathname == '/home') {
    var adUnits = [
      {
        code: '/21957769615/whyral.in_hb_728x90_header',
        mediaTypes: {
      	  banner: {
      		  sizes: div_1_sizes
      	  }
        },
        bids: [
          { bidder: 'eplanning', params: {ci: '2cfed', ml: '1'}},
          // { bidder: 'oftmedia', params: { placementId: '19095403' } },
          // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
          { bidder: 'appnexus', params: { placementId: '19238758' } }, /* one placementId for all sizes  my appnexus bidder */
          { bidder: 'sovrn', params: {tagid: '724254'} },
          { bidder: 'criteo', params: {networkId: '4902'} }
        ]
      }
    ];
  }
  else if(!mobileCheck() && window.location.pathname != '/home'){
    var adUnits = [
      {
        code: '/21957769615/whyral.in_hb_728x90_header',
        mediaTypes: {
      	  banner: {
      		  sizes: div_1_sizes
      	  }
        },
        bids: [
          { bidder: 'eplanning', params: {ci: '2cfed', ml: '1'}},
          // { bidder: 'oftmedia', params: { placementId: '19095403' } },
          // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
          { bidder: 'appnexus', params: { placementId: '19238758' } }, /* one placementId for all sizes  my appnexus bidder */
          { bidder: 'sovrn', params: {tagid: '724254'} },
          { bidder: 'criteo', params: {networkId: '4902'} }
        ]
      },
      {
        code: '/21957769615/whyral.in_hb_728x90_footer',
        mediaTypes: {
      	  banner: {
      		  sizes: div_2_sizes
      	  }
        },
        bids: [
          { bidder: 'eplanning', params: {ci: '2cfed', ml: '1'}},
          // { bidder: 'oftmedia', params: { placementId: '19095403' } },
          // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
          { bidder: 'appnexus', params: { placementId: '19238758' } }, /* one placementId for all sizes  my appnexus bidder */
          { bidder: 'sovrn', params: {tagid: '724263'} },
          { bidder: 'criteo', params: {networkId: '4902'} }
        ]
      },
      {
        code: '/21957769615/whyral.in_hb_300x250',
        mediaTypes: {
      	  banner: {
      		  sizes: div_3_sizes
      	  }
        },
        bids: [
          { bidder: 'eplanning', params: {ci: '2cfed', ml: '1'}},
          // { bidder: 'oftmedia', params: { placementId: '19095403' } },
          // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
          { bidder: 'appnexus', params: { placementId: '19238758' } }, /* one placementId for all sizes  my appnexus bidder */
          { bidder: 'sovrn', params: {tagid: '724265'} },
          { bidder: 'criteo', params: {networkId: '4902'} }
        ]
      }
    ];
  }
  else if(mobileCheck() && window.location.pathname == '/home'){
    var adUnits = [
      {
        code: '/21957769615/whyral.in_hb_320x50',
        mediaTypes: {
      	  banner: {
      		  sizes: div_4_sizes
      	  }
        },
        bids: [
          { bidder: 'eplanning', params: {ci: '2cfed', ml: '1'}},
          // { bidder: 'oftmedia', params: { placementId: '19095403' } },
          // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
          { bidder: 'appnexus', params: { placementId: '19238758' } }, /* one placementId for all sizes  my appnexus bidder */
          { bidder: 'sovrn', params: {tagid: '724266'} },
          { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          { bidder: 'criteo', params: {networkId: '4902'} }
        ]
      }
    ];
  }
  else{
    var adUnits = [
      {
        code: '/21957769615/whyral.in_hb_300x250',
        mediaTypes: {
      	  banner: {
      		  sizes: div_3_sizes
      	  }
        },
        bids: [
          { bidder: 'eplanning', params: {ci: '2cfed', ml: '1'}},
          // { bidder: 'oftmedia', params: { placementId: '19095403' } },
          // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
          { bidder: 'appnexus', params: { placementId: '19238758' } }, /* one placementId for all sizes  my appnexus bidder */
          { bidder: 'sovrn', params: {tagid: '724265'} },
          { bidder: 'criteo', params: {networkId: '4902'} }
        ]
      },
      {
        code: '/21957769615/whyral.in_hb_320x50',
        mediaTypes: {
      	  banner: {
      		  sizes: div_4_sizes
      	  }
        },
        bids: [
          { bidder: 'eplanning', params: {ci: '2cfed', ml: '1'}},
          // { bidder: 'oftmedia', params: { placementId: '19095403' } },
          // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
          { bidder: 'appnexus', params: { placementId: '19238758' } }, /* one placementId for all sizes  my appnexus bidder */
          { bidder: 'sovrn', params: {tagid: '724266'} },
          { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          { bidder: 'criteo', params: {networkId: '4902'} }
        ]
      }
    ];
  }
}
else {
  function mobileCheckAdSript() {
    var check = false;
    (function (a) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  };
  if (!mobileCheckAdSript() && window.location.pathname == '/home') {
    var adUnits = [
      {
        code: '/21957769615/whyral.in_hb_728x90_header',
        mediaTypes: {
      	  banner: {
      		  sizes: div_1_sizes
      	  }
        },
        bids: [
          { bidder: 'eplanning', params: {ci: '2cfed', ml: '1'}},
          // { bidder: 'oftmedia', params: { placementId: '19095403' } },
          // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
          { bidder: 'appnexus', params: { placementId: '19238758' } }, /* one placementId for all sizes  my appnexus bidder */
          { bidder: 'sovrn', params: {tagid: '724254'} },
          { bidder: 'criteo', params: {networkId: '4902'} }
        ]
      }
    ];
  }
  else if(!mobileCheckAdSript() && window.location.pathname != '/home'){
    var adUnits = [
      {
        code: '/21957769615/whyral.in_hb_728x90_header',
        mediaTypes: {
      	  banner: {
      		  sizes: div_1_sizes
      	  }
        },
        bids: [
          { bidder: 'eplanning', params: {ci: '2cfed', ml: '1'}},
          // { bidder: 'oftmedia', params: { placementId: '19095403' } },
          // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
          { bidder: 'appnexus', params: { placementId: '19238758' } }, /* one placementId for all sizes  my appnexus bidder */
          { bidder: 'sovrn', params: {tagid: '724254'} },
          { bidder: 'criteo', params: {networkId: '4902'} }
        ]
      },
      {
        code: '/21957769615/whyral.in_hb_728x90_footer',
        mediaTypes: {
      	  banner: {
      		  sizes: div_2_sizes
      	  }
        },
        bids: [
          { bidder: 'eplanning', params: {ci: '2cfed', ml: '1'}},
          // { bidder: 'oftmedia', params: { placementId: '19095403' } },
          // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
          { bidder: 'appnexus', params: { placementId: '19238758' } }, /* one placementId for all sizes  my appnexus bidder */
          { bidder: 'sovrn', params: {tagid: '724263'} },
          { bidder: 'criteo', params: {networkId: '4902'} }
        ]
      },
      {
        code: '/21957769615/whyral.in_hb_300x250',
        mediaTypes: {
      	  banner: {
      		  sizes: div_3_sizes
      	  }
        },
        bids: [
          { bidder: 'eplanning', params: {ci: '2cfed', ml: '1'}},
          // { bidder: 'oftmedia', params: { placementId: '19095403' } },
          // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
          { bidder: 'appnexus', params: { placementId: '19238758' } }, /* one placementId for all sizes  my appnexus bidder */
          { bidder: 'sovrn', params: {tagid: '724265'} },
          { bidder: 'criteo', params: {networkId: '4902'} }
        ]
      }
    ];
  }
  else if(mobileCheckAdSript() && window.location.pathname == '/home'){
    var adUnits = [
      {
        code: '/21957769615/whyral.in_hb_320x50',
        mediaTypes: {
      	  banner: {
      		  sizes: div_4_sizes
      	  }
        },
        bids: [
          { bidder: 'eplanning', params: {ci: '2cfed', ml: '1'}},
          // { bidder: 'oftmedia', params: { placementId: '19095403' } },
          // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
          { bidder: 'appnexus', params: { placementId: '19238758' } }, /* one placementId for all sizes  my appnexus bidder */
          { bidder: 'sovrn', params: {tagid: '724266'} },
          { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          { bidder: 'criteo', params: {networkId: '4902'} }
        ]
      }
    ];
  }
  else{
    var adUnits = [
      {
        code: '/21957769615/whyral.in_hb_300x250',
        mediaTypes: {
      	  banner: {
      		  sizes: div_3_sizes
      	  }
        },
        bids: [
          { bidder: 'eplanning', params: {ci: '2cfed', ml: '1'}},
          // { bidder: 'oftmedia', params: { placementId: '19095403' } },
          // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
          { bidder: 'appnexus', params: { placementId: '19238758' } }, /* one placementId for all sizes  my appnexus bidder */
          { bidder: 'sovrn', params: {tagid: '724265'} },
          { bidder: 'criteo', params: {networkId: '4902'} }
        ]
      },
      {
        code: '/21957769615/whyral.in_hb_320x50',
        mediaTypes: {
      	  banner: {
      		  sizes: div_4_sizes
      	  }
        },
        bids: [
          { bidder: 'eplanning', params: {ci: '2cfed', ml: '1'}},
          // { bidder: 'oftmedia', params: { placementId: '19095403' } },
          // { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
          { bidder: 'appnexus', params: { placementId: '19238758' } }, /* one placementId for all sizes  my appnexus bidder */
          { bidder: 'sovrn', params: {tagid: '724266'} },
          { bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          { bidder: 'criteo', params: {networkId: '4902'} }
        ]
      }
    ];
  }
}

// ======== DO NOT EDIT BELOW THIS LINE =========== //
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
googletag.cmd.push(function() {
    googletag.pubads().disableInitialLoad();
});

var ubpbjs = ubpbjs || {};
ubpbjs.que = ubpbjs.que || [];

ubpbjs.que.push(function() {
    ubpbjs.addAdUnits(adUnits);
    ubpbjs.bidderSettings = {
      oftmedia: { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
      emx_digital: { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } }
    };
    ubpbjs.setConfig({

    	priceGranularity: customConfigObjectA,
     //consentManagement: { gdpr: { cmpApi: 'iab', timeout: PREBID_TIMEOUT*400, allowAuctionWithoutConsent: true }, usp: { cmpApi: 'iab', timeout: PREBID_TIMEOUT*400 } },
      //cache: {url: "https://prebid.adnxs.com/pbc/v1/cache"},
      s2sConfig: {
        accountId: '',
        enabled: false,
        bidders: ['sovrn', 'openx','sharethrough'],
        timeout: PREBID_TIMEOUT-300,
        adapter: 'prebidServer',
        endpoint: 'https://prebid.adnxs.com/pbs/v1/openrtb2/auction',
        syncEndpoint: 'https://prebid.adnxs.com/pbs/v1/cookie_sync',
        cookieSet: true,
        cookiesetUrl: 'https://acdn.adnxs.com/cookieset/cs.js'
      },
      userSync: {
        iframeEnabled: true,
        syncsPerBidder: 999, // and no more than 3 syncs at a time
        syncDelay: PREBID_TIMEOUT*4, // 5 seconds after the auction
        filterSettings: { iframe: { bidders: [''], filter: 'exclude' }, image:  { bidders: '*', filter: 'include' } },
        // enableOverride: true // publisher will call `ubpbjs.triggerUserSyncs()'
      },
      debug: true,
      useBidCache: false,
      enableSendAllBids: false, // Default will be `true` as of 1.0
      bidderSequence: 'random', // Default is random
      publisherDomain: 'http://whyral.in/',
      bidderTimeout: PREBID_TIMEOUT+500,
      //pubcid: {expInterval: },
      //currency: { 'adServerCurrency': "GBP", 'granularityMultiplier': 1, 'conversionRateFile': 'https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json', },
     });
    ubpbjs.requestBids({
        bidsBackHandler: initAdserver,
        timeout: PREBID_TIMEOUT
    });
});

function initAdserver() {
    if (ubpbjs.initAdserverSet) return;
    ubpbjs.initAdserverSet = true;
    googletag.cmd.push(function() {
        ubpbjs.que.push(function() {
            ubpbjs.setTargetingForGPTAsync();
            googletag.pubads().refresh([ub_slot1, ub_slot2, ub_slot3, ub_slot4]);
        });
    });
}
// in case ubpbjs doesn't load
setTimeout(function() {
    initAdserver();
}, FAILSAFE_TIMEOUT);

var ub_slot1, ub_slot2, ub_slot3, ub_slot4;
googletag.cmd.push(function() {
    ub_slot1 = googletag.defineSlot('/21957769615/whyral.in_hb_728x90_header', div_1_sizes, 'div-ub-1').addService(googletag.pubads());
    ub_slot2 = googletag.defineSlot('/21957769615/whyral.in_hb_728x90_footer', div_2_sizes, 'div-ub-2').addService(googletag.pubads());
    ub_slot3 = googletag.defineSlot('/21957769615/whyral.in_hb_300x250', div_3_sizes, 'div-ub-3').addService(googletag.pubads());
    ub_slot4 = googletag.defineSlot('/21957769615/whyral.in_hb_320x50', div_4_sizes, 'div-ub-4').addService(googletag.pubads());
    googletag.pubads().collapseEmptyDivs(true);
    googletag.pubads().setCentering(true);
    googletag.pubads().setPrivacySettings({ 'restrictDataProcessing': true });
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot1) {
        ub_checkAd1Rendered();
      }
      else if (event.slot === ub_slot2) {
        ub_checkAd2Rendered();
      }
      else if (event.slot === ub_slot3) {
        ub_checkAd3Rendered();
      }
      else if (event.slot === ub_slot4) {
        ub_checkAd4Rendered();
      }
      else if ((event.slot === ub_slot1) && (event.slot === ub_slot2) && (event.slot === ub_slot3) && (event.slot === ub_slot4)) {
        ub_checkAd1Rendered();
        ub_checkAd2Rendered();
        ub_checkAd3Rendered();
        ub_checkAd4Rendered();
        }
    });
});

function refreshBid(ub_slot) {
  ubpbjs.que.push(function() {
	  ubpbjs.requestBids({
		  timeout: PREBID_TIMEOUT,
		  adUnitCodes: ['/21957769615/whyral.in_hb_728x90_header', '/21957769615/whyral.in_hb_728x90_footer', '/21957769615/whyral.in_hb_300x250', '/21957769615/whyral.in_hb_320x50'],
		  bidsBackHandler: function() {
        googletag.cmd.push(function() {
          ubpbjs.que.push(function() {
              ubpbjs.setTargetingForGPTAsync();
              googletag.pubads().refresh([ub_slot]);
          });
        });
		  }
	  });
  });
}

ub_ad1RefreshFlag = 0;
function ub_checkAd1Rendered(){
 if (document.getElementById('div-ub-header')) {
	adId1 = 'div-ub-1';
	var nodes = document.getElementById(adId1).childNodes[0].childNodes;
	if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
    if(ub_ad1RefreshFlag != 1){
      setInterval(function() {
        ub_ad1RefreshFlag = 1;
        refreshBid(ub_slot1);
      }, REFRESH_TIMEOUT);
    }
	 }
 }
}

ub_ad2RefreshFlag = 0;
function ub_checkAd2Rendered(){
 if (document.getElementById('div-ub-footer')) {
	adId2 = 'div-ub-2';
	var nodes = document.getElementById(adId2).childNodes[0].childNodes;
	if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
    if(ub_ad2RefreshFlag != 1){
      setInterval(function() {
        ub_ad2RefreshFlag = 1;
        refreshBid(ub_slot2);
      }, REFRESH_TIMEOUT);
    }
	 }
 }
}

ub_ad3RefreshFlag = 0;
function ub_checkAd3Rendered(){
 if (document.getElementById('div-ub-rect')) {
	adId3 = 'div-ub-3';
	var nodes = document.getElementById(adId3).childNodes[0].childNodes;
	if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
    if(ub_ad3RefreshFlag != 1){
      setInterval(function() {
        ub_ad3RefreshFlag = 1;
        refreshBid(ub_slot3);
      }, REFRESH_TIMEOUT);
    }
	 }
 }
}

ub_ad4RefreshFlag = 0;
function ub_checkAd4Rendered(){
 if (document.getElementById('div-ub-mobile')) {
	adId4 = 'div-ub-4';
	var nodes = document.getElementById(adId4).childNodes[0].childNodes;
	if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
    if(ub_ad4RefreshFlag != 1){
      setInterval(function() {
        ub_ad4RefreshFlag = 1;
        refreshBid(ub_slot4);
      }, REFRESH_TIMEOUT);
    }
	 }
 }
}