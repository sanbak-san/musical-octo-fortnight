/* eslint-disable */
import { mapConfigToSetupObject, CT_TOKEN_COOKIE_NAME } from '@vue-storefront/commercetools/nuxt/helpers'
import { integrationPlugin } from '@vue-storefront/commercetools'

const moduleOptions = JSON.parse('{"api":{"uri":"https://api.commercetools.com/vsf-ct-dev/graphql","authHost":"https://auth.sphere.io","projectKey":"vsf-ct-dev","clientId":"RT4iJGDbDzZe4b2E6RyeNe9s","clientSecret":"5eBt3yfZJWw1j7V6kXjfKXpuFP-YQXpg","scopes":["manage_products:vsf-ct-dev","create_anonymous_token:vsf-ct-dev","manage_my_profile:vsf-ct-dev","manage_customer_groups:vsf-ct-dev","view_categories:vsf-ct-dev","introspect_oauth_tokens:vsf-ct-dev","manage_my_payments:vsf-ct-dev","manage_my_orders:vsf-ct-dev","manage_my_shopping_lists:vsf-ct-dev","view_published_products:vsf-ct-dev"]},"i18n":{"useNuxtI18nConfig":true},"locale":"en","currency":"USD","country":"US","acceptLanguage":["en","de"],"countries":[{"name":"US","label":"United States"},{"name":"AT","label":"Austria"},{"name":"DE","label":"Germany"},{"name":"NL","label":"Netherlands"}],"currencies":[{"name":"EUR","label":"Euro"},{"name":"USD","label":"Dollar"}],"locales":[{"name":"en","label":"English"},{"name":"de","label":"German"}]}');

export default integrationPlugin(({ app, integration }) => {
  const onTokenChange = (newToken) => {
    try {
      const currentToken = app.$cookies.get(CT_TOKEN_COOKIE_NAME);

      if (!currentToken || currentToken.access_token !== newToken.access_token) {
        app.$cookies.set(CT_TOKEN_COOKIE_NAME, newToken);
      }
    } catch (e) {
      // Cookies on is set after request has sent.
    }
  };

  const onTokenRemove = () => {
    app.$cookies.remove(CT_TOKEN_COOKIE_NAME);
  }

  const onTokenRead = () => {
    return app.$cookies.get(CT_TOKEN_COOKIE_NAME);
  };

  const settings = mapConfigToSetupObject({
    moduleOptions,
    app,
    additionalProperties: {
      auth: {
        onTokenChange,
        onTokenRead,
        onTokenRemove
      }
    }
  })

  integration.configure(settings)
});
