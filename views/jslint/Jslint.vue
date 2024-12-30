<script lang="ts" setup>
import { declareProviders, useService } from '@kaokei/use-vue-service';
import CMEditor from '~/components/CMEditor.vue';
import { JslintService } from './Jslint.service';

declareProviders([JslintService]);

const service = useService(JslintService);
</script>

<template>
  <div class="px-6 py-10">
    <article class="prose mb-4 lg:prose-xl">
      <h2>JS格式化/压缩</h2>
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
            :disabled="!service.input"
            class="btn btn-success flex flex-1"
            @click="service.handleCopyInput"
          >
            <i-local-copy class="size-6" />
            <span>{{ service.copyTooltipInput }}</span>
          </button>
          <button
            :disabled="!service.input"
            class="btn flex flex-1"
            @click="service.handleEmptyInput"
          >
            <i-local-clear class="size-6" />
            <span>清空</span>
          </button>
        </div>

        <CMEditor v-model="service.input" placeholder="请输入任意文字" />
      </div>
      <div class="divider h-12 lg:divider-horizontal lg:h-auto lg:w-16">
        <button class="btn btn-primary" @click="service.handleBeautify">
          美化
        </button>
        <button class="btn btn-secondary" @click="service.handleMinify">
          压缩
        </button>
        <button class="btn btn-neutral" @click="service.handleSwap">
          <i-local-swap class="size-6 rotate-90 lg:rotate-0" />
        </button>
      </div>
      <div class="flex-grow lg:w-0">
        <div class="mb-2 flex justify-between gap-2">
          <button
            :disabled="!service.output"
            class="btn btn-success flex flex-1"
            @click="service.handleCopyOutput"
          >
            <i-local-copy class="size-6" />
            <span>{{ service.copyTooltipOutput }}</span>
          </button>
          <button
            :disabled="!service.output"
            class="btn flex flex-1"
            @click="service.handleEmptyOutput"
          >
            <i-local-clear class="size-6" />
            <span>清空</span>
          </button>
        </div>

        <CMEditor
          v-model="service.output"
          placeholder="这里是编码/解码的结果"
        />
      </div>
    </div>
  </div>
</template>
