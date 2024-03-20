import { defineNuxtPlugin } from 'nuxt/app';
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import ja from '@vee-validate/i18n/dist/locale/ja.json';

export default defineNuxtPlugin((nuxtApp) => {
  defineRule('required', required);
  defineRule('email', email);
  defineRule('min', min);

  configure({
    generateMessage: localize({
      ja
    }),
  });
 
  configure({
    generateMessage: localize('ja', {
      names: {
        password: 'パスワード',
        email: 'メールアドレス'
      },
    }),
  });

  nuxtApp.vueApp.component('VForm', Form);
  nuxtApp.vueApp.component('VField', Field);
  nuxtApp.vueApp.component('ErrorMessage', ErrorMessage);
});
