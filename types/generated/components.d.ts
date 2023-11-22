import type { Schema, Attribute } from '@strapi/strapi';

export interface PaymentPaypalButton extends Schema.Component {
  collectionName: 'components_payment_paypal_buttons';
  info: {
    displayName: 'paypal_button';
    icon: 'handHeart';
  };
  attributes: {
    link: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'payment.paypal-button': PaymentPaypalButton;
    }
  }
}
