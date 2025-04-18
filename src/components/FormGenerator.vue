<template>
  <form @submit.prevent="handleSubmit" class="form-generator">
    <template v-for="field in schema" :key="field.name">
      <div class="form-field">
        <label v-if="field.label" :for="field.name">{{ field.label }}</label>

        <slot :name="field.name" v-bind="{ model, field }">
          <component
              :is="getComponentType(field.type)"
              v-bind="field.attrs"
              v-model="model[field.name]"
              :id="field.name"
          />
        </slot>
      </div>
    </template>

    <div class="form-actions">
      <button type="submit">Сохранить</button>
      <button type="button" @click="handleCancel">Отмена</button>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

interface FieldSchema {
  name: string;
  label?: string;
  type: string;
  attrs?: Record<string, any>;
}

const props = defineProps<{
  schema: FieldSchema[];
  modelValue: Record<string, any>;
}>();

const emit = defineEmits(['update:modelValue', 'submit', 'cancel']);

const model = props.modelValue;

function handleSubmit() {
  emit('submit', model);
}

function handleCancel() {
  emit('cancel');
}

function getComponentType(type: string) {
  switch (type) {
    case 'input':
      return 'input';
    case 'select':
      return 'select';
    case 'checkbox':
      return 'input';
    case 'textarea':
      return 'textarea';
    default:
      return 'input';
  }
}
</script>

<style lang="scss" scoped>
.form-generator {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-field {
  display: flex;
  flex-direction: column;
}

.form-actions {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
}
</style>
