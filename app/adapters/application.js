import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: SoundemWebENV.apiNamespace,
  host: SoundemWebENV.apiHost
});
