const __resolved__virtual_storySource_srcComponentsBcButtonBcbuttonStoryVue = `<script setup>
import { reactive } from 'vue';
import { logEvent } from 'histoire/client';
import BcButton from '@/components/bc-button/BcButton.vue';

import { BUTTON_TYPE, SIZE_TYPE, POSITION_TYPE } from '@/shared/emums';

const sizeOptions = [
  {
    label: 'SM',
    value: SIZE_TYPE.SM,
  },
  {
    label: 'MD',
    value: SIZE_TYPE.MD,
  },
  {
    label: 'LG',
    value: SIZE_TYPE.LG,
  },
];

const iconPositionOptions = [
  {
    label: 'Left',
    value: POSITION_TYPE.LEFT,
  },
  {
    label: 'Right',
    value: POSITION_TYPE.RIGHT,
  },
];

const icons = {
  'chevron-down': 'chevron-down',
  'chevron-right': 'chevron-right',
  'notifications-without-bubble': 'notifications-without-bubble',
};

const state = reactive({
  disabled: false,
  content: 'Hello world',
  size: SIZE_TYPE.MD,
  icon: '',
  iconPosition: POSITION_TYPE.RIGHT,
});
<\/script>

<template>
  <Story title="BcButton">
    <template #controls>
      <HstText v-model="state.content" title="Content" />

      <HstCheckbox v-model="state.disabled" title="Disabled" />

      <HstButtonGroup
        v-model="state.size"
        title="Label"
        :options="sizeOptions"
      />

      <HstSelect
        v-model="state.icon"
        title="Icon"
        :options="icons"
      />

      <HstButtonGroup
        v-model="state.iconPosition"
        title="Icon Position"
        :options="iconPositionOptions"
      />
    </template>

    <Variant title="Default">
      <BcButton
        :label="state.content"
        :disabled="state.disabled"
        :size="state.size"
        :icon="state.icon"
        :icon-pos="state.iconPosition"
        @click="logEvent('click', $event)"
      />
    </Variant>

    <Variant title="Outlined">
      <BcButton
        :type="BUTTON_TYPE.OUTLINED"
        :label="state.content"
        :disabled="state.disabled"
        :size="state.size"
        :icon="state.icon"
        :icon-pos="state.iconPosition"
        @click="logEvent('click', $event)"
      />️
    </Variant>

    <Variant title="Text">
      <BcButton
        :type="BUTTON_TYPE.TEXT"
        :label="state.content"
        :disabled="state.disabled"
        :size="state.size"
        :icon="state.icon"
        :icon-pos="state.iconPosition"
        @click="logEvent('click', $event)"
      />
    </Variant>
  </Story>
</template>

<docs lang="md">
# My documentation
</docs>
`;
export {
  __resolved__virtual_storySource_srcComponentsBcButtonBcbuttonStoryVue as default
};
