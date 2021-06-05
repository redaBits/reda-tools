<template>
  <ValidationObserver v-slot="{ invalid }" ref="form">
    <v-container>
      <v-form>
        <v-row>
          <template v-for="(input, i) in options.inputs">
            <v-col cols="12" :sm="input.cols" :key="i">
              <ValidationProvider v-if="input.type !== 'table'" v-slot="{ errors }" :name="input.name" :rules="input.rules">
                <v-text-field
                v-if="input.type === 'text' || input.type === 'number'"
                :error-messages="errors"
                :value="value[input.value]"
                :append-icon="input.appendIcon || undefined"
                :append-outer-icon="input.appendOuterIcon || undefined"
                :autofocus="input.autofocus || false"
                :background-color="input.backgroundColor || undefined"
                :clear-icon="input.clearIcon || '$clear'"
                :clearable="input.clearable || false"
                :color="input.color || undefined"
                :counter="input.counter || undefined"
                :counter-value="input.counterValue || null"
                :dark="input.dark || false"
                :dense="input.dense || false"
                :disabled="input.disabled || false"
                :error="input.error || false"
                :error-count="input.errorCount || 1"
                :filled="input.filled || false"
                :flat="input.flat || false"
                :full-width="input.fullWidth || false"
                :height="input.height || undefined"
                :hide-details="input.hideDetails || undefined"
                :hint="input.hint || undefined"
                :id="input.id || undefined"
                :label="input.label || undefined"
                :light="input.light || false"
                :loader-height="input.loaderHeight || 2"
                :loading="input.loading || false"
                :messages="input.messages || []"
                :outlined="input.outlined || false"
                :persistent-hint="input.persistentHint || false"
                :placeholder="input.placeholder || undefined"
                :prefix="input.prefix || undefined"
                :prepend-icon="input.prependIcon || undefined"
                :prepend-inner-icon="input.prependInnerIcon || undefined"
                :readonly="input.readonly || false"
                :reverse="input.reverse || false"
                :rounded="input.rounded || false"
                :shaped="input.shaped || false"
                :single-line="input.singleLine || false"
                :solo="input.solo || false"
                :solo-inverted="input.soloInverted || false"
                :success="input.success || false"
                :success-messages="input.successMessages || []"
                :suffix="input.suffix || undefined"
                :validate-on-blur="input.validateOnBlur || false"
                @input="inputEmit({
                  value: $event,
                  item: input,
                })"
                @change="inputEmit({
                  value: $event,
                  item: input,
                })"
                @blur="inputEmit({
                  value: $event.target.value,
                  item: input,
                })"
                ></v-text-field>
                <v-autocomplete
                v-if="input.type === 'autocomplete'"
                :error-messages="errors"
                :value="value[input.value]"
                :allow-overflow="input.allowOverflow || true"
                :append-icon="input.appendIcon || '$dropdown'"
                :append-outer-icon="input.appendOuterIcon || undefined"
                :attach="input.attach || false"
                :auto-select-first="input.autoSelectFirst || false"
                :autofocus="input.autofocus || false"
                :background-color="input.backgroundColor || undefined"
                :cache-items="input.cacheItems || false"
                :chips="input.chips || false"
                :clear-icon="input.clearIcon || '$clear'"
                :clearable="input.clearable || false"
                :color="input.color || undefined"
                :counter="input.counter || undefined"
                :counter-value="input.counterValue || null"
                :dark="input.dark || false"
                :deletable-chips="input.deletableChips || false"
                :dense="input.dense || false"
                :disable-lookup="input.disableLookup || false"
                :disabled="input.disabled || false"
                :eager="input.eager || false"
                :error="input.error || false"
                :error-count="input.errorCount || 1"
                :filled="input.filled || false"
                :filter="input.filter ? input.filter : (item, queryText, itemText) => {}"
                :flat="input.flat || false"
                :full-width="input.fullWidth || false"
                :height="input.height || undefined"
                :hide-details="input.hideDetails || undefined"
                :hide-no-data="input.hideNoData || false"
                :hide-selected="input.hideSelected || false"
                :hint="input.hint || undefined"
                :id="input.id || undefined"
                :item-color="input.itemColor || 'primary'"
                :item-disabled="input.itemDisabled || 'disabled'"
                :item-text="input.itemText || 'text'"
                :item-value="input.itemValue || 'value'"
                :items="input.items || []"
                :label="input.label || undefined"
                :light="input.light || false"
                :loader-height="input.loaderHeight || 2"
                :loading="input.loading || false"
                :menu-props="input.menuProps || {
                  closeOnClick: false,
                  closeOnContentClick: false,
                  disableKeys: true,
                  openOnClick: false,
                  maxHeight: 304
                }"
                :messages="input.messages || []"
                :multiple="input.multiple || false"
                :no-data-text="input.noDataText || '$vuetify.noDataText'"
                :no-filter="input.noFilter || false"
                :open-on-clear="input.openOnClear || false"
                :outlined="input.outlined || false"
                :persistent-hint="input.persistentHint || false"
                :placeholder="input.placeholder || undefined"
                :prefix="input.prefix || undefined"
                :prepend-icon="input.prependIcon || undefined"
                :prepend-inner-icon="input.prependInnerIcon || undefined"
                :readonly="input.readonly || false"
                :return-object="input.returnObject || false"
                :reverse="input.reverse || false"
                :rounded="input.rounded || false"
                :search-input="input.searchInput || undefined"
                :shaped="input.shaped || false"
                :single-line="input.singleLine || false"
                :small-chips="input.smallChips || false"
                :solo="input.solo || false"
                :solo-inverted="input.soloInverted || false"
                :success="input.success || false"
                :success-messages="input.successMessages || []"
                :suffix="input.suffix || undefined"
                :type="input.type || 'text'"
                :validate-on-blur="input.validateOnBlur || false"
                @input="inputEmit({
                  value: $event,
                  item: input,
                })"
                @change="inputEmit({
                  value: $event,
                  item: input,
                })"
                @blur="inputEmit({
                  value: $event.target.value,
                  item: input,
                })"
                ></v-autocomplete>
                <v-select
                v-if="input.type === 'select'"
                :error-messages="errors"
                :value="value[input.value]"
                :append-icon="input.appendIcon || '$dropdown'"
                :append-outer-icon="input.appendOuterIcon || undefined"
                :attach="input.attach || false"
                :autofocus="input.autofocus || false"
                :background-color="input.backgroundColor || undefined"
                :cache-items="input.cacheItems || false"
                :chips="input.chips || false"
                :clear-icon="input.clearIcon || '$clear'"
                :clearable="input.clearable || false"
                :color="input.color || undefined"
                :counter="input.counter || undefined"
                :counter-value="input.counterValue || null"
                :dark="input.dark || false"
                :deletable-chips="input.deletableChips || false"
                :dense="input.dense || false"
                :disable-lookup="input.disableLookup || false"
                :disabled="input.disabled || false"
                :eager="input.eager || false"
                :error="input.error || false"
                :error-count="input.errorCount || 1"
                :filled="input.filled || false"
                :flat="input.flat || false"
                :full-width="input.fullWidth || false"
                :height="input.height || undefined"
                :hide-details="input.hideDetails || undefined"
                :hide-selected="input.hideSelected || false"
                :hint="input.hint || undefined"
                :id="input.id || undefined"
                :item-color="input.itemColor || 'primary'"
                :item-disabled="input.itemDisabled || 'disabled'"
                :item-text="input.itemText || 'text'"
                :item-value="input.itemValue || 'value'"
                :items="input.items || []"
                :label="input.label || undefined"
                :light="input.light || false"
                :loader-height="input.loaderHeight || 2"
                :loading="input.loading || false"
                :menu-props="input.menuProps || {
                  'closeOnClick': false,
                  'closeOnContentClick': false,
                  'disableKeys': true,
                  'openOnClick': false,
                  'maxHeight': 304
                }"
                :messages="input.messages || []"
                :multiple="input.multiple || false"
                :no-data-text="input.noDataText || '$vuetify.noDataText'"
                :open-on-clear="input.openOnClear || false"
                :outlined="input.outlined || false"
                :persistent-hint="input.persistentHint || false"
                :placeholder="input.placeholder || undefined"
                :prefix="input.prefix || undefined"
                :prepend-icon="input.prependIcon || undefined"
                :prepend-inner-icon="input.prependInnerIcon || undefined"
                :readonly="input.readonly || false"
                :return-object="input.returnObject || false"
                :reverse="input.reverse || false"
                :rounded="input.rounded || false"
                :shaped="input.shaped || false"
                :single-line="input.singleLine || false"
                :small-chips="input.smallChips || false"
                :solo="input.solo || false"
                :solo-inverted="input.soloInverted || false"
                :success="input.success || false"
                :success-messages="input.successMessages || []"
                :suffix="input.suffix || undefined"
                :validate-on-blur="input.validateOnBlur || false"
                @input="inputEmit({
                  value: $event,
                  item: input,
                })"
                @change="inputEmit({
                  value: $event,
                  item: input,
                })"
                ></v-select>
                <v-checkbox
                v-if="input.type === 'checkbox'"
                :error-messages="errors"
                :value="value[input.value]"
                :append-icon="input.appendIcon"
                :background-color="input.backgroundColor"
                :color="input.color"
                :dark="input.dark || false"
                :dense="input.dense || false"
                :disabled="input.disabled || false"
                :error="input.error || false"
                :error-count="input.errorCount || 1"
                :false-value="input.falseValue"
                :hide-details="input.hideDetails"
                :hint="input.hint"
                :id="input.id"
                :indeterminate="input.indeterminate || false"
                :indeterminate-icon="input.indeterminateIcon || '$checkboxIndeterminate'"
                :input-value="value[input.value]"
                :label="input.label || undefined"
                :light="input.light || false"
                :messages="input.messages || []"
                :multiple="input.multiple || false"
                :off-icon="input.offIcon || '$checkboxOff'"
                :on-icon="input.onIcon || '$checkboxOn'"
                :persistent-hint="input.persistentHint || false"
                :prepend-icon="input.prependIcon"
                :readonly="input.readonly || false"
                :ripple="input.ripple || true"
                :success="input.success || false"
                :success-messages="input.successMessages || []"
                :true-value="input.trueValue"
                :validate-on-blur="input.validateOnBlur || false"
                @change="inputEmit({
                  value: $event,
                  item: input,
                })"
                @blur="inputEmit({
                  value: $event.target.value,
                  item: input,
                })"
                ></v-checkbox>
                <div class="text-body-2 error--text" v-for="(error, i) in errors" :key="i">
                  {{error}}
                </div>
              </ValidationProvider>
              <DataTableCRUD 
                v-if="input.type === 'table'"
                :table="input.table"
                :options="input.options"
                @input="inputEmit({
                  value: $event,
                  item: input,
                })"
                :value="value[input.value]"
              ></DataTableCRUD>
            </v-col>
          </template>
        </v-row>
      </v-form>
    </v-container>
    <v-btn
      color="primary"
      :disabled="invalid"
      @click="$emit('submitForm')"
      v-if="options.showSubmit"
    >
      {{options.submitText}}
    </v-btn>

    <v-btn text @click="$emit('cancel')" v-if="options.showCancel">{{options.cancelText}}</v-btn>
  </ValidationObserver>
