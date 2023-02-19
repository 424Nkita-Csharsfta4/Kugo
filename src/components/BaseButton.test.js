import { mount } from '@vue/test-utils';
import MyButton from '@/module/ui/Btn/VBtnLookAll.vue'

describe('MyButton', () => {
    it('renders the button label', () => {
        const label = 'Click me!';
        const wrapper = mount(MyButton, {
            props: {
                label,
            },
        });

        expect(wrapper.text()).toMatch(label);
    });

    it('emits a click event with the current count', async () => {
        const wrapper = mount(MyButton, {
            props: {
                label: 'Click me!',
            },
        });

        const button = wrapper.find('button');
        await button.trigger('click');
        await button.trigger('click');

        expect(wrapper.emitted('click')).toHaveLength(2);
       
    });
});
