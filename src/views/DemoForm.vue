<template>
  <div class="demo-form">
    <h1>Демо форма 1</h1>

    <FormGenerator
        :schema="formSchema"
        v-model="formData"
        @submit="handleSubmit"
        @cancel="handleCancel"
    >
      <template #username="{ model, field }">
        <input
            v-bind="field.attrs"
            v-model="model.username"
            :id="field.name"
            class="custom-input"
        />
      </template>
    </FormGenerator>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import FormGenerator from '@/components/FormGenerator.vue';

const formData = ref({
  username: '',
  email: '',
  agree: false,
});

const formSchema = [
  { name: 'username', label: 'Имя пользователя', type: 'input', attrs: { type: 'text', placeholder: 'Введите имя' } },
  { name: 'email', label: 'Email', type: 'input', attrs: { type: 'email', placeholder: 'Введите email' } },
  { name: 'agree', label: 'Согласие', type: 'checkbox', attrs: { type: 'checkbox' } },
];

function handleSubmit(data: any) {
  console.log('Submit', data);
}

function handleCancel() {
  console.log('Cancel');
}
</script>

<style lang="scss" scoped>
.demo-form {
  max-width: 600px;
  margin: 2rem auto;
}

.custom-input {
  border: 1px solid #ccc;
  padding: 0.5rem;
}
</style>
