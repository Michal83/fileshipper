import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import FilesList from '@/components/FilesList.vue';

describe('FilesList.vue', () => {
  const file = new Blob([''], { type: 'text/html' });
  file['lastModifiedDate'] = '';
  file['name'] = 'someFile';
  file['error'] = new Error('Very scary error');

  const wrapper = shallowMount(FilesList, {
    propsData: {
      files: [file, file],
      lock: true
    }
  });
  it ('renders two files on list', () => {
    expect(wrapper.findAll('.file').length).equal(2);
  });
});