</template>

<script>
// @ is an alias to /src
import {
  extend, ValidationObserver, ValidationProvider, setInteractionMode,
} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import { messages } from 'vee-validate/dist/locale/es.json';

setInteractionMode('eager');

Object.keys(rules).forEach((rule) => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule], // assign message
  });
});

extend('required', {
  validate(value) {
    return {
      required: true,
      valid: ['', null, undefined, false].indexOf(value) === -1,
    };
  },
  computesRequired: true,
});

export default {
  name: 'RedaForm',
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  props: [
    'value',
    'options',
  ],
  data: () => ({
    invalid: false,
    isMounted: false,
  }),
  mounted() {
    this.isMounted = true;
  },
  computed: {
    valid() {
      if (!this.isMounted) {
        return false;
      }
      return this.$refs.form.flags.valid;
    },
  },
  methods: {
    emitInvalid(invalid) {
      console.log(invalid);
    },
    validate() {
      return new Promise((resolve, reject) => {
        this.$refs.form.validate()
          .then((success) => {
            resolve(success);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    inputEmit({ item, value }) {
      this.$refs.form.validate()
        .then((success) => {
          this.$emit('valid', success);
        })
        .catch( (error) => {
          console.error(error);
        });
      let newValue;
      if (item.type === 'checkbox' && value === null) {
        newValue = false;
      } else if (item.type === 'number') {
        newValue = Number(value);
      } else {
        newValue = value;
      }
      const items = { ...this.value };
      const index = this.options.inputs.indexOf(item);
      if (index < 0) {
        console.error(`El valor ${item} no existe`);
        return;
      }
      const inputValue = this.options.inputs[index].value;
      items[inputValue] = newValue;
      this.$emit('input', items); /* */
    },
  },
};
</script>
