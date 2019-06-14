export default {
  name: 'menu',
  title: 'Menú',
  type: 'document',
  fields: [
    {
      name: 'dish',
      title: 'Platillo',
      type: 'string'
    },
    {
      name: 'ingredients',
      title: '¿Qué contiene?',
      type: 'text'
    },
    {
      name: 'tagURL',
      title: 'Tag URL',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'available',
      title: 'En la carta',
      type: 'boolean',
      required: true
    },
    {
      name: 'imageFood',
      title: 'Image',
      type: 'image'
    },
    {
      name: 'imageUrl',
      title: 'Image URL',
      type: 'url'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'parents',
      title: 'Parent categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'category' }]
        }
      ]
    }
  ]
};
