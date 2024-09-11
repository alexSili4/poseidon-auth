import refs from './refs';
import onAdvertisingCampaignsSearchInputChange from './onAdvertisingCampaignsSearchInputChange';
import onTradeMarkSearchInputChange from './onTradeMarkSearchInputChange';

refs.advertisingCampaignsSearchInput.addEventListener('input', onAdvertisingCampaignsSearchInputChange);

refs.tradeMarkSearchInput.addEventListener('input', onTradeMarkSearchInputChange);
