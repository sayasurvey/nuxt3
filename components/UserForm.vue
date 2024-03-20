<template>
  <Form @submit="handleSubmit" v-slot="{ errors }">
    <div>
      <label for="email">Email</label>
      <Field id="email" name="email" type="email" rules="required|email" />
      <ErrorMessage name="email" />
    </div>
    <div>
      <label for="password">Password</label>
      <VField id="password" name="password" type="password" rules="required|min:6" />
      <ErrorMessage name="password" />
    </div>
    <button type="submit">登録</button>
  </Form>
</template>

<script setup lang="ts">
  import { useForm, ErrorMessage, Form, Field } from 'vee-validate';

  const handleSubmit = (values: any) => {
    // フォーム送信時の処理
    console.log('フォーム送信:', values);
  };

  useForm({
    onSubmit: handleSubmit
  });
</script>
