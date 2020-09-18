import { shallowMount } from '@vue/test-utils';
import PlankItem from '@/components/PlankItem.vue';

describe('PlankItem.vue', () => {
  it('renders plank when passed', () => {
    const plank = {
      totalSeconds: 60,
      day: 17,
      month: 4,
      year: 2020,
    };
    const wrapper = shallowMount(PlankItem, {
      propsData: {
        plank,
      },
    });
    expect(wrapper.find('.time').text()).toEqual('60s');
  });
});
