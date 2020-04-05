var sizes = [[300, 250]];
var PREBID_TIMEOUT = 2000;
var FAILSAFE_TIMEOUT = 3000;
var REFRESH_TIMEOUT = 40000;

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

var adUnits = [{
  code: '/21928950349/boomlive_NB_300x250',
  mediaTypes: {
	  banner: {
		  sizes: sizes
	  }
  },
  bids: [
    // {
    // 	bidder: 'oftmedia',
    // 	params: {placementId: '18671527'}
    // },
    {
    	bidder: 'eplanning',
    	params: {ci: '2cfed', ml: '1'}
    },
    {
    	bidder: '33across',
    	params: {siteId: 'd9bktEBt8r6PWLaKlId8sQ', productId: 'siab'}
    }
    // {
    // 	bidder: 'emx_digital',
    // 	params: {tagid: '97450'}
    // }
    // {
    // 	bidder: 'rhythmone',
    // 	params: {placementId: '205373'}
    // }
  ]
}];

var ubpbjs = ubpbjs || {};
ubpbjs.que = ubpbjs.que || [];

ubpbjs.que.push(function() {
  ubpbjs.addAdUnits(adUnits);
  ubpbjs.setConfig({ userSync: {
            iframeEnabled: true
         }
  });
  ubpbjs.requestBids({
    timeout: PREBID_TIMEOUT,
    adUnitCodes: ['/21928950349/boomlive_NB_300x250'],
    bidsBackHandler: initAdserver
  });
});

ubpbjs.bidderSettings = {
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

var ub_slot1;
googletag.cmd.push(function() {
  ub_slot1 = googletag.defineSlot('/21928950349/boomlive_NB_300x250', sizes, 'div-ub-1')
	.addService(googletag.pubads());
  googletag.pubads().disableInitialLoad();
  googletag.pubads().enableSingleRequest();
  googletag.enableServices();
});

function refreshBid() {
  ubpbjs.que.push(function() {
	  ubpbjs.requestBids({
		  timeout: PREBID_TIMEOUT,
		  adUnitCodes: ['/21928950349/boomlive_NB_300x250'],
		  bidsBackHandler: function() {
			  ubpbjs.setTargetingForGPTAsync(['/21928950349/boomlive_NB_300x250']);
			  googletag.pubads().refresh([ub_slot1]);
		  }
	  });
  });
}

function initAdserver() {
  if (ubpbjs.initAdserverSet) return;
  ubpbjs.initAdserverSet = true;
  googletag.cmd.push(function() {
	  ubpbjs.setTargetingForGPTAsync && ubpbjs.setTargetingForGPTAsync();
	  googletag.pubads().refresh([ub_slot1]);
  });
}

// in case ubpbjs doesn't load
setTimeout(function() {
  initAdserver();
}, FAILSAFE_TIMEOUT);

setInterval(function() {
  refreshBid();
}, REFRESH_TIMEOUT);