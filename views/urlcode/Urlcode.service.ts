import autobind from 'autobind-decorator';
import copy from 'copy-to-clipboard';
import { useTemplateRef } from '#imports';
import { isValidBase64 } from '~/utils/base64';

export class UrlcodeService {
  public containerRef = useTemplateRef<HTMLDivElement>('container');
  public textarea1Ref = useTemplateRef<HTMLTextAreaElement>('textarea1');
  public textarea2Ref = useTemplateRef<HTMLTextAreaElement>('textarea2');

  public input = '';
  public output = '';
  public copyTooltipInput = '点击复制';
  public copyTooltipOutput = '点击复制';
  public decodeError = false;

  public encode_uri_flag = false;

  private encode(str: string) {
    if (this.encode_uri_flag) {
      return encodeURI(str);
    }
    return encodeURIComponent(str);
  }
  private decode(str: string) {
    if (this.encode_uri_flag) {
      return decodeURI(str);
    }
    return decodeURIComponent(str);
  }

  @autobind
  public handleEncode() {
    this.decodeError = false;
    this.output = this.encode(this.input);
  }

  @autobind
  public handleDecode() {
    // decode需要特殊处理，可能不是有效的url encode字符串
    try {
      this.output = this.decode(this.input);
      this.decodeError = false;
    } catch (e) {
      this.decodeError = true;
      this.output = 'URL解码异常';
    }
  }

  @autobind
  public handleSwap() {
    const tmp = this.input;
    this.input = this.output;
    this.output = tmp;
  }

  @autobind
  public handleEmptyInput() {
    this.input = '';
  }

  @autobind
  public handleCopyInput() {
    copy(this.input);
    this.copyTooltipInput = '复制成功';
    setTimeout(() => {
      this.copyTooltipInput = '点击复制';
    }, 2000);
  }

  @autobind
  public handleEmptyOutput() {
    this.output = '';
  }

  @autobind
  public handleCopyOutput() {
    copy(this.output);
    this.copyTooltipOutput = '复制成功';
    setTimeout(() => {
      this.copyTooltipOutput = '点击复制';
    }, 2000);
  }

  @autobind
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

  @autobind
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
