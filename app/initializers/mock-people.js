import Ember from 'ember';

const PEOPLE_JSON = `{
  "data": [
    {
      "type": "people",
      "id": "1",
      "attributes": {
        "name": "Alice"
      }
    },
    {
      "type": "people",
      "id": "2",
      "attributes": {
        "name": "Bob"
      }
    },
    {
      "type": "people",
      "id": "3",
      "attributes": {
        "name": "Carla"
      }
    }
  ]
}`;

export function initialize(/* application */) {
  Ember.$.mockjaxSettings.responseTime = 0;

  Ember.$.mockjax({
    url: '/people',
    dataType: 'json',
    responseText: PEOPLE_JSON
  });
}

export default {
  name: 'mock-people',
  initialize
};
