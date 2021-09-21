import Application from 'ember-twiddle-edit/app';
import config from 'ember-twiddle-edit/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
