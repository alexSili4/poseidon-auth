import refs from './refs';

const onAdvertisingCampaignsSearchInputChange = (e) => {
  const { value: searchQuery } = e.currentTarget;

  refs.advertisingCampaigns.forEach((advertisingCampaign) => {
    const advertisingCampaignName = advertisingCampaign.querySelector('.js-advertising-campaign-name').textContent;

    const isTargetAdvertisingCampaign = advertisingCampaignName.toLowerCase().startsWith(searchQuery.toLowerCase());

    if (isTargetAdvertisingCampaign) {
      advertisingCampaign.classList.remove('hidden-element');
    } else {
      advertisingCampaign.classList.add('hidden-element');
    }
  });
};

export default onAdvertisingCampaignsSearchInputChange;
