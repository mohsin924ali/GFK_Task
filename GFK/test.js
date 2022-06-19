const { pause } = require("codeceptjs");
const { async } = require("rxjs");
const elements = require('./elements.js');


Feature('GFK Assignment');

Scenario('Signup', async ({I})=> {
 await I.say('Navigating to Hompage');
 await I.amOnPage('http://automationpractice.com/index.php');
 await I.wait(2);
 await I.say('Going to Signup page');
 await I.click(elements.objects.signup.signin);
 await I.wait(2);
 await I.say('Entering the credentials');
 await I.click(elements.objects.signup.createEmail);
 await I.fillField(elements.objects.signup.createEmail, 'mohsin55@tempr.email');
 await I.wait(1);
 await I.click(elements.objects.signup.submitCreate);
 await I.wait(3);
 await I.checkOption(elements.objects.signup.radio);
 await I.wait(2);
 for (let arrayLoop = 0; arrayLoop < 12; arrayLoop++){
    const arrayLinks = ['firstName', 'lastName', 'loginPass', 'days', 'months', 'years', 'address', 'address1', 'city', 'state', 'zip', 'phone'];
    const arrayInput = ['mohsin','ali', '1122334455', '10', '7', '1990', 'New Street', '1', 'New York', 'New York', '13629', '01716188112'];
     if(arrayLoop >= 0 && arrayLoop < 3){
      await I.waitForElement(elements.objects.signup[arrayLinks[arrayLoop]], 5);
       await I.click(elements.objects.signup[arrayLinks[arrayLoop]]);
       await I.fillField(elements.objects.signup[arrayLinks[arrayLoop]], arrayInput[arrayLoop]);
       await I.wait(1);
       await I.scrollTo(elements.objects.signup[arrayLinks[arrayLoop]]);
      }
      else if(arrayLoop >= 3 && arrayLoop < 6){
        await I.waitForElement(elements.objects.signup[arrayLinks[arrayLoop]], 5);
        await I.selectOption(elements.objects.signup[arrayLinks[arrayLoop]], arrayInput[arrayLoop]);
        await I.wait(1);
        if(arrayLoop == 5){
          await I.click(elements.objects.signup.check1);
        }
      }
      else if(arrayLoop >= 6 && arrayLoop < 12){
        await I.waitForElement(elements.objects.signup[arrayLinks[arrayLoop]], 5);
        await I.click(elements.objects.signup[arrayLinks[arrayLoop]]);
        await I.fillField(elements.objects.signup[arrayLinks[arrayLoop]], arrayInput[arrayLoop]);
        await I.wait(1);
        await I.scrollTo(elements.objects.signup[arrayLinks[arrayLoop]]);
      }
  }
   await I.click(elements.objects.signup.register);
   await I.wait(10);
});

Scenario('Login to the app', async ({I}) => {
  await I.say('Navigating to Hompage');
  await I.amOnPage('http://automationpractice.com/index.php');
  await I.wait(2);
  await I.say('Going to Signup page');
  await I.click(elements.objects.signup.signin);
  await I.wait(2);
  await I.say('Entering the credentials');
  await I.click(elements.objects.signup.createEmail);
  await I.fillField(elements.objects.login.loginEmail, 'mohsin54@tempr.email');
  await I.wait(1);
  await I.fillField(elements.objects.login.loginPass, '1122334455');
  await I.click(elements.objects.login.submitLogin);
  await I.wait(5);
 let desiredText = I.see("mohsin ali");
 console.log(desiredText);
 if(desiredText){
  await I.say('Username is correct')
 }
  await I.click(elements.objects.login.signout);
});


Scenario('Checkout', async ({I}) => {
  await I.say('Navigating to Hompage');
  await I.amOnPage('http://automationpractice.com/index.php');
  await I.wait(2);
  await I.say('Going to Signup page');
  await I.click(elements.objects.signup.signin);
  await I.wait(2);
  await I.say('Entering the credentials');
  await I.click(elements.objects.signup.createEmail);
  await I.fillField(elements.objects.login.loginEmail, 'mohsin54@tempr.email');
  await I.wait(1);
  await I.fillField(elements.objects.login.loginPass, '1122334455');
  await I.click(elements.objects.login.submitLogin);
  await I.wait(5);
  for (let arrayLoop = 0; arrayLoop < 9; arrayLoop++){
    const arrayLinks = ['womenCatagorey', 'tShirt', 'addToCart', 'proceedToCheckout', 'first', 'second', 'third', 'payByBank', 'confirmOrder'];
     await I.waitForElement(elements.objects.checkout[arrayLinks[arrayLoop]], 5);
     await I.click(elements.objects.checkout[arrayLinks[arrayLoop]]);
     await I.wait(3);
     if(arrayLoop == 5){
      await I.checkOption(elements.objects.checkout.termsAndConditions)
      await I.wait(1);
      }
    }
    let text = await I.see('ORDER CONFIRMATION');
    if(text){
      await I.say('We are on the last page')
    }
});
