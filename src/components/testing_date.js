import { shallowMount } from '@vue/test-utils'
import SharedWithUser from './SharedWithUser.vue'

describe('SharedWithUser', () => {
    it('shows error when shared profiles id is not speicified', () => {
        const wrapper = shallowMount(SharedWithUser, {
            data() {
                return {
                    wrong_date: '01.12.2022',
                    right_date: '01.03.2020'
                }
            }
        })

        wrapper.setData({ items: wrong_date })
            // check, if error is displayed
        expect(wrapper.find('.error').exists()).toBeTruthy()

        // check, if error not displayed
        wrapper.setData({ items: right_date })
        expect(wrapper.find('.error').exists()).toBeFalsy()
    })
})