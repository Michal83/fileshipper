import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Picker from '@/components/Picker.vue';

describe('Picker.vue', () => {
  it('locks the input', () => {
    const wrapper = shallowMount(Picker, {
      propsData: {
        lock: true
      }
    });
    expect(wrapper.findAll('input.locked').length).equal(1);
  });
});
