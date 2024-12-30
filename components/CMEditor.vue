<script lang="ts" setup>
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
import { EditorView, ViewUpdate } from '@codemirror/view';
import { basicSetup } from 'codemirror';
import { onBeforeUnmount, onMounted, useTemplateRef } from '#imports';

defineProps({
  text: {
    type: String,
    required: false,
  },
});

const model = defineModel<string>();
const container = useTemplateRef<HTMLDivElement>('container');
let view: EditorView;

const theme = EditorView.theme({
  '&': {
    minHeight: '500px',
  },
});

const onUpdateExt = EditorView.updateListener.of((v: ViewUpdate) => {
  if (v.docChanged) {
    model.value = v.state.doc.toString();
    console.log(v);
  }
});

onMounted(() => {
  view = new EditorView({
    parent: container.value as HTMLDivElement,
    doc: model.value,
    extensions: [basicSetup, javascript(), theme, onUpdateExt],
  });
});

onBeforeUnmount(() => {
  if (view) {
    view.destroy();
  }
});
</script>

<template>
  <div ref="container"></div>
</template>
