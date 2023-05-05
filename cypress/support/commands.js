Cypress.Commands.add('getUserInfo', (index) => {
    return cy.request({
      method: 'GET',
      url: 'https://dummyapi.io/data/v1/user',
      headers: {
        'app-id': '61f4248c9d9bb038eaf0c6c0',
        'Accept-Language': 'fr-FR'
      }
    }).then((response) => {
      let firstName = response.body.data[index].firstName;
      let lastName = response.body.data[index].lastName;
      let title = response.body.data[index].title;
      return { firstName, lastName, title };
    });
  });

  Cypress.Commands.add('selectGenderByTitle', (title) => {
    let optionIndex;
    switch (title) {
      case 'mr':
        optionIndex = 1;
        break;
      case 'ms':
      case 'mrs':
      case 'miss':
        optionIndex = 2;
        break;
      case 'other':
        optionIndex = 3;
        break;
        }
    cy.get('#gender').select(optionIndex);
  });