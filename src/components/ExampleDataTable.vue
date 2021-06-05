<template>
  <DataTableCRUD
    :table="table"
    :options="options"
    v-model="value"
  ></DataTableCRUD>
</template>
<script>

export default {
  name: 'ExampleDataTable',
  components: {
  },
  data: () => ({
    table:{
      dense: true,
    },
    options: {
      title: 'Postres',
      form: {
        submitText: 'Enviar',
        cancelText: 'Cancelar',
        inputs: [
          {
            id: '001',
            label: 'Nombre',
            name: 'name',
            value: 'name',
            type: 'text',
            rules: 'required',
            cols: 6,
          },
          {
            id: '002',
            label: 'Calorias',
            name: 'number',
            value: 'calories',
            type: 'number',
            rules: 'required|numeric',
            cols: 6,
          },
          {
            id: '003',
            label: 'Grasa',
            name: 'number',
            value: 'fat',
            type: 'number',
            rules: 'required|numeric',
            cols: 6,
          },
          {
            id: '004',
            label: 'Carbohidratos',
            name: 'number',
            value: 'carbs',
            type: 'number',
            rules: 'required|numeric',
            cols: 6,
          },
          {
            id: '005',
            label: 'Proteinas',
            name: 'number',
            value: 'protein',
            type: 'number',
            rules: 'required|numeric',
            cols: 6,
          },
          {
            id: '006',
            label: 'Minerales',
            name: 'minerals',
            value: 'minerals',
            type: 'table',
            table: {
              dense: true,
            },
            options: {
              headers: [
                { text: 'Fe (g)', value: 'fe' },
                { text: 'P (g)', value: 'sodio' },
                { text: 'K (g)', value: 'potasio' },
                { text: 'Actions', value: 'actions', sortable: false },
              ],
              defaultItem: {
                fe: 0,
                sodio: 0,
                potasio: 0,
              },
              form: {
                inputs: [
                  {
                    id: '001',
                    label: 'Fe',
                    name: 'fe',
                    value: 'fe',
                    type: 'number',
                    rules: 'required|numeric',
                    cols: 6,
                  },
                  {
                    id: '002',
                    label: 'P',
                    name: 'number',
                    value: 'sodio',
                    type: 'number',
                    rules: 'required|numeric',
                    cols: 6,
                  },
                  {
                    id: '003',
                    label: 'S',
                    name: 'number',
                    value: 'potasio',
                    type: 'number',
                    rules: 'required|numeric',
                    cols: 6,
                  },
                ],
              },
            },
            cols: 12,
          },
        ],
      },
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
        minerals: [
          { fe: 0, sodio: 0, potasio: 0, },
          { fe: 5, sodio: 56, potasio: 2, },
        ],
      },
    },
    value: [
      {
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        minerals: [
          { fe: 0, sodio: 0, potasio: 0, },
          { fe: 5, sodio: 56, potasio: 2, },
        ],
      },
      {
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        minerals: [
          { fe: 0, sodio: 0, potasio: 21, },
          { fe: 5, sodio: 56, potasio: 2, },
        ],
      },
      {
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        minerals: [
          { fe: 47, sodio: 0, potasio: 0, },
          { fe: 5, sodio: 56, potasio: 2, },
        ],
      },
      {
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        minerals: [
          { fe: 52, sodio: 0, potasio: 0, },
          { fe: 5, sodio: 56, potasio: 2, },
        ],
      },
      {
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        minerals: [
          { fe: 0, sodio: 45, potasio: 0, },
          { fe: 5, sodio: 56, potasio: 2, },
        ],
      },
      {
        name: 'Jelly bean',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        minerals: [
          { fe: 63, sodio: 0, potasio: 0, },
          { fe: 5, sodio: 56, potasio: 2, },
        ],
      },
      {
        name: 'Lollipop',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        minerals: [
          { fe: 45, sodio: 0, potasio: 0, },
          { fe: 5, sodio: 56, potasio: 2, },
        ],
      },
      {
        name: 'Honeycomb',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        minerals: [
          { fe: 60, sodio: 0, potasio: 0, },
          { fe: 5, sodio: 56, potasio: 2, },
        ],
      },
      {
        name: 'Donut',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        minerals: [
          { fe: 10, sodio: 0, potasio: 0, },
          { fe: 5, sodio: 56, potasio: 2, },
        ],
      },
      {
        name: 'KitKat',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        minerals: [
          { fe: 1, sodio: 0, potasio: 0, },
          { fe: 5, sodio: 56, potasio: 2, },
        ],
      },
    ],
  }),
}
</script>
