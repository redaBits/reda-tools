<template>
  <v-data-table
    :calculate-widths="table.calculateWidths || false"
    :caption="table.caption"
    :custom-filter="table.customFilter"
    :custom-group="table.customGroup"
    :custom-sort="table.customSort"
    :dark="table.dark || false"
    :dense="table.dense || false"
    :disable-filtering="table.disableFiltering || false"
    :disable-pagination="table.disablePagination || false"
    :disable-sort="table.disableSort || false"
    :expand-icon="table.expandIcon || '$expand'"
    :expanded="table.expanded || []"
    :fixed-header="table.fixedHeader || false"
    :footer-props="table.footerProps"
    :group-by="table.groupBy || []"
    :group-desc="table.groupDesc || []"
    :header-props="table.headerProps"
    :headers="options.headers || []"
    :headers-length="table.headersLength"
    :height="table.height"
    :hide-default-footer="table.hideDefaultFooter || false"
    :hide-default-header="table.hideDefaultHeader || false"
    :item-class="table.itemClass"
    :item-key="table.itemKey || 'id'"
    :items="value"
    :items-per-page="table.itemsPerPage || 10"
    :light="table.light || false"
    :loader-height="table.loaderHeight || 4"
    :loading="table.loading || false"
    :loading-text="table.loadingText || '$vuetify.dataIterator.loadingText'"
    :locale="table.locale || 'en-US'"
    :mobile-breakpoint="table.mobileBreakpoint || 600"
    :multi-sort="table.multiSort || false"
    :must-sort="table.mustSort || false"
    :no-data-text="table.noDataText || '$vuetify.noDataText'"
    :no-results-text="table.noResultsText || '$vuetify.dataIterator.noResultsText'"
    :options="table.options || {}"
    :page="table.page || 1"
    :search="table.search"
    :selectable-key="table.selectableKey || 'isSelectable'"
    :server-items-length="table.serverItemsLength || -1"
    :show-expand="table.showExpand || false"
    :show-group-by="table.showGroupBy || false"
    :show-select="table.showSelect || false"
    :single-expand="table.singleExpand || false"
    :single-select="table.singleSelect || false"
    :sort-by="table.sortBy || []"
    :sort-desc="table.sortDesc || []"
    :value="table.value || []"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>{{ options.title }}</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              :color="options.btnColor || 'primary'"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              {{ options.btnText || 'Agregar item' }}
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <RedaForm
                @valid="setValid"
                v-model="editedItem"
                :options="options.form"
              ></RedaForm>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancelar
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
                :disabled="!valid"
              >
                Guardar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">¿Estás seguro de que quieres eliminar este artículo?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancelar</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">Aceptar</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        {{ options.editIcon || 'mdi-pencil' }}
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        {{ options.deleteIcon || 'mdi-delete' }}
      </v-icon>
    </template>
  </v-data-table>
</template>
<script>
  export default {
    props: [
      'table',
      'options',
      'value',
    ],
    data: () => ({
      dialog: false,
      dialogDelete: false,
      editedIndex: -1,
      editedItem: {},
      isMounted: false,
      valid: false,
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? this.options.newItemText : this.options.editItemText;
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.editedItem = Object.assign({}, this.options.defaultItem);
    },

    mounted() {
      this.isMounted = true;
    },

    methods: {
      setValid(value){
        this.valid = value;
      },
      initialize () {},

      editItem (item) {
        this.editedIndex = this.value.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.value.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        let tableValue = [...this.value]
        this.$emit('deleteItem', tableValue[this.editedIndex])
        tableValue.splice(this.editedIndex, 1)
        this.$emit('input', tableValue)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.options.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.options.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        let tableValue = [...this.value];
        if (this.editedIndex > -1) {
          this.$emit('updateItem', this.editedItem)
          Object.assign(tableValue[this.editedIndex], this.editedItem)
        } else {
          this.$emit('newItem', this.editedItem)
          tableValue.push(this.editedItem)
        }
        this.$emit('input', tableValue)
        this.close()
      },
    },
  }
</script>