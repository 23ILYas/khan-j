describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('displays the resources text', () => {
    cy.get('h2')
    .contains('This is a bare-bones Hugo project that has everything you need to quickly deploy it to Netlify');
  })
  it('renders the image', () => {
    cy.get('img')
    .should('be.visible')
    .and(($img) => {
      expect($img[0].naturalWidth).to.be.greaterThan(0);
      var cpm = {
  onInitialise: function(status) {
    if (this.hasConsented('analytics')) {
      console.log('The analytics category is allowed');
    }
  },
  onStatusChange: function(status, previousStatus) {
    if (this.hasConsented("analytics")) {
      console.log('The analytics category is allowed');
    }
  },
  onAllow: function(category) {
    if (category == 'analytics') {
      console.log('The analytics category was just allowed');
    }
  },
  onRevoke: function(category) {
    if (category == 'analytics') {
      console.log('The analytics category was just revoked');
    }
  },
};
    })
  })
})
