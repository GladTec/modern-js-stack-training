/* eslint-disable import/no-extraneous-dependencies */

import { should } from 'chai';
import { describe, it } from 'mocha';

import Dog from '../dog';

should();

describe('Dog', () => {
  describe('Bark', () => {
    it('should bark its name', () => {
      new Dog('Test').bark().should.equal('Wah wah, I am Test');
    });
  });
});

