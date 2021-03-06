export default {
  name: 'room',
  title: 'Habitaciones',
  type: 'document',
  fields: [
    {
      name: 'room',
      title: 'Habitación #:',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Tag URL',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'beds',
      title: 'Número de Camas:',
      type: 'number',
      required: true
    },
    {
      name: 'price',
      title: 'Precio (por noche)',
      type: 'string',
      required: true
    },
    {
      name: 'tv',
      title: 'TV',
      type: 'boolean',
      required: true
    },
    {
      name: 'balcony',
      title: 'Vista al Mar:',
      type: 'boolean',
      required: true
    },
    {
      name: 'imageRoom',
      title: 'Imagen Habitación',
      type: 'image'
    },
    {
      name: 'imageUrl',
      title: 'Image URL',
      type: 'url'
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'text'
    },
    {
      name: 'parents',
      title: 'Categorías',
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
