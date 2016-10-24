import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow() {
      this.set('addNewAnnouncement', true);
    },

    saveAnnouncement1() {
      var params = {
        upcomingSales: this.get('upcomingSales') ? this.get('upcomingSales') : "",
        weatherWarnings: this.get('weatherWarnings') ? this.get('weatherWarnings') : "",
        otherNews: this.get('otherNews') ? this.get('otherNews') : "",
      };
      this.set('addNewAnnouncement', false);
      this.sendAction('saveAnnouncement2',params);
    }
  }
});
