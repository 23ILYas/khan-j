
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
  
  

