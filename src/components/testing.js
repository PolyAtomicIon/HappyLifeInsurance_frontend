import { shallowMount } from '@vue/test-utils'
import SharedWithUser from './SharedWithUser.vue'

describe('SharedWithUser', () => {
    it('shows error when shared profiles id is not speicified', () => {
        const wrapper = shallowMount(SharedWithUser, {
            data() {
                return {
                    items: [{
                        id: null,
                        email: 'hogn_pok @gmail.com',
                        initials: "H P",
                    }],

                    correct_items: [{
                        id: 45,
                        email: 'hogn_pok @gmail.com',
                        initials: "H P",
                    }],
                }
            }
        })


        // check, if error is displayed
        expect(wrapper.find('.error').exists()).toBeTruthy()

        // check, if error not displayed
        wrapper.setData({ items: correct_items })
        expect(wrapper.find('.error').exists()).toBeFalsy()
    })
})