import { boundMethod } from 'autobind-decorator';
import copy from 'copy-to-clipboard';
import Base64 from 'crypto-js/enc-base64';
import Utf8 from 'crypto-js/enc-utf8';
import { useTemplateRef } from '#imports';
import { isValidBase64 } from '~/utils/base64';

export class Base64codeService {
  public containerRef = useTemplateRef<HTMLDivElement>('container');
  public textarea1Ref = useTemplateRef<HTMLTextAreaElement>('textarea1');
  public textarea2Ref = useTemplateRef<HTMLTextAreaElement>('textarea2');

  public input = '';
  public output = '';
  public copyTooltipInput = '点击复制';
  public copyTooltipOutput = '点击复制';
  public decodeError = false;

  @boundMethod
  public handleEncode() {
    const wordArray = Utf8.parse(this.input);
    this.decodeError = false;
    this.output = Base64.stringify(wordArray);
  }

  @boundMethod
  public handleDecode() {
    // decode需要特殊处理，可能不是有效的base64字符串
    if (isValidBase64(this.input)) {
      try {
        const parsedWordArray = Base64.parse(this.input);
        this.output = parsedWordArray.toString(Utf8);
        this.decodeError = false;
      } catch (e) {
        this.decodeError = true;
        this.output = 'base64解码异常';
      }
    } else {
      this.decodeError = true;
      this.output = '无效的base64字符串';
    }
  }

  @boundMethod
  public handleSwap() {
    const tmp = this.input;
    this.input = this.output;
    this.output = tmp;
  }

  @boundMethod
  public handleEmptyInput() {
    this.input = '';
  }

  @boundMethod
  public handleCopyInput() {
    copy(this.input);
    this.copyTooltipInput = '复制成功';
    setTimeout(() => {
      this.copyTooltipInput = '点击复制';
    }, 2000);
  }

  @boundMethod
  public handleEmptyOutput() {
    this.output = '';
  }

  @boundMethod
  public handleCopyOutput() {
    copy(this.output);
    this.copyTooltipOutput = '复制成功';
    setTimeout(() => {
      this.copyTooltipOutput = '点击复制';
    }, 2000);
  }

  @boundMethod
  public handleMousedownInput() {
    if (
      this.textarea1Ref.value &&
      this.textarea2Ref.value &&
      this.containerRef.value
    ) {
      const computedStyle = window.getComputedStyle(this.containerRef.value);
      if (computedStyle.getPropertyValue('flex-direction') === 'column') {
        return;
      }
      const h1 = this.textarea1Ref.value.style.height;
      const h2 = this.textarea2Ref.value.style.height;
      if (!h1 && h2) {
        this.textarea1Ref.value.style.height = h2;
      }
      this.textarea2Ref.value.style.height = '';
    }
  }

  @boundMethod
  public handleMousedownOutput() {
    if (
      this.textarea1Ref.value &&
      this.textarea2Ref.value &&
      this.containerRef.value
    ) {
      const computedStyle = window.getComputedStyle(this.containerRef.value);
      if (computedStyle.getPropertyValue('flex-direction') === 'column') {
        return;
      }
      const h1 = this.textarea1Ref.value.style.height;
      const h2 = this.textarea2Ref.value.style.height;
      if (h1 && !h2) {
        this.textarea2Ref.value.style.height = h1;
      }
      this.textarea1Ref.value.style.height = '';
    }
  }
}
