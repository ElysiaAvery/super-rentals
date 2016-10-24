import DS from 'ember-data';

export default DS.Model.extend({

  upcomingSales: DS.attr(),
  weatherWarnings: DS.attr(),
  otherNews: DS.attr()

});
