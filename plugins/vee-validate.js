import { defineNuxtPlugin } from 'nuxt/app';
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';
import ja from '@vee-validate/i18n/dist/locale/ja.json';

export default defineNuxtPlugin((nuxtApp) => {
  defineRule('required', required);
  defineRule('email', email);
  defineRule('min', min);

  configure({
    generateMessage: localize('ja', ja), // 日本語のエラーメッセージを設定
  });

  nuxtApp.vueApp.component('VForm', Form);
  nuxtApp.vueApp.component('VField', Field);
  nuxtApp.vueApp.component('ErrorMessage', ErrorMessage);
});
