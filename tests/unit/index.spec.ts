import { shallowMount } from '@vue/test-utils';

import PlankItem from '@/components/PlankItem.vue';
import PlankAction from '@/components/PlankAction.vue';
import LastPlank from '@/components/LastPlank.vue';

// COMPONENTS
describe('PlankItem.vue', () => {
  it('Penders plank when passed as prop', () => {
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

describe('PlankAction.vue', () => {
  it('Renders correct message hasPlankToday = true is passed', () => {
    const hasPlankToday = true;
    const wrapper = shallowMount(PlankAction, {
      stubs: ['router-link', 'router-view'],
      propsData: {
        hasPlankToday,
      },
    });
    expect(wrapper.find('p').text()).toEqual(`Want to plank again?`);
  });

  it('Renders correct message hasPlankToday = false is passed', () => {
    const hasPlankToday = false;
    const wrapper = shallowMount(PlankAction, {
      stubs: ['router-link', 'router-view'],
      propsData: {
        hasPlankToday,
      },
    });
    expect(wrapper.find('p').text()).toEqual(`Ready to plank?`);
  });
});

describe('LastPlank.vue', () => {
  it('Penders proper message when planks.length > 0 is passed as a prop', () => {
    const planks = [
      {
        totalSeconds: 60,
        day: 17,
        month: 4,
        year: 2020,
      },
    ];
    const wrapper = shallowMount(LastPlank, {
      propsData: {
        planks,
      },
    });
    expect(wrapper.find('h2').text()).toEqual('Last planks');
  });

  it('Penders proper message when planks.length = 0 is passed as a prop', () => {
    const planks: Array<any> = [];
    const wrapper = shallowMount(LastPlank, {
      propsData: {
        planks,
      },
    });
    expect(wrapper.find('h2').text()).toEqual('Get active!');
  });
});
