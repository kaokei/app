<script lang="ts" setup>
import copy from 'copy-to-clipboard';
import Base64 from 'crypto-js/enc-base64';
import Utf8 from 'crypto-js/enc-utf8';
import { nextTick, reactive, useSeoMeta, useTemplateRef } from '#imports';
import { isValidBase64 } from '~/utils/base64';

useSeoMeta({
  title: 'kaokei',
});

const containerRef = useTemplateRef<HTMLDivElement>('container');
const textarea1Ref = useTemplateRef<HTMLTextAreaElement>('textarea1');
const textarea2Ref = useTemplateRef<HTMLTextAreaElement>('textarea2');
const model = reactive({
  input: '',
  output: '',
  copyTooltipInput: '点击复制',
  copyTooltipOutput: '点击复制',
  decodeError: false,
});
const handleEncode = () => {
  const wordArray = Utf8.parse(model.input);
  model.decodeError = false;
  model.output = '';
  nextTick(() => {
    model.output = Base64.stringify(wordArray);
  });
};
const handleDecode = () => {
  // decode需要特殊处理，可能不是有效的base64字符串
  if (isValidBase64(model.input)) {
    try {
      const parsedWordArray = Base64.parse(model.input);
      model.output = parsedWordArray.toString(Utf8);
      model.decodeError = false;
    } catch (e) {
      model.decodeError = true;
      model.output = 'base64解码异常';
    }
  } else {
    model.decodeError = true;
    model.output = '无效的base64字符串';
  }
};
const handleSwap = () => {
  const tmp = model.input;
  model.input = model.output;
  model.output = tmp;
};
const handleEmpty1 = () => {
  model.input = '';
};
const handleCopy1 = () => {
  copy(model.input);
  model.copyTooltipInput = '复制成功';
  setTimeout(() => {
    model.copyTooltipInput = '点击复制';
  }, 2000);
};
const handleEmpty2 = () => {
  model.output = '';
};
const handleCopy2 = () => {
  copy(model.output);
  model.copyTooltipOutput = '复制成功';
  setTimeout(() => {
    model.copyTooltipOutput = '点击复制';
  }, 2000);
};

const handleMousedown1 = (e: any) => {
  if (textarea1Ref.value && textarea2Ref.value && containerRef.value) {
    const computedStyle = window.getComputedStyle(containerRef.value);
    if (computedStyle.getPropertyValue('flex-direction') === 'column') {
      return;
    }
    const h1 = textarea1Ref.value.style.height;
    const h2 = textarea2Ref.value.style.height;
    if (!h1 && h2) {
      textarea1Ref.value.style.height = h2;
    }
    textarea2Ref.value.style.height = '';
  }
};
const handleMousedown2 = (e: any) => {
  if (textarea1Ref.value && textarea2Ref.value && containerRef.value) {
    const computedStyle = window.getComputedStyle(containerRef.value);
    if (computedStyle.getPropertyValue('flex-direction') === 'column') {
      return;
    }
    const h1 = textarea1Ref.value.style.height;
    const h2 = textarea2Ref.value.style.height;
    if (h1 && !h2) {
      textarea2Ref.value.style.height = h1;
    }
    textarea1Ref.value.style.height = '';
  }
};
</script>

<template>
  <div class="px-6 py-10">
    <article class="prose mb-4 lg:prose-xl">
      <h2>Base64编码/解码</h2>
      <ol>
        <li>请在左侧文本输入框区域输入任意字符串；</li>
        <li>点击中间区域的编码按钮/解码按钮；</li>
        <li>右侧区域是展示编码结果/解码结果的地方。</li>
      </ol>
    </article>

    <div ref="container" class="flex w-full flex-col lg:flex-row">
      <div class="flex-grow lg:w-0">
        <div class="mb-2 flex justify-between gap-2">
          <button
            :disabled="!model.input"
            class="btn btn-success flex flex-1"
            @click="handleCopy1"
          >
            <i-copy class="size-6" />
            <span>{{ model.copyTooltipInput }}</span>
          </button>
          <button
            :disabled="!model.input"
            class="btn flex flex-1"
            @click="handleEmpty1"
          >
            <i-clear class="size-6" />
            <span>清空</span>
          </button>
        </div>
        <textarea
          ref="textarea1"
          v-model="model.input"
          placeholder="请输入任意文字"
          class="textarea textarea-bordered block h-[calc(100%-theme(space.14))] min-h-48 w-full lg:min-h-144"
          @mousedown="handleMousedown1"
        ></textarea>
      </div>
      <div class="divider h-12 lg:divider-horizontal lg:h-auto lg:w-16">
        <button class="btn btn-primary" @click="handleEncode">编码</button>
        <button class="btn btn-secondary" @click="handleDecode">解码</button>
        <button class="btn btn-neutral" @click="handleSwap">
          <i-swap class="size-6 rotate-90 lg:rotate-0" />
        </button>
      </div>
      <div class="flex-grow lg:w-0">
        <div class="mb-2 flex justify-between gap-2">
          <button
            :disabled="!model.output"
            class="btn btn-success flex flex-1"
            @click="handleCopy2"
          >
            <i-copy class="size-6" />
            <span>{{ model.copyTooltipOutput }}</span>
          </button>
          <button
            :disabled="!model.output"
            class="btn flex flex-1"
            @click="handleEmpty2"
          >
            <i-clear class="size-6" />
            <span>清空</span>
          </button>
        </div>
        <textarea
          ref="textarea2"
          readonly
          v-model="model.output"
          placeholder="这里是编码/解码的结果"
          class="textarea textarea-bordered block h-[calc(100%-theme(space.14))] min-h-144 w-full"
          :class="[
            model.decodeError ? 'textarea-error text-4xl text-danger' : '',
          ]"
          @mousedown="handleMousedown2"
        ></textarea>
      </div>
    </div>
  </div>
</template>
