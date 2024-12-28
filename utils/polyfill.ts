import 'reflect-metadata';
// import ResizeObserver from 'resize-observer-polyfill';

// if (typeof window.ResizeObserver === 'undefined') {
//   window.ResizeObserver = ResizeObserver;
// }

// if (typeof window.WeakRef === 'undefined') {
//   class WeakRef<T extends object> {
//     private static _idCounter = 0;
//     private static _store = new Map<number, any>();

//     private _id: number;

//     constructor(target: T) {
//       if (typeof target !== 'object' || target === null) {
//         throw new TypeError('WeakRef: target must be an object');
//       }
//       this._id = WeakRef._idCounter++;
//       WeakRef._store.set(this._id, target);
//     }

//     deref(): T | undefined {
//       return WeakRef._store.get(this._id);
//     }
//   }

//   (window as any).WeakRef = WeakRef;
// }
// //兼容ios12
// if (!window.matchMedia('all').addEventListener) {
//   // 缓存原始 matchMedia 实现
//   const oldMatchMedia = window.matchMedia;

//   // 扩展 MediaQueryList 对象以支持 addEventListener
//   const patchMediaQueryList = (mediaQueryList: MediaQueryList) => {
//     if (typeof mediaQueryList.addListener === 'function') {
//       mediaQueryList.addEventListener = (
//         type: string,
//         listener: EventListener,
//       ) => {
//         if (type === 'change') {
//           mediaQueryList.addListener(listener);
//         }
//       };
//     }
//     return mediaQueryList;
//   };

//   // 替换 window.matchMedia 为新版本
//   window.matchMedia = (query) => {
//     const mediaQueryList = oldMatchMedia(query);
//     return patchMediaQueryList(mediaQueryList);
//   };
// }
