<template>
  <button
    :class="buttonsClassList"
    :disabled="disabled"
  >
    <i
      v-if="icon && iconPos === 'left'"
      :class="`db-icon db-icon-${icon} mr-2 text-lg`"
    />

    <slot>
      {{ label }}
    </slot>

    <i
      v-if="icon && iconPos === 'right'"
      :class="`db-icon db-icon-${icon} ml-2 text-lg`"
    />
  </button>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import { defineComponent } from 'vue';

import type { BUTTON_TYPE as ButtonType, SIZE_TYPE as SizeType } from '@/shared/emums';
import { BUTTON_TYPE, SIZE_TYPE } from '@/shared/emums';

const COMMON_BUTTON_CLASS_LIST: String[] = [
  'px-4',
  'py-2',
  'font-bold',
  'rounded-sm',
  'transition',
  'ease-in-out',
  'duration-300',
  'hover:shadow-lg',
  'flex',
  'flex-row',
  'justify-center',
  'items-center',
];

const BUTTON_SIZE_STYLES = {
  [SIZE_TYPE.SM]: 'text-sm',
  [SIZE_TYPE.MD]: 'text-base',
  [SIZE_TYPE.LG]: 'text-lg',
}

const STYLES_MAP = {
  [BUTTON_TYPE.DEFAULT]: {
    NORMAL: [
      'text-white',
      'bg-primary',
      'hover:bg-primary-darker',
      'focus:bg-primary-dark',
      'active:bg-primary-dark',
    ],
    DISABLED: [
      'bg-silver',
      'text-secondary',
      'hover:shadow-none',
    ],
  },
  [BUTTON_TYPE.OUTLINED]: {
    NORMAL: [
      'bg-white',
      'text-primary',
      'border',
      'border-primary',
      'hover:text-primary-darker',
      'hover:border-primary-darker',
      'focus:text-primary-dark',
      'focus:border-primary-dark',
      'active:text-primary-dark',
      'active:border-primary-dark',
    ],
    DISABLED: [
      'bg-white',
      'text-secondary',
      'border',
      'border-silver',
      'hover:shadow-none',
    ],
  },
  [BUTTON_TYPE.TEXT]: {
    NORMAL: [
      'bg-transparent',
      'text-primary',
      'hover:text-primary-darker',
      'focus:text-primary-dark',
      'active:text-primary-dark',
      'hover:shadow-none',
    ],
    DISABLED: [
      'bg-transparent',
      'text-secondary',
      'hover:shadow-none',
    ],
  },
}

export default defineComponent({
  name: 'BcButton',

  props: {
    disabled: {
      type: Boolean,
      default: false,
    },

    label: {
      type: String,
      default: '',
    },

    type: {
      type: String as PropType<ButtonType>,
      default: BUTTON_TYPE.DEFAULT,
    },

    size: {
      type: String as PropType<SizeType>,
      default: SIZE_TYPE.MD,
    },

    icon: {
      type: String,
      default: '',
    },

    iconPos: {
      type: String,
      default: 'right',
    },
  },

  computed: {
    buttonsClassList(): String {
      const styles = this.disabled
        ? STYLES_MAP[this.type].DISABLED || STYLES_MAP[BUTTON_TYPE.DEFAULT].DISABLED
        : STYLES_MAP[this.type].NORMAL || STYLES_MAP[BUTTON_TYPE.DEFAULT].NORMAL;

      return [...COMMON_BUTTON_CLASS_LIST, BUTTON_SIZE_STYLES[this.size || 'MD'], ...styles].join(' ');
    },
  }
});
</script>
