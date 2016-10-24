import Ember from 'ember';

export default Ember.Component.extend({
  isAnnouncmentsShowing: false,
  actions: {
    announcementsShow: function() {
      this.set('isAnnouncementsShowing', true);
    },
    announcementsHide: function() {
      this.set('isAnnouncementsShowing', false);
    },
    delete(announcement) {
      if (confirm('Do you REALLY want to do this?')) {
        this.sendAction('destroyAnnouncement', announcement);
      }
    }
  }
});
