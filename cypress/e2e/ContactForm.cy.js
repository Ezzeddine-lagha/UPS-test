import contactFrom, { company } from '../page-objects/contactForm.sel'


describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/')
    
  })

  //Test pass
  it('Pass', () => {
    const randomIndex = Math.floor(Math.random() * 19) + 1;
    cy.getUserInfo(randomIndex).then((userInfo) => {

      cy.selectGenderByTitle(userInfo.title)
      cy.get(contactFrom.firstName).type(userInfo.firstName)
      cy.get(contactFrom.lastName).type(userInfo.lastName)
      cy.get(contactFrom.company).type("UPS Company")
      cy.get(contactFrom.phone).type("+33 6 12 34 56 78")
      cy.get(contactFrom.messageTitle).type("Test title")
      cy.get(contactFrom.message).type("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis nisi id eros pellentesque tincidunt.")
      cy.get(contactFrom.submitButton).click()
      cy.get(contactFrom.popup).should('be.visible').should('contain', 'Le message a été envoyé.')

    })

  })

  //Test fail because the Gender is missing
  it('Fail: Gender is mandatory', () => {
    const randomIndex = Math.floor(Math.random() * 19) + 1;
    cy.getUserInfo(randomIndex).then((userInfo) => {

      cy.get(contactFrom.firstName).type(userInfo.firstName)
      cy.get(contactFrom.lastName).type(userInfo.lastName)
      cy.get(contactFrom.company).type("UPS Company")
      cy.get(contactFrom.phone).type("+33 6 12 34 56 78")
      cy.get(contactFrom.messageTitle).type("Test fail title")
      cy.get(contactFrom.message).type("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis nisi id eros pellentesque tincidunt.")
      cy.get(contactFrom.submitButton).click()
      cy.get(contactFrom.popup).should('not.be.visible')

    })

  })

  //Test fail because the First name field is empty
  it('Fail: First name is mandatory', () => {
    const randomIndex = Math.floor(Math.random() * 19) + 1;
    cy.getUserInfo(randomIndex).then((userInfo) => {

      cy.selectGenderByTitle(userInfo.title)
      cy.get(contactFrom.lastName).type(userInfo.lastName)
      cy.get(contactFrom.company).type("UPS Company")
      cy.get(contactFrom.phone).type("+33 6 12 34 56 78")
      cy.get(contactFrom.messageTitle).type("Test fail title")
      cy.get(contactFrom.message).type("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis nisi id eros pellentesque tincidunt.")
      cy.get(contactFrom.submitButton).click()
      cy.get(contactFrom.popup).should('be.visible').should('contain', 'Veuillez remplir tous les champs obligatoires.')

    })

  })

//Test fail because the Last name field is empty
  it('Fail: Last name is mandatory', () => {
    const randomIndex = Math.floor(Math.random() * 19) + 1;
    cy.getUserInfo(randomIndex).then((userInfo) => {

      cy.selectGenderByTitle(userInfo.title)
      cy.get(contactFrom.firstName).type(userInfo.firstName)
      cy.get(contactFrom.company).type("UPS Company")
      cy.get(contactFrom.phone).type("+33 6 12 34 56 78")
      cy.get(contactFrom.messageTitle).type("Test fail title")
      cy.get(contactFrom.message).type("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis nisi id eros pellentesque tincidunt.")
      cy.get(contactFrom.submitButton).click()
      cy.get(contactFrom.popup).should('be.visible').should('contain', 'Veuillez remplir tous les champs obligatoires.')

    })

  })

//Test fail because Message field is empty
  it('Fail: Message is mandatory', () => {
    const randomIndex = Math.floor(Math.random() * 19) + 1;
    cy.getUserInfo(randomIndex).then((userInfo) => {

      cy.selectGenderByTitle(userInfo.title)
      cy.get(contactFrom.firstName).type(userInfo.firstName)
      cy.get(contactFrom.lastName).type(userInfo.lastName)
      cy.get(contactFrom.company).type("UPS Company")
      cy.get(contactFrom.phone).type("+33 6 12 34 56 78")
      cy.get(contactFrom.messageTitle).type("Test fail title")
      cy.get(contactFrom.submitButton).click()
      cy.get(contactFrom.popup).should('not.be.visible')

    })

  })

})