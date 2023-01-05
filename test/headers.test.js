import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/header/Header.js';
import Sinon  from 'sinon';


describe('loan-header', async () => {
  const el = await fixture(html`<loan-header></loan-headers>`);
const form = el.shadowRoot.querySelectorAll('button');
  
  it('check for spy', () => {
    const abc = Sinon.spy(el, "localeChanged");
    form[0].click();
    expect(abc.calledOnce).to.be.true;
  });

it('check accessible', () => {
  expect(el).to.be.accessible;
});
});
