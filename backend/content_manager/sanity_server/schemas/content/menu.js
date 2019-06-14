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
      name: 'avaiable',
      title: 'Available',
      type: 'boolean',
      required: true
    },
    {
      title: 'Image URL',
      name: 'imageUrl',
      type: 'image'
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
