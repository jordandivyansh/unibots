var sizes = [[320, 50]];
var PREBID_TIMEOUT = 2000;
var FAILSAFE_TIMEOUT = 3000;
var REFRESH_TIMEOUT = 40000;

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

var adUnits = [{
  code: '/21928950349/dailyrecruitment.in_NB_320x50',
  mediaTypes: {
	  banner: {
		  sizes: sizes
	  }
  },
  bids: [
    {
    	bidder: 'oftmedia',
    	params: {placementId: '18671523'}
    },
    {
    	bidder: 'eplanning',
    	params: {ci: '2cfed', ml: '1'}
    },
    {
    	bidder: '33across',
    	params: {siteId: 'acSmlCBuar6PWLaKlId8sQ', productId: 'siab'}
    },
    {
    	bidder: 'emx_digital',
    	params: {tagid: '97458'}
    },
    {
    	bidder: 'rhythmone',
    	params: {placementId: '205372'}
    }
  ]
}];

var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

pbjs.que.push(function() {
  pbjs.addAdUnits(adUnits);
  pbjs.requestBids({
    timeout: PREBID_TIMEOUT,
    adUnitCodes: ['/21928950349/dailyrecruitment.in_NB_320x50'],
    bidsBackHandler: initAdserver
  });
});

pbjs.bidderSettings = {
    oftmedia: {
      bidCpmAdjustment: function(bidCpm){
        return bidCpm*0.80;
      }
    },
    emx_digital: {
      bidCpmAdjustment: function(bidCpm){
        return bidCpm*0.80;
      }
    }
};

// pbjs.que.push(function() {
//   pbjs.enableAnalytics({
//     provider: 'ga',
//   });
// });
//
// pbjs.aliasBidder('appnexus', 'oftmedia');

var ub_slot1;
googletag.cmd.push(function() {
  ub_slot1 = googletag.defineSlot('/21928950349/dailyrecruitment.in_NB_320x50', sizes, 'div-ub-1')
	.addService(googletag.pubads());
  googletag.pubads().disableInitialLoad();
  googletag.pubads().enableSingleRequest();
  googletag.enableServices();
});

function refreshBid() {
  pbjs.que.push(function() {
	  pbjs.requestBids({
		  timeout: PREBID_TIMEOUT,
		  adUnitCodes: ['/21928950349/dailyrecruitment.in_NB_320x50'],
		  bidsBackHandler: initAdserver
	  });
  });
}

function initAdserver() {
  if (pbjs.initAdserverSet) return;
  pbjs.initAdserverSet = true;
  googletag.cmd.push(function() {
    googletag.pubads().disableInitialLoad();
	  pbjs.setTargetingForGPTAsync && pbjs.setTargetingForGPTAsync();
	  googletag.pubads().refresh([ub_slot1]);
  });
}

// in case PBJS doesn't load
setTimeout(function() {
  initAdserver();
}, FAILSAFE_TIMEOUT);

setInterval(function() {
  refreshBid();
}, REFRESH_TIMEOUT);
