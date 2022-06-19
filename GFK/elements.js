const {I} = inject();
const Helper = codecept_helper;
const puppeteer = require('puppeteer');

module.exports = {
    objects: {
        signup: {
            signin: '//*[@id="header"]/div[2]//nav/div[1]/a',
            createEmail: '//*[@id="email_create"]',
            submitCreate: '//*[@id="SubmitCreate"]',
            radio: '//*[@id="id_gender1"]',
            firstName: '//*[@id="customer_firstname"]',
            lastName: '//*[@id="customer_lastname"]',
            loginPass: '//*[@id="passwd"]',
            days: '//*[@id="days"]',
            months: '//*[@id="months"]',
            years: '//*[@id="years"]',
            check1: '//*[@id="optin"]',
            customerName: '//*[@id="firstname"]',
            customerLastName: '//*[@id="lastname"]',
            address: '//*[@id="address1"]',
            address1: '//*[@id="address2"]',
            city: '//*[@id="city"]',
            state: '//*[@id="id_state"]',
            zip: '//*[@id="postcode"]',
            country: '//*[@id="postcode"]',
            phone: '//*[@id="phone_mobile"]',
            alais: '//*[@id="alias"]',
            register: '//*[@id="submitAccount"]',
        },
        login: {
            signin: '//*[@id="header"]/div[2]//nav/div[1]/a',
            loginEmail: '//*[@id="email"]',
            loginPass: '//*[@id="passwd"]',
            submitLogin: '//*[@id="SubmitLogin"]',
            username: '//*[@id="header"]/div[2]//nav/div[1]/a',
            signout: '//*[@id="header"]/div[2]//nav/div[2]/a',
        },
        checkout: {
            womenCatagorey : '//*[@id="block_top_menu"]/ul/li[1]/a',
            tShirt: '//*[@id="center_column"]/ul/li[1]//div[2]/h5/a',
            addToCart: '//*[@id="add_to_cart"]/button',
            proceedToCheckout: '//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a/span',
            first: '//*[@id="center_column"]/p[2]/a[1]/span',
            second: '//*[@id="center_column"]/form/p/button/span',
            termsAndConditions: '//*[@id="cgv"]',
            third: '//*[@id="form"]/p/button/span',
            payByBank: '//*[@id="HOOK_PAYMENT"]/div[1]//p/a',
            confirmOrder: '//*[@id="cart_navigation"]/button',
        },
    }
};
